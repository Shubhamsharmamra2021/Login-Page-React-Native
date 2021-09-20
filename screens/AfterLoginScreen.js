import React,{useState} from 'react';
import { Image, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {styles} from '../css/style.js';
 
export default function AterLoginScreen({navigation}) {
 
    return ( 
      <View style={styles.container} >
        <View style={styles.main}>
          <View style={styles.card}>
            <View style={styles.heading}>
             
              <Text style={styles.headh3} >
                You are Login 
              </Text>
            </View>
          </View>
        </View>
       </View>

    );
}
 
  