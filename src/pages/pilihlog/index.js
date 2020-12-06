import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Pilihlogin } from '../../assets'


const Pilihlog = ({loginPress}) => {
    return (
        <View>
            <ImageBackground source={Pilihlogin} style={styles.background}>
            </ImageBackground>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.login}>
                    <Text style={styles.textLogin}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.register}>
                    <Text style={styles.textRegister}>REGISTER</Text>
                </TouchableOpacity>
            
            </View>
        </View>
    )
}

export default Pilihlog

const styles = StyleSheet.create({
    background:{
        width:'100%',
        height:650
},
    logo:{
        alignItems: 'center'
},
login:{
    backgroundColor: '#fff',
    borderColor: '#000000',
    borderWidth: 1,
    width:167,
    height: 52,
    marginTop:16,
    marginLeft:20,
    alignContent:'center',
    justifyContent:'center',
    borderRadius:10
},
register:{
    backgroundColor: '#000000',
    width:167,
    height: 52,
    marginTop:16,
    marginLeft:20,
    alignContent:'center',
    justifyContent:'center',
    borderRadius:10
},
textLogin:{
    textAlign:'center',
    color:'#000'
},
textRegister:{
    textAlign:'center',
    color:'#fff'
}
})
