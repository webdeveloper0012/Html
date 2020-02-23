import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import AppContainer from './AppContainer';

import InformationContainer from './index/containers/InformationContainer';
import PageContainer from './page/containers/PageContainer';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };       
         
    }

    componentDidMount() {        
    }

    componentWillMount() {
        
      }
    
    componentWillUnmount() {

    }

    render() {
        return (
            <BrowserRouter>                
                <div className='App'>
                    <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'/>
                    <link href='https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800,900|Raleway:300,400,500,600,700,800,900&amp;display=swap' rel='stylesheet'/>
                    <AppContainer>
                        <Route path='/' component={InformationContainer}/> 
                        <Route path='/page' component={PageContainer}/>   
                    </AppContainer>                    
                </div>
            </BrowserRouter>
        );
    }
}