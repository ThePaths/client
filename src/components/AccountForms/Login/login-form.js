import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../input';
import {login} from '../../../actions/auth';
import {required, nonEmpty} from '../../../validators';
import '../auth-form.css';
import './login-form.css'
import { getLesson, fetchPaths } from '../../../actions/paths';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password))
        // .then(()=>this.props.dispatch(fetchPaths('5b4f9ee2de939e0e5c4d0b71')));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                id="login-form"
                className="login-form auth"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                    label='Username:'
                />
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                    label='Password:'
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
