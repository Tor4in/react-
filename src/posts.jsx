import React from "react";


function Posts(props) {
    return (
        <div className="posts">
            <div className="posts_icon">L<br/>I</div>
            <p className="posts_masseg">{props.ms}</p>
        </div>
    );
}

export default Posts;
