import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { COLORS, SIZES, FONTS } from "../styles/theme.js";
import { data } from "../config/data.js";
import { AntDesign } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import { WP } from "../utils/resources.js";
import months from "../config/months.js";
import globalText from "../styles/globalText.js";

const width = Dimensions.get("screen").width;

export default function Details({ route, navigation }) {
  const { id } = route.params;
  const { name , chartdata} = route.params;

  const [location, setLocation] = useState("");
  const [openDropDown, setOpenDropDown] = useState(false);
  const [chartAmountData, setChartAmountData] = useState();

  useEffect(() => {
    let aarr = [];
      chartdata?.map((itemmm) => {
          let amount = parseFloat(itemmm?.amount);
          aarr.push(amount);
      });
      setChartAmountData(aarr);
  }, []);

  console.log(id);
  console.log("Chart Data", chartdata);

  console.log("Data ", chartAmountData)
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.brown} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{name}</Text>
        <View style={{ width: 30 }}></View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{Height: 50,}}>
        <TouchableOpacity
          onPress={() => {
            setOpenDropDown(!openDropDown);
          }}
          style={styles.dropDownWrapper}
        >
          <Text style={globalText.labelText}>
            {location != "" ? location : "Select Month"}
          </Text>
          <AntDesign
            name={openDropDown ? "caretup" : "caretdown"}
            size={WP("4%")}
            color="#022173"
          />
        </TouchableOpacity>
        {openDropDown &&
          months.map((item, key) => {
            return (
              <TouchableOpacity
                key={key}
                onPress={() => {
                  setLocation(item.title);
                  setOpenDropDown(false);
                }}
                style={styles.dropItems}
              >
                <Text style={{ ...globalText.labelText, color: COLORS.white }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}

        {chartAmountData?.length > 0 && <LineChart
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"],
            datasets: [
              {
                data: chartAmountData,
                strokeWidth: 2,
              },
            ],
          }}
          bezier
          withInnerLines={false}
          width={WP("100%")}
          height={WP("60%")}
          chartConfig={{
            backgroundColor: "#383e42",
            backgroundGradientFrom: "#7F7F7F",
            backgroundGradientTo: "#68AB9F",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.lineChart}
        />}

        <Text>
          {data.map((item) => {
            item.type == name && item.total;
          })}
        </Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: StatusBar.currentHeight,
    backgroundColor: COLORS.brown,
    width: width,
    padding: WP("5%"),
  },
  lineChart: {
    margin: 10,
    borderRadius: WP("5%"),
    alignSelf: "center",
  },
  headerText: {
    fontSize: 22,
    fontFamily: "Normal",
    marginLeft: 20,
  },
  dropDownWrapper: {
    borderWidth: 1,
    borderColor: "#d99e96",
    borderRadius: WP("6%"),
    margin: WP("3%"),
    padding: 10,
    paddingHorizontal: WP("5%"),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  dropItems: {
    padding: 8,
    marginBottom: 5,
    backgroundColor: "#d99e96",
    borderWidth: 1,
    paddingHorizontal: WP("5%"),
    borderRadius: WP("6%"),
    marginHorizontal: WP("3%"),
    
  },
});
