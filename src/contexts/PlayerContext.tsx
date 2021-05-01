import { useState, createContext, ReactNode, useContext } from 'react';
import { IoMusicalNotes } from "react-icons/io5";

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
}

type PlayerContextData = {
    episodeList: Episode[];
    currentEpisodeIndex: number;
    isPlaying: boolean;
    isLooping: boolean;
    isShuffling: boolean;
    isPlayer: boolean;
    play: (episode: Episode) => void;
    playList: (list: Episode[], index: number) => void;
    setPlayingState: (state: boolean) => void;
    tooglePlay: () => void;
    tooglePlayer: () => void;
    toogleLoop: () => void;
    toogleShuffle: () => void;
    playNext: () => void;
    playPrevious: () => void;
    clearPlayerState: () => void;
    hasNext: boolean;
    hasPrevious: boolean;
}

type PlayerContextProviderProps = {
  children: ReactNode;
}

export const PlayerContext = createContext({} as PlayerContextData); 

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
    const [episodeList, setEpisodeList] = useState([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);
    const [isPlayer, setIsPlayer] = useState(false);
  
    function play(episode: Episode){
      setEpisodeList([episode]);
      setCurrentEpisodeIndex(0);
      setIsPlaying(true);
    }

    function playList(list: Episode[], index: number){
      setEpisodeList(list);
      setCurrentEpisodeIndex(index);
      setIsPlaying(true);
    }
  
    function tooglePlay() {
      setIsPlaying(!isPlaying);
    }

    function toogleLoop() {
      setIsLooping(!isLooping);
    }
    function toogleShuffle() {
      setIsShuffling(!isShuffling);
    }
  
    function setPlayingState(state: boolean){
      setIsPlaying(state);
    }

    function tooglePlayer(){
      setIsPlayer(!isPlayer)
    }

    function clearPlayerState() {
      setEpisodeList([]);
      setCurrentEpisodeIndex(0);
    }

    const hasPrevious = currentEpisodeIndex > 0;
    const hasNext = isShuffling || (currentEpisodeIndex + 1) < episodeList.length;

    function playNext() {
      if (isShuffling) {
        const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);
        
        setCurrentEpisodeIndex(nextRandomEpisodeIndex);
      } else if (hasNext) {
        setCurrentEpisodeIndex(currentEpisodeIndex + 1);
      }
    }

    function playPrevious() {
      if (hasPrevious) {
        setCurrentEpisodeIndex(currentEpisodeIndex -1);
      }
    }
  
    return (
      <PlayerContext.Provider 
        value={{ 
          episodeList, 
          currentEpisodeIndex, 
          play, 
          playNext,
          playPrevious,
          playList,
          isPlaying, 
          isLooping,
          isShuffling,
          isPlayer,
          tooglePlay,
          toogleLoop,
          toogleShuffle, 
          setPlayingState,
          hasNext,
          hasPrevious,
          clearPlayerState,
          tooglePlayer,
        }}>
        {children}
      </PlayerContext.Provider>
    );
}

export const usePlayer = () => {
  return useContext(PlayerContext);
}

export const ButtonMediaPlayer = (classe: string, tgPlayer: () => void, statePlayer: boolean) => {
  return(
    <button className={classe} onClick={tgPlayer}>{statePlayer ? 'Fechar' : 'Abrir'} Player <IoMusicalNotes /></button>
  )
}