import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, TouchableRipple } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

const secondary = "#FF9900";
const primary = "#75DFEB";
export default function UserCard({ user, navigation }) {
  const goToPosts = () => {
    navigation.push("User", { user: user });
  };
  return (
    <Card style={styles.card} accessible={true} mode="elevated">
      <Card.Content style={styles.cardContent}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.text2}>{user?.username}</Text>
          <Text style={styles.text2}>{user?.email}</Text>
        </View>
        {/* <Avatar.Image source={require('../../assets/imgs/profile2.jpg')} /> */}
        <Button
          mode="contained"
          onPress={goToPosts}
          style={{ borderRadius: 15 }}
        >
          Ingresar
        </Button>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#424242",
    borderRadius: 15,
    marginVertical: 3,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "column",
    textAlign: "start",
    color: secondary,
  },
  name: {
    fontSize: 16,
    color: "#fff",
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
