import styled from '@emotion/styled';

const Title = styled('h2')({
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.22rem',
});

const CardTitle = ({ children }: { children?: React.ReactNode }) => {
  return <Title>{children}</Title>;
};
export default CardTitle;
