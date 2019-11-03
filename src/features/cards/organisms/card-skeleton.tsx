import * as React from "react"
import styled, { css, keyframes } from "styled-components"

import { Row } from "@lib/styled-components-layout"
import { CardNarrow, H2, Icon } from "@howtocards/ui"

type SkeletonProps = {
  maximized?: boolean
}

export const CardSkeleton = (_props: SkeletonProps) => (
  <SkeletonCard>
    <CardNarrow>
      <CardBox>
        <GridCard>
          <CellCardFlag>
            <CardFlagWithNumber />
          </CellCardFlag>

          <CellCardHeader>
            <HeadingLine>
              <TextSkeleton width="245px" />
            </HeadingLine>
          </CellCardHeader>

          <CellCardContent>
            <TextSkeleton width="485px" />
            <TextSkeleton width="525px" />
            <TextSkeleton width="515px" />
            <TextSkeleton width="355px" />
          </CellCardContent>

          <CellCardFooter>
            <TextSkeleton />
          </CellCardFooter>
        </GridCard>
      </CardBox>
    </CardNarrow>
  </SkeletonCard>
)

const media = {
  mobile: "@media screen and (max-width: 500px)",
}

const CardFlagWithNumber = () => (
  <div>
    <IconWrapper>
      <Icon name="bookmark-regular" />
    </IconWrapper>
    <UsefulForCount>
      <BeFirst>Be first</BeFirst>
    </UsefulForCount>
  </div>
)

const BeFirst = styled.div`
  font-size: 0.7em;
  opacity: 0.5;
`

const CardBox = styled.div<SkeletonProps>`
  box-sizing: border-box;
  overflow-y: hidden;
  padding: 2rem;
  max-height: ${(p) => (p.maximized ? "auto" : "24rem")};

  ${media.mobile} {
    padding: 2rem 1rem;
  }
`

const GridCard = styled.div<SkeletonProps>`
  display: grid;
  grid-template-areas:
    "flag header"
    "flag content"
    "flag footer";
  grid-template-rows: auto 10rem auto;
  grid-template-columns: 50px 1fr;
  grid-gap: 8px;

  ${(p) =>
    p.maximized &&
    css`
      grid-template-rows: auto 1fr auto;
    `}

  ${media.mobile} {
    grid-template-areas:
      "flag header"
      "content content"
      "footer footer";
  }
`

const HeadingLine = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  flex-shrink: 0;
  line-height: 2.4rem;
`
const IconWrapper = styled.div`
  padding: 0 0.6rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.3;
  }
`

const UsefulForCount = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`
const CellCardFooter = styled.div`
  grid-area: footer;
  align-items: flex-end;
  line-height: 2.4rem;
  padding: 8px 0;
`

const CellCardFlag = styled.div`
  grid-area: flag;
`
const CellCardHeader = styled.div`
  grid-area: header;
`
const CellCardContent = styled.div`
  grid-area: content;
  overflow-y: hidden;
`

export const ZeroButton = styled.button`
  background-color: transparent;
  border: none;
`
export const SkeletonCard = styled.div`
  margin-bottom: 20px;
`

const Gradient = keyframes`
  0% {
      background-position: 0% 50%
  }
  50% {
      background-position: 100% 50%
  }
  100% {
      background-position: 0% 50%
  }
`

type TextProps = {
  width?: string
}

export const TextSkeleton = styled.div<TextProps>`
  border-radius: 5px;
  margin: 3px;
  width: ${(props) => props.width || "120px"};
  height: 15px;

  background: linear-gradient(-45deg, #ccc, lightgrey, grey);
  background-size: 400% 400%;
  animation: ${Gradient} 2s ease infinite;
`