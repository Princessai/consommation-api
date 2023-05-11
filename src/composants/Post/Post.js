import React from 'react'

import './Post.css'

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1> {props.titre} </h1>
        <div>
            <div className="Auteur">
                {props.auteur} 
            </div>
            <p>
                {props.corps}
            </p>
        </div>
    </article>
);

export default post;