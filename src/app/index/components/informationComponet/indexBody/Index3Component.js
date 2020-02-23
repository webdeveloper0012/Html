import React, { Component } from 'react';

export default class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className='testi_sec'>
                <div className='container'>
                    <div className='testi_left'>
                        <small>What They Say</small>
                        <h3>Clients Testimonials</h3>
                        <p>If you just purchased something that went on sale, hundreds of brands will honor the price difference. Waldo makes getting these refunds effortless and automatic.</p>
                    </div>
                    <div className='testi_rotator'>
                        <div className='testi-carousel owl-carousel'>
                            <div className='item'>
                            <div className='testi_hdr'>
                                <img src='/images/testi_img.png'/>
                                <div className='testi_txt'>
                                    <h5>Rony Jonson</h5>
                                    <span>lorem Ipsum</span>
                                </div>
                            </div>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                            </div>
                            <div className='item'>
                            <div className='testi_hdr'>
                                <img src='/images/testi_img.png'/>
                                <div className='testi_txt'>
                                    <h5>Rony Jonson</h5>
                                    <span>lorem Ipsum</span>
                                </div>
                            </div>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                            </div>
                            <div className='item'>
                            <div className='testi_hdr'>
                                <img src='/images/testi_img.png'/>
                                <div className='testi_txt'>
                                    <h5>Rony Jonson</h5>
                                    <span>lorem Ipsum</span>
                                </div>
                            </div>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                            </div>
                            <div className='item'>
                            <div className='testi_hdr'>
                                <img src='/images/testi_img.png'/>
                                <div className='testi_txt'>
                                    <h5>Rony Jonson</h5>
                                    <span>lorem Ipsum</span>
                                </div>
                            </div>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        );
    } 
}
