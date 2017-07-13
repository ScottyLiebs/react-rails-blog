import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import '../styles/post_new.css';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `ui form field ${touched && error ? 'error field' : ''}`;

    return (
      <div className="ui form">
        <div className={className}>
          <label>{field.label}</label>
          <input
            className="field"
            type="text"
            {...field.input}
          />
          <div className="ui error message">
            {touched ? error : ''}
          </div>
        </div>
      </div>
    );
  }

  renderTextArea(text) {
    const { meta: { touched, error } } = text;
    const className = `ui form field ${touched && error ? 'error field' : ''}`;

    return (
      <div className="ui form">
        <div className={className}>
          <label>{text.label}</label>
          <textarea
            className="field"
            type="text"
            {...text.input}
          />
          <div className="ui error message">
            {touched ? error : ''}
          </div>
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <div className="ui huge header">New Post</div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Keywords"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Body"
            name="content"
            component={this.renderTextArea}
          />
          <div className="ui buttons">
            <button type="submit" className="ui positive button">Submit</button>
            <div className="or">
            </div>
            <Link to="/" className="ui button">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  // validate the inputs from 'values'
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters";
  }

  if (!values.categories) {
    errors.categories = "Enter some keywords";
  }

  if (!values.content) {
    errors.content = "Enter some content";
  }

  // if errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
