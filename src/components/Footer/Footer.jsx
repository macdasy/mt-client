import { Grid, IconButton, Stack } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer(){

    return(
        <section id="footer">
            
            <div className="uk-text-center">
                <h1 style={{color:'white', fontWeight:'700'}}> Get Your First Summarization Done! </h1>
                <h6 style={{color:'white', fontWeight:500, padding:'0% 6%', margin:"2% 0 3%"}}> 
                    Get your summarization on your bank statements. There is no data leakage and no data storing. 
                    Grab your first report and have a comprehensive view of your bank account. 
                </h6>
                <button className="no w6"> Get Started </button>
            </div>
            <hr style={{margin:'5% 0'}}/>
            <Grid container rowSpacing={5}>
                <Grid item xs={12} md={5}>

                    <h2 style={{color:'white', fontWeight:700}}> MacroTouch </h2>
                    <h4 style={{color:'white', fontWeight:400, margin:0}}> Feel the Veracity </h4>
                    <Stack direction={'row'} style={{padding:'5% 0'}}>
                        <IconButton aria-label="delete" size="small" style={{color:'#55BF9D'}}>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton aria-label="delete" size="small" style={{color:'#55BF9D'}}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="delete" size="small" style={{color:'#55BF9D'}}>
                            <EmailIcon />
                        </IconButton>
                        <IconButton aria-label="delete" size="small" style={{color:'#55BF9D'}}>
                            <TwitterIcon/>
                        </IconButton>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={2}>
                    <div>
                        <h4 style={{color:'white', fontWeight:700}}> Quick Links </h4>
                        <ul class="uk-list">
                            <li> <a href='.'>Home </a> </li>
                            <li> <a href='/login'>Login </a> </li>
                            <li> <a href='/pricing'>Pricing </a> </li>
                        </ul>
                    </div>
                </Grid>

                <Grid item xs={12} md={2}>
                    <div>
                        <h4 style={{color:'white', fontWeight:700}}> T & C </h4>
                        <ul class="uk-list">
                            <li> <a href='.'>Terms & Conditions </a> </li>
                            <li> <a href='.'>Privacy Policy </a> </li>
                            <li> <a href='.'>Instruction </a> </li>
                        </ul>
                    </div>
                </Grid>
                
                <Grid item xs={12} md={3}>
                    <div>
                        <h4 style={{color:'white', fontWeight:700}}> Contact </h4>
                        <ul class="uk-list">
                            <li><span uk-icon="mail"/> someone@gmail.com</li>
                            <li><span uk-icon="receiver"/> +91-7604963319</li>
                            <li><span uk-icon="location" /> 232, Salem Main Road, Chinnasalem</li>
                        
                        </ul>
                    </div>
                </Grid>
            </Grid>
            <hr style={{margin:'5% 0 0'}}/>
            <h5 style={{color:'white', textAlign:'center', margin:'3% 0 1%'}}> Copyright © 2023 MacroTouch. All rights reserved. </h5>
        </section>
    )

}