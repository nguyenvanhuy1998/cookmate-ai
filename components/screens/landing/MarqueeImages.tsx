import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import React from "react";
import { Marquee } from "@animatereactnative/marquee";

interface MarqueeImagesProps {
    speed: number;
    marginTop?: number;
    imageList: ImageSourcePropType[];
}

const MarqueeImages: React.FC<MarqueeImagesProps> = ({
    speed,
    marginTop = 0,
    imageList,
}) => {
    return (
        <Marquee
            spacing={10}
            speed={speed}
            style={{
                marginTop,
                transform: [
                    {
                        rotate: "-4deg",
                    },
                ],
            }}
        >
            <View style={styles.imageContainer}>
                {imageList.map((image, index) => (
                    <Image key={index} source={image} style={styles.image} />
                ))}
            </View>
        </Marquee>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 160,
        height: 160,
        borderRadius: 25,
    },
    imageContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
    },
});

export default MarqueeImages;
