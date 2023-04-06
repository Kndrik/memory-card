import { Logo } from "./Logo";
import { Scoreboard } from "./Scoreboard";

export function Header(props) {
    return (
        <div className="header">
           <Logo />
           <Scoreboard />
        </div>
    );
}