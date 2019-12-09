import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import superagent from 'superagent';
import Request from 'superagent';





async function testAPI() {
    // const result = await superagent.get('https://csc443-project-main-api.herokuapp.com/material').send({
    //   API_KEY: 'key',
    //   query: " { getMateials {id name type quantity }}"
    // }).catch(err => console.error(err));
    var key = 'key'
    Request.get('https://csc443-project-main-api.herokuapp.com/material')
    .then(res => {
      res.accepted = true;
       res.text = key;
      // console.log(res)
    })
    .catch(err => {
      console.error(err)
    });

    try {
      const res = await Request
        .get('https://csc443-project-main-api.herokuapp.com/material').query(" { getMateials {id name type quantity }}");
      // res.body, res.headers, res.status
      console.log(res)
    } catch(err) {
      // err.message, err.response
    }

  }


  var apiKey = process.env.REACT_APP_API_KEY;

  async function superagentTest() {
    const result = await superagent.get('http://localhost:3000/material').send({
      key: apiKey,
      query: " { getMaterials {id name type }}"
    })
    console.log(result)
  }
  superagentTest()

  // axios
  //   .get('http://localhost:3000/material')
  //   .then(function(response) {
  //     response.data = apiKey
  //       console.log(response)
  //   }).catch(function(err) {
  //       console.error(err)
  //   })

ReactDOM.render(

        <App />


, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
