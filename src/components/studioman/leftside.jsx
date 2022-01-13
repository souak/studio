import useStyles from "./style";
import { styled } from "@mui/material/styles";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ReactComponent as HomeIcon1 } from "./svgs/home1.svg";
import { ReactComponent as HomeIcon2 } from "./svgs/home2.svg";
import { ReactComponent as TimeIcon1 } from "./svgs/times1.svg";
import { ReactComponent as TimeIcon2 } from "./svgs/times2.svg";
import { ReactComponent as ScheduleIcon1 } from "./svgs/schedule1.svg";
import { ReactComponent as ScheduleIcon2 } from "./svgs/schedule2.svg";
import { ReactComponent as TicketIcon1 } from "./svgs/ticket1.svg";
import { ReactComponent as TicketIcon2 } from "./svgs/ticket2.svg";
import { ReactComponent as WalletIcon1 } from "./svgs/wallet1.svg";
import { ReactComponent as WalletIcon2 } from "./svgs/wallet2.svg";
import { ReactComponent as ProfileIcon1 } from "./svgs/profile1.svg";
import { ReactComponent as ProfileIcon2 } from "./svgs/profile2.svg";
import { ReactComponent as ExitIcon1 } from "./svgs/exit1.svg";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  backgroundColor: "transparent",
  padding: ".8em 1em",
  boxShadow: "none",
  width: "100%",
  textAlign: "center",
  color: "white",
  "&:hover": {
    cursor: "pointer",
  },
  fontFamily: "IRANSansWeb(FaNum)",
}));

const Leftside = (props) => {
  const classes = useStyles();
  const selectedTabStyle = {
    backgroundColor: "#F4F0FF",
    borderTopLeftRadius: "1em",
    borderBottomLeftRadius: "1em",
    color: "#595959",
  };

  const [itemStyle, setItemStyle] = React.useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]); //rightside tab condition true = tab is selected false = not selected

  function selectedTab(index) {
    let orag = [false, false, false, false, false, false];
    orag[index] = true;
    setItemStyle(orag);
  }

  const tabInfo = [
    {
      id: 0,
      value: "استودیو ها",
      selectIcon: <HomeIcon2 />,
      deselectIcon: <HomeIcon1 />,
      tabLink: "/studios",
    },
    {
      id: 1,
      value: "وقت های رزرو شده",
      selectIcon: <TimeIcon2 />,
      deselectIcon: <TimeIcon1 />,
      tabLink: "/times",
    },
    {
      id: 2,
      value: "برنامه زمانی استودیو",
      selectIcon: <ScheduleIcon2 />,
      deselectIcon: <ScheduleIcon1 />,
      tabLink: "/schcedule",
    },
    {
      id: 3,
      value: "تراکنش ها",
      selectIcon: <WalletIcon2 />,
      deselectIcon: <WalletIcon1 />,
      tabLink: "/transaction",
    },
    {
      id: 4,
      value: "پروفایل من",
      selectIcon: <ProfileIcon2 />,
      deselectIcon: <ProfileIcon1 />,
      tabLink: "/myprofile",
    },
    {
      id: 5,
      value: "تیکت پشتیبانی",
      selectIcon: <TicketIcon2 />,
      deselectIcon: <TicketIcon1 />,
      tabLink: "/support",
    },
  ];

  return (
    <div className={classes.leftside}>
      <div className={classes.profileContainer}>
        <img
          className={classes.studioManProfile}
          src="https://am3pap005files.storage.live.com/y4mUqL3OSqV6IafO8yNulIC4IjpYsGelD-Lgq-wz5Fdv3HbELdk_vwQ8Nt2SAXl-7RAblHQFBY9FCoyfbbXICpVYwdc9xnIE8AjpIa16kOHJOGFz1M6aRUK9IC1abZ3K12KHldRvkolfr-4_pzvRn23FpG4PtbpJzqXIG0r5IWaZQdwnqxQrQyg6jFfBOSjx8Ay?width=640&height=640&cropmode=none"
          alt="refigh"
        />
      </div>
      <Grid container spacing={0} direction="row">
        {tabInfo.map((item, index) => {
          return (
            <Link key={index} className={classes.tablink} to={item.tabLink}>
              <Item
                style={itemStyle[item.id] ? selectedTabStyle : {}}
                onClick={() => selectedTab(item.id)}
              >
                <div className={classes.tabContainer}>
                  {itemStyle[item.id] ? item.selectIcon : item.deselectIcon}
                  <span className={classes.name}>{item.value}</span>
                </div>
              </Item>
            </Link>
          );
        })}
      </Grid>

      <Grid className={classes.thirdGrid} container spacing={1} direction="row">
        <Item>
          <div className={classes.tabContainer}>
            <ExitIcon1 />
            <span className={classes.name}>خروج از حساب کاربری</span>
          </div>
        </Item>
      </Grid>
    </div>
  );
};

export default Leftside;
