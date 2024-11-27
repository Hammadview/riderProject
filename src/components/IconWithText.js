import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomIcon from './CustomIcon' 
import { COLOR,hp,wp } from '../enums/StyleGuide'
import MyText from './MyText'
const IconWithText = () => {
  return (
    <View style={{marginTop:hp(3)}}>
    <View style={styles.preferenceItem}>
        <View style={styles.iconContainer}>
          <CustomIcon name="cigar" size={24} color={COLOR.ICON_GREY} type="MaterialCommunityIcons" />
          <View style={styles.redLine} />
        </View>
        <MyText text={'No smoking, please'} textColor={COLOR.DARK_GREY} style={styles.preferenceText} textBold/>
      </View>
      <View style={styles.preferenceItem}>
        <View style={styles.iconContainer}>
          <CustomIcon name="musical-notes-outline" size={24} color={COLOR.DARK_GREY}/>
        </View>
        <MyText text={'Enjoy music'} textColor={COLOR.DARK_GREY} style={styles.preferenceText} textBold />
      </View>
      <View style={styles.preferenceItem}>
        <View style={styles.iconContainer}>
          <CustomIcon name="paw-outline" size={24} color={COLOR.ICON_GREY} />
          <View style={styles.redLine} />
        </View>
        <MyText text={"I'd prefer not to travel with pets"} textColor={COLOR.DARK_GREY} style={styles.preferenceText} textBold />
      </View>
    </View>
  )
}

export default IconWithText

const styles = StyleSheet.create({
    preferenceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(1.5),
        marginLeft: hp(5.4),
      },
      iconContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: hp(2),
      },
      redLine: {
        position: 'absolute',
        height: 2,
        width: 40,
        backgroundColor: 'red',
        transform: [{ rotate: '28deg' }],
      },
      preferenceText: {
        fontSize: hp(2),
      },
})