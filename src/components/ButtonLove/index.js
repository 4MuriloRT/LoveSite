import "./buttonlove.css";
import { Link } from "react-router-dom";

const ButtonLove = () => {
    return(
        <div>
            <Link className="buttonLove" to="/lovesite">💖Click</Link>
        </div>
    );
}

export default ButtonLove;