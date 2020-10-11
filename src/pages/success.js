import React from "react"

import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <div className="success-content">
        <div>
          {" "}
          <p className="success-title">お申込みありがとうございました。</p>
          <p>1週間以内にご案内メールを送らせて頂きます。</p>
          <p className="mb-6">
            万が一、届いていない場合は、お手数ですが下記までご連絡くださいませ。
          </p>
          <p>ayazonyoga@gmail.com</p>
        </div>
      </div>
    </Layout>
  )
}
