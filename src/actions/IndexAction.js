import * as types from '../actionTypes';
import axios from 'axios';
import * as datas from '../utils/DataUtil'
import * as constants from '../constants'
export function RegisterAction(values, dispatch, props) {
    console.log('params: ', values, props);   
    if(values.password === values.password2) 
        axios.post(constants.BaseUrl+'user/register',{values})
            .then(res => {
                dispatch({
                    type: types.ERROR_1_TYPE,
                    val: false
                });
                props.history.push('/index');
            },err => {
            }
        ).catch(err=> {

        }); 
    else{
        dispatch({
            type: types.ERROR_1_TYPE,
            val : true,
        });
    }   
}
export function LoginFormShowAction() {
    return function (dispatch) {
        dispatch({
            type: types.LOGIN_FORM_SHOW_TYPE,
            val: true
        });
        
    };
}
export function LoginFormHideAction() {
    return function (dispatch) {
        dispatch({
            type: types.LOGIN_FORM_HIDE_TYPE,
            val: false
        });        
    };
}

export function LoginAction(values, dispatch, props) {    
    console.log('params: ', values, props);   
    if(true) 
        axios.post(constants.BaseUrl+'user/login',{values})
            .then(res => {
                let userinfo = res.data;
                if(userinfo.success === true) {
                    datas.save('user',userinfo.user)
                    datas.save('token',userinfo.token)
                    dispatch({
                        type: types.SAVE_USERINFO_TYPE,
                        val : userinfo.user,
                    });
                    dispatch({
                        type: types.SAVE_USERTOKEN_TYPE,
                        val : userinfo.token,
                    });
                    props.history.push('/page/dashboard');
                }else{

                }
            },err => {
            }
        ).catch(err=> {
        }); 
    else{
    } 
}
