import React from "react";
import { motion } from "framer-motion";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    circle: {
        fill:'#99CA3D',
        stroke:'#99CA3D',
        strokeWidth:2,
    }
});

const Circles = ({ className, data }) => {
    const classes = useStyles();
    return (
        <g className={className}>
            {data.map((c, i) => {
                const position = 100+ (i* 18);
                const nextPosition = 100+ ((i + 1)* 18);
                return (
                    <motion.circle 
                        key={i} 
                        // transform={`translate(${position}, ${position})`}
                        initial={{
                            translateX: position,
                            translateY: position,
                        }}
                        r="6" 
                        className={classes.circle}
                        animate={{ 
                            translateX: nextPosition,
                            translateY: nextPosition,
                        }}
                        transition={{ 
                            duration: 1.2,
                            loop: Infinity,
                            ease: "linear",
                            stiffness: 1000
                        }}
                    />
                )})}
        </g>
    );
}

export default Circles;