import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";
import Video from './Section/Video';
import Blog from './Section/Blog';
import Image from './Section/Image';
import Navbar from './Header/Navbar';
import Banner from './Header/Banner';
import SEO from './Section/SEO';
import Footer from './Header/Footer';
class HomePage extends Component {

    render() {
        return (
            <> 
               <Helmet>
                <title>Ngô Quang Trường | HomePage </title> 
                <meta 
                name="description" 
                content= {"Chào mừng bạn đã đến với website của Ngô Quang Trường"} />
                <meta name="og:type" content="website" />  
                <meta property="og:url" content="https://truongnq.vn" />
                <meta property="og:title" content="Chào mừng bạn đến với website của NQT" />
                <meta property="og:image" content="https://live.staticflickr.com/65535/51955836234_c089d649a0_b.jpg"/>
                <meta property="og:description" content="Chào mừng bạn đã đến với website của Ngô Quang Trường"/>
                 </Helmet>
                 <Navbar />
                 <Banner /> 
                 <Blog />
                 <Image />
                 <Video />
                 <SEO />
                 <Footer />
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
