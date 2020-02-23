import React, { Component } from 'react';

export default class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className='container'>
                <div className='nws_ltr'>
                    <div className='hdng_sec'>
                        <h3>Get Started</h3>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                    </div>
                    <form>
                        <input type='text' placeholder='Your email address'/>
                        <input type='submit' value='Subscribe'/>
                    </form>
                </div>
                <div className='ftr_mid'>
                    <div className='ftr_box ftr_info'>
                        <a href='index.html'><img src='images/logo.png'/></a>
                        <p>What started out as just a little project has evolved into the Wispri you now see. Wispri is an online-based establishment that was started about three months ago. 
                        </p>
                    </div>
                    <div className='ftr_box ftr_menu'>
                        <h4>Company</h4>
                        <ul>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Help</a></li>
                        <li><a href='#'> Careers</a></li>
                        <li><a href='#'> News</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Media</a></li>
                        </ul>
                    </div>
                    <div className='ftr_box ftr_menu'>
                        <h4>Legal</h4>
                        <ul>
                        <li><a href='#'>Privacy</a></li>
                        <li><a href='#'>Site Map</a></li>
                        <li><a href='#'>Faq</a></li>
                        <li><a href='#'> Term</a></li>
                        </ul>
                    </div>
                    <div className='ftr_box getin'>
                        <h4>Get in Touch</h4>
                        <a className='email' href='mailto:info@wispri.com'>Email :  info@wispri.com</a>
                        <ul className='scl'>
                        <li><a href='#' target='_blank'><i className='fa fa-facebook'></i></a></li>
                        <li><a href='#' target='_blank'><i className='fa fa-linkedin'></i></a></li>
                        <li><a href='#' target='_blank'><i className='fa fa-twitter'></i></a></li>
                        <li><a href='#' target='_blank'><i className='fa fa-instagram'></i></a></li>
                        </ul>
                    </div>
                    <div className='copy_right'>
                        <p>© 2019 Wispri. All rights reserved</p>
                    </div>
                </div>
            </div>
        );
    } 
}
