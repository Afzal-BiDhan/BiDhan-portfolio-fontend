import React, { useState } from 'react';
import './Portfolio.css';
import Projects from './Projects/Projects.jsx';
import PageBtn from './PageBtn';
import { AllNavbar } from '../../Layout/Navbar/NavStyled';
import NavBar from '../../Layout/Navbar/Navbar';
import Footer from '../../Layout/Footer/Footer';
import loading1 from '../../../images/lodaing_1.gif';
import { ApiLoading } from '../../ExportedData';

const Portfolio = (props) => {

    const { handleBtns, products, loading } = props;

    const [showPerPage, setShowperPage] = useState(9);
    const [pages, setPages] = useState({
        start: 0,
        end: showPerPage,
    });
    const onPageChange = (start, end) => {
        setPages({ start: start, end: end });
    }

    return (
        <>
            <AllNavbar><NavBar /></AllNavbar>
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
                    {loading ?
                        <div className="project">
                            <div className="row">
                                {products.slice(pages.start, pages.end).map(product => {
                                    return <Projects key={product._id} product={product} />
                                })}
                            </div>
                            <PageBtn showPerPage={showPerPage} onPageChange={onPageChange} total={products.length} />
                        </div> : ApiLoading()}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Portfolio;