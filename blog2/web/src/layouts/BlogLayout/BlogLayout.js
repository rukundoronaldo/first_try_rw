import { Link, routes } from '@redwoodjs/router'
const BlogLayout = ({ children }) => {
  return <>
        <div>
          <h1><Link to={routes.home()}>Blog</Link></h1>
          <nav>
            <ul>
              <li><Link to={routes.about()}>about</Link></li>
              <li><Link to={routes.contact()}>contact</Link></li>
            </ul>
          </nav>
          <main>
            {children}
          </main>
        </div>
  </>
}

export default BlogLayout
