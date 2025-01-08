import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button,FlatList, StyleSheet,Image, TouchableOpacity, Dimensions , ScrollView} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
export default function cart() {
  type Data={
    image: string,
      title:string,
      name:string,
      crossprice:string,
      price:string
  };
  // let data: Interface[]=[
  //   {
  //     name:"name"
  //   }
  // ]
  const array=[
    {
      image:"https://shop.r10s.jp/wassup/cabinet/shoes/nike8/nike-554724-113-ws-a.jpg",
      title:"BEST SELLER",
      name:"NikeJordan",
      crossprice:"₹2,103.0",
      price:"₹700"
    },
    {
      image:"https://shop.r10s.jp/wassup/cabinet/shoes/nike8/nike-554724-113-ws-a.jpg",
      title:"BEST SELLER",
      name:"NikeJordan",
      crossprice:"₹2,103.0",
      price:"₹700"
    },
    {
      image:"https://shop.r10s.jp/wassup/cabinet/shoes/nike8/nike-554724-113-ws-a.jpg",
      title:"BEST SELLER",
      name:"NikeJordan",
      crossprice:"₹2,103.0",
      price:"₹700"
    },
    {
      image:"https://shop.r10s.jp/wassup/cabinet/shoes/nike8/nike-554724-113-ws-a.jpg",
      title:"BEST SELLER",
      name:"NikeJordan",
      crossprice:"₹2,103.0",
      price:"₹700"
    },
    {
      image:"https://shop.r10s.jp/wassup/cabinet/shoes/nike8/nike-554724-113-ws-a.jpg",
      title:"BEST SELLER",
      name:"NikeJordan",
      crossprice:"₹2,103.0",
      price:"₹700"
    },
    {
      image:"https://shop.r10s.jp/wassup/cabinet/shoes/nike8/nike-554724-113-ws-a.jpg",
      title:"BEST SELLER",
      name:"NikeJordan",
      crossprice:"₹2,103.0",
      price:"₹700"
    },
    {
      image:"https://shop.r10s.jp/wassup/cabinet/shoes/nike8/nike-554724-113-ws-a.jpg",
      title:"BEST SELLER",
      name:"NikeJordan",
      crossprice:"₹2,103.0",
      price:"₹700"
    }
  ]
  return(
    <View style={styles.container}>
      <Image source={{uri:"https://logodownload.org/wp-content/uploads/2014/04/amazon-logo.png"}} style={{height:30,width:100,borderRadius:1,}}/>
      <Text style={{fontSize:50,fontWeight:'bold'}}>Sasta Amazon</Text>
      <ScrollView>
      {array.map((array)=>{
        
        return(

      <View style={styles.product}>
      <View style={styles.imageBox}>
         <Image source={{ uri:array.image}} style={{flex:1,}} />
        </View>
        
        <View style={styles.textBox}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{array.title}</Text>
          <Text style={{fontWeight:'bold'}}>{array.name}</Text>
          <Text style={{color:'red',textDecorationLine:'line-through'}}>{array.crossprice}</Text>
          <Text style={{fontWeight:'400',fontSize:26}}>{array.price}</Text>
        
      </View>
        <View style={{height:60,width:60,backgroundColor:'black',position:"absolute",bottom:0,right:0,}}>
          <Image source={{uri :"https://th.bing.com/th/id/OIP.OSSxZRuWVaX65zNFtPznVwHaHa?rs=1&pid=ImgDetMain"}} style={{flex:1}}/>
        </View>
      </View>
        );
 
      })}
      </ScrollView>
    </View>
  );
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
  product:{
      height:400,
      margin:20,
      width:300,
      backgroundColor:'white',
      borderRadius:20,
      borderWidth:1,
      overflow:'hidden',
      shadowColor: "#000",
      shadowRadius:6,
  },
  imageBox:{
    height:280,
    width:'100%',
    // backgroundColor:'black',
    borderRadius:20,
    padding:20
    
  },
  textBox:{
    padding:10,
  }
})