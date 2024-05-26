import { teachers } from "./data";


export async function GET() {
    return Response.json(teachers)
}