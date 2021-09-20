import React,{useState} from 'react';
import { Image, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {styles} from '../css/style.js';
 
export default function LoginUserScreen({navigation}) {

    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('')
    const  onPressOk = () =>{
      console.log(UserName);
      console.log(Password);
      navigation.navigate('AfterLoginScreen')
    }


    return ( 
      <View style={styles.container} >
        <View style={styles.main}>
          <View style={styles.card}>
            <View style={styles.heading}>
            <Image
                style={styles.headimg}
                source={require('../assets/email.png')}
              /> 
               
              <Text style={styles.headh3} >
                Login Page
              </Text>
            </View>
             <View style={styles.inputIcon}>
             <TextInput 
                value={UserName}
                onChangeText={(e)=>setUserName(e)}
                placeholder="Enter Username"
                placeholderTextColor="#C4C4C4"
               style={styles.inputField}
               />
               <TextInput 
                value={Password}
                onChangeText={(e)=>setPassword(e)}
                placeholder="Enter Password"
                placeholderTextColor="#C4C4C4"
                secureTextEntry={true} //we just added this
               style={styles.inputField}
               />
              </View>
              <TouchableOpacity  onPress={onPressOk}>
              <Text  style={styles.mainButton}  >Ok</Text>
             </TouchableOpacity>
             
            
            
          </View>
        </View>
       </View>

    );
}
 
  