import React, { Component } from 'react';
import *  as firebase from 'firebase';
import './App.css';
import './sreive/serive';
// import Progre from './comp/progre'
import Main from './comp/main'
import Button from './comp/modal'

class App extends Component {
  constructor(){
    super();
    this.state = {
      showProg:'',
      data:'',
      lenght:'',
      about:'',
      name:''
    }
    this.ref = firebase.database().ref();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.ref.child('/userpost/').on('value', snapshot => {
      const obj = snapshot.val();
    const data =[]
      for (let key in obj) {
        data.push(obj[key]);
      } 
      
      this.setState({ data: Object.keys(obj) , lenght : data});
    });
  };
  
  saveondatabase = (GET) => {
    var url = {url:GET,about:this.state.about,Name:this.state.name}
    firebase.database().ref().child('userpost/').push(url)
  }
  
  saveONStronge = (event) =>{
    var files = event.target.files[0];
    var data = firebase.storage().ref("mini-facebook/"+files.name)
    var tark = data.put(files)
    tark.on('state_changed', function(snapshot){
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    }, function(error) {
    }, function() {
    tark.snapshot.ref.getDownloadURL().then(function(downloadURL){
      // saveondatabase=() => {this.setState({showProg:downloadURL})}
      
      
      })}

 );}
//   git remote add origin https://github.com/fahadyahya14/New.git
// git push -u origin master



  savename = (e) => {
    this.setState({name:e.target.value})
  }

  
render() {
  return (
      <div className="App"> 
      <Button savename={this.savename} saveONStronge={this.saveONStronge}  />
      {this.state.lenght.length > 0 ?<Main click={this.state.data} loop={this.state.lenght} />
:null}
           </div>
    );
  }
}

export default App;
