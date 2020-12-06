import React, {useEffect} from 'react'
import { ImageBackground, StyleSheet} from 'react-native'
import {SplashBackground} from '../../assets'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout (() => {
            navigation.replace('MainApp');
        }, 3000)
    }, [navigation])
    
    return (
        <ImageBackground source={SplashBackground} style={styles.background}>
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
background:{
flex: 1,
}
})
