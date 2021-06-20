import React from 'react';
// Styles
import styled from 'styled-components';
import {About} from "../styles";

import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";


const FaqSection = () => {
    return (
        <Fiq>
            <h2>Any Question <span>FIQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="How Do I Start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, repudiandae!</p>
                    </div>
            </Toggle>
            <Toggle title="Daily Schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, repudiandae!</p>
                </div>
            </Toggle>
            <Toggle title="Different Payment Methods">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, repudiandae!</p>
                </div>
            </Toggle>
            <Toggle title="What Products do you offer?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, repudiandae!</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
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