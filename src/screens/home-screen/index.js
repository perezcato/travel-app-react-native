import React from 'react';
import {SafeAreaView, ScrollView, View, TextInput} from 'react-native';
import homeStyles from './styles';
import fonts from '../../config/fonts';

const HomeScreen = () => {
  return (
    <SafeAreaView style={homeStyles.container}>
      <ScrollView style={homeStyles.scrollContainer}>
        <View style={homeStyles.headerContainer}>
          <View style={homeStyles.inputContainer}>
            <View style={homeStyles.inputStyle}>
              <TextInput
                  style={homeStyles.inputBoxStyles}
                  placeHolderStyle={{
                      fontFamily: fonts.MEDIUM
                  }}
                  value={''}
                  placeholder={'search'}
              />
            </View>
          </View>
          <View />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
