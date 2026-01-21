// Force rebuild - 17 slides
import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Printer, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import all slides
import { Slide01Title } from "./slides/Slide01Title";
import { Slide02Problem } from "./slides/Slide02Problem";
import { Slide03Insight } from "./slides/Slide03Insight";
import { Slide04HowItWorks } from "./slides/Slide04HowItWorks";
import { Slide05Patent } from "./slides/Slide05Patent";
import { Slide06Benchmarks } from "./slides/Slide06Benchmarks";
import { Slide07DemosOverview } from "./slides/Slide07DemosOverview";
import { Slide07APIGateways } from "./slides/Slide07APIGateways";
import { Slide08AICost } from "./slides/Slide08AICost";
import { Slide09Defense } from "./slides/Slide09Defense";
import { Slide10BAskJustification } from "./slides/Slide10BAskJustification";
import { Slide10GTM } from "./slides/Slide10GTM";
import { Slide11Moat } from "./slides/Slide11Moat";
import { Slide12Team } from "./slides/Slide12Team";
import { Slide13DemoFlatScaling } from "./slides/Slide13DemoFlatScaling";
import { Slide14DemoAIGating } from "./slides/Slide14DemoAIGating";
import { Slide15DemoSemanticScan } from "./slides/Slide15DemoSemanticScan";

const FIRST_DEMO_SLIDE_INDEX = 14; // 0-indexed, first demo slide

const slides = [
  Slide01Title,
  Slide02Problem,
  Slide03Insight,
  Slide04HowItWorks,
  Slide05Patent,
  Slide06Benchmarks,
  Slide07DemosOverview,
  Slide07APIGateways,
  Slide08AICost,
  Slide09Defense,
  Slide10BAskJustification,
  Slide10GTM,
  Slide11Moat,
  Slide12Team,
  Slide13DemoFlatScaling,
  Slide14DemoAIGating,
  Slide15DemoSemanticScan,
];

const slideNames = [
  "Title",
  "Problem",
  "Insight",
  "How It Works",
  "Patent",
  "Benchmarks",
  "Demos Overview",
  "API Gateways",
  "AI Cost",
  "Defense",
  "Why $4.5M",
  "GTM",
  "Moat",
  "Team",
  "Demo: Flat Scaling",
  "Demo: AI Gating",
  "Demo: Semantic Scan",
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

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const goToDemos = useCallback(() => {
    setCurrentSlide(FIRST_DEMO_SLIDE_INDEX);
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
      } else if ((e.key === "p" || e.key === "P") && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        handlePrint();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, toggleFullscreen, isFullscreen, handlePrint]);

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
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border px-4 py-2 print:hidden">
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
              onClick={goToDemos}
              className="bg-accent hover:bg-accent/90 text-accent-foreground ml-2 gap-1.5"
              size="sm"
            >
              <Play className="w-4 h-4" />
              <span className="hidden sm:inline">View Demos</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrint}
              className="text-muted-foreground hover:text-foreground"
              title="Print / Save as PDF (Ctrl+P)"
            >
              <Printer className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="text-muted-foreground hover:text-foreground"
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div id="slide-content" className="flex-1 pt-14 overflow-hidden print:pt-0">
        <AnimatePresence mode="wait">
          <CurrentSlideComponent
            key={currentSlide}
            slideNumber={currentSlide + 1}
            totalSlides={totalSlides}
          />
        </AnimatePresence>
      </div>

      {/* Keyboard hints */}
      <div className="fixed bottom-4 right-4 text-xs text-muted-foreground/50 print:hidden">
        <span className="hidden md:inline">← → Navigate | F Fullscreen | Ctrl+P Print/PDF | Space Next</span>
      </div>
    </div>
  );
};
