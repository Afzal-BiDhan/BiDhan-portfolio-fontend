import Modal from 'react-modal';
import React, { useEffect, useRef, useState } from 'react';
import './Comedown.css';
import axios from 'axios';

Modal.setAppElement('#root')

const Comedown = ({ modalIsOpen, closeModal, id }) => {

    let interval = useRef();
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");


    const startTimer = async () => {

        const url = `${process.env.REACT_APP_findProject}/${id}`;
        const result = await axios.get(url);
        const targetDate = result.data.updatingDate;
        
        const countDownDate = new Date(`${targetDate} 00:00:00`);
        interval = setInterval(() => {

            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            };

        }, 1000);
    };


    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    }, []);

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="comedown_modal">

                <div class="coming_soon">
                    <div class="wrapper">
                        <span onClick={closeModal} className="btn btn-warning back_btn">Close...</span>
                        <div class="coming_soon_title">
                            <h1>Coming Soon</h1>
                        </div>
                        <div class="coming_soon_timeline">
                            <div className="alltime">
                                <div class="timeline_cart">
                                    <h1 class="days">{timerDays}</h1>
                                    <p>days</p>
                                </div>
                                <div class="timeline_cart">
                                    <h1 class="hours">{timerHours}</h1>
                                    <p>hours</p>
                                </div>
                                <div class="timeline_cart">
                                    <h1 class="minutes">{timerMinutes}</h1>
                                    <p>minutes</p>
                                </div>
                                <div class="timeline_cart">
                                    <h1 class="seconds">{timerSeconds}</h1>
                                    <p>seconds</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Comedown;