import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Movie, MusicNote, PhotoCamera } from "@material-ui/icons";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What we&apos;re doing</h2>
          <h5 className={classes.description}></h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Music Records"
              description="Music is the art of arranging sounds in time to produce a composition through the elements of melody, harmony, rhythm, and timbre."
              icon={MusicNote}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Video Clips"
              description="The widespread popularity of video clips, with the aid of new distribution channels, has evolved into 'clip '."
              icon={Movie}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Photography"
              description="Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor."
              icon={PhotoCamera}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
