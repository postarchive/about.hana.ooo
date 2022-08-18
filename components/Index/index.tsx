import { styled } from "@/lib/stitches.config";

const Main = styled("main", {
  minHeight: "100vh",
  padding: "4rem 0",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Title = styled("main", {
  margin: 0,
  lineHeight: 1.15,
  fontSize: "4vw",
});

const Index = () => {
  return (
    <Main>
      <Title>내일을 위한 더 나은 오늘을 만들어가는 곳</Title>
    </Main>
  );
};

export default Index;
