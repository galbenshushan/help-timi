import React from "react";
import styled from "styled-components";
import { Bean } from "../../types/JellyBeans";

const SmallBeanCard = styled.div<{ isHighlighted?: boolean }>`
  width: 100px;
  padding: 10px;
  text-align: center;
  border: 2px solid
    ${({ isHighlighted }) =>
      isHighlighted ? "#FFD700" : "rgba(255, 255, 255, 0.3)"};
  background: ${({ isHighlighted }) =>
    isHighlighted ? "rgba(255, 223, 0, 0.2)" : "rgba(255, 255, 255, 0.1)"};
  border-radius: 8px;
  box-shadow: ${({ isHighlighted }) =>
    isHighlighted
      ? "0px 8px 16px rgba(255, 215, 0, 0.8)"
      : "0px 4px 8px rgba(0, 0, 0, 0.1)"};
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const BeanCardImage = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

const BeanCardName = styled.p`
  font-size: 12px;
  color: #fff;
`;

interface BeanItemProps {
  bean: Bean;
  highlightedBeans: Set<number>;
}

const BeanItem: React.FC<BeanItemProps> = ({ bean, highlightedBeans }) => {
  return (
    <SmallBeanCard isHighlighted={highlightedBeans.has(bean.BeanId)}>
      <BeanCardName>{bean.FlavorName}</BeanCardName>
      <BeanCardImage
        src={bean.ImageUrl}
        alt={bean.FlavorName}
        title={bean.FlavorName}
      />
    </SmallBeanCard>
  );
};

export default BeanItem;
