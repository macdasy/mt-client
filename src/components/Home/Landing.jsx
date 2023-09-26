import { Box, Grid, Stack } from "@mui/material";

import pie from '../../assets/pie.png';

export default function Landing(){

    const toLogin = () => {
        window.location.pathname = '/';
        window.location.pathname = '/login'
    }

    return(
        
        <section className="wrapper">

        <Box id="Landing" sx={{ height: { xs:'auto', md:'100vh' }  }}>

            <Grid container>

                <Grid item xs={12} md={6} className="land-slides">

                    <div className="land-left">
                        <div className="flex-sb">
                            <h2 className="w6" style={{margin:0, padding:0}}> Macro<span style={{color:'#55BF9D'}}>Touch</span> </h2>
                            {/* <span data-uk-icon="icon: sign-in" style={{color:'black'}}/> */}
                            <button onClick={toLogin}> Login <span data-uk-icon="icon: sign-in" style={{color:'black'}}/>  </button>
                        </div>

                        <div>
                            <h1 className="w6 resize" style={{ margin:0, padding:0, lineHeight:'1' }}> 
                                Get your bank statement <span className="fancy-underline">summarized!</span>
                            </h1>
                            <h4 style={{marginTop:'3%'}} className="w5"> In minutes & Feel the Veracity </h4>
                            <button className="dark" style={{margin:'2% auto 5%'}}> Get Started </button>
                        </div>

                        <div>   
                    
                            <h6 className="w5"> Available in </h6>

                            <Stack direction='row' gap={2}>
                                <button className="large" style={{ display:'flex', alignItems:'center', gap:'10px', padding:'2% 3%' }}>
                                    <img src="https://img.icons8.com/fluency/30/google-play.png" alt="google-play"/>
                                    <p style={{margin:0}}>
                                    <small>Get it on</small> <br />
                                    <strong> Play Store </strong>
                                    </p>     
                                </button>  

                                <button className="large" style={{ display:'flex', alignItems:'center', gap:'10px', padding:'2% 3%' }}>
                                    <img src="https://img.icons8.com/color/30/apple-app-store--v1.png" alt="google-play"/>
                                    <p style={{margin:0}}>
                                    <small>Get it on</small> <br />
                                    <strong> App Store </strong>
                                    </p>     
                                </button>  
                            </Stack>                
                        </div>
                        
                    </div>
                </Grid>


                <Grid item xs={12} md={6}>
                    <Box sx={{ display: { xs:'none', sm:'none', md:'flex' }, height:'100%' }} className='land-slides land-right'>
                        <img 
                            src={pie}
                            alt='' 
                        />
                    </Box>
                </Grid>

            </Grid>


        </Box>
        </section>

    )

}