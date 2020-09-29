import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"

import SEO from "../components/seo"

import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import useContentfulImage from "../utils/useContentfullmage"
import useContentfulImageAlt from "../utils/useContentfullmageAlt"

const options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, Children) => (
      <h2>
        <FontAwesomeIcon icon={faCheckSquare} />
        {Children}
      </h2>
    ),
    [BLOCKS.EMBEDDED_ASSET]: node => (
      <Img
        fluid={useContentfulImage(node.data.target.sys.contentful_id)}
        alt={
          useContentfulImageAlt(node.data.target.sys.contentful_id)
          // ? useContentfulImageAlt(node.data.target.sys.contentful_id)
          // : node.data.target.fields.title["ja-JP"]
        }
      />
    ),
  },
  renderText: text => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment]
    }, [])
  },
}

export default ({ data, location }) => {
  const test = data.contentfulBlogPost.content.json
  console.log(test)
  return (
    <Layout>
      <SEO
        pagetitle="AYALAについて"
        pagedesc="YOGAについての情報を発信しているサイトです。"
        pagepath={location.pathname}
      />
      <div>
        <article className="content">
          <div className="container">
            <h1 className="bar">SCHEDULE</h1>
            <div className="postbody schedule-content">
              {documentToReactComponents(
                data.contentfulBlogPost.content.json,
                options
              )}
            </div>
            <div className="button button_sc">
              <Link to={`/blog/`}>
                <div className="button-ac">レッスンのご予約はこちら</div>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulBlogPost(title: { eq: "開催スケジュール" }) {
      title
      content {
        json
      }
    }
  }
`
