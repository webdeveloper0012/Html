import React, { Component } from 'react';
import RegisterFormComponent from '../indexBody/RegisterFormComponent'
export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className='container'>
                <div className='top_hdr'>
                    <div className='logo_sec'>
                        <a href='index'>
                            <img src='/images/logo.png' alt='wispri' title='logo'/>
                        </a>
                    </div>
                    <div className='right_menu'>
                        <ul>
                        <li><a href='register'>Register</a></li>
                        <li className='login_btn' onClick={this.props.loginFormView}><span className='site_btn' href='#'>Login</span></li>
                        </ul>
                    </div>
                </div>
                {
                    this.props.indexName === 'index' &&
                    <div className="banner_sec">
                        <div className="left_sec">
                        <h3>If there's a better 
                            price, we'll find it
                        </h3>
                        <a className="site_btn" href="#">Explore more <i className="fa fa-arrow"></i></a>
                        </div>
                        <div className="right_sec">
                            <img src="images/hdr_image.png"/>
                        </div>
                    </div>                    
                }{
                    this.props.indexName === 'register' &&
                    <RegisterFormComponent/>                 
                }
            </div>
        );
    } 
}
