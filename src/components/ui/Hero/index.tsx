import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import * as S from './styles'
import type { HeroProps } from './types'

const Hero = ({
  slides,
  autoplay = true,
  autoplayDelay = 3000,
  showArrows = true,
  showDots = true,
  children
}: HeroProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    ...(autoplay ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })] : [])
  ])

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index)
    },
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <S.HeroWrapper>
      <S.HeroViewport ref={emblaRef}>
        <S.HeroContainer>
          {slides.map((slide, index) => (
            <S.HeroSlide key={index}>
              <S.HeroImage
                style={{ backgroundImage: `url(${slide})` }}
              />
            </S.HeroSlide>
          ))}
        </S.HeroContainer>
      </S.HeroViewport>

      {children && <S.HeroContent>{children}</S.HeroContent>}

      {showArrows && (
        <>
          <S.ArrowButton $position="left" onClick={scrollPrev} aria-label="Anterior">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
            </svg>
          </S.ArrowButton>
          <S.ArrowButton $position="right" onClick={scrollNext} aria-label="Próximo">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16.586 13l-5.043 5.04 1.414 1.42L20.414 12l-7.457-7.46-1.414 1.42L16.586 11H3v2h13.586z" />
            </svg>
          </S.ArrowButton>
        </>
      )}

      {showDots && (
        <S.DotsContainer>
          {slides.map((_, index) => (
            <S.Dot
              key={index}
              $active={index === selectedIndex}
              onClick={() => scrollTo(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </S.DotsContainer>
      )}
    </S.HeroWrapper>
  )
}

export default Hero