import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; // reduxForm similar to connect()

class PostsNew extends Component {
  renderField(field) { // field arg contains event handlers that need to be wired up to our jsx
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  renderTextArea(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <textarea
          className="form-control"
          type="textarea"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return(
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderTextArea}
        />
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) => { title: 'asdf', categories: 'asdf', content: 'asdf' }
  // in order to validate these inputs and communicate any errors, we have to return an object that we create
  const errors = {};

  // validate input
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }

  // if errors is empty, the form is fine to submit
  // if errors has *any* properties, redux assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew); // name of the particular form (in case you have multiple forms with different states)
