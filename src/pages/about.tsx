import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import {
  Container,
  ColContainer,
  DivideHR,
  FloatFrame,
  Header,
  Text,
  ExtNavLink,
  NavLink,
  EmojiBullet,
  FlexUL,
  ContentBounds,
} from "../components/styled"
import "twin.macro"
import React from "react"

const AboutPage = () => {
  return (
    <Layout>
      <ContentBounds>
        <Container tw="py-6 bg-secondary-fill">
          <Header>About Me</Header>
          <DivideHR />
          <div tw="flex  flex-col md:flex-row  md:items-start lg:items-center  gap-10 ">
            <div tw="order-2 md:order-none">
              <Text>
                <strong>
                  I'm Tyler Knapp, a web developer, summer camp director, and
                  musician.{" "}
                </strong>
              </Text>
              <FlexUL>
                <li>
                  <EmojiBullet>💾</EmojiBullet>
                  <Text>
                    I enjoy working with{" "}
                    <ExtNavLink href="http://nodejs.org" target="_blank">
                      Node
                    </ExtNavLink>
                    ,{" "}
                    <ExtNavLink href="https://expressjs.com/" target="_blank">
                      Express
                    </ExtNavLink>{" "}
                    <ExtNavLink href="https://javascript.com" target="_blank">
                      Javascript
                    </ExtNavLink>
                    , and{" "}
                    <ExtNavLink href="https://reactjs.org" target="_blank">
                      React
                    </ExtNavLink>
                    . Most recently I've started to learn{" "}
                    <ExtNavLink
                      href="http://typescriptlang.org"
                      target="_blank"
                    >
                      Typescript
                    </ExtNavLink>{" "}
                    and{" "}
                    <ExtNavLink href="http://www.python.org" target="_blank">
                      Python
                    </ExtNavLink>
                    . I love creating purpose-built applications and tools. I
                    built this page while learning to work with{" "}
                    <ExtNavLink href="http://gatsbyjs.com" target="_blank">
                      Gatsby
                    </ExtNavLink>
                    .
                  </Text>
                </li>
                <li>
                  <EmojiBullet> 🏕️</EmojiBullet>
                  <Text>
                    ️ I am the director over at{" "}
                    <ExtNavLink href="http://campleslie.org" target="_blank">
                      Camp Leslie
                    </ExtNavLink>
                    , a Summer camp for youth aged 7-15.
                  </Text>
                </li>
                <li>
                  <EmojiBullet>🎹</EmojiBullet>
                  <Text>
                    I make ambient music and noodles as{" "}
                    <ExtNavLink
                      href="http://conePHL.bandcamp.com"
                      target="_blank"
                    >
                      cone
                    </ExtNavLink>
                    , and put other types of sounds up on my{" "}
                    <ExtNavLink
                      target="_blank"
                      href="http://soundcloud.com/knappt"
                    >
                      soundcloud
                    </ExtNavLink>
                    . I love Synthesizers, drum machines and samplers.
                  </Text>
                </li>
                <li tw="items-center md:items-start">
                  <EmojiBullet tw="content-center items-center">
                    <div>🏄</div>
                    <div>🎲</div>
                    <div>🚲</div>
                  </EmojiBullet>
                  <Text>
                    If you've looked everywhere else, you'll find me riding or
                    racing bicycles, playing tabletop-games,making{" "}
                    <del>bad </del>
                    <em>excellent</em> jokes, and surfing.
                  </Text>
                </li>
                <li>
                  <EmojiBullet>✍🏼</EmojiBullet>
                  <Text>
                    I sometimes post rambles about all of the above{" "}
                    <NavLink to="/posts">here</NavLink>.
                  </Text>
                </li>
              </FlexUL>
            </div>
            <div>
              {/* <img tw="max-h-64 md:max-h-full mb-6" src={me} /> */}
              <StaticImage
                alt="Me!"
                placeholder="blurred"
                src="../images/me.jpg"
                tw="max-h-72 md:max-h-full"
              />
            </div>{" "}
          </div>
        </Container>
      </ContentBounds>
    </Layout>
  )
}

export default AboutPage
