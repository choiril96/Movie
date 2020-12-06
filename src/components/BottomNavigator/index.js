import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TabItems from '../TabItems';

function BottomNavigator({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItems
            key={index}
            onPress={onPress}
            label={label}
            isFocused={isFocused}
          />
        );
      })}
    </View>
  );
}

export default BottomNavigator

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopWidth:1,
        borderTopColor:'#D3D3D3'
    }
})
