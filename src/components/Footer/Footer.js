import React from 'react';
import  '../Footer/Footer.css';
import { SocialIcon } from 'react-social-icons';
function Footer(){
    return(
        <div className="footer">
        <p>Toqa Bany Yassen</p>
      
<SocialIcon url="https://twitter.com/jaketrent" />
<SocialIcon url="https://facebook.com/jaketrent" />
<SocialIcon url="https://whatsup.com/jaketrent" />

        </div>
    )
}
export default Footer ;