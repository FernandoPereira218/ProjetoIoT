import { Button, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import api from "../utils/api";

const HomeScreen = ({ navigation }) => {

    const [teste, setTeste] = useState([]);

    useEffect(() => {
        console.log('aa');
        api.get(`/main/`)
        .then((response) => {
            console.log(response);
            setTeste(response.data);
        })
        .catch((err) => {
            console.log(err);
        })

    }, []);

  return (
    <View>
        <Button
            title="Teste"
            onPress={() => navigation.navigate("Profile", { name: "Teste" })}
        />

        <View>
            <Text>
                { teste.length > 0 && (
                    teste.map((item) => {
                        return <Button title={item.date}>  </Button>
                    })
                )}

                <Text> { JSON.stringify(teste) } </Text>
            </Text>
        </View>

    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export { HomeScreen, ProfileScreen };
