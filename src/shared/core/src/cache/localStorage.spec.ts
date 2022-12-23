import { clear } from 'console';
import { CacheClearException, CacheDeleteException, CacheGetException, CacheSetException } from './exceptions';
import { CacheService, LocalStorageService } from './localStorage';

global.localStorage = {
  key(index: number): string | null {
    return null;
  },
  length: 1,
  setItem(key: string, item: string): void {
    let a;
  },
  removeItem(key: string): void {
    let a;
  },
  getItem(key: string): string | null {
    return null;
  },
  clear(): void {
    let a;
  },
  delete(): void {
    let a;
  },
};

describe('LocalStorage', () => {
  let cache: CacheService;

  beforeEach(() => {
    vi.restoreAllMocks();
    cache = new LocalStorageService();
  });

  describe('CLEAR', () => {
    it('should throw proper error', async () => {
      vi.spyOn(global.localStorage, 'clear').mockImplementation(() => {
        throw new Error();
      });
      await expect(() => cache.clear()).rejects.toThrowError(CacheClearException);
    });
    
    it('should work', async () => {
      vi.spyOn(global.localStorage, 'clear').mockImplementation(() => {
        return null;
      });
      const result = await cache.clear()
      expect(result).toBeNull();
    });
  });

  describe('DELETE', () => {
    it('should throw proper error', async () => {
      vi.spyOn(global.localStorage, 'removeItem').mockImplementation(() => {
        throw new Error();
      });
      await expect(() => cache.delete('some')).rejects.toThrowError(CacheDeleteException);
    });
    
    it('should work', async () => {
      vi.spyOn(global.localStorage, 'removeItem').mockImplementation(() => {
        return null;
      });
      const result = await cache.delete('some')
      expect(result).toBeNull();
    });
  });

  describe('GET', () => {
    it('should throw proper error', async () => {
      vi.spyOn(global.localStorage, 'getItem').mockImplementation((key) => {
        return null;
      });
      await expect(() => cache.get('some')).rejects.toThrowError(CacheGetException);
    });

    it('should throw when expiry is wrong', async () => {
        vi.spyOn(global.localStorage, 'getItem').mockImplementation((key) => {
          return JSON.stringify({value: 'test', expiry: 1});
        });
        await expect(() => cache.get('some')).rejects.toThrowError(CacheGetException);
      });
    
    it('should work', async () => {
      vi.spyOn(global.localStorage, 'getItem').mockImplementation((key) => {
        return JSON.stringify({value: 'test', expiry: new Date().getTime() + 20000});
      });
      const result = await cache.get('some')
      expect(result).toBe('test');
    });
  });

  describe('SET', () => {
    it('should throw proper error', async () => {
      vi.spyOn(global.localStorage, 'setItem').mockImplementation(() => {
        throw new Error();
      });
      await expect(() => cache.set('some', 'test')).rejects.toThrowError(CacheSetException);
    });
    
    it('should work', async () => {
      vi.spyOn(global.localStorage, 'setItem').mockImplementation(() => {
        return null;
      });
      const result = await cache.set('some', 'test')
      expect(result).toBeNull();
    });
  });
});
