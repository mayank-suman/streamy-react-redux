import React, {Component} from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./googleAuth";

class Header extends Component {
    render() {
        return (
            <div className="ui secondary pointing menu">
                <Link to="/" className="item" >
                    Streams
                </Link>
                <div className="right menu">
                    <Link to="/" className="item" >
                        All Streams
                    </Link>
                </div>
                <GoogleAuth />
            </div>
        )
    }
}

export default Header;