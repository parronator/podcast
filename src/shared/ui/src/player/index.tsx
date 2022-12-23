import lazyWithPreload from '../preload';

export const PlayerDefault = lazyWithPreload(() => import('./default/player-default'));

export const Player = () => {};

Player.Default = PlayerDefault;
