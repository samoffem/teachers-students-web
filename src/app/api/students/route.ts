import { students } from "./data";

export async function GET(){
    return Response.json(students)
}