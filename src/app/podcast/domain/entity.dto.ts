import { InfraDTO } from '@zara/core';
import { Episode, Podcast } from './entity';

export class PodcastListDTO implements InfraDTO<Podcast> {
  fromHttp(data: { [p: string]: any }): Podcast[] {
    return data.feed.entry.map((p) => Podcast.create(p.id.attributes['im:id'], p['im:artist'].label, p['im:name'].label, p['im:image'][2].label, p['summary'].label));
  }

  toCache(data: Podcast[]): { [key: string]: any } {
    return data.map(podcast => podcast.toJSON());
  }

  fromCache(data: { [p: string]: any }): Podcast[] {
    return data.map(json => Podcast.create(json.id, json.artist, json.title, json.image, json.description));
  }
}

export class PodcastDetailDTO implements InfraDTO<Podcast> {
  fromCache(data: { [p: string]: any }): Podcast {
    return Podcast.createWithEpisodes(data.id, data.artist, data.title, data.image, data.description,
      data.episodes.map((e) => Episode.create(e.id, e.title, e.duration, e.date, e.description, e.url)));
  }

  fromHttp(data: { [p: string]: any }): Podcast {
    return data.data.map((p) => {
      const episodes = p.relationships.episodes.data.map((e) => {
        return Episode.create(e.id, e.attributes.name, e.attributes.durationInMilliseconds, e.attributes.releaseDateTime, e.attributes.description.standard, e.attributes.assetUrl);
      });
      return Podcast.createWithEpisodes(p.id, p.attributes.name, p.attributes.artistName, p.attributes.image[2].label, p.attributes.description.standard, episodes);
    })[0];
  }

  toCache(podcast: Podcast): { [p: string]: any } {
    return podcast.toJSON();
  }
}
