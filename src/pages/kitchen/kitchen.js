import React, {useEffect, useState} from 'react';
import Nav from '../../components/Nav/Nav'
import db from '../../utils/config'

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
        
        <div className="nav"><Nav/></div>
    {ordersToDo.map((item, index)=> 
      <div key={index}>
        <p>Nome: {item.clientName}</p>
        <p>Mesa: {item.table}</p>
        {item.order.forEach(item => <p>Pedido: {item}</p>)}
        <p>Status: {item.status}</p>
        <p>Hora do pedido: {item.timestamp}</p>

      </div>
    )}
      </div>
        )
}

export default Kitchen;