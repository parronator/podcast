import { CacheService, FetchService, HttpService, LocalStorageService } from '../';
import { useEffect, useState } from 'react';

export abstract class InfraDTO<T> {
  abstract fromHttp(data:object): T[] | T;

  abstract toCache(data: T[] | T): { [key: string]: object };

  abstract fromCache(data: object): T[] | T;
}

export const usePersistedQuery = <T>(url: string, dto: InfraDTO<T | T[]>, cacheService: CacheService = new LocalStorageService(), httpService: HttpService = new FetchService()): [T | T[], boolean] => {
  const cacheKey = 'http';
  const cacheTime = 60000 * 60 * 24;

  const [state, setState] = useState<{data: T | T[], loading: boolean}>({ data: [], loading: true });
  useEffect(() => {
    cacheService.get(cacheKey).then(d => d[url]).then(dto.fromCache).then(data => setState({ loading: false, data })).catch((e) => {
      httpService.get(url).then(dto.fromHttp).then((data) => {
        setState({ loading: false, data });
        cacheService.get(cacheKey).then(d => {
          cacheService.set(cacheKey, {...d, [url]: dto.toCache(data)}, cacheTime);
        }).catch(e => cacheService.set(cacheKey, {[url]: dto.toCache(data)}, cacheTime))
      }).catch(console.log);
    });
  }, []);

  return [state.data, state.loading];
};

export const useFilteredList = <T>(state: T[], callback) => {
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (state.length) setData(state.filter(callback));
  }, [filter, state]);

  return [data, filter, setFilter];
};
