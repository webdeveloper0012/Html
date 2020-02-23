import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import * as types from '../../../../actionTypes';
import { logout} from "../../../../reducers/userReducer";

import HeaderComponent from '../../components/header/HeaderComponent'
import AccountComponent from '../../components/pageBody/AccountComponent'
import FooterComponent from '../../components/footer/FooterComponent'

class AccountContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user : this.props.user
        };        
    }

    componentDidMount() {
        if(!this.props.user) 
            this.props.history.push('/index');        
    }
    
    componentWillUnmount() {

    }



    render() {
        return (
            <div>
                <header className='site_hdr2'>
                    <HeaderComponent indexName={'dashboard'} user={this.state.user} logout={this.props.logout}/></header>
                <AccountComponent user={this.state.user}/>
                <footer className='dsbrd_ftr2'><FooterComponent indexName={'dashboard'}/></footer>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    }
};

const mapDispatchToProps = (dispatch) => {       
    return {
        logout: () => dispatch(logout())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);