import styled from '@emotion/styled';

export interface CardHeaderProps {
  children?: React.ReactNode;
}

const Header = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: '0 2rem',
  minHeight: '70px',
  backgroundColor: 'transparent',
});

const CardHeader = ({ children }: CardHeaderProps) => {
  return <Header>{children}</Header>;
};

export default CardHeader;
