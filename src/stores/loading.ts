import { makeAutoObservable, observable, action } from "mobx";

export class LoadingStore {
  loading: boolean = false;
  constructor() {
    makeAutoObservable(this, {
      loading: observable,
      set_loading: action,
      remove_loading: action,
    })
  }

  set_loading() {
    this.loading = true;
  }

  remove_loading() {
    this.loading = false;
  }
}

export default new LoadingStore()
