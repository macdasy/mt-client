import { Grid } from "@mui/material";
import PricingCard from "./PricingCard";
import Navbar from "../Navbar/Navbar";

export default function Pricing(){

    return(
        <section id="pricing" className="wrapper">
            <Navbar />
        
            <div className="container">
                <h1 style={{color:'white', fontWeight:700, textAlign:'center'}}> Pick your packs </h1>            
                <h4 style={{color:'white', fontWeight:700, marginTop:0, textAlign:'center'}}> Unlock Endless Possibilities </h4>


                <Grid container rowSpacing={10} columnSpacing={7} style={{marginTop:'1%'}}>
                    
                    <Grid item xs={12} md={4}>
                        <PricingCard pack={1} price={9}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PricingCard pack={6} price={49}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PricingCard pack={14} price={99}/>
                    </Grid>

                </Grid>  
            </div>          

        </section>
    )

}