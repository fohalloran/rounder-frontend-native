import React, { useEffect, useRef } from 'react';
import { View, Animated, Image } from 'react-native';
import styles from "./loading-screen.styles"; // Assuming your styles are stored in a separate file

export default function LoadingScreen() {
    const blob1Animation = useRef(new Animated.Value(0)).current;
    const blob2Animation = useRef(new Animated.Value(0)).current;
    const blob3Animation = useRef(new Animated.Value(0)).current;
    const blob4Animation = useRef(new Animated.Value(0)).current;
    const blob5Animation = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        const animateBlob = (animatedValue: Animated.Value, initialDelay: number) => {
            // Kick off with a delay, then enter the loop
            Animated.sequence([
                Animated.delay(initialDelay),
                Animated.loop(
                    Animated.sequence([
                        Animated.timing(animatedValue, {
                            toValue: 1,
                            duration: 400,
                            useNativeDriver: true,
                        }),
                        Animated.timing(animatedValue, {
                            toValue: 0,
                            duration: 400,
                            useNativeDriver: true,
                        }),
                    ])
                ),
            ]).start();
        };

        animateBlob(blob1Animation, 0);
        animateBlob(blob2Animation, 150);
        animateBlob(blob3Animation, 300);
        animateBlob(blob4Animation, 450);
        animateBlob(blob5Animation, 600);
    }, []);


    const distanceUp = 25

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/logo.png')} />
            <View style={styles.blobContainer}>
                <Animated.View
                    style={[
                        styles.blob1, styles.blob,
                        {
                            transform: [
                                {
                                    scaleY: blob1Animation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0.8],
                                    }),
                                },
                                {
                                    translateY: blob1Animation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, distanceUp],
                                    }),
                                },

                            ],
                            backgroundColor: blob1Animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['rgb(255, 255, 255)', 'rgba(255, 255, 255, 0.5)'],
                            }),
                        },
                    ]}
                />
                <Animated.View
                    style={[
                        styles.blob2, styles.blob,
                        {
                            transform: [
                                {
                                    scaleY: blob2Animation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0.8],
                                    }),
                                },
                                {
                                    translateY: blob2Animation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, distanceUp],
                                    }),
                                },
                            ],
                            backgroundColor: blob2Animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['rgb(255, 255, 255)', 'rgba(255, 255, 255, 0.5)'],
                            }),
                        },
                    ]}
                />
                <Animated.View
                    style={[
                        styles.blob3, styles.blob,
                        {
                            transform: [
                                {
                                    scaleY: blob3Animation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0.8],
                                    }),
                                },
                                {
                                    translateY: blob3Animation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, distanceUp],
                                    }),
                                },
                            ], backgroundColor: blob3Animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['rgb(255, 255, 255)', 'rgba(255, 255, 255, 0.5)'],
                            }),
                        },
                    ]}
                />
                <Animated.View
                    style={[
                        styles.blob4, styles.blob,
                        {
                            transform: [
                                {
                                    scaleY: blob4Animation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0.8],
                                    }),
                                },
                                {
                                    translateY: blob4Animation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, distanceUp],
                                    }),
                                },
                            ], backgroundColor: blob4Animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['rgb(255, 255, 255)', 'rgba(255, 255, 255, 0.5)'],
                            }),
                        },
                    ]}
                />
                <Animated.View
                    style={[
                        styles.blob5, styles.blob,
                        {
                            transform: [
                                {
                                    scaleY: blob5Animation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0.8],
                                    }),
                                },
                                {
                                    translateY: blob5Animation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, distanceUp],
                                    }),
                                },
                            ], backgroundColor: blob5Animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['rgb(255, 255, 255)', 'rgba(255, 255, 255, 0.5)'],
                            }),
                        },
                    ]}
                />
            </View>
        </View>
    );
}
