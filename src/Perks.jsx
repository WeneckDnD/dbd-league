import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PerkCarousel = () => {
  const perks = [
    '🍎', '🍌', '🍊', '🍇', '🍓', '🥝', '🍑', '🍒', '🥭', '🍍',
    '🥥', '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽',
    '🥕', '🫒', '🧄', '🧅', '🥔', '🍠', '🥐', '🍞', '🥖', '🥨',
    '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖',
    '🌭', '🍔', '🍟', '🍕', '🥪', '🌮', '🌯', '🫔', '🥙', '🧆',
    '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪', '🍤', '🦞',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const visibleCount = 4;
  const maxIndex = Math.max(0, perks.length - visibleCount);

  const handlePrevious = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setCurrentIndex(prev => Math.max(0, prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getVisibleIcons = () => {
    return perks.slice(currentIndex, currentIndex + visibleCount);
  };

  return (
    <div>
      <div>
        <h2>Perk Icon Carousel</h2>
        
        <div>
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0 || isAnimating}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Icons Container */}
          <div>
            <div>
              {getVisibleIcons().map((icon, index) => (
                <div key={currentIndex + index}>
                  <div>
                    <div>{icon}</div>
                    <div>
                      Item {currentIndex + index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex || isAnimating}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Progress Indicator */}
        <div>
          <div>
            <span>
              {currentIndex + 1}-{Math.min(currentIndex + visibleCount, perks.length)} of {perks.length}
            </span>
          </div>
        </div>

        {/* Dots Indicator */}
        <div>
          {Array.from({ length: Math.ceil(perks.length / visibleCount) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(Math.min(index * visibleCount, maxIndex));
                  setTimeout(() => setIsAnimating(false), 300);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerkCarousel;
