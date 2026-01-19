import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import all slides
import { Slide01Title } from "./slides/Slide01Title";
import { Slide02Problem } from "./slides/Slide02Problem";
import { Slide03Insight } from "./slides/Slide03Insight";
import { Slide04HowItWorks } from "./slides/Slide04HowItWorks";
import { Slide05Patent } from "./slides/Slide05Patent";
import { Slide06Benchmarks } from "./slides/Slide06Benchmarks";
import { Slide07APIGateways } from "./slides/Slide07APIGateways";
import { Slide08AICost } from "./slides/Slide08AICost";
import { Slide09Defense } from "./slides/Slide09Defense";
import { Slide09BStrategicDepth } from "./slides/Slide09BStrategicDepth";
import { Slide10GTM } from "./slides/Slide10GTM";
import { Slide11Moat } from "./slides/Slide11Moat";
import { Slide12Team } from "./slides/Slide12Team";

const slides = [
  Slide01Title,
  Slide02Problem,
  Slide03Insight,
  Slide04HowItWorks,
  Slide05Patent,
  Slide06Benchmarks,
  Slide07APIGateways,
  Slide08AICost,
  Slide09Defense,
  Slide09BStrategicDepth,
  Slide10GTM,
  Slide11Moat,
  Slide12Team,
];

const slideNames = [
  "Title",
  "Problem",
  "Insight",
  "How It Works",
  "Patent",
  "Benchmarks",
  "API Gateways",
  "AI Cost",
  "Defense",
  "Strategic Depth",
  "GTM",
  "Moat",
  "Team & Ask",
];

export const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const totalSlides = slides.length;

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, toggleFullscreen, isFullscreen]);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl text-accent">∂₀</span>
            <span className="text-foreground font-semibold hidden sm:inline">Delta Zero Labs</span>
          </div>

          {/* Slide Dots */}
          <div className="flex items-center gap-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-accent w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                title={slideNames[index]}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrev}
              className="text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <span className="text-sm text-muted-foreground w-16 text-center">
              {currentSlide + 1} / {totalSlides}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="text-muted-foreground hover:text-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="text-muted-foreground hover:text-foreground ml-2"
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 pt-14 overflow-hidden">
        <AnimatePresence mode="wait">
          <CurrentSlideComponent
            key={currentSlide}
            slideNumber={currentSlide + 1}
            totalSlides={totalSlides}
          />
        </AnimatePresence>
      </div>

      {/* Keyboard hints */}
      <div className="fixed bottom-4 right-4 text-xs text-muted-foreground/50">
        <span className="hidden md:inline">← → Navigate | F Fullscreen | Space Next</span>
      </div>
    </div>
  );
};
