import React, {Component, PropTypes} from 'react';
import {SubmissionError, reduxForm, Field} from 'redux-form';
// import {show as showResults} from '../redux/modules/submission';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  return sleep(1000) // simulate server latency
    .then(() => {
      if (![ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
        throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' })
      } else if (values.password !== 'redux-form') {
        throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' })
      } else {
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      }
    })
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

class SubmitValidationForm extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    const { error, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <Field
            name="username"
            component={renderField}
            type="text"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            component={renderField}
            type="password"/>
        </div>
        {error && <strong>{error}</strong>}
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'submitValidation',
  onSubmit: submit
})(SubmitValidationForm);