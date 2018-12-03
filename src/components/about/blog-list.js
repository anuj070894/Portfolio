import React, { Component } from 'react';
import blogList from './blog-list-data.json';
import "./blog-list.css";

class BlogList extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
		  blogs: blogList.blogs
	  };
  }

  render() {
    return (
		<div className="blog-list-container">
			<ul>
			{this.state.blogs.map((blog, index) => {
				return (<li key={index}>
					<a href={blog.url}>{blog.title}</a>
					<div className="blog-list-item-date">
						{blog.date}
					</div>
				</li>);
			})}
			</ul>
		</div>
    );
  }
}

export default BlogList;
