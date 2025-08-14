import React, { useState, useEffect, useRef } from 'react';
import quoteImage from '../../assets/portfolioImage/quote.png';

const ReviewsCarousel = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState('mobile'); // Changé de 'desktop' à 'mobile'
  const sectionRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: 'Cara G.',
      text: 'Audrey was so wonderful, very kind and patient, and is incredibly prompt with communication. Definitely book Audrey for your next task!',
      rating: 5,
      color: 'purple',
    },
    {
      id: 2,
      name: 'Mary D.',
      text: "Audrey did amazing work. One of the best freelancers I've used. Highly recommend",
      rating: 5,
      color: 'orange-light',
    },
    {
      id: 3,
      name: 'Mina H.',
      text: 'Thank you Audrey. Absolutely amazing to work with, listened to all my requests and helped me publish my ebook online. Will hire again definitely recommend',
      rating: 5,
      color: 'blue',
    },
    {
      id: 4,
      name: 'Chris T.',
      text: 'Audrey is the consummate professional who takes great pride in her work',
      rating: 5,
      color: 'dark',
    },
    {
      id: 5,
      name: 'Alexis H.',
      text: 'Perfectly on time, and very professional. I will definitely be using her again!',
      rating: 5,
      color: 'orange',
    },
  ];

  // Détecter la taille d'écran
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      console.log('Current width:', width); // Debug
      
      if (width >= 1024) {
        setScreenSize('desktop');
        console.log('Setting desktop mode'); // Debug
      } else if (width >= 600) {
        setScreenSize('tablet');
        console.log('Setting tablet mode'); // Debug
      } else {
        setScreenSize('mobile');
        console.log('Setting mobile mode'); // Debug
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Configuration selon la taille d'écran
  const getConfig = () => {
    switch (screenSize) {
      case 'mobile':
        return { cardsVisible: 1, cardWidth: 280, spacing: 0 };
      case 'tablet':
        return { cardsVisible: 2, cardWidth: 260, spacing: 320 };
      case 'desktop':
      default:
        return { cardsVisible: 3, cardWidth: 280, spacing: 300 };
    }
  };

  const config = getConfig();
  const maxIndex = Math.max(0, reviews.length - config.cardsVisible);

  // Debug
  console.log('Current screenSize:', screenSize);
  console.log('Current config:', config);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const windowHeight = window.innerHeight;
      const startPoint = windowHeight;
      const endPoint = windowHeight * 0.3;

      if (sectionTop <= startPoint && sectionTop >= endPoint) {
        const progress = (startPoint - sectionTop) / (startPoint - endPoint);
        setScrollProgress(Math.min(1, Math.max(0, progress)));
      } else if (sectionTop < endPoint) {
        setScrollProgress(1);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollProgress === 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = (prev + 1) % (maxIndex + 1);
          return nextIndex;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [scrollProgress, maxIndex]);

  // Définir l'index de départ selon la taille d'écran
  useEffect(() => {
    if (screenSize === 'mobile') {
      setCurrentIndex(2); // Commence à la 3ème review (Mina H.)
    } else if (screenSize === 'tablet') {
      setCurrentIndex(1); // Commence par les 2ème et 3ème reviews (Mary D. + Mina H.)
    } else {
      setCurrentIndex(1); // Desktop: 3ème review au centre (2ème, 3ème, 4ème affichées)
    }
  }, [screenSize]);

  // Reset currentIndex si il dépasse le nouveau max après un resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [maxIndex, currentIndex]);

  const getCardStyle = (index) => {
    const totalCards = reviews.length;

    if (scrollProgress < 1) {
      // Animation initiale - empilage au centre
      // Ajuster le centerIndex pour que la 3ème carte soit au centre sur desktop
      let centerIndex;
      if (screenSize === 'desktop') {
        centerIndex = 2; // Force la 3ème carte (index 2) au centre
      } else {
        centerIndex = Math.floor(config.cardsVisible / 2);
      }
      
      const stackOffset = index - centerIndex;
      const initialX = stackOffset * 25;
      const initialY = stackOffset * 20;
      const initialRotation = stackOffset * 12;

      // Position finale selon la config - ajustée pour centrer
      let finalPosition;
      if (screenSize === 'desktop') {
        // Pour desktop, centrer les 3 cartes autour de 0
        finalPosition = index - 2; // Index 2 au centre (0), index 1 à gauche (-1), index 3 à droite (+1)
      } else {
        finalPosition = index - Math.floor(config.cardsVisible / 2);
      }
      
      const finalX = finalPosition * config.spacing;
      const finalY = 0;
      const finalRotation = 0;

      const currentX = initialX + (finalX - initialX) * scrollProgress;
      const currentY = initialY + (finalY - initialY) * scrollProgress;
      const currentRotation = initialRotation + (finalRotation - initialRotation) * scrollProgress;

      return {
        transform: `translate(${currentX}px, ${currentY}px) rotate(${currentRotation}deg)`,
        zIndex: totalCards - Math.abs(index - centerIndex),
        opacity: 1,
        transition: 'none',
      };
    } else {
      // Carousel actif
      const visibleIndex = index - currentIndex;
      const isVisible = visibleIndex >= 0 && visibleIndex < config.cardsVisible;

      if (!isVisible) {
        return {
          transform: `translate(${visibleIndex < 0 ? -400 : 400}px, 0px)`,
          opacity: 0,
          zIndex: 0,
          transition: 'all 0.5s ease-in-out',
        };
      }

      // Position selon la configuration
      let xOffset;
      if (config.cardsVisible === 1) {
        xOffset = 0; // Centré
      } else if (config.cardsVisible === 2) {
        xOffset = (visibleIndex - 0.5) * config.spacing; // Centré entre les deux
      } else {
        xOffset = (visibleIndex - 1) * config.spacing; // 3 cartes, celle du milieu centrée
      }

      return {
        transform: `translate(${xOffset}px, 0px)`,
        opacity: 1,
        zIndex: 10,
        transition: 'all 0.5s ease-in-out',
      };
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      purple: 'bg-[var(--color-purple)] text-[var(--color-blue)]',
      orange: 'bg-[var(--color-orange)] text-[var(--color-cream)]',
      'orange-light': 'bg-[var(--color-orange)] text-[var(--color-cream)]',
      blue: 'bg-[var(--color-blue)] text-[var(--color-cream)]',
      dark: 'bg-[var(--color-brown)] text-[var(--color-cream)]',
    };
    return colorMap[color] || colorMap.purple;
  };

  const StarRating = ({ rating, color }) => {
    const getStarColor = (color) => {
      const colorMap = {
        purple: 'text-[var(--color-blue)]',
        orange: 'text-[var(--color-cream)]',
        'orange-light': 'text-[var(--color-brown)]',
        blue: 'text-[var(--color-orange)]',
        dark: 'text-[var(--color-cream)]',
      };
      return colorMap[color] || colorMap.purple;
    };

    return (
      <div className='flex mb-3'>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`${getStarColor(color)} text-base mr-0.5`}>
            {i < rating ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  const QuoteIcon = ({ className }) => (
    <img src={quoteImage} alt='quote' className={className} />
  );

  return (
    <div className='bg-[var(--color-cream)] min-h-screen'>
      {/* Debug info - à supprimer après test */}
      <div className='fixed top-0 left-0 bg-black text-white p-2 text-xs z-50'>
        Screen: {screenSize} | Width: {typeof window !== 'undefined' ? window.innerWidth : 0} | Cards: {config.cardsVisible}
      </div>
      
      <div
        ref={sectionRef}
        className='h-[80vh] flex items-center justify-center relative overflow-hidden'
      >
        <QuoteIcon className='absolute top-[-10px] left-30 w-38 h-38 text-[var(--color-orange)] hidden xl:block' />
        <QuoteIcon className='absolute bottom-[-10px] right-30 w-38 h-38 text-[var(--color-orange)] hidden xl:block transform rotate-180' />

        <div className='relative w-full h-full flex items-center justify-center'>
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`absolute p-6 rounded-2xl shadow-lg ${getColorClasses(review.color)} flex flex-col justify-between`}
              style={{
                width: `${config.cardWidth}px`,
                height: screenSize === 'mobile' ? '350px' : '320px',
                ...getCardStyle(index)
              }}
            >
              <div>
                <StarRating rating={review.rating} color={review.color} />
                <p className='text-sm leading-relaxed opacity-95 flex-1' style={{ color: 'inherit' }}>
                  {review.text}
                </p>
              </div>
              <div className='mt-4 pt-4 border-t border-white/20'>
                <div className='font-semibold text-right' style={{ color: 'inherit' }}>
                  — {review.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {scrollProgress === 1 && (
          <div className='absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2'>
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[var(--color-orange)]'
                    : 'bg-[var(--color-brown)]/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsCarousel;