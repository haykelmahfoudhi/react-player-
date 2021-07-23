import LibrarySong from "./LibrarySong";

const Library = ({
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`Library ${libraryStatus ? "active-Library" : ""}`}>
      <h2>Library</h2>
      <div className="Library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
