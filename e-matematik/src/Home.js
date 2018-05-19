import React from 'react';
import { StyleSheet,
 Text, 
 Button,
 TouchableOpacity,
 View, 
 ImageBackground,
 StatusBar,
 Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
const tambah = require('./img/gas.png');

class HomeScreen extends React.Component {
	static navigationOptions = {
    header: null
 };
	render() {
		return (
			<ImageBackground
          source={require('./img/ed.jpg')}
          style={styles.container}>
            <View style={styles.containerMain}>
            
              <View style={styles.box1}>
          <Text style={styles.text}></Text>
        </View>
        <View style={styles.box4}>
         <Image source={require('./img/txt.png')} />
        </View>
            </View>
            
            <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('TambahScreen')}>
            <Image source={tambah} style={styles.menuIcon} />
          </TouchableOpacity>

        </View>
          </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  containerMain: {
    flex: 1,
  },
   box1: {
    backgroundColor: '#00838F',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 400,
    height: 100,
  },
  box4:{
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 200,
  },
  title: {
    
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
    paddingBottom: 5,
    textAlign: 'center',
    backgroundColor: '616161'
  },
  subTitle: {
    backgroundColor: '616161',
    color: '#000',
    fontSize: 14,
    paddingBottom: 12,
    textAlign: 'center',
  },
  menuContainer: {
    backgroundColor: '#BDBDBD)',
    paddingVertical: 50,
    flexDirection: 'row',
    flex: 1,

  },
  menu:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1 
  },
  menuIcon:{
    height: 50,
    width: 180,
  },
  menuIconSelected:{
    color: '#00BCD4',
    textAlign: 'center'
  },
  text: {
    fontSize: 25
  },
});

export default HomeScreen;
