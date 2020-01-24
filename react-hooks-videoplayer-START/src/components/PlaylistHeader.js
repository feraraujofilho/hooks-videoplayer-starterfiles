import React from "react";
import StyledPlaylistHeader from ".styles/StyledPlaylistHeader"
import StyledJourney from "./styles/StyledJourney"

const PlaylistHeader = {active, total} => (
    <StyledPlaylistHeader>
        <p>{ActiveXObject.title}</p>
        <StyledJourney>
            {ActiveXObject.num} / {total}
        </StyledJourney>
    </StyledPlaylistHeader>)

export default PlaylistHeader;
