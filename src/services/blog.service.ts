import { env } from "@/env"



export const API_URL =env.API_URL

export const blogService={
    getBlogPosts: async function (){

        try {

            const res = await fetch (`${API_URL}/posts`);
            const data =await res.json()
            return {data:data ,error:null} ;

        } catch (err) {
            return {date : null,error: {message:"something wrong"}}
        }

    }
}