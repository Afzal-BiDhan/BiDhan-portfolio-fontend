import React, { Component } from 'react';
import Portfolio from './Portfolio';

class PortfolioData extends Component {

    state = {
        products: [],
        productCopy: []

    }

    componentDidMount() {
        fetch('https://gentle-fjord-53714.herokuapp.com/projectInfo')
            .then((response) => response.json())
            .then(booksList => {
                this.setState({ products: booksList });
                console.log(booksList)
            });
    }
    handleBtns = (e) => {
        console.log(e.target.value);
        let productCopy;
        if (e.target.value === "All") {
            productCopy = this.state.products;
        }
        else {
            productCopy = this.state.products.filter(item => item.projectCategory === e.target.value)
        }

        this.setState({
            productCopy: productCopy
        })
        const x = document.getElementById('hide');
        x.style.setProperty("display", 'none',);
    }

    render() {

        return (
            <div>
                <Portfolio products={this.state.productCopy} allproducts={this.state.products} handleBtns={this.handleBtns} btns={this.state.btns} />
            </div>
        );
    }
}

export default PortfolioData;
