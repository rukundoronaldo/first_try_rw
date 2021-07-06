import BlogPost from "../BlogPost/BlogPost"

export const QUERY = gql`
  query FindBlogpostQuery($id: Int!) {
    post: post(id: $id) {
      id
      title
      body
      ceatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ post }) => {
  return <div><BlogPost item={post}/>
  </div>
}
