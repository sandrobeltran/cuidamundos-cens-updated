import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { getCookies } from "cookies-next"


export async function GET(req: NextApiRequest, res: Response){
    console.log("Getting csrf token")
    // console.log(req.cookies)
    return NextResponse.json({ csrfToken: getCookies({ req }).csrfToken })
}