import React, {Component} from 'react';
import {connect} from 'react-redux';

import HeaderComponent from '../../components/header/HeaderComponent'
import Dashboard1Component from '../../components/pageBody/Dashboard1Component'
import Dashboard2Component from '../../components/pageBody/Dashboard2Component'
import Dashboard3Component from '../../components/pageBody/Dashboard3Component'
import FooterComponent from '../../components/footer/FooterComponent'

class DashboardContainer extends Component {
    
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
                <header className='site_hdr2'><HeaderComponent indexName={'dashboard'} user={this.state.user}/></header>
                <Dashboard1Component user={this.state.user}/>
                <Dashboard2Component/>
                <Dashboard3Component/>
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
        
    }
};
export default connect(mapStateToProps, mapDispatchToProps => {
    return {      
    };
})(DashboardContainer);

