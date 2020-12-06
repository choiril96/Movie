import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Akun, Search, Home, Favorite } from '../../assets'

const TabItems = ({ onLongPress, onPress, isFocused, label }) => {
    const Icon = () => {
        if (label === "Home") return isFocused ? <Home /> : <Home />

        if (label === "Search") return isFocused ? <Search /> : <Search />

        if (label === "Favorite") return isFocused ? <Favorite /> : <Favorite />

        if (label === "Akun") return isFocused ? <Akun /> : <Akun />

        return <Home />
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon />
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItems

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    text: (isFocused) => ({
        fontSize: 13
    })
})
