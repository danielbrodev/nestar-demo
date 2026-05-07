import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";

const PropertyDetailPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack>PROPERTY DETAIL MOBILE VERSION</Stack>;
  } else {
    return (
      <>
        <Container>Properties Detail</Container>
      </>
    );
  }
};
export default withLayoutBasic(PropertyDetailPage);
