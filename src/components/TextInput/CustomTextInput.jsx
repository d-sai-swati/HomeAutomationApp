// import React from 'react'
// import { Text, TextInput, View } from 'react-native'
// import { COLORS } from '../../constants/theme';

// const CustomTextInput = ({ label, placeholder, keyboardType }) => {
//     return (
//         <View className='w-4/5 mb-4'>
//             <Text style={{ color: COLORS.primary }}>{label}</Text>
//             <TextInput
//                 className='border border-gray-400 p-2 rounded-md'
//                 style={{ backgroundColor: 'white' }}
//                 placeholder={placeholder}
//                 keyboardType={keyboardType}
//             />
//         </View>
//     )
// }

// export default CustomTextInput;



import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Controller } from 'react-hook-form';
import { COLORS, Hp } from '../../constants/theme';

const CustomTextInput = ({
  label,
  name,
  control,
  placeholder,
  mainClassName,
  mainViewStyle,
  keyboardType = 'default',
  rules = {},
  defaultValue = ''
}) => {
  return (
    <View className={`${mainClassName}`} style={mainViewStyle}>
      <Text className="pb-2" style={{ fontSize:Hp(1.8), color: COLORS.primary }}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <>
            <TextInput
              className='border border-gray-400 px-5 py-3 rounded-md'
              style={{ fontSize:Hp(2), backgroundColor: 'white' }}
              placeholder={placeholder}
              keyboardType={keyboardType}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
          </>
        )}
      />
    </View>
  );
};

export default CustomTextInput;
