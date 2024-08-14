/**
 * Copyright 2023 Prof. Ms. Ricardo Leme All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 'use strict' //modo estrito

/********************************************** 
* Renomeie este arquivo para firebase.js!
***********************************************/

// Cole as informações do seu RealTime Database do Firebase abaixo:
const firebaseConfig = {
  apiKey: "AIzaSyC0iM2c3piOlkl5yKkQBbm5HwqLa2atbBM",
  authDomain: "taskmanager-f44f3.firebaseapp.com",
  projectId: "taskmanager-f44f3",
  storageBucket: "taskmanager-f44f3.appspot.com",
  messagingSenderId: "780082236029",
  appId: "1:780082236029:web:031dad33bd31b277d0bf14",
  measurementId: "G-N10PXS5Q2F"
};


/*
* Nas regras do Realtime Database, informe:
* {
  "rules": {
    "clientes":{
    ".read": "auth != null",
    ".write": "auth != null"
  },
    "usuarios":{
    ".read": "auth != null",
    ".write": "auth != null"
  }
 }
}
*/

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);
// Crie uma referência para o Realtime Database do Firebase
const database = firebase.database();
// Crie uma referência para o armazenamento do Firebase
const storageRef = firebase.storage().ref();
