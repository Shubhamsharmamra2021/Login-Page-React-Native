import React from 'react';
import {  Text, View } from 'react-native';


export default function FooterPolicy({navigation}) {
    
    return (
        <View style={{   
                         bottom: 40 ,
                         marginLeft:50,
                        marginRight:50

                    }}>
              <Text style={{color:"#C4C4C4",textAlign:"center",  }}>  
                By entering your number you're agreeing to our 
                Term of Service and Privacy Policy Thanks
              </Text>
            </View>
     );
}
 
  