import { createContext, useContext, useState } from 'react';

const AudioContext = createContext();

export const useAudioContext = () => {
  return useContext(AudioContext);
};

export const AudioProvider = ({ children }) => {
  const [playSong, setPlaySong] = useState(true);

  const togglePlay = () => {
    setPlaySong(!playSong);
  };

  return (
    <AudioContext.Provider value={{ playSong, togglePlay }}>
      {children}
    </AudioContext.Provider>
  );
};