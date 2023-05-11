import React, { Component } from 'react'

import './PostModale.css'
import axios from 'axios';

class PostModale extends Component {

    state = {
        affichePost : null 
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.affichePost || (this.state.affichePost.id !== this.props.id)) {

                axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.id).then((response) => {

                console.log("mise à jour " + response.data);
                // this.state.affichePost= response.data;
                this.setState({
                    affichePost : response.data
                }) 
            })

            }

        }

    }


    render() {

        return (

            this.state.affichePost && this.props.changer ?

                <div className="PostComplet">
                    <h1>{this.state.affichePost.title} </h1>
                    <p>{this.state.affichePost.body} </p>

                    <button className="btn btn-danger my-3 btnPost" onClick={this.props.cacher}>Fermer</button>

                </div>

                : null
        )

    }
}

export default PostModale;
