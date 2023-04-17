/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import useAsync from "./useAsync";


const DEFAULT_OPTIONS = {
    headers: { "Content-Type": "application/json" },
};

export default function useFetch(url: any, options = {}, dependencies = []) {
    return useAsync(() => {
      return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then(res => {
        console.log(res);
        if (res.ok) {return res.json();}
        return res.json().then(json => Promise.reject(json));
      });
    }, dependencies);
}
