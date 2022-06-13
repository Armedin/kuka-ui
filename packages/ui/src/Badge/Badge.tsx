import styled from '@emotion/styled';
import { shouldForwardProp } from '@kukui/system';

export interface BadgeProps {
  color?: 'primary' | 'error' | 'info' | 'success' | 'warning';
  content?: string;
}
const IGNORED_PROPS = ['color'];

const BadgeRoot = styled('div', {
  shouldForwardProp: prop =>
    shouldForwardProp(prop) && !IGNORED_PROPS.includes(prop as any),
})<BadgeProps>(props => ({
  padding: '3.5px 6.5px',
  fontSize: '0.7rem',
  fontWeight: 600,
  lineHeight: 1,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'baseline',
  borderRadius: '0.325rem',
  display: 'inline-flex',
  alignItems: 'center',
  ...(props.color === 'success' && {
    backgroundColor: 'var(--kukui-lime-100)',
    color: 'var(--kukui-lime-800)',
  }),
}));
const Badge = (props: BadgeProps) => {
  const { content, color } = props;

  return <BadgeRoot color={color}>{content}</BadgeRoot>;
};

export default Badge;
