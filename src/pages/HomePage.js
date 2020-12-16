import React, {Fragment} from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import '../styles/pages/HomePage.css'

const HomePage = () => {

    const name = ("Bryttanie House".split(""));
    const title = ("Designer & Developer".split(""));

    const handleClick = () => {
        let imgTransform = getComputedStyle(document.getElementById("portrait")).transform;

        if(imgTransform === "matrix(1, 0, 0, 1, 0, 0)") {
            imgTransform = "matrix(-1, 0, 0, 1, 0, 0)"
        }
        else if(imgTransform === "matrix(-1, 0, 0, 1, 0, 0)") {
            imgTransform = "matrix(-1, 0, 0, -1, 0, 0)"
        }
        else if(imgTransform === "matrix(-1, 0, 0, -1, 0, 0)") {
            imgTransform = "matrix(1, 0, 0, -1, 0, 0)"
        }
        else if(imgTransform === "matrix(1, 0, 0, -1, 0, 0)") {
            imgTransform = "matrix(1, 0, 0, 1, 0, 0)"
        }

        document.getElementById("portrait").style.transform = imgTransform;
    }

    return (
        <Fragment>
            <h1 className="name">
                <AnimatedLetters
                    letters={name}
                /></h1>
            <h2 className="title">
                <AnimatedLetters
                    letters={title}
                />
            </h2>
            <div className="image-container">
                <button className="image-button" onClick={handleClick}>
                    <img    
                        id="portrait"
                        className="portrait" 
                        src="/images/Misc/commencement.jpg" 
                        alt="Self portrait">
                    </img>
                </button>
            </div>
        </Fragment>
    )
}

export default HomePage;