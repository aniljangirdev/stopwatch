import { Fragment } from "react";
import './header.css';

const Headers = () => {
    return (
        <Fragment>
            <div className="main">
                <div className="header">
                    <div className="page_title">
                        <span>Summary</span>
                    </div>
                    <div className="username">
                        <span>Summary</span>
                    </div>
                    <div className="signout">
                        <span>Sign out</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Headers;