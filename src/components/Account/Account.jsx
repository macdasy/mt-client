import { Grid } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

export default function Account(){

    return(
        <section id="account">

            <Grid container id='acc-wrapper'>
                <Grid item xs={3} sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                    <Avatar sx={{  width: 200, height: 200, bgcolor: deepOrange[500] }}>N</Avatar>
                    <h2> Hello </h2> 
                </Grid>
                <Grid item xs={9}>

                </Grid>
            </Grid>

        </section>
    )

}