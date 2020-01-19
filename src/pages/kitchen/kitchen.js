import React, {useEffect, useState} from 'react';
import Nav from '../../components/Nav/Nav'
import db from '../../utils/config'
import './kitchen.css';
import logo from '../../images/logo.png';

function Kitchen() {

  const [ordersToDo, setOrdersToDo] = useState([]);
  
  useEffect(() => {
    db.collection('pedidos').get().then(snapshot=> 
    snapshot.forEach(doc => {
        return setOrdersToDo(currentSate => [...currentSate, doc.data()])
          
    }))
    
}, []);
    return(
      <div>
        <div className="logo-waiter">
        <img alt="burger-queen" src={logo}/>
        <h1>Burger Queen</h1>
        </div>
        <div className="nav"><Nav/></div>
    {ordersToDo.map((item, index)=> 
      <div className="kitchen-card" key={index}>
        <p>Nome: {item.clientName}</p>
        <p>Mesa: {item.table}</p>
        <span>Pedido: {item.order.map((item, index) => <p key={index}>{item.nome}</p>)}</span>
        <p>Status: {item.status}</p>
        <p>Hora do pedido: {item.timestamp}</p>

      </div>
    )}
      </div>
        )
}

export default Kitchen;