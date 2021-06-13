import React from 'react';
// Styles
import styled from 'styled-components';
import { About } from "../styles";

const FaqSection = () => {
    return (
        <Fiq>
            <h2>Any Question <span>FIQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, repudiandae!</p>
                </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, repudiandae!</p>
                </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, repudiandae!</p>
                </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>What Products do you offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, repudiandae!</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Fiq>
    );
};

const Fiq = styled(About)`
    display: block;
    
    span {
        display: block;
    }
    
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;
    }
    
    .question {
        padding: 4rem 0 0 0;
        cursor: pointer;
    }
    
    .answer {
        padding: 2rem 0 0 0;
    }
    
    p {
        padding: 1rem 0;
   }
`;

export default FaqSection;