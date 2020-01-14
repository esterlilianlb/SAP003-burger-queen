import React, {useEffect, useState} from 'react';
import db from '../../utils/config';
import Input from '../../components/Input/Input';
import MenuCard from '../../components/MenuCard/MenuCard'
import Nav from '../../components/Nav/Nav'
import './waiter.css';
import {useForm} from 'react-hook-form';
import Button from '../../components/Button/Button'
import logo from '../../images/logo.png';


function Waiter() {
    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState([]);   
    const [table, setTable] = useState("");
    const [clientName, setClientName] = useState("");
    
    
    useEffect(() => {
        db.collection('menu').get().then(snapshot=> 
        snapshot.forEach(doc => {
            return setMenu(currentSate => [...currentSate, doc.data()])
                     
        }))
        
    }, []);
    
    const breakfastMenu = menu.filter(item => item.breakfast === true)
    const allDayMenu = menu.filter(item => item.breakfast === false && item.drink === false)
    const drinks = menu.filter(item => item.drink === true && item.breakfast === false)

    const { handleSubmit } = useForm()
    const onSubmit = data => { console.log(data) }

    const addOrder = (item) => {
      if(!clientName) {
        alert("Insira o nome do cliente!")
      } else if(!table) {
        alert("Insira o número da mesa!")
      } else {
        db.collection('pedidos').add({
          clientName,
          table,
          order: order.map(i=> {
            return {nome: i.nome}
          }),
          timestamp: new Date().toLocaleString('pt-BR'),
          status: 'em preparo',

        })
        .then(()=> setClientName(''), setTable(''), setOrder([]))
      }
    }

    const removeItem = (item) => {
      const index = (order.indexOf(item))
      order.splice(index, 1)
      setOrder([...order])
    }


    return(
      <div>
        <div className="logo-waiter">
        <img alt="burger-queen" src={logo}/>
        <h1>Burger Queen</h1>
        </div>

        <div className="nav"><Nav/></div>
                 
        <div className="main-div">
          <div className="menu">
           <section className="breakfast-menu">
           {breakfastMenu.map((item, index) => <MenuCard
           key={index}
           title={item.nome}
           handleClick={()=> setOrder([...order, item])}
           valor={" R$"+item.valor}
           />)}
           </section>
           <section className="allday-menu">
               <section className="allday-food">
                 {allDayMenu.map((item, index) => <MenuCard
               key={index}
               title={item.nome}
               handleClick={()=> setOrder([...order, item])}
               valor={" R$"+item.valor}
               />
               )}  
                </section>
           <section className="allday-drinks">
              {drinks.map((item, index)=> <MenuCard
                key={index}
                title={item.nome}
                handleClick={()=> setOrder([...order, item])}
                valor={" R$"+item.valor}
                />)} 
           </section>                
           </section>
           
           </div>
           
           <form className="order-list" onSubmit={handleSubmit(onSubmit)}>
             <h1>Meu pedido</h1>
             <Input 
             type={"text"}
             placeholder={"nome do cliente"}
             className={"client-name"}
             focusOut={i=>setClientName(i.currentTarget.value)}
             />
           <Input 
            type={"number"}
            placeholder={"mesa"}
            className={"table-number"}
            focusOut={i=>setTable(i.currentTarget.value)}
            />
              {order.map((item, index)=> <p key={index}>
                {item.nome} R${item.valor},00
                <Button
                title={'x'}
                handleClick={() => removeItem(item) }
                />
              </p>)}
              <p>Total: </p>
              <Input
              className={"send"}
              type={"submit"}
              handleClick={addOrder}
              />
            </form>
        </div>
      </div>
    )
}

export default Waiter;