import React from 'react';
import './Banner.scss';
function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <div className="bannerInnerContainer">
                    <h2 className="bannerInnerContainer__header">I am 
                        <span className="bannerInnerContainer__header__name">&nbsp;Ayar Hlaine</span>
                    </h2>
                    <p className="bannerInnerContainer__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nostrum nihil nulla molestiae amet ex assumenda nesciunt id, similique neque sequi fugiat a! Mollitia accusamus exercitationem maxime eius! Aspernatur, vel!</p>
                </div>
            </div>
        </div>
    )
}

export default Banner;
