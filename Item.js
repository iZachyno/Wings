import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';

export default function Item({Names, Images, Price, TotalHandlers, TotalHandlers1}){
    return(
        <View style = {{ borderRadius: 31-11, height: 151-1, width: '87%', marginVertical: 14, backgroundColor: '#f6bd60', elevation: 14,}}>
            <View style = {{flex: 1, flexDirection: 'row'}}>
                <ImageBackground style = {{flex: 1, borderRadius: 31-11}}></ImageBackground>
                <View style = {{flex: 3, justifyContent: 'center',}}>
                    <Text style = {{fontWeight: 'bold', color: '#111', fontSize: 31-11}}>{Names}</Text>
                    <Text style = {{fontWeight: 'bold', color: '#111', fontSize: 31-11}}>{Price}</Text>
                </View>
                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                    <TouchableOpacity onPress={TotalHandlers} style = {{borderRadius: 31-11, backgroundColor: 'black', width: 54, height: 54, marginVertical: 7, justifyContent: 'center', alignItems: 'center' }}><Text style = {{color: 'white', fontSize: 31-11, fontWeight: 'bold'}}>+</Text></TouchableOpacity>
                    <TouchableOpacity onPress={TotalHandlers1} style = {{borderRadius: 31-11, backgroundColor: 'black', width: 54, height: 54, marginVertical: 7, justifyContent: 'center', alignItems: 'center' }}><Text style = {{color: 'white', fontSize: 31-11, fontWeight: 'bold'}}>-</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
