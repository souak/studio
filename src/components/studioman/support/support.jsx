import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Icon } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ReactComponent as threeDot } from "./svgs/three-dots.svg";
import SendIcon from '@mui/icons-material/Send';
import useStyles from "../style";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


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

const OptionButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#F3EEFF"),
  '& span ' : {
    margin : '0'
  }

}));

// const StyledTableHead = styled(TableHead)(({ theme }) => ({
//   // display : 'flex',
//   backgroundColor: 'orange',
//   borderRadius : '12px !important'
// }));



const StyledTableCell = styled(TableCell)(({ theme }) => ({

  [`&.${tableCellClasses.head}`]: {
    '&:first-child' : {
      borderRadius : '0 12px 12px 0'
    },
    backgroundColor: '#F3EEFF',
    color: "#707070",
  },
  '&:last-child' : {
    borderRadius : '12px 0 0 12px'
  },
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
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
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
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:first-child ': {
  
  }, 
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [  
  
  createData('شامل مقداری متنفارسی میباش مقداری متنفارسی میباش مقداری متنفارسی میباش مقداری متنفارسی میباش مقداری متنفارسی میباشد', '1400.08.03', 'بسته'),
  createData(' مقداری متنفارسی میباش مقداری  برای ادیت اما کار بسیار سختیه چون نمیدونم چرا تو ویژوال استودیو همه چی به هم میریزه گاد کیل می', '1400.08.06', 'دزحال بررسی'),
  createData(' مقداری متنفارسی میباش مقداری  برای ادیت اما کار بسیار سختیه چون نمیدونم چرا تو ویژوال استودیو همه چی به هم میریزه گاد کیل می', '1400.08.06', 'دزحال بررسی'),
  createData(' مقداری متنفارسی میباش مقداری  برای ادیت اما کار بسیار سختیه چون نمیدونم چرا تو ویژوال استودیو همه چی به هم میریزه گاد کیل می', '1400.08.06', 'دزحال بررسی'),
  createData(' مقداری متنفارسی میباش مقداری  برای ادیت اما کار بسیار سختیه چون نمیدونم چرا تو ویژوال استودیو همه چی به هم میریزه گاد کیل می', '1400.08.06', 'دزحال بررسی'),
  createData(' مقداری متنفارسی میباش مقداری  برای ادیت اما کار بسیار سختیه چون نمیدونم چرا تو ویژوال استودیو همه چی به هم میریزه گاد کیل می', '1400.08.06', 'دزحال بررسی'),
  createData(' مقداری متنفارسی میباش مقداری  برای ادیت اما کار بسیار سختیه چون نمیدونم چرا تو ویژوال استودیو همه چی به هم میریزه گاد کیل می', '1400.08.06', 'دزحال بررسی'),
  createData(' مقداری متنفارسی میباش مقداری  برای ادیت اما کار بسیار سختیه چون نمیدونم چرا تو ویژوال استودیو همه چی به هم میریزه گاد کیل می', '1400.08.06', 'دزحال بررسی'),
  createData(' مقداری متنفارسی میباش مقداری  برای ادیت اما کار بسیار سختیه چون نمیدونم چرا تو ویژوال استودیو همه چی به هم میریزه گاد کیل می', '1400.08.06', 'دزحال بررسی'),
  createData(' مقداری متنفارسی میباش مقداری  برای ادیت اما کار بسیار سختیه چون نمیدونم چرا تو ویژوال استودیو همه چی به هم میریزه گاد کیل می', '1400.08.06', 'دزحال بررسی'),
  createData(' مقداری متنفارسی میباش مقداری  برای ادیت اما کار بسیار سختیه چون نمیدونم چرا تو ویژوال استودیو همه چی به هم میریزه گاد کیل می', '1400.08.06', 'دزحال بررسی'),

];

const Support = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12} lg={12}>
          <Item>
            <div className={classes.support}>
              <div className={classes.supportTopBar}>
                <div className={classes.supportTitleBar}>
                  <div className={classes.PageName}>
                    <p>تیکت های پشتیبانی</p>
                  </div>
                  <div className={classes.newTicket}>
                    <ColorButton variant="contained">
                      ایجاد تیکت جدید
                    </ColorButton>
                  </div>
                </div>
              </div>
              <div className={classes.MainContainer}>

              <TableContainer className={classes.supportTable} component={Paper}>
                <Table style={{width : '96%', margin : '0 auto', borderCollapse: 'separate', borderSpacing: '0px 22px'}} stickyHeader sx={{ minWidth: 700 }} aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="right">موضوع</StyledTableCell>
                      <StyledTableCell align="center">تاریخ</StyledTableCell>
                      <StyledTableCell align="center">وضعیت</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell align="right" component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell  align="center">{row.calories}</StyledTableCell>
                        <StyledTableCell style={{width : '6rem'}} align="center">{row.fat}</StyledTableCell>
                        <StyledTableCell align="center"><OptionButton variant="text" endIcon={<MoreHorizIcon style={{color : '#8A63F6', }}/>}></OptionButton></StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
                {/* <div className={classes.ticketsItemsContainer}>
                  <div className={classes.ticketsItem}>
                    <div className={classes.ticketsItemSubject}>
                      <p>اول موضوع رو این جا ما نشونموضوع رو این جا ما نشونموضوع رو این جا ما نشون داده میشه ....</p>{" "}
                    </div>
                    <div className={classes.ticketsItemDate}>1400/02/08</div>
                    <div className={classes.ticketsItemStatus}>
                      <p>در حال بررسی</p>
                    </div>
                    <div>
                      <OptionButton variant="text" endIcon={<MoreHorizIcon style={{color : '#8A63F6', }}/>}>
                      </OptionButton>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Support;
