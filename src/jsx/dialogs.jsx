import React from "react";
import Masseg from "./masseg";
// import Masseg from "./masseg";


function Dialogs() {
    return (
        <div className="masseges">

            <div className="dialog_list">
                <ul>
                    <li>Keril</li>
                    <li>Sascha</li>
                    <li>Tor4in</li>
                    <li>Luchnik</li>
                    <li>Hacker</li>
                </ul>
            </div>
            <div className="dialog_screen">
                <Masseg msg="Hallo, mann. wie läufst du?"/>
                <Masseg msg='Na sehr gut, hab schon react gelernt'/>

            </div>
        </div>
    );
}


export default Dialogs; 