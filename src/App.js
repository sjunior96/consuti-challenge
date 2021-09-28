import React from 'react';
import Router from './router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
	return (
		<>
			<ToastContainer autoClose={3000} />
			<Router />
		</>
	);
};

export default App;