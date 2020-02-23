import React, { Component } from 'react';

export default class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoShow : false
        };
        this.showVideo = this.showVideo.bind(this);
        this.hideVideo = this.hideVideo.bind(this);
    }

    showVideo() {
        this.setState({videoShow : true})
    }
    hideVideo() {
        this.setState({videoShow : false})
    }

    render() {
        return (
            <div className="video_sec">
                <div className="container">
                    <div className="left_vdo">
                        <img src="images/vdo_bg.jpg" />
                    </div>
                    <div className="right_vdo">
                        <h3>Intro about Us</h3>
                        <p>If you just purchased something that went on sale, hundreds of brands will honor the price difference.
                            Waldo makes getting these refunds effortless and automatic.
                        </p>
                        <button className="watch_btn pop_btn" onClick={this.showVideo}><i className="fa fa-play" aria-hidden="true"></i> Watch intro</button>
                    </div>
                </div>
                <div className="popup" style={{display : this.state.videoShow ? 'block' : 'none'}}>
                    <div className="pop_cntnr">
                        <button className="close_btn pop_btn"><i className="fa fa-close" aria-hidden="true"  onClick={this.hideVideo}></i></button>
                        <iframe src="https://player.vimeo.com/video/354611999" width="100%" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen="allowFullScreen"></iframe>
                    </div>
                </div>
            </div>
        );
    } 
}
