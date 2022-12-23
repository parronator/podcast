export class Podcast {
  private constructor(
    public readonly id: string,
    public readonly artist: string,
    public readonly title: string,
    public readonly image: string,
    public readonly description: string,
    public readonly episodes: Episode[]
  ) {
  }

  static create(id: string, artist: string, title: string, image: string, description: string) {
    return new Podcast(id, artist, title, image, description, [])
  }

  static createWithEpisodes(id: string, artist: string, title: string, image: string, description: string, episodes: Episode[]) {
    return new Podcast(id, artist, title, image, description, episodes)
  }

  getEpisode(id: string): Episode {
    return this.episodes.find(e => e.id === id) || Episode.empty();
  }

  toJSON() {
    return {
      id: this.id,
      artist: this.artist,
      title: this.title,
      image: this.image,
      description: this.description,
      episodes: this.episodes.map(e => e.toJSON())
    }
  }
}

export class Episode {
  private constructor(
    public readonly id: string,
    public readonly title: string,
    private readonly duration: number,
    private readonly date: string,
    public readonly description: string,
    public readonly url: string
  ) {
  }

  static create(id: string, title: string, duration: number, date: string, description: string, url: string): Episode {
    return new Episode(id, title, duration, date, description, url);
  }

  static empty() {
    return new Episode('', '', 0, '', '', '');
  }

  private padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  getDate() {
    return new Date(this.date).toLocaleDateString()
  }

  getDuration() {
    let seconds = Math.floor(this.duration / 1000);
    let minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    seconds = seconds % 60;
    // round minutes up when seconds are greater than 30
    minutes = seconds >= 30 ? minutes + 1 : minutes;
    minutes = minutes % 60;
    return `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}`;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      duration: this.duration,
      date: this.date,
      description: this.description,
      url: this.url
    }
  }
}

