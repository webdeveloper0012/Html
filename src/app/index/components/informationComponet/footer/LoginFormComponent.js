import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { LoginAction } from '../../../../../actions/IndexAction';
import { connect } from 'react-redux';

class LoginFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className='login_form' style={{display : this.props.loginformshow_flag ? 'block':'none'}}>
                <div className='form_cntnr'>
                    <button className='cls_pop'>
                        <i className='fa fa-close' onClick={this.props.loginFormView}></i>
                    </button>
                    <h3>User Login</h3>
                    <form onSubmit={this.props.handleSubmit}>
                        <div className='form-group'>
                            <label>Enter your email / Username <span>*</span></label>
                            <Field component="input" type='email' name='email'/>
                        </div>
                        <div className='form-group'>
                            <label>Password<span>*</span></label>
                            <Field component="input" type='password' name='password'/>
                        </div>
                        <div className='form-group frgot_pw'>
                            <div className='half_sec'>
                                <Field component="input" type='checkbox' name='remember'/>
                                <label>Remember Me</label>
                            </div>
                            <div className='half_sec'> 
                                <label className='pull-right'>Forgot Password</label>
                            </div>		 
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
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
       
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: 'LoginFormComponent',
        initialValues: {},
        onSubmit: LoginAction,
    })(LoginFormComponent)
));

