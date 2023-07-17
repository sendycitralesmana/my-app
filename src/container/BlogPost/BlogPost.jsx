import { Component, Fragment } from "react";
import Post from "../Post/Post";
import axios from "axios";

class BlogPost extends Component {

    state = {
        post: []
    }

    componentDidMount() {
        // cara 1
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })

        // cara 2 -> $ npm install axios
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
    }

    render () {
        return (
            <Fragment>
                <p>Blog Post</p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost