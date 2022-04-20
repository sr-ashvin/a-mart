import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {connect} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../assets/themes/styles';

import {isLoggedInSelector} from '../SignIn/reducer';
import {signOut} from '../SignIn/actions';

const links = [
  {icon: 'heart', title: 'Your Favorites'},
  {icon: 'credit-card', title: 'Payments'},
  {icon: 'share-variant', title: 'Referral Code'},
  {icon: 'bullhorn', title: 'Promotions'},
  {icon: 'cog', title: 'Settings'},
];
const Links = ({item}) => {
  return (
    <TouchableOpacity
      key={item.icon}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
      }}>
      <MaterialCommunityIcons
        name={item.icon}
        size={20}
        style={{paddingHorizontal: 10}}
        color={colors.primary}
      />
      <Text style={{fontSize: 16, color: 'gray', fontWeight: '600'}}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};
const Profile = props => {
  const pressSignOut = () => {
    try {
      props.signOut();
    } catch (e) {
      console.log(e);
    }
    if (props.isLoggedIn) props.navigation.navigate('signIn');
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileBlock}>
        <View style={styles.imageBlock}>
          <Image
            style={styles.userPic}
            source={require('../../assets/images/user.jpeg')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.userName}>
          <Text style={styles.userNameText}>Amit solanki</Text>
        </View>
        <View style={styles.iconCenter}>
          <MaterialCommunityIcons name="email" size={20} color="gray" />
          <Text style={styles.email}>austin@ninjaTechnolabs.com</Text>
        </View>
        <View style={styles.iconCenter}>
          <MaterialCommunityIcons name="phone" size={20} color="gray" />
          <Text style={styles.phoneNumber}>+91 9988776655</Text>
        </View>
      </View>
      <View style={styles.borderLineExtra} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={styles.box}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>$5000</Text>
          <Text style={{fontSize: 14, color: 'gray'}}>Balance</Text>
        </View>
        <View style={styles.borderLine} />
        <View style={styles.box}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>20</Text>
          <Text style={{fontSize: 14, color: 'gray'}}>Orders</Text>
        </View>
      </View>
      <View style={styles.borderLine} />
      <View style={{margin: 15}}>
        {links.map((item, index) => (
          <Links item={item} key={index} />
        ))}
      </View>
      <View style={styles.borderLine} />
      <TouchableOpacity style={styles.iconCenter} onPress={pressSignOut}>
        <MaterialCommunityIcons
          name="logout-variant"
          size={30}
          color={colors.primary}
          style={{padding: 10}}
        />
        <Text style={{fontWeight: '600', fontSize: 16}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  const isLoggedIn = isLoggedInSelector(state);
  return {isLoggedIn};
};

const ConnectedProfile = connect(mapStateToProps, {
  signOut,
})(Profile);

export {ConnectedProfile as Profile};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexGrow: 1,
  },
  userPic: {
    width: 140,
    height: 170,
    borderRadius: 20,
  },
  profileBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  imageBlock: {},
  userName: {
    padding: 10,
    position: 'relative',
    bottom: 25,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  userNameText: {fontSize: 14, textTransform: 'uppercase', color: 'gray'},
  email: {fontSize: 16, padding: 10, color: 'gray'},
  phoneNumber: {fontSize: 14, color: 'gray'},
  iconCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderLine: {
    borderWidth: 1,
    borderColor: colors.grayLight,
  },
  box: {
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
  borderLineExtra: {
    borderWidth: 1,
    marginTop: 20,
    borderColor: colors.grayLight,
  },
});
