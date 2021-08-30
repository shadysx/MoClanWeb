import React, { useState } from "react";
// @material-ui/core components
import { makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import emailjs from "emailjs-com"
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { useHistory } from "react-router-dom";


export default function WorkSection() {

  const useStyles = makeStyles(styles);

  let history = useHistory()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('gmail', 'template_2l58ebd', e.target, 'user_VwUeTtcGy3ax2N8pA7G2x')
    .then((result) => {
      handler()
      console.log(result.text);

    }, (error) => {
      console.log(error.text);
    });
  }

  const handler = () => {
    history.push("/message-handler")
  }
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            Contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
          <form onSubmit={sendEmail}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  name="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  name="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                name="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button type="submit" color="primary">Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

