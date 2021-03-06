import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import Circles from './Circles';

const useStyles = createUseStyles((theme: any) => ({
    svgRoot: {
        letterSpacing: 0,
        fontWeight: 600,
    },
    coffretPlugPlay: {
        height: 36,
        width: 165,
        color: '#05A735',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: '18px',
        textAlign: 'center',
    },
    mainText: {
        fill: '#05A735',
        fontSize: 14,
        fontWeight: 700,
    },
    top: {
      transform: 'translateX(190px) translateY(-20px) rotate(42deg)'
    },
    right: {
      transform: 'translateX(150px) translateY(210px) rotate(15deg)'
    },
    left: {
      // transform: 'translateX(130px)'
      transform: 'translateX(250px) translateY(210px) rotate(75deg)'
    },
}));

const data = [0, 1, 2, 3, 4];
type Props = { className: string; }
const PlugSvg: FC = ({ className }) => {
    const classes = useStyles();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="425"
            height="564"
            className={className}
            viewBox="0 0 425 564">
            <defs>
              {/* Top dot */}
                <linearGradient id="linearGradient-1" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#0FCC4F"></stop>
                    <stop offset="99.995%" stopColor="#05A73C"></stop>
                </linearGradient>
                <path
                    id="path-2"
                    d="M191.154 161.85c.098.06.19.13.27.212l9.352 9.373a1.398 1.398 0 01-.268 2.185l-5.899 3.555-3.5 3.502c-.817.817-2.148.817-2.987 0l-1.443-1.466-33.784 33.796a2.159 2.159 0 01-3.048.006 2.145 2.145 0 01-.01-3.033l.004-.005 33.784-33.796-1.443-1.466a2.101 2.101 0 010-2.966l3.524-3.525 3.53-5.89a1.398 1.398 0 011.918-.482zm59.901-50.056c.777.775.78 2.032.005 2.81l-.002.002-33.82 33.82 1.532 1.5a2.116 2.116 0 010 2.943l-3.456 3.458-3.483 5.81a1.398 1.398 0 01-2.191.265l-.199-.2-3.803 3.827a2.113 2.113 0 01-2.942 0 2.116 2.116 0 010-2.943l3.815-3.816-2.942-2.92-3.814 3.804a2.045 2.045 0 01-2.92 0 2.047 2.047 0 010-2.92l3.792-3.816-.207-.21a1.398 1.398 0 01.277-2.181l5.814-3.484 3.456-3.458c.817-.817 2.125-.817 2.92 0l1.532 1.533 33.82-33.821a1.993 1.993 0 012.816-.003z"></path>

              {/* Left dot */}
                <linearGradient id="linearGradient-4" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#0FCC4F"></stop>
                    <stop offset="99.995%" stopColor="#05A73C"></stop>
                </linearGradient>
                <path
                    id="path-5"
                    d="M77.14 354.795c.099.06.19.13.271.212l9.351 9.373a1.398 1.398 0 01-.268 2.185l-5.898 3.555-3.501 3.502c-.817.817-2.148.817-2.987 0l-1.442-1.466-47.927 47.938a2.159 2.159 0 01-3.048.006 2.145 2.145 0 01-.005-3.038l47.926-47.938-1.443-1.466a2.101 2.101 0 010-2.966l3.523-3.524 3.53-5.892a1.398 1.398 0 011.918-.48zm70.067-59.08l36.435 36.436-1.99 1.99-36.13-35.068-42.298 42.299 1.532 1.5a2.116 2.116 0 010 2.942l-3.456 3.458-3.482 5.81a1.398 1.398 0 01-2.192.265l-.198-.2-3.803 3.827a2.113 2.113 0 01-2.942 0 2.116 2.116 0 010-2.943l3.814-3.816-2.941-2.92-3.815 3.804a2.045 2.045 0 01-2.92 0 2.047 2.047 0 010-2.92l3.793-3.816-.208-.21a1.398 1.398 0 01.278-2.181l5.813-3.484 3.457-3.458c.816-.817 2.125-.817 2.919 0l1.532 1.533 42.848-42.847a2.796 2.796 0 013.954 0z"></path>

              {/* Right dot */}
                <path
                    id="path-7"
                    d="M273.14 354.795c.099.06.19.13.271.212l9.351 9.373a1.398 1.398 0 01-.268 2.185l-5.898 3.555-3.501 3.502c-.817.817-2.148.817-2.987 0l-1.442-1.466-47.927 47.938a2.159 2.159 0 01-3.048.006 2.145 2.145 0 01-.005-3.038l47.926-47.938-1.443-1.466a2.101 2.101 0 010-2.966l3.523-3.524 3.53-5.892a1.398 1.398 0 011.918-.48zm70.067-59.08l36.435 36.436-1.99 1.99-36.13-35.068-42.298 42.299 1.532 1.5a2.116 2.116 0 010 2.942l-3.456 3.458-3.482 5.81a1.398 1.398 0 01-2.192.265l-.198-.2-3.803 3.827a2.113 2.113 0 01-2.942 0 2.116 2.116 0 010-2.943l3.814-3.816-2.941-2.92-3.815 3.804a2.045 2.045 0 01-2.92 0 2.047 2.047 0 010-2.92l3.793-3.816-.208-.21a1.398 1.398 0 01.278-2.181l5.813-3.484 3.457-3.458c.816-.817 2.125-.817 2.919 0l1.532 1.533 42.848-42.847a2.796 2.796 0 013.954 0z"></path>
                {/* <rect id="path-10" width="140" height="140" x="0" y="1" rx="8"></rect> */}
                <circle
                fill="#09B744"
                  id="path-10" 
                  cx="70" 
                  cy="70" 
                  r="70"
                  ></circle>
                <linearGradient id="linearGradient-12" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#fff"></stop>
                    <stop offset="99.995%" stopColor="#fff"></stop>
                </linearGradient>
              {/* Center icon */}
                <path
                    id="path-13"
                    d="M52.673 52c7.414 0 13.841 4.688 16.437 11.364 1.858-2.966 3.956-5.807 6.676-7.788 5.813-4.328 14.339-4.696 20.517-.743 6.179 3.835 9.513 11.49 8.526 18.809-.622 4.445-3.094 8.28-6.676 11.122-2.472 2.097-5.814 3.702-9.148 3.827h-1.974a18.59 18.59 0 01-3.707-.368c-2.47-.493-4.942-1.236-7.04-2.473-1.85-.87-3.583-1.73-4.943-3.092 1.235-1.12 3.956-4.947 3.831-4.947 3.467 2.348 7.539 4.454 11.743 4.329 4.321-.376 8.65-3.585 10.01-7.788 1.36-4.328 0-9.384-3.582-12.233-3.583-2.85-8.899-3.217-12.606-.87-4.08 2.466-6.062 7.287-8.16 11.49-1.36 2.967-3.094 5.808-5.44 8.281-2.1 2.348-4.77 3.877-7.54 4.947-2.172.827-4.453 1.479-6.924 1.479C42.912 87.346 35 79.44 35 69.673 35 59.905 42.912 52 52.673 52zm-.116 7.036c-5.814 0-10.632 4.696-10.632 10.629 0 5.932 4.818 10.628 10.756 10.628 5.938 0 10.508-4.821 10.508-10.628 0-5.808-4.819-10.63-10.632-10.63zm33.985 6.426c3.094.493 5.192 3.459 4.694 6.425-.497 3.092-3.458 5.19-6.427 4.696-3.093-.493-5.192-3.334-4.694-6.425.498-3.092 3.458-5.19 6.427-4.696z"></path>
            </defs>
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g transform="translate(12)">
                    {/* <g transform="rotate(-45 200.426 162.426)">
                        <use fill="#000" filter="url(#filter-3)" xlinkHref="#path-2"></use>
                        <use fill="url(#linearGradient-1)" xlinkHref="#path-2"></use>
                    </g> */}
                    {/* <g transform="rotate(-45 102.35 357.812)">
                        <use fill="#000" filter="url(#filter-6)" xlinkHref="#path-5"></use>
                        <use fill="url(#linearGradient-4)" xlinkHref="#path-5"></use>
                    </g> */}
                    {/* <g transform="scale(-1 1) rotate(-45 0 1078.093)">
                        <use fill="#000" filter="url(#filter-8)" xlinkHref="#path-7"></use>
                        <use fill="url(#linearGradient-4)" xlinkHref="#path-7"></use>
                    </g> */}
                  <Circles data={data} className={classes.top} />
                  <Circles data={data} className={classes.left} />
                  <Circles data={data} className={classes.right} />
                    <g transform="translate(130 214)">
                        <g>
                            <use fill="#000" filter="url(#filter-11)" xlinkHref="#path-10"></use>
                            <use fill="#FFF" xlinkHref="#path-10"></use>
                            <rect
                                width="139"
                                height="139"
                                x="0.5"
                                y="1.5"
                                fill="url(#linearGradient-9)"
                                stroke="#E5E5E5"
                                strokeLinejoin="round"
                                rx="8"></rect>
                        </g>
                        <g>
                            <use fill="#000" filter="url(#filter-14)" xlinkHref="#path-13"></use>
                            <use fill="url(#linearGradient-12)" xlinkHref="#path-13"></use>
                        </g>
                    </g>


                  {/* Left circle */}
                    <g transform="translate(7 433)">
                        <g transform="translate(32)">
                            <circle
                                cx="50"
                                cy="50"
                                r="49.643"
                                fill="#FFF"
                                stroke="#ECECEC"
                                strokeWidth="0.714"></circle>
                            <path
                                fill="#9DA9B7"
                                fillRule="nonzero"
                                d="M61.847 47.869L48.406 73.46c-.217.432-.542.54-.976.54-.65 0-1.192-.54-1.084-1.296l2.493-15.657c.109-.648-.433-1.188-1.084-1.188h-8.671c-.868 0-1.301-.864-.976-1.62l13.441-25.7c.217-.431.542-.539.976-.539.65 0 1.192.54 1.084 1.296l-2.493 15.657c-.109.648.433 1.296 1.084 1.296h8.672c.867 0 1.409.864.975 1.62z"></path>
                        </g>
                    </g>
                  {/* Right circle */}
                    <g transform="translate(228 437)">
                        <g transform="translate(33)">
                            <circle
                                cx="50"
                                cy="50"
                                r="49.643"
                                fill="#FFF"
                                stroke="#ECECEC"
                                strokeWidth="0.714"></circle>
                            <path
                                fill="#09274B"
                                fillRule="nonzero"
                                d="M69.387 47.096L51.054 32.369a1.69 1.69 0 00-2.108 0L30.613 47.096a1.621 1.621 0 00.463 2.798 1.692 1.692 0 001.645-.262l2.28-1.833v15.292C35 65.802 37.238 68 40 68H60c2.761 0 5-2.198 5-4.909V47.799l2.279 1.833c.461.37 1.088.47 1.645.262a1.621 1.621 0 00.463-2.799zm-22.72 17.631v-8.181c0-.904.746-1.637 1.666-1.637h3.334c.92 0 1.666.733 1.666 1.637v8.181h-6.666zm15-1.636c0 .904-.747 1.636-1.667 1.636h-3.334v-8.181c0-2.711-2.238-4.91-5-4.91h-3.333c-2.761 0-5 2.199-5 4.91v8.181H40c-.92 0-1.666-.732-1.666-1.636V45.124L50 35.752l11.666 9.372v17.967z"
                                opacity="0.4"></path>
                        </g>
                    </g>
                  {/* Top circle */}
                    <g transform="translate(118)">
                        <g transform="translate(32 26)">
                            <circle
                                cx="50"
                                cy="50"
                                r="49.643"
                                fill="#FFF"
                                stroke="#ECECEC"
                                strokeWidth="0.714"></circle>
                            <path
                                fill="#09274B"
                                fillRule="nonzero"
                                d="M35.856 28C32.639 28 30 30.645 30 33.868c0 3.224 2.64 5.869 5.856 5.869 3.217 0 5.856-2.645 5.856-5.869 0-3.223-2.64-5.868-5.856-5.868zm0 2.934a2.91 2.91 0 012.928 2.934 2.91 2.91 0 01-2.928 2.935 2.91 2.91 0 01-2.928-2.935 2.91 2.91 0 012.928-2.934zm2.776 10.255v.015a1.498 1.498 0 00-1.22.948l-7.32 20.05c-.323.882.435 1.97 1.372 1.972h17.08v4.89H44c-.766.042-1.425.776-1.385 1.544.04.767.771 1.429 1.537 1.39h11.712c.772.009 1.48-.693 1.48-1.467 0-.773-.708-1.475-1.48-1.467h-4.392v-4.89h17.08c.937 0 1.695-1.09 1.373-1.972l-7.32-20.05a1.503 1.503 0 00-1.373-.948c-7.527-.09-15.086.132-22.6-.015zm1.174 2.934h4.666l-.518 3.423h-5.399l1.25-3.423zm7.625 0h6.13l.519 3.423h-7.168l.519-3.423zm9.089 0h3.69l1.25 3.423h-4.422l-.518-3.423zm-19.032 6.358h6.008l-.594 3.912h-6.848l1.434-3.912zm8.967 0h8.082l.595 3.912H45.86l.595-3.912zm11.04 0h5.033l1.434 3.912H58.09l-.595-3.912zm-22.508 6.846h7.457l-.595 3.912h-8.296l1.434-3.912zm10.416 0H55.59l.594 3.912H44.808l.595-3.912zm13.145 0h6.481l1.434 3.912h-7.32l-.595-3.912z"
                                opacity="0.4"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};
export default PlugSvg;
