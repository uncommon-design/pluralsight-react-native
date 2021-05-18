import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ( {navigation, route} ) => {
    console.log(route);
    return (
      <View style={styles.mainView}>
        <Text>Details Screen</Text>
          <Button
            title="Go to Image"
            onPress={() => {navigation.navigate("BigImageView")}}/>
          <Button
            title="More Details"
            onPress={() => {navigation.navigate("Details_to_Details")}}/>
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default DetailsScreen;