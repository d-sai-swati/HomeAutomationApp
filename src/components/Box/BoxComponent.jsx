import React from 'react';
import { TouchableOpacity } from 'react-native';

const BoxComponent = ({
    Icon,
    text,
    iconColor,
    iconSize,
    mainClassName,
    textClassName
}) => {
    return (
        <TouchableOpacity className={`${mainClassName}`} style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 10 }}>
            {/* <Icon size={iconSize} color={iconColor} /> */}
            {Icon && <Icon size={iconSize} color={iconColor} style={{ marginRight: text ? 8 : 0 }} />}
            {text && <Text className={`${textClassName}`} style={[{ color: textColor, fontSize: 16 }, textStyle]}>{text}</Text>}
        </TouchableOpacity>
    );
};

export default BoxComponent;
