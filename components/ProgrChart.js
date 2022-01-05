import React from 'react'
import { View, Text , Image , ScrollView} from 'react-native';
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import {ProgressChart} from "react-native-chart-kit";



const ProgrChart= () => {
    const data = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8]
};
    return(
        <View>
      <ProgressChart
  data={data}
  width={100}
  height={120}
  strokeWidth={16}
  radius={32}
  chartConfig={chartConfig}
  hideLegend={false}
/>
</View>

       
    )
}

export default ProgrChart;