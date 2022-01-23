import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="A pig with a wig and sunglasses."
        src="https://images.squarespace-cdn.com/content/v1/5b71e83f1aef1d3e4bbd03f2/1534201222036-JHLKSIPN8AOXD4XNLRAN/Esther_main_image_1.jpg?format=2500w"
      />
    </Layout>
  );
};

export default IndexPage;
