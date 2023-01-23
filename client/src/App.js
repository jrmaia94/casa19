import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Main from './components/Main';
import Axios from 'axios';
import * as dataParse from './config/dataParse';
import Error from './components/Error';
import BackgroundSmoke from './components/BackgroundSmoke';

function App() {

    const [ erros, setErros ] = useState([]);

    const [ pedidos, setPedidos ] = useState([]);
    const [ produtos, setProdutos ] = useState([]);

    const [pageRender, setPageRender ] = useState("Pedidos");
    
    useEffect( () => {
         Axios.get('http://localhost:3001/pedidos')
            .then((response) => {                
                setPedidos(response.data)
            }).catch((err) => {
                setTimeout(() =>{
                    console.log(err);
                    setErros([])
                }, 3000)
                setErros([err])
            });
        
        Axios.get('http://localhost:3001/produtos')
            .then((response) => {
                setProdutos(response.data)
            }).catch((err) => {
                setTimeout(() => {
                    console.log(err)
                    setErros(err);
                }, 3000)
                setErros([err])
            })
    }, [])

    const onClick = (btn) => {
        setPageRender(btn);
    }
    
    return (
        <>
            <Header onClick={onClick} />
            <Main pageRender={pageRender} pedidos={pedidos} produtos={produtos} />
            {(erros.length > 0) && (<Error />)}
            <GlobalStyle />
        </>
    );
}

export default App;
