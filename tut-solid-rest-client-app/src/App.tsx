import type { Component } from 'solid-js';
import styles from './App.module.css';
import { hashIntegration, Route, Router, Routes } from 'solid-app-router';
import Navbar from './components/Navbar';

const App: Component = () => {
  return (
      <Router source={hashIntegration()}>
      <div class={styles.App}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" component={() => <div>Home Component</div>}></Route>
        <Route path="/about" component={() => <div>About Component</div>}></Route>
      </Routes>
      <ion-icon name="accessibility-outline"></ion-icon>
    </Router>
  );
};

export default App;
