import React, { useState, useEffect, useRef } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import YouTubePlayer from 'react-native-youtube-iframe';

const LazyPlayer = ({ videoId }) => {
    const [isVisible, setIsVisible] = useState(false);
    const playerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!playerRef.current) return;

            const { y, height } = playerRef.current.measureLayout();
            const screenHeight = Dimensions.get('window').height;

            // Check if the player is within the viewport
            setIsVisible(y < screenHeight && y + height > 0);
        };

        // Attach scroll event listener
        ScrollView.addEventListener('scroll', handleScroll);

        // Check initial visibility
        handleScroll();

        // Cleanup function
        return () => {
            // Remove scroll event listener
            ScrollView.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <View ref={playerRef}>
            {isVisible && (
                <YouTubePlayer
                    width={400}
                    height={400}
                    play={false}
                    videoId={videoId}
                />
            )}
        </View>
    );
};

export default LazyPlayer;
