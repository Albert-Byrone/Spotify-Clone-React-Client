import React from 'react'
import './Body.css';
import Header from "./Header"


function Body( {spotify }) {
    return (
        <div className="body">
            <Header  spotify={spotify}/>
            <div className="body__info">
                <img src="https://i.ibb.co/3rWqjYy/week.jpg" alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>Song desxfiption</p>
                </div>
            </div>
        </div>
    )
}

export default Body
