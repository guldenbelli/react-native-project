import React, { Component, } from 'react';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity, Picker} from 'react-native';

import { TextInput } from 'react-native-paper';
import adverts from '../assets/adverts.json';

export default class Advert extends Component {
state = {
    text: ''
  };
  state = {
    number: ''
  };

state = {
  language: 'java',
};

  submit = () => {
    alert('Content successfully submitted to the Marketing Department.')
  }
  render() {
    //let Advert = adverts[0];
    let Advert = this.props.navigation.getParam("Advert")
    let pic = Advert.picture;
    let adText = Advert.advertText;
    let title = Advert.title;
    let id = Advert.id;
    let price = Advert.price;
    let details = Advert.details;
    let text = '';

    details.forEach(detail => {
      text += detail.price + ' ' + detail.subPrice + '\n' ;
    });

    details.forEach(detail => {
      text += detail.name + ' ' + detail.authorname + '\n' ;
    });

    details.forEach(detail => {
      text += detail.submission + ' ' + detail.subdate + '\n' ;
    });

    details.forEach(detail => {
      text += detail.issue + '\n' ;
    });

    return (
      <View style={styles.container}>
      <Text 
        style={styles.title}>
        {id} {title}
      </Text>
      <Image source={pic} style={styles.picture} />
      <Text 
        style={styles.adText}>
        {adText}
      </Text>
      <Text style={styles.title}>Advert details: </Text>
      <Text>{text}</Text>

  <Picker
  selectedValue={this.state.language}
  style={styles.picker}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
    <Picker.Item label="March" value="March" />
    <Picker.Item label="April" value="April" />
    <Picker.Item label="May" value="May" />
    <Picker.Item label="June" value="June" />
    <Picker.Item label="July" value="July" />
    <Picker.Item label="August" value="August" />
  </Picker>
      <Text style = {styles.page}>Page number:</Text>
      <TextInput
        style = {styles.pageinput}
        label=''
        value={this.state.number}
        onChangeText={number => this.setState({ number })}
      />
      <Text style={styles.additionalDetails}>Additional details:</Text>
      <TextInput
        style = {styles.submitinput}
        label=''
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
      />
      <TouchableOpacity
          style = {styles.submitButton}
          onPress = {this.submit}>
          <Text style = {styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#F0F8FF',
    marginTop: 30, 
    justifyContent: 'center',
    alignItems: 'center'
},
  title: { 
    fontSize: 20, 
    paddingTop: 20,
    paddingBottom: 20 
},
  picture: { 
    width: 300, 
    height: 200
},
adText: {  
    margin: 10,
    fontSize: 14, 
},
  page: {  
    paddingTop: 6,
    paddingBottom: 20,
    
},
pageinput: {  
    width: 80,
    height: 60,
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 'thin'
},
  additionalDetails: {  
    paddingTop: 6,
    paddingBottom: 20,
},
  picker: { 
    width: 170, 
    height: 30,
    marginTop: 10,
},
    submitinput:{
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 'thin'
},
  submitButton: {
    backgroundColor: '#87CEFA',
    padding: 10,
    marginTop: 20,
    height: 40,
},
  submitButtonText:{
    color: 'black'
}
});
