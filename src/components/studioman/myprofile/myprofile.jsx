import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Icon } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import useStyles from "../style";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  boxShadow: "none",
  textAlign: "start",
  backgroundColor: "transparent",
  color: theme.palette.text.secondary,
}));

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#503892"),
    backgroundColor: "#503892",
    borderRadius: "8px",
    fontFamily: [
      '"IRANSansWeb(FaNum)"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#503892",
    },
  }));

const Myprofile = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12} lg={12}>
          <Item>
            <div className={classes.myprofile}>
              <div className={classes.myprofileTopBar}>
              <div className={classes.supportTitleBar}>
                  <div className={classes.PageName}>
                    <p>پروفایل من</p>
                  </div>
                  <div className={classes.newTicket}>
                    <ColorButton variant="contained">
                     ویرایش
                    </ColorButton>
                  </div>
                </div>
              </div>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Myprofile;
