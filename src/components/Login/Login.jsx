import * as React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Box, Grid, TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import cats from '../../assets/cat.svg'

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#181922b8',
            '--TextField-brandBorderFocusedColor': '#181922b8',
            '& label.Mui-focused': {
              color: '#181922',
            },
            '& label': {
                color: '#181922b8',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&:before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid #181922',
            },
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
            root: {
                '--TextField-brandBorderColor': '#181922b8',
                '--TextField-brandBorderFocusedColor': '#181922b8',
                '& label.Mui-focused': {
                  color: '#181922',
                },
                '& label': {
                    color: '#181922b8',
                },
            },
        },
      },
      MuiIconButton: {
        styleOverrides: {
            root: {
                  color: '#181922',
                  '&:hover': {
                    color: '#181922',
                },
            },
        },
      },
    },
});

export default function Login(){

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const outerTheme = useTheme();

    const goHome = () =>{
        window.location.pathname = '/';
    }


    return(
        <section id="Login">

            <div className="login-wrapper">
                <Grid container>
                    <Grid item xs={12} md={7}>
                        <Box sx={{ display: { xs:'none', sm:'none', md:'block' }, height:'100%' }}>
                            <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
                                <img 
                                    style={{ width:'80%' }}
                                    src={cats} 
                                    alt='' 
                                />
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <div className="login-right uk-text-center">
                            <button className='goHome' onClick={goHome}> <span uk-icon='icon:home'/> </button>
                            <div>
                                <img 
                                    src="https://vallarasuk.github.io/Macro-Touch/static/media/whiteLogo.ab0821c3940f289c4885bcf65291c234.svg"
                                    alt=""
                                    style={{paddingBottom:'3%', width:70}}
                                />
                                <h2 style={{ fontWeight:700, margin:0, marginBottom:'1%'}}> Welcome back! </h2>
                                <h6 style={{ margin:0, fontWeight:500}}> Please Enter your Details! </h6>
                            </div>

                            <div>
                                <ThemeProvider theme={customTheme(outerTheme)}>

                                    <TextField
                                        style={{width:'80%', marginBottom:'2%', padding:'2% 0'}}
                                        label="Email"
                                        variant="standard"
                                    />

                                    <FormControl sx={{ width:'80%' }} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                            <Input
                                                style={{ padding:'2% 0'}}
                                                id="standard-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        className='no'
                                                        disableRipple
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                    >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                                }
                                            />
                                    </FormControl>
                                </ThemeProvider>
                                
                                <p style={{textAlign:'right', width:'90%', fontSize:'small'}}>
                                    <a href='.'> Forgot Password? </a>
                                </p>

                                <div className='flex-col'>
                                    <button className='dark'> Login </button>
                                    <button className='google'> 
                                        <img src="https://img.icons8.com/fluency/20/google-logo.png" alt="google-logo" style={{marginRight:'3%'}}/>
                                        Continue with Google 
                                    </button>
                                </div>

                                
                            </div>

                            <div>
                                <p> Create an account here! </p>
                            </div>

                        </div>
                    </Grid>
                </Grid>
            </div>


        </section>
    )

}