import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout title="Welcome to DevStickers 🖐🏻">
      <div></div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home" />;
