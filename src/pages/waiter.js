import React, {useEffect, useState} from 'react';
import db from '../utils/config';
import Button from '../components/Button';
import Input from '../components/Input';
import './waiter.css';



function Waiter() {
    const [menu, setMenu] = useState([]);
       
    useEffect(() => {
        db.collection('menu').get().then(snapshot=> 
        snapshot.forEach(doc => {
            return setMenu(currentSate => [...currentSate, doc.data()])
                     
        }))
        
    }, []);
    
    const breakfastMenu = menu.filter(item => item.breakfast === true)
    const allDayMenu = menu.filter(item => item.breakfast === false)
    console.log(breakfastMenu, allDayMenu)
    return(
        <div>
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
           <section className="breakfast-menu">
           {breakfastMenu.map(item => <Button
           key={item.id}
           title={item.nome}
           onClick={()=> setMenu([...breakfastMenu])}
           valor={" R$"+item.valor}
           />)}
           </section>
           <section className="allday-menu">
               {allDayMenu.map(item => <Button
               key={item.id}
               title={item.nome}
               onClick={()=> setMenu([...allDayMenu])}
               valor={" R$"+item.valor}
               />
               )}
           </section>
        </div>

    )
}

export default Waiter;