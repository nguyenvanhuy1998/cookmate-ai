import { StatusBar } from "expo-status-bar";
import { View, Platform, StatusBar as RNStatusBar } from "react-native";
import { theme } from "@/constants";

interface CustomStatusBarProps {
    backgroundColor?: string;
    style?: "auto" | "light" | "dark";
}

const CustomStatusBar: React.FC<CustomStatusBarProps> = ({
    backgroundColor = theme.colors.background,
    style = "auto",
}) => {
    const statusBarHeight =
        Platform.OS === "ios" ? RNStatusBar.currentHeight : 0;

    return (
        <View
            style={{
                height: statusBarHeight,
                backgroundColor: backgroundColor,
            }}
        >
            <StatusBar style={style} backgroundColor={backgroundColor} />
        </View>
    );
};
export default CustomStatusBar;
