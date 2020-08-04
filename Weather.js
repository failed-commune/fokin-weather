import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#2c3250", "#fd746c"],
        title: "Haze",
        subtitle: "yessssss"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#2c3250", "#fd746c"],
        title: "Thunderstorm",
        subtitle: "yessssss"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#2c3250", "#fd746c"],
        title: "Drizzle",
        subtitle: "yessssss"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#2c3250", "#fd746c"],
        title: "Rain",
        subtitle: "yessssss"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#2c3250", "#fd746c"],
        title: "Snow",
        subtitle: "yessssss"
    },
    Atmosphere: {
        iconName: "weather-sunny",
        gradient: ["#2c3250", "#fd746c"],
        title: "Atmosphere",
        subtitle: "yessssss"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2c3250", "#fd746c"],
        title: "Clear",
        subtitle: "yessssss"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["", ""],
        title: "Clouds",
        subtitle: "yessssss"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["", ""],
        title: "Mist",
        subtitle: "yessssss",
    },
    Smoke: {
        iconName: "",
        gradient: ["", ""],
        title: "Smoke",
        subtitle: "yessssss",
    },
    Dust: {
        iconName: "weather-hazy",
        gradient: ["", ""],
        title: "Dust",
        subtitle: "yessssss",
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["", ""],
        title: "Fog",
        subtitle: "yessssss",
    },
    Sand: {
        iconName: "",
        gradient: ["", ""],
        title: "Sand",
        subtitle: "yessssss",
    },
    Ash: {
        iconName: "",
        gradient: ["", ""],
        title: "Ash",
        subtitle: "yessssss",
    },
    Squall: {
        iconName: "",
        gradient: ["", ""],
        title: "Squall",
        subtitle: "yessssss",
    },
    Tornado: {
        iconName: "",
        gradient: ["", ""],
        title: "Tornado",
        subtitle: "yessssss",
    },
}

export default function Weather({temp, condition}) {
    return (
            // Background Linear Gradient
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name= {weatherOptions[condition].iconName}
                    size={96}
                    color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>);
};

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Smoke",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 36,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "500",
        fontSize: 24,
    },
    textContainer: {
        alignSelf: "flex-start",
        alignItems: "flex-start",
        paddingHorizontal: 20,
        paddingLeft: 50,

    },
})