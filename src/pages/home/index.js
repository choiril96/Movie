import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Discover } from '../../assets'
import IndonesiaMovie from '../../components/IndonesiaMovie'
import NewMovie from '../../components/NewMovie'
import WorldMovie from '../../components/WorldMovie'

const Home = () => {

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.imgDis} source={Discover}></Image>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.textNewMoview}>NEW MOVIE</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 300, marginTop: 15 }}>
                    <NewMovie />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.textNewMoview}>INDONESIA MOVIE</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 300, marginTop: 15 }}>
                    <IndonesiaMovie/>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.textNewMoview}>WORLD MOVIE</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 300, marginTop: 15 }}>
                    <WorldMovie/>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imgDis: {
        marginTop: 36,
        marginLeft: 16
    },
    textNewMoview: {
        marginTop: 15,
        marginLeft: 16,
        fontSize: 12
    },
    allMovie: {
        marginTop: 15,
        marginLeft: 16,
        fontSize: 12
    },
    seeAll: {
        marginTop: 15,
        textAlign: 'right',
        marginRight: 16,
        fontSize: 12
    }
})
