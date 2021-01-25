import React, { Component } from 'react';
import PortfolioData from './PortfolioData/PortfolioData';


class Portfolio extends Component {

    state = {
        products: [],
        productCopy: [],
        loading: false,
    };
    componentDidMount() {
        const url = process.env.REACT_APP_getProjects
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ products: data });
                this.setState({ productCopy: data });
                this.setState({ loading: true });
            });

    };
    handleBtns = (e) => {
        let productCopy;
        if (e.target.value === "All") {
            productCopy = this.state.products;
        }
        else {
            productCopy = this.state.products.filter(item => item.category === e.target.value)
        };

        this.setState({
            productCopy: productCopy
        });
    }
    render() {

        return (
            <PortfolioData
                products={this.state.productCopy}
                handleBtns={this.handleBtns}
                loading={this.state.loading}
            />
        );
    }
}

export default Portfolio;
