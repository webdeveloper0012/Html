import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import IndexContainer from './indexContainer/IndexContainer';
import AboutContainer from './indexContainer/AboutContainer';
import HowContainer from './indexContainer/HowContainer';
import RegisterContainer from './indexContainer/RegisterContainer';
import ContactContainer from './indexContainer/ContactContainer';
import FaqContainer from './indexContainer/FaqContainer';

class InformationContainer extends Component {
    render() {
        const children = (
            <Switch>
                <Route path="/" exact component={IndexContainer}/>
                <Route path="/index" exact component={IndexContainer}/>
                <Route path="/about" exact component={AboutContainer}/> 
                <Route path="/how" exact  component={HowContainer}/>
                <Route path="/register" exact  component={RegisterContainer}/>
                <Route path="/contact" exact  component={ContactContainer}/> 
                <Route path="/faq" exact component={FaqContainer}/>
            </Switch>
        );
        return (
            <>{children}</>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InformationContainer));


