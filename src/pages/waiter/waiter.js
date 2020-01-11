import React, {useEffect, useState} from 'react';
import db from '../../utils/config';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import MenuCard from '../../components/MenuCard/MenuCard'
import './waiter.css';
import {useForm} from 'react-hook-form';


function Waiter() {
    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState([]);   
    const [modal, setModal] = useState({status: false});
    const [options, setOptions] = useState("");
    const [extras, setExtras] = useState("");
    
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

    const verifyOptions = (item) => {
      if(item.add.length !== 0) {
        setModal({status: true, item: item});
      } else if(item.burger.length !== 0) {
        setModal({status: true, item: item});
      } else {
        addOrder(item);
      }
      
    }
    
    const addOptionsExtras = () => {
    const updatedItem = {...modal.item, name:`${modal.item.name} ${options} ${extras}`};
    addOrder(updatedItem);
    setModal({status: false})
  }

    return(
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
               handleClick={()=> setOrder(verifyOptions(item))}
               valor={" R$"+item.valor}
               />
               )}  
                </section>
           <section className="allday-drinks">
              {drinks.map((item, index)=> <MenuCard
                key={index}
                title={item.nome}
                handleClick={()=> setOrder(addOrder(item))}
                valor={" R$"+item.valor}
                />)} 
           </section>                
           </section>
           
           </div>
           {modal.status ? (
             <div>
               <h3>Extras</h3>
               {modal.item.burger.map((elem, index) => (
                 <div key={index}>
                 <input onChange={() => setExtras(`${extras} ${elem}`)} type='radio' name='extras' value={elem}></input>
                 <label>{elem}</label>
                 </div>
               ))}
               <h3>Opcionais</h3>
               {modal.item.add.map((elem, index) => (
                 <div key={index}>
                 <input onChange={() => setOptions(`${options} ${elem}`)} type='radio' name='opcionais' value={elem}></input>
                 <label>{elem}</label>
                 <button onClick={addOptionsExtras()}>Adicionar</button>
                 </div>
               ))}
             </div>
           ) : false }
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
              {order.map((item, index)=> <p key={item.id + index}>
                {item.nome} R${item.valor},00
               
              </p>)}
              <Input
              type={"submit"}
              />
            </form>
        </div>

    )
}

export default Waiter;