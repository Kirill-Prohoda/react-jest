import React from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Main from '../components/main/main';
import st from './App.module.scss';

function App() {
  return (
    <div className={st.content}>
     <Header/>
     <Main/>
     <Footer />
    </div>
  );
}

export default App;
