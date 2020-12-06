import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Streaming = () => {
    return (
        <ScrollView>
            <View>
                <Video
                    source={{ uri: 'https://acefile.co/player/30924577' }}  // video url here
                    ref={(ref) => { this.player = ref }}
                    repeat={false} paused={true} // video play repeat
                    onError={console.log('olnerror')} // log Error
                    style={{}} />
            </View>
        </ScrollView>
    )
}

export default Streaming

const styles = StyleSheet.create({})
