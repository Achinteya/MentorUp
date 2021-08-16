import logo from './logo.svg';
import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton, withTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddPersonIcon from '@material-ui/icons/PersonAdd';
import Box from '@material-ui/core/Box';
import Image from './695655856.jpg';
import tempLogo from './tempLogo.png';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  button: {
    padding: '1.5vh',
    paddingLeft: '2vh',
    paddingRight: '2vh'
  },
  navBar: {
    backgroundColor: "white",
  },
  logo: {
    height: '7vh'
  },
  navItems: {
    color: "white",
    paddingLeft: '2vh',
    paddingRight: '2vh'
  },
  headerImgCont: {
    height: "93vh",
    overflow: "hidden"
  },
  headerImg: {
    width: '100%',
    position: 'relative',
    bottom: '15vh'
  },
  // descStyleCont: {
  //   opacity: '75%'
  // },
  descriptionStyle: {
    margin: '10vh',
    marginLeft: '20vw',
    marginRight: '20vw',
    fontSize: '100%'
  },
  selectStyle: {
    margin: theme.spacing(6),
    minWidth: '10vw',
    maxWidth: '10vw',
    backgroundColor: "#F9F9F9",
    boxShadow: "3px 3px black",
    borderRadius: "0.75vw"
  },
  formControl: {
    alignItems: "center"
  },
  filterLabel: {
    fontSize: "150%",
    fontWeight: "bold"
  },
  filterContainer: {
    marginTop: "1vw",
  },
  cardContent: {
    minHeight: "10vw",
  }
}));

function App() {
  const classes = useStyles();
  
  return (
    <div id = "page-container" className={classes.pageContainer}>
      <div id = "top-header"></div>
      <div id = "main-header">
        <div id = "top-navigation" style={{width:'100%'}}>
          <Box display="flex" className={classes.navBar} p={1} bgcolor="background.paper" paddingLeft="15vw" paddingRight="15vw">
            <Grid container className={classes.navItems} justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography>
                  <img src={tempLogo} className={classes.logo}/>
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained"
                        // color="primary"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd9pNVcS24d71F0aIhxglP1sW_2y0o2LVScVT2HCO5JKeO78w/viewform" 
                        target="_blank"
                        className={classes.button}
                        startIcon={<AddPersonIcon />}
                >
                  MENTOR SIGN-UP
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <div id = "main-area">
        <Grid container direction="row" alignItems="center" justifyContent="center" className={classes.mainContent}>
          <Grid item>
            <Box className={classes.headerImgCont}>
              <img src={Image} className={classes.headerImg}/>
            </Box>
          </Grid>
          <Grid item className={classes.descStyleCont}>
            <Typography className={classes.descriptionStyle}>
              <h1>Connecting Students with Mentors for Career Exploration</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec iaculis nisl, vitae dictum nibh. Curabitur feugiat mollis magna eu commodo. Nulla lacinia dignissim ex, eu cursus 
                  purus vulputate at. Maecenas auctor ut libero eget auctor. Quisque quis imperdiet arcu. Suspendisse potenti. Vestibulum pulvinar diam non efficitur dictum.

                  Fusce sed nibh congue, sagittis lorem sed, pulvinar neque. Proin pulvinar eu ex eu pulvinar. Cras velit tellus, hendrerit nec tortor id, convallis aliquet sapien. Vivamus quis 
                  enim at neque pharetra congue at vel arcu. Suspendisse molestie, tellus id congue consequat, nunc eros pretium neque, id hendrerit lectus magna vel turpis. Fusce gravida sapien 
                  non odio porta, ac interdum turpis porttitor. Proin aliquet sed urna sed sagittis. Quisque dignissim lectus nec nibh vehicula, eu varius elit dictum. Interdum et malesuada fames 
                  ac ante ipsum primis in faucibus. Aliquam erat volutpat. Sed consequat tristique turpis, ut faucibus arcu ornare vitae.

                  Integer faucibus odio at molestie aliquet. Donec sed euismod quam. Maecenas pharetra tortor ut dui rhoncus vestibulum. Sed fringilla nisl id dui lobortis fermentum. Vivamus 
                  venenatis in nisi quis tincidunt. Nam lorem metus, tempus eu rutrum at, semper id eros. Donec laoreet turpis quis justo tincidunt, ac hendrerit mi porttitor. In eget mauris 
                  mattis, imperdiet nisi in, elementum orci. Etiam vitae mi felis. Integer vel felis sem. Cras dictum, leo tempor semper finibus, diam turpis sagittis nisl, quis placerat risus 
                  sapien ac erat. Curabitur faucibus diam a justo tempor laoreet. Donec iaculis lobortis diam et tincidunt. Praesent aliquam metus nisl, eu sollicitudin sapien facilisis et. 
                  Etiam a feugiat elit.</h4>
            </Typography>
          </Grid>
        </Grid>
        
        <Box bgcolor="black" color="white" padding="4vw" paddingLeft="15vw">
          <Grid container justifyContent="left">
            <Grid item>
              <Typography variant="h3">Mentors</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box paddingLeft="15vw" paddingRight="15vw">

          <Grid container justifyContent="space-between" className={classes.filterContainer}>
            <Grid item>
              <FormControl className={classes.formControl}>
                <InputLabel id="fieldLabel" className={classes.filterLabel}>Field</InputLabel>
                <Select
                  labelId="fieldLabel"
                  variant="outlined"
                  value={"Field"}
                  displayEmpty
                  className={classes.selectStyle}
                  native
                  inputProps={{
                    name: 'Field',
                  }}
                >
                  <option value={"IT"}>IT</option>
                  <option value={"Engineering"}>Engineering</option>
                  <option value={"Design"}>Design</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl className={classes.formControl}>
                <InputLabel id="degreeLabel" className={classes.filterLabel}>Degree</InputLabel>
                <Select
                  labelId="degreeLabel"
                  variant="outlined"
                  value={"Degree"}
                  displayEmpty
                  className={classes.selectStyle}
                  native
                  inputProps={{
                    name: 'Field',
                  }}
                >
                  <option value={"bachelors"}>Bachelors</option>
                  <option value={"masters"}>Masters</option>
                  <option value={"phd"}>PHD</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl className={classes.formControl}>
                <InputLabel id="genderLabel" className={classes.filterLabel}>Gender</InputLabel>
                <Select
                  labelId="genderLabel"
                  variant="outlined"
                  value={100}
                  displayEmpty
                  className={classes.selectStyle}
                  native
                  inputProps={{
                    name: 'Gender',
                  }}
                  >
                  <option value={"Man"}>Man</option>
                  <option value={"Woman"}>Woman</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl className={classes.formControl}>
                <InputLabel id="locationLabel" className={classes.filterLabel}>Location</InputLabel>
                <Select
                  labelId="locationLabel"
                  variant="outlined"
                  value={100}
                  displayEmpty
                  className={classes.selectStyle}
                  native
                  inputProps={{
                    name: 'Location',
                  }}
                  >
                  <option value={"westCoast"}>West Coast</option>
                  <option value={"midWest"}>Mid-West</option>
                  <option value={"eastCoast"}>East Coast</option>
                  <option value={"south"}>South</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="space-between"
            >

            <Grid item xs>
              <Paper elevation={3}>
                <Card className="cardRoot">
                  <CardHeader 
                    title={<Typography variant="h6">Jake Johnson</Typography>}
                    subheader={<Typography variant="subheader1">UI/UX Designer</Typography>}
                    avatar={<Avatar className={classes.large}/* Can add an image tag to this I think -Ethan */></Avatar>}>
                  </CardHeader>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus neque, pellentesque at ullamcorper ut, dignissim id mauris. Donec consectetur elit congue
                      cursus sagittis. Sed rhoncus eros ac orci pretium facilisis. Cras faucibus dictum urna. Nulla id malesuada erat, vitae egestas tortor. Sed sed magna sapien. 
                      Cras nisl est, varius.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                    <Button size="large">Message</Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>

            <Grid item xs>
              <Paper elevation={3}>
                <Card className="cardRoot">
                  <CardHeader 
                    title={<Typography variant="h6">Kathy Kennedy</Typography>}
                    subheader={<Typography variant="subheader1">Database Administrator</Typography>}
                    avatar={<Avatar className={classes.large} /* Can add an image tag to this I think -Ethan */></Avatar>}>
                  </CardHeader>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus neque, pellentesque at ullamcorper ut, dignissim id mauris. Donec consectetur elit congue
                      cursus sagittis. Sed rhoncus eros ac orci pretium facilisis. Cras faucibus dictum urna. Nulla id malesuada erat, vitae egestas tortor. Sed sed magna sapien. 
                      Cras nisl est, varius.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                    <Button size="large">Message</Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>

            <Grid item xs>
              <Paper elevation={3}>
                <Card className="cardRoot">
                  <CardHeader 
                    title={<Typography variant="h6">Stacy Sebastian</Typography>}
                    subheader={<Typography variant="subheader1">Web Developer</Typography>}
                    avatar={<Avatar className={classes.large} /* Can add an image tag to this I think -Ethan */></Avatar>}>
                  </CardHeader>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus neque, pellentesque at ullamcorper ut, dignissim id mauris. Donec consectetur elit congue
                      cursus sagittis. Sed rhoncus eros ac orci pretium facilisis. Cras faucibus dictum urna. Nulla id malesuada erat, vitae egestas tortor. Sed sed magna sapien. 
                      Cras nisl est, varius.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                    <Button size="large">Message</Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>

            <Grid item xs>
              <Paper elevation={3}>
                <Card className="cardRoot">
                  <CardHeader 
                    title={<Typography variant="h6">John C. Smith</Typography>}
                    subheader={<Typography variant="subheader1">Software Engineer</Typography>}
                    avatar={<Avatar className={classes.large} /* Can add an image tag to this I think -Ethan */></Avatar>}>
                  </CardHeader>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus neque, pellentesque at ullamcorper ut, dignissim id mauris. Donec consectetur elit congue
                      cursus sagittis. Sed rhoncus eros ac orci pretium facilisis. Cras faucibus dictum urna. Nulla id malesuada erat, vitae egestas tortor. Sed sed magna sapien. 
                      Cras nisl est, varius.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                    <Button size="large">Message</Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
            
          </Grid>
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="space-around"
            >

            <Grid item xs>
              <Paper elevation={3}>
                <Card className="cardRoot">
                  <CardHeader 
                    title={<Typography variant="h6">Austin Alexander</Typography>}
                    subheader={<Typography variant="subheader1">Computer Support Technician</Typography>}
                    avatar={<Avatar className={classes.large} /* Can add an image tag to this I think -Ethan */></Avatar>}>
                  </CardHeader>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus neque, pellentesque at ullamcorper ut, dignissim id mauris. Donec consectetur elit congue
                      cursus sagittis. Sed rhoncus eros ac orci pretium facilisis. Cras faucibus dictum urna. Nulla id malesuada erat, vitae egestas tortor. Sed sed magna sapien. 
                      Cras nisl est, varius.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                    <Button size="large">Message</Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>

            <Grid item xs>
              <Paper elevation={3}>
                <Card className="cardRoot">
                  <CardHeader 
                    title={<Typography variant="h6">Nathan Nesham</Typography>}
                    subheader={<Typography variant="subheader1">Systems Analyst</Typography>}
                    avatar={<Avatar className={classes.large} /* Can add an image tag to this I think -Ethan */></Avatar>}>
                  </CardHeader>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus neque, pellentesque at ullamcorper ut, dignissim id mauris. Donec consectetur elit congue
                      cursus sagittis. Sed rhoncus eros ac orci pretium facilisis. Cras faucibus dictum urna. Nulla id malesuada erat, vitae egestas tortor. Sed sed magna sapien. 
                      Cras nisl est, varius.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                    <Button size="large">Message</Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>

            <Grid item xs>
              <Paper elevation={3}>
                <Card className="cardRoot">
                  <CardHeader 
                    title={<Typography variant="h6">Julia Jamison</Typography>}
                    subheader={<Typography variant="subheader1">Data Analyst</Typography>}
                    avatar={<Avatar className={classes.large} /* Can add an image tag to this I think -Ethan */></Avatar>}>
                  </CardHeader>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus neque, pellentesque at ullamcorper ut, dignissim id mauris. Donec consectetur elit congue
                      cursus sagittis. Sed rhoncus eros ac orci pretium facilisis. Cras faucibus dictum urna. Nulla id malesuada erat, vitae egestas tortor. Sed sed magna sapien. 
                      Cras nisl est, varius.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                    <Button size="large">Message</Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>

            <Grid item xs>
              <Paper elevation={3}>
                <Card className="cardRoot">
                  <CardHeader 
                    title={<Typography variant="h6">Rachel Richard</Typography>}
                    subheader={<Typography variant="subheader1">Cloud Developer</Typography>}
                    avatar={<Avatar className={classes.large} /* Can add an image tag to this I think -Ethan */></Avatar>}>
                  </CardHeader>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus neque, pellentesque at ullamcorper ut, dignissim id mauris. Donec consectetur elit congue
                      cursus sagittis. Sed rhoncus eros ac orci pretium facilisis. Cras faucibus dictum urna. Nulla id malesuada erat, vitae egestas tortor. Sed sed magna sapien. 
                      Cras nisl est, varius.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                    <Button size="large">Message</Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default App;
