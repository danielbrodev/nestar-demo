import { Stack } from "@mui/material";
import Head from "next/head";

const withLayoutMain = (Component: React.ComponentType) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack sx={{ background: "#43a047" }}>Header HOME</Stack>

          <Stack id="main">
            <Component {...props} />
          </Stack>

          <Stack sx={{ background: "#795548" }}>Footer</Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutMain;
