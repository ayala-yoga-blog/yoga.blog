import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          home
          about
          blog
          schedule
          instagram
          lesson
          homeUrl
          aboutUrl
          blogUrl
          scheduleUrl
          instagramUrl
          lessonUrl
        }
      }
    }
  `)
  return (
    <div className="meny-fiexd">
      <nav className="nav">
        <ul>
          <li>
            <Link to={data.site.siteMetadata.homeUrl}>
              {data.site.siteMetadata.home}
            </Link>
          </li>
          <li>
            <Link to={data.site.siteMetadata.aboutUrl}>
              {data.site.siteMetadata.about}
            </Link>
          </li>
          <li>
            <Link to={data.site.siteMetadata.blogUrl}>
              {data.site.siteMetadata.blog}
            </Link>
          </li>
          <li>
            <Link to={data.site.siteMetadata.scheduleUrl}>
              {data.site.siteMetadata.schedule}
            </Link>
          </li>
          <li>
            <Link to={data.site.siteMetadata.instagramUrl}>
              {data.site.siteMetadata.instagram}
            </Link>
          </li>
          <li>
            <Link to={data.site.siteMetadata.lessonUrl}>
              {data.site.siteMetadata.lesson}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
