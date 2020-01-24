import React from "react"
import PlaylistItem from "../PlaylistItem"
import StyledPlaylistitems from "../styles/StyledPlaylistitems"


const Playlistitems = props => (
    <StyledPlaylistitems>
        {videos.map(video => {
            <PlaylistItem
            key={video.key}
            video={video}
            active={video.id === active.id ? true : false}
            played={video.played} />
        })}
    </StyledPlaylistitems>
       
)

export default Playlistitems