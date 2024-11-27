import React from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {COLOR, hp, wp} from '../../enums/StyleGuide';
import CustomIcon from '../../components/CustomIcon';
import MyText from '../../components/MyText';
import Photo from '../../components/Photo';
import {useNavigation} from '@react-navigation/native';
import DiscriptionText from '../../components/DiscriptionText';
import IconWithText from '../../components/IconWithText';
const DateTimeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CustomIcon
          name="chevron-back"
          size={28}
          color={COLOR.DARK_GREY}
          style={styles.chevronBack}
        />
      </TouchableOpacity>
      <MyText
        text={'Thu 18 April'}
        textColor={COLOR.WHITE}
        textBold
        style={styles.dateText}
      />

      <ScrollView style={{marginBottom: hp(5)}}>
        {/* Timeline Section */}
        <View style={styles.timelineContainer}>
          <View style={styles.timeRow}>
            <MyText
              text={'07:30'}
              textColor={COLOR.WHITE}
              style={styles.timeText}
            />
            <View style={styles.circle} />
            <View style={styles.verticalLine} />
            <View style={styles.infoContainer}>
              <MyText
                text={'Premier Inn Luton Town Hotel'}
                textColor={COLOR.WHITE}
                style={styles.locationText}
              />
              <MyText
                text={' Regent Street, Luton, UK'}
                textColor={COLOR.WHITE}
                style={styles.locationText2}
              />
              <View style={{flexDirection: 'row'}}>
                <MyText
                  text={'Luton'}
                  textColor={COLOR.WHITE}
                  style={styles.cityText}
                />
                <CustomIcon
                  name="chevron-forward"
                  size={22}
                  color={COLOR.WHITE}
                  style={{marginLeft: hp(21.6)}}
                />
              </View>

              <View style={styles.distanceContainer}>
                <View style={styles.customIconView}>
                  <CustomIcon
                    name="walk"
                    size={12}
                    color={COLOR.WHITE}
                    style={styles.walkIcon}
                  />
                </View>
                <MyText
                  text={'45 km from your departure'}
                  textColor={COLOR.ICON_ORANGE}
                  style={styles.distanceText}
                />
              </View>
            </View>
          </View>

          <View style={styles.timeRow}>
            <MyText
              text={'07:30'}
              textColor={COLOR.WHITE}
              style={styles.timeText}
            />
            <View style={styles.circle} />
            <View style={styles.infoContainer}>
              <MyText
                text={'Golden Way, Urmston,'}
                textColor={COLOR.WHITE}
                style={styles.locationText}
              />
              <MyText
                text={' Manchester, UK'}
                textColor={COLOR.WHITE}
                style={styles.locationText2}
              />
              <View style={{flexDirection: 'row'}}>
                <MyText
                  text={'Urmston'}
                  textColor={COLOR.WHITE}
                  style={styles.cityText}
                />
                <CustomIcon
                  name="chevron-forward"
                  size={22}
                  color={COLOR.WHITE}
                  style={{marginLeft: hp(19)}}
                />
              </View>
              <View style={styles.distanceContainer}>
                <View style={styles.customIconView2}>
                  <CustomIcon
                    name="walk"
                    size={13}
                    color={COLOR.WHITE}
                    style={styles.walkIcon}
                  />
                </View>
                <MyText
                  text={'45 km from your departure'}
                  textColor={COLOR.YELLOW}
                  style={styles.distanceText}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Divider Line */}
        <View style={styles.dividerLine}></View>

        {/* Price Section */}
        <View style={styles.priceContainer}>
          <MyText
            text={'Total price for 1 passenger'}
            textColor={COLOR.DARK_GREY}
            style={styles.distanceText2}
            textBold
          />
          <MyText
            text={'&120.50'}
            textColor={COLOR.WHITE}
            style={styles.distanceText2}
          />
        </View>

        {/* Divider Line */}
        <View style={styles.dividerLine}></View>

        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <View style={styles.profileInfo}>
            <MyText
              text={'Alston'}
              textColor={COLOR.WHITE}
              textBold
              style={styles.profileName}
            />
            <View style={styles.ratingsContainer}>
              <CustomIcon name="star" size={14} color={COLOR.DARK_GREY} />
              <MyText
                text={'5/5 - 2 ratings'}
                textColor={COLOR.DARK_GREY}
                style={styles.ratingsText}
              />
            </View>
            <View style={styles.verifiedContainer}>
              <CustomIcon
                name="shield-checkmark"
                size={16}
                color={COLOR.BLUE}
              />
              <MyText
                text={'Verified Profile'}
                textColor={COLOR.DARK_GREY}
                style={styles.verifiedText}
              />
            </View>
          </View>
         <TouchableOpacity>
          <View style={styles.profileView}>
            <Photo
              source={require('../../assets/images/rider.jpg')}
              style={styles.profileImage}
            />
          </View>
          
         </TouchableOpacity>

          <CustomIcon
            name="chevron-forward"
            size={22}
            color={COLOR.WHITE}
            style={{marginBottom: hp(3)}}
          />
        </View>

        {/* Divider Line */}
        <View style={styles.borderWidth}></View>
        <DiscriptionText />
        <MyText
          text={'Contact Alston'}
          textColor={COLOR.BLUE}
          style={styles.LastText}
          textBold
        />
        <View style={styles.borderWidth2}></View>
        <MyText
          text={'Your booking won’t be confirmed '}
          textColor={COLOR.DARK_GREY}
          style={styles.booking}
        />
        <MyText
          text={'until the driver approves your '}
          textColor={COLOR.DARK_GREY}
          style={styles.until}
        />
        <MyText
          text={'request '}
          textColor={COLOR.DARK_GREY}
          style={styles.request}
        />
        <View style={styles.borderWidth2}></View>
        <IconWithText />
        <MyText
          text={'CUPRA FORMENTOR'}
          textColor={COLOR.WHITE}
          style={styles.cupra}
          textBold
        />
        <MyText
          text={'Black'}
          textColor={COLOR.DARK_GREY}
          style={styles.black}
          textBold
        />
        <View style={styles.dividerLine}></View>
        <View style={styles.ride}>
          <CustomIcon name={'share-outline'} size={26} color={COLOR.BLUE} />
          <TouchableOpacity>
            <MyText
              text={'Share Ride'}
              textColor={COLOR.BLUE}
              style={{fontSize: hp(2.1), marginLeft: hp(1.7)}}
              textBold
            />
          </TouchableOpacity>
        </View>
        <View style={styles.borderWidth2}></View>
        <TouchableOpacity>
          <MyText
            text={'Report Ride'}
            textColor={COLOR.BLUE}
            style={styles.report}
            textBold
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button}>
            <CustomIcon
              name={'calendar-check'}
              size={26}
              color={COLOR.WHITE}
              type="FontAwesome5"
            />
            <MyText
              text={'Request to block'}
              textColor={COLOR.WHITE}
              style={styles.buttonText}
              textBold
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DateTimeScreen;

const styles = StyleSheet.create({
  preferenceText2: {
    fontSize: hp(2),
    marginTop: hp(2.5),
  },
  mainView: {
    flex: 1,
    backgroundColor: COLOR.DARK_BLUE,
  },
  until: {
    fontSize: hp(2.1),
    marginHorizontal: hp(5.4),
  },
  booking: {
    fontSize: hp(2.1),
    marginHorizontal: hp(5.4),
    marginTop: hp(3),
  },
  black: {
    marginLeft: hp(5.4),
    fontSize: hp(2.1),
  },
  button: {
    backgroundColor: COLOR.BLUE,
    width: '77%',
    marginHorizontal: hp(5.4),
    padding: hp(1.2),
    flexDirection: 'row',
    borderRadius: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3),
  },
  ride: {
    flexDirection: 'row',
    marginHorizontal: hp(5),
    alignItems: 'center',
    marginTop: hp(2),
  },
  request: {
    fontSize: hp(2.1),
    marginHorizontal: hp(5.4),
  },
  cupra: {
    marginLeft: hp(5.4),
    fontSize: hp(2.3),
    marginTop: hp(1),
  },
  borderWidth: {
    borderWidth: hp(0.1),
    backgroundColor: COLOR.ICON_GREY,
    width: '77%',
    height: hp(0.1),
    marginHorizontal: hp(5.4),
    marginTop: hp(1),
  },
  report: {
    fontSize: hp(2.1),
    marginLeft: hp(5.4),
    marginTop: hp(2),
  },
  buttonText: {
    fontSize: hp(2),
    marginLeft: hp(0.5),
  },
  borderWidth2: {
    borderWidth: hp(0.1),
    backgroundColor: COLOR.ICON_GREY,
    width: '77%',
    height: hp(0.1),
    marginHorizontal: hp(5.4),
    marginTop: hp(3),
  },
  profileView: {
    borderWidth: 1,
    borderColor: COLOR.BLUE,
    height: hp(5.2),
    width: hp(5.2),
    borderRadius: hp(2.6),
    marginBottom: hp(3),
  },
  customIconView: {
    backgroundColor: COLOR.ICON_ORANGE,
    height: hp(2),
    width: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(4),
    marginLeft: hp(0.3),
  },
  customIconView2: {
    backgroundColor: COLOR.YELLOW,
    height: hp(2.2),
    width: hp(2.2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(4),
    marginLeft: hp(0.3),
  },
  chevronBack: {
    marginTop: hp(4),
    marginLeft: hp(3.8),
  },
  dateText: {
    marginLeft: hp(5.1),
    fontSize: hp(3.3),
    marginTop: hp(1.5),
  },
  timelineContainer: {
    marginTop: hp(3),
    marginLeft: hp(4),
  },
  LastText: {
    fontSize: hp(2.1),
    marginTop: hp(2),
    marginLeft: hp(5.7),
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: hp(3),
  },
  timeText: {
    fontSize: hp(2),
    marginLeft: hp(1.5),
  },
  circle: {
    width: wp(2.8),
    height: wp(2.8),
    borderRadius: wp(1.5),
    borderColor: COLOR.WHITE,
    borderWidth: 1,
    marginLeft: hp(1),
    zIndex: 1,
    marginTop: hp(0.6),
  },
  verticalLine: {
    position: 'absolute',
    top: wp(3.6),
    left: wp(17.1),
    height: hp(13.2),
    width: wp(0.5),
    backgroundColor: COLOR.WHITE,
    zIndex: 0,
  },
  infoContainer: {
    flex: 1,
    marginLeft: hp(1),
  },
  locationText: {
    fontSize: hp(2),
  },
  locationText2: {
    fontSize: hp(2),
    marginLeft: -hp(0.3),
  },
  cityText: {
    fontSize: hp(2),
    marginTop: hp(0.6),
    marginLeft: hp(0.3),
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distanceText: {
    fontSize: hp(1.8),
    marginLeft: hp(0.6),
  },
  distanceText2: {
    fontSize: hp(2.1),
  },
  dividerLine: {
    borderColor: COLOR.DARK_GREY,
    borderWidth: 1,
    width: '100%',
    marginTop: hp(2.5),
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp(2.5),
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: hp(2),
    paddingHorizontal: hp(5.5),
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: hp(2.4),
    marginBottom: hp(0.5),
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(0.5),
  },
  ratingsText: {
    fontSize: hp(2.1),
    marginLeft: wp(2),
  },
  verifiedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1.3),
  },
  verifiedText: {
    fontSize: hp(2.1),
    marginLeft: wp(2),
  },
  profileImage: {
    width: hp(5),
    height: hp(5),
    borderRadius: hp(2.5),
  },
});
