import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps, graphql, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const IndexPage = ({ data }: PageProps<Queries.StickersQuery>) => {
  return (
    <Layout title="Welcome to DevStickers 🖐🏻">
      <StaticImage
        src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
        alt="Stickers on the wall
      "
      />
      {data.allContentfulStickerPack.nodes.map((sticker) => (
        <article>
          <Link to={`/products/${sticker.id}`}>
            <GatsbyImage
              image={getImage(sticker.preview?.gatsbyImageData!)!}
              alt={sticker.name!}
            />
            <h2>{sticker.name}</h2>
            <h4>{sticker.price}</h4>
          </Link>
        </article>
      ))}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
