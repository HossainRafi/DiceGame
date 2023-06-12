import styled from "styled-components";

const StartGame = () => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" />
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
`;
