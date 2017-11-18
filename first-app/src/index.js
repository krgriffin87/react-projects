import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button(props) {
    return (
        <button onClick={() => props.onClick}>
            {props.value}
        </button>
    );
}

function Buttons(props) {
    let buttonsRender = [];
    for (let x = 0; x < props.products.length; x++) {
        buttonsRender.push(
            <div key={`button-row-${x}`} className="button-row">
                <Button
                    value={props.products[x].name}
                    onClick={() => props.onClick(x)}
                />
            </div>
        );
    }
    return (
        <div>
            {buttonsRender}
        </div>
    );
}

function DisplayScreen(props) {
    return(
        <div className="marquee">
            <span>{props.message}</span>
        </div>
    );
}

class Machine extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {name: 'Coke', stock: 8, price: 1},
                {name: 'Pepsi', stock: 5, price: 1.5},
                {name: 'Mountain Dew', stock: 4, price: 1.25}
            ],
            currentAmt: 1,
            message: 'Insert Money'
        }
    }

    handleInsertMoney(amt) {
        var currentAmt = this.state.currentAmt;
        currentAmt += amt;
        this.setState({currentAmt: currentAmt})
    }

    handleClickButton(i) {
        const products = this.state.products.slice();
        console.log(products[i]);
        if (products[i].stock > 0 && this.state.currentAmt >= products[i].stock) {
            products[i].stock -= 1;
            this.setState({products: products});
        }
        if (products[i].stock === 0) {
            //Do stock error
        }
        if (products[i].price > this.state.currentAmt) {
            //this.setState({message: 'Insert more money.  Cost: ' + products[i].price + '  Amount inserted: ' + this.state.currentAmt});
        }

    }

    render() {
        return (
            <div className="machine">
                <div className="machine-buttons">
                    <Buttons
                        products={this.state.products}
                        onClick={i => this.handleClickButton(i)}
                    />
                </div>
                <div className="machine-display">
                    <DisplayScreen
                        message={this.state.message}
                    />
                </div>
            </div>
        );
    }

}

ReactDOM.render(<Machine />, document.getElementById("root"));