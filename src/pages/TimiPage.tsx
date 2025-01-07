import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import CombinationCard from "../components/Combinations/CombinationCard";
import BeanItem from "../components/Combinations/BeanItem";
import useBeanCombinations from "../hooks/useBeanCombinations";

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
  const {
    orangeJellyBeansCombinations,
    filteredBeans,
    highlightedIndex,
    highlightedBeans,
    handleRecommendation,
  } = useBeanCombinations();

  return (
    <PageContainer>
      <h1>Help Timi Find His Favorite Jelly Bean Combinations!</h1>
      <h4>
        Timi loves jelly beans, but he can only eat the orange ones! Help him
        pick the best combination by clicking on one of the orange jelly bean
        combinations below.
      </h4>

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
        {filteredBeans.map((bean) => (
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
