import React from 'react';
import { View
   } from 'react-native';
import {
    ProgressChart
  } from "react-native-chart-kit";
import { Dimensions } from "react-native";

class LifeWheel extends React.Component {
    render() {
        const data = {
            labels: this.props.lifeWheel.category_scores.map(cat_score => cat_score.name), // optional
            data: this.props.lifeWheel.category_scores.map(cat_score => parseInt(cat_score.score) / 10)
          };
        const chartConfig = {
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0,
            color: (value = 1) => `rgba(54, 157, 200, ${value})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 1.0
          };
        const screenWidth = Dimensions.get("window").width;
        return (
            <View>
                <ProgressChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    hideLegend={false}
                />
            </View>
        );
    }
}

export default LifeWheel