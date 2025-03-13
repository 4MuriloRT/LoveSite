import "./musicplayer.css"

const MusicPlayer = () => (
    <div className="music-player">
      <iframe src="https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n?utm_source=generator" 
      width="300" 
      height="80" 
      frameBorder="0" 
      allow="encrypted-media; autoplay" 
      loading="lazy"
      title="Spotify Music Player"
      ></iframe>
    </div>
  );
  
  export default MusicPlayer;
  
 