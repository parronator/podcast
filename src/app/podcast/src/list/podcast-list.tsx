import { FC } from 'react';
import { Layout, List } from '@zara/ui';
import { useFilteredList, usePersistedQuery } from '@zara/core';
import { PodcastListDTO } from '../../domain/entity.dto';
import { Podcast } from '../../domain/entity';
import { PodcastDetailView } from '../podcast.router';

Layout.List.preload();
List.Empty.preload();

export const PodcastList: FC = () => {
  const [state, loading]: [Podcast[], boolean] = usePersistedQuery<Podcast>('api/list', new PodcastListDTO());
  const [podcastList, filter, search] = useFilteredList<Podcast>(state, (podcast: Podcast): boolean =>
    podcast.artist.toLowerCase().includes(filter.toLowerCase()) || podcast.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Layout.List searchPlaceholder="Filter podcasts..." searchCallback={search} loading={loading}>
      {!loading && !state.length && <List.Empty title="No podcasts found"/>}
      <List.Grid>{
        loading
          ? [...Array(50).keys()].map((key) => <List.BoxSkeleton key={key}/>)
          : podcastList.map((podcast) => <List.Box key={podcast.id}
                                                   image={podcast.image} title={podcast.title} subtitle={podcast.artist}
                                                   preload={() => {
                                                     PodcastDetailView.preload();
                                                   }} link={`/podcast/${podcast.id}`}/>)}
      </List.Grid>
    </Layout.List>
  );
};

export default PodcastList;

