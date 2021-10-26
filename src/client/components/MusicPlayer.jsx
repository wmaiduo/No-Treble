import React from 'react'
import ReactDOM from 'react-dom'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

const MusicPlayer = () => {
    const options = {
        theme: "dark",
        mode: "full",
        remove: true,


    }

    return (
        <ReactJkMusicPlayer {...options} />
    )
}

export default MusicPlayer;