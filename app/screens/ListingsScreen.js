import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

// import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import useApi from "../api/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  const item = {
    title: "A lot of apples",
    price: "Quantity: 3",
    imageUrl: "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/05/13/35552.jpeg",
  }

  return (
    <>
      {/* <ActivityIndicator visible={getListingsApi.loading} /> */}
      <Screen style={styles.screen}>
        {/* {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <Button title="Retry" onPress={getListingsApi.request} />
          </>
        )} */}

        {/* <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        /> */}

        <Card
          title={item.title}
          subTitle={item.price}
          imageUrl={item.imageUrl}
          onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          thumbnailUrl={item.imageUrl}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
