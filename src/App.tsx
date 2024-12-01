import useEmblaCarousel from "embla-carousel-react";
import "./App.css";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

function App() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">Slide 1</div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>
    </>
  );
}

export default App;
