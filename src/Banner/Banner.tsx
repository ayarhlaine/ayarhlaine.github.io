import React, {useMemo} from 'react';
import './Banner.scss';
function Banner() {
    const trail = useMemo(() => {
        const styles: any[] = [];
        [0, 0, 0].map((element, index) => {
          styles.push({
            animationDelay: `${index * 250}ms`,
          });
          return null;
        });
        return styles;
      }, []);
    return (
        <div className="banner">
            <div className="container">
                <div className="bannerInnerContainer">
                    <h2 className="bannerInnerContainer__header" style={trail[0]}>I am 
                        <span className="bannerInnerContainer__header__name">&nbsp;Ayar Hlaine</span>
                    </h2>
                    <p className="bannerInnerContainer__text" style={trail[1]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nostrum nihil nulla molestiae amet ex assumenda nesciunt id, similique neque sequi fugiat a! Mollitia accusamus exercitationem maxime eius! Aspernatur, vel!</p>
                </div>
            </div>
        </div>
    )
}

export default Banner;
