const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const { Result } = require("postcss")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    // Need to get 'source' of mdx content. 'root' specifies what the name of the source (specified by gatsby-source-filesystem) is.
    const parentNode = getNode(node.parent)
    const root = parentNode.sourceInstanceName
    const value = createFilePath({ node, getNode })

    createNodeField({
      //field
      name: "slug",
      //node
      node,
      //generated path for post
      value: `/${root}${value}`,
    })
    createNodeField({
      name: "contentType",
      node,
      value: `${root}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  ////////////////////////Would it be better to narrow this all down into one query??

  const result = await graphql(
    `
      query {
        allMdx(
          filter: {
            frontmatter: { published: { eq: true } }
            fields: { contentType: { eq: "posts" } }
          }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild("error Loading create pages")
  }

  ////////// POSTS

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/post-page.tsx`),
      context: { id: node.id },
    })
  })

  const projectResult = await graphql(`
    query {
      allMdx(filter: { fields: { contentType: { eq: "projects" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)
  if (projectResult.errors) {
    reporter.panicOnBuild("error getting projects")
  }

  ////////// PROJECTS

  const projects = projectResult.data.allMdx.edges
  projects.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/project-page.tsx`),
      context: { id: node.id },
    })
  })

  ///// TAGS

  // create set of all tags
  let allTags = []
  posts.forEach(post => {
    allTags = allTags.concat(post.node.frontmatter.tags)
  })
  projects.forEach(project => {
    allTags = allTags.concat(project.node.frontmatter.tags)
  })

  const uniqueTags = new Set(allTags)

  uniqueTags.forEach((tag, index) => {
    createPage({
      path: `/tags/${tag.toLowerCase()}`,
      component: path.resolve(`./src/components/tag-page.tsx`),
      context: { tag: tag },
    })
  })
}
