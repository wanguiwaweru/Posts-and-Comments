import React from 'react' ;
import axios from 'axios';
import CommentItem from './CommentItem';
import AddComment from './AddComment';
import  PropTypes from 'prop-types';

export class Comments extends React.Component {

	state=
	{
		comments : []
	}

	componentDidMount() {
		
    axios
      .get('https://jsonplaceholder.typicode.com/comments', {
      	params:{
      		postId: this.props.postId
      	}
      })
      .then(res => this.setState({ comments: res.data }));		
   }

   addcomment = (postId,name, body) =>{
   	axios.post('https://jsonplaceholder.typicode.com/comments',{
   		postId,
   		name,
   		email:"Sincere@april.biz",
   		body,
   })
   .then(res => this.setState({ comments: 
    [...this.state.comments, res.data]}));
  };
   
	render() {
		
		return(
			<div>
          {
		 this.state.comments.map((comment) => (
			<CommentItem key={comment.id} comment={comment} />
			))
		}
		<AddComment addcomment={this.addcomment} />
		</div>
		 );
	}
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
}

export default Comments;