

import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Menu, MenuItem,  } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import useStyles from "../style";

import { ReactComponent as Combined } from "./svgs/Combined-Shape.svg";
import { ReactComponent as Sort } from "./svgs/Vector.svg";
import { ReactComponent as WhiteSort } from "./svgs/whiteVector.svg";
import { ReactComponent as Magnifier } from "./svgs/magnifier.svg";
import { ReactComponent as DollorSign } from "./svgs/dollersign.svg";
import { ReactComponent as Location } from "./svgs/location.svg";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  boxShadow: "none",
  textAlign: "start",
  color: theme.palette.text.secondary,
  backgroundColor: "transparent",
}));
//503892
const WhiteSortButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#fff"),
  display: "flex",
  minWidth: "41.2px",
  backgroundColor: "rgba(80, 56, 146, 1)",
  width: "36px",
  borderRadius: "8px",
  marginLeft: "0.5em",
  "&:hover": {
    cursor: "pointer",
  },
}));

const PinkSortButton = styled(Button)(({ theme }) => ({
  // color: theme.palette.getContrastText("#503892"),
  display: "flex",
  minWidth: "41.2px",
  width: "36px",
  borderRadius: "8px",
  border: "1px solid #B29CEF",
  marginLeft: "0.5em",
  "&:hover": {
    cursor: "pointer",
    backgroundColor : 'white'
  },
}));

const SortMenuItem = styled(MenuItem)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",
  width : '190px',
  textAlign: "start",
  color: theme.palette.text.secondary,
  backgroundColor: "#fff",
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
    backgroundColor: "#F5F0FF",
  },
}));


export default function Studios() {
  const classes = useStyles();
  const [sortBtnState, setSortBtnState] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleSortBtn = (event) => {
    setAnchorEl(event.currentTarget);
    setSortBtnState(!sortBtnState)
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSortBtnState(!sortBtnState)
  };
  const infoArray = [
    {
      studioName: "پرواز",
      cost: "250/000 - 100/000 (تومان)",
      address: "قزوین خیابان دانشگاه کوچه مصفایی پلاک 10",
    },

    {
      studioName: "پرواز",
      cost: "250/000 - 100/000 (تومان)",
      address: "قزوین خیابان دانشگاه کوچه مصفایی پلاک 10",
    },
    {
      studioName: "پرواز",
      cost: "250/000 - 100/000 (تومان)",
      address: "قزوین خیابان دانشگاه کوچه مصفایی پلاک 10",
    },
    {
      studioName: "پرواز",
      cost: "250/000 - 100/000 (تومان)",
      address: "قزوین خیابان دانشگاه کوچه مصفایی پلاک 10",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12} lg={12}>
          <Item>
            <div className={classes.studios}>
              <div className={classes.studiosTopBar}>
                <div className={classes.PageName}>
                  <p>استودیوها</p>
                </div>
                <div className={classes.studiosTopBarLs}>
                  <div className={classes.SearchBar}>
                    <input
                      type="text"
                      className={classes.SearchInput}
                      placeholder="جستجو"
                    />
                    <Magnifier className={classes.Magnifier} />
                  </div>
                  {sortBtnState ? (
                    <WhiteSortButton
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleSortBtn}
                      className={classes.SortButton}
                    >
                      <WhiteSort />
                    </WhiteSortButton>
                  ) : (
                    <PinkSortButton
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleSortBtn}
                    className={classes.SortButton}
                    >
                      <Sort />                      
                    </PinkSortButton>
                  )}
                  <Menu
                    id="basic-button"
                    aria-labelledby="basic-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={ {top: 100, left: 100 }}
                  >
                    <SortMenuItem onClick={handleClose}>بیشترین بازدید</SortMenuItem>
                    <SortMenuItem onClick={handleClose}>محبوب ترین</SortMenuItem>
                    <SortMenuItem onClick={handleClose}>گران ترین</SortMenuItem>
                    <SortMenuItem onClick={handleClose}>ارزان ترین</SortMenuItem>
                    <SortMenuItem onClick={handleClose}>نزدیک ترین</SortMenuItem>
                  </Menu>
                  {/* <Sort className={classes.Sort} /> */}
                  <Combined className={classes.Combined} />
                </div>
              </div>
              <div className={classes.MainContainer}>
                <div className={classes.studiosItemsCon}>
                  <Grid container direction={"row"} spacing={2}>
                    {infoArray.map((item, index) => {
                      return (
                        <Grid key={index} item xs={12} sm={6} lg={4}>
                          <Item>
                            <div className={classes.studiosItemCont}>
                              <div className={classes.ImgContainer}>
                                <img
                                  className={classes.studiosItemImg}
                                  src="https://am3pap005files.storage.live.com/y4mtBG_431UZ8cVByR2K4MHNuT5m-4Ndepspq5WDORcawRN5yKSBzxLrtDOX5spvN9QnsydjX2-aNaTSfFKgJBcSkp_SHLFepRSSmz1y09E-zwF_2R9d_O_eTies2zwU5FzSrRavcgSwJRF0DPxNUhPzK7T5-wW2gaf9nabAv6DnAGd-ihHkm61FZmfL5rlyECN?width=4032&height=3024&cropmode=none"
                                  alt=""
                                />
                              </div>
                              <div className={classes.Infos}>
                                <h3>استودیو {item.studioName}</h3>
                                <div className={classes.CostContainer}>
                                  <DollorSign className={classes.DollorSign} />{" "}
                                  <span>{item.cost}</span>
                                </div>
                                <div className={classes.AddressContainer}>
                                  <Location className={classes.DollorSign} />{" "}
                                  <span>{item.address}</span>
                                </div>
                              </div>
                            </div>
                          </Item>
                        </Grid>
                      );
                    })}
                  </Grid>
                </div>
              </div>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
