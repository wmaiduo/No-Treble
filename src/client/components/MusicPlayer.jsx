import React, { useState, useEffect} from 'react';

import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

import { dummyData1, dummyData2 } from './MusicPlayerDummyData/dummyAudioListPaths';

const MusicPlayer = () => {
    const [audioLists, setAudioLists] = useState(dummyData1);

    const options = {
        theme: "dark",
        mode: "full",
        remove: true,
        autoPlay: true,
        quietUpdate: true,
        clearPriorAudioLists: true,
        audioLists: audioLists,
        defaultVolume: 0.5,
    }

    useEffect(() => {
        setTimeout(() => {
          setAudioLists([...dummyData1, ...dummyData2]);
        }, 5000)
      }, [setAudioLists])

    return (
        <ReactJkMusicPlayer {...options} />
    )
}

export default MusicPlayer;