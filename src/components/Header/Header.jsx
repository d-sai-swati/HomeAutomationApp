import React from 'react'
import { Image, Text, View } from 'react-native'
import { Hp } from '../../constants/theme'

const Header = () => {
    return (
        <View className='flex-row justify-between items-center p-4 bg-white' 
        style={{
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 10,
        }}>
            <Text className='text-textGreen font-semibold' style={{ fontSize: Hp(2.2) }}>Home</Text>
            <Image
                source={require('../../assets/images/Header-logo.png')}
                className='w-20 h-10'
                resizeMode="contain"
            />
            <Text className="text-[#66CAFE]">A2Z_Gateway</Text>
        </View>
    )
}

export default Header
