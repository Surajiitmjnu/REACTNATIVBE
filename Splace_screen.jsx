
import React from 'react'
import {Image,View,Text} from 'react-native'


import { useEffect } from 'react';
const Splace=({navigation})=>{

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // replace = back button disable
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

    return <>
    <View style={{

flex:1,justifyContent:'center',alignItems:'center'

    }}  >
       
  <Image
      source={require(`@/assets/images/suraj.png`)}
      style={{
        width:250,height:250,borderRadius:100
      }}
     />

      <Text style={{
        marginTop:30,
        fontSize:50,
        color:"pink",
         fontWeight: 'bold',
      }}>suraj kumar</Text>

    </View>
    </>


}

export default Splace;