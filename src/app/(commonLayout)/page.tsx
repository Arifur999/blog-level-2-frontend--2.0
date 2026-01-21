import { blogService } from "@/services/blog.service";



export default async function Home() {

  const {data} = await blogService.getBlogPosts(
    {
    isFeatured:true,
  
    }
  ,{
    cache :"no-cache"
  })
 


  return (
    <div className="flex min-h-screen items-center justify-center">

      <h1 className="text-4xl font-bold">Welcome to My Blog!</h1>
     
    </div>
  );
}
