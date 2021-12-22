import React from 'react';
import Posts from './component/Posts' ;
import axios from 'axios';
import AddPost from './component/AddPost';

class App extends React.Component {

  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => this.setState({ posts: res.data }));
  }

  addpost =  (body, title) =>{

   axios.post('https://jsonplaceholder.typicode.com/posts',{
   body,
   title,
   userId: 1
   })
   .then(res => this.setState({ posts: 
    [...this.state.posts, res.data]}));
  };

  delPost = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res =>
      this.setState({
        posts: [...this.state.posts.filter(post => post.id !== id)]
      })
    );
  };

  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
       <AddPost addpost={this.addpost}/>
        <Posts  posts = {this.state.posts} delPost={this.delPost}/>
      </div>  
      </div>
    );
  }
}

export default App;