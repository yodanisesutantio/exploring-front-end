// import { users } from "@/app/users/route"
import { users } from "../users-data";


export async function GET(_request: Request, context: { params: { id: string }}) {
    const { id } = context.params;
    const user = users.find((user) => user.id === parseInt(id));
  
    if (!user) {
      return new Response("User not found", { status: 404 });
    }
  
    return Response.json(user);
  }
  