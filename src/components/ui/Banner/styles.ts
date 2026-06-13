import styled from 'styled-components'

export const BannerContainer = styled.div<{ $height: string }>`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.56);
  }
`

export const BannerContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
`