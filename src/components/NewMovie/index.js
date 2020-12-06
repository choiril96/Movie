import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

const NewMovie = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ height: 300, width: 200, marginLeft: 16 }}>
            <Image source={{ uri: 'https://cdn0-production-images-kly.akamaized.net/7idzA2Zxqid3ZJJlNg-v1wIkzrA=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1845998/original/044425700_1516938517-fdeawefawegvf.jpg' }}
                style={{ width: 200, height: 300, borderRadius:10 }} />
        </View>
        </ScrollView>
    )
}

export default NewMovie

const styles = StyleSheet.create({})
