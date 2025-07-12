import { useEffect, useState } from "react";
import { MEDIAITEMS } from "../../constants";
import { CirclePause, CirclePlay } from "lucide-react";
import HeroContent from "../HeroContent/HeroContent";
import Background from "../Background/Background";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % MEDIAITEMS.length)
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = MEDIAITEMS[currentIndex];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Background playVideo={playVideo} currentItem={currentItem}/>
      <HeroContent key={MEDIAITEMS[currentIndex].id}/>
      <div className="media-controls container-padding container flex justify-between items-center gap-3 mt-auto py-4 relative z-50">
        {!playVideo && (
          <div className="flex space-x-2">
            {MEDIAITEMS.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentIndex(index)} 
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? "bg-red-500" : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
        <div className="ms-auto video-button">
          <button 
            type="button" 
            onClick={() => setPlayVideo(!playVideo)} 
            className="cursor-pointer flex items-center gap-x-2 [&_svg]:shrink-0 fade-in text-sm min-md:text-xl"
          >
            {!playVideo ? (
              <>
                <CirclePlay size={48}/>
                <span>See the video</span>
              </>
            ) : (
              <>
                <CirclePause size={48}/>
                <span>Hide the video</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero