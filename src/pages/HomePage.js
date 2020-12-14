import React, {Fragment} from "react";
import '../styles/HomePage.css'

const HomePage = () => {
    return (
        <Fragment>
            <h1 className="name">Bryttanie House</h1>
            <h2 className="title">Computer Science Graduate and Red Hat Consultant</h2>
            <div className="image-container">
                <img 
                    className="portrait" 
                    src="/images/commencement.jpg" 
                    alt="Self portrait">
                </img>
            </div>
        </Fragment>
    )
}

export default HomePage;