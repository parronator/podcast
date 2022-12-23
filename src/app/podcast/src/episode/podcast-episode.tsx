import { Episode, Podcast } from '../../domain/entity';
import { usePersistedQuery } from '@zara/core';
import { PodcastDetailDTO } from '../../domain/entity.dto';
import { useParams } from 'react-router-dom';
import { Layout, Player } from '@zara/ui';
import { FC } from 'react';

Layout.SidebarContent.preload();
Player.Default.preload();

export const PodcastEpisode: FC = () => {
  const [state, loading]: [Podcast, boolean] = usePersistedQuery<Podcast>('api/detail', new PodcastDetailDTO());
  const { episodeId } = useParams();

  const episode = !loading && state ? state.getEpisode(episodeId) : Episode.empty();

  return (
    <Layout.SidebarContent loading={loading}
                           sidebarImage={state.image}
                           sidebarTitle={state.title}
                           sidebarSubtitle={state.artist}
                           sidebarDescription={state.description}>
      <Player.Default url={episode.url} loading={loading} title={episode.title} description={episode.description}/>
    </Layout.SidebarContent>
  );
};

export default PodcastEpisode;
