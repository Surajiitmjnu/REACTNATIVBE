import React, { useState } from "react";

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const hand=(t)=>{
    console.log(t+"this is press")
}

const Todo =()=>{

const [board ,setBoard]=useState(Array(9).fill(0))
const[vals,setvals]=useState(true)

    return <>

    
    <Text>this is d</Text>

   
  
    
  {board.map((item,index)=>(
    <TouchableOpacity  
    key={index}
    style={{width:100,
height:100,
borderColor:"red",
 borderWidth:2
    }}
    onPress={()=>hand(index)}
    >
<Text>suraj kumar</Text>
   
    </TouchableOpacity>
  ))}
    

      {/* {board.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
                width:100,
                height:100,
                borderColor:"red",
                borderWidth:2
            }}
            onPress={() => hand(index)}
          >
            <Text >suraj kumar</Text>
          </TouchableOpacity>
        ))}
       */}

   
    
    
    
    </>
}

export default Todo;