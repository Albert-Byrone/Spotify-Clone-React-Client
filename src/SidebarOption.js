import React from 'react'
import { useDataLayerValue } from './DataLayer'
import "./SidebarOption.css"

function SidebarOption({ spotify, id,title, Icon}) {
    // eslint-disable-next-line 
    const [{}, dispatch] = useDataLayerValue();
    // eslint-disable-next-line 

    const changePlaylist = (id, e) => {
        // eslint-disable-next-line 
        dispatch({
            type: 'SET_CURRENT_PLAYLIST',
            id: id
            // eslint-disable-next-line 
        });
            

        spotify.getPlaylistTracks(id).then((response) => {
            // eslint-disable-next-line 
            dispatch({
                type: 'SET_TRACKS',
                tracks: response
            })
            // eslint-disable-next-line 
        });
        
    }
    return (
        <div className='sidebarOption'>
            {Icon && <Icon className='sidebarOption__icon'/>}
            {Icon ? <h4>{title}</h4> : <p onClick={(e) => changePlaylist(id, e)}>{title}</p>}
        </div>
    )
}

export default SidebarOption
