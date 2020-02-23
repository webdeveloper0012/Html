import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

//import {sampleActionCreator} from '../../../../actions/sampleActionCreator';
import {LoginFormShowAction,LoginFormHideAction} from '../../../../actions/IndexAction';

import HeaderComponent from '../../components/informationComponet/header/HeaderComponent'
import Index1Component from '../../components/informationComponet/indexBody/Index1Component'
import Index2Component from '../../components/informationComponet/indexBody/Index2Component'
import Index3Component from '../../components/informationComponet/indexBody/Index3Component'
import FooterComponent from '../../components/informationComponet/footer/FooterComponent'
import LoginFormComponent from '../../components/informationComponet/footer/LoginFormComponent'

class IndexContainer extends Component {
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
                <header className='site_hdr'><HeaderComponent indexName={'index'} loginFormView={this.loginFormView}/></header>
                <Index1Component/>
                <Index2Component/>
                <Index3Component/>
                <footer className='site_ftr'><FooterComponent indexName={'index'}/></footer>
                <LoginFormComponent loginformshow_flag={this.state.loginformshow_flag} loginFormView={this.loginFormView}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error_1 : state.index.error_1,
        loginformshow_flag : state.index.loginformshow_flag,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        //updateCounter : (counter) => dispatch(sampleActionCreator(counter))
        loginFormShow : () => dispatch(LoginFormShowAction()),
        loginFormHide : () => dispatch(LoginFormHideAction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
/* connect(mapStateToProps, mapDispatchToProps) is HOC which will return a component
*/

