import Layout from "../components/layout"
import {
  Button,
  Container,
  Header,
  ExtNavLink,
  DivideHR,
  ContentBounds,
} from "../components/styled"
import "twin.macro"

const ContactPage = () => {
  return (
    <Layout>
      <ContentBounds>
        <Container>
          <Header>Contact Me</Header>
          <DivideHR />
          <div tw="flex gap-8 ">
            <ExtNavLink>Github</ExtNavLink>
            <ExtNavLink>Email</ExtNavLink>
          </div>
        </Container>
      </ContentBounds>
    </Layout>
  )
}

export default ContactPage
