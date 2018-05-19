import React from 'react';
import { StyleSheet,
 Text, 
 Button,
 TouchableOpacity,
 View, 
 ImageBackground,
 StatusBar,
 Image,
 TextInput,
 ScrollView,
 Alert, ActivityIndicator
} from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
const home = require('./img/home.png');
const custemer = require('./img/jadwal.png');
const tambah = require('./img/add.png');
class TambahScreen extends React.Component {
	static navigationOptions = {
    header: null
 };
	
	constructor()
    {
        super();
        this.state = {
          kegiatan: '',
          tempat: '',
          hari: '',
          tanggal: '',
          waktu: '',
          ActivityIndicator_Loading: false,
        }
    }
    submitData = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('https://aguswiranto077.000webhostapp.com/sentData.php',
            {
                method: 'POST',
                headers:
                {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  kegiatan : this.state.kegiatan,
                  tempat : this.state.tempat,
                  hari : this.state.hari,
                  tanggal : this.state.tanggal,
                  waktu : this.state.waktu,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                Alert.alert('SUCESS', responseJsonFromServer);
                this.setState(
                {
                  kegiatan: '',
                  tempat: '',
                  hari: '',
                  tanggal: '',
                  waktu: '',
                  ActivityIndicator_Loading : false
                });

            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }


	render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator color='#FFFFFF' size='large'/>
        </View>
      );
    }

		return(
			<ImageBackground
      		source={require('./img/ed.jpg')}
      		style={styles.container}>
      			<View style={styles.containerMain}>
        			<StatusBar
          			backgroundColor="#AD1457"
          			barStyle="light-content"
        			/>
        			<Text style={styles.title}>JADWALKEGIATAN</Text>
       				<Text style={styles.subTitle}>TAMBAH KEGIATAN</Text>
              <View style={{ backgroundColor: 'rgba(255,255,255, .4)', marginTop: 15 }}>
              <ScrollView>
       				 <Text style={styles.judul} >Nama Kegiatan :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Nama Kegiatan"
                  onChangeText = {(TextInputText) => this.setState({ kegiatan: TextInputText })}
                  value={this.state.kegiatan}
              />
              <Text style={styles.judul} >Tempat/Lokasi :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Tempat"
                  onChangeText = {(TextInputText) => this.setState({ tempat: TextInputText })}
                  value={this.state.tempat}
              />
              <Text style={styles.judul} >Hari :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Hari"
                  onChangeText = {(TextInputText) => this.setState({ hari: TextInputText })}
                  value={this.state.hari}
              />
              <Text style={styles.judul} >Tgl/Bln/Thn :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Tanggal/Bulan/Tahun"
                  onChangeText = {(TextInputText) => this.setState({ tanggal: TextInputText })}
                  value={this.state.tanggal}
              />
              <Text style={styles.judul} >Jam/Waktu :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Jam/Waktu"
                  onChangeText = {(TextInputText) => this.setState({ waktu: TextInputText })}
                  value={this.state.waktu}
              />
              </ScrollView>
              </View>
              <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.button}
                  onPress={this.submitData}>
                <Text style={{ fontSize: 20, color: '#fff',fontWeight: 'bold' }}>SIMPAN</Text>
              </TouchableOpacity>
              </View>

        		</View>
        		<View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={home} style={styles.menuIcon} />
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('CustemerScreen')}>
          <Image source={custemer} style={styles.menuIcon} />
            
          </TouchableOpacity>

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
    backgroundColor: '#BDBDBD',
    paddingVertical: 12,
    flexDirection: 'row',
    flex: 0.07,

  },
  menu:{
  	justifyContent: 'center',
  	alignItems: 'center',
    flex: 1 
  },
  menuIcon:{
    tintColor: '#000',
    height: 40,
    width: 40,
  },
  menuIconSelected:{
    color: '#00BCD4',
    textAlign: 'center'
  },
  isian: {
    //backgroundColor: 'rgba(255,255,255, .6)',
    width: '100%',
    padding: 10,
    fontSize: 15,
    color: '#000'
  },
  judul: {
    padding: 1, 
    fontSize: 20, 
    color: '#000', 
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button: {
    height: 35,
    width: 150,
    backgroundColor: '#01579b',
    alignItems: 'center',
    borderRadius: 12,
    margin: 10, 
    justifyContent: 'center',
  }
});

export default TambahScreen;
