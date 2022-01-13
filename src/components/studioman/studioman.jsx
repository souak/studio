import useStyles from "./style";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Leftside from "./leftside";
import Studios from "./studios/studios"
import Times from "./times/times"
import Schedule from "./schcedul/schcedule";
import Transaction from "./transaction/transaction";
import { Route, Routes, Outlet } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  backgroundColor : 'transparent',
  textAlign: 'center',
  boxShadow : 'none',
  color: theme.palette.text.secondary,
  fontFamily : 'IRANSans(FaNum)'
}));


const Studioman = (props) => {

    const classes = useStyles()

    return ( 
        <div className={classes.root}>
               <Box sx={{ flexGrow: 1 }} >
                    <Grid  container spacing={0} direction="row">
                        <Grid  item xs={2} md={2} lg={2} >
                            <Item><Leftside /></Item>
                        </Grid>
                        <Grid  item xs={10} md={10} lg={10} >
                            <Item>{props.child}</Item>
                        </Grid>
                        {/* <Outlet /> */}
                    </Grid>
                </Box>
        </div>
     );
}
 
export default Studioman;