import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import { ReactComponent as TimeCheckBox } from "./svgs/Rectangle25.svg";
import { ReactComponent as TimeCheckBoxNull } from "./svgs/Rectanglenull.svg";
import { ReactComponent as CalendarIcon } from "./svgs/calandar.svg";
//persian calendar
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { Calendar } from "react-modern-calendar-datepicker";
import useStyles from "../style";
import { border, borderColor } from "@mui/system";

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
  width : '20rem',
  backgroundColor: "#503892", 
  borderRadius : '8px',   
  fontFamily : [
      '"IRANSansWeb(FaNum)"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  '&:hover': {
    backgroundColor: "#503892",
  },
}));

const Schedule = () => {
  const classes = useStyles();
  let options = { year: "numeric", month: "numeric", day: "numeric" };
  let today = new Date().toLocaleTimeString("fa-IR", options);
  const [timeCheckBoxState, setTimeCheckBoxState] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
  ]);

  const defaultValue = {
    year: getCurrentDate()[0],
    month: getCurrentDate()[1],
    day: getCurrentDate()[2],
  };

  //states
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [selectedDay, setSelectedDay] = React.useState(defaultValue);

  //functions
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  function fixNumbers(str){
    let
    persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
    arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g]
    if(typeof str === 'string')
    {
      for(let i=0; i<10; i++)
      {
        str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
      }
    }
    return str;
  };
  
  function getCurrentDate() {
    let splited = today.split("/");
    console.log(splited);
    let tempsplited = splited[2].split("،");
    splited[2] = tempsplited[0];
    let engSplited = splited.map(item => fixNumbers(item));
    engSplited = engSplited.map(item => parseInt(item))
    return engSplited
  };

  const timesArray = [
    { id: 0, value: "9 - 8" },
    { id: 1, value: "10 - 9" },
    { id: 2, value: "11 - 10" },
    { id: 3, value: "12 - 11" },
    { id: 4, value: "13 - 12" },
    { id: 5, value: "14 - 13" },
    { id: 6, value: "15 - 14" },
    { id: 7, value: "16 - 15" },
    { id: 8, value: "17 - 16" },
    { id: 9, value: "18 - 17" },
    { id: 10, value: "19 - 18" },
    { id: 11, value: "20 - 19" },
    { id: 12, value: "21 - 20" },
    { id: 13, value: "22 - 21" },
  ];

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  function timeCheckBoxHandeler(index) {
    let timesCheckBox = [...timeCheckBoxState];
    timesCheckBox[index] = !timesCheckBox[index];
    setTimeCheckBoxState(timesCheckBox);
    console.log(timesCheckBox);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12} lg={12}>
          <Item>
            <div className={classes.schedule}>
              <div className={classes.TimeTopBar}>
                <div className={classes.titleBar}>
                  <div className={classes.PageName}>
                    <p>برنامه زمانی استودیو</p>
                  </div>
                </div>
              </div>
              <div className={classes.MainContainer}>
                <div className={classes.scheduleItemsContainer}>
                  <div className={classes.SchcedulRecMen}>
                    <div className={classes.SchcedulRecManTitle}>
                      <p>صدابردار ها</p>
                    </div>
                    <div className={classes.SchcedulRecMan}>
                      <div className={classes.RadioButt}>
                        <Radio
                          {...controlProps("e")}
                          sx={{
                            color: "#8A63F6",
                            "&.Mui-checked": {
                              color: "#8A63F6",
                            },
                          }}
                        />
                        <p>بنیامین خزایی</p>
                      </div>
                    </div>
                    <div className={classes.SchcedulRecMan}>
                      <div className={classes.RadioButt}>
                        <Radio
                          {...controlProps("b")}
                          sx={{
                            color: "#8A63F6",
                            "&.Mui-checked": {
                              color: "#8A63F6",
                            },
                          }}
                        />
                      </div>
                      <p>علیرضا مطلق</p>
                    </div>
                  </div>
                  <div className={classes.SchcedulDate}>
                    <div className={classes.PageName}>تاریخ</div>
                    <div className={classes.calendarContainer}>
                      <DatePicker
                        inputClassName={classes.calendarInput}
                        value={selectedDay}
                        inputPlaceholder=" "
                        onChange={setSelectedDay}
                        colorPrimary="#8A63F6"
                        calendarPopperPosition="botton"
                        shouldHighlightWeekends
                        locale="fa" // add this
                      />
                      <CalendarIcon />
                    </div>
                  </div>
                  <div className={classes.SchceduTimeing}>
                    <div className={classes.SchcedulTimeingTitle}>ساعت</div>
                    <div className={classes.SchceduTimes}>
                      {timesArray.map((time, index) => {
                        return (
                          <div key={index} className={classes.SchceduTimesItem}>
                            {timeCheckBoxState[index] ? (
                              <TimeCheckBox
                                onClick={() => timeCheckBoxHandeler(time.id)}
                                className={classes.TimeCheckBox}
                              />
                            ) : (
                              <TimeCheckBoxNull
                                onClick={() => timeCheckBoxHandeler(time.id)}
                                className={classes.TimeCheckBox}
                              />
                            )}
                            <p>{time.value}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className={classes.SchceduSubmit}>
                  <ColorButton variant="contained">
                      تایید
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

export default Schedule;
