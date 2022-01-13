import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
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

const Times = () => {
  const classes = useStyles();

  const reservedTimesInfo = [
    {
      studioName: "1پرواز",
      phoneNumber: "09016614754",
      date: "1400.08.03",
      time: "15-18",
      cost: "250000",
      record: "بنیامین خزایی ظبط و وکال",
      status: "فعال",
    },
    {
      studioName: "2پرواز",
      phoneNumber: "09016614754",
      date: "1400.08.03",
      time: "15-18",
      cost: "250000",
      record: "بنیامین خزایی ظبط و وکال",
      status: "فعال",
    },
    {
      studioName: "3پرواز",
      phoneNumber: "09016614754",
      date: "1400.08.03",
      time: "15-18",
      cost: "250000",
      record: "بنیامین خزایی ظبط و وکال",
      status: "فعال",
    },
    {
      studioName: "4پرواز",
      phoneNumber: "09016614754",
      date: "1400.08.03",
      time: "15-18",
      cost: "250000",
      record: "بنیامین خزایی ظبط و وکال",
      status: "فعال",
    },
    {
      studioName: "5پرواز",
      phoneNumber: "09016614754",
      date: "1400.08.03",
      time: "15-18",
      cost: "250000",
      record: "بنیامین خزایی ظبط و وکال",
      status: "فعال",
    },
    {
      studioName: "6پرواز",
      phoneNumber: "09016614754",
      date: "1400.08.03",
      time: "15-18",
      cost: "250000",
      record: "بنیامین خزایی ظبط و وکال",
      status: "فعال",
    },
    {
      studioName: "7پرواز",
      phoneNumber: "09016614754",
      date: "1400.08.03",
      time: "15-18",
      cost: "250000",
      record: "بنیامین خزایی ظبط و وکال",
      status: "فعال",
    },{
      studioName: "8پرواز",
      phoneNumber: "09016614754",
      date: "1400.08.03",
      time: "15-18",
      cost: "250000",
      record: "بنیامین خزایی ظبط و وکال",
      status: "فعال",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12} lg={12}>
          <Item>
            <div className={classes.times}>
              <div className={classes.TimeTopBar}>
                <div className={classes.PageName}>
                  <p>وقت های رزرو شده</p>
                </div>
                <div className={classes.TimeBarInfo}>
                  <div>
                    <p>نام استودیو</p>
                  </div>
                  <div>
                    <p>شماره همراه</p>
                  </div>
                  <div>
                    <p>تاریخ</p>
                  </div>
                  <div>
                    <p>ساعت</p>
                  </div>
                  <div>
                    <p>مبلغ</p>
                  </div>
                  <div>
                    <p>نوع ظبط و صدابردار</p>
                  </div>
                  <div>
                    <p>وضعیت</p>
                  </div>
                </div>
              </div>
              <div className={classes.MainContainer}>
                <div className={classes.reservedItems}>
                {reservedTimesInfo.map((item) => {
                  return (
                    <div className={classes.reservedItem}>
                      <div>
                        <p>{item.studioName}</p>
                      </div>
                      <div>
                        <p>{item.phoneNumber}</p>
                      </div>
                      <div>
                        <p>{item.date}</p>
                      </div>
                      <div>
                        <p>{item.time}</p>
                      </div>
                      <div>
                        <p>{item.cost}</p>
                      </div>
                      <div>
                        <p>{item.record}</p>
                      </div>
                      <div className={classes.reservStatusActive}>
                        <Typography variant="" component="p">
                          {item.status}
                        </Typography>
                      </div>
                    </div>
                  );
                })}
                </div>
              </div>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Times;
