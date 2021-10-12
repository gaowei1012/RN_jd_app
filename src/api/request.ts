import axios, { AxiosError, AxiosResponse } from "axios";
import { ToastAndroid } from 'react-native';
import rootStore from "../stores";

export function request(url: string, method: any, data?: object, token?: any) {
  return new Promise((resolve, reject) => {
    let body = method === "GET" ? "params" : "data";
    rootStore.loadingStore.set_loading()
    axios({
      url,
      method: method,
      [body]: data === null ? "" : data,
      headers: {
        "Content-Type": "application/json",
        // jwttoken: token === null ? "" : token,
      },
    })
      .then((res: AxiosResponse) => {
        if (
          res.status === 200 &&
          res.data.code === 200
        ) {
          ToastAndroid.show(res.data.message, 2000)
          // RootToast.showToast(res.data.message)
          resolve(res);
          rootStore.loadingStore.remove_loading()
        } else {
          throw res.data;
        }
      })
      .catch((err: AxiosError) => {
        ToastAndroid.show(err.message, 2000)
        // RootToast.showToast(err.message)
        rootStore.loadingStore.remove_loading()
        reject(err);
      });
  });
}
