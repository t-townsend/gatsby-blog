import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BlogpostLayout ({data}){
  const post = data.markdownRemark
  return(
  <main>
    <Header />
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="pt-5">
            <h1>{post.frontmatter.title}</h1>
            <img src={post.frontmatter.image}/>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </div>
    <Footer fixed="bottom" />
  </main>

  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

