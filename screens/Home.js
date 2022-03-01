import React, {useEffect, useState} from "react";
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
import axios from 'axios';

const Home = ({ navigation }) => {
  const [ChartData, setChartData] = useState([]);
  const [BalanceData, setBalanceData] = useState([]);
  const [GoalsData, setGoalsData] = useState([]);
  const [SavingsData, setSavingsData] = useState([]);
  const [IncomeData, setIncomeData] = useState([]);
  const [LoansData, setLoansData] = useState([]);


  const getData = () => {
    axios.get('https://621e3a36849220b1fc93a441.mockapi.io/chartap/transactions')
  .then(function (response) {
    // handle success
    console.log(response);
    setChartData(response.data);
    let data = response.data;
    let balance =  data?.filter((vl) => {
      return vl?.type == "Balance"
    });

    setBalanceData(balance)

    let savings =  data?.filter((vl) => {
      return vl?.type == "Savings"
    })

    setSavingsData(savings);

    let loans =  data?.filter((vl) => {
      return vl?.type == "Loans"
    });
    setLoansData(loans);

    let income =  data?.filter((vl) => {
      return vl?.type == "Income"
    });
    setIncomeData(income);

    let goals =  data?.filter((vl) => {
      return vl?.type == "Goals"
    })

    setGoalsData(goals);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
  }

  useEffect(() => {
    getData();
  }, [])

  console.log("Chart Data", ChartData);

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
              navigation.navigate("Details", { id: 1, name: "Balance", chartdata : BalanceData });
            }}
          />
          <Category
            name="Saving"
            title="donate"
            style={COLORS.pink}
            onPress={() => {
              navigation.navigate("Details", { id: 2, name: "Saving", chartdata : SavingsData });
            }}
          />
          <Category
            name="Income"
            title="money-bill-wave"
            style={COLORS.green}
            onPress={() => {
              navigation.navigate("Details", { id: 3, name: "Income", chartdata : IncomeData });
            }}
          />
          <Category
            name="Loans"
            title="warehouse"
            style={COLORS.gray}
            onPress={() => {
              navigation.navigate("Details", { id: 4, name: "Loans", chartdata : LoansData });
            }}
          />
          <Category
            name="Goals"
            title="star"
            style={COLORS.pink}
            onPress={() => {
              navigation.navigate("Details", { id: 5, name: "Goals", chartdata : GoalsData });
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
