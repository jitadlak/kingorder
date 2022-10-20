import React, { Component } from 'react'
import { StatusBar, Text, TouchableOpacity, View, Image } from 'react-native'
import styles from './OnboardingStyle'
import * as IMG_CONST from '../../../app/theme/ImageConstants';
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';
import AsyncStorage from '@react-native-community/async-storage';

export class OnboardingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            images: [
                IMG_CONST.slide_1,
                IMG_CONST.slide_2,
                IMG_CONST.slide_3,
            ],
            swiperIndex: 0,
            isShowDots: true,
            showSlider: true,
            swiperHeading0: '',
            swiperPara0: '',
            swiperImage0: '',
            swiperHeading1: '',
            swiperPara1: '',
            swiperImage1: '',
            swiperHeading2: '',
            swiperPara2: '',
            swiperImage2: '',
            swiperHeading3: '',
            swiperPara3: '',
            swiperImage3: '',
        };
    }

    componentDidMount = async () => {
        this.getOnbordingList()
    }

    indexChanged = async (index) => {
        console.log('@@@ Index ===========', index);
        if (index === 3) {
            await this.setState({ isShowDots: false });
        } else {
            await this.setState({ isShowDots: true });
        }
    }

    onPressForward = () => {
        let localIndex = this.state.swiperIndex;
        this.indexChanged(localIndex);
        localIndex++;
        this.setState({ swiperIndex: localIndex });
    }

    getOnbordingList = () => {
        this.props.onOnBoardingUser((res) => this.getOnboardingSuccessCallBack(res), (err) => this.getOnboardingFailureCallBack(err))
    }

    getOnboardingSuccessCallBack = async (res) => {
        console.log('@@@ Get Onboarding List Success CallBack ===================', res);
        let apiSwiperList = res.data.data
        apiSwiperList.map((swiper, index) => {
            switch (swiper.pageName) {
                case '1':
                    this.setState({ swiperHeading0: swiper.heading, swiperPara0: swiper.paragraph, swiperImage0: swiper.image })
                    break;
                case '2':
                    this.setState({ swiperHeading1: swiper.heading, swiperPara1: swiper.paragraph, swiperImage1: swiper.image })
                    break;
                case '3':
                    this.setState({ swiperHeading2: swiper.heading, swiperPara2: swiper.paragraph, swiperImage2: swiper.image })
                    break;
                case 'Login':
                    this.setState({ swiperHeading3: swiper.heading, swiperPara3: swiper.paragraph, swiperImage3: swiper.image })
                    break;
                default:
                    break;
            }
        })
    }

    getOnboardingFailureCallBack = (error) => {
        if (error) {
            console.log('@@@ Get Onboarding List Failure CallBack ===================', error);
            alert(error);
        } else {
            alert('Network Error!');
        }
    }

    renderSwiperContainer = () => {
        return (
            <Swiper
                showsButtons={false}
                onIndexChanged={(index) => this.indexChanged(index)}
                index={this.state.swiperIndex}
                loop={false}
                paginationStyle={styles.pagination}
                showsPagination={this.state.isShowDots}
                activeDot={<View style={styles.activeDot} />}
                dot={<View style={styles.inActiveDot} />}
                autoplay={false}
            >
                <View style={{ flex: 1 }}>
                    <Image resizeMode="contain"
                        source={this.state.swiperIndex === 0 ? IMG_CONST.slide_1 : this.state.swiperIndex === 1 ? IMG_CONST.slide_2 : IMG_CONST.slide_3}
                        style={this.state.swiperIndex === 0 ? styles.wt1 : this.state.swiperIndex === 1 ? styles.wt2 : styles.wt3}
                    />
                    {this.state.swiperIndex === 0 ?
                        <Text style={[styles.heading, { bottom: 210 }]}>{this.state.swiperHeading0}</Text>
                        : this.state.swiperIndex === 1 ?
                            <Text style={[styles.heading, { bottom: 190 }]}>{this.state.swiperHeading1}</Text>
                            :
                            <Text style={[styles.heading, { bottom: 180 }]}>{this.state.swiperHeading2}</Text>
                    }{this.state.swiperIndex === 0 ?
                        <Text style={[styles.subHeading, { bottom: 130 }]}>{this.state.swiperPara0}</Text>
                        : this.state.swiperIndex === 1 ?
                            <Text style={[styles.subHeading, { bottom: 120 }]}>{this.state.swiperPara1}</Text>
                            :
                            <Text style={[styles.subHeading, { bottom: 100 }]}>{this.state.swiperPara2}</Text>
                    }{this.state.swiperIndex === 2 ?
                        <TouchableOpacity style={styles.nextBtn} onPress={() => this.setState({ showSlider: false })}>
                            <Text style={styles.nextBtnText}>Next</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.nextBtn} onPress={() => this.onPressForward()}>
                            <Text style={styles.nextBtnText}>Next</Text>
                        </TouchableOpacity>
                    }
                </View>
                <View style={{ flex: 1 }}>
                    <Image
                        source={IMG_CONST.slide_2} style={styles.wt2} resizeMode="contain" />
                    <Text style={[styles.heading, { bottom: 190 }]}>{this.state.swiperHeading1}</Text>
                    <Text style={[styles.subHeading, { bottom: 120 }]}>{this.state.swiperPara1}</Text>
                    <TouchableOpacity style={styles.nextBtn} onPress={() => this.onPressForward()}>
                        <Text style={styles.nextBtnText}>Next</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <Image source={IMG_CONST.slide_3} style={styles.wt3} resizeMode="contain" />
                    <Text style={[styles.heading, { bottom: 180 }]}>{this.state.swiperHeading2}</Text>
                    <Text style={[styles.subHeading, { bottom: 100 }]}>{this.state.swiperPara2}</Text>
                    <TouchableOpacity style={styles.nextBtn} onPress={() => this.setState({ showSlider: false })}>
                        <Text style={styles.nextBtnText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        )
    }

    showFourthScreen = () => {
        return (
            <View style={{ flex: 1 }}>
                <Image
                    source={IMG_CONST.login}
                    style={styles.wt4}
                    resizeMode="contain"
                />
                <Text style={[styles.subHeading, { bottom: 175 }]}>{this.state.swiperPara3}</Text>
                <TouchableOpacity style={styles.logintBtn} onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={styles.loginBtnText}>Login</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.creatBtn} onPress={() => this.props.navigation.navigate("SignUp")}>
                    <Text style={styles.creatBtnText}>Create an Account</Text>
                </TouchableOpacity> */}
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                {this.state.showSlider && this.renderSwiperContainer()}
                {!this.state.showSlider && this.showFourthScreen()}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showErrorModal: (message, isShowError) => dispatch(commonActions.showErrorModal(message, isShowError)),
        hideErrorModal: () => dispatch(commonActions.hideErrorModal()),
        onOnBoardingUser: (successCallBack, failureCallBack) => dispatch(userActions.onOnBoardingUser(successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingScreen)