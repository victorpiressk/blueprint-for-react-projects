import styled from 'styled-components'
import { transitions } from '../../../styles/GlobalStyles'

export const GalleryGrid = styled.ul<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  gap: 8px;
`

export const GalleryItem = styled.li`
  position: relative;
  cursor: zoom-in;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1;
`

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: ${transitions.fast};

  ${GalleryItem}:hover & {
    transform: scale(1.05);
  }
`

export const GalleryOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: ${transitions.fast};

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`