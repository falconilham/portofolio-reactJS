import React, { Component } from 'react';
import '../style/App.css';
//import ReactDOM from 'react-dom';
//import Loading from 'react-fullscreen-loading';
//import { Provider } from 'react-redux';
import  Header  from './Header'

export default class Home extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      color: 'transparent',
      person:{
        nama_awal: "Mohamad",
        nama_tengah: "Ilham",
        nama_akhir: "Heryanto"
      }
    }
  }

    getData = () => {
      let data = fetch('https://api.instagram.com/v1/users/self/?access_token=402397956.6d664f5.9afeff317ee54b779639caeb5a070f76').then((resp) => {
        resp.json().then((res) => {
          console.log(res);
        })
      })
    }

  render(){
    const name = this.state.person
    return(
      <div className="container">
        <Header style={{color: this.state.color}}/>
          <div className="body">
            <div>
            <p>Hello!</p> 
            <p>Experienced As An IT Since 2013 - 2018</p>
            <p>I grew up playing on a computer back when it wasn’t the norm. My dad was a computer hobbyist, so I played games using command lines and got introduced to the Internet and email back when they charged you by the minute. Yep, it was a long time ago. However, like many Tennager, I went through different phases and it wasn’t till I got to high school that I decided to explore IT as a career path. It all started with a “Technology” elective class, which my dad had encouraged me to sign up for. So, I walked into my first-period class, on my first semester of high school and realized that I was one of only few Student who are really interested into IT Things in a High School of 300+. Lucky for me, two things happened: I quickly realized there was a lot of fun stuff that fell into the technology category and I was quite excited to learn more. Also, it gave me and the other few Student an immediate common ground to build on; it never hurts to have a friend to share your experiences and trepidation with. As the days went on By the end of high school, I had taken all the Networking courses offered and decided to major in Computer Information Systems in college. Those decisions led to a wonderful career in IT that I love.</p>
            </div>
            <div>
            <img src="https://www.instagram.com/p/BEpb6MuLjbL/" alt={name.nama_awal+ " "+name.nama_tengah+" "+name.nama_akhir} />
            </div>
          </div>
      </div>
    )
  }
}
