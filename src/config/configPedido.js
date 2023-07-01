export default function configPedido(id, data, cliente, horaEntrega, localEntrega, status, pagamento, carrinho, valor, obs){
    if(
        typeof(id) === 'number' &&
        typeof(cliente) === 'number' &&
        typeof(valor) === 'number'
    ){
        return {
            id: id,
            data: data,
            cliente: cliente,
            horaEntrega: horaEntrega,
            localEntrega: localEntrega,
            status: status,
            pagamento: pagamento,
            carrinho: carrinho,
            valor: valor,
            obs: obs,
        }
    }else{
        return new Error('Dados invalidos! Por favor verifique sua solicitação!')
    }
}