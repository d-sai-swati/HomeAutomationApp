import React from 'react'
import { useForm } from 'react-hook-form';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import CustomTextInput from '../../components/TextInput/CustomTextInput';
import ButtonComponent from '../../components/Button/Button';
import { Hp } from '../../constants/theme';
import { validateEmail } from '../../components/Validations/Validations';
import CheckBox from '@react-native-community/checkbox';

const RegistrationScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <SafeAreaView className='flex-1 justify-center items-center bg-white'>
      {/* Logo */}
      <Image
        source={require('../../assets/images/nuos-logo.png')}
        className='w-32 h-32'
        resizeMode="contain"
      />

      {/* Sign In Text */}
      <Text className='text-textGreen mb-7' style={{ fontSize: Hp(2.5) }}>
        Sign Up
      </Text>

      {/* Email Input */}
      <CustomTextInput
        label="EMAIL"
        name="email"
        mainClassName='w-4/5 mb-6'
        control={control}
        placeholder="Email Id"
        keyboardType="email-address"
        rules={{ required: 'Email is required', validate: validateEmail }}
      />
      {/* Password Input */}
      <CustomTextInput
        label="PASSWORD"
        name="password"
        mainClassName='w-4/5 mb-4'
        control={control}
        placeholder="Password"
        keyboardType="default"
        rules={{ required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } }}
      />

      {/* ConfirmPassword Input */}
      <CustomTextInput
        label="CONFIRM PASSWORD"
        name="confirmpassword"
        mainClassName='w-4/5 mb-4'
        control={control}
        placeholder="Confirm Password"
        keyboardType="default"
        rules={{ required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } }}
      />

      {/* Forgot Password */}
      <TouchableOpacity className='w-[45%] mb-6' style={{ alignSelf: 'flex-end' }}>
        <Text className='text-textGreen font-intBold' style={{ fontSize: Hp(2) }}>Forgot Password?</Text>
      </TouchableOpacity>

      <View className='w-4/5 flex-row items-center mb-4'>
        <CheckBox
          value={termsAccepted}
          onValueChange={setTermsAccepted}
          boxType='square'
        />
        <Text className='text-black ml-2'>I accept the terms and conditions</Text>
      </View>
      {/* Submit Button */}
      <ButtonComponent
        title="Submit"
        filled={true}
        onPress={() => console.log('Submit button pressed')}
      />
    </SafeAreaView>
  )
}

export default RegistrationScreen
