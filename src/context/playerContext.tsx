import { type } from 'node:os';
import {createContext, useState, ReactNode} from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type playerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Episode) => void;
  playList: (list: Episode[], index: number) => void;
  setPlayingState: (state: boolean) => void;
  togglePlay: () => void;
};

export const playerContext = createContext({} as playerContextData);

type PlayerContextProviderProps = {
  children: ReactNode;
}

export function PlayerContextProvider({children}: PlayerContextProviderProps){
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false)

  function play(episode: Episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playList(list: Episode[], index: number) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  return (
    <playerContext.Provider 
    value={{
      episodeList,
      currentEpisodeIndex, 
      play, 
      playList,
      isPlaying, 
      togglePlay, 
      setPlayingState
      }}
      >

      {children}
    </playerContext.Provider>
  )}