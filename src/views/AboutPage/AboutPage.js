import React from "react";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/aboutPage.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const useStyles = makeStyles(styles);

const AboutPage = () => {
  const classes = useStyles();
  return (
    <div>
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
      <Parallax filter image={require("assets/img/bg2.jpg").default} style={{"max-height": "400px"}}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>About Us</h1>
              <h4>
                We are a musical collective from Belgium that&apos;s planning to
                grow up really fast in the few next years.
              </h4>
              <br />
              {/*<Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>*/}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
};

export default AboutPage;
