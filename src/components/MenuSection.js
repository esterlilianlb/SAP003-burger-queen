import React from 'react';
import Button from './Button';

const MenuSection = () => (
    <section>
        <div>
            Menu aqui
            < Button
            className='addItem'
            onClick={add}
            title='banana'
            />
        </div>
    </section>
)

export default MenuSection;

function add() {
    const adc = 'oi'
    return console.log(adc)
}