import React from 'react';
import { Button, Typography, Grid, AppBar, Toolbar, Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: "300px",
        width:'fullWidth',
        // paddingTop: '10%', // 16:9
        // paddingBottom:'10%',
        // paddingRight:'5%',
        // padding:'5%',
    },
    button:{
        marginBottom:"10px",
        color:"white",
        fontWeight:"Bold",
        borderRadius: 10,
        backgroundColor:"rgba(244, 201, 74, 0.8)",
        fontSize:13,
    },
    regime:{
        marginBottom:"10px",
        color:"white",
        fontWeight:"bold",
        borderRadius: 10,
        fontSize:35,
        fontFamily:'Amatic SC',
        backgroundColor:"rgba(244, 201, 74, 0.8)"
    },
    test:{
        flex:1,
        height: "300px",
        paddingTop: '10%', // 16:9
        paddingBottom:'10%',
        paddingRight:'5%',
        padding:'5%',
        backgroundColor:"rgba(79, 172, 143, 0.6)"
    }
});
const Menu = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card style={{borderRadius: 15}}>
            <CardMedia
                className={classes.media}
                image="https://i.ibb.co/frJPwYc/plat.jpg"
                title="Paella dish"
            >
                <div className={classes.test}>
                <CardContent >
                    <Button variant="contained" color="secondary" fullWidth className={classes.regime}>Végétarien</Button>
                    <Button variant="contained" color="secondary" fullWidth className={classes.button}>233 <br/>profils compatibles</Button>
                    <Button variant="contained" color="secondary" fullWidth className={classes.button}>233 <br/>pouvants se voir porposer un panier</Button>

                </CardContent>
                </div>
               
            </CardMedia>
            {/* <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
      </Typography>
                <Typography variant="h5" component="h2">
                    be{bull}nev{bull}o{bull}lent
      </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
      </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
        <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent> */}

        </Card>
        
    );
}

export default Menu;