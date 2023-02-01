import { useState } from "react";

export default function useViewer() {

    const [ exibirCard, setExibirCard ] = useState(false)

    function toggleExibirCard(e) {
        if(e.type === 'mouseenter'){
            setExibirCard(true)
        }else if(e.type === 'mouseleave'){
            setExibirCard(false)
        }
    };

    return {
        exibirCard,
        toggleExibirCard
    };

}