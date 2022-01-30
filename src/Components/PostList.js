import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    renderPostListJsx() {
        return this.props.posts.map((post) => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>

                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        console.log('props ', this.props)
        return (
            <div className="ui relaxed divided list">
                <h1>this is PostList component</h1>
                {this.renderPostListJsx()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        posts: state.posts
    }
}
// const PostList = () => {
//     return (
//         <h1>this is PostList component</h1>
//     )
// }
export default connect(mapStateToProps, { fetchPosts })(PostList);