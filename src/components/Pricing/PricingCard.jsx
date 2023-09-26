import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function PricingCard(props) {
  return (
    <Paper
      sx={{
        p: 5,
        background:'#9778DB',
        borderRadius:'15px',
        flexGrow: 1,
        boxShadow:'10px 13px 20px 9px #000'
      }}
    >

        <div style={{position:'relative'}}>
                    <img src="https://img.icons8.com/ios-filled/100/starred-ticket.png" alt="starred-ticket" className='ticket'/> :
        </div>       

      <Grid container spacing={2} style={{marginTop:'2%',height:'100%' }}>

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>

              <h5 style={{margin:0, fontWeight:600}}>
                { 
                    props.pack === 1 ? 'Single Credit' :  
                    `Pack of ${props.pack} Credits` 
                }
              </h5>
              <h6 style={{margin:0, marginTop:'3%'}}> The cost of {props.pack} pack is just </h6>

            </Grid>
            <Grid item>
                <div className='flex-sb'>
                    <h4 style={{margin:0, fontWeight:700}}> <small style={{fontWeight:300}}>at just </small> &#8377;{props.price} </h4>
                    <button> Buy </button>
                </div>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Paper>
  );
}
