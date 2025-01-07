import { makeAutoObservable, observable } from "mobx";
import {
  fetchBeans,
  fetchColor,
  fetchCombinations,
  checkHealth,
} from "../service/JellyBeansService";
import { Bean, BeansRes } from "../types/JellyBeans";
import { ViewType } from "../enums/beans";
import { isOrangeShade } from "../utils/Colors";

export class JellyBeansStore {
  @observable beans: Bean[] = [];
  @observable totalBeans: number = 0;
  @observable colors: any[] = [];
  @observable combinations: any[] = [];
  @observable healthStatus: any | null = null;
  @observable currentPage: number = 1;
  @observable viewType: ViewType = ViewType.TABLE;
  @observable sortOrder: string = "asc";
  @observable filter: string = "";
  @observable page: number = 0;
  rowsPerPage: number = 6;

  constructor() {
    makeAutoObservable(this);
    this.fetchBeans();
    this.fetchCombinations();
  }

  setPage(page: number) {
    this.page = page;
  }

  get totalPages() {
    const rows = this.rowsPerPage + 1;
    return Math.ceil(this.totalBeans / rows);
  }

  public setViewType = (viewType: ViewType) => {
    this.viewType = viewType;
  };

  public toggleViewType = () => {
    this.viewType =
      this.viewType === ViewType.TABLE ? ViewType.GRID : ViewType.TABLE;
  };

  setFilter(filter: string) {
    this.filter = filter;
  }

  @observable get filteredAndSortedBeans(): Bean[] {
    let beans = this.beans;
    if (this.filter) {
      beans = beans.filter((bean) =>
        bean.FlavorName.toLowerCase().includes(this.filter.toLowerCase())
      );
    }

    switch (this.sortOrder) {
      case "asc":
        beans = beans
          .slice()
          .sort((a, b) => a.FlavorName.localeCompare(b.FlavorName));
        break;
      case "desc":
        beans = beans
          .slice()
          .sort((a, b) => b.FlavorName.localeCompare(a.FlavorName));
        break;
      case "group":
        beans = beans
          .slice()
          .sort((a, b) =>
            a.GroupNameSerialized.localeCompare(b.GroupNameSerialized)
          );
        break;
      case "color":
        beans = beans
          .slice()
          .sort((a, b) => a.ColorGroup.localeCompare(b.ColorGroup));
        break;
    }

    return beans;
  }

  setSortOrder(sortOrder: string) {
    this.sortOrder = sortOrder;
  }

  public async fetchBeans() {
    try {
      const initialData: BeansRes = await fetchBeans(0, 50);
      this.beans.push(...initialData.data);
      this.totalBeans = initialData.total;

      const limits = [
        { from: 50, to: 100 },
        { from: 100, to: this.totalBeans },
      ];
      for (const limit of limits) {
        const data: BeansRes = await fetchBeans(limit.from, limit.to);
        this.beans.push(...data.data);
      }
    } catch (e: any) {
      console.error(e);
    }
  }

  get orangeBeans() {
    return this.beans.filter((bean) => bean.ColorGroup);
  }
  get paginatedBeans() {
    const start = this.page * this.rowsPerPage;
    const end = start + this.rowsPerPage;
    return this.filteredAndSortedBeans.slice(start, end);
  }

  get isTable() {
    return this.viewType === ViewType.TABLE;
  }

  public getOrangeCombinations() {
    const allBeansCombinations: any = [];
    this.combinations.forEach((combination) => {
      const tags = combination.TagSerialized.split(", + ,");
      const conbinationBeans: Bean[] = [];
      this.beans.map(async (bean: Bean) => {
        if (tags.includes(bean.FlavorName)) {
          conbinationBeans.push(bean);
        }
      });

      const allOrange =
        conbinationBeans.length > 0 &&
        conbinationBeans.every((bean: Bean) => bean.BackgroundColor && isOrangeShade(bean.BackgroundColor));
      if (allOrange) {
        allBeansCombinations.push({
          beans: conbinationBeans,
          combination: combination,
        });
      }
    });
    return allBeansCombinations;
  }

  public async fetchColor(colorId: string) {
    try {
      const data: BeansRes = await fetchColor(colorId);
      return data.data[0];
    } catch (e: any) {}
  }

  public async fetchCombinations() {
    try {
      const data: BeansRes = await fetchCombinations();
      this.combinations = data.data;
    } catch (e: any) {}
  }

  public async checkHealth() {
    try {
      const data = await checkHealth();
      this.healthStatus = data;
    } catch (e: any) {}
  }
}
