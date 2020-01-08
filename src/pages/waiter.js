import React, {useEffect, useState} from 'react';
import db from '../utils/config';
import Button from '../components/Button';
import Input from '../components/Input';
import './waiter.css';



function Waiter() {
    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState([]);       
    useEffect(() => {
        db.collection('menu').get().then(snapshot=> 
        snapshot.forEach(doc => {
            return setMenu(currentSate => [...currentSate, doc.data()])
                     
        }))
        
    }, []);
    
    const breakfastMenu = menu.filter(item => item.breakfast === true)
    const allDayMenu = menu.filter(item => item.breakfast === false && item.drink === false)
    const drinks = menu.filter(item => item.drink === true && item.breakfast === false)
    

    // function addItem(id) {
    //     const newOrder = menu.map(item => {
    //         return item.id === id ? {...item, added: true} : item
    //     })
    //     setOrder(newOrder)
    //     console.log(order)
    // }

    return(
        <div className="main-div">
        <div className="client-data">
           <Input 
           type={"number"}
           placeholder={"mesa"}
           className={"table-number"}
           />
           <Input 
           type={"text"}
           placeholder={"nome do cliente"}
           className={"client-name"}
           />
        </div>
        <div className="menu">
           <section className="breakfast-menu">
           {breakfastMenu.map(item => <Button
           key={item.id}
           title={item.nome}
           handleClick={()=> setOrder([...order, item])}
           valor={" R$"+item.valor}
           />)}
           </section>
           <section className="allday-menu">
               <section className="allday-food">
                 {allDayMenu.map(item => <Button
               key={item.id}
               title={item.nome}
               handleClick={()=> setOrder([...order, item])}
               valor={" R$"+item.valor}
               />
               )}  
                </section>
           <section className="allday-drinks">
              {drinks.map(item=> <Button
                key={item.id}
                title={item.nome}
                handleClick={()=> setOrder([...order, item])}
                valor={" R$"+item.valor}
                />)} 
           </section>                
           </section>
           <section className="order-list">
               {order.map((item, index)=> <div key={item.id + index}>
                   <p>{item.nome} R${item.valor},00</p>
                   

               </div>)}
           </section>
           </div>
        </div>

    )
}

export default Waiter;