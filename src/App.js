import logo from './logo.svg';
import './App.css';
import { Button, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/navbar'
import MenuContainer from './components/menuContainer'
const useStyles = makeStyles({
  titre: {
    fontFamily: "Amatic",
    fontSize: "20px",
    // fontStyle:'oblique'
  },
  button: {
    color: 'green'
  }
});
function App() {
  const classes = useStyles();
  return (
    <Grid direction='column' container spacing={8} >
      <Grid item> 
        <Navbar/>
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8} >
             <MenuContainer />
          </Grid>
        <Grid item xs={0} sm={2} />

      </Grid>
    </Grid>
  );
}

export default App;
