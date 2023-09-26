import { Grid } from "@mui/material";

const steps = ['Upload your File' , 'Let it Process', 'Download the file'];


export default function Functionality(){

    return(
        <section className="wrapper padded uk-text-center">

            <h1 className="w7"> How it works? </h1>

            <div style={{padding:'5em 0'}}>
                <Grid container columnSpacing={10} rowSpacing={15}>
                    <Grid item xs={12} md={4}>
                        <div className="func uk-text-center">
                            <img src="https://img.icons8.com/sf-black-filled/80/upload.png" alt="upload"/>
                            <h4 style={{margin:0, fontWeight:'bold'}}> 
                                <span id="chip"> 1 </span>
                                {steps[0]} 
                            </h4>
                            <p style={{padding:'0% 15%'}}> Our system will process and analyze your transaction data. </p>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <div className="func uk-text-center">
                        <img src="https://img.icons8.com/material-sharp/80/settings.png" alt="settings"/>
                            <h4 style={{margin:0, fontWeight:'bold'}}> 
                                <span id="chip"> 2 </span>
                                {steps[1]} 
                            </h4>
                            <p style={{padding:'0% 15%'}}> Our system will process and analyze your transaction data. </p>
                        </div>
                    </Grid>
                    
                    <Grid item xs={12} md={4}>
                        <div className="func uk-text-center">
                            <img src="https://img.icons8.com/sf-black-filled/80/download.png" alt="upload"/>
                            <h4 style={{margin:0, fontWeight:'bold'}}> <span id="chip"> 3 </span> {steps[2]} </h4>
                            <p style={{padding:'0% 15%'}}> Our system will process and analyze your transaction data. </p>
                        </div>
                    </Grid>
                </Grid>

                <button className="dark" style={{marginTop:'5%'}}> Upload File </button>
            </div>

        </section>
    )

}