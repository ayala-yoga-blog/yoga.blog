import React from "react"
import { graphql } from "gatsby"
import { useForm } from "react-hook-form"

import Layout from "../components/layout"

import SEO from "../components/seo"

export default ({ data, location }) => {

  const { register, handleSubmit, errors } = useForm()

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

            <form
              name="test2"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thankyou"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input type="hidden" name="form-name" value="test2" />
              <div>
                <p className="mb-3">開催日程</p>
                <div className="checkbox-bk mb-7">
                  {schedule_list.reverse().map((d, idx) => {
                    return (
                      <div className="mt-2 mb-2" key={idx}>
                        <input type="checkbox" id={idx} name={idx} value={d}/>
                        <label htmlFor={idx}>{d}</label>
                      </div>
                    )
                  })}
                </div>
              </div>
              <label htmlFor="name" className={`${errors.name && 'error-font'}`}>
                お名前
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`text-form mt-3 ${errors.name && 'error-input'}`}
                  ref={register({ required: '必ず入力してください', maxLength:{value:20,message:'20文字以内で入力してください'} })}
                />
              </label>
              {errors.name && <div className='error-font error-size'>※{errors.name.message}</div>}
              <div className="mb-7"></div>
              <label htmlFor="furigana" className={`${errors.furigana && 'error-font'}`}>
                フリガナ
                <input
                  type="text"
                  name="furigana"
                  id="furigana"
                  className={`text-form mt-3 ${errors.furigana && 'error-input'}`}
                  ref={register({
                    required: "必ず入力してください",
                    pattern: {
                      value: /^[ァ-ンヴー]*$/,
                      message: "カタカナで入力してください",
                    },
                  })}
                />
              </label>
              {errors.furigana && <div className='error-font error-size'>※{errors.furigana.message}</div>}
              <div className="mb-7"></div>
              <label htmlFor="tel" className={`${errors.tel && 'error-font'}`}>
                電話番号
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  className={`text-form mt-3 ${errors.tel && 'error-input'}`}
                  ref={register({
                    required: "必ず入力してください",
                    pattern: {
                      value: /^[0-9]+$/g,
                      message: "半角数字で入力してください",
                    },
                  })}
                />
              </label>
              {errors.tel && <div className='error-font error-size'>※{errors.tel.message}</div>}
              <div className="mb-7"></div>

              <label htmlFor="mail" className={`${errors.email && 'error-font'}`}>
                メールアドレス
                <input
                  type="email"
                  name="email"
                  id="mail"
                  className={`text-form mt-3 ${errors.email && 'error-input'}`}
                  ref={register({
                    required: "必ず入力してください",
                    pattern: {
                      value: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
                      message: "正しいメールアドレスを入力してください",
                    },
                  })}
                />
              </label>
              {errors.email && <div className='error-font error-size'>※{errors.email.message}</div>}
              <div className="mb-7"></div>
              <label htmlFor="text">
                メッセージ
                <textarea
                  name="message"
                  id="text"
                  className="text-form mt-3"
                ></textarea>
              </label>
              <button type="submit" className="button button_sc">
                <div>ご予約送信</div>
              </button>
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
