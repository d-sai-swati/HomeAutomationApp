import { View, Text } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { Info } from 'phosphor-react-native'
import { COLORS, Hp } from '../../constants/theme'
import Snackbar from 'react-native-snackbar'

export default function TextError({ title }) {
    return (
        <Animatable.View className="flex-row items-center gap-2">
            <Info size={Hp(2)} color={COLORS.red} weight="fill" />
            <Text type="error" className="text-red-500   font-intSemi" style={{ fontSize: Hp(1.6) }}>
                {title}
            </Text>
        </Animatable.View>
    )
}


export const showSnackbar = (message, backgroundColor) => {
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        fontFamily: "Inter-SemiBold",
        textColor: "#fff",
        backgroundColor: backgroundColor
    });
};