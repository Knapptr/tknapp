import Layout from "../components/layout"
import {
  Button,
  Container,
  Header,
  ExtNavLink,
  DivideHR,
  ContentBounds,
  Text,
} from "../components/styled"
import "twin.macro"
import React from "react"
import { Helmet } from "react-helmet"

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact-Tknapp</title>
        <meta name="description" content="Contact me! <knapptr@gmail.com>" />
      </Helmet>
      <Layout>
        <ContentBounds>
          <Container tw="py-6 bg-secondary-fill">
            <Header tw="text-center md:text-left mb-8">Contact Me</Header>
            <div tw="flex justify-around gap-8 max-w-4xl mx-auto flex-col md:flex-row items-center">
              <div tw="max-w-md">
                <Text>
                  I'm open to new developoment opportunties!
                  <br /> Just looking to chat about code, synthesizers, or to
                  argue over the best episode of <em>TNG</em>?{" "}
                  <span tw="text-xs">
                    (It's <em>Who Watches the Watchers</em> tied with{" "}
                    <em>Darmok</em>.)
                  </span>
                </Text>
                <Text>I'd love to hear from you. Reach out!</Text>
              </div>
              <ul tw="font-tmono flex gap-3 md:gap-8 flex-row flex-wrap justify-center md:flex-col   ">
                <li tw="flex-col flex items-center">
                  <ExtNavLink href="mailto:knapptr@gmail.com">Email</ExtNavLink>
                  <p>Knapptr@gmail.com</p>
                </li>
                <li tw="flex-col flex items-center">
                  <ExtNavLink
                    target="_blank"
                    href="https://twitter.com/moosehands"
                  >
                    Twitter
                  </ExtNavLink>
                  <p>@Moosehands</p>
                </li>{" "}
                <li tw="flex-col flex items-center">
                  <ExtNavLink target="_blank" href="https://github.com/knapptr">
                    Github
                  </ExtNavLink>
                  <p>Knapptr</p>
                </li>
              </ul>
            </div>
          </Container>
        </ContentBounds>
      </Layout>
    </>
  )
}

export default ContactPage
