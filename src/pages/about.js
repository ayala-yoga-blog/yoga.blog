import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import SEO from "../components/seo"

export default ({ data, location }) => {
  return (
    <Layout>
      <SEO
        pagetitle="Aya'sについて"
        pagedesc="vinyasa yoga / yin yogaのレッスンサイトになります。"
        pagepath={location.pathname}
      />
      <div>
        <article className="content">
          <div className="container">
            <h1 className="bar">ABOUT LESSON</h1>
            <div className="postbody content-box-about">
              <div className="about-icon">
                <figure>
                  <Img
                    fluid={data.aya_icon.childImageSharp.fluid}
                    alt=""
                    style={{ height: "100%" }}
                  />
                </figure>
              </div>
              <div className="about-text">
                <h4>LESSON</h4>
                <p>
                  ある程度は呼吸の流れに合わせる事に慣れるまで、実践を重ねます。
                  色んな事に意識を置く事をします。あらゆるポーズを呼吸に合わせて行います。
                  その流れに身を委ねる事をします。辛いと感じるポーズもあります。
                  上善如水という言葉がありますが、私はヴィンヤサヨガの実践はまさにこの言葉に当てはまると思っています。
                  水はどんな器にも柔軟に対応し、低い場所に身をとどめ、様々な姿に変化しながらも、その特性や性質を失うことがありません。
                  アーサナ(ポーズ)は、自分の置かれた立場状況の中で、心が流される事なく、より強く、凛と振る舞うすべを教えてくれます。
                  そして、それをコントロールする1番のツールが呼吸であり、そこに重点を置きたいと思っています。
                </p>
                <h4 className="mt-10">LESSON POINT</h4>
                <p>
                  人はそれぞれ人生経験も、骨格も、呼吸の質も異なっていて、個々の健康な状態とは計り知れず、それぞれご自身が、本来内側に秘め持つ幸福な状態を引き出すお手伝いをする事を第一に、安定した呼吸を拠り所にしていくすべをお伝えしたいと日々思っています。
                  たくさんアーサナをとって調節、発汗を促したとしても、その手段を通して最後には、静かに座る時間を設け、マインドが中心にある事を確認する、あるいはそこに戻してくる事が一番重要なのだと、レッスン内の１秒でもいいのでそう思っていただける様に努めています。
                </p>
              </div>
            </div>
          </div>

          <div className="container mt-9">
            <h1 className="bar">ABOUT ME</h1>
            <div className="postbody content-box-about">
              <div className="about-icon">
                <figure>
                  <Img
                    fluid={data.profile.childImageSharp.fluid}
                    alt=""
                    style={{ height: "100%" }}
                  />
                </figure>
              </div>
              <div className="about-text">
                <h4>ツジモト アヤ</h4>
                <p>
                  中道を行き、生活幸福度の向上、私はこのためにヨガを実践しております。
                </p>
                <h4 className="mt-10">ヴィオラトリコロ−ルにて</h4>
                <p>2010年全米ヨガアライアンス200時間取得</p>
                <h4 className="mt-10">アンダーザライトヨガスタジオにて</h4>
                <p>
                  2012年ヨガアライアンス認定サラパワーズインサイトヨガTT取得
                </p>
                <p>
                  2013年サラパワーズ陰ヨガ、インサイトヨガインテンシィブコース10時間終了
                </p>
                <p>
                  2014年サラパワーズ陰ヨガ、インサイトヨガインテンシィブコース20時間終了
                </p>
                <p>
                  2016年サラパワーズ陰ヨガ、インサイトヨガインテンシィブコース15時間終了
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    aya_icon: file(relativePath: { eq: "aya_icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 482) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    profile: file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 482) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
  }
`
