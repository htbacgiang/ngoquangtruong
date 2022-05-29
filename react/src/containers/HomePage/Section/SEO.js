import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from "react-helmet";
import Thumb from '../../../assets/blog/thumb.jpg'
class Banner extends Component {

    componentDidMount(){
            
    
      }

    render() {
        
        return (
            <React.Fragment>
             <Helmet>
                <title>Ngô Quang Trường | HomePage </title> 
                <meta 
                name="description" 
                content= {"Chào mừng bạn đã đến với website của Ngô Quang Trường"} />
                <meta name="og:type" content="article" />  
                <meta property="og:url" content="https://truongnq.vn" />
                <meta property="og:title" content="Chào mừng bạn đến với website của NQT" />
                <meta property="og:image" content="https://live.staticflickr.com/65535/51955836234_c089d649a0_b.jpg"/>
                <meta property="og:description" content="Chào mừng bạn đã đến với website của Ngô Quang Trường"/>
                <meta property="fb:app_id" content="" />
                 </Helmet>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
