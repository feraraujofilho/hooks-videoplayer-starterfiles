import React from "react";
import StyledNightmode from "./styles/StyledNightmode"

const Nightmode = ({nightModeCallback, nightMode}) => <StyledNightmode>

    <spam>NightMode!!</spam>
    <label  className="switch">
        <input type="checkbox" checked={nightMode} onChange={nightModeCallback} />
        <spam className="slider round"/>
    </label>
    </StyledNightmode>

export default Nightmode;
