import React from "react";
import styled from "styled-components";
import { Bean } from "../../types/JellyBeans";

const CombinationCardContainer = styled.div<{ isHighlighted?: boolean }>`
  cursor: pointer;
  width: 250px;
  padding: 15px;
  border: 2px solid
    ${({ isHighlighted }) =>
      isHighlighted ? "#FFD700" : "rgba(255, 255, 255, 0.3)"};
  border-radius: 10px;
  backdrop-filter: blur(10px);
  background: ${({ isHighlighted }) =>
    isHighlighted ? "rgba(255, 223, 0, 0.2)" : "rgba(255, 255, 255, 0.1)"};
  box-shadow: ${({ isHighlighted }) =>
    isHighlighted
      ? "0px 8px 16px rgba(255, 215, 0, 0.8)"
      : "0px 4px 8px rgba(0, 0, 0, 0.1)"};
  transition: all 0.3s ease;
  text-align: center;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CombinationName = styled.h4`
  color: #ff6f61;
  margin-bottom: 10px;
`;

const CombinationTags = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
`;

const BeansContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const BeanImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
`;

interface CombinationCardProps {
  isHighlighted: boolean;
  index: number;
  handleRecommendation: (index: number) => void;
  group: any;
}

const CombinationCard: React.FC<CombinationCardProps> = ({
  isHighlighted = false,
  index,
  handleRecommendation,
  group,
}) => {
  return (
    <CombinationCardContainer
      isHighlighted={isHighlighted}
      onClick={() => handleRecommendation(index)}
    >
      <CombinationName>{group.combination.Name}</CombinationName>
      <CombinationTags>{group.combination.TagSerialized}</CombinationTags>
      <BeansContainer>
        {group.beans.map((bean: Bean) => (
          <BeanImage
            key={bean.BeanId}
            src={bean.ImageUrl}
            alt={bean.FlavorName}
            title={bean.FlavorName}
          />
        ))}
      </BeansContainer>
    </CombinationCardContainer>
  );
};

export default CombinationCard;
