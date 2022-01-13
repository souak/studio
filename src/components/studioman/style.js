import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    background: "#2A1957",
    width: "100%",
    minHeight: "100vh",
  },
  leftside: {
    margin: "0",
    padding: "0",

    backgroundColor: "transperent",
  },

  profileContainer: {
    padding: "2.8em 0",
  },
  studioManProfile: {
    margin: "2em 0",
    width: "8rem",
    height: "8rem",
    borderRadius: "50%",
  },
  tabContainer: {
    marginRight: "1em",
    display: "flex",
    paddingRight: ".5em",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
  "@media (max-width: 1140px)": {
    tabContainer: {
      marginRight: "0",
      display: "flex",
      paddingRight: "0",
      alignItems: "center",
      whiteSpace: "nowrap",
    },
  },
  name: {
    paddingRight: "1em",
  },
  tablink: {
    textDecoration: "none",
    color: "inherit",
    width: "90%",
  },
  thirdGrid: {
    paddingTop: "8em",
  },
  studios: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    width: "95%",
    height: "93vh",
    overflow: "hidden",
    padding: "1px",
    borderRadius: "1rem",
    margin: "1.5rem auto",
  },
  MainContainer: {
    display: "flex",
    justifyContent: "center",
    // backgroundColor : '#eee',
    height: "100%",
    overflowY: "auto",
    // overflowX: "hidden",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  // MainContainer: {
  //   backgroundColor : 'red',
  //   width: "95%",
  //   height: "68%",
  //   padding: "1px",
  //   margin: "0 auto",
  //   overflowY: "auto",
  //   overflowX: "hidden",
  //   "&::-webkit-scrollbar": {
  //     display: "none",
  //   },
  // },
  studiosTopBar: {
    display: "flex",
    backgroundColor: "white",
    boxSizing: "border-box",
    padding: "1.5rem",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "1rem 1rem 0 0",
  },
  studiosTopBarLs: {
    display: "flex",
  },
  Combined: {
    padding: "0.8rem 0.7rem",
    border: ".1em solid #B29CEF",
    borderRadius: "8px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  Sort: {
    padding: "0.7rem",
    border: ".1em solid #B29CEF",
    marginLeft: "0.5em",
    borderRadius: "8px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  Magnifier: {
    padding: "0.6rem 0.7rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  SearchBar: {
    width: "16rem",
    height: "2.7rem",
    display: "flex",
    marginLeft: "0.5em",
    justifyContent: "space-between",
    border: ".1em solid #B29CEF",
    boxSizing: "border-box",
    borderRadius: "8px",
  },
  SearchInput: {
    display: "flex",
    width: "12.5rem",
    height: "1.5rem",
    marginTop: "0.5em",
    border: "none",
    outline: "none",
    paddingRight: "1em",
    zIndex: "4",
    // "&::placeholder": {
    //   paddingRight: ".5em",
    // },
  },
  PageName: {
    marginTop: "0.9em",
    color: "black",
    display: "flex",
  },
  studiosItemsCon: {
    marginTop: "1em",
  },
  studiosItemCont: {
    border: "1px solid #E5DBFF",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "8px",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  },
  ImgContainer: {
    height: "190px",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    background: "linear-gradient(to right, #321B72 90%, white 100%)",
  },
  studiosItemImg: {
    width: "100%",
    height: "190px",
    opacity: "0.8",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    objectFit: "cover",
    objectPosition: "center",
  },
  Infos: {
    boxSizing: "border-box",
    padding: ".5rem",
  },
  CostContainer: {
    display: "flex",
    marginBottom: "1em",
  },
  DollorSign: {
    marginLeft: "0.5em",
  },
  AddressContainer: {
    display: "flex",
    marginBottom: "1em",
  },
  times: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    width: "95%",
    height: "90vh",
    overflow: "hidden",
    padding: "1px",
    borderRadius: "1rem",
    margin: "1.5rem auto",
  },
  TimeTopBar: {
    display: "flex",
    backgroundColor: "white",
    boxSizing: "border-box",
    padding: "1.5rem",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "1rem 1rem 0 0",
  },
  TimeBarInfo: {
    display: "flex",
    padding: "0.5rem 0.5rem",
    marginTop: "1.5rem",
    flexDirection: "row",
    backgroundColor: "#F3EEFF",
    borderRadius: "12px",
    "& div:nth-child(n)": {
      display: "flex",
      padding: "1rem 1rem",
      flexGrow: "1",
      borderRadius: "8px",
    },
    "& div:nth-child(2)": {
      padding: "1rem 1.5rem",
    },
    "& div:nth-child(3)": {
      padding: "1rem 1.5rem",
    },
    "& div:nth-child(6)": {
      padding: "1rem 1.5rem",
    },
    "& div:nth-child(1)": {
      flexGrow: "2",
      justifyContent: "start",
    },
  },
  reservedItems: {
    display: "flex",
    width: "95%",
    flexDirection: "column",
  },
  reservedItem: {
    display: "flex",
    borderBottom: "1px solid #E5DBFF",
    padding: "1.5rem",
    flexDirection: "row",
    marginTop: "1rem",
    "& div:nth-child(n)": {
      flexGrow: "1",
      display: "flex",
      padding: "0.5rem 1rem",
      borderRadius: "8px",
    },
    "& div:nth-child(1)": {
      flexGrow: "3",
      padding: "0.5rem 0rem .5rem 1rem",
    },
  },
  reservStatusActive: {
    color: "#8A63F6",
    backgroundColor: "#EEE9FE",
    justifyContent: "center",
  },
  reservStatusExpierd: {
    color: "#CD003E",
    backgroundColor: "#F5D8E4",
  },

  schedule: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    width: "95%",
    height: "90vh",
    overflow: "hidden",
    padding: "1px",
    borderRadius: "1rem",
    margin: "1.5rem auto",
  },
  scheduleItemsContainer: {
    display: "flex",
    width: "95%",
    flexDirection: "column",
  },

  SchcedulRecMen: {
    display: "flex",
    flexWrap: "wrap",
  },
  SchcedulRecManTitle: {
    display: "flex",
    width: "100%",
  },
  SchcedulRecMan: {
    display: "flex",
    margin: "0.5rem 0.5rem 1rem 0.5rem",
    border: "2px solid rgb(169, 136, 255, 0.2)",
    borderRadius: "12px",
    padding: ".2rem 0 .2rem 9rem",
    "& p": {
      display: "flex",
      alignItems: "center",
    },
  },
  RadioButt: {
    display: "flex",
  },
  SchcedulDate: {
    display: "flex",
    flexDirection: "column",
  },
  calendarContainer: {
    display: "inline-flex",
    width: "18rem",
    marginTop: "1rem",
    alignItems: "center",
    justifyContent: "space-between",
    padding: ".5rem 1rem ",
    border: "2px solid #E5DBFF",
    borderRadius: "12px",
  },
  calendarInput: {
    border: "none",
    textAlign: "right",
    color: "#838383",
    outline: "none",
    fontSize: "1rem",
    width: "13rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  SchceduSubmit: {
    display: "flex",
    marginTop: "2.5rem",
    padding: "1rem 0",
    justifyContent: "center",
  },
  SchceduTimeing: {
    display: "flex",
    marginTop: "4rem",
    flexDirection: "column",
  },
  SchcedulTimeingTitle: {
    display: "flex",
  },
  SchceduTimes: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row-reverse",
    "& div p": {
      display: "flex",
    },
  },
  SchceduTimesItem: {
    display: "flex",
    width: "8rem",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 1rem 1rem 0",
    padding: "0.5rem 1rem",
    border: "2px solid rgb(169, 136, 255, 0.2)",
    borderRadius: "12px",
  },
  TimeCheckBox: {
    padding: "2px",
    border: "2px solid #E5DBFF",
    borderRadius: "4px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  TimeCheckBoxNull: {
    width: "14px",
    height: "14px",
    border: "2px solid #E5DBFF",
    borderRadius: "4px",
  },
  transaction: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    width: "95%",
    height: "90vh",
    overflow: "hidden",
    padding: "1px",
    borderRadius: "1rem",
    margin: "1.5rem auto",
  },
  TransactionTopBar: {
    display: "flex",
    boxSizing: "border-box",
    padding: "1.5rem",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "1rem 1rem 0 0",
  },
  TotalRecived: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#8A63F6",
    color: "#fff",
    borderRadius: "12px",
    marginTop: "1.1rem",
    padding: ".8rem .9rem",
  },
  TransactionInfoBar: {
    display: "flex",
    padding: "0.5rem 0.5rem",
    marginTop: "1rem",
    flexDirection: "row",
    backgroundColor: "#F3EEFF",
    borderRadius: "12px",
    "& div:nth-child(n)": {
      display: "flex",
      justifyContent: "center",
      padding: ".5rem .5rem",
      flexGrow: "1",
      borderRadius: "8px",
    },
    "& div:nth-child(1)": {
      width: "9rem",
      justifyContent: "start",
    },
    "& div:nth-child(3)": {
      marginRight: "1rem",
    },
    "& div:nth-child(4)": {
      marginRight: "1rem",
    },
    "& div:nth-child(5)": {
      marginRight: "1rem",
    },
  },
  TransactionItemsContainer: {
    display: "flex",
    width: "95%",
    flexDirection: "column",
  },
  TransactionItemContainer: {
    display: "flex",
    borderBottom: "1px solid #E5DBFF",
    padding: "1.7rem 0",
    flexDirection: "row",
    "& div:nth-child(n)": {
      display: "flex",
      justifyContent: "center",
      padding: ".5rem .5rem",
      flexGrow: "1",
      borderRadius: "8px",
    },
    "& div:nth-child(1)": {
      justifyContent: "start",
      width: "8rem",
    },
    "& div:nth-child(7)": {
      width: "3rem",
    },
  },

  support: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    width: "95%",
    height: "90vh",
    overflow: "hidden",
    padding: "1px",
    borderRadius: "1rem",
    margin: "1.5rem auto",
  },
  supportTopBar: {
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem",
    boxSizing: "border-box",
  },
  supportTitleBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  supportInfoBar: {
    display: "flex",
    flexDirection: "row",
    marginTop: "1.2rem",
    padding: "1rem 1.5rem",
    background: "#F3EEFF",
    borderRadius: "12px",
  },
  supportTicketSubject: {
    display: "flex",
    width : '26rem'
  },
  supportTicketDate: {
    display: "flex",
    // flexGrow : "1",
    width: "7rem",
    paddingRight: "18rem",
  },
  supportTicketStatus: {
    display: "flex",
    flexGrow: "1",

    boxSizing: "border-box",
    marginLeft: "3rem",
    paddingRight: "5rem",
  },
  supportTable : {
    borderCollapse: 'separate',
    borderSpacing: '0px 20px',
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  ticketsItemsContainer: {
    display: "flex",
    width: "95%",
    flexDirection: "column",
  },
  ticketsItem: {
    display: "flex",
    flexDirection: "row",
    "& div:nth-child(n)": {
      display: "flex",
      padding: ".5rem .5rem",
      alignItems: "center",

      borderRadius: "8px",
      margin: "0 auto",
    },
    "& div:nth-child(1)": {
      justifyContent: "start",
      flexGrow: "4",
    },
    "& div:nth-child(2)": {
      paddingLeft: "5rem",
      // flexGrow : "3"
    },
    "& div:nth-child(3)": {
      padding: ".5rem .5rem",
      justifyContent: "center",
      flexGrow: "3",
      // width : '80px',
      backgroundColor: "#F5D8E4",
      color: "#CD003E",
    },
  },
  // ticketsItemSubject : {
  //   display : 'flex',

  // },
  // ticketsItemDate : {
  //   display : 'flex',

  //   justifyContent : 'center'
  // },
  // ticketsItemStatus : {
  //   display : 'flex',
  //   justifyContent : 'center'
  // },
  myprofile: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    width: "95%",
    height: "90vh",
    overflow: "hidden",
    padding: "1px",
    borderRadius: "1rem",
    margin: "1.5rem auto",
  },
  myprofileTopBar: {
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem",
    boxSizing: "border-box",
  },
});

export default useStyles;
