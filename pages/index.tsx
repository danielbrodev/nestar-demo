import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Stack>
        <Stack flexDirection={"column"}>
          <Stack className="container">Popular properties </Stack>
          <Box className="container">Top Agents</Box>
          <Box className="container"> Top properties</Box>
          <Box className="container"> Top Events</Box>
        </Stack>
      </Stack>
    </>
  );
};
export default withLayoutMain(Home);
