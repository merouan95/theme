import React from 'react';
import { Button, Box, Typography, Grid, AppBar, Toolbar, Paper, Tab, Tabs ,Divider} from '@material-ui/core';
import ollcook from '../assets/ollcook.svg'
// bgcolor="background.paper" 
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
const useStyles = makeStyles({
    mypic: {
        height: 40
    },
    button:{
        color:"white",
        fontWeight:"bold"
    },
    divider:{
        color:'white',
        background:'white'
    },
    menu_elt_parent: {
        textAlign: 'center'
    }
})
const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static"  >
            <Toolbar>
                <Grid direction='vertical' container >
                    <Grid item sm={6}>
                        <div style={{ flex: 1 }}>
                            <Box display="flex" flexDirection="row" p={1} m={1} justifyContent='space-between'>
                                <Box flexGrow={1} className={classes.menu_elt_parent}>
                                    <img src={ollcook} className={classes.mypic} />
                                </Box>
                                <Divider orientation="vertical" flexItem  className={classes.divider} />

                                <Box flexGrow={1} className={classes.menu_elt_parent}>
                                    <Button variant="default" className={classes.button}   >Suivi des profils</Button>
                                </Box>
                                <Divider orientation="vertical" flexItem  className={classes.divider} />

                                <Box flexGrow={1} className={classes.menu_elt_parent}>
                                    <Button variant="default" className={classes.button}   >Gérer les menus</Button>
                                </Box>
                                <Divider orientation="vertical" flexItem  className={classes.divider} />

                            </Box>

                        </div>
                    </Grid>
                    <Grid item sm={3}> </Grid>
                    <Grid item sm={3} spacing={4}>
                        {/* <Button variant="default"   >Menus</Button>
                    <Button variant="default"   >Menus</Button>
                    <Button variant="default"   >Menus</Button> */}
                        <div style={{ flex: 1 }}>
                            <Box display="flex" flexDirection="row" p={1} m={1} justifyContent='space-between'>
                            <Divider orientation="vertical" flexItem  className={classes.divider} />

                                <Box flexGrow={1} className={classes.menu_elt_parent}>
                                    <Button variant="default" className={classes.button}   >Menus</Button>
                                </Box>
                                <Divider orientation="vertical" flexItem  className={classes.divider} />

                                <Box flexGrow={1} className={classes.menu_elt_parent}>
                                <Button size="large" startIcon={<AccountBoxIcon />} className={classes.button}  >
                                        
                                     </Button>  
                                </Box>
                                <Divider orientation="vertical" flexItem  className={classes.divider} />

                                <Box flexGrow={1} className={classes.menu_elt_parent}>
                                    <Button startIcon={<ShoppingBasketIcon />} className={classes.button}  >
                                        Panier
                                     </Button>                                
                                 </Box>
                            </Box>

                        </div>

                    </Grid>

                </Grid>

            </Toolbar>
        </AppBar>
    )
};

export default Navbar;