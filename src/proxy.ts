import { NextRequest, NextResponse } from "next/server"
import { userService } from "./app/services/user.service";

export async function proxy(request: NextRequest) {

let isAuthenticated=false;
let isAdmin=false;


    const {data}=await userService.getSession();

    if (data) {
        isAuthenticated = true;
        isAdmin=data.user.role==="ADMIN"
    }
    console.log(data);
    
    return NextResponse.next();
}
   


    export const config = {
        matcher: ["dashboard"],
}
