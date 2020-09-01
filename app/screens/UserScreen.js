import React, { useReducer, useContext } from "react";
import { Text, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import AuthContext from "../auth/context";

function UserScreen() {
  const { user } = useContext(AuthContext);
  return (
    <Screen style={styles.screen}>
      <View>
        <Text>
          Hello {user.name}. You are a {user.role} that can be reached at{" "}
          {user.email}.
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default UserScreen;
