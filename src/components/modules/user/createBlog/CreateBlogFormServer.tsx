import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function CreateBlogFormServer() {
  return (
   <Card>
<CardHeader>
    <CardTitle>Create Blog</CardTitle>
    <CardDescription>
        you can write your blog here
    </CardDescription>
</CardHeader>
<CardContent>
    <form>

    </form>
</CardContent>
<CardFooter>
    <Button type="submit">submit</Button>
</CardFooter>
   </Card>
  )
}
