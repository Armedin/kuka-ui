import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M376 416H71.35l-32.94 43.78c-4.426 6.199-6.424 13.05-6.424 19.68C31.99 496.4 45.07 512 64.04 512h320c18.96 0 32.05-15.61 32.05-32.22 0-6.49-1.998-13.16-6.424-19.09L376 416zm4.1-32c41.7-40.6 67.9-97.1 67.9-159.1C448 101.1 347.7 1.8 224 1.8S0 100.2 0 224c0 62.88 26.12 119.4 67.88 159.1l312.22.9zM227.7 202.9l49.41-20.62.406-.375 20.59-49.31C299.1 130.5 301.7 128.9 304 128.9c2.281 0 4.969 1.625 5.969 3.688l20.72 49.63 49.63 20.69C382.3 203.9 384 206.6 384 207.9c0 3.125-1.656 5.812-3.688 6l-49.63 20.75-20.72 49.63C308.1 286.3 306.3 288 304 288c-2.312-.063-4.906-.813-5.906-2.812L277.4 235.5l-49.63-20.69c-2-1-3.656-3.688-3.656-5.938-.014-2.172 1.586-4.972 3.586-5.972zm-112.6-77.6 29.78-12.44 12.41-29.81c.594-1.188 1.281-2.188 3.594-2.188 2.281 0 2.094 1 2.688 2.188l12.44 29.81 29.78 12.38C207 125.9 208 127.5 208 128.9c0 1.312-1 2.938-2.188 3.562l-28.91 11.5L164.5 173.8c-1.5 2.1-3.1 3.1-3.6 3.1s-2.969-1-3.594-2.25L144.9 144.8l-29.8-12.4c-1.2-.6-2.2-2.1-2.2-3.5s1-3 2.2-3.6z" />
  </svg>
);

const SvgCrystalBallSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCrystalBallSolid;
