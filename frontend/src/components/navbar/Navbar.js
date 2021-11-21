import React, { Fragment } from 'react';
import "./navbar.css";

const Navbar = () => {
    return (
        <Fragment>
            <div id="container2">
                <div className="lft-contents">
                    <p><i class="fal fa-phone-alt"></i> +91 883 778 4477</p>
                    <p><i class="fal fa-envelope-square"></i> support@me.com</p>
                </div>
                <div className="rit-contents">
                    <p>Theme FAQ"s</p>
                    <p>Need Help?</p>
                </div>
            </div>
           <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                    Softsensor.ai
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                    <span /><i class="fas fa-bars"></i>
                    <span />
                    <span />
                    </label>
                </div>
                <div className="nav-links">
                    <a href="/" >Home</a>
                    <a href="/">Pages</a>
                    <a href="/" >User Account</a>
                    <a href="/" >Vendor Account</a>
                    <a href="/" >Track My Orders</a>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar
