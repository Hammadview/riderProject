import { Image, StyleSheet,View } from 'react-native'
import React from 'react'

const Photo = ({source,style,resizeMode = 'cover'}) => {
  return (
    <View>
     <Image
       source={source}
        style={style}
        resizeMode={resizeMode}
     />
    </View>
  )
}

export default Photo

const styles = StyleSheet.create({})