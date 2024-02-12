import React, {Component} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, } from "react-native";
import firestore from '@react-native-firebase/firestore'

class App extends Component {

  state={
    textPerintah: '',
  };

  _handleKirimPerintah(value) {
    firestore()
    .collection('iot')
    .doc('perintah')
    .set({
      lampu: value
    })
    .then(() => {
      Alert.alert('Send data cloud firestore success.');
    })
    .catch(error => console.error(error));
  }

  // _onPressButton() {
  //   Alert.alert('send data success. ')
  // }

  render() {
    return (
      <View style={styles.container}>
      <Text
        style={{
          color : 'black',
          fontSize : 30,
          fontWeight : 'bold',
          marginBottom : 50,
        }}>
        Kirim perintah 
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan teks perintah disini..."
        onChangeText={(value) => this.setState({textPerintah: value})}
        value={this.state.textPerintah}
        />
      <TouchableOpacity
        style={styles.button}
        onPress={() => this._handleKirimPerintah(this.state.textPerintah)}>
        <Text style={styles.text}>Kirim</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 20,
    color: '#000',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#00FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  textButon: {
    color: 'white',
    fontSize: 20,
  },
});

export default App;