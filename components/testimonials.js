import React, { useState } from "react";
import Container from "./container";
import Image from "next/image";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";
import defaultUser from "../public/img/default_user.jpg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <TestimonialCard
          image={userOneImg}
          name="Aaquib"
          title="Law Student"
          text="As a law student, joining Project EduConnect has been an enriching experience both academically and personally. The opportunity to participate in legal literacy and awareness programs within communities has broadened my perspective on social justice issues. EduConnect doesn't just talk about empowerment; they actively engage in initiatives that uplift marginalized groups through education. The impact they are making is tangible, and it's heartening to be part of an organization that values collaboration and community empowerment as much as they do."
        />
        <TestimonialCard
          image={userTwoImg}
          name="Vishnu Priyanka"
          title="Assistant Professor"
          text="I came across Project EduConnect during my search for organizations dedicated to making a difference in education accessibility. What stood out to me was their commitment to not only providing educational opportunities but also fostering unity and collaboration within communities. Joining EduConnect has allowed me to contribute to initiatives that have a direct, positive impact on marginalized communities across India. The sense of purpose and fulfillment I've gained from being involved with EduConnect is truly rewarding, knowing that each effort contributes to creating lasting change and brighter futures for so many."
        />
        <TestimonialCard
          image={userThreeImg}
          name="Pavan Kachala"
          title="Software Engineer"
          text="Your hard work and commitment to providing good education and support to those in need are truly admirable. The simplicity of your approach and the clear communication within your team ensure that your efforts are effective and impactful. Really had a good time with your team."
        />
      </div>
    </Container>
  );
};

const TestimonialCard = ({ image, name, title, text }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="lg:col-span-2 xl:col-auto">
      <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
        <p className="leading-normal">
          {expanded ? text : `${text.slice(0, 100)}...`}
          <button
            onClick={toggleExpansion}
            className="text-blue-500 md:ml-2 focus:outline-none"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </p>
        <Avatar image={image} name={name} title={title} />
      </div>
    </div>
  );
};

const Avatar = ({ image, name, title }) => {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image src={image} alt="Avatar" width={40} height={40} />
      </div>
      <div>
        <div className="text-lg font-medium">{name}</div>
        <div className="text-gray-600 dark:text-gray-400">{title}</div>
      </div>
    </div>
  );
};

export default Testimonials;
