import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const campaigns = [
    {
      id: 1,
      image: "/img/gallery/gi1.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 2,
      image: "/img/gallery/gi2.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 3,
      image: "/img/gallery/gi3.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 4,
      image: "/img/gallery/gi4.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 5,
      image: "/img/gallery/gi5.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 6,
      image: "/img/gallery/gi6.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 7,
      image: "/img/gallery/gi7.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 8,
      image: "/img/gallery/gi8.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 9,
      image: "/img/gallery/gi9.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 10,
      image: "/img/gallery/gi10.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    }
  ];

  const rolling_images = [
    {
      id: 1,
      image: "/img/gallery/gi1.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 2,
      image: "/img/gallery/gi2.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 3,
      image: "/img/gallery/gi3.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 4,
      image: "/img/gallery/gi4.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 5,
      image: "/img/gallery/gi5.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 6,
      image: "/img/gallery/gi6.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 7,
      image: "/img/gallery/gi7.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 8,
      image: "/img/gallery/gi8.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 9,
      image: "/img/gallery/gi9.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    },
    {
      id: 10,
      image: "/img/gallery/gi10.png",
      description: "Lorem ipsum dolor sit amet. Et blanditiis blanditiis ut quibusdam enim sit deserunt ratione 33 quod voluptas et eligendi expedita non error quaerat qui deserunt repudiandae.",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === rolling_images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-8">
        {/* <h1 className="text-4xl font-bold mb-8 text-center">
          Slideshow
        </h1> */}
        <div className="relative w-full h-96 mb-8">
          {rolling_images.map((rolling_images, index) => (
            <img
              key={rolling_images.id}
              src={rolling_images.image}
              alt={`Gallery ${rolling_images.id}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ zIndex: index === currentImageIndex ? 1 : 0 }}
            />
          ))}
        </div>
        <h1 className="text-4xl font-bold mb-8 text-center">
          A Visual Journey of our NGO
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white rounded-md overflow-hidden shadow-md"
            >
              <img
                src={campaign.image}
                alt={`Campaign ${campaign.id}`}
                className="w-full h-48 object-cover"
              />
              {/* <div className="p-4">
                <h2 className="text-xl font-bold mb-2">
                  Campaign {campaign.id}
                </h2>
                <p className="text-gray-700">{campaign.description}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
