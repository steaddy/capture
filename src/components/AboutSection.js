import React from 'react';
import home1 from '../img/home1.png';
import {About, Description, Hide, Image} from "../styles";

// Framer Motion
import {motion} from 'framer-motion';
import { titleAnim, pageAnimation, fade, photoAnim } from '../animation';

const AboutSection = () => {




    return (
        <About>
            <Description>
                <motion.div
                    variants={pageAnimation}
                    initial="hidden"
                    animate="show"
                    className="title"
                >
                    <Hide>
                        <motion.h2
                            variants={titleAnim}
                            initial="hidden"
                            animate="show"
                        >We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2
                            variants={titleAnim}
                            initial="hidden"
                            animate="show"
                        >your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2
                            variants={titleAnim}
                            initial="hidden"
                            animate="show"
                        >true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p
                variants={fade}
                >Contact us for any photography or videography ideas that you have. We have professionals with amazing
                    skills.</motion.p>
                <motion.button
                    variants={fade}
                >Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img
                    variants={photoAnim}
                    src={home1} alt="Guy with a camera"/>
            </Image>
        </About>
    );
};


export default AboutSection;
