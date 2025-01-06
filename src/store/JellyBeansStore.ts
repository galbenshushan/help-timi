import { makeAutoObservable, observable } from "mobx";
import {
  fetchBeans,
  fetchColors,
  fetchCombinations,
  checkHealth,
} from "../service/JellyBeansService";
import { Bean, BeansRes } from "../types/JellyBeans";
import { ViewType } from "../enums/beans";

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
  limits = [
    { from: 0, to: 50 },
    { from: 50, to: 100 },
    { from: 100, to: this.totalBeans },
  ];

  constructor() {
    makeAutoObservable(this);
    this.fetchBeans();
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
      this.limits.forEach(async (limit) => {
        const data: BeansRes = await fetchBeans(limit.from, limit.to);
        this.beans.push(...data.data);
        this.totalBeans = data.total;
      });
    } catch (e: any) {}
  }

  get paginatedBeans() {
    const start = this.page * this.rowsPerPage;
    const end = start + this.rowsPerPage;
    return this.filteredAndSortedBeans.slice(start, end);
  }

  get isTable() {
    return this.viewType === ViewType.TABLE;
  }
  public async fetchColors() {
    try {
      const data = await fetchColors();
      this.colors = data;
    } catch (e: any) {}
  }

  public async fetchCombinations() {
    try {
      const data = await fetchCombinations();
      this.combinations = data;
    } catch (e: any) {}
  }

  public async checkHealth() {
    try {
      const data = await checkHealth();
      this.healthStatus = data;
    } catch (e: any) {}
  }
}
