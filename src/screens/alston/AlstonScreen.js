import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLOR, hp, wp } from '../../enums/StyleGuide';
import CustomIcon from '../../components/CustomIcon';
import MyText from '../../components/MyText';
import { useNavigation } from '@react-navigation/native';
import Photo from '../../components/Photo';
import DiscriptionText from '../../components/DiscriptionText';
import IconWithText from '../../components/IconWithText';

const AlstonScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
        <CustomIcon
          name="chevron-back"
          size={25}
          color={COLOR.DARK_GREY}
          style={styles.chevronBack}
        />
      </TouchableOpacity>
      <View>
        <View style={styles.row}>
          <View>
            <MyText text={'Alston'} textColor={COLOR.WHITE} textBold style={styles.alstronText} />
            <MyText text={'59y/o'} textColor={COLOR.DARK_GREY} style={styles.yearsText} />
          </View>
          <TouchableOpacity  style={styles.DrView}>
            <View style={styles.photoContainer}>
              <Photo source={require('../../assets/images/rider.jpg')} style={styles.DRImage} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <MyText
          text={'Experience level: Intermediate'}
          textColor={COLOR.DARK_GREY}
          style={styles.experienceText}
        />
        <View style={styles.row}>
          <CustomIcon
            name="star"
            size={22}
            color={COLOR.ICON_GREY}
            style={styles.star}
          />
          <MyText text={'5/5-2 ratings'} textColor={COLOR.WHITE} style={styles.ratingText} />
          <CustomIcon
            name="chevron-forward-sharp"
            size={22}
            color={COLOR.WHITE}
            style={styles.arrowRight}
          />
        </View>
        <MyText
          text={'3/3-Good driving skills'}
          textColor={COLOR.DARK_GREY}
          style={styles.skillText}
        />
        <MyText
          text={'Alston has a Verified Profile'}
          textColor={COLOR.WHITE}
          textBold
          style={styles.verifiedProfileText}
        />
        <View style={styles.iconWrapper}>
          <View style={styles.blueIconView}>
            <CustomIcon
              name="checkmark"
              size={18}
              color={COLOR.DARK_BLUE}
            />
          </View>
          <MyText
            text={'Verified ID'}
            textColor={COLOR.DARK_GREY}
            style={styles.verifiedText}
          />
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.blueIconView}>
            <CustomIcon
              name="checkmark"
              size={18}
              color={COLOR.DARK_BLUE}
            />
          </View>
          <MyText
            text={'Confirmed email'}
            textColor={COLOR.DARK_GREY}
            style={styles.verifiedText}
          />
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.blueIconView}>
            <CustomIcon
              name="checkmark"
              size={18}
              color={COLOR.DARK_BLUE}
            />
          </View>
          <MyText
            text={'Confirmed phone number'}
            textColor={COLOR.DARK_GREY}
            style={styles.verifiedText}
          />
        </View>
        <View style={styles.divider} />
        <MyText
          text={'About Alston'}
          textColor={COLOR.WHITE}
          textBold
          style={styles.aboutText}
        />
        <DiscriptionText />
        <IconWithText />
        <View style={styles.divider} />
        <View style={styles.infoContainer}>
          <MyText
            text={"29 rides published"}
            textColor={COLOR.DARK_GREY}
            style={styles.preferenceText}
            textBold
          />
          <MyText
            text={"Member since December 2017"}
            textColor={COLOR.DARK_GREY}
            style={styles.preferenceText2}
            textBold
          />
        </View>
        <View style={styles.divider} />
       <TouchableOpacity onPress={()=> navigation.navigate('dateTime')}>
       <MyText
          text={"Report this Member"}
          textColor={COLOR.BLUE}
          style={styles.LastText}
          textBold
        />
       </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AlstonScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR.DARK_BLUE,
  },
  chevronBack: {
    marginTop: hp(4),
    marginLeft: hp(4.2),
  },
  scrollView: {
    marginBottom: hp(5),
  },
  row: {
    flexDirection: 'row',
  },
  alstronText: {
    marginLeft: hp(5.1),
    fontSize: hp(2.7),
    marginTop: hp(1.5),
  },
  yearsText: {
    marginLeft: hp(5.1),
    fontSize: hp(2.1),
    marginTop: hp(0.8),
  },
  DRImage: {
    height: hp(9.5),
    width: wp(18.5),
    borderRadius: hp(10.5),
  },
  DrView: {
    marginLeft: hp(20),
    marginTop: hp(1),
  },
  photoContainer: {
    borderWidth: hp(0.1),
    borderColor: COLOR.BLUE,
    borderRadius: hp(9),
    padding: 2,
  },
  experienceText: {
    marginLeft: hp(5.1),
    fontSize: hp(2.4),
    marginTop: hp(1.9),
  },
  star: {
    marginTop: hp(2),
    marginLeft: hp(5),
  },
  ratingText: {
    marginLeft: hp(3.5),
    fontSize: hp(2.4),
    marginTop: hp(2.4),
  },
  arrowRight: {
    marginTop: hp(3.2),
    marginLeft: hp(14.3),
  },
  skillText: {
    marginLeft: hp(5.4),
    fontSize: hp(2.4),
    marginTop: hp(2.4),
  },
  verifiedProfileText: {
    marginLeft: hp(5.4),
    fontSize: hp(2.4),
    marginTop: hp(5),
  },
  iconWrapper: {
    marginLeft: hp(5.4),
    marginTop: hp(2.5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  blueIconView: {
    height: hp(3),
    width: hp(3),
    backgroundColor: COLOR.BLUE,
    borderRadius: hp(2),
    justifyContent: "center",
    alignItems: "center",
  },
  verifiedText: {
    marginLeft: hp(2.5),
    fontSize: hp(2.4),
    marginTop: hp(0.3),
  },
  divider: {
    borderWidth: 1,
    borderColor: COLOR.DARK_GREY,
    width: '100%',
    marginTop: hp(3.5),
  },
  aboutText: {
    marginLeft: hp(5.6),
    fontSize: hp(2.4),
    marginTop: hp(3),
  },
  infoContainer: {
    marginLeft: hp(5.7),
    marginTop: hp(3),
  },
  preferenceText: {
    fontSize: hp(2),
  },
  preferenceText2: {
    fontSize: hp(2),
    marginTop: hp(2.5),
  },
  LastText: {
    fontSize: hp(2.1),
    marginTop: hp(3),
    marginLeft: hp(5.7),
  },
});
