import { observable, action } from "mobx";
import {
  fetchBeans,
  fetchColors,
  fetchCombinations,
  checkHealth,
} from "../service/JellyBeansService";
import { Bean, Color } from "../types/beans";
import { appStore } from ".";

export class JellyBeansStore {
  @observable beans: Bean[] = [];
  @observable colors: Color[] = [];
  @observable combinations: any[] = [];
  @observable healthStatus: any | null = null;

  @action async fetchBeans() {
    appStore.setLoading(true);
    try {
      const data = await fetchBeans();
      this.beans = data;
      appStore.setError(null);
    } catch (e: any) {
      appStore.setError(`Failed to fetch beans: ${e.message}`);
    } finally {
      appStore.setLoading(false);
    }
  }

  @action async fetchColors() {
    appStore.setLoading(true);
    try {
      const data = await fetchColors();
      this.colors = data;
      appStore.setError(null);
    } catch (e: any) {
      appStore.setError(`Failed to fetch colors: ${e.message}`);
    } finally {
      appStore.setLoading(false);
    }
  }

  @action async fetchCombinations() {
    appStore.setLoading(true);
    try {
      const data = await fetchCombinations();
      this.combinations = data;
      appStore.setError(null);
    } catch (e: any) {
      appStore.setError(`Failed to fetch combinations: ${e.message}`);
    } finally {
      appStore.setLoading(false);
    }
  }

  @action async checkHealth() {
    appStore.setLoading(true);
    try {
      const data = await checkHealth();
      this.healthStatus = data;
      appStore.setError(null);
    } catch (e: any) {
      appStore.setError(`Failed to check health: ${e.message}`);
    } finally {
      appStore.setLoading(false);
    }
  }
}

export const jellyBeansStore = new JellyBeansStore();
