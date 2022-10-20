import React, { Component } from 'react';
import styles from './WelcomeStyle'
import { Image, ImageBackground, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import * as STRING_CONST from '../../theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John',
        };
    }

    renderHeaderContainer = () => {
        return (
            <View>
                <View style={styles.ROW}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.backIcon} source={IMG_CONST.backIcon} resizeMode="contain" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.skipView} onPress={() => this.props.navigation.navigate("MainStackScreen")}>
                    <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderTextContainer = () => {
        return (
            <View style={{marginLeft: scale(20), bottom: 150, position: 'absolute',}}>
                <Text style={styles.phoneNumberText}>Hi {this.state.name},{'\n'}Welcome To</Text>
                <Text style={styles.kingsOrderText}>Kingsorder</Text>
                <Text style={styles.subText}>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</Text>
            </View>
        )
    }
x
    renderButtonContainer = () => {
        return (
                <TouchableOpacity style={styles.sendCodeBtn} onPress={() => { }}>
                    <Text style={styles.sendCodeText}>Turn On GPS</Text>
                </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <View style={styles.container} >
                {this.renderHeaderContainer()}
                {this.renderTextContainer()}
                {this.renderButtonContainer()}
                </View>
            </View>
        )
    }
}

export default WelcomeScreen