import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M364.4 170.1c16.8-1 33.7 1.2 49.8 6.8l54.3-54.4c6.3-6.2 16.4-6.3 22.7 0 6.2 6.2 6.2 16.4 0 22.6l-46.9 46c2.6 2.6 5.2 4.5 7.6 6.5-13 3.3-25.4 8.1-37 14.2-35.9-17.7-80.5-11.7-110.3 17.3l33.9 34.8c3.1 2.2 6.4 5.8 9.9 8.1-6.9 10.6-12.6 21.1-17.2 33.1-36.8-21.2-85.3-16.4-117.1 15.4l33.9 33.9c19.5 19.5 48.4 23.8 72 12.9v-.2c0 12 1 22.8 2.1 33.3-7.1 2.6-15.3 4.1-23.5 3.7l6 6c6.2 7.1 6.2 17.2 0 23.5l-33.9 33.9c-37.5 37.5-98.3 37.5-135.8 0l-34.8-33.9-72.62 73.5a15.91 15.91 0 0 1-22.629 0c-6.249-6.2-6.249-16.3-.002-22.6l73.511-74.4-33.91-33c-37.493-37.5-37.498-98.3-.01-135.8l33.91-33.9c6.24-6.3 16.37-6.3 21.75 0l6 6c2.1-22.8 11.4-45.2 28.8-62.6l33.9-33.9c6.3-6.3 16.4-6.3 22.7 0l5.9 5.9c1.3-22.7 10.6-45.12 28-62.51l33.9-33.92c6.3-6.25 16.4-6.25 22.6 0l22.6 22.6c5.8 5.8 11 11.13 15.4 18.57l46.8-46.84c5.4-6.25 16.4-6.25 22.7 0 6.2 6.25 6.2 16.38 0 22.63L335 97.69c5.6 16.11 7.8 33.01 6.8 49.81L468.5 20.7c6.3-6.25 16.4-6.25 22.7-.01 6.2 6.25 6.2 16.38 0 22.63L364.4 170.1zm-173-8-11.3-11.3-22.6 22.6c-24.9 25-24.9 65.5.1 90.5l33.9 33.9.3-.3c37.1-38.4 37-98-.4-135.4zm56.6 11.3 33.9 33.9c37.5-37.5 37.5-98.2 0-135.7l-11.3-11.29-22.6 22.6c-25 24.99-25 65.49 0 90.49zM89.66 241.3l-22.6 22.6c-24.99 25-24.98 65.5.01 90.5l33.03 33.9c38.3-37.5 38.3-98.2.8-135.7l-11.24-11.3zM259.3 410.1c-37.4-36.6-98.2-36.6-135.7 0l33.9 34.8c25 25 65.5 25 90.5 0l22.6-22.6-11.3-12.2zm212.7 13c0-12.4 10.7-24 24-24s24 11.6 24 24c0 14.2-10.7 24-24 24s-24-9.8-24-24zm23.1-136c9.7 0 16 8.1 16 16v64c0 9.7-6.3 16-16 16-7.9 0-16-6.3-16-16v-64c0-7.9 8.1-16 16-16zm144.9 80c0 80.4-64.5 144-144 144s-144-63.6-144-144c0-78.6 64.5-144 144-144s144 65.4 144 144zm-144-112c-61.9 0-112 51-112 112 0 62.8 50.1 112 112 112s112-49.2 112-112c0-61-50.1-112-112-112z" />
  </svg>
);

const SvgWheatAwnCircleExclamation = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWheatAwnCircleExclamation;
