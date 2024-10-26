import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../../components/Header/Header'
import { CloudSnow, Drop, House, Star, Thermometer } from 'phosphor-react-native'
import { COLORS, Hp } from '../../../constants/theme'
import ButtonComponent from '../../../components/Button/Button'
import BoxComponent from '../../../components/Box/BoxComponent'
import DemoTab from './DemoTab'

const ControlScreen = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  return (
    <SafeAreaView className='bg-white'>
      <Header />

      {/* Weather Section starts here */}
      <View className='p-4 rounded-xl flex-row items-center justify-between '>
        <View className='flex-row items-center gap-3'>
          <CloudSnow size={40} color={COLORS.secondary} />
          <View>
            <Text className='text-slateGray900 font-bold mb-2' style={{ fontSize: Hp(2) }}>Bhiwandi</Text>
            <Text className='text-slateGray900' style={{ fontSize: Hp(1.5) }}>Clouds</Text>
          </View>
        </View>

        <View className=' flex-row gap-3'>
          <TouchableOpacity className='bg-white p-4 rounded-md' style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 10 }}>
            <Star size={20} color={COLORS.primary} />
          </TouchableOpacity>
          <TouchableOpacity className='bg-bgGreen p-4 rounded-md'>
            <House size={20} color='#ffffff' />
          </TouchableOpacity>
        </View>
      </View>
      <View className='flex-row items-center gap-5 px-4'>
        <View className='flex-row items-center'>
          <Thermometer size={20} color="#ff1d3a" weight="fill" />
          <Text className='text-slateGray900'>31°C</Text>
        </View>
        <View className='flex-row items-center'>
          <Drop size={20} color="#50B4D6" weight="fill" />
          <Text className='text-slateGray900'>31°C</Text>
        </View>
      </View>
      {/* Weather Section ends here */}

      {/* Tabs (Room selection) */}
      <ScrollView horizontal className='flex-row mx-4 mb-4'>
        <Text className='px-4 py-2'>Demo</Text>
        <Text className='px-4 py-2 text-green-600 border-b-2 border-green-600'>
          Cabin 1
        </Text>
        <Text className='px-4 py-2'>Cabin 2</Text>
        <Text className='px-4 py-2'>Cabin 3</Text>
        <Text className='px-4 py-2'>Passage Room</Text>
        <Text className='px-4 py-2'>Passage Room 2</Text>
        {/* Add other tabs */}
      </ScrollView>
      <DemoTab/>
      {/* <View className='p-4 mt-8 items-center'>
        <Text className='text-lg text-gray-600 mb-4'>
          Password Required to access this room
        </Text>
        <ButtonComponent title="Enter Password" />
      </View> */}
    </SafeAreaView>
  )
}

export default ControlScreen;