import * as React from "react";
import { styled } from "@mui/material/styles";
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

const Transaction = () => {
  const classes = useStyles();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} lg={12}>
            <Item>
              <div className={classes.transaction}>
                <div className={classes.TransactionTopBar}>
                  <div className={classes.PageName}>
                    <p>تراکنش ها</p>
                  </div>
                  <div className={classes.TotalRecived}>
                    <p>کل دریافتی</p>
                    <p>
                      250000 <span>تومان</span>
                    </p>
                  </div>
                  <div className={classes.TransactionInfoBar}>
                    <div>
                      <p>نام</p>
                    </div>
                    <div>
                      <p>تاریخ رزرو</p>
                    </div>
                    <div>
                      <p>ساعت رزرو</p>
                    </div>
                    <div>
                      <p>مبلغ</p>
                    </div>
                    <div>
                      <p>تاریخ پرداخت</p>
                    </div>
                    <div>
                      <p>شماره پیگیری</p>
                    </div>
                    <div>
                      <p>وضعیت</p>
                    </div>
                  </div>
                </div>
                <div className={classes.MainContainer}>
                  <div className={classes.TransactionItemsContainer}>
                    <div className={classes.TransactionItemContainer}>
                        <div><p>یاسمین خزایی</p></div>
                        <div><p>1400.08.03</p></div>
                        <div><p>18 - 15 </p></div>
                        <div><p>250000</p></div>
                        <div><p>1400.07.25</p></div>
                        <div><p>100122014</p></div>
                        <div><p>موفق</p></div>
                      </div>
                      <div className={classes.TransactionItemContainer}>
                        <div><p> تقوایی   چگینی اصل یاسمین خزایی</p></div>
                        <div><p>1400.08.03</p></div>
                        <div><p>18 - 15 </p></div>
                        <div><p>220000</p></div>
                        <div><p>1400.07.25</p></div>
                        <div><p>1001220df</p></div>
                        <div><p>ناموفق</p></div>
                      </div>
                      <div className={classes.TransactionItemContainer}>
                        <div><p> تقوایی  1 چگینی اصل یاسمین خزایی</p></div>
                        <div><p>1400.08.03</p></div>
                        <div><p>18 - 15 </p></div>
                        <div><p>220000</p></div>
                        <div><p>1400.07.25</p></div>
                        <div><p>1001220df</p></div>
                        <div><p>ناموفق</p></div>
                      </div>
                      <div className={classes.TransactionItemContainer}>
                        <div><p> تقوایی  2 چگینی اصل یاسمین خزایی</p></div>
                        <div><p>1400.08.03</p></div>
                        <div><p>18 - 15 </p></div>
                        <div><p>220000</p></div>
                        <div><p>1400.07.25</p></div>
                        <div><p>1001220df</p></div>
                        <div><p>ناموفق</p></div>
                      </div>
                      <div className={classes.TransactionItemContainer}>
                        <div><p> تقوایی 3  چگینی اصل یاسمین خزایی</p></div>
                        <div><p>1400.08.03</p></div>
                        <div><p>18 - 15 </p></div>
                        <div><p>220000</p></div>
                        <div><p>1400.07.25</p></div>
                        <div><p>1001220df</p></div>
                        <div><p>ناموفق</p></div>
                      </div>
                      <div className={classes.TransactionItemContainer}>
                        <div><p> تقوایی 4  چگینی اصل یاسمین خزایی</p></div>
                        <div><p>1400.08.03</p></div>
                        <div><p>18 - 15 </p></div>
                        <div><p>220000</p></div>
                        <div><p>1400.07.25</p></div>
                        <div><p>1001220df</p></div>
                        <div><p>ناموفق</p></div>
                      </div>
                      <div className={classes.TransactionItemContainer}>
                        <div><p> تقوایی 5  چگینی اصل یاسمین خزایی</p></div>
                        <div><p>1400.08.03</p></div>
                        <div><p>18 - 15 </p></div>
                        <div><p>220000</p></div>
                        <div><p>1400.07.25</p></div>
                        <div><p>1001220df</p></div>
                        <div><p>ناموفق</p></div>
                      </div>
                      <div className={classes.TransactionItemContainer}>
                        <div><p> تقوایی 6 چگینی اصل یاسمین خزایی</p></div>
                        <div><p>1400.08.03</p></div>
                        <div><p>18 - 15 </p></div>
                        <div><p>220000</p></div>
                        <div><p>1400.07.25</p></div>
                        <div><p>1001220df</p></div>
                        <div><p>ناموفق</p></div>
                      </div>
                      <div className={classes.TransactionItemContainer}>
                        <div><p> تقوایی 7 چگینی اصل یاسمین خزایی</p></div>
                        <div><p>1400.08.03</p></div>
                        <div><p>18 - 15 </p></div>
                        <div><p>220000</p></div>
                        <div><p>1400.07.25</p></div>
                        <div><p>1001220df</p></div>
                        <div><p>ناموفق</p></div>
                      </div>
                      <div className={classes.TransactionItemContainer}>
                        <div><p> تقوایی 8 چگینی اصل یاسمین خزایی</p></div>
                        <div><p>1400.08.03</p></div>
                        <div><p>18 - 15 </p></div>
                        <div><p>220000</p></div>
                        <div><p>1400.07.25</p></div>
                        <div><p>1001220df</p></div>
                        <div><p>ناموفق</p></div>
                      </div>
                  </div>                

                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Transaction;
