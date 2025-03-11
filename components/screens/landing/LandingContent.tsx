import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { theme } from "@/constants";

interface LandingContentProps {
    onGetStarted: () => void;
}

const LandingContent: React.FC<LandingContentProps> = ({ onGetStarted }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Cookmate AI 🥗 🍽️ | Find, Create & Enjoy Delicious Recipes
            </Text>
            <Text style={styles.subtitle}>
                Generate delicious recipes in seconds with the power of AI! 🍔✨
            </Text>
            <TouchableOpacity onPress={onGetStarted} style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background,
        height: "100%",
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontFamily: "Outfit-Bold",
        textAlign: "center",
    },
    subtitle: {
        fontSize: 17,
        color: theme.colors.gray,
        textAlign: "center",
        fontFamily: "Outfit-Regular",
        marginTop: 7,
    },
    button: {
        backgroundColor: theme.colors.primary,
        padding: 15,
        borderRadius: 15,
        marginTop: 20,
    },
    buttonText: {
        textAlign: "center",
        color: theme.colors.white,
        fontSize: 17,
        fontFamily: "Outfit-Regular",
    },
});

export default LandingContent;
