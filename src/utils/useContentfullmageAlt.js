import { useStaticQuery, graphql } from "gatsby"

export default assetAlt => {
  const { allContentfulAsset } = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        nodes {
          contentful_id
          description
          fluid(maxWidth: 785) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `)

  return allContentfulAsset.nodes.find(n => n.contentful_id === assetAlt)
    .description
}
