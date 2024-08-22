import { NextRequest, NextResponse } from "next/server";
import { getCookies } from "cookies-next"


export async function GET(req: NextRequest, res: Response){
    console.log("Getting csrf token")
    console.log(getCookies({req}))
    return NextResponse.json({ csrfToken: getCookies({ req }).csrfToken })
}