import { useState, useCallback } from "react";
import { jellyBeansStore } from "../store";
import { Bean } from "../types/JellyBeans";
import { isOrangeShade } from "../utils/Colors";

const useBeanCombinations = () => {
  const orangeJellyBeansCombinations = jellyBeansStore.getOrangeCombinations();
  const jellyBeans = jellyBeansStore.beans;

  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [highlightedBeans, setHighlightedBeans] = useState<Set<number>>(new Set());

  const handleRecommendation = useCallback((index: number) => {
    setHighlightedIndex(index);
    const recommendedBeans = new Set<number>();
    orangeJellyBeansCombinations[index].beans.forEach((bean: Bean) => 
      recommendedBeans.add(bean.BeanId)
    );
    setHighlightedBeans(recommendedBeans);
  }, [orangeJellyBeansCombinations]);

  const filteredBeans = jellyBeans.filter((bean) =>
    bean.BackgroundColor && isOrangeShade(bean.BackgroundColor)
  );

  return {
    orangeJellyBeansCombinations,
    filteredBeans,
    highlightedIndex,
    highlightedBeans,
    handleRecommendation,
  };
};

export default useBeanCombinations;
