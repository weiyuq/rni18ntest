/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Button,
    Alert
} from 'react-native';

import I18n from 'react-native-i18n'
import { getLanguages } from 'react-native-i18n'



getLanguages().then(languages => {
    console.log(languages) // ['en-US', 'en']
})
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
I18n.fallbacks = true

I18n.translations = {
    "en": {
        greeting: 'Hi!Hi!Hi!Hi!Hi!Hi!Hi!Hi!Hi!Hi!Hi!Hi!Hi!'
    },
    "zh": {
        greeting: '嗨！嗨！嗨！嗨！嗨！嗨！嗨！嗨！嗨！嗨！嗨！嗨！嗨！'
    }
}
export default class App extends Component<{}> {
    onButtonPress () {
        // Alert.alert('Button has been pressed!');
        // I18n.t("some.scoped.translation", {locale: "en"});
        I18n.locale = 'en';
        console.log(I18n.t('greeting'));
    };

  render() {
      console.log("222222222")
    return (
      <View style={styles.container}>
        {/*<Text style={styles.welcome}>*/}
          {/*Welcome to React Native!*/}
        {/*</Text>*/}
        {/*<Text style={styles.instructions}>*/}
          {/*To get started, edit App.js*/}
        {/*</Text>*/}
        {/*<Text style={styles.instructions}>*/}
          {/*{instructions}*/}
        {/*</Text>*/}
        <Text>{I18n.t('greeting')}</Text>
          <View>
              <Button
                  onPress={this.onButtonPress.bind(this)}
                  title="Change language"
                  accessibilityLabel="See an informative alert"
              />
          </View>
      </View>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
