import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import PeakMeasureLogo from "../assets/PeakMeasureLogo.webp";
import HomeBanner from "../assets/homebanner.jpeg";

const BenefitsOfHeight = () => {
  return (
    <div className="pt-20 px-8">
      <div className="relative mb-8">
        <Image
          isBlurred
          src={HomeBanner}
          alt="Home Banner"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 rounded-lg">
          <h1 className="text-4xl font-bold text-white mb-4 text-center z-10">
            Welcome to Peak Measure
          </h1>
          <p className="text-lg text-white text-center z-10">
            Elevate your health awareness.
          </p>
        </div>
      </div>
      <div className="max-w-[900px] gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto mb-12">
        {[
          {
            title: "Height Redefined",
            text: "Height isn't just a number; it's a key indicator of health, growth, and potential. Understanding your height can provide valuable insights into your overall well-being, help you set personal goals, and even inspire you to reach new heights in life.",
          },
          {
            title: "Join the Peak Measure Community",
            text: "Connect with others who are also passionate about understanding and optimizing their height. Share your progress, celebrate achievements, and get support from a community that values growth just as much as you do.",
          },
          {
            title: "Easy to Use, Secure, and Private",
            text: "Our app is designed with simplicity in mind, ensuring a seamless experience for users of all ages. Your data is securely stored and protected, giving you peace of mind while you focus on reaching new heights.",
          },
        ].map((benefit, index) => (
          <div key={index} className="p-4 bg-black rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-center mb-4 text-white">
              {benefit.title}
            </h2>
            <p className="text-center text-lg text-white">{benefit.text}</p>
          </div>
        ))}
      </div>
      <div className="max-w-[900px] gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
        {[
          {
            title: "What to watch",
            text: "The Beauty of Height Showcase",
            image: "https://nextui.org/images/card-example-4.jpeg",
          },
          {
            title: "Eco-Friendly Height",
            text: "Knowing your height helps you contribute to the planet",
            image: "https://nextui.org/images/card-example-3.jpeg",
          },
          {
            title: "Supercharged Height",
            text: "Productivity remeasured",
            image: "https://nextui.org/images/card-example-2.jpeg",
          },
          {
            title: "Your day your way",
            text: "Your doorway to unforeseen heights",
            image: "https://nextui.org/images/card-example-5.jpeg",
          },
        ].map((card, index) => (
          <Card key={index} className="h-[300px] relative">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                {card.title}
              </p>
              <h4 className="text-white font-medium text-large">{card.text}</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={card.image}
            />
            {index === 3 && (
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 w-full flex justify-between items-center p-4">
                <div className="flex flex-grow gap-2 items-center">
                  <Image
                    alt="Peak Measure Logo"
                    className="rounded-full w-20 h-8 bg-black"
                    src={PeakMeasureLogo}
                  />
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">Peak Measure</p>
                    <p className="text-tiny text-white/60">
                      Stay on top of your growth.
                    </p>
                  </div>
                </div>
                <Link to="/signup">
                  <Button color="primary" size="sm">
                    Sign-Up
                  </Button>
                </Link>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
      <h2 className="text-3xl font-bold text-center mt-12 mb-6 text-white">
        Discover the Power of Knowing Your Height with Peak Measure
      </h2>
      <p className="text-center text-lg text-white mb-12">
        Join us today and take the first step towards understanding and
        achieving your full potential. With Peak Measure, your growth is in your
        hands.
      </p>
    </div>
  );
};

export default BenefitsOfHeight;
