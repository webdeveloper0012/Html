import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import CountryComponent from '../../../../page/components/pageBody/CountryComponent'
import { RegisterAction } from '../../../../../actions/IndexAction';
import { connect } from 'react-redux';

class RegisterFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            countryid: '',
            phone: '',
            email: '',
            password: '',
            confirmpassword: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {        
        return (
            <div className='register_form'>
                <div className='form_cntnr'>
                    <h3>Register New Account</h3>
                    <form onSubmit={this.props.handleSubmit}>
                        <div className='form-group'>
                            <label>Enter your email address <span>*</span></label>
                            <Field component="input" type='email' name='email' />
                        </div>
                        <div className='form-group'>
                            <label>Enter your name<span>*</span></label>
                            <Field component="input" type='text' name='username' />
                        </div>
                        <div className='form-group'>
                            <label>Choose Your Country<span>*</span></label>
                            <CountryComponent/>
                        </div>
                        <div className='form-group'>
                            <label>Mobile Number</label>
                            <Field component="input" type='text' name='phone_number' />
                        </div>
                        
                        <div className='form-group'>
                            <div className='half_sec'>
                                <label>Password</label>
                                <Field component="input" type='password' name='password' />
                            </div>
                            <div className='half_sec'><label>Confirm Password</label>
                                <Field component="input" type='password' name='password2' />
                            </div>
                        </div>

                        <div style={{display : this.props.error_1 ? 'block':'none',color : 'red',marginBottom :10}}>
                            Invalid password.
                        </div>

                        <div className='form-group'>
                            <iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LewcH4UAAAAANkJqEQ7GQcCkqkrTI5HdDc2g-w2&amp;co=aHR0cHM6Ly9kZXYud2lzcHJpLmNvbTo0NDM.&amp;hl=en&amp;v=PRkVene3wKrZUWATSylf69ja&amp;size=normal&amp;cb=6wm4pregzs28" width='304' height='78' role='presentation' name='a-ub6zq9y89j09' frameBorder='0' scrolling='no' sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox'></iframe>
                        </div>
                        <div className='form-group'>
                            <div className='sbmt_btn'>
                                <input type='submit' value='Submit' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {        
        error_1 : state.index.error_1
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
       
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: 'RegisterFormComponent',
        initialValues: {},
        onSubmit: RegisterAction,
    })(RegisterFormComponent)
));
