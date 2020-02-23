import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { UrlSaveAction } from '../../../../actions/UrlAction';
import { connect } from 'react-redux';
import axios from 'axios';
import * as constants from '../../../../constants/index'

class DashboardComponent extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            original_price : 0.00,
            image : 'https://wispri-yelena.s3.ap-northeast-1.amazonaws.com/avatar/avatar-2020-02-13-12_11_28-search.png'

        };
        this.fetchPrice=this.fetchPrice.bind(this);
    }

    fetchPrice(){
        axios.get(constants.ApiUrl+'https://www.catch.com.au/product/ted-baker-trouser-bike-clip-black-brogue-3567812/?st=8&sp=23&asp=&aqi=', { headers: {'Access-Control-Allow-Origin': '*'} })
            .then(res => {
                let data =  res.data ;
                //props.history.push('/index');
                // dispatch({
                //     type: types.FORMAT_USERINFO_TYPE,
                //     val : false,
                // });
                this.setState({
                    original_price : data.current_price,
                    image : data.image
                })
                console.log(res)
            },err => {
            }
        ).catch(err=> {

        }); 
    }

    render() {
        let _d = this.original_price - 3;
        return (
            <div className='src_product2'>
                <div className='container2'>
                    <h3>Enter your Product URL</h3>
                    <form onSubmit={this.props.handleSubmit}>
                        <div className='pro_form2'>
                            <Field component='input' type='hidden' name='userid'/>
                            <Field component='input' type='url' placeholder='Enter product url' name='url'/>
                            <button type='button' onClick={this.fetchPrice}>Fetch Price</button>
                        </div>
                        <div className='price_sec2'>
                            <div className='img_sec2'>
                                <img src={this.state.image}/>
                            </div>
                            <div className='price_alrt2'>
                                <div className='alrt_sec2'>
                                    <Field component='input' type='number' placeholder='Desired Price :' name='desired_price'/>
                                    <button type='button'>Price Alert</button>
                                </div>
                                <ul>
                                    <li><label>Original price :</label>  {this.state.original_price}</li>
                                    <li><label>Price Different : </label>  {_d}</li>
                                </ul>
                                <button className='prc_alrt2'>Add to price alert</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    } 
}

const mapStateToProps = (state, ownProps) => {
    let initialValues = {
        userid : ownProps.user.userId
    };
    return {        
        initialValues
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
       
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: 'DashboardComponent',
        onSubmit: UrlSaveAction,
    })(DashboardComponent)
));
