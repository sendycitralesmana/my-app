import { Component, Fragment } from "react";
import Post from "../Post/Post";

class BlogPost extends Component {
    render () {
        return (
            <Fragment>
                <p>Blog Post</p>
                <Post tittle="title" desc="desc" />
            </Fragment>
        )
    }
}

export default BlogPost