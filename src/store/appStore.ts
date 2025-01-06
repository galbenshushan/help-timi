import { observable, action } from "mobx";

export class AppStore {
  @observable loading: boolean = false;
  @observable error: string | null = null;

  @action setLoading(loading: boolean) {
    this.loading = loading;
  }

  @action setError(error: string | null) {
    this.error = error;
  }
}

