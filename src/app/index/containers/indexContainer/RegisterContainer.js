import React, {Component} from 'react';
import {connect} from 'react-redux';

import HeaderComponent from '../../components/informationComponet/header/HeaderComponent'
import RegisterComponent from '../../components/informationComponet/indexBody/RegisterComponent'
import FooterComponent from '../../components/informationComponet/footer/FooterComponent'
import LoginFormComponent from '../../components/informationComponet/footer/LoginFormComponent'

class RegisterContainer extends Component {
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
                <header className='site_hdr'><HeaderComponent indexName={'register'} loginFormView={this.loginFormView}/></header>  
                <RegisterComponent/>
                <footer className='site_ftr'><FooterComponent indexName={'register'}/></footer>
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
        //updateCounter : (counter) => dispatch(sampleActionCreator(counter))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
/* connect(mapStateToProps, mapDispatchToProps) is HOC which will return a component
*/

