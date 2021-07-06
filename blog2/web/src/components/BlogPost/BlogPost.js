import { Link, routes } from "@redwoodjs/router"
const BlogPost = ({ item}) => {
  return (
    <div>
          <h3><Link to={routes.blogPost({ id: item.id})} >{item.title}</Link> </h3>
          <p>{item.body}</p>
          <p>{item.ceatedAt}</p>
    </div>
  )
}

export default BlogPost
