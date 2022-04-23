// import { playAudio } from "../util";

const LibrarySong = ({
    song,
    songs,
    setCurrentSong,
    id,
    audioRef, 
    isPlaying,
    setSongs,
    }) => {
    const songSelectHandler = async () => {
        const selectedSong = songs.filter((state) => state.id === id) 
        await setCurrentSong(selectedSong[0]);
         //ADD ACTIVE STATE
         const newSongs = songs.map((song) =>{
            if(song.id === id){
                return{
                    ...song,
                    active: true,
                };
            }else{
                return{
                    ...song,
                    active: false,
                };
            };
        });
        setSongs(newSongs);
    
        // CHECK IF THE SONG IS PLAYING 
        if(isPlaying) audioRef.current.play();

    }
    return (
       <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
           <img src={song.cover} alt={song.name}/>
           <div className="song-description">
           <h3>{song.name}</h3>
           <h4>{song.artist}</h4>
           </div>
       </div>
    )
}

export default LibrarySong