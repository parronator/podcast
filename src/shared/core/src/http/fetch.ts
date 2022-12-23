import { HttpGetException } from './exceptions';
export abstract class HttpService {
  abstract get(url: string, params?: object): Promise<object>;
}

export class FetchService implements HttpService {
  async get(url: string, params?: object): Promise<object> {
    try {
      // const finalUrl = params ? `${url}?${new URLSearchParams(params)}` : url;
      return await fetch(url, { method: 'GET' }).then(response => response.json())
    } catch (e) {
      throw new HttpGetException();
    }
  }
}
