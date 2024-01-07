import React from 'react'
import './Audio.css'
import song from '../../resources/song.mp3'
import pause from '../../resources/pause-icon-3.png'
import play from '../../resources/play-icon.png'
import { useState } from 'react'
import { useAudioContext } from './AudioProvider';

function Audio() {

    const { playSong, togglePlay } = useAudioContext();

  return (
    <div className='audio_container'>
        <img 
        id='album_cover' 
        src="https://www.thelostfrequencies.com/cdn/shop/files/ab67616d0000b27313e54d6687e65678d60466c2.jpg?v=1689317474" 
        alt=""
        style={{animation: !playSong ? 'rotate 10s linear infinite' : 'none'}}
        />
        <nav id='album_cover_spot'></nav>

        <img id='pause' src={playSong?play:pause} alt="" onClick={togglePlay}/>
        
        {!playSong &&
            <audio autoPlay>
                <source src={song} type='audio/mp3'/>
            </audio>
        }
        
    </div>
  )
}

export default Audio