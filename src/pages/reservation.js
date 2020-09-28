import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

export default ({ data, location }) => {
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
            <h1 className="bar mb-0">レッスンご予約</h1>
            <div className="postbody">
              <p className="mb-0">
                こちらからの返信を持ちまして申込み完了となります。
                <br />
                1週間以内に返信が無い場合は、下記アドレスまでご連絡下さいませ。
              </p>
              <p>ayazonyoga@gmail.com</p>
            </div>

            <form name="contact" method="post" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <p>開催日程</p>
                <div className="checkbox-bk">
                  <div>
                    <input
                      type="checkbox"
                      id="coding"
                      name="interest"
                      value="coding"
                    />
                    <label for="coding">コーディング</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="music"
                      name="interest"
                      value="music"
                    />
                    <label for="music">音楽</label>
                  </div>
                </div>
              </div>
              <p>
                <label>
                  Your Email: <input type="email" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message"></textarea>
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        </article>
      </div>
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     contentfulBlogPost(title: { eq: "開催スケジュール" }) {
//       title
//       content {
//         json
//       }
//     }
//   }
// `
