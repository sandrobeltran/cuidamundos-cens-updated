import { ICustomResponse } from "@/middleware";
import Evidence from "@/models/Evidence";
import { IEvidence } from "@/utils/customTypes";
import getCustomError from "@/utils/getCustomError";
import { validateUserToken } from "@/utils/validateUserToken";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: { params: any }) {
  const { headers } = req;
  const evidenceId = context.params.id;
  const body = await req.json();

  try {
    const { uid } = validateUserToken(headers);

    const evidence = await Evidence.findById(evidenceId);
    if (!evidence) {
      return NextResponse.json(
        {
          status: "error",
          message: "La evidencia no existe o ha sido eliminada",
        },
        { status: 404 },
      );
    }

    const newComment = {
      _id: new Date().getTime(),
      author: uid,
      content: body.content,
    };

    const updatedEvidence = await Evidence.findByIdAndUpdate(
      evidenceId,
      { $push: { comments: newComment } },
      { new: true },
    );

    return NextResponse.json<ICustomResponse>({
      status: "success",
      message: "Comentario publicado con éxito",
      data: updatedEvidence.comments,
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: getCustomError(error).message },
      { status: 400 },
    );
  }
}

export async function DELETE(req: NextRequest, context: { params: any }) {
  const { headers } = req;
  const evidenceId = context.params.id;
  const body = await req.json();

  try {
    const { uid } = validateUserToken(headers);

    const commentId = body.commentId;
    if (!commentId) {
      return NextResponse.json(
        { status: "error", message: "La petición está mal formada" },
        { status: 400 },
      );
    }

    const evidence = (await Evidence.findById(evidenceId)) as IEvidence;
    if (!evidence) {
      return NextResponse.json(
        {
          status: "error",
          message: "La evidencia no existe o ha sido eliminada",
        },
        { status: 404 },
      );
    }

    const comment = evidence.comments.find(
      (comment) => comment._id === commentId,
    );

    if (comment?.author !== uid) {
      return NextResponse.json(
        {
          status: "error",
          message: "No tienes permisos para hacer esta aciión",
        },
        { status: 403 },
      );
    }

    const commentIndex = evidence.comments.findIndex(
      (comment) => comment._id === commentId,
    );

    const commentsCopy = [...evidence.comments];
    commentsCopy.splice(commentIndex, 1);

    const updatedEvidence = await Evidence.findByIdAndUpdate(
      evidenceId,
      { comments: commentsCopy },
      { new: true },
    );

    return NextResponse.json<ICustomResponse>({
      status: "success",
      message: "Comentario publicado con éxito",
      data: updatedEvidence.comments,
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: getCustomError(error).message },
      { status: 400 },
    );
  }
}
