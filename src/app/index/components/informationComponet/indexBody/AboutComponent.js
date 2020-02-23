import React, { Component } from 'react';

export default class AboutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (            
            <div className='content_sec'>
                <div className='container'>
                    <div className='pg_title'><h2>About Us</h2></div>
                        <div className='abt_pg'>
                            <div className='col-6'>
                                <p>What started out as just a little project has evolved into the Wispri you now see. Wispri is an online-based establishment that was started about three months ago. We discovered that people often see some stuff they really like on some online store but are unable to buy it. The price is just a little bit above what they can afford. Then a person starts thinking, 'I just wish there was a way to know when this price gets lowered'. That is where we come in like heroes to save the day!</p>
                                <p>Technically, our website is an online price monitoring engine that uses web crawlers that constantly monitor and report price changes on the websites with the aid of machine learning technology. Now in normal English, we help you to monitor whatever products you keep under our watch for the desired change in price. As soon as the price hits your desired level, we alert you. Simple!
                                <br/>
                                <br/>
                                With an able team of just two, we have been able to save a lot of people the stress of constantly checking for price drops themselves.</p>
                        </div>
                        <div className='col-6 pull-right'>
                            <img src='http://webexpertise.us/wispri/images/hdr_image.png'/>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}
