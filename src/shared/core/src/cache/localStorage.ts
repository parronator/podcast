import { CacheClearException, CacheDeleteException, CacheGetException, CacheSetException } from './exceptions';

export abstract class CacheService {
  abstract get(key: string): Promise<{[key: string]: object}>;

  abstract set(key: string, value: unknown, ttl?: number): Promise<void>;

  abstract delete(key: string): Promise<void>;

  abstract clear(): Promise<void>;
}

export class LocalStorageService implements CacheService {
  async clear(): Promise<void> {
    try {
      return localStorage.clear();
    } catch (e) {
      throw new CacheClearException();
    }
  }

  async delete(key: string): Promise<void> {
    try {
      return localStorage.removeItem(key);
    } catch (e) {
      throw new CacheDeleteException();
    }
  }

  async get<T>(key: string): Promise<T> {
    const result = localStorage.getItem(key);
    if (!result || !result.length) throw new CacheGetException();
    const item = JSON.parse(result);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      throw new CacheGetException();
    }
    return item.value;
  }

  async set(key: string, value: unknown, ttl?: number): Promise<void> {
    try {
      const now = new Date();
      const item = { value: value, expiry: now.getTime() + (ttl || 0) };
      return localStorage.setItem(key, JSON.stringify(item));
    } catch (e) {
      throw new CacheSetException();
    }
  }
}


