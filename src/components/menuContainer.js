import React from 'react';
import { Button, Typography, Grid, AppBar, Toolbar, Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './menu'
const MenuContainer=()=>{
    return(
        <Grid container spacing={6}>
            <Grid item xs={12} sm={4}><Menu /></Grid>
            <Grid item xs={12} sm={4}><Menu /></Grid>
            <Grid item xs={12} sm={4}><Menu /></Grid>
            <Grid item xs={12} sm={4}><Menu /></Grid>
            <Grid item xs={12} sm={4}><Menu /></Grid>
            <Grid item xs={12} sm={4}><Menu /></Grid>
        </Grid>
    )
}

export default MenuContainer;