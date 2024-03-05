import { Box, Button } from "@mui/material";
// import axios from "axios";
import { useEffect, useState } from "react";
// import ViewCaseModal from "./viewCaseModal";

export default function CaseStatusBox({ id }) {
  //   const [color, setColor] = useState("#6AB2F5");
  //   const [openModal, setOpenModal] = useState(false);
  //   const handleOpen = () => setOpenModal(true);
  //   const handleClose = () => setOpenModal(false);
  return (
    <Box
      width="100%"
      height="10%"
      sx={{ bgcolor: "#FFFFFF", padding: "1px", overflow: "hidden" }}
    >
      <Box
        sx={{ width: "100%", height: "100%" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        border={"1px solid grey"}
      >
        <Box
          sx={{ width: "95%", height: "100%" }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {id}
          <Button
            variant="contained"
            size="small"
            color="info"
            // onClick={handleOpen}
          >
            Status
          </Button>
          {/* <ViewCaseModal
            open={openModal}
            setOpen={setOpenModal}
            handleClose={handleClose}
          /> */}
        </Box>
      </Box>
    </Box>
  );
}
