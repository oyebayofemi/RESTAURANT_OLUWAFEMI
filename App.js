import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Card from './components/card';
import Categories from './components/categories';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Header />
      </View>


      <View style={styles.cardContainer}>
        <Card title="Order" description="Start ordering your favorites here." imageName={require("./assets/burger.png")} />
        <Card title="Rewards" description="Collect points to earn free rewards." imageName={require("./assets/reward.jpg")} />
      </View>

      <View style={styles.categoriesContainer}>
        <Categories icon="local-offer" color="yellow" name="Offers" />
        <Categories icon="truck" color="green" name="Delivery" />
        <Categories icon="gift" color="purple" name="Gift" />
        <Categories icon="heart" color="red" name="Community" />
        <Categories icon="credit-card" color="grey" name="Payment" />
        <Categories icon="location-arrow" color="red" name="Locations" />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f2ea',
    paddingTop: 60,
    paddingHorizontal: 30,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "29%",
    justifyContent: "space-between",
  },
  headerContainer: {
    height: "30%",
    marginBottom: 20,
  },
  categoriesContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    marginTop: 20,
    alignItems: "flex-start",

  }
});
