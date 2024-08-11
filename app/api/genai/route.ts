import { StreamingTextResponse } from "ai";

export async function POST(req:Request, res:Response) {
    /* return new StreamingTextResponse() */
    const reqBody = await req.json();
    console.log(reqBody);
}