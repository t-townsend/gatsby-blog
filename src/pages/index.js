import React from "react";
import PrimaryLayout from "../layouts/PrimaryLayout";
import Post from "../components/Post";
import { graphql } from "gatsby";
import CardLayout from "../layouts/CardLayout";

export default ({data}) => {
console.log(data);
  return(
      <PrimaryLayout column="col-xs-6">
        <CardLayout>
          {data.allMarkdownRemark.nodes.map((node)=>(
            <Post 
              image={node.frontmatter.image}
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              readMore={node.fields.slug}
            />
          ))}
        </CardLayout>
    </PrimaryLayout>
  )
};

export const query = graphql`
{
  allMarkdownRemark{
		nodes{
			frontmatter{
				title
        date
        keywords
        image
      }
      excerpt
      html
      fields{
        slug
      }
    }
  }
}
`