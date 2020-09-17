import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <Link to={`/`}>HOME</Link>
          </li>
          <li>
            <Link to={`/about/`}>ABOUT</Link>
          </li>
          <li>
            <Link to={`/blog/`}>BLOG</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
