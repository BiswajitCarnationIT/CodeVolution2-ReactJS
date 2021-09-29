import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {   //control (1)
    super(props);

    this.state = {
      posts: [],
    };
    console.log("constructor")
  }

  componentDidMount() {   // control (3)
    console.log("DidMount")
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {   // control (2)
    const { posts } = this.state;
    console.log("render")
    return (
      <div>
        list of posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
      </div>
    );
  }
}

export default PostList;
