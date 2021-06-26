import React from 'react';
// Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg';
// Import Images
import home2 from '../img/home2.png';
// Styles
import {About, Description, Hide, Image} from "../styles";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { fade } from '../animation';

const ServicesSection = () => {
    const [element, controls] = useScroll();

    return (
        <Services
            variants={fade}
            ref={element}
            animate={controls}
            initial="hidden"
        >
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt='Clock'/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt='Teamwork'/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt='Diaphragm'/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={money} alt='Money'/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </Card>
                </Cards>
            </Description>

            <Image>
                <img src={home2} alt='Camera'/>
            </Image>

        </Services>
    );
};

const Services = styled(About)`
h2 {
    padding-bottom: 5rem;
}

p {
    width: 70%;
    padding: 2rem 0 4rem 0;
}
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background-color: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;