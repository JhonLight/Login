
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAccess {

  private const firebaseConfig = {
    apiKey: "AIzaSyBBhlBDMp_Wnj3yEAkkRNsNt4tcj9cu3Xo",
    authDomain: "login-989d9.firebaseapp.com",
    projectId: "login-989d9",
    storageBucket: "login-989d9.appspot.com",
    messagingSenderId: "932706151597",
    appId: "1:932706151597:web:2f903709acb6fc8ee9aa24",
    measurementId: "G-NYPK1BV8JY"
  };

  private app = initializeApp(this.firebaseConfig);

  public auth = getAuth();
