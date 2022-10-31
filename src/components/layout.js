import React, { useState } from "react"

import Logo_header from "../components/logo-header"
import Footer from "../components/footer"
import Meny from "../components/meny"

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
        <div className="meny-box d-none">
          <Meny />
        </div>
        <div className="main-content">{children}</div>
      </div>
      <Footer />
    </div>
  )
}
