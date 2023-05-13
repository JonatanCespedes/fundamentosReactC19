import "./TikTakToe.css";
import { Board } from "./components/Board";

export const TikTakToe = () => {
    return (
        <div className="tikTakToeWrapper">
            <h1>Ta-te-ti</h1>
            <Board/>
        </div>
    )
}