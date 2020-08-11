import React, { useContext, useState } from 'react'
import { StyleSheet } from 'react-native'
import { TextInput, Title, Button } from 'react-native-paper'
import { Text, View } from 'react-native'
import { AuthNavProps } from '../ParamLists/AuthParamList'
import { AuthContext } from '../AuthProvider'
import { m } from '../magic'

export const Login = ({ navigation, route }: AuthNavProps<'Login'>) => {
  const [email, setEmail] = useState('')
  const { login } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Title style={styles.header}>Enter your email to login!</Title>
      <TextInput style={styles.input} label="email" mode="outlined" value={email} onChangeText={e => setEmail(e)} />
      <Button
        style={styles.loginButton}
        mode="outlined"
        onPress={async () => await m.auth.loginWithMagicLink({ email })}
      >
        Login
      </Button>
      <Text>{email}</Text>
      <Button
        style={styles.registerButton}
        mode="outlined"
        onPress={() => {
          navigation.navigate('Register')
        }}
      >
        {' '}
        go to register
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
  },
  header: {
    alignContent: 'center',
    padding: '15%',
    fontSize: 25,
  },
  loginButton: {
    margin: '10%',
  },
  registerButton: {
    marginTop: '40%',
  },
  input: {
    margin: '5%',
  },
})
