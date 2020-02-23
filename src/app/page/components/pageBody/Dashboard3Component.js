import React, { Component } from 'react';

export default class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (            
            <div className="my_alert2">
                <div className="container2">
                    <h3>My Alert Items</h3>
                    <div className="alert_grid2">
                        <div className="alert_item2">
                            <ul className="item_actns2">
                                <li className="edit_pro2 edit_opn2"><i className="fa fa-pencil" aria-hidden="true"></i></li>
                                <li><a href="#"><i className="fa fa-bell" aria-hidden="true"></i></a></li>
                                <li className="trsh_opn2"><i className="fa fa-trash" aria-hidden="true"></i></li>
                            </ul>
                            <figure>
                                <img src="/images/alert.jpg"/>
                            </figure>
                            <div className="item_dtl2">
                                <span className="mta_date2">Last Update : 29 Nov, 2019</span>
                                <h4>Essential V-Neck Tee</h4>
                                <h5>tarocash.com.au</h5>
                                <ul className="prc_estimate2">
                                    <li><label>Desired Price : </label>   AUD 3.00</li>
                                    <li><label>Orignal Price :  </label>   AUD 14.99</li>
                                </ul>
                                <div className="prc_grade2">
                                    <button>Shop Now</button>
                                    <span className="prcnt2">34% <img src="/images/down-arrow.svg"/></span>
                                </div>
                            </div>
                        </div>
                        <div className="alert_item2">
                            <ul className="item_actns2">
                                <li className="edit_pro2 edit_opn2"><i className="fa fa-pencil" aria-hidden="true"></i></li>
                                <li><a href="#"><i className="fa fa-bell" aria-hidden="true"></i></a></li>
                                <li className="trsh_opn2"><i className="fa fa-trash" aria-hidden="true"></i></li>
                            </ul>
                            <figure>
                                <img src="/images/alert.jpg"/>
                            </figure>
                            <div className="item_dtl2">
                                <span className="mta_date2">Last Update : 29 Nov, 2019</span>
                                <h4>Essential V-Neck Tee</h4>
                                <h5>tarocash.com.au</h5>
                                <ul className="prc_estimate2">
                                    <li><label>Desired Price : </label>   AUD 3.00</li>
                                    <li><label>Orignal Price :  </label>   AUD 14.99</li>
                                </ul>
                                <div className="prc_grade2">
                                    <button>Shop Now</button>
                                    <span className="prcnt2">34% <img src="/images/down-arrow.svg"/></span>
                                </div>
                            </div>
                        </div>
                        <div className="edit_item2">
                            <div className="container2">
                                <button className="edit_opn2 clos_btn2"><i className="fa fa-close"></i></button>
                                <div className="edit_img2">
                                    <img src="/images/proimg.jpg"/>
                                </div>
                                <div className="pro_sec2">
                                    <h3>Cheap Philips Series 1000 Air Purifier - White | Harvey Norman AU</h3>
                                    <div className="edit_form2">
                                        <div className="frm_grp">
                                            <label>Product Link</label>
                                            <input type="text" className="form-control2" name="url" value="https://www.harveynorman.com.au/philips-series-1000-air-purifier-white.html" readOnly="readOnly"/>
                                        </div>
                                        <div className="frm_grp2">
                                            <label>Desired Price</label>
                                            <input type="text" className="form-control2" name="desire_price" defaultValue="250"/>
                                        </div>
                                        <div className="frm_grp2 sbmt_btn2">
                                            <button className="btn2 btn-primary">Save Item</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}
