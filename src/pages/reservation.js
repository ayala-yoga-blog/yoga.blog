import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

export default ({ data, location }) => {
  let schedule_list = []
  const list_item = data.contentfulBlogPost.content.json.content.filter(
    item => item.nodeType === "unordered-list"
  )

  const accses_schedule = function () {
    for (let i = 0; i < list_item.length; i++) {
      list_item[i].content.filter(item =>
        item.content.filter(e =>
          e.content.filter(d => schedule_list.unshift(d.value))
        )
      )
    }
  }
  accses_schedule()
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
                <p className="mb-3">開催日程</p>
                <div className="checkbox-bk">
                  {schedule_list.reverse().map((d, idx) => {
                    return (
                      <div className="mt-2 mb-2">
                        <label htmlFor={idx}>
                          <input
                            type="checkbox"
                            id={idx}
                            name="interest"
                            value={idx}
                          />
                          {d}
                        </label>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="mt-7 mb-3">お名前</div>
              <label htmlFor="name">
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="text-form"
                  required
                />
              </label>
              <div className="mt-7 mb-3">フリガナ</div>
              <label htmlFor="furigana">
                <input
                  type="furigana"
                  name="furigana"
                  id="furigana"
                  className="text-form"
                  required
                />
              </label>
              <div className="mt-7 mb-3">電話番号</div>
              <label htmlFor="tel">
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  className="text-form"
                  required
                />
              </label>
              <div className="mt-7 mb-3">メールアドレス</div>
              <label htmlFor="mail">
                <input
                  type="mail"
                  name="mail"
                  id="mail"
                  className="text-form"
                  required
                />
              </label>
              <div className="mt-7 mb-3">メッセージ</div>
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
