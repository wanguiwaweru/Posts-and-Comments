import React from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';


class AddComment extends React.Component {

	state = {
		name: "",
		body: ""
	}

	addComment = (e) => {
		e.preventDefault();
		this.props.addcomment(this.props.postId, this.state.name, this.state.body)
		this.setState({ name: "", body: "" })
		ReactDOM.findDOMNode(this.refs.inputname).value = "";
		ReactDOM.findDOMNode(this.refs.inputbody).value = "";
	}

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		return (
			<div class="card bg-light mb-3" style={{ width: '25rem', margin: 'auto' }}>
				<div class="card-header">Add a comment ...</div>
				<div class="card-body">
					<p><input type="text" name="name" ref="inputname" placeholder="Title ..." onChange={this.onChange} /></p>
					<p><textarea type="text" name="body" ref="inputbody" rows="1" cols="45" placeholder=" Comment ..." onChange={this.onChange} /></p>
					<p><Button onClick={this.addComment} >Post</Button></p>
				</div>
			</div>
		);
	}
}

export default AddComment;