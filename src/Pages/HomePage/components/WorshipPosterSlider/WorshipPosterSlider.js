import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section, Track, Poster, BackgroundOverlay } from "./styles";

import worship_1 from "../../../../assets/images/worship_poster/worship_1.jpg";
import worship_2 from "../../../../assets/images/worship_poster/worship_2.jpg";
import worship_3 from "../../../../assets/images/worship_poster/worship_3.jpg";
import worship_4 from "../../../../assets/images/worship_poster/worship_4.jpg";
import worship_5 from "../../../../assets/images/worship_poster/worship_5.jpg";
import worship_6 from "../../../../assets/images/worship_poster/worship_6.jpg";
import worship_7 from "../../../../assets/images/worship_poster/worship_7.jpeg";
import worship_8 from "../../../../assets/images/worship_poster/worship_8.jpeg";
import worship_9 from "../../../../assets/images/worship_poster/worship_9.jpeg";
import worship_10 from "../../../../assets/images/worship_poster/worship_10.png";
import worship_11 from "../../../../assets/images/worship_poster/worship_11.jpg";

gsap.registerPlugin(ScrollTrigger);

const posters = [
  worship_1,
  worship_2,
  worship_3,
  worship_4,
  worship_5,
  worship_6,
  worship_7,
  worship_8,
  worship_9,
  worship_10,
  worship_11,
];

const WorshipPosterSlider = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const overlayRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const overlay = overlayRef.current;
    if (!section || !track || !track.lastElementChild || !overlay) return;

    const ctx = gsap.context(() => {
      // Fade in the background
      gsap.to(overlay, {
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: "top top", // Start when section top hits viewport top
          end: "bottom center", // End when section bottom hits viewport center
          scrub: true,
        },
      });

      const posters = gsap.utils.toArray(".poster");
      const lastPoster = posters[posters.length - 1];

      const endPosition =
        lastPoster.offsetLeft +
        lastPoster.offsetWidth / 2 -
        window.innerWidth / 4;

      const trackAnimation = gsap.to(track, {
        x: -endPosition,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.8,
          start: "center center",
          end: () => `+=${endPosition * 2}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.progress > 0.999) {
              gsap.to(overlay, { opacity: 0, duration: 0.3 });
            } else {
              gsap.to(overlay, { opacity: 1, duration: 0.3 });
            }
          },
        },
      });

      posters.forEach((poster) => {
        gsap.to(poster, {
          scale: 1,
          scrollTrigger: {
            trigger: poster,
            containerAnimation: trackAnimation,
            start: "center center",
            end: "center center",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={sectionRef}>
      <BackgroundOverlay ref={overlayRef} />
      <Track ref={trackRef}>
        {posters.map((posterSrc, index) => (
          <Poster key={index} src={posterSrc} className="poster" />
        ))}
      </Track>
    </Section>
  );
};

export default WorshipPosterSlider;
