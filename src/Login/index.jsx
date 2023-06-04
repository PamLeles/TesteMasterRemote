import React from 'react';
import {View, Text, Image, TextInput, Button} from 'react-native';
import Home from '../Home';

function Login({navigation}) {
  return (
    <>
      <View>
        <Image
          source={require('../../assets/image/Logo-fullColor.webp')}
          style={{width: 300, height: 100, resizeMode: 'contain'}}
        />
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          height: 150,
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'black',
            borderBottomWidth: 1,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Login:
          </Text>
          <TextInput
            style={{
              width: 250,
            }}>
            {' '}
          </TextInput>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'black',
            borderBottomWidth: 1,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Senha:
          </Text>
          <TextInput
            style={{
              width: 250,
            }}>
            {' '}
          </TextInput>
        </View>
        <View style={{width: 100, paddingTop: 20}}>
          <Button
            onPress={() => navigation.navigate('Homepage', {names: {Home}})}
            title="Entrar"
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 250,
          alignItems: 'center',
          paddingTop: 20,
          fontSize: 16,
        }}>
        <View>
          <Text style={{fontSize: 15}}>Salvar Informações</Text>
        </View>
        <View>
          <Text style={{borderBottomWidth: 1, fontSize: 15}}>Criar Conta</Text>
        </View>
      </View>
    </>
  );
}

export default Login;
