const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const { Result } = require("postcss")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })

    createNodeField({
      //field
      name: "slug",
      //node
      node,
      //generated path for post
      value: `/posts${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(filter: { frontmatter: { published: { eq: true } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("error Loading create pages")
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/post-page.tsx`),
      context: { id: node.id },
    })
  })
}
