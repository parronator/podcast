import './player-default.css';
import { FC } from 'react';
import parse from 'html-react-parser';

export interface PlayerProps {
  loading?: boolean;
  title: string;
  description: string;
  url: string;
}

export const Default: FC<PlayerProps> = ({ loading, url, title, description }) => {
  return (
    <section className="player__default">
      {!loading ? <><h1 className="player__title">{title}</h1>
                  <span className="player__description" >{parse(description)}</span>
                  <audio className="player__audio" src={url} controls/></>
        : <><h1 className="player__title-skeleton">.</h1>
            <span className="player__description-skeleton" >.</span>
            <span className="player__description-skeleton" >.</span>
            <span className="player__description-skeleton" >.</span>
            <div className="player__audio-skeleton">.</div></>}
    </section>
  );
};

export default Default;
