import React, { Component } from 'react';

export default class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="container2">
                <div className="cpy_rt2">2019-2020 &copy; Wispri</div>
                <div className="ftr_menu2">
                    <ul>
                    <li><a href="#">About </a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        );
    } 
}
