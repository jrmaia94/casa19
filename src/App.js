import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PagePedidos from './components/pages/PagePedidos';
import PageAdcPedido from './components/pages/PageAdcPedido';
import { ObjDateForString, StrDateForObj } from './config/dataParse';
import ConfirmacaoData from './components/elements/ConfirmacaoData';
import PageEntregas from './components/pages/PageEntregas';
import PagePagamentos from './components/pages/PagePagamentos';
import PageRelDeb from './components/pages/PageRelDeb';
import PageRelGeral from './components/pages/PageRelGeral';
import Navigation from './components/elements/Navigation';
import ContadorBurgs from './components/elements/ContadorBurgs';
import './styles/pagePedidos.css';
import './styles/colors.css'

function App() {    
    ///Database----------------------------------------------------------------
    const [pedidos, setPedidos] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [adicionais, setAdicionais] = useState([]);
    //\Database----------------------------------------------------------------
    ///Page render control-----------------------------------------------------
    const [pagePedidos, setPagePedidos] = useState(true)
    const [pageEntregas, setPageEntregas] = useState(false)
    const [pagePagamentos, setPagePagamentos] = useState(false)
    const [pageRelDeb, setPageRelDeb] = useState(false)
    const [pageRelGeral, setPageRelGeral] = useState(false)
    const [pageAdcPedido, setPageAdcPedido] = useState(false)
    const [data, setData] = useState()
    const [isFirstRender, setIsFirstRender] = useState(true)
    
    const pages = [setPagePedidos, setPageEntregas, setPagePagamentos, setPageRelDeb, setPageRelGeral, setPageAdcPedido]
    
    function renderPageControl(e){
        pages.forEach( i => {
            i(() => {
                return false
            })
        })
        
        if(e === 'pedidos'){
            setPagePedidos(() => {
                return true
            })
        }else if(e === 'entregas'){
            setPageEntregas(() => {
                return true
            })
        }else if(e === 'pagamentos'){
            setPagePagamentos(() => {
                return true
            })
        }else if(e === 'relDeb'){
            setPageRelDeb(() => {
                return true
            })
        }else if(e === 'relGeral'){
            setPageRelGeral(() => {
                return true
            })
        }else if(e === 'adcPedido'){
            setPageAdcPedido(() => {
                return true
            })
        }
    }
    
    function onClick(e) {
        e.preventDefault()
        renderPageControl(this.id)
    }
    
    //\Page render control----------------------------------------------------
    //Carregar dados ---------------------------------------------------------

    useEffect(() => {
        Axios.get('https://api-casa19-c48b6c3b172e.herokuapp.com/produtos')
            .then((response) => {
                setProdutos(response.data)
            }).catch((err) => {

            })
        Axios.get('https://api-casa19-c48b6c3b172e.herokuapp.com/adicionais')
            .then((response) => {
                setAdicionais(response.data)
            }).catch((err) => {

            })    
        Axios.get('https://api-casa19-c48b6c3b172e.herokuapp.com/clientes')
            .then((response) => {
                setClientes(response.data)
            }).catch((err) => {

            })        
    }, [pageAdcPedido])
        
    useEffect(() => {
        Axios.get('https://api-casa19-c48b6c3b172e.herokuapp.com/adicionais')
            .then((response) => {
                setAdicionais(response.data)
            }).catch((err) => {

            })            
    }, [])

    useEffect(() => {

        Axios.get('https://api-casa19-c48b6c3b172e.herokuapp.com/clientes')
            .then((response) => {
                setClientes(response.data)
            }).catch((err) => {

            })
    }, [])

    useEffect(() => {
        Axios.get('https://api-casa19-c48b6c3b172e.herokuapp.com/pedidos')
            .then((response) => {
                setPedidos(response.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [pagePedidos])

    //------------------------------------------------------------------------

    function confirmData(data){
        setData(data)
        setIsFirstRender(false)
    }

    const [pedidosFiltrados, setPedidosFiltrados] = useState([])
    
    useEffect(() => {
        setPedidosFiltrados(prevObj => {
            const newObj = pedidos.filter( e => {
                let date = new Date(e.data)
                date = ObjDateForString(new Date(date.setDate(date.getDate()+1)))
                return date === data
            })
            return newObj
        })
    }, [data, pedidos])

    return (
        <>
            {pedidosFiltrados.length > 0 && (<ContadorBurgs pedidos={pedidosFiltrados} produtos={produtos}/>)}
            {isFirstRender && (<ConfirmacaoData confirmData={confirmData}/>)}
            <Navigation onclick={onClick} data={data} setData={setData}/>

            {pagePedidos && (<PagePedidos data={data} setPedidos={setPedidos} pedidos={pedidos} produtos={produtos} adicionais={adicionais} clientes={clientes} functOnClick={renderPageControl}/>)}

            {pageAdcPedido && (<PageAdcPedido adicionais={adicionais} clientes={clientes} produtos={produtos} data={StrDateForObj(data)} renderPageControl={renderPageControl}/>)}

            {pageEntregas && (<PageEntregas/>)}

            {pagePagamentos && (<PagePagamentos pedidos={pedidos} renderPageControl={renderPageControl} data={data}/>)}

            {pageRelDeb && (<PageRelDeb/>)}

            {pageRelGeral && (<PageRelGeral/>)}
        </>
    );
}

export default App;