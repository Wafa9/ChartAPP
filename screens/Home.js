import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { COLORS, SIZES, FONTS } from "../styles/theme.js";
import Category from "../components/Category.js";
import CategorySlider from "../components/CategorySlider";
import Transactions from "../components/Transactions";
import globalText from "../styles/globalText";
import globalStyles from "../styles/globalElements";

const Home = ({ navigation }) => {
  function renderHeader() {
    return (
      <View style={globalStyles.homeHeader}>
        <View style={{ flex: 1 }}>
          <Text style={{ ...globalText.h1 }}>Hello , Wafa</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      {/* HEADER */}
      {renderHeader()}

      {/* Content */}
      <View style={{ height: 130, marginTop: SIZES.margin }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Category
            name="Balance"
            title="money-check-alt"
            style={COLORS.brown}
            onPress={() => {
              navigation.navigate("Details", { id: 1, name: "Balance" });
            }}
          />
          <Category
            name="Saving"
            title="donate"
            style={COLORS.pink}
            onPress={() => {
              navigation.navigate("Details", { id: 2, name: "Saving" });
            }}
          />
          <Category
            name="Income"
            title="money-bill-wave"
            style={COLORS.green}
            onPress={() => {
              navigation.navigate("Details", { id: 2, name: "Income" });
            }}
          />
          <Category
            name="Loans"
            title="warehouse"
            style={COLORS.gray}
            onPress={() => {
              navigation.navigate("Details", { id: 3, name: "Loans" });
            }}
          />
          <Category
            name="Goals"
            title="star"
            style={COLORS.pink}
            onPress={() => {
              navigation.navigate("Details", { id: 4, name: "Goals" });
            }}
          />
        </ScrollView>
      </View>
      <CategorySlider />
      {/* Transactions */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        <Transactions />
      </ScrollView>
    </View>
  );
};

export default Home;
