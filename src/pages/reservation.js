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
                    <label htmlFor="coding">
                      <input
                        type="checkbox"
                        id="coding"
                        name="interest"
                        value="coding"
                      />
                      コーディング
                    </label>
                  </div>
                  <div>
                    <label htmlFor="music">
                      <input
                        type="checkbox"
                        id="music"
                        name="interest"
                        value="music"
                      />
                      音楽
                    </label>
                  </div>
                </div>
              </div>
              <div>お名前</div>
              <label htmlFor="name">
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="text-form"
                  required
                />
              </label>
              <div>フリガナ</div>
              <label htmlFor="furigana">
                <input
                  type="furigana"
                  name="furigana"
                  id="furigana"
                  className="text-form"
                  required
                />
              </label>
              <div>電話番号</div>
              <label htmlFor="tel">
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  className="text-form"
                  required
                />
              </label>
              <div>メールアドレス</div>
              <label htmlFor="mail">
                <input
                  type="mail"
                  name="mail"
                  id="mail"
                  className="text-form"
                  required
                />
              </label>
              <div>メッセージ</div>
              <label htmlFor="text">
                <textarea
                  name="message"
                  id="text"
                  required
                  className="text-form"
                ></textarea>
              </label>
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
