import React from "react"
import {ThemeProvider} from "styled-components"
import Video from "../Video"
import Playlist from "../containers/Playlist"

const theme = {
    bhcolor: "#353535",
    bgcolorItem: "#414141",
    bgcolorItemActive: "#405c63",
    bgcolorPlayed: "#526d4e",
    border: "none",
    borderPlayer: "none",
    color: "#fff"
}


const WbnPlayer = props => { 
    return (
        <>
        <Video />
        <Playlist />
        </>
    ) 
}


export default WbnPlayer