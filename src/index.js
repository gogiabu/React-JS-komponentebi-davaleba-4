import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';
import Header from './Header';
import Text from './Text';



function App() {
    return(
        <div class="format">
        <Footer></Footer>
        <Text></Text>
        <Header></Header>
      </div>
     ) 
    }
 
var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App/>);
