import React, {useEffect} from 'react';
import db from '../utils/config';
import Button from '../components/Button';

function Waiter() {
    // const [menu, setMenu] = useState([]);
    
    const printButton = useEffect(() => {
        db.collection('menu').get().then(snapshot=> 
        snapshot.forEach(doc => {
            console.log(doc.data());
        }))
        
    });

    return(
        <div>
            <Button />
        </div>

    )
}

export default Waiter;