import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

//import {sampleActionCreator} from '../../../../actions/sampleActionCreator';

import HeaderComponent from '../../components/informationComponet/header/HeaderComponent'
import HowComponent from '../../components/informationComponet/indexBody/HowComponent'
import FooterComponent from '../../components/informationComponet/footer/FooterComponent'
import LoginFormComponent from '../../components/informationComponet/footer/LoginFormComponent'

class HowContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginformshow_flag : false
        };
        this.loginFormView=this.loginFormView.bind(this)
    }

    componentDidMount() {
       
    }
    
    componentWillUnmount() {

    }

    loginFormView() {
        this.setState({loginformshow_flag : !this.state.loginformshow_flag})
    }
    
    render() {
        return (
            <div className="main_container">
                <header className='site_hdr'><HeaderComponent indexName={'how'} loginFormView={this.loginFormView}/></header>  
                <HowComponent/>
                <footer className='site_ftr'><FooterComponent indexName={'how'}/></footer>
                <LoginFormComponent loginformshow_flag={this.state.loginformshow_flag} loginFormView={this.loginFormView}/>                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HowContainer);


