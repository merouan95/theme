import React from 'react';
import { Button, Typography, Grid, AppBar, Toolbar, Paper } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
const Navbar = () => {
    return (
        <AppBar position="static" >
            <Toolbar>
                <Grid direction='vertical' container >
                <Grid item sm={6}> <Paper >ollcook</Paper> </Grid>
                <Grid item sm={3}> </Grid>
                <Grid item sm={3}> <Paper >ollcook</Paper> </Grid>

                </Grid>
                {/* <Typography>
                navbar
            </Typography>
            <ShoppingBasketIcon /> */}
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;