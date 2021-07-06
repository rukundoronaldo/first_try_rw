import BlogPost from "../BlogPost/BlogPost"
export const QUERY = gql`
  query BlogpostsQuery {
    posts {
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

export const Success = ({ posts }) => {
  return (
    <ul>
      {posts.map((item) => {
        return <li key={item.id}>
          <BlogPost key={item.id} item={item}/>
        </li>
      })}
    </ul>
  )
}
