import React from 'react';
import MenuCard from '../MenuCard/MenuCard';


function BreakfastMenu(props) {
    
    return (
        <>
            <section className="breakfast-card" onClick={props.handleClick}>
                <h3>Café da Manhã</h3>
                  {props.menu.breakfastMenu.map((item, index) => <MenuCard
                  key={index}
                  title={item.nome}
                  handleClick={()=> props.setOrder([...props.order, item])}
                  valor={" R$"+item.valor}
                  />)}
            
            </section>
        </>
    )
}

export default BreakfastMenu;