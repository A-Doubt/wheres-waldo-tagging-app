import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.scss';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA1whJ4yifV0wqSO3u0CHPorCIkK7sjEJc',
	authDomain: 'where-s-waldo-263ce.firebaseapp.com',
	projectId: 'where-s-waldo-263ce',
	storageBucket: 'where-s-waldo-263ce.appspot.com',
	messagingSenderId: '1028975217659',
	appId: '1:1028975217659:web:80c7c044fa3927895e995e',
	measurementId: 'G-98EPF0E4RH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
