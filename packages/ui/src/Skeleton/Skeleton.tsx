import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import clsx from 'clsx';

export interface SkeletonProps {
  animation?: 'pulse' | 'wave' | 'shimmer' | false;
  children?: React.ReactNode;
  className?: string;
  variant?: 'circle' | 'rectangle' | 'text';
  height?: number | string;
  width?: number | string;
  style?: any;
}

const shimmerKeyframe = keyframes`
  0% {
    background-position: calc(var(--kukui-placeholder-shimmer-offset)*-1) 0;
  }
  100% {
    background-position: var(--kukui-placeholder-shimmer-offset) 0;
  }
`;

const SkeletonRoot = styled('span')<SkeletonProps>(props => ({
  display: 'block',
  height: '1em',
  backgroundImage:
    'linear-gradient(90deg,var(--kukui-skeleton-bg) 0,var(--kukui-skeleton-bg-shimmer) 50%,var(--kukui-skeleton-bg))',
  backgroundSize:
    'calc(var(--kukui-skeleton-shimmer-offset)*2) calc(var(--kukui-skeleton-shimmer-offset)/2)',

  ...(props.variant === 'text' && {
    borderRadius: '4px',
  }),
  ...(props.variant === 'circle' && {
    borderRadius: '50%',
  }),
  ...(props.animation === 'shimmer' && {
    animation: `${shimmerKeyframe} 1s linear infinite forwards`,
  }),
}));

const Skeleton = ({
  animation = 'shimmer',
  className,
  height,
  width,
  variant = 'text',
  style,
  children,
}: SkeletonProps) => {
  return (
    <SkeletonRoot
      className={clsx(
        'KukuiSkeleton',
        `KukuiSkeleton--${animation}`,
        `KukuiSkeleton--${variant}`,
        className
      )}
      animation={animation}
      variant={variant}
      style={{
        width,
        height,
        ...style,
      }}
    >
      {children}
    </SkeletonRoot>
  );
};

export default Skeleton;
