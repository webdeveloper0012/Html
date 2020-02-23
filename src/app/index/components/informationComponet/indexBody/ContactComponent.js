import React, { Component } from 'react';

export default class ContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (            
            <div className='content_sec'>
                <div className='container'>
                    <div className='pg_title'>
                        <h2>Contact Us</h2>
                    </div>
                <div className='cntct_pg'>
                    <div className='cntct_info'>
                        <h3>Contact Details</h3>
                            <p>Do you have anything you want us to help you with? We are here for you whenever you reach out to us.</p>
                            <ul className='cntct_dtl'>
                                <li><a href='mailto:hello@wispri.com'><img src='images/email.svg'/><label>Email Us</label>hello@wispri.com</a></li>
                                <li><a href='tel:+(345) 206 7849'><img src='images/call.svg'/><label>Call Us</label>+(345) 206 7849</a></li>
                            </ul>
                            <ul className='scl scl_cntct'>
                                <li><a href='#' target='_blank'><i className='fa fa-facebook'></i></a></li>
                                <li><a href='#' target='_blank'><i className='fa fa-linkedin'></i></a></li>
                                <li><a href='#' target='_blank'><i className='fa fa-twitter'></i></a></li>
                                <li><a href='#' target='_blank'><i className='fa fa-instagram'></i></a></li>
                            </ul>
                        </div>
                    <div className='cntct_rght pull-right'>
                        <h3>Send us Message</h3>
                            <form action='submit'>
                                <input type='text' placeholder='First Name'/>
                                <input type='text' placeholder='Last Name'/>
                                <input type='email' placeholder='Email'/>
                                <input type='text' placeholder='Phone'/>
                                <textarea>Message</textarea>
                                <input type='submit' value='Send Message'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}
