//September 11, 2023 || Second React Project (Personal Blog)

import Footer from './Footer';
import Header from './Header';
import Body from './Body';
import Body2 from './BodyImg';
import Bodytext from'./Bodytext';

function App(){
    return(
        <>
        <Header />
        <br/>
        <br/>
        <br/>
        <br/>
        <center>
        <Body2 imgSrc="https://i.ibb.co/KFHFQfd/hyperx-keyb-PNG.png"/>
        <Body champs = "the keyboard for you."/>
        <br/>
        <Bodytext champs = "Key Features"/>
        <br/>
        </center>
        <Footer />
        </>
    )
}
export default App;