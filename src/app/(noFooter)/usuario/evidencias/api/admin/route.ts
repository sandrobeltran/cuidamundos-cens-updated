import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse, IPaginatedResponse } from "@/middleware";
import adminRequired from "@/middlewares/adminRequired";
import Evidence from "@/models/Evidence";
import getCustomError from "@/utils/getCustomError";
import { PipelineStage } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  adminRequired(req);
  await mongodbConnect();

  const limit = req.nextUrl.searchParams.get("limit");
  const page = req.nextUrl.searchParams.get("page");
  const id = req.nextUrl.searchParams.get("id") || "";

  try {
    const limittedPipeline: any[] = [
      {
        $project: {
          submissions: 0,
        },
      },
    ];

    if (id) {
      limittedPipeline.unshift({
        $match: { _id: id },
      });
    }

    // Add pagination to the aggregation pipeline
    if (limit && page) {
      const skip = (parseInt(page) - 1) * parseInt(limit);
      limittedPipeline.push({ $skip: skip });
      limittedPipeline.push({ $limit: parseInt(limit) });
    }

    const aggregationPipeline: PipelineStage[] = [
      {
        $facet: {
          results: limittedPipeline,
          totalCount: [{ $count: "total" }],
        },
      },
    ];

    const evidences = await Evidence.aggregate(aggregationPipeline);

    const results = evidences[0].results;
    const totalCount =
      evidences[0].totalCount.length > 0 ? evidences[0].totalCount[0].total : 0;

    return NextResponse.json<IPaginatedResponse>({
      status: "success",
      message: "Actividades obtenidas con éxito",
      data: {
        results,
        metadata: {
          total: totalCount,
          currentPage: page ? parseInt(page) : 1,
          totalPages: limit ? Math.ceil(totalCount / parseInt(limit)) : 1,
        },
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json<ICustomResponse>(
      {
        status: "error",
        message: getCustomError(error).message,
      },
      { status: 400 },
    );
  }
}

export async function POST(req: NextRequest) {
  adminRequired(req);
  await mongodbConnect();
  const body = await req.json();

  try {
    //? In this point the middleware has validated the admin key
    const evidence = new Evidence(body);
    await evidence.save();

    return NextResponse.json<ICustomResponse>({
      status: "success",
      message: "Evidencia creada con éxito",
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: getCustomError(error).message },
      { status: 400 },
    );
  }
}
