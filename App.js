import logo from './logo.svg';
import './app.css';
import {ProductComponent} from './components/ProductComponent'



function App(){


    return(
        <div className="App">
            <ProductComponent/>
        </div>
    );
}


export default App;

export const prodData =[

    {
        prodName: "FancyProduct",
        price:"$40-$80"
    },

    {
        prodName: "Special Item",
        price: "$70-$100"
    },

    {
        prodName: "Sale Item",
        price: "$50-$90" 
    },

    {
        prodName: "Popular Item",
        price: "$100-$150"
    },

]