import React, {useState} from "react";
import './AboutTextStyle.css';

export default function AboutText() {

    return (
        <div
            className="word"
            style={{
                paddingTop: '0%',
                paddingLeft: '10%',
                paddingRight: '10%',
                paddingBottom: '5%',
                backgroundColor: 'rgb(207,243,242)',
                color: 'rgb(84, 143, 141)',
                margin: 0,
                fontSize: '1.5em',
                zIndex: -10,
            }}
        >
            <p
                style={{
                    transform: [{ translate: '-100vh' }],
                    animation: 'fall 3.5s forwards',
                }}
            >Please, let me introduce myself.
            </p>
            <p>
                I’m Maya! I am a full stack developer who has a font interest in designs that excites the grey matter inside people’s squidgy brains. I’ve previously worked with clients, large and small to create engaging user focused website and apps that have thoughtful designs and create positive impacts across globe.
            </p>
            <p>
                I like to let loose as well!
            </p>
            <p>
                Outside of work, you can find me catching up with friends or taking a short holiday to somewhere with snow, where I rock and roll on my snowboard. I have been told before that I am a mini golf connoisseur, and I also love to travel!
            </p>
        </div>
    )
}