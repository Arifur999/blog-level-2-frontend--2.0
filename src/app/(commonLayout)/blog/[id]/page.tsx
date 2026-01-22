

export default async function BlogPage({
    params
}:{
    params :Promise<{id:string}>
}) {

    const {id} =await params
  return (
    <div>its blog dynamic  page {id}</div>
  )
}
