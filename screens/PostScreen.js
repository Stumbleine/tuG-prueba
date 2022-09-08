import axios from "axios";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { Card } from "react-native-paper";
const secondary = "#FF9900";
const primary = "#75DFEB";
export default function PostScreen({ route }) {
  const { post } = route.params;
  const { photo } = route.params;

  return (
    <>
      <SafeAreaView />
      <ExpoStatusBar style="dark" />

      <SafeAreaView style={{ paddingTop: 30 }}>
        {/* <View style={styles.container}>{props.children}</View> */}
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Card.Cover
            style={{ marginTop: 20, margin: 10, borderRadius: 15 }}
            source={{ uri: photo?.url + ".png" }}
          />
          <View
            style={{
              borderRadius: 15,
              // backgroundColor: primary,
              padding: 10,
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
            >
              {post?.title}
            </Text>
            <Text style={{ fontSize: 15, marginTop: 15, textAlign: "center" }}>
              {post?.body}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  profile: {
    marginVertical: 20,
    alignItems: "center",
    // flex: 1,
  },
});
