import React, { useReducer, useContext } from "react";
import { Text, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";

function FoodScreen() {
  return (
    <Screen style={styles.screen}>
      <View>
        <Text>This is where all the food will go because of Myra.</Text>
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

export default FoodScreen;
