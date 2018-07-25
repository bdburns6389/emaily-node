// SurveyForm shows a form for user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";

const FIELDS = [
  {
    label: "Survey Title",
    name: "title",
    noValueError: "You must provide a title"
  },
  {
    label: "Subject Line",
    name: "subject",
    noValueError: "You must provide a subject"
  },
  {
    label: "Email Body",
    name: "body",
    noValueError: "You must provide a body"
  },
  {
    label: "Recipient List",
    name: "emails",
    noValueError: "You must provide Emails"
  }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button className="cyan btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
    // else if (values[name].length < 8) {
    // errors[name] = "Type more";
    //}
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm"
})(SurveyForm);