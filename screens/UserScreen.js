import axios from "axios";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import PostCard from "../components/PostCard";
const secondary = "#FF9900";
const primary = "#75DFEB";
const UserScreen = ({ route, navigation }) => {
  const { user } = route.params;
  const [posts, setPosts] = useState(null);
  const [photos, setPhotos] = useState(null);

  const getPosts = async () => {
    return await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
  };
  const getPhotos = async () => {
    return await axios.get(`https://jsonplaceholder.typicode.com/photos`);
  };
  useEffect(() => {
    getPhotos().then((r) => {
      console.log("PHOTOS", r.data);
      setPhotos(r.data);
    });
    getPosts().then((r) => {
      setPosts(r.data);
    });
  }, []);

  return (
    <>
      <SafeAreaView />
      <ExpoStatusBar style="dark" />

      <SafeAreaView style={{ paddingTop: 35 }}>
        {/* <View style={styles.container}>{props.children}</View> */}
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              borderRadius: 15,
              backgroundColor: primary,
              padding: 10,
              margin: 15,
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, marginRight: 2 }}
              >
                {user.name}
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                - {user.username}
              </Text>
            </View>
            <Text>{user.email}</Text>
            <Text>{user.phone}</Text>
            <Text>{user.website}</Text>
            <Text>Compañia: {user.company.name}</Text>
          </View>

          <View>
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              Publicaciones
            </Text>
            <View style={{ margin: 10 }}>
              {posts &&
                posts?.map((p) => (
                  <PostCard navigation={navigation} key={p.id} post={p} />
                ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default UserScreen;
const styles = StyleSheet.create({
  profile: {
    marginVertical: 20,
    alignItems: "center",
    // flex: 1,
  },
});
