import React, { Component } from 'react';

export default class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="relr_sec">
                <div className="container">
                    <div className="hdng_sec">
                        <h3>Thousands of retailers</h3>
                        <p>Whether you're ordering pizza, buying clothes, or booking travel, we'll make sure you never overpay again.</p>
                    </div>
                    <div className="rtlr_logos">
                        <div className="rtlr_box rtlr1">
                            <img src="images/i1.png"/>
                        </div>
                        <div className="rtlr_box rtlr2">
                            <img src="images/i2.png"/>
                        </div>
                        <div className="rtlr_box rtlr3">
                            <img src="images/i3.png"/>
                        </div>
                        <div className="rtlr_box rtlr4">
                            <img src="images/i1.png"/>
                        </div>
                        <div className="rtlr_box rtlr5">
                            <img src="images/i2.png"/>
                        </div>
                        <div className="rtlr_box rtlr6">
                            <img src="images/i3.png"/>
                        </div>
                        <div className="rtlr_box rtlr7">
                            <img src="images/i3.png"/>
                        </div>
                    </div>
                </div>
                </div>
        );
    } 
}
