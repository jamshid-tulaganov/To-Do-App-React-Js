import React, {Component} from 'react';
import  "./logo.svg";
class Header extends Component {
    render() {
        return (
            <div>
                <header className="Header">
                    <div className="Container Header--Container">
                        <div className="Header__Logo">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 48 48" width="50px"
                                 height="50px">
                                <path fill="#0d47a1"
                                      d="M21.25,40.454l6.13-6.142c0.694-0.696,0.694-1.823,0-2.519L11.165,15.547	c-0.694-0.696-1.82-0.696-2.514,0l-6.13,6.142c-0.694,0.696-0.694,1.823,0,2.519l16.215,16.246	C19.43,41.15,20.555,41.15,21.25,40.454z"/>
                                <path fill="#29b6f6" d="M18.788,40.498l-6.223-6.235c-0.669-0.67-0.669-1.756,0-2.426L35.854,8.502	c0.669-0.67,1.753-0.67,2.421,0l6.223,6.235c0.669,0.67,0.669,1.756,0,2.426L21.209,40.498	C20.541,41.167,19.457,41.167,18.788,40.498z"/>
                            </svg>
                        </div>
                        <button type="button" className="Header__Menu">
                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" width="45px" height="45px">
                                <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/>
                            </svg>
                        </button>
                    </div>

                </header>
            </div>
        );
    }
}

export default Header;