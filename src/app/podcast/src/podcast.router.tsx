import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazyWithPreload } from '@zara/ui';

export const PodcastDetailView = lazyWithPreload(() => import('./detail/podcast-detail'));
export const PodcastListView = lazyWithPreload(() => import('./list/podcast-list'));
export const PodcastEpisodeView = lazyWithPreload(() => import('./episode/podcast-episode'));

export function PodcastRouter() {
  return (
    <Routes>
      <Route path="/" element={<Suspense><PodcastListView/></Suspense>}/>
      <Route path="/podcast/:podcastId" element={<Suspense><PodcastDetailView/></Suspense>}/>
      <Route path="/podcast/:podcastId/episode/:episodeId" element={<Suspense><PodcastEpisodeView/></Suspense>}/>
      <Route path="/*" element={<div>404 Not found</div>}/>
    </Routes>
  );
}
