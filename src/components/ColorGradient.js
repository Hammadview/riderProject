import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MyText from './MyText';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, hp, wp } from '../enums/StyleGuide';
import CustomIcon from './CustomIcon';
import Photo from './Photo';

const ColorGradient = ({onPress}) => {
  return (
 <TouchableOpacity onPress={onPress}>
 <LinearGradient
      colors={['#0568EA', '#EA00FF']}
      style={styles.gradientBox}
    >
      <View style={styles.rowContainer}>
        <MyText text={'07:30'} textColor={COLOR.WHITE} style={styles.timeText} />
        <MyText text={'Luton'} textColor={COLOR.WHITE} style={styles.locationText} />
        <MyText text={'$120.50'} textColor={COLOR.WHITE} style={styles.priceText} />
      </View>
      <View style={styles.rowContainer}>
        <MyText text={'3h20'} textColor={COLOR.GREY} style={styles.durationText} />
        <View style={styles.iconContainer}>
          <CustomIcon name={'running'} size={8} color={COLOR.WHITE} type="FontAwesome5" />
        </View>
        <View style={styles.iconContainer2}>
          <CustomIcon name={'running'} size={8} color={COLOR.WHITE} type="FontAwesome5" />
        </View>
        <View style={styles.iconContainerOrange}>
          <CustomIcon name={'running'} size={8} color={COLOR.WHITE} type="FontAwesome5" />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <MyText text={'07:30'} textColor={COLOR.WHITE} style={styles.timeText} />
        <MyText text={'Urmstone'} textColor={COLOR.WHITE} style={styles.locationText} />
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.iconContainer3}>
          <CustomIcon name={'running'} size={8} color={COLOR.WHITE} type="FontAwesome5" />
        </View>
        <View style={styles.iconContainer2}>
          <CustomIcon name={'running'} size={8} color={COLOR.WHITE} type="FontAwesome5" />
        </View>
        <View style={styles.iconContainerOrange}>
          <CustomIcon name={'running'} size={8} color={COLOR.WHITE} type="FontAwesome5" />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.DrView}>
          <Photo source={require('../assets/images/rider.jpg')} style={styles.DRImage} />
        </TouchableOpacity>
        <View>
          <MyText text={'Alston'} textColor={COLOR.WHITE} style={styles.priceText2} />
          <View style={{ flexDirection: "row" }}>
            <CustomIcon name={'star'} size={13} color={COLOR.ICON_GREY} style={{ marginLeft: hp(2.2) }} type="FontAwesome6" />
            <MyText text={'5'} textColor={COLOR.WHITE} style={styles.priceText3} />
            <CustomIcon name={'person-outline'} size={13} color={COLOR.ICON_GREY} style={{ marginLeft: hp(21), marginTop: -hp(0.4) }} />
            <CustomIcon name={'person-outline'} size={13} color={COLOR.ICON_GREY} style={{ marginLeft: hp(0.1), marginTop: -hp(0.4) }} />
          </View>
        </View>
      </View>
    </LinearGradient>
 </TouchableOpacity>
     

  );
};

export default ColorGradient;

const styles = StyleSheet.create({
  gradientBox: {
    backgroundColor: 'transparent',
    height: hp(18), // Reduced height
    width: wp(79),
    marginHorizontal: hp(5),
    borderRadius: hp(2.2), // Slightly smaller border radius
    marginTop: hp(1.2), // Reduced top margin
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DRImage: {
    height: hp(4.5), // Reduced height
    width: wp(10),
    borderRadius: 25, // Slightly smaller border radius
  },
  DrView: {
    marginLeft: hp(1.7), // Reduced margin left
    marginTop: hp(0.8), // Reduced margin top
  },
  timeText: {
    fontSize: hp(1.3), // Reduced font size
    marginLeft: hp(1.8), // Reduced margin left
    marginTop: hp(1.6), // Reduced margin top
  },
  locationText: {
    fontSize: hp(1.3), // Reduced font size
    marginLeft: hp(4.5), // Reduced margin left
    marginTop: hp(1.1), // Reduced margin top
  },
  priceText: {
    fontSize: hp(1.3), // Reduced font size
    marginLeft: hp(18), // Reduced margin left
    marginTop: hp(1.1), // Reduced margin top
  },
  priceText2: {
    fontSize: hp(1.3), // Reduced font size
    marginLeft: hp(2.2), // Reduced margin left
    marginTop: hp(1.1), // Reduced margin top
  },
  priceText3: {
    fontSize: hp(1.5), // Reduced font size
    marginLeft: hp(0.3), // Reduced margin left
  },
  durationText: {
    fontSize: hp(1.3), // Reduced font size
    marginLeft: hp(1.5), // Reduced margin left
    marginTop: hp(0.1),
  },
  iconContainer: {
    backgroundColor: COLOR.ICON_GREY,
    height: hp(1.7), // Reduced height
    width: hp(1.7), // Reduced width
    borderRadius: hp(0.9), // Reduced border radius
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: hp(4.8), // Reduced margin left
    marginTop: hp(0.4), // Reduced margin top
  },
  iconContainer3: {
    backgroundColor: COLOR.ICON_GREY,
    height: hp(1.7), // Reduced height
    width: hp(1.7), // Reduced width
    borderRadius: hp(0.9), // Reduced border radius
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: hp(9.5), // Reduced margin left
    marginTop: hp(0.4), // Reduced margin top
  },
  iconContainer2: {
    backgroundColor: COLOR.ICON_GREY,
    height: hp(1.7), // Reduced height
    width: hp(1.7), // Reduced width
    borderRadius: hp(0.9), // Reduced border radius
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: hp(0.4), // Reduced margin left
    marginTop: hp(0.4), // Reduced margin top
  },
  iconContainerOrange: {
    backgroundColor: COLOR.ICON_ORANGE,
    height: hp(1.7), // Reduced height
    width: hp(1.7), // Reduced width
    borderRadius: hp(0.9), // Reduced border radius
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: hp(0.4), // Reduced margin left
    marginTop: hp(0.4), // Reduced margin top
  },
});
