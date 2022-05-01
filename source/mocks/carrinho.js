
import logo from '../../assets/logo.png'
import topo from '../../assets/topo.png'

import antena2g from '../../assets/Itens/antena2g3g.png'
import antenaWifi from '../../assets/Itens/antenaWifi.png'
import modem from '../../assets/Itens/modem.png'
import nodeMcu from '../../assets/Itens/nodeMcu.png'


import switch1 from '../../assets/Itens/switch1.png'
import switch2 from '../../assets/Itens/switch2.png'
import hubgc from '../../assets/Itens/hubgc.png'
import hub2 from  '../../assets/Itens/hub2.png'



const carrinho = {
    topo: {
        titulo: 'Carrinho',
        imagem: topo
    },
    detalhes: {
        titulo: 'Detalhes do Carrinho',
        tituloProduto: 'Kit IoT',
        descricao: 'Um kit IoT que revoluciona a vida dos estudantes',
        logoVendedor: logo,
        nomeVendedor: "Nuvem's Shopping",
        preco: 'R$ 100,00'

    },
    itens: {
        titulo: 'Itens do Carrinho',
        lista: [
            {
                nome: 'Antena 2g/3g',
                image: antena2g
            },
            {
                nome: 'Antena Wifi',
                image: antenaWifi
            },
            {
                nome: 'Modem',
                image: modem
            },
            {
                nome: 'Node MCU',
                image: nodeMcu
            },
        ]
    },
    itens2: {
        titulo: 'Switches e Hubs',
        lista: [
            {
                nome: 'Switch Pro 48 PoE',
                image: switch1
            },
            {
                nome: 'Switch TP-Link TL-SF1005D',
                image: switch2
            },
            {
                nome: 'Hub Game Cube Color',
                image: hubgc
            },
            {
                nome: 'Hub',
                image: hub2
            },
        ]
    }
}

export default carrinho;