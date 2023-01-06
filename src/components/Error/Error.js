import React from "react";
import Lottie from 'lottie-react-native';

function Loading () {
    return (
        <Lottie source={require('../../asstes/error.json')} autoPlay />
    );
};

export default Loading;