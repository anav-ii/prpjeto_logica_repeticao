/**
 * VALOR FOR ATÉ 100 O CÁLCULO SEJA 10%;
 * VALOR FOR DE 101 ATÉ 1000 O CÁLCULO SEJA 15%
 * ACIMA DE 1000 SEJA DE O CÁLCULO SEJA 20%
 */

const CalculoPercentual = (Valor) => {
    let ValorCalculado = 0.0

    if (Valor <= 100){
        ValorCalculado = Valor * 0.10
    }else if( Valor <= 1000){
        ValorCalculado = Valor * 0.15
    }else{
        ValorCalculado = Valor * 0.20
    }

    return ValorCalculado
}


export{CalculoPercentual}