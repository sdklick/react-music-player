import React, { useState, useEffect } from "react";
import "./index.css";
import Player from "./Player.js";

const App = () => {
  const [songs] = useState([
    {
      title: "Song 1",
      artist: "Artist 1",
      img_src: "https://lyricalduniya.com/wp-content/uploads/2019/10/xsa-300x300.png",
      src: "./music/Thodi-Jagah_(webmusic.in).mp3",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "https://upload.wikimedia.org/wikipedia/en/e/e2/Suno_Na_Sangemarmar.jpg",
      src: "./music/Suno Na Sangemarmar.mp3",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src:
        "https://st1.bollywoodlife.com/wp-content/uploads/photos/janam-janam-song-from-dilwale-poster-out-201512-635469.jpg",
      src: "./music/Janam_Janam.mp3",
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "https://c-fa.cdn.smule.com/rs-s-sf-4/arr/a1/4e/42762516-8961-45b7-ad97-0f43391be93c_1024.jpg",
      src: "./music/Dil Mang Raha Hai Mohlat.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <>
      <div className="App">
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
        />
      </div>
    </>
  );
};

export default App;
