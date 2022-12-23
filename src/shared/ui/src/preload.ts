import { ComponentType, createElement, forwardRef, lazy, useRef } from 'react';

type PreloadableComponent<T extends ComponentType<unknown>> = T & {
  preload: () => Promise<T>;
};

export function lazyWithPreload<T extends ComponentType<unknown>>(
  factory: () => Promise<{ default: T }>
): PreloadableComponent<T> {
  const ReactLazyComponent = lazy(factory);
  let PreloadedComponent: T | undefined;
  let factoryPromise: Promise<T> | undefined;

  const Component = forwardRef(function LazyWithPreload(props, ref) {
    // Ensure that it continues to be used for all subsequent renders and not unmounted and remounted.
    const ComponentToRender = useRef(
      PreloadedComponent ?? ReactLazyComponent
    );
    return createElement(
      ComponentToRender.current,
      Object.assign(ref ? { ref } : {}, props)
    );
  });

  const LazyWithPreload = Component as PreloadableComponent<T>;

  LazyWithPreload.preload = () => {
    if (!factoryPromise) {
      factoryPromise = factory().then((module) => {
        PreloadedComponent = module.default;
        return PreloadedComponent;
      });
    }

    return factoryPromise;
  };

  return LazyWithPreload;
}

export default lazyWithPreload;
