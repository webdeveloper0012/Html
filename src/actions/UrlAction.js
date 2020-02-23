import * as types from '../actionTypes';
import axios from 'axios';
import * as datas from '../utils/DataUtil'
import * as constants from '../constants'

export function UrlSaveAction(values, dispatch, props) {
    console.log('params: ', values, props);   
    if( values.url != null && values.url != undefined  && values.desired_price>0) {
        axios.post(constants.BaseUrl+'url/save',{values})
            .then(res => {
                //props.history.push('/index');
                // dispatch({
                //     type: types.FORMAT_USERINFO_TYPE,
                //     val : false,
                // });
            },err => {
            }
        ).catch(err=> {

        }); 
    } else {
        alert('sfdsdf')
        // dispatch({
        //     type: types.ERROR_2_TYPE,
        //     val : true,
        // });
    }
         
}

