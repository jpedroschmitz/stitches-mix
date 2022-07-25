import { styled } from "../stitches.config";

const Box = styled("div");

export default function App() {
  return (
    <Box as="h1" css={{ color: "$space-cadet" }}>
      Hello
    </Box>
  );
}
