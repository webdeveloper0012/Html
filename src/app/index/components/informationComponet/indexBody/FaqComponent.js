import React, { Component } from 'react';

export default class FaqComponent extends Component {
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
                        <h2>FAQ <small>(frequently asked questions)</small></h2>
                    </div>
                    <div id='accordion' className='faq_sec'>
                        <h3>Are there others like you?</h3>
                        <div>
                            <p>
                            Of course, we have competition. However, we beat our competitors to being the very first most articulately executed website that does the things we do.
                            </p>
                        </div>
                        <h3>What exactly do you do?</h3>
                        <div>
                            <p>
                            We are simply a group of individuals that created this platform to alert you when there's a desired price change on any product you place under our watch.
                            </p>
                        </div>
                        <h3>How long have you been in business?</h3>
                        <div>
                            <p>
                            We have been around for three months now.
                            </p>
                        </div>
                        <h3>How do you compare prices?</h3>
                        <div>
                            <p>
                            Our website requires that you paste a link to the product you want us to watch here. After this, our web crawler frequently monitors the link for any desired price change and then alerts you. Say for instance, you want to know when a product drops from $20 to $18. You paste the product link on our website and our website lets you know when the price hits $18.
                            </p>
                        </div>
                    <h3>Do you make price comparisons across different platforms?</h3>
                    <div>
                        <p>
                        No, we don't. We only monitor the link that was given to us by a user for any price change.
                        </p>
                    </div>
                    <h3>How can we contact you?</h3>
                    <div>
                        <p>
                        Click on the 'Contact us' link below on ways to contact us
                        </p>
                    </div>
                    <h3>Do you monitor sites in languages other than English?</h3>
                    <div>
                        <p>
                        Unfortunately, we don't. Not at the moment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    } 
}
