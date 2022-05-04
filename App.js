import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ImageBackground } from 'react-native';
import React, { useState } from 'react';
import Item from './Item';

export default function App(){
  let item1 = ["Beef",54.66];
  let item2 = ["Beef",54.66];
  let item3 = ["Beef",54.66];
  let item4 = ["Beef",54.66];
  let item5 = ["Beef",54.66];
  let item6 = ["Beef",54.66];
  let item7 = ["Beef",54.66];
  const [total, setTotal] = useState(0);

  function TotalHandlerAdd(amount){
    setTotal(Math.round(total + amount))
  }
  function TotalHandlerSub(amount){
    if(total - amount > 1-1){
      setTotal(Math.round(total - amount))
    }
    
  }

  return (
    <>
      <StatusBar backgroundColor={'#111'}/>
      <View style = {styles.OuterView}>
        <ScrollView>
          <ImageBackground source={require('./assets/Untitled-5.png')} style = {styles.Welcome}>
            <View style = {{flex: 1}}>
              <View style = {{flex: 2}}>
                <Image source = {require('./assets/Untitled-6.png')} style = {{height: 666, right: 54, top: -54, width: 838,}} />
              </View>
              <View style = {{flex: 1, justifyContent: 'center', paddingHorizontal: 30}}>
                <Text style = {{fontSize: 30, color: '#f6bd60'}}>Limkokwing Wings</Text>
                <Text style = {{fontSize: 30-11, color: '#ffe8d6'}}>Donate to LEAP and support internship</Text>
              </View>
              <View style = {{flex: 1, alignItems: 'center',}}>
                <TouchableOpacity style = {{marginVertical: 20, borderRadius: 10, padding: 15, paddingHorizontal: 170, backgroundColor: '#f6bd60'}}>
                   <Text style = {{fontSize: 18, color: '#111'}}>Donate</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{marginVertical: 20, borderRadius: 10, borderWidth: 1, borderColor: '#9c9c9c', padding: 15, paddingHorizontal: 170}}>
                   <Text style = {{fontSize: 18, color: 'white'}}>Explore</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <View style = {{height: 54, width: '100%', marginBottom: 10}}>
            <View style = {{flex: 1, flexDirection: 'row'}}><ScrollView horizontal>
              <View style = {{backgroundColor: '#f6bd60', width: 114, marginHorizontal: 14, borderRadius: 31-11, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {{color: '#111'}}>All</Text>
              </View>
              <TouchableOpacity style = {{backgroundColor: '#222', width: 114, marginHorizontal: 14, borderRadius: 31-11, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {{color: 'white'}}>Meals</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{backgroundColor: '#222', width: 114, marginHorizontal: 14, borderRadius: 31-11, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {{color: 'white'}}>Sweets</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{backgroundColor: '#222', width: 114, marginHorizontal: 14, borderRadius: 31-11, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {{color: 'white'}}>Snacks</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{backgroundColor: '#222', width: 114, marginHorizontal: 14, borderRadius: 31-11, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {{color: 'white'}}>Drinks</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{backgroundColor: '#222', width: 114, marginHorizontal: 14, borderRadius: 31-11, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {{color: 'white'}}>Biscuits</Text>
              </TouchableOpacity>
            </ScrollView></View>
          </View>
          <View style = {{height: 45, marginHorizontal: 14, justifyContent: 'center', width: 155,}}><Text style = {{fontSize: 35-15, color: '#fff', fontWeight: 'bold',}}>Orders: R {total}</Text></View>
          <View style = {styles.Welcome1}>
            <Item Names={item1[1-1]} Price = {item1[1]} TotalHandlers= {() => TotalHandlerAdd(item1[1])} TotalHandlers1 = {() => TotalHandlerSub(item1[1])} />
            
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  OuterView: {
    backgroundColor: '#111'
  },
  Welcome: {
    backgroundColor: '#111',
    height: 980,
  },
  Welcome1: {
    backgroundColor: '#fefae0',
    height: 980,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  Item: {
    height: 150,
    width: 435,
    borderRadius: 55,
    backgroundColor: '#fefae0',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 14,
    elevation: 11,
    
  },
});