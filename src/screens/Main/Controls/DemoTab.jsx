import { DotsThree, Lock, Minus, Plus, Power, Star } from 'phosphor-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, Hp } from '../../../constants/theme';

const DemoTab = () => {
  const boxes = [
    {
      id: 1,
      icon: <Text className="text-textGreen font-semibold text-lg">1 out of 1</Text>,
      label: 'ACTIVE DEVICES',
      labelColor: 'text-textGreen',
      bgColor: 'bg-white w-36',
      shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
      },
    },
    {
      id: 2,
      icon: <Lock size={26} color={COLORS.primary} />,
      label: 'SECURITY',
      labelColor: 'text-textBlue',
      bgColor: 'bg-white',
      shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
      },
    },
    {
      id: 3,
      icon: <Power size={26} color='#ffffff' />,
      label: 'POWER',
      labelColor: 'text-textGreen',
      bgColor: 'bg-bgGreen',
    },
    {
      id: 4,
      icon: <Star size={26} color='#ffffff' />,
      label: 'SCENE',
      labelColor: 'text-textBlue',
      bgColor: 'bg-bgBlue',
    },
  ];
  const scenes = [
    { id: 1, label: ' All On' },
    { id: 2, label: ' All Off' },
    { id: 3, label: ' Chandelier And Ac' },
    { id: 4, label: ' Entertainment' }
  ]

  return (
    <ScrollView className="bg-slateGray100 pb-10 pt-5">
      <View className="flex-row gap-3 justify-center">
        {boxes.map((box) => (
          <View key={box.id} className="items-center">
            <TouchableOpacity className={`${box.bgColor} p-5 rounded-md my-2 h-16 flex items-center justify-center`} style={box.shadow}>
              {box.icon}
            </TouchableOpacity>
            <Text className={`${box.labelColor} text-xs mt-2 text-center`}>{box.label}</Text>
          </View>
        ))}
      </View>
      <View className="my-6">
        <Text className="text-black px-4" style={{ fontSize: Hp(2) }}>Scenes (4)</Text>
        <ScrollView horizontal className="px-4 mt-5">
          {scenes.map((scene) => (
            <View key={scene.id} className={`bg-white px-3 py-5 rounded-md m-1 flex items-center justify-center`} style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4, elevation: 2
            }}>
              <Text style={{ fontSize: Hp(2) }}>{scene.label}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View>
        <Text className="text-black px-4" style={{ fontSize: Hp(2) }}>IR Blaster Sensor</Text>
        <View className={`bg-white px-3 py-5 rounded-md m-1 flex items-center justify-center`} style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4, elevation: 4
        }}>
          <View className="flex-row items-center gap-3">
            <View className="border border-slateGray900 rounded-full w-10 h-10 flex items-center justify-center">
              <Minus size={24} color={COLORS.slateGray900} weight="bold" />
            </View>
            <View>
              <Text>24°  C</Text>
              <Text>Temperature</Text>
            </View>
            <View className="border border-slateGray900 rounded-full w-10 h-10 flex items-center justify-center">
              <Plus size={24} color={COLORS.slateGray900} weight="bold" />
            </View>
          </View>
          <View className="flex-row items-center gap-3">
            <View className="border border-slateGray900 rounded-full w-10 h-10 flex items-center justify-center">
              <Minus size={24} color={COLORS.slateGray900} weight="bold" />
            </View>
            <View className="border border-slateGray900 rounded-full w-10 h-10 flex items-center justify-center">
              <Plus size={24} color={COLORS.slateGray900} weight="bold" />
            </View>
            <View className="border border-slateGray900 rounded-full w-10 h-10 flex items-center justify-center">
              <DotsThree size={24} color={COLORS.slateGray900} weight="bold" />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DemoTab;
