import { ArrowLeft, Cloud, CloudSlash, GlobeHemisphereEast, Plus } from 'phosphor-react-native'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, Hp } from '../../../constants/theme'
import { Edit } from 'iconsax-react-native'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    navigate = useNavigation();
    const handleGateway = () => {
        console.log('gateway')
        navigate.navigate('controls')
    }
    return (
        <SafeAreaView>
            <View className='flex-row justify-between items-center p-4 pt-10 bg-white'
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
                <ArrowLeft size={24} color="#7e7e7e" />
                <Text className='text-slateGray900 font-semibold' style={{ fontSize: Hp(2.5) }}>Gateway</Text>
                <Plus size={24} color="#7e7e7e" />
            </View>
            <View className='pt-10'>
                <TouchableOpacity className='bg-slateGray300 p-6 rounded-md flex-row items-center justify-between m-10' style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 10 }} onPress={handleGateway}>
                    <View className='flex-row gap-3 items-center'>
                        <GlobeHemisphereEast size={32} color="#7e7e7e" weight="fill" />
                        <Cloud size={32} color="#7e7e7e" />
                    </View>
                    <Text style={{ fontSize: Hp(2) }}>A2Z_Gateway</Text>
                    <View className="bg-bgBlue rounded-full p-2">
                        <Edit size="20" color="white" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity className='bg-slateGray300 p-6 rounded-md flex-row items-center justify-between mx-10' style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 10 }}>
                    <View className='flex-row gap-3 items-center'>
                        <CloudSlash size={32} color="#7e7e7e" />
                    </View>
                    <Text style={{ fontSize: Hp(2) }}>Mercury</Text>
                    <View className="bg-bgBlue rounded-full p-2">
                        <Edit size="20" color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen
// create a swiper in first image demo, cabin 1 , cabin 2 , passanger room , are tabs user when first login enter password screen should show like given in second screen then after entering password show design shown in 3 image and swiper should slide when sliding with hand aslo slide when clicked on tabs