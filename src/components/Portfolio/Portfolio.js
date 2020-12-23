import React from 'react';
import './Portfolio.css';
import Projects from './Projects/Projects';
import Footer from '../Footer/Footer';

const Portfolio = (props) => {

    return (
        <div className="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-title text-center margin">
                            <h2 className="text-center">my <span>portfolio</span></h2>
                            <span className="title-head-subtitle">a few recent design and coding projects. Want to see more? Email me.</span>
                        </div>
                        <div className="btns">
                            <button value="All" onClick={props.handleBtns} className="active">All</button>
                            <button value="Html-Css" onClick={props.handleBtns}>Html-Css</button>
                            <button value="Javascript" onClick={props.handleBtns}>Javascript</button>
                            <button value="React" onClick={props.handleBtns}>React</button>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="row">
                        {props.products.map(product => {
                            return <Projects key={product._id} product={product} />
                        })}
                        <div id="hide">
                            <div className="row">
                                {props.allproducts.map(product => {
                                    return <Projects key={product._id} product={product} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Portfolio;