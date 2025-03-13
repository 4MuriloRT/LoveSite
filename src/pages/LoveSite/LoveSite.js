import "./lovesite.css"
import MusicPlayer from "../../components/MusicPlayer/index.js";
import PhotoCarousel from "../../components/PhotoCarousel/index.js";
import LoveMessage from "../../components/LoveMessage/index.js";
import TimeCounter from "../../components/TimeCounter/index.js";

function LoveSite(){
  return(
    <div className="love-site">
      <MusicPlayer />
      <PhotoCarousel />
      <h2 className="title">❤️Eu te amo há:</h2>
      <TimeCounter />
      <hr/>
      <LoveMessage />
    </div>
  );
}

export default LoveSite;