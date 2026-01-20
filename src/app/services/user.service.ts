import { env } from "@/env";
import { cookies } from "next/dist/server/request/cookies";



const AUTH_URL = env.AUTH_URL;
export const userService = {
    getSession: async function() {

        try {
            

  const cookieStore = await cookies();
  console.log(cookieStore);

  const res = await fetch(`${AUTH_URL}/get-session`,{
    headers: {
      cookie: cookieStore.toString()
    },
    cache: 'no-store'
  });
const session =await res.json();
console.log("Session from server:",session);


if(session===null){
    return {data:null,error:{message:"No session data"}};
  
}


    return {data:session,error:null};

        } catch (error) {
            console.error("Error fetching session:", error);
            return {data:null,error:{message:"Failed to fetch session"}};
        }
       
    }
};