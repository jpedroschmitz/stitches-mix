import { styled } from "../stitches.config";

const Box = styled("div");

export default function App() {
  return (
    <Box
      as="ul"
      css={{
        spaceX: 10,
        display: "flex",
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}
    >
      <li>teste</li>
      <li>teste</li>
      <li>teste</li>
      <li>teste</li>
      <li>teste</li>
    </Box>
  );
}
