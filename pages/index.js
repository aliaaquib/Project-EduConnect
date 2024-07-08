import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

import React, { useState } from 'react';
import Modal from '../components/modal';
import FeedbackForm from '../components/feedbackForm';
import FeedbackWidgetButton from '../components/feedBackWidgetButton';

const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Project Edu Connect</title>
        <meta name="description" content="A non-profit initiative dedicated to empowering access to education within marginalized and minority communities." />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Project Edu Connect Benefits"
        title=" Why should you join Project Edu Connect?"
      >
        We offers significant benefits including enhanced access
        to education for marginalized communities, empowerment through legal literacy 
        programs, opportunities for personal and professional growth, fostering of 
        community collaboration and unity, participation in transformative social 
        impact initiatives, and the chance to contribute meaningfully to creating lasting 
        positive change in society.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Overview of Project Edu Connect"
      >
        Launched in 2023, Project EduConnect (Connecting Minds, Igniting Futures) is 
        a community-driven non-profit initiative dedicated to uplifting and enhancing 
        access to education for learners at all levels, from primary to higher 
        education, across India.


        <br />
        {/* With more than 3 years of experience, the society has helped
        more than 100+ childerns. */}
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Stories That Illuminate Project Edu Connect's Transformative Journey."
      >
        Discover the impact of Project Edu Connect through the voices of those
        we've had the privilege to serve and those who have supported our
        mission. Read heartfelt testimonials that reflect the genuine
        experiences of individuals and communities touched by our collective
        efforts. These stories are a testament to the positive change we can
        achieve together.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Explore answers to commonly asked questions about Project Edu Connect.
        Gain insights into our mission, activities, and how you can be a part of
        creating positive social change.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
      <div>
        <FeedbackWidgetButton onClick={openModal} />
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <FeedbackForm />
        </Modal>
      </div>
    </>
  );
};

export default Home;
