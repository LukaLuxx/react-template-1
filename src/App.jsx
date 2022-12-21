import {divide, multiply, add, subtract} from './Util';
import { nanoid } from 'nanoid'


const App = () => {
   let divideRes;
    try {
         divideRes = divide(5,3);
    } catch (error) {
        console.error(error.message);
    }

    return  (
    <div>
        <div>5/3 = {divideRes.toFixed(2)}</div>
        <div>5*3 = {multiply(5,3).toFixed(2)}</div>
        <div>5+3 = {add(5,3).toFixed(2)}</div>
        <div>5-3 = {subtract(5,3).toFixed(2)}</div>
        <div>ID: {nanoid()} </div>
    </div>

    );
}

export default App;




