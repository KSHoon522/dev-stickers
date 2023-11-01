import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { Link, PageProps, graphql } from "gatsby";

function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  return (
    <Layout title="Blog">
      <section className="grid">
        {data.allMdx.nodes.map((file, index) => (
          <article key={file.frontmatter?.title}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>
                {file.frontmatter?.author} in {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.date}</h6>
              <p>{file.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}
export default Blog;

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          slug
          title
          date(formatString: "YYYY.MM.DD")
          category
          author
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
