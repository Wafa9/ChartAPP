import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, SIZES, FONTS } from "../styles/theme.js";
import globalStyles from "../styles/globalElements";
import globalText from "../styles/globalText";
import ProgressCircle from "react-native-progress-circle";
import { WP } from "../utils/resources.js";

export default function App() {
  const [operation, setOperation] = useState([
    { type: "Balance", amount: "8,443", key: "1" },
    { type: "Loans", amount: "10,043", key: "2" },
    { type: "Goals", amount: "2,443", key: "3" },
    { type: "Saving", amount: "7,443", key: "4" },
  ]);

  return (
    <View style={globalStyles.categoryContainer}>
      <ImageBackground
        resizeMode={"stretch"}
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          padding: WP("5%"),
        }}
        source={require("../assets/images/BackgroundImage.png")}
      >
        {/* --------------- Pie Chart Circle ------------------ */}
        <ProgressCircle
          percent={75}
          radius={50}
          borderWidth={8}
          color="#68AB9F"
          shadowColor="#f2dddd"
        >
          <Text style={globalText.labelText}>{"75%"}</Text>
        </ProgressCircle>
        <View style={{ position: "absolute", left: WP("34%"), top: WP("14%") }}>
          {/* ProgressChart */}
          <Text style={globalText.labelText}>Monthly Limit</Text>
          <Text style={globalText.labelText}>$6,400</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
