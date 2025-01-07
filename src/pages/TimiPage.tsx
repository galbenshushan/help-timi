import React, { useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { jellyBeansStore } from "../store";
import { Bean } from "../types/JellyBeans";
import CombinationCard from "../components/Combinations/CombinationCard";
import BeanItem from "../components/Combinations/BeanItem";
import { isOrangeShade } from "../utils/Colors";

const PageContainer = styled.div`
  padding: 20px;
`;

const CombinationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
`;

const BeanList = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
`;

const TimiPage: React.FC = observer(() => {
  const orangeJellyBeansCombinations = jellyBeansStore.getOrangeCombinations();
  const JellyBeans = jellyBeansStore.beans;
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [highlightedBeans, setHighlightedBeans] = useState<Set<number>>(
    new Set()
  );

  const handleRecommendation = (index: number) => {
    setHighlightedIndex(index);
    const recommendedBeans = new Set<number>();
    orangeJellyBeansCombinations[index].beans.forEach((bean: Bean) =>
      recommendedBeans.add(bean.BeanId)
    );
    setHighlightedBeans(recommendedBeans);
  };

  return (
    <PageContainer>
      <h1>Help Timi Find His Favorite Jelly Bean Combinations!</h1>
      <h4>Choose by clicking on one of the combinations</h4>

      <CombinationsContainer>
        {orangeJellyBeansCombinations.map((group: any, index: number) => (
          <CombinationCard
            isHighlighted={index === highlightedIndex}
            index={index}
            handleRecommendation={handleRecommendation}
            group={group}
          />
        ))}
      </CombinationsContainer>
      <BeanList>
        {JellyBeans.filter((bean) => bean.BackgroundColor && isOrangeShade(bean.BackgroundColor)).map((bean) => (
          <BeanItem
            key={bean.BeanId}
            bean={bean}
            highlightedBeans={highlightedBeans}
          />
        ))}
      </BeanList>
    </PageContainer>
  );
});

export default TimiPage;
