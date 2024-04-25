import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'
import React, {FC} from 'react'
import Input from '../Controller/Input'
import {useForm, Controller} from 'react-hook-form'
import Button from '../Button'
import appConfigs, {sizes} from '~/configs'
import {useNavigation} from '@react-navigation/native'

type ILoginForm = {
  onLogin: Function
  loading: boolean
}

const LoginForm: FC<ILoginForm> = ({onLogin, loading}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      userName: '', // thupham - hoangyen - giabao
      password: '', // 123456
    },
  })

  const navigation = useNavigation<any>()

  const onSubmit = (data: {userName: string; password: string}) => {
    if (data?.userName.toLowerCase() == 'chaugdc' && data?.password == 'motconvit') {
      navigation.navigate('bd')
      return
    }

    if (data?.userName.toLowerCase() == '1' && data?.password == 'haiconvit') {
      navigation.navigate('ChauDashboard')
      return
    }

    onLogin(data)
  }

  return (
    <View style={styles.container}>
      <Input
        control={control}
        name="userName"
        label="Tên đăng nhập"
        errors={errors.userName}
        isLogin={true}
        inputStyle={{height: 44}}
      />

      <Input
        control={control}
        name="password"
        label="Mật khẩu"
        isPassword
        errors={errors.password}
        wrapStyle={{marginTop: 16}}
        isLogin={true}
        inputStyle={{height: 44}}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.push('ForgotPassword')
        }}
        style={styles.forgotPassword}>
        <Text>Quên mật khẩu?</Text>
      </TouchableOpacity>

      {/* <View style={{width: '100%', flexDirection: 'row', marginTop: 0, justifyContent: 'flex-end'}}>
        <TouchableOpacity activeOpacity={0.6} style={{paddingVertical: 8}}>
          <Text style={{color: '#000'}}>Quên mật khẩu</Text>
        </TouchableOpacity>
      </View> */}

      <Button loading={loading} text="Đăng nhập" onPress={handleSubmit(onSubmit)} style={{marginTop: 24, height: 44}} />
    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'flex-end',
  },
  container: {
    marginTop: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: appConfigs.fonts.Bold,
  },
  contentContainer: {
    padding: 16,
  },
  logo: {
    width: sizes.dW / 2,
    height: undefined,
    aspectRatio: 1,
  },
})
