import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { HomeSection } from "../components/styled"
import tw from "twin.macro"
import "twin.macro"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <HomeSection tw="flex justify-center">
      <div tw="text-center">
        <h1 tw="text-5xl font-tmono">404!</h1>
        <p>Oh no! This page doesn't exist.</p>
        <p>Check the URL that got you here.</p>
      </div>
    </HomeSection>
  </Layout>
)

export default NotFoundPage
