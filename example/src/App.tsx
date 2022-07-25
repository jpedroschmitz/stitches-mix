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
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </Box>
  );
}
