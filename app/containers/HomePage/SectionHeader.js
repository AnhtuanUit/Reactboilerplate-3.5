import styled from 'styled-components';

const Div = styled.div`
  font-weight: 500;
  line-height: 1.1;
`

const Title = styled(Div)`
  font-size: 40px;
  color: #3B4563;
  margin: 0.67em 0;
`;

const Hr = styled.hr`
  width: 5%;
  border: none;
  height: 3px;
  background-color: #1daaa0;
`;

const Highlight = styled.span`
  background-color: #1DAAA0;
  color: white;
  padding: 0 15px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 500;

`
const Description = styled(Div)`
  color: #8e9bac;
  font-size: 18px;

  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
`
export { Title, Hr, Highlight, Description };
