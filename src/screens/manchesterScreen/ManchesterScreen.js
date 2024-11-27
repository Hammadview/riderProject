import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomIcon from '../../components/CustomIcon';
import { COLOR, hp, wp } from '../../enums/StyleGuide';
import MyText from '../../components/MyText';
import ColorGradient from '../../components/ColorGradient';
import { useNavigation } from '@react-navigation/native';
const ManchesterScreen = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('All');
  return (
    <View style={styles.mainView}>
      <View style={styles.rowContainer}>
        <CustomIcon
          name="chevron-back"
          size={28}
          color={COLOR.DARK_GREY}
          style={styles.chevronBack}
        />
        <MyText
          text={'Manchester Airport...'}
          textColor={COLOR.WHITE}
          style={styles.manText}
        />
        <CustomIcon
          name="arrow-forward"
          size={16}
          color={COLOR.WHITE}
          style={styles.arrowForward}
        />
        <MyText
          text={'Manchester Airport...'}
          textColor={COLOR.WHITE}
          style={styles.manText}
        />
      </View>
      <View style={styles.todayContainer}>
        <MyText
          text={'Today, 3 passengers'}
          textColor={COLOR.GREY}
          style={styles.todayText}
        />
      </View>
      {/* Options with small underline */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          onPress={() => setSelectedOption('All')}
          style={styles.textContainer}
        >
          <MyText
            text={'All'}
            textColor={COLOR.WHITE}
            textBold
            style={styles.underlineText}
          />
          <View style={styles.underline}></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedOption('Carpool')}
          style={styles.textContainer}
        >
          <MyText
            text={'Carpool'}
            textColor={COLOR.WHITE}
            textBold
            style={styles.underlineText}
          />
          <View style={styles.underline}></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedOption('Bus')}
          style={styles.textContainer}
        >
          <MyText
            text={'Bus'}
            textColor={COLOR.WHITE}
            textBold
            style={styles.underlineText}
          />
          <View style={styles.underline}></View>
        </TouchableOpacity>
      </View>

      {/* Full-width grey line with dynamically highlighted section */}
      <View style={styles.fullLineContainer}>
        <View
          style={[
            styles.fullLineSegment,
            selectedOption === 'All' && styles.activeSegment,
          ]}
        />
        <View
          style={[
            styles.fullLineSegment,
            selectedOption === 'Carpool' && styles.activeSegment,
          ]}
        />
        <View
          style={[
            styles.fullLineSegment,
            selectedOption === 'Bus' && styles.activeSegment,
          ]}
        />
      </View>

      <MyText
        text={'18 April 2024'}
        textColor={COLOR.WHITE}
        textBold
        style={styles.dateText}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
      <ColorGradient  onPress={()=> navigation.navigate('alston')}/>
      <ColorGradient/>
      <ColorGradient/>
      <ColorGradient/>
      <ColorGradient/>
      </ScrollView>
     
    </View>
  );
};
export default ManchesterScreen;
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR.DARK_BLUE,
  },
  DRImage: {
    height: hp(5),
    width: wp(10),
    borderRadius: 30,

  },
  DrView: {
    marginLeft: hp(2),
    marginTop:hp(1)
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chevronBack: {
    marginTop: hp(4),
    marginLeft: hp(4.2),
  },
  manText: {
    fontSize: hp(1.3),
    marginTop: hp(1.8),
    marginLeft: hp(1),
  },
  arrowForward: {
    marginTop: hp(1.7),
    marginHorizontal: hp(0.5),
  },
  todayContainer: {
    marginLeft: hp(9),
    marginTop: -hp(1.6),
  },
  todayText: {
    fontSize: hp(1.3),
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: hp(1),
  },
  textContainer: {
    alignItems: 'center',
  },
  underline: {
    width: hp(1.5),
    height: 2,
    backgroundColor: COLOR.WHITE,
    marginTop: hp(0.5),
    marginLeft: -hp(0.8),
  },
  underlineText: {
    fontSize: hp(1.9),
    marginTop: hp(1.8),
  },
  fullLineContainer: {
    flexDirection: 'row',
    height: 2,
    backgroundColor: COLOR.GREY,
    marginTop: hp(2),
  },
  fullLineSegment: {
    flex: 1,
    backgroundColor: COLOR.GREY,
  },
  activeSegment: {
    backgroundColor: COLOR.WHITE,
  },
  dateText: {
    fontSize: hp(2.5),
    marginLeft: hp(5),
    marginTop: hp(2),
  },
  gradientBox: {
    backgroundColor: 'transparent',
    height: hp(19),
    width: wp(79),
    marginHorizontal: hp(5),
    borderRadius: hp(2.5),
    marginTop: hp(1.5),
  },
  timeText: {
    fontSize: hp(1.4),
    marginLeft: hp(1.7),
    marginTop: hp(1.3),
  },
  locationText: {
    fontSize: hp(1.4),
    marginLeft: hp(5),
    marginTop: hp(1.3),
  },
  priceText: {
    fontSize: hp(1.4),
    marginLeft: hp(18),
    marginTop: hp(1.3),
  },
  priceText2: {
    fontSize: hp(1.4),
    marginLeft: hp(2.5),
    marginTop: hp(1.3),
  },
  priceText3: {
    fontSize: hp(1.6),
    marginLeft: hp(0.4),
  },
  durationText: {
    fontSize: hp(1.4),
    marginLeft: hp(1.7),
    marginTop: hp(0.1),
  },
  iconContainer: {
    backgroundColor: COLOR.ICON_GREY,
    height: hp(1.9),
    width: hp(1.9),
    borderRadius: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: hp(5.4),
    marginTop: hp(0.5),
  },
  iconContainer3: {
    backgroundColor: COLOR.ICON_GREY,
    height: hp(1.9),
    width: hp(1.9),
    borderRadius: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: hp(10.6),
    marginTop: hp(0.5),
  },
  iconContainer2: {
    backgroundColor: COLOR.ICON_GREY,
    height: hp(1.9),
    width: hp(1.9),
    borderRadius: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: hp(0.5),
    marginTop: hp(0.5),
  },
  iconContainerOrange: {
    backgroundColor: COLOR.ICON_ORANGE,
    height: hp(1.9),
    width: hp(1.9),
    borderRadius: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: hp(0.5),
    marginTop: hp(0.5),
  },
  
});
