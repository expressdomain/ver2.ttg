/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const _ = require(`lodash`)
const Promise = require(`bluebird`)
const slash = require(`slash`)
const path = require("path");


exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/data": path.resolve(__dirname, "src/data/index"),
        "@/components": path.resolve(__dirname, "src/components"),
        "@/context": path.resolve(__dirname, "src/context/"),
        "@/css": path.resolve(__dirname, "src/assets/css/"),
        "@/scss": path.resolve(__dirname, "src/assets/scss/"),
        "@/images": path.resolve(__dirname, "src/assets/images/"),
        "@/templates": path.resolve(__dirname, "src/templates/"),
      },
    },
  });
};

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  //createRedirect({ fromPath: '/', toPath: '/', redirectInBrowser: true, isPermanent: true })
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
  
    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
     `
        {
          allWpPage {
            edges {
              node {
                id
                slug
                status
                title
                content
                template {
                  templateName
                  ... on WpDefaultTemplate {
                    templateName
                  }
                }
              }
            }
          }
        }
      `
    )
     .then(result => {
       if (result.errors) {
         console.log(result.errors)
         reject(result.errors)
       }
     
       // Create Page pages.
       const pageTemplate = path.resolve("./src/templates/page.js")
       // We want to create a detailed page for each
       // page node. We'll just use the WordPress Slug for the slug.
       // The Page ID is prefixed with 'PAGE_'
       _.each(result.data.allWpPage.edges, edge => {
         // Gatsby uses Redux to manage its internal state.
         // Plugins and sites can use functions like "createPage"
         // to interact with Gatsby.
       
         createPage({
           // Each page is required to have a `path` as well
           // as a template component. The `context` is
           // optional but is often necessary so the template
           // can query data specific to each page.
           path: `/${edge.node.slug}/`,
           component: slash(pageTemplate),
           context: edge.node,
         })
       })
     })
     // ==== END PAGES ====
   
     // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
     .then(() => {
       graphql(
        `
            {
              allWpPost {
                edges{
                  node{
                    id
                    title
                    slug
                    excerpt
                    content
                  }
                }
              }
            }
          `
       ).then(result => {
         if (result.errors) {
           console.log(result.errors)
           reject(result.errors)
         }
         const postTemplate = path.resolve("./src/templates/post.js")
         // We want to create a detailed page for each
         // post node. We'll just use the WordPress Slug for the slug.
         // The Post ID is prefixed with 'POST_'
         _.each(result.data.allWpPost.edges, edge => {
           createPage({
             path: `/${edge.node.slug}/`,
             component: slash(postTemplate),
             context: edge.node,
           })
         })
       })
     })
     // ==== END POSTS ====
     // ==== BLOG POSTS ====
     .then(() => {
       graphql(`{
       allWpPost {
          edges {
            node {
              id
              title
              date(formatString: "MMM Do YYYY")
              excerpt
              slug
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
       }`).then(result => {
         if (result.errors) {
           console.log(result.errors)
           reject(result.errors)
         }
         const posts = result.data.allWpPost.edges
         const postsPerPage = 10
         const numberOfPages = Math.ceil(posts.length / postsPerPage)
         const blogPostListTemplate = path.resolve("./src/templates/blogPostList.js")
       
       
         Array.from({length: numberOfPages}).forEach((page, index) => {
           createPage({
             component: slash(blogPostListTemplate),
             path: index === 0 ? `/fishing-news` : `/fishing-news/${index + 1}`,
             context: {
               posts: posts.slice(index * postsPerPage, (index * postsPerPage) + postsPerPage),
               numberOfPages,
               currentPage: index + 1
             }
           })
         })
       
         const archTemplate = path.resolve("./src/templates/archive.js")
         _.each(posts, (post) => {
           createPage({
             path: `/fishing-news/${post.node.slug}`,
             component: slash(archTemplate),
             context: post.node
           })
         })
       
         //resolve()
       })
     })
     .then(() => {
       graphql(`{
        allWpReport {
          edges {
            node {
              id
              title
              date(formatString: "MMM Do YYYY")
              excerpt
              content
              slug
              featuredImage {
                node {
                  id
                  sourceUrl
                  altText
                }
              }
            }
          }
        }
       }`).then(result => {
         if (result.errors) {
           console.log(result.errors)
           reject(result.errors)
         }
         const posts = result.data.allWpReport.edges
         const postsPerPage = 10
         const numberOfPages = Math.ceil(posts.length / postsPerPage)
         const blogPostListTemplate = path.resolve("./src/templates/reportPostList.js")
       
         Array.from({length: numberOfPages}).forEach((page, index) => {
           createPage({
             component: slash(blogPostListTemplate),
             path: index === 0 ? `/fishing-report` : `/fishing-report/${index + 1}`,
             context: {
               posts: posts.slice(index * postsPerPage, (index * postsPerPage) + postsPerPage),
               numberOfPages,
               currentPage: index + 1
             }
           })
         })
       
         const repTemplate = path.resolve("./src/templates/report-archive.js")
         _.each(posts, (post) => {
           createPage({
             path: `/fishing-report/${post.node.slug}`,
             component: slash(repTemplate),
             context: post.node
           })
         })
       
         resolve()
       
       
       })
     
     
     })
  })
  }

