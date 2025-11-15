import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import StoryBgD from "../../assets/StorySection/Story.png"
import StoryBgM from "../../assets/StorySection/StoryM.png"
/* ==== IMPORT ALL SECTIONS ==== */
import Section1 from "../../components/common/StorySection/Section1";
import Section2 from "../../components/common/StorySection/Section2";
import Section3 from "../../components/common/StorySection/Section3";
import Section4 from "../../components/common/StorySection/Section4";
import Section5 from "../../components/common/StorySection/Section5";
import Section6 from "../../components/common/StorySection/Section6";
import Section7 from "../../components/common/StorySection/Section7";
import Section8 from "../../components/common/StorySection/Section8";
import Section9 from "../../components/common/StorySection/Section9";
import Section10 from "../../components/common/StorySection/Section10";
import Section11 from "../../components/common/StorySection/Section11";
import Section12 from "../../components/common/StorySection//Section12";
import Section13 from "../../components/common/StorySection/Section13";
import Section14 from "../../components/common/StorySection/Section14";
import BackgroundScroll from "../../components/Animations/BackGroundScroll";

const Story = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const StoryBg = isMobile ? StoryBgD : StoryBgM
  return (

    <Box sx={{
      width: "100%", overflowX: "hidden",
      // scrollSnapType: "y proximity", overflowY: "scroll", height: "100vh",
      // scrollBehavior: "smooth",
      /* Hide scrollbar in Chrome, Edge, Safari */
      // "&::-webkit-scrollbar": {
      //   display: "none",
      // },

      /* Hide scrollbar in Firefox */
      // scrollbarWidth: "none",
      // BACKGROUND IMAGE HERE
      // backgroundImage: `url(${StoryBg})`,
      // backgroundSize: "cover",      // covers full screen
      // backgroundRepeat: "no-repeat",
      // backgroundPosition: "top center",

      // HIDE SCROLLBAR
      "&::-webkit-scrollbar": { display: "none" },
      scrollbarWidth: "none",
    }}>

      {/* BACKGROUND CONTAINER */}
      <Box
        sx={{
          width: "100%",
          minHeight: "100%", // allow background to grow
          backgroundImage: `url(${StoryBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* ===== TIMELINE SECTIONS ===== */}
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
        <Section13 />
        <Section14 />
      </Box>
    </Box>

  );
};

export default Story;
