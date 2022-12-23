import { ListHeader, Layout, List, ListRow } from '@zara/ui';
import { usePersistedQuery } from '@zara/core';
import { Podcast } from '../../domain/entity';
import { PodcastDetailDTO } from '../../domain/entity.dto';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { PodcastEpisodeView } from '../podcast.router';

Layout.SidebarContent.preload();
List.Table.preload();

export const PodcastDetail: FC = () => {
  const [state, loading]: [Podcast, boolean] = usePersistedQuery<Podcast>('api/detail', new PodcastDetailDTO());
  const navigate = useNavigate();

  const header: ListHeader[] = [{ value: 'Title', columns: 3 }, { value: 'Date' }, { value: 'Duration' }];
  const items: ListRow[] = state.episodes && state.episodes.length ? state.episodes.map((e) => {
    return {
      id: e.id, values: [e.title, e.getDate(), e.getDuration()],
      onClick: () => navigate(`/podcast/${state.id}/episode/${e.id}`),
      onMouseEnter: () => PodcastEpisodeView.preload()
    };
  }) : [];

  return (
    <Layout.SidebarContent loading={loading}
                           sidebarImage={state.image}
                           sidebarTitle={state.title}
                           sidebarSubtitle={state.artist}
                           sidebarDescription={state.description}>
      <List.Table title='Episodes' loading={loading} header={header} items={items}/>
    </Layout.SidebarContent>
  );
};

export default PodcastDetail;
