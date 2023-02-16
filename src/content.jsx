import React from "react";
import Posts from "./posts";

function Content() {
    return (
        <div className="content">
            <div className="profile">
                <div className="icon">logo icon</div>
                <div className="data">
                    <p>Name: Vitali</p>
                    <p>Jahr: 16</p>
                    <p>Ort: Mukatschewo</p>
                    <p>Beruf: 🥰Front-end Developer, Weisses Hacker😶‍🌫️</p>
                </div>
                <div className="posts_list">
                    <Posts ms="Ich mag Rammstein hören" />
                    <Posts ms="Hallo, es war meine erste program am React" />

                </div>
            </div>
        </div>
    );
}

export default Content;
