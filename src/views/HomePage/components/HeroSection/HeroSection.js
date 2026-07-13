import { useTypewriter, Cursor } from "react-simple-typewriter";
import { HeroContainer, HeroContent } from "./styles";

const HeroSection = ({ words }) => {
  const [text] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <HeroContainer>
      <HeroContent>
        <h1>
          {text}
          <Cursor />
        </h1>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
