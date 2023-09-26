import Footer from "../Footer/Footer";
import Functionality from "./Function";
import Landing from "./Landing";
import Us from "./Us";


export default function Home(props){

    return(
        <section id="home">
            <Landing />
            <Functionality />
            <Us />
            <Footer />
        </section>
    )

}