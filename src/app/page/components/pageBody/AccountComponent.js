import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import CountryComponent from './CountryComponent'
import { ProfileAction,UploadAvatarAction } from '../../../../actions/UserAction';
import { connect } from 'react-redux';
import FileUploadComponent from  './FileUploadComponent'

class AccountComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarPath : null,
            initialValues : null,
        };
    }

    componentWillUnmount() {

    }

    setAvatarPath = (avatarPath) => {
        this.props.change('avatar_link', avatarPath);
    }
    render() {
        return (   
            <div className="profile_sec2">
                <div className="container2">
                    <h3>Update Profile Detial</h3>
                    <FileUploadComponent setAvatarPath={this.setAvatarPath} single  avatar_link={this.props.user.profile.avatar_link}/>
                    <form onSubmit={this.props.handleSubmit}>
                       <div className="frm_grp2">
                            <label>Your Name</label>
                            <Field component="input" type="text" name="username" value={this.props.user.username}/>
                        </div>
                        <div className="frm_grp2">
                            <label>Email Address</label>
                            <Field component="input" type="email" name="email" value={this.props.user.email}/>
                        </div>
                        <div className="frm_grp2">
                            <div className="half_fld2">
                                <label>Country</label>
                                <CountryComponent/>
                            </div>
                            <div className="half_fld2">
                                <label>Mobile Number</label>
                                <Field component="input" type="phone" name="phone_number" value={this.props.user.profile.phone_number}/>
                            </div>
                        </div>
                        <div className="frm_grp2">
                            <div className="half_fld2">
                                <label>Password</label>
                                <Field component="input" type="password" id="password" className="form-control2" name="password" required/>
                            </div>
                            <div className="half_fld2">
                                <label>Confirm Password</label>
                                <Field component="input" type="password" id="password" className="form-control2" name="password2" required/>
                            </div>
                            <div style={{display : this.props.error_2 ? 'block':'none',color : 'red',marginBottom :10}}>
                                Invalid password.
                            </div>
                        </div>
                        <div className="frm_grp2 sbmt_btn2">
                            <button type="submit" className="btn2 btn-primary2">Update My Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    } 
}

const mapStateToProps = (state, ownProps) => {
    let initialValues = {
        email : ownProps.user.email,
        username : ownProps.user.username,
        phone_number : ownProps.user.profile.phone_number,
        avatar_link : ownProps.user.profile.avatar_link,
        country_id : ownProps.user.profile.country_id
    };
    return {        
        error_2 : state.user.error_2,
        initialValues
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: 'AccountComponent',
        onSubmit: ProfileAction,
    })(AccountComponent)
));
