import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { env } from "@/env";
import { revalidateTag, updateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



const API_URL=env.API_URL
export default function CreateBlogFormServer() {

const createBlog = async(formData : FormData)=>{
"use server";

const title =formData.get("title")as string;
const content =formData.get("content") as string;
const tags =formData.get("tags")as string;



const blogData={
    title,
    content,
    tags:tags.split(",").map((item)=>item.trim()).filter((item)=>item!== "")
};

const cookieStore=cookies()

const res =await fetch(`${API_URL}/posts`,{
method:"POST",
headers:{
    "Content-type":"application/json",
    Cookie:cookieStore.toString(),
},
body:JSON.stringify(blogData)

});


console.log(res)
if(res.ok){
    revalidateTag("blogPosts","max");

// or

    // updateTag("blogPosts")
}

};



  return (
   <Card>
<CardHeader>
    <CardTitle>Create Blog</CardTitle>
    <CardDescription>
        you can write your blog here
    </CardDescription>
</CardHeader>
<CardContent>
    <form id="blog-form" action={createBlog}>
<FieldGroup>
<Field>
    <FieldLabel>Title</FieldLabel>
    <Input id="title" type="text" name="title"/>
  
</Field>
<Field>
    <FieldLabel>Content</FieldLabel>
    <Input id="content" type="text" name="content"/>
  
</Field>
<Field>
    <FieldLabel>Tags</FieldLabel>
    <Input id="tags" type="text" name="tags"/>
  
</Field>

</FieldGroup>
    </form>
</CardContent>
<CardFooter>
    <Button form="blog-form" type="submit">submit</Button>
</CardFooter>
   </Card>
  )
}
