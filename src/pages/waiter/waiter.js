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
    
    
    useEffect(() => {
        db.collection('menu').get().then(snapshot=> 
        snapshot.forEach(doc => {
            return setMenu(currentSate => [...currentSate, doc.data()])
                     
        }))
        
    }, []);
    
    const breakfastMenu = menu.filter(item => item.breakfast === true)
    const allDayMenu = menu.filter(item => item.breakfast === false && item.drink === false)
    const drinks = menu.filter(item => item.drink === true && item.breakfast === false)

    const { register, handleSubmit } = useForm()
    const onSubmit = data => { console.log(data) }

    const addOrder = (item) => {
      return setOrder([...order, item])
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
            type={"number"}
            placeholder={"mesa"}
            className={"table-number"}
            onChange={register({required: true, maxLength: 2})}
            />
            <Input 
            type={"text"}
            placeholder={"nome do cliente"}
            className={"client-name"}
            handleClick={register({required: true, maxLength: 10})}
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
              />
            </form>
        </div>
      </div>
    )
}

export default Waiter;