import { useRef, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as S from './styles'
import type { TabsProps } from './types'

const Tabs = ({
  tabs,
  activeTab,
  onTabChange,
  variant = 'underline',
  scrollable = false
}: TabsProps) => {
  const location = useLocation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const checkScroll = () => {
    if (!containerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
    setShowLeft(scrollLeft > 5)
    setShowRight(scrollLeft < scrollWidth - clientWidth - 5)
  }

  useEffect(() => {
    if (!scrollable) return
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [scrollable])

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return
    containerRef.current.scrollTo({
      left:
        containerRef.current.scrollLeft + (direction === 'left' ? -200 : 200),
      behavior: 'smooth'
    })
    setTimeout(checkScroll, 300)
  }

  const isTabActive = (tab: { key: string; path?: string }) => {
    if (tab.path) return location.pathname === tab.path
    return activeTab === tab.key
  }

  return (
    <S.TabsWrapper
      onMouseEnter={() => scrollable && setIsHovering(true)}
      onMouseLeave={() => scrollable && setIsHovering(false)}
    >
      {scrollable && showLeft && isHovering && (
        <S.ScrollButton $position="left" onClick={() => scroll('left')}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
            </g>
          </svg>
        </S.ScrollButton>
      )}

      <S.TabsContainer
        ref={containerRef}
        onScroll={checkScroll}
        $scrollable={scrollable}
        $variant={variant}
      >
        {tabs.map((tab) =>
          tab.path ? (
            <Link key={tab.key} to={tab.path} style={{ textDecoration: 'none' }}>
              <S.TabItem
                $variant={variant}
                $active={isTabActive(tab)}
                as="span"
              >
                {tab.label}
              </S.TabItem>
            </Link>
          ) : (
            <S.TabItem
              key={tab.key}
              $variant={variant}
              $active={isTabActive(tab)}
              onClick={() => onTabChange?.(tab.key)}
            >
              {tab.label}
            </S.TabItem>
          )
        )}
      </S.TabsContainer>

      {scrollable && showRight && isHovering && (
        <S.ScrollButton $position="right" onClick={() => scroll('right')}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path d="M16.586 13l-5.043 5.04 1.414 1.42L20.414 12l-7.457-7.46-1.414 1.42L16.586 11H3v2h13.586z" />
            </g>
          </svg>
        </S.ScrollButton>
      )}
    </S.TabsWrapper>
  )
}

export default Tabs