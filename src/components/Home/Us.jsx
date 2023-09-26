import { Grid } from "@mui/material";

const points = ['Privacy' , 'Accuracy', 'Timeliness', 'Data Privacy'];


export default function Us() {
    return(
        <section className="wrapper padded uk-text-center" id="us">

            <h1 style={{color:'white', fontWeight:'700'}}> Why choose us? </h1>

            <Grid style={{marginTop:'1%'}} container columnSpacing={5} rowSpacing={5}>
                    
                    <Grid item xs={12} md={6}>
                        <div className="us uk-text-center">
                            <img src="https://img.icons8.com/wired/60/privacy.png" alt="privacy"/>
                            <h4 style={{margin:0, fontWeight:'bold'}}> 
                                {points[0]} 
                            </h4>
                            <p style={{padding:'0% 15%'}}> Our system will process and analyze your transaction data. </p>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className="us uk-text-center">
                            <img src="https://img.icons8.com/material-outlined/60/define-location.png" alt="define-location"/>
                            <h4 style={{margin:0, fontWeight:'bold'}}> 
                                {points[1]} 
                            </h4>
                            <p style={{padding:'0% 15%'}}> Our system will process and analyze your transaction data. </p>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className="us uk-text-center">
                            <img src="https://img.icons8.com/material-outlined/60/stopwatch.png" alt="stopwatch"/>
                            <h4 style={{margin:0, fontWeight:'bold'}}> 
                                {points[2]} 
                            </h4>
                            <p style={{padding:'0% 15%'}}> Our system will process and analyze your transaction data. </p>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className="us uk-text-center">
                            <img src="https://img.icons8.com/ios/60/data-protection.png" alt="data-protection"/>
                            <h4 style={{margin:0, fontWeight:'bold'}}> 
                                {points[3]} 
                            </h4>
                            <p style={{padding:'0% 15%'}}> Our system will process and analyze your transaction data. </p>
                        </div>
                    </Grid>
                   
                </Grid>
                <button className="dark" style={{margin:'5% auto 0%'}}> See Pricing </button>

        </section>
    )
}
