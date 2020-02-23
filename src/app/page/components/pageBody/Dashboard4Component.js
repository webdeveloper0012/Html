import React, { Component } from 'react';

export default class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (            
            <div className="delt_item2">
                <div className="container2">
                    <div className="msg_box2">
                        <h4>Are you sure want to delete this item</h4>
                        <p>You won't be able to revert this!</p>
                        <div className="two_btns2">
                            <button>Yes, delete it!</button>
                            <button className="trsh_opn2">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    } 
}
