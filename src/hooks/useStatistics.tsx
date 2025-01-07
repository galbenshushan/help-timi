import { useMemo } from "react";
import { jellyBeansStore } from "../store";
import { Bean } from "../types/JellyBeans";
import { BeanAttribute } from "../enums/beans";

const useStatistics = () => {
  const jellyBeans = jellyBeansStore.beans;
  const attributes = Object.values(BeanAttribute);

  const attributeCounts = useMemo(
    () =>
      attributes.map((attr) =>
        jellyBeans.reduce(
          (count, bean: Bean) => (bean[attr] ? count + 1 : count),
          0
        )
      ),
    [jellyBeans, attributes]
  );

  const colors = ["#FFD700", "#FF6347", "#32CD32", "#FF69B4"];
  const maxCount = Math.max(...attributeCounts);
  const maxHeight = 400;
  const scaleFactor = maxCount > 0 ? maxHeight / maxCount : 1;

  return {
    attributes,
    attributeCounts,
    colors,
    maxCount,
    scaleFactor,
  };
};

export default useStatistics;
