import React from "react";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import ImageGallery from "./Sections/ImageGallery";
import Parallax from "components/Parallax/Parallax.js"

const styles = {
  container: {
  },
  title: {
    fontFamily: "Roboto Slab, Times New Roman, serif",
    zIndex: "1",
    margin: "0 auto 0 auto",
    color: "#FFF",
    fontSize: "5em"

  }
}
const ShopPage = () => {
  return (
    <div style={styles.container}>
      <Header
        color="transparent"
        brand="Mauvais Oeil"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Parallax filter image={require("assets/img/spray-shop.jpg").default}>
        <h1 style={styles.title}>Mo Shop</h1>
      </Parallax>
      <ImageGallery/>
      <Footer/>
    </div>
  );
};

export default ShopPage;
