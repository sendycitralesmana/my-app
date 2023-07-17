import React, {Component} from "react";

const Post = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="" alt="" />
            </div>
            <div className="content">
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>
            </div>
        </div>
    )
}

export default Post;