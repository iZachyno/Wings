import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ImageBackground } from 'react-native';

const Home = () => {
  return (
    <>
      <StatusBar backgroundColor={'#111'}/>
      <View style = {styles.OuterView}>
        <ScrollView>
          <ImageBackground source={require('../assets/Untitled-5.png')} style = {styles.Welcome}>
            <View style = {{flex: 1}}>
              <View style = {{flex: 2}}>
                <Image source = {require('../assets/Untitled-6.png')} style = {{height: 666, right: 54, top: -54, width: 838,}} />
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
            <View style = {{flex: 1, flexDirection: 'row'}}><ScrollView showsHorizontalScrollIndicator horizontal>
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
          <View style = {{height: 45, marginHorizontal: 14, justifyContent: 'center', width: 155,}}><Text style = {{fontSize: 35-15, color: '#fff', fontWeight: 'bold',}}>Orders:</Text></View>
          <View style = {styles.Welcome1}>
            <View style = {styles.Item}>
              <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{flex: 1,}}>
                  <Image source={require('../assets/Plate.png')} style = {{height: 155, width: 155}} />
                </View>
                <View style = {{flex: 3-1.5, justifyContent: 'center',}}>
                  <Text style = {{fontSize: 31-11}}>Hello</Text>
                  <Text>Hello</Text>
                </View>
                <View style = {{flex: .5,}}>
                  <View style = {{flex: 1, }}></View>
                  <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {{fontWeight: 'bold', color: '#111'}}>R 7.99</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style = {styles.Item}>
              <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{flex: 1,}}>
                  <Image source={require('../assets/Plate.png')} style = {{height: 155, width: 155}} />
                </View>
                <View style = {{flex: 3-1.5, justifyContent: 'center',}}>
                  <Text style = {{fontSize: 31-11}}>Hello</Text>
                  <Text>Hello</Text>
                </View>
                <View style = {{flex: .5,}}>
                  <View style = {{flex: 1, }}></View>
                  <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {{fontWeight: 'bold', color: '#111'}}>R 4.56</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style = {styles.Item}>
              <View style = {{flex: 1, flexDirection: 'row'}}>
                <View style = {{flex: 1,}}>
                  <Image source={require('../assets/Plate.png')} style = {{height: 155, width: 155}} />
                </View>
                <View style = {{flex: 3-1.5, justifyContent: 'center',}}>
                  <Text style = {{fontSize: 31-11}}>Hello</Text>
                  <Text>Hello</Text>
                </View>
                <View style = {{flex: .5,}}>
                  <View style = {{flex: 1, }}></View>
                  <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {{fontWeight: 'bold', color: '#111'}}>R 55.99</Text>
                  </View>
                </View>
              </View>
            </View>
            
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  OuterView: {
    backgroundColor: 'black'
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
export default Home;