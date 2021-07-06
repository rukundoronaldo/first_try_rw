import BlogPost from "src/components/BlogpostCell"
import BlogLayout from "src/layouts/BlogLayout/BlogLayout"

const BlogPostPage = ( {id} ) => {
  return (
    <>
    <BlogLayout>
      <BlogPost id={id} />
    </BlogLayout>
    </>
  )
}

export default BlogPostPage
