import React, { useState } from "react"

// import Header from "../components/header"
import Logo_header from "../components/logo-header"
import Footer from "../components/footer"
import Meny from "../components/meny"
import MediaQuery from "react-responsive"

import "./layout.css"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export default ({ children }) => {
  const [open, setOpen] = useState(false)
  const home = useState("Home")

  return (
    <div className="wrapper">
      <Logo_header open={open} setOpen={setOpen} home={home} />
      <div className="content-box">
        <MediaQuery query="(min-width: 1024px)">
          <div className="meny-box">
            <Meny />
          </div>
        </MediaQuery>
        <div className="main-content">{children}</div>
      </div>
      <Footer />
    </div>
  )
}
