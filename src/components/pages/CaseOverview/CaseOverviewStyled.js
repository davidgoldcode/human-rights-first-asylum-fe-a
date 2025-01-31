import styled from 'styled-components';

export const Container = styled.div`
  height: ${props => (props.containerHeight ? props.containerHeight : 'auto')};
  width: ${props => (props.containerWidth ? props.containerWidth : 'auto')};
  border-radius: 30px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vw 1vh;
`;

// CASE/JUDGE CONTAINER
export const CaseSpecs = styled.div`
  border-radius: 30px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vw 1vh;
`;

// CLIENT CONTAINER
export const ClientSpecs = styled.div`
  border-radius: 30px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vw 1vh;
`;

// RESULTS
export const Results = styled.div`
  border-radius: 30px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vw 1vh;
`;

export const KeyParagraph = styled.p``;

export const ValueParagraph = styled.p``;
