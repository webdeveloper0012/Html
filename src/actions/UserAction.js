import * as types from '../actionTypes';
import axios from 'axios';
import * as datas from '../utils/DataUtil'
import * as constants from '../constants'

export function ProfileAction(values, dispatch, props) {
    console.log('params: ', values, props);   
    if(values.password === values.password2) {
        dispatch({
            type: types.ERROR_2_TYPE,
            val : false,
        });
        axios.post(constants.BaseUrl+'user/profile',{values})
            .then(res => {
                //props.history.push('/index');
                dispatch({
                    type: types.FORMAT_USERINFO_TYPE,
                    val : false,
                });
            },err => {
            }
        ).catch(err=> {

        }); 
    } else {
        dispatch({
            type: types.ERROR_2_TYPE,
            val : true,
        });
    }
         
}

