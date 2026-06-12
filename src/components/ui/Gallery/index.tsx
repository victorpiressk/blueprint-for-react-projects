import { useState } from 'react'
import { ZoomIn, X } from 'lucide-react'
import Modal from '../Modal'
import * as S from './styles'
import type { GalleryItem, GalleryProps } from './types'

const Gallery = ({ items, columns = 4 }: GalleryProps) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  return (
    <>
      <S.GalleryGrid $columns={columns}>
        {items.map((item, index) => (
          <S.GalleryItem
            key={item.url}
            onClick={() => setSelectedItem(item)}
          >
            <S.GalleryImage
              src={item.url}
              alt={item.alt || `Imagem ${index + 1}`}
            />
            <S.GalleryOverlay>
              <ZoomIn size={24} strokeWidth={1.5} color="#ffffff" />
            </S.GalleryOverlay>
          </S.GalleryItem>
        ))}
      </S.GalleryGrid>

      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        size="large"
        showCloseButton={true}
      >
        {selectedItem && (
          <S.ModalImage
            src={selectedItem.url}
            alt={selectedItem.alt || 'Imagem ampliada'}
          />
        )}
      </Modal>
    </>
  )
}

export default Gallery