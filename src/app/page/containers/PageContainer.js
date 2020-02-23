import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import DashboardContainer from './dashboard/DashboardContainer';
import AccountContainer from './account/AccountContainer';

class PageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };        
    }

    componentDidMount() {
        if(!this.props.user) 
            this.props.history.push('/index');   
    }
    
    componentWillUnmount() {

    }

    render() {
        const children = (
            <Switch>                
                <Route path="/page/dashboard" exact component={DashboardContainer}/>
                <Route path="/page/account" exact component={AccountContainer}/>
            </Switch>
        );  
        return (
            this.props.user ? <>{children}</> : <Redirect to="/index" />
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
        
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps => {
    // //const current_user = mapStateToProps.user.get('user');
    // console.log('ccuser', current_user);
    // if(!current_user) {
    //     console.log(current_user)
    //     //this.props.history.push('/index');
    // }
    return {
      //current_user
    };
})(PageContainer));


