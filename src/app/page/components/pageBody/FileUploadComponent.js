import React, { Component } from 'react';
import axios from 'axios';
import * as constants from '../../../../constants'

export default class FileUploadComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarPath : this.props.avatar_link
        };
        this.onSelectAvatar = this.onSelectAvatar.bind(this);
    }
    onSelectAvatar =  async (e) => {        
        const { setAvatarPath } = this.props;
        let file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        
        const avatarPath = await axios.post(constants.BaseUrl+'user/upload/avatar', formData, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }).then(res => res.data.avatarPath);
        this.setState({avatarPath:avatarPath})
        setAvatarPath(avatarPath);
            
    }
    render() {
        return (               
            <div className='filesDiv2'>
                <div className="frm_grp2 prfl_img2">
                    <input type='file' id="imgInp"  onChange={this.onSelectAvatar} />
                    <img className="profile_pic2" id="blah" src={this.state.avatarPath==undefined  || this.state.avatarPath==null  || this.state.avatarPath=='' ? '/images/default.png' : this.state.avatarPath} alt="your image" />
                </div>
            </div>
        );
    } 
}

