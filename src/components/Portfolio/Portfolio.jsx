import React, { useState } from 'react';
import './Portfolio.css';
import Projects from './Projects/Projects.jsx';
import Footer from '../Footer/Footer';
import PageBtn from './PageBtn';

const Portfolio = (props) => {

    const { handleBtns, products, allproducts } = props;
    const shuffle = a => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }
    shuffle(allproducts);

    const [showPerPage, setShowperPage] = useState(4);
    const [pages, setPages] = useState({
        start: 0,
        end: showPerPage,
    });
    const onPageChange = (start, end) => {
        setPages({ start: start, end: end });
    }

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
                            <button value="All" onClick={handleBtns} className="active">All</button>
                            <button value="Html-Css" onClick={handleBtns}>Html-Css</button>
                            <button value="Javascript" onClick={handleBtns}>Javascript</button>
                            <button value="React" onClick={handleBtns}>React</button>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="row">
                        {products.slice(pages.start, pages.end).map(product => {
                            return <Projects key={product._id} product={product} />
                        })}
                        <div id="hide">
                            <div className="row">
                                {allproducts.slice(pages.start, pages.end).map(product => {
                                    return <Projects key={product._id} product={product} />
                                })}
                            </div>
                            <PageBtn showPerPage={showPerPage} onPageChange={onPageChange} total={allproducts.length} />
                        </div>
                    </div>
                    <div id="hide_pageBtn">
                        <PageBtn showPerPage={showPerPage} onPageChange={onPageChange} total={products.length} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Portfolio;