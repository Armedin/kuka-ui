import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M592 400H432c-26.51 0-48 21.49-48 48v16c0 26.51 21.49 48 48 48h160c26.51 0 48-21.49 48-48v-16c0-26.5-21.5-48-48-48zm16 64c0 8.822-7.178 16-16 16H432c-8.822 0-16-7.178-16-16v-16c0-8.822 7.178-16 16-16h160c8.822 0 16 7.178 16 16v16zM503.3 1.803c-7.859-4.094-17.5-.969-21.56 6.875L312.5 336H49.11C22.03 336 0 358 0 385.1v77.81C0 489.1 22.03 512 49.11 512h158.3c30.84 0 58.81-17.03 73.02-44.44l229.8-444.2c4.07-7.84.97-17.495-6.93-21.557zM96 480H49.11C39.67 480 32 472.3 32 462.9v-77.81c0-9.436 7.672-17.09 17.11-17.09H96v112zm156-27.1c-8.6 16.7-25.7 27.1-44.6 27.1H128V368.9h167.9l-43.9 84z" />
  </svg>
);

const SvgHockeyStickPuck = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHockeyStickPuck;
