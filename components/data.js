import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/p8.png";
import benefitTwoImg from "../public/img/p3.png";

const benefitOne = {
  title: "Highlights of Project Edu Connect",
  desc: "Launched in 2023, Project EduConnect (Connecting Minds, Igniting Futures) is a community-driven non-profit initiative dedicated to uplifting and enhancing access to education for learners at all levels, from primary to higher education, and across various domains, throughout marginalized and minority communities across India.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Holistic Community Development",
      desc: "Project Edu Connect takes a comprehensive approach to community development, addressing social, educational, needs to create lasting positive change.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Impactful Volunteer Engagement",
      desc: "Our NGO thrives on the dedication of passionate volunteers who actively contribute to meaningful projects, amplifying the reach and effectiveness of our initiatives.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Transparency and Accountability",
      desc: "Project Edu Connect upholds principles of transparency and accountability, ensuring that every donation and effort directly contributes to tangible improvements in the lives of those we serve.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offers more benefits like",
  desc: "At Project EduConnect, we firmly believe in the transformative power of unity, collaboration, and a shared purpose.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Our mission",
      desc: "Our mission is to unite the brilliant minds within our diverse communities, all while striving for extraordinary outcomes. We warmly invite you as we embark on this meaningful journey to create lasting positive change.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Our commitment",
      desc: "our commitment lies in empowering law students at the institutional level and fostering legal literacy and awareness programs within communities at the community level. ",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Our dedication",
      desc: "Our organization is dedicated to creating a positive impact on two distinct yet interconnected levels: the institutional level and the community level.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
