import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Main from './components/Main';
import Axios from 'axios';
import Error from './components/Error';

function App() {

    const [ erros, setErros ] = useState([]);

    const [ pedidos, setPedidos ] = useState([]);
    const [ produtos, setProdutos ] = useState([]);
    const [ adicionais, setAdicionais ] = useState([]);

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
            });

        Axios.get('http://localhost:3001/adicionais')
            .then((response) => {
                setAdicionais(response.data)
            }).catch((err) => {
                setTimeout(() => {
                    console.log(err)
                    setErros(err);
                }, 3000)
                setErros([err])
            });
        
        
    }, [])

    const onClick = (btn) => {
        setPageRender(btn);
    }
    
    return (
        <>
            <Header onClick={onClick} />
            <Main adicionais={adicionais} pageRender={pageRender} pedidos={pedidos} produtos={produtos} />
            {(erros.length > 0) && (<Error />)}
            <GlobalStyle />
        </>
    );
}

export default App;
