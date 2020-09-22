import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"

import SEO from "../components/seo"

import { faUtensils, faCheckSquare } from "@fortawesome/free-solid-svg-icons"

export default ({ data, location }) => {
  return (
    <Layout>
      <SEO
        pagetitle="AYALAについて"
        pagedesc="YOGAについての情報を発信しているサイトです。"
        pagepath={location.pathname}
        pageimg={data.aya_icon.childImageSharp.original.src}
        pageimgw={data.aya_icon.childImageSharp.original.width}
        pageimgh={data.aya_icon.childImageSharp.original.height}
      />
      <div>
        <article className="content">
          <div className="container">
            <h1 className="bar">ABOUT LESSON</h1>
            <div className="postbody">
              <Img
                fluid={data.aya_icon.childImageSharp.fluid}
                alt=""
                style={{ height: "100%" }}
              />
              <h4>LESSON</h4>
              <p>
                体に必要不可欠な食べ物についての情報を発信しているサイトです。「おいしい食材をおいしく食べる」をモットーにしています。特に力を入れているのが、フルーツ、穀物、飲み物の３つです。
              </p>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    aya_icon: file(relativePath: { eq: "aya-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 482) {
          ...GatsbyImageSharpFluid_withWebp
        }
        original {
          src
          height
          width
        }
      }
    }
  }
`
