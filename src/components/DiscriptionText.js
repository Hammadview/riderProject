import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from './MyText'
import { COLOR,hp } from '../enums/StyleGuide'
const DiscriptionText = () => {
  return (
    <View style={{marginLeft:hp(4),marginTop:hp(2)}}>
    <MyText text={'Lorem ipsum dolor sit amet, consectetur '} textColor={COLOR.DARK_GREY} style={{ marginLeft: hp(1.5), fontSize: hp(1.8) }} />
    <MyText text={'adipiscing elit, sed do eiusmod tempor '} textColor={COLOR.DARK_GREY} style={{ marginLeft: hp(1.5), fontSize: hp(1.8)}} />
    <MyText text={'incididunt ut labore et dolore magna '} textColor={COLOR.DARK_GREY} style={{ marginLeft: hp(1.5), fontSize: hp(1.8)}} />
    <MyText text={'aliqua. Ut enim ad minim veniam, quis '} textColor={COLOR.DARK_GREY} style={{ marginLeft: hp(1.5), fontSize: hp(1.8)}} />
    <MyText text={'nostrud exercitation ullamco laboris nisi '} textColor={COLOR.DARK_GREY} style={{ marginLeft: hp(1.5), fontSize: hp(1.8)}} />
    <MyText text={'ut aliquip ex ea commodo consequat. '} textColor={COLOR.DARK_GREY} style={{ marginLeft: hp(1.5), fontSize: hp(1.8)}} />
    </View>
  )
}

export default DiscriptionText

const styles = StyleSheet.create({})