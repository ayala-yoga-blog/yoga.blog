import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MediaQuery from "react-responsive"

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
  return (
    <Layout>
      <SEO
        pagetitle="vinyasa yoga / yin yogaのレッスンスケジュール"
        pagedesc="vinyasa yoga / yin yogaのレッスンスケジュール"
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
            <MediaQuery query="(min-width: 600px)">
            <div className="mt-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.366606506817!2d135.50925111502303!3d34.670695792332666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e747516d5fcb%3A0x64152419b068c987!2z44CSNTQyLTAwNjYg5aSn6Ziq5bqc5aSn6Ziq5biC5Lit5aSu5Yy655Om5bGL55S677yS5LiB55uu77yR77yW4oiS77yUIOiNkuW3neODk-ODqyAy6ZqO!5e0!3m2!1sja!2sjp!4v1602417636059!5m2!1sja!2sjp" width={580} height={250} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" title="map"/>
            </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 600px)">
              <div className="mt-4 text-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.366606506817!2d135.50925111502303!3d34.670695792332666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e747516d5fcb%3A0x64152419b068c987!2z44CSNTQyLTAwNjYg5aSn6Ziq5bqc5aSn6Ziq5biC5Lit5aSu5Yy655Om5bGL55S677yS5LiB55uu77yR77yW4oiS77yUIOiNkuW3neODk-ODqyAy6ZqO!5e0!3m2!1sja!2sjp!4v1602417636059!5m2!1sja!2sjp" width={250} height={250} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" title="map"/>
              </div>
            </MediaQuery>
            <div className="button button_sc">
              <Link to={`/reservation/`}>
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
