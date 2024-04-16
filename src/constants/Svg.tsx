import React from 'react'

export const Mobile: React.FC<{ activeDevice: any }> = ({activeDevice}) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve" className={`w-full h-full ${activeDevice=='mobile' && 'clicked'} transition duration-300`}>

<defs>
</defs>
<g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(0 -2.842170943040401e-14) scale(2.81 2.81)">
	<path d="M 71.326 90 H 18.674 C 8.361 90 0 81.639 0 71.326 V 18.674 C 0 8.361 8.361 0 18.674 0 h 52.652 C 81.639 0 90 8.361 90 18.674 v 52.652 C 90 81.639 81.639 90 71.326 90 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: `${activeDevice=='mobile'?'var(--color2)':'none'}`, fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
</g>
<g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(46.17984832069338 46.17984832069335) scale(1.82 1.82)" >
	<path d="M 63.063 3 c 1.157 0 2.098 0.941 2.098 2.098 v 79.803 c 0 1.157 -0.941 2.098 -2.098 2.098 H 26.937 c -1.157 0 -2.098 -0.941 -2.098 -2.098 V 5.098 C 24.839 3.941 25.78 3 26.937 3 H 63.063 M 63.063 0 H 26.937 c -2.816 0 -5.098 2.283 -5.098 5.098 v 79.803 c 0 2.816 2.283 5.098 5.098 5.098 h 36.126 c 2.816 0 5.098 -2.283 5.098 -5.098 V 5.098 C 68.161 2.283 65.879 0 63.063 0 L 63.063 0 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: `${activeDevice=='mobile'?'black':'var(--color1)'}`, fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 32.176 1.992 c 0 2.824 1.857 5.134 4.126 5.134 h 17.396 c 2.269 0 4.126 -2.31 4.126 -5.134 H 32.176 z M 47.862 4.5 h -9.466 c -0.276 0 -0.5 -0.224 -0.5 -0.5 s 0.224 -0.5 0.5 -0.5 h 9.466 c 0.276 0 0.5 0.224 0.5 0.5 S 48.139 4.5 47.862 4.5 z M 50.908 4.696 c -0.384 0 -0.696 -0.312 -0.696 -0.696 s 0.312 -0.696 0.696 -0.696 S 51.604 3.616 51.604 4 S 51.292 4.696 50.908 4.696 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: `${activeDevice=='mobile'?'black':'var(--color1)'}`, fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
</g>
</svg>
    </>
  )
}

export const Tablet: React.FC<{ activeDevice: any }> = ({activeDevice}) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve" className={`w-full h-full ${activeDevice=='tablet' && 'clicked'} transition duration-300`}>

        <defs>
        </defs>
        <g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(0 -2.842170943040401e-14) scale(2.81 2.81)" >
	        <path d="M 71.326 90 H 18.674 C 8.361 90 0 81.639 0 71.326 V 18.674 C 0 8.361 8.361 0 18.674 0 h 52.652 C 81.639 0 90 8.361 90 18.674 v 52.652 C 90 81.639 81.639 90 71.326 90 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill:  `${activeDevice=='tablet'?'var(--color2)':'none'}`, fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
        </g>
        <g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(46.17984832069338 46.17984832069335) scale(1.82 1.82)" >
	        <path d="M 16.819 88.339 c -1.862 0 -3.377 -1.516 -3.377 -3.378 V 5.039 c 0 -1.862 1.515 -3.377 3.377 -3.377 h 56.361 c 1.862 0 3.378 1.515 3.378 3.377 v 79.922 c 0 1.862 -1.516 3.378 -3.378 3.378 H 16.819 z M 45 79.447 c -2.441 0 -4.427 1.985 -4.427 4.426 c 0 2.441 1.986 4.427 4.427 4.427 c 2.441 0 4.427 -1.985 4.427 -4.427 C 49.427 81.433 47.441 79.447 45 79.447 z M 16.819 1.963 c -1.696 0 -3.076 1.38 -3.076 3.076 v 74.048 h 62.512 V 5.039 c 0 -1.696 -1.379 -3.076 -3.075 -3.076 H 16.819 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: `${activeDevice=='tablet'?'black':'var(--color1)'}`, fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	        <path d="M 74.897 80.749 v 4.212 c 0 0.93 -0.786 1.716 -1.716 1.716 H 50.403 c 0.437 -0.84 0.685 -1.793 0.685 -2.804 c 0 -1.141 -0.316 -2.21 -0.864 -3.124 h 24.371 H 74.897 M 39.776 80.749 c -0.549 0.914 -0.864 1.983 -0.864 3.124 c 0 1.01 0.247 1.964 0.685 2.804 H 16.819 c -0.93 0 -1.716 -0.786 -1.716 -1.716 v -4.212 h 0.302 H 39.776 M 73.181 0 H 16.819 c -2.771 0 -5.039 2.268 -5.039 5.039 v 79.922 c 0 2.771 2.268 5.039 5.039 5.039 h 56.361 c 2.771 0 5.039 -2.268 5.039 -5.039 V 5.039 C 78.22 2.268 75.952 0 73.181 0 L 73.181 0 z M 15.405 77.426 V 5.039 c 0 -0.766 0.648 -1.414 1.414 -1.414 h 56.361 c 0.766 0 1.414 0.647 1.414 1.414 v 72.387 H 15.405 L 15.405 77.426 z M 45 86.639 c -1.527 0 -2.765 -1.238 -2.765 -2.765 c 0 -1.527 1.238 -2.765 2.765 -2.765 s 2.765 1.238 2.765 2.765 C 47.765 85.401 46.527 86.639 45 86.639 L 45 86.639 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: `${activeDevice=='tablet'?'black':'var(--color1)'}`, fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
        </g>
      </svg>
    </>
  )
} 

export const Laptop: React.FC<{ activeDevice: any }> = ({activeDevice}) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve" className={`w-full h-full ${activeDevice=='laptop' && 'clicked'} transition duration-300`}>

        <defs>
        </defs>
        <g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(0 -2.842170943040401e-14) scale(2.81 2.81)" >
	        <path d="M 71.326 90 H 18.674 C 8.361 90 0 81.639 0 71.326 V 18.674 C 0 8.361 8.361 0 18.674 0 h 52.652 C 81.639 0 90 8.361 90 18.674 v 52.652 C 90 81.639 81.639 90 71.326 90 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill:  `${activeDevice=='laptop'?'var(--color2)':'none'}`, fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
        </g>
        <g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(46.17984832069338 46.17984832069335) scale(1.82 1.82)" >
	        <path d="M 82.27 17.847 c 0.149 0 0.27 0.121 0.27 0.27 v 46.165 H 7.459 V 18.117 c 0 -0.149 0.121 -0.27 0.27 -0.27 H 82.27 M 82.27 14.764 H 7.73 c -1.852 0 -3.353 1.501 -3.353 3.353 v 49.247 h 81.246 V 18.117 C 85.623 16.265 84.122 14.764 82.27 14.764 L 82.27 14.764 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: `${activeDevice=='laptop'?'black':'var(--color1)'}`, fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	        <path d="M 88.293 70.108 c 0 1.89 -1.532 3.421 -3.421 3.421 H 5.128 c -1.89 0 -3.421 -1.532 -3.421 -3.421" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: `${activeDevice=='laptop'?'black':'var(--color1)'}`, fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	        <path d="M 84.872 75.236 H 5.128 C 2.3 75.236 0 72.935 0 70.107 h 3.414 c 0 0.946 0.769 1.715 1.714 1.715 h 79.744 c 0.946 0 1.715 -0.769 1.715 -1.715 H 90 C 90 72.935 87.699 75.236 84.872 75.236 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: `${activeDevice=='laptop'?'black':'var(--color1)'}`, fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
        </g>
      </svg>
    </>
  )
}

export const Desktop: React.FC<{ activeDevice: any }> = ({activeDevice}) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve" className={`w-full h-full ${activeDevice=='desktop' && 'clicked'} transition duration-300`}>

      <defs>
      </defs>
        <g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(0 -2.842170943040401e-14) scale(2.81 2.81)" >
	        <path id='comp' d="M 71.326 90 H 18.674 C 8.361 90 0 81.639 0 71.326 V 18.674 C 0 8.361 8.361 0 18.674 0 h 52.652 C 81.639 0 90 8.361 90 18.674 v 52.652 C 90 81.639 81.639 90 71.326 90 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill:  `${activeDevice=='desktop'?'var(--color2)':'none'}`, fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
        </g>
        <g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(46.17984832069338 46.17984832069335) scale(1.82 1.82)" >
	        <path d="M 62.178 83.076 H 27.822 c -2.651 0 -4.808 -2.156 -4.808 -4.808 s 2.157 -4.809 4.808 -4.809 h 5.228 v -3.877 H 7.883 C 3.537 69.583 0 66.047 0 61.7 V 14.807 c 0 -4.347 3.537 -7.883 7.883 -7.883 h 74.234 c 4.347 0 7.883 3.537 7.883 7.883 V 61.7 c 0 4.347 -3.536 7.883 -7.883 7.883 H 56.949 v 3.877 h 5.229 c 2.651 0 4.809 2.157 4.809 4.809 S 64.829 83.076 62.178 83.076 z M 27.822 77.46 c -0.446 0 -0.808 0.362 -0.808 0.809 c 0 0.445 0.362 0.808 0.808 0.808 h 34.355 c 0.446 0 0.809 -0.362 0.809 -0.808 c 0 -0.446 -0.362 -0.809 -0.809 -0.809 h -9.229 V 65.583 h 29.168 c 2.141 0 3.883 -1.742 3.883 -3.883 V 14.807 c 0 -2.141 -1.742 -3.883 -3.883 -3.883 H 7.883 C 5.742 10.923 4 12.666 4 14.807 V 61.7 c 0 2.141 1.742 3.883 3.883 3.883 H 37.05 V 77.46 H 27.822 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: `${activeDevice=='desktop'?'black':'var(--color1)'}`, fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	        <rect x="35.05" y="65.58" rx="0" ry="0" width="19.9" height="4" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: `${activeDevice=='desktop'?'black':'var(--color1)'}`, fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) "/>
	        <rect x="35.05" y="73.46" rx="0" ry="0" width="19.9" height="4" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: `${activeDevice=='desktop'?'black':'var(--color1)'}`, fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) "/>
        </g>
      </svg>
    </>
  )
}

export const Logo = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve" className='w-full h-full'>

<defs>
</defs>
<g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(0 -2.842170943040401e-14) scale(2.81 2.81)" >
	<path d="M 71.326 90 H 18.674 C 8.361 90 0 81.639 0 71.326 V 18.674 C 0 8.361 8.361 0 18.674 0 h 52.652 C 81.639 0 90 8.361 90 18.674 v 52.652 C 90 81.639 81.639 90 71.326 90 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'var(--bg1)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
</g>
<g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(46.17984832069338 46.17984832069335) scale(1.82 1.82)" >
	<path d="M 11.615 39.383 H 5.098 C 2.283 39.383 0 41.665 0 44.481 v 22.275 c 0 2.816 2.283 5.098 5.098 5.098 h 6.517 c 2.816 0 5.098 -2.283 5.098 -5.098 V 44.481 C 16.713 41.665 14.431 39.383 11.615 39.383 z M 10.614 41.629 c 0.247 0 0.447 0.201 0.447 0.448 c 0 0.247 -0.201 0.447 -0.447 0.447 c -0.247 0 -0.448 -0.201 -0.448 -0.447 C 10.166 41.83 10.367 41.629 10.614 41.629 z M 5.848 41.685 h 3.416 c 0.217 0 0.393 0.176 0.393 0.393 S 9.48 42.47 9.264 42.47 H 5.848 c -0.217 0 -0.393 -0.176 -0.393 -0.393 S 5.631 41.685 5.848 41.685 z M 13.713 66.756 c 0 1.157 -0.941 2.098 -2.098 2.098 H 5.098 C 3.941 68.854 3 67.913 3 66.756 V 44.481 c 0 -0.803 0.458 -1.493 1.122 -1.846 c 0.219 0.648 0.71 1.104 1.279 1.104 h 5.911 c 0.569 0 1.06 -0.456 1.279 -1.104 c 0.664 0.353 1.122 1.043 1.122 1.846 V 66.756 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'var(--color1)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 84.961 34.286 H 66.726 c -2.771 0 -5.039 2.268 -5.039 5.039 v 28.276 c 0 2.771 2.268 5.039 5.039 5.039 h 18.235 c 2.771 0 5.039 -2.268 5.039 -5.039 V 39.325 C 90 36.553 87.732 34.286 84.961 34.286 z M 75.843 71.207 c -0.651 0 -1.178 -0.528 -1.178 -1.179 c 0 -0.651 0.528 -1.178 1.178 -1.178 c 0.651 0 1.178 0.528 1.178 1.178 C 77.022 70.68 76.494 71.207 75.843 71.207 z M 87 67.281 H 64.687 V 39.325 c 0 -1.105 0.934 -2.039 2.039 -2.039 h 18.235 c 1.105 0 2.039 0.934 2.039 2.039 V 67.281 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'var(--color1)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 50.139 65.019 h 7.548 v -9.401 H 20.713 v 9.401 h 12.873 c -0.482 2.278 -1.45 4.555 -2.907 6.833 c -0.301 0.47 0.039 1.088 0.597 1.088 h 4.001 h 2.279 h 4.001 h 0.611 h 4.001 h 2.279 h 4.001 c 0.558 0 0.898 -0.617 0.597 -1.088 C 51.589 69.574 50.621 67.297 50.139 65.019 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'var(--color1)', fillRule: 'evenodd', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 74.188 30.286 h 3 V 22.04 c 0 -1.525 -1.237 -2.762 -2.762 -2.762 H 9.299 c -1.525 0 -2.762 1.237 -2.762 2.762 v 13.342 h 3 V 22.278 h 64.651 V 30.286 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'var(--color1)', fillRule: 'evenodd', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
</g>
</svg>
    </>
  )
}

export const Range = () => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve" className='h-full w-full'>

<defs>
</defs>
<g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(40.54163424124515 40.54163424124512) scale(1.93 1.93)" >
	<path d="M 87 48 H 38.388 c -1.657 0 -3 -1.343 -3 -3 c 0 -1.657 1.343 -3 3 -3 H 87 c 1.657 0 3 1.343 3 3 C 90 46.657 88.657 48 87 48 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 22.915 48 H 3 c -1.657 0 -3 -1.343 -3 -3 c 0 -1.657 1.343 -3 3 -3 h 19.915 c 1.657 0 3 1.343 3 3 C 25.915 46.657 24.571 48 22.915 48 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 87 21.83 H 67.085 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 H 87 c 1.657 0 3 1.343 3 3 S 88.657 21.83 87 21.83 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 51.611 21.83 H 3 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 48.611 c 1.657 0 3 1.343 3 3 S 53.269 21.83 51.611 21.83 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 87 74.17 H 67.085 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 H 87 c 1.657 0 3 1.343 3 3 S 88.657 74.17 87 74.17 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 51.611 74.17 H 3 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 48.611 c 1.657 0 3 1.343 3 3 S 53.269 74.17 51.611 74.17 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 30.651 55.737 c -5.92 0 -10.737 -4.816 -10.737 -10.737 c 0 -5.92 4.816 -10.737 10.737 -10.737 S 41.388 39.08 41.388 45 C 41.388 50.921 36.572 55.737 30.651 55.737 z M 30.651 40.263 c -2.612 0 -4.737 2.125 -4.737 4.737 c 0 2.612 2.125 4.737 4.737 4.737 s 4.737 -2.125 4.737 -4.737 C 35.388 42.388 33.263 40.263 30.651 40.263 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 59.349 29.566 c -5.921 0 -10.737 -4.816 -10.737 -10.737 S 53.428 8.093 59.349 8.093 c 5.92 0 10.736 4.816 10.736 10.737 S 65.269 29.566 59.349 29.566 z M 59.349 14.093 c -2.612 0 -4.737 2.125 -4.737 4.737 s 2.125 4.737 4.737 4.737 c 2.611 0 4.736 -2.125 4.736 -4.737 S 61.96 14.093 59.349 14.093 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 59.349 81.907 c -5.921 0 -10.737 -4.816 -10.737 -10.737 c 0 -5.92 4.816 -10.736 10.737 -10.736 c 5.92 0 10.736 4.816 10.736 10.736 C 70.085 77.091 65.269 81.907 59.349 81.907 z M 59.349 66.434 c -2.612 0 -4.737 2.125 -4.737 4.736 c 0 2.612 2.125 4.737 4.737 4.737 c 2.611 0 4.736 -2.125 4.736 -4.737 C 64.085 68.559 61.96 66.434 59.349 66.434 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
</g>
</svg>
  </>
)

export const Screens = () => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve" className='h-full w-full'>

<defs>
</defs>
<g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(31.576653696498056 31.576653696498028) scale(2.13 2.13)" >
	<path d="M 18.063 38 H 5.098 C 2.283 38 0 40.283 0 43.098 v 34.803 C 0 80.717 2.283 83 5.098 83 h 12.965 c 2.816 0 5.098 -2.283 5.098 -5.098 V 43.098 C 23.161 40.283 20.879 38 18.063 38 z M 15.411 40.402 c 0.33 0 0.598 0.269 0.598 0.598 s -0.268 0.598 -0.598 0.598 S 14.813 41.33 14.813 41 S 15.081 40.402 15.411 40.402 z M 7.521 40.5 h 4.733 c 0.276 0 0.5 0.224 0.5 0.5 s -0.224 0.5 -0.5 0.5 H 7.521 c -0.276 0 -0.5 -0.224 -0.5 -0.5 S 7.244 40.5 7.521 40.5 z M 20.161 77.902 c 0 1.157 -0.941 2.098 -2.098 2.098 H 5.098 C 3.941 80 3 79.059 3 77.902 V 43.098 C 3 41.941 3.941 41 5.098 41 h 0.099 c 0.139 1.247 0.996 2.219 2.035 2.219 h 8.698 c 1.039 0 1.896 -0.972 2.035 -2.219 h 0.099 c 1.157 0 2.098 0.941 2.098 2.098 V 77.902 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 82.018 15.199 H 7.982 c -1.839 0 -3.33 1.491 -3.33 3.33 v 15.494 C 4.801 34.015 4.948 34 5.098 34 h 2.615 V 18.529 c 0 -0.148 0.12 -0.268 0.268 -0.268 h 74.036 c 0.148 0 0.268 0.12 0.268 0.268 v 45.852 H 27.162 v 3.062 h 58.186 V 18.529 C 85.348 16.69 83.857 15.199 82.018 15.199 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 27.162 71.236 v 5.025 h 57.44 c 2.785 0 5.049 -2.249 5.087 -5.025 H 27.162 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
</g>
</svg>
  </>
)

export const Btn: React.FC<{ className: any }> = ({className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve" className={`h-full w-full ${className}`}>

<defs>
</defs>
<g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(0 -2.842170943040401e-14) scale(2.81 2.81)" >
	<circle cx="45" cy="45" r="45" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'var(--bg2)', fillRule: 'nonzero', opacity: 1}} transform="  matrix(1 0 0 1 0 0) "/>
</g>
<g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform="translate(70 80) scale(1.3 1.3)" >
	<path d="M 90 9.17 c 0 -1.28 -0.488 -2.559 -1.465 -3.536 c -1.952 -1.953 -5.118 -1.953 -7.07 0 L 45 42.099 L 8.535 5.634 c -1.953 -1.953 -5.119 -1.953 -7.071 0 c -1.952 1.953 -1.952 5.118 0 7.071 l 40 40 c 0.938 0.938 2.209 1.465 3.536 1.465 s 2.598 -0.526 3.535 -1.465 l 40 -40 C 89.511 11.729 90 10.449 90 9.17 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'var(--color1)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
	<path d="M 90 40.831 c 0 -1.28 -0.488 -2.559 -1.465 -3.536 c -1.952 -1.953 -5.118 -1.953 -7.07 0 L 45 73.759 L 8.535 37.295 c -1.953 -1.953 -5.119 -1.953 -7.071 0 c -1.952 1.954 -1.951 5.119 0 7.071 l 40 39.999 c 1.953 1.953 5.119 1.953 7.071 0 l 40 -39.999 C 89.511 43.39 90 42.111 90 40.831 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'var(--color1)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
</g>
</svg>
  )
}

export const Console = () => {
  return (
    <svg className="svg-icon h-full w-full" style={{verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden'}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M853.333333 810.666667 853.333333 298.666667 170.666667 298.666667 170.666667 810.666667 853.333333 810.666667M853.333333 128C900.266667 128 938.666667 166.4 938.666667 213.333333L938.666667 810.666667C938.666667 857.6 900.266667 896 853.333333 896L170.666667 896C123.733333 896 85.333333 857.6 85.333333 810.666667L85.333333 213.333333C85.333333 165.973333 123.733333 128 170.666667 128L853.333333 128M554.666667 725.333333 554.666667 640 768 640 768 725.333333 554.666667 725.333333M408.746667 554.666667 237.653333 384 358.4 384 499.2 524.8C515.84 541.44 515.84 568.746667 499.2 585.386667L359.253333 725.333333 238.506667 725.333333 408.746667 554.666667Z" style={{fill: 'var(--color1'}}  /></svg>
  )
}