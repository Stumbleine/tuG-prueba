import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Text,
  TouchableRipple,
} from "react-native-paper";
const secondary = "#FF9900";
const primary = "#75DFEB";
export default function PostCard({ post, navigation }) {
  const [photo, setPhoto] = useState(
    "https://via.placeholder.com/150/56a8c2.png"
  );
  const gotToPost = () => {
    navigation.push("Post", { post: post, photo: photo });
  };

  const getThumb = async () => {
    return await axios.get(
      `https://jsonplaceholder.typicode.com/photos?id=${post.id}`
    );
  };

  useEffect(() => {
    getThumb().then((r) => {
      console.log("THUMB=>>", r.data[0]);

      setPhoto(r.data[0]);
    });
  }, []);

  return (
    <Card style={styles.card} accessible={true} mode="elevated">
      <Card.Content style={styles.cardContent}>
        <Card.Cover
          source={{ uri: photo?.thumbnailUrl + ".png" }}
          style={{ borderRadius: 20 }}
          // onError={(e) => {
          //   console.log(e);
          // }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{post?.title}</Text>
        </View>
        <Button
          mode="contained"
          onPress={gotToPost}
          style={{ borderRadius: 15, marginTop: 20 }}
        >
          Ver
        </Button>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#37474f",
    borderRadius: 20,
    marginVertical: 3,
  },
  cardContent: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  textContainer: {
    flexDirection: "column",
    textAlign: "start",
    color: secondary,
  },
  name: {
    fontSize: 18,
    marginTop: 5,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  text2: {
    fontSize: 14,
    color: "#fff",
  },
  textNumber: {
    fontSize: 14,
    fontWeight: "900",
    // color: primary,
  },
});
