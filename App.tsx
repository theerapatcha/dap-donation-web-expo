import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  WebView,
  TouchableOpacity
} from "react-native";
import Expo from "expo";

const IP = "10.22.66.121";
const PORT = "443";
const HOST_URL = `http://${IP}:${PORT}`;

class IonicView extends React.Component {
  webview: WebView;

  render() {
    let input = { uri: HOST_URL };

    return (
      <WebView
        ref={ref => {
          this.webview = ref;
        }}
        javaScriptEnabled
        bounces={false}
        scrollEnabled={false}
        source={input}
        {...this.props}
      />
    );
  }
}
export default function App() {
  return (
    <View style={styles.container}>
      <IonicView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100 + "%",
    paddingTop: Expo.Constants.statusBarHeight
  }
});
