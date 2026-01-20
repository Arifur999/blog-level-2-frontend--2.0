import { blogService } from "@/services/blog.service";
import { userService } from "../../services/user.service";



export default async function Home() {

  const {data} = await blogService.getBlogPosts()
  console.log("Session data in home page:",data);


  return (
    <div className="flex min-h-screen items-center justify-center">

      <h1 className="text-4xl font-bold">Welcome to My Blog!</h1>
     
    </div>
  );
}
