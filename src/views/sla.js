import { Button, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import api from "../utils/api";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";


const HomeScreen = ({ navigation }) => {

    const [data, setData] = useState([0]);
    const [contributionData, setContributionData] = useState([]);

    useEffect(() => {
        console.log('aa');
        api.get(`/main/`)
        .then((response) => {
            //setData(response.data.amountPerWeekDay);
            //console.log(response.data.amountPerWeekDay);
            setData(response.data.amountPerWeekDay);
            setContributionData(response.data.listDates);
        })
        .catch((err) => {
            console.log(err);
        })

    }, []);

  return (
    <View>
        {/* <Button
            title="Teste"
            onPress={() => navigation.navigate("Profile", { name: "Teste" })}
        /> */}

        <View>
            <Text>Gráfico Ocorrências por dia da semana</Text>
            <BarChart
                data={{
                labels: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
                datasets: [
                    {
                    data: data
                    }
                ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                //yAxisLabel="$"
                //yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />
        </View>

        <View>
            <Text>Gráfico de ocorências</Text>
            <ContributionGraph
                // data={{
                // datasets: [
                //     {
                //     data: data
                //     }
                // ]
                // }}
                values={contributionData}
                endDate={new Date("2022-12-10")}
                numDays={105}
                width={Dimensions.get("window").width}
                height={220}
                chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
                }}
            />
        </View>

    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export { HomeScreen, ProfileScreen };
