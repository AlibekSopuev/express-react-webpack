import React from 'react';
import {Switch, Route} from "react-router-dom";
import {FilterableProductTable} from "./features/products/pages/FilterableProductTable.jsx";
import {ProductPage} from "./features/products/pages/ProductPage.jsx";

class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('yoyo');
        const id = setInterval(()=>{
            this.setState({count: this.state.count + 1})
        }, 0)

    }

    render() {
        return <h1>Привет, {this.state.count}</h1>;
    }
}

const func = () => {

}

const Test = () => {
    const [state, setState] = React.useState(0)
    React.useEffect(()=>{
        const id = setInterval(()=>{
            setState(state+1)
        }, 0)
        return ()=>{clearInterval(id)}
        func()
    }, [])
    return (
        <div>
            {state}
        </div>
    );
};

export const App = () => {
    return (
        <>
            <Welcome/>
            <Test/>
            <Switch>
                <Route exact path={'/'}>
                    <FilterableProductTable/>
                </Route>
                <Route path={'/:productId'}>
                    <ProductPage/>
                </Route>
            </Switch>
        </>
    );
};