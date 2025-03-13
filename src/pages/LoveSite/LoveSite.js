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
      <LoveMessage />
      <TimeCounter />
    </div>
  );
}

export default LoveSite;