import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Animated, SafeAreaView } from 'react-native';
import CustomTextInput from '../../components/TextInput/CustomTextInput';
import { useForm } from 'react-hook-form';
import { PhoneCall } from 'phosphor-react-native';
import { COLORS, Hp } from '../../constants/theme';
import { validateEmail } from '../../components/Validations/Validations';
import ButtonComponent from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  navigate = useNavigation();

  const onSubmit = () => {
    console.log("submitted");
    navigate.navigate('home')
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
        Sign In
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
        placeholder="Enter your password"
        keyboardType="default"
        rules={{ required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } }}
      />

      {/* Forgot Password */}
      <TouchableOpacity className='w-[45%] mb-6' style={{ alignSelf: 'flex-end' }}>
        <Text className='text-textGreen font-intBold' style={{ fontSize: Hp(2) }}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Submit Button */}
      <ButtonComponent
        title="Submit"
        filled={true}
        Width="w-4/5"
        onPress={onSubmit}
      />
      {/* New User Sign Up */}
      <ButtonComponent
        title="New User? Sign up"
        filled={false}
        Width="w-4/5"
        // onPress={() => navigate.navigate('registration')}
      />

      {/* Guest Login */}
      <ButtonComponent
        title=" Guest Login"
        filled={false}
        Width="w-4/5"
        onPress={() => console.log('Submit button pressed')}
      />

      {/* Terms and Privacy */}
      <View className='flex-row justify-between w-4/5 mt-5'>
        <TouchableOpacity>
          <Text className='text-textGreen underline'>Terms of Use</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className='text-textGreen underline'>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
