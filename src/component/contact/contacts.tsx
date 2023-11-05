import React from 'react';
import {ImFacebook2, ImInstagram, ImLinkedin, ImTwitter} from "react-icons/im";
import {montserrat} from "@/utils/fonts";

function Contacts() {
    return (
        <div className={montserrat.className}>
            <p className="text-white text-left text-xs" >Odernix Nig. Itd.<br/>
                <span className="font-semibold">Head Office Address:</span> 29B N’Djamena crescent, off Aminu Kano Crescent, Wuse 2<br/>
                ©2023, 0dernix is authorized and regulated.</p>
        </div>
    );
}

export default Contacts;