import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M511.9 191.1c-.094-30.83-25.34-55.98-56.16-55.98-7.695 0-23.78 1.151-23.78 16.73 0 9.793 8.218 16.05 15.99 16.05 2.886 0 3.756-.737 7.474-.737 12.75 0 24.31 10.65 24.34 23.92L480 341.1c0 57.64-34.06 109.7-84.75 129.5a16.004 16.004 0 0 0-10.2 14.9c0 8.678 7.025 16 16.01 16 9.64 0 110.94-42.9 110.94-160.4l-.1-150zm-112.1.8c-.049-30.85-25.17-55.94-56-55.94-30.88 0-56 25.13-56 56.02v9.225l-95.13-96.05C181.7 94.22 166.8 88 151.5 88c-35.37 0-48.89 28.91-50.89 33.55-4.3-1.05-8.7-1.55-13.12-1.55-13.76 0-26.89 5.004-36.96 14.09-4.331 3.906-18.53 18.07-18.53 41.6 0 4.353.513 8.67 1.505 12.86C9.673 198.8.001 222 .001 239.8c0 14.78 5.929 29.15 16.39 39.63l9.346 9.354C.692 304.8.012 330.9.012 335.8c0 15.59 6.473 31.21 19.08 42.27l104.6 92.63C154.3 497.4 193.2 512 233.5 512c95.9 0 166.5-78.8 166.5-170.9l-.2-149.2zM233.5 480c-32.56 0-64-11.82-88.56-33.31l-104.7-92.73c-5.417-4.751-8.186-11.4-8.186-18.08 0-13.22 10.7-24.01 24-24.01 5.615 0 11.26 1.959 15.81 5.932l52.19 49.41a8.94 8.94 0 0 0 6.135 2.426c4.806 0 8.972-3.871 8.972-8.979a8.953 8.953 0 0 0-2.628-6.349L39.03 256.8c-4.69-4.7-7.03-10.9-7.03-17 0-12.5 9.741-23.72 23.49-23.72 6.678 0 13.44 2.682 18.44 7.688l95.81 95.89a9.913 9.913 0 0 0 7.031 2.914c5.326 0 9.945-4.289 9.945-9.952 0-2.547-.97-5.094-2.912-7.036L71.03 192.7c-4.69-4.7-7.93-10.8-7.93-17 0-12.49 9.739-23.72 23.49-23.72 6.676 0 13.44 2.682 18.44 7.688l111.8 111.9a9.907 9.907 0 0 0 7.031 2.914c5.326 0 9.945-4.289 9.945-9.952 0-2.547-.97-5.095-2.912-7.038L135 160.7c-4.7-4.7-7-10.8-7-17 0-12.5 9.7-23.7 23.5-23.7 6.678 0 13.44 2.682 18.44 7.688l133.7 135c1.928 1.928 4.297 2.793 6.621 2.793 4.865 0 9.533-3.781 9.533-9.492l.137-64c0-13.27 10.61-24.02 23.87-24.02 13.24 0 23.98 10.73 24 23.98L368 341.1c0 74.3-55.6 138.9-134.5 138.9zM383.4 96c5.125 0 10.16-2.453 13.25-7.016l32.56-48a15.952 15.952 0 0 0 2.744-8.951c0-8.947-7.273-16.04-15.97-16.04a16.034 16.034 0 0 0-13.27 7.02l-32.56 48a15.975 15.975 0 0 0-2.754 8.957c0 8.91 7.3 16.03 16 16.03zm-140.1-7.02c3.1 4.57 8.1 7.02 13.3 7.02 8.762 0 15.99-7.117 15.99-16.03 0-3.088-.89-6.205-2.744-8.951l-32.56-48C234.2 18.46 229.1 15.98 223.1 15.98c-8.664 0-15.98 7.074-15.98 16.05 0 3.086.89 6.205 2.744 8.951L243.3 88.98zM320 96c8.844 0 16-7.156 16-16V16c0-8.844-7.2-16-16-16s-16 7.156-16 16v64c0 8.84 7.2 16 16 16z" />
  </svg>
);

const SvgHandsClapping = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandsClapping;