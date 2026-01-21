import { env } from "@/env"

interface GetBlogParams{
isFeatured?: boolean,
search?:string,

}

interface ServiceOption{
    cache?:RequestCache
    revalidate?: number
}

export const API_URL =env.API_URL

export const blogService={
    getBlogPosts: async function (params?:GetBlogParams,option?:ServiceOption){
       

        try {
const url =new URL(`${API_URL}/posts`)

            if (params) {
               Object.entries(params).forEach(([key,value]) =>{

if (value!== undefined && value !== null && value !== " ") {
    url.searchParams.append(key,value);
}


   } )
            }

            const config:RequestInit={};

            if (option?.cache) {
                config.cache=option.cache
            }

            if (option?.revalidate){
                config.next={revalidate:option.revalidate}
            }
           
// url.searchParams.append("key","value")
const res=await fetch(url.toString(),config)

            const data =await res.json()
            return {data:data ,error:null} ;

        } catch (err) {
            return {date : null,error: {message:"something wrong"}}
        }

    }
}