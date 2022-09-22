import styled from '@emotion/styled';
import { shouldForwardProp } from '@kukui/system';
import { HTMLAttributes } from 'react';
import IconButton from '../IconButton';
import { XMarkSolid } from '../lib/icons';
import SvgIcon from '../SvgIcon';

export interface BadgeProps extends HTMLAttributes<any> {
  color?: 'primary' | 'error' | 'info' | 'success' | 'warning';
  content?: string;
  onRemove?: () => void;
}
const IGNORED_PROPS = ['color'];

const BadgeRoot = styled('div', {
  shouldForwardProp: prop =>
    shouldForwardProp(prop) && !IGNORED_PROPS.includes(prop as any),
})<BadgeProps>(props => ({
  padding: '3.5px 6.5px',
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: 1,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'baseline',
  borderRadius: '0.325rem',
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: 'var(--kukui-accent-100)',
  color: 'var(--kukui-accent-500)',
  ...(props.color === 'success' && {
    backgroundColor: 'var(--kukui-lime-100)',
    color: 'var(--kukui-lime-800)',
  }),
  ...(props.color === 'warning' && {
    backgroundColor: 'var(--kukui-yellow-100)',
    color: 'var(--kukui-yellow-900)',
  }),
}));

const Badge = (props: BadgeProps) => {
  const { content, color, onRemove, ...other } = props;

  return (
    <BadgeRoot className="KukuiBadge" color={color} {...other}>
      {content}{' '}
      {onRemove && (
        <SvgIcon
          className="KukuiBadgeRemove"
          onClick={onRemove}
          sx={{
            fontSize: 16,
            marginLeft: 6,
            cursor: 'pointer',
            borderRadius: '50%',
            padding: 2,
            background: 'var(--kukui-accent-300)',
          }}
        >
          <XMarkSolid />
        </SvgIcon>
      )}
    </BadgeRoot>
  );
};

export default Badge;
