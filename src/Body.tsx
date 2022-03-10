import Hero from "./components/HeroSettings/Hero";
import WhyUsFeature from "./components/WhyUsSettings/WhyUs";
import WhiteBg from "./components/WhiteBgSettings/WhiteBg";
import VideoSec from "./components/VideoSecSettings/VideoSec";
import { Posts } from "./components/Posts/Posts";
import BlogPost from "./components/BlogPostSettings/BlogPost";
import { SliderContent } from "./components/CarouselSettings/Slider";

const Body = () => {
  return (
    <div>
      <Hero />
      <WhyUsFeature />
      <WhiteBg />
      <VideoSec />
      <SliderContent />
      <BlogPost />
      <Posts />
    </div>
  );
};

export default Body;
