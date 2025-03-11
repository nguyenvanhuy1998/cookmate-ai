import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        "Outfit-Regular": require("../assets/fonts/Outfit-Regular.ttf"),
        "Outfit-Medium": require("../assets/fonts/Outfit-Medium.ttf"),
        "Outfit-SemiBold": require("../assets/fonts/Outfit-SemiBold.ttf"),
        "Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return <Stack />;
}
