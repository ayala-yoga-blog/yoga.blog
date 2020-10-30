import React from "react"
import MediaQuery from "react-responsive"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

export default ({ open, setOpen, home }) => {
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
    <div className="top">
      <div className="color-bar top"></div>
      <div>
        <div className="company-logo">ayala</div>
        <div className="company-logo_subtitle">vinyasa yoga / yin yoga</div>
        <MediaQuery query="(max-width: 1024px)">
          <div id="nav-area">
            <div id="nav-content" aria-expanded={open}>
              <div className="inner">
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
              </div>
            </div>

            <button
              className="toggle-btn"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span aria-expanded={open}></span>
              <span aria-expanded={open}></span>
              <span aria-expanded={open}></span>
            </button>

            <div id="mask" aria-expanded={open}></div>
          </div>
        </MediaQuery>
      </div>
    </div>
  )
}
