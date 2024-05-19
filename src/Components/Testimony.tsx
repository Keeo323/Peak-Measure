import {
  Card,
  CardHeader,
  Avatar,
  Button,
  CardBody,
  CardFooter,
} from "@nextui-org/react";
import { useState } from "react";

const testimonials = [
  {
    name: "Zoey Lang",
    handle: "@zoeylang",
    avatar: "https://nextui.org/avatars/avatar-1.png",
    followers: "97.1K",
    following: 4,
    text: "Peak Measure changed my life! Learning about what I could do in my height range has truly opened new doors for me.",
  },
  {
    name: "Barbara Gordon",
    handle: "@BarbaraGordon",
    avatar: "https://nextui.org/avatars/avatar-2.png",
    followers: "140K",
    following: 400,
    text: "Peak Measure has not only helped me learn about myself, but I have now saved my marriage.",
  },
  {
    name: "Greg Sanders",
    handle: "@TheeGreg",
    avatar: "https://nextui.org/avatars/avatar-6.png",
    followers: "3.4K",
    following: "2.1K",
    text: "Peak Measure has helped me strike it with the ladies. I can't go back after this.",
  },
  {
    name: "Natalie Jacobs",
    handle: "@NatzAttackz",
    avatar: "https://nextui.org/avatars/avatar-4.png",
    followers: "40K",
    following: 700,
    text: "I was skeptical about just how far an app that tells you your height can take you. But I have literally just been promoted to CEO of my company! OMG Peak Measure!!!",
  },
];

const Testimony = () => {
  const [followed, setFollowed] = useState(testimonials.map(() => false));

  const toggleFollow = (index) => {
    setFollowed((prevFollowed) =>
      prevFollowed.map((isFollowed, i) =>
        i === index ? !isFollowed : isFollowed
      )
    );
  };

  return (
    <div className="px-8 pt-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="w-full max-w-[400px] mx-auto">
            <CardHeader className="justify-between">
              <div className="flex gap-4">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src={testimonial.avatar}
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {testimonial.name}
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    {testimonial.handle}
                  </h5>
                </div>
              </div>
              <Button
                className={
                  followed[index]
                    ? "bg-transparent text-foreground border-default-200"
                    : ""
                }
                color="primary"
                radius="full"
                size="sm"
                variant={followed[index] ? "bordered" : "solid"}
                onPress={() => toggleFollow(index)}
              >
                {followed[index] ? "Unfollow" : "Follow"}
              </Button>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <p>{testimonial.text}</p>
              <span className="pt-2">
                #PeakHeightIsTheFuture
                <span className="py-2" aria-label="stars" role="img">
                  ✨
                </span>
              </span>
            </CardBody>
            <CardFooter className="gap-2">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  {testimonial.following}
                </p>
                <p className="text-default-400 text-small">Following</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  {testimonial.followers}
                </p>
                <p className="text-default-400 text-small">Followers</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimony;
