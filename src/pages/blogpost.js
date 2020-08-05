import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import useContentfulImage from "../utils/useContentfullmage"
import useContentfulImageAlt from "../utils/useContentfullmageAlt"

// import SEO from "../components/seo"

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

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <div className="eyecatch">
          <figure>
            <Img
              fluid={data.contentfulBlogPost.eyecatch.fluid}
              alt={data.contentfulBlogPost.eyecatch.description}
            />
          </figure>
        </div>
        <article className="content">
          <div className="container">
            <h1 className="bar">{data.contentfulBlogPost.title}</h1>
            <aside className="info">
              <time dateTime={data.contentfulBlogPost.publishData}>
                <i className="far fa-clock" />
                {data.contentfulBlogPost.publishDataJP}
              </time>
              <div className="cat">
                <i className="far fa-folder-open" />
                <ul>
                  {data.contentfulBlogPost.category.map(cat => (
                    <li className={cat.categorySlug} key={cat.id}>
                      {cat.category}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            <div className="postbody">
              {documentToReactComponents(
                data.contentfulBlogPost.content.json,
                options
              )}
            </div>
            <ul className="postlink">
              <li className="prev">
                <a href="base-blogpost.html" rel="prev">
                  <i className="fas fa-chevron-left" />
                  <span>前の記事</span>
                </a>
              </li>
              <li className="next">
                <a href="base-blogpost.html" rel="next">
                  <span>次の記事</span>
                  <i className="fas fa-chevron-right" />
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulBlogPost {
      title
      publishDataJP: publishData(formatString: "YYYY年MM月DD日")
      publishData
      category {
        category
        categorySlug
        id
      }
      eyecatch {
        fluid(maxWidth: 1600) {
          ...GatsbyContentfulFluid_withWebp
        }
        description
      }
      content {
        json
      }
    }
    contentfulAsset {
      file {
        url
        fileName
        contentType
      }
    }
  }
`
