import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Track {
  id: number;
  title: string;
  duration: string;
  plays: string;
}

interface Artist {
  id: number;
  name: string;
  genre: string;
  image: string;
  bio: string;
  followers: string;
  monthlyListeners: string;
  tracks: Track[];
  gallery: string[];
}

interface ArtistDetailProps {
  artist: Artist;
  onBack: () => void;
  onPlayTrack: (trackId: number) => void;
}

const ArtistDetail = ({ artist, onBack, onPlayTrack }: ArtistDetailProps) => {
  return (
    <div className="min-h-screen bg-background pb-32">
      <div className="relative h-96 overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <Button
          onClick={onBack}
          variant="ghost"
          className="absolute top-6 left-6 text-foreground hover:text-neon-blue backdrop-blur-sm bg-background/20"
        >
          <Icon name="ArrowLeft" className="mr-2" size={20} />
          Назад
        </Button>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Badge className="mb-4 bg-neon-purple/20 text-neon-purple border-neon-purple/50">
              {artist.genre}
            </Badge>
            <h1 className="text-6xl font-black mb-4 text-neon-blue text-glow-blue">
              {artist.name}
            </h1>
            <div className="flex gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={18} className="text-neon-pink" />
                <span className="text-muted-foreground">{artist.followers} подписчиков</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Play" size={18} className="text-neon-purple" />
                <span className="text-muted-foreground">{artist.monthlyListeners} в месяц</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Music" className="text-neon-blue" size={28} />
                  <h2 className="text-3xl font-bold text-foreground">Популярные треки</h2>
                </div>
                <div className="space-y-2">
                  {artist.tracks.map((track, index) => (
                    <Card
                      key={track.id}
                      className="group bg-card/50 backdrop-blur border-transparent hover:border-neon-blue/30 hover:bg-card/70 transition-all duration-300 cursor-pointer"
                    >
                      <div className="p-4 flex items-center gap-4">
                        <span className="text-muted-foreground font-mono text-sm w-8">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <Button
                          size="icon"
                          onClick={() => onPlayTrack(track.id)}
                          className="bg-neon-blue hover:bg-neon-blue/80 text-background glow-neon-blue opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Icon name="Play" size={18} />
                        </Button>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground truncate">{track.title}</h4>
                          <p className="text-sm text-muted-foreground">{artist.name}</p>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Icon name="Headphones" size={16} />
                            <span>{track.plays}</span>
                          </div>
                          <span className="font-mono">{track.duration}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Image" className="text-neon-pink" size={28} />
                  <h2 className="text-3xl font-bold text-foreground">Галерея</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {artist.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`${artist.name} ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-card/50 backdrop-blur border-neon-purple/30 sticky top-24">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Icon name="Sparkles" className="text-neon-purple" size={24} />
                    <h3 className="text-xl font-bold text-foreground">О артисте</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {artist.bio}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">Жанр</span>
                      <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/50">
                        {artist.genre}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">Треков</span>
                      <span className="font-semibold text-foreground">{artist.tracks.length}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">Подписчики</span>
                      <span className="font-semibold text-foreground">{artist.followers}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-neon-blue hover:bg-neon-blue/80 text-background font-semibold glow-neon-blue">
                      <Icon name="UserPlus" className="mr-2" size={20} />
                      Подписаться
                    </Button>
                    <Button variant="outline" className="w-full border-neon-pink text-neon-pink hover:bg-neon-pink/10">
                      <Icon name="Share2" className="mr-2" size={20} />
                      Поделиться
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtistDetail;
