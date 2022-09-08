import axios from "axios";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import UserCard from "../components/UserCard";

const secondary = "#FF9900";
const primary = "#75DFEB";
const Home = ({ navigation }) => {
  const [users, setUsers] = useState(null);
  const [email, setEmail] = useState(null);

  const getUsers = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/users");
  };
  const getUserSearch = async () => {
    return await axios.get(
      `https://jsonplaceholder.typicode.com/users?email=${email}`
    );
  };
  useEffect(() => {
    getUsers().then((r) => {
      console.log(r.data);
      setUsers(r.data);
    });
  }, []);

  const search = () => {
    email
      ? getUserSearch().then((r) => {
          console.log(r.data);
          setUsers(r.data);
        })
      : getUsers().then((r) => {
          console.log(r.data);
          setUsers(r.data);
        });
  };
  //   useEffect(() => {
  //     console.log(email);
  //   }, [email]);

  return (
    <>
      <SafeAreaView />
      <ExpoStatusBar style="dark" />

      <SafeAreaView style={{ paddingTop: 30 }}>
        {/* <View style={styles.container}>{props.children}</View> */}
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            // paddingVertical: 5,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginTop: 20 }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
            >
              Usuarios
            </Text>
            <View>
              <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Buscar usuario</Text>
                <TextInput
                  keyboardType="email-address"
                  mode="outlined"
                  outlineColor={primary}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  dense={true}
                  activeOutlineColor={secondary}
                  placeholder="Ingrese email"
                />
                <Button
                  style={{ marginTop: 10, borderRadius: 15 }}
                  compact
                  mode="contained"
                  onPress={search}
                >
                  Buscar
                </Button>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: 10, flex: 1, paddingVertical: 10 }}>
            {/* {isLoadingFetch ? (
              <Text style={styles.msgFetch}>Cargando...</Text> 
            ) : (
              isLoadingFetch && (
                <Text style={styles.msgFetch}>Error de servidor</Text>
              )
            )} */}
            {users &&
              users?.map((user) => (
                <UserCard navigation={navigation} key={user.id} user={user} />
              ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    paddingHorizontal: 10,
  },
  labelInput: {
    color: secondary,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 1,
  },
});
