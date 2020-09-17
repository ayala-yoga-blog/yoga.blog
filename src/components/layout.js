import React, { useState } from "react"

import Header from "../components/header"
import Logo_header from "../components/logo-header"
import Footer from "../components/footer"
import MediaQuery from "react-responsive"

import "./layout.css"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export default ({ children }) => {
  const [open, setOpen] = useState(false)
  const home = useState("Home")
  // const about = useState("About")
  // const blog = useState("Blog")
  // const schedule = useState("Schedule")

  return (
    <div>
      <Logo_header open={open} setOpen={setOpen} home={home} />
      <MediaQuery query="(max-width: 767px)">tt</MediaQuery>
      <MediaQuery query="(min-width: 767px)">tt</MediaQuery>
      <div>{children}</div>
      <Footer />
    </div>
  )
}
