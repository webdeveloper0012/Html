import React, { Component } from 'react';

export default class HowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (            
            <div className='content_sec'>
                <div className='container'>
                    <div className='abt_pg '>
                        <div className='col-6 howtouse'>
                            <div className='pg_title'>
                                <h2>How to Use</h2>
                            </div>
                            <p>We offer you the best services the technology of today can give in helping you get the best prices for anything you want in just 3 steps.</p>
                            <ul className='steps'>
                                <li>
                                    <h3>Step - 1</h3>
                                    <p>Log in to your Wispri account. Sign up if you don't have a Wispri account.</p>
                                </li>
                                <li>
                                    <h3 style={{color: '#ecca63'}}>Step - 2</h3>
                                    <p>Enter the URL of the product you like on our website.</p>
                                </li>
                                <li>
                                    <h3 style={{color: '#52b8a7'}}>Step - 3</h3>
                                    <p>There is no step 3! Our engine monitors your product and alerts you via and email or SMS when we hit your desired price.</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6 pull-right'>
                            <img className='how_img' src='images/how.png'/>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}
