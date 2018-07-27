import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../../../actions/users';
import { login } from '../../../actions/auth';
import Input from '../input';
import { required, nonEmpty, matches, length, isTrimmed } from '../../../validators';
// import './registration-form.css';
// import '../auth-form.css';
import '../styles/accountForm.css';
const passwordLength = length({ min: 8, max: 72 });
const matchesPassword = matches('regpassword');

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { email, regusername, regpassword } = values;
    const user = { email, username: regusername, password: regpassword };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(regusername, regpassword)));
  }

  render() {
    return (
      <form
        id="register-form"
        className="register-form auth"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        <Field
          component={ Input } 
          type="email" 
          name="email" 
          label='Email:'
        />
        <Field
          component={ Input }
          type="text"
          name="regusername"
          validate={ [required, nonEmpty, isTrimmed] }
          label='Username:'
        />
        <Field
          component={ Input }
          type="password"
          name="regpassword"
          validate={ [required, passwordLength, isTrimmed] }
          label='Password:'
        />
        <Field
          component={ Input }
          type="password"
          name="regpasswordConfirm"
          validate={ [required, nonEmpty, matchesPassword] }
          label='Confirm password:'
        />
        <button
          type="submit"
          disabled={ this.props.pristine || this.props.submitting }>
                    Register
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
