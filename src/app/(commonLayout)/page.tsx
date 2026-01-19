import { userService } from "../services/user.service";



export default async function Home() {

  const {data} = await userService.getSession()
  console.log("Session data in home page:",data);


  return (
    <div className="flex min-h-screen items-center justify-center">

      <h1 className="text-4xl font-bold">Welcome to My Blog!</h1>
     
    </div>
  );
}
