import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const artists = [
    {
      id: 1,
      name: 'NEURAL WAVE',
      genre: 'Synthwave',
      image: 'https://cdn.poehali.dev/projects/307c7f25-f83a-4dc1-9dc7-e4d7d899f36b/files/a2dc6f83-8bba-451d-8aa8-d60290ff61a1.jpg'
    },
    {
      id: 2,
      name: 'QUANTUM PULSE',
      genre: 'Techno',
      image: 'https://cdn.poehali.dev/projects/307c7f25-f83a-4dc1-9dc7-e4d7d899f36b/files/a2dc6f83-8bba-451d-8aa8-d60290ff61a1.jpg'
    },
    {
      id: 3,
      name: 'CYBER ECHO',
      genre: 'Ambient',
      image: 'https://cdn.poehali.dev/projects/307c7f25-f83a-4dc1-9dc7-e4d7d899f36b/files/a2dc6f83-8bba-451d-8aa8-d60290ff61a1.jpg'
    }
  ];

  const releases = [
    {
      id: 1,
      title: 'Digital Dreams',
      artist: 'NEURAL WAVE',
      cover: 'https://cdn.poehali.dev/projects/307c7f25-f83a-4dc1-9dc7-e4d7d899f36b/files/3863a604-2f4e-440a-b805-f16032d3f7c8.jpg',
      year: '2024'
    },
    {
      id: 2,
      title: 'Neon Horizons',
      artist: 'QUANTUM PULSE',
      cover: 'https://cdn.poehali.dev/projects/307c7f25-f83a-4dc1-9dc7-e4d7d899f36b/files/912e2123-9694-4b77-af83-4ee49168177f.jpg',
      year: '2024'
    },
    {
      id: 3,
      title: 'Silicon Sunrise',
      artist: 'CYBER ECHO',
      cover: 'https://cdn.poehali.dev/projects/307c7f25-f83a-4dc1-9dc7-e4d7d899f36b/files/3863a604-2f4e-440a-b805-f16032d3f7c8.jpg',
      year: '2024'
    },
    {
      id: 4,
      title: 'Binary Beats',
      artist: 'NEURAL WAVE',
      cover: 'https://cdn.poehali.dev/projects/307c7f25-f83a-4dc1-9dc7-e4d7d899f36b/files/912e2123-9694-4b77-af83-4ee49168177f.jpg',
      year: '2024'
    }
  ];

  const tracks = [
    {
      id: 1,
      title: 'Digital Dreams',
      artist: 'NEURAL WAVE',
      cover: 'https://cdn.poehali.dev/projects/307c7f25-f83a-4dc1-9dc7-e4d7d899f36b/files/3863a604-2f4e-440a-b805-f16032d3f7c8.jpg',
      duration: '3:45'
    },
    {
      id: 2,
      title: 'Neon Horizons',
      artist: 'QUANTUM PULSE',
      cover: 'https://cdn.poehali.dev/projects/307c7f25-f83a-4dc1-9dc7-e4d7d899f36b/files/912e2123-9694-4b77-af83-4ee49168177f.jpg',
      duration: '4:12'
    },
    {
      id: 3,
      title: 'Silicon Sunrise',
      artist: 'CYBER ECHO',
      cover: 'https://cdn.poehali.dev/projects/307c7f25-f83a-4dc1-9dc7-e4d7d899f36b/files/3863a604-2f4e-440a-b805-f16032d3f7c8.jpg',
      duration: '3:28'
    },
    {
      id: 4,
      title: 'Binary Beats',
      artist: 'NEURAL WAVE',
      cover: 'https://cdn.poehali.dev/projects/307c7f25-f83a-4dc1-9dc7-e4d7d899f36b/files/912e2123-9694-4b77-af83-4ee49168177f.jpg',
      duration: '3:55'
    },
    {
      id: 5,
      title: 'Quantum State',
      artist: 'QUANTUM PULSE',
      cover: 'https://cdn.poehali.dev/projects/307c7f25-f83a-4dc1-9dc7-e4d7d899f36b/files/3863a604-2f4e-440a-b805-f16032d3f7c8.jpg',
      duration: '4:03'
    },
    {
      id: 6,
      title: 'Neural Network',
      artist: 'CYBER ECHO',
      cover: 'https://cdn.poehali.dev/projects/307c7f25-f83a-4dc1-9dc7-e4d7d899f36b/files/912e2123-9694-4b77-af83-4ee49168177f.jpg',
      duration: '3:38'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-neon-blue/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-neon-blue text-glow-blue">AI RECORDS</h1>
            <div className="flex gap-6">
              {['Главная', 'Артисты', 'Релизы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-sm font-medium text-foreground hover:text-neon-pink transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink rounded-full glow-neon-blue animate-pulse-glow" />
          </div>
          <h2 className="text-7xl font-black mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
            FUTURE OF MUSIC
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Первый музыкальный лейбл, созданный искусственным интеллектом для искусственного интеллекта
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-neon-blue hover:bg-neon-blue/80 text-background font-bold glow-neon-blue">
              <Icon name="Play" className="mr-2" size={20} />
              Слушать
            </Button>
            <Button variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink/10">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Icon name="Users" className="text-neon-purple" size={32} />
            <h3 className="text-4xl font-bold text-neon-purple text-glow-purple">AI АРТИСТЫ</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <Card
                key={artist.id}
                className="group bg-card/50 backdrop-blur border-neon-blue/20 hover:border-neon-blue transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 hover:glow-neon-blue"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-2xl font-bold text-neon-blue mb-1">{artist.name}</h4>
                    <p className="text-muted-foreground">{artist.genre}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Icon name="Disc3" className="text-neon-pink" size={32} />
            <h3 className="text-4xl font-bold text-neon-pink text-glow-pink">РЕЛИЗЫ</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {releases.map((release) => (
              <Card
                key={release.id}
                className="group bg-card/50 backdrop-blur border-neon-pink/20 hover:border-neon-pink transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 hover:glow-neon-pink"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={release.cover}
                    alt={release.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Button
                    size="icon"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-neon-pink hover:bg-neon-pink/80 text-background glow-neon-pink transition-all duration-300"
                  >
                    <Icon name="Play" size={24} />
                  </Button>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-foreground mb-1 truncate">{release.title}</h4>
                  <p className="text-sm text-muted-foreground truncate">{release.artist}</p>
                  <p className="text-xs text-muted-foreground mt-1">{release.year}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Icon name="Sparkles" className="mx-auto mb-6 text-neon-purple" size={48} />
            <h3 className="text-4xl font-bold mb-6 text-neon-purple text-glow-purple">О ЛЕЙБЛЕ</h3>
            <p className="text-lg text-muted-foreground mb-8">
              AI Records — это революционная платформа, где искусственный интеллект создаёт музыку будущего. 
              Мы объединяем передовые технологии машинного обучения с творческим процессом, создавая уникальные 
              звуковые ландшафты, которые раздвигают границы возможного в музыке.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-blue mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Релизов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-pink mb-2">50+</div>
                <div className="text-sm text-muted-foreground">AI Артистов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-purple mb-2">10M+</div>
                <div className="text-sm text-muted-foreground">Прослушиваний</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-neon-blue/20 bg-card/30 mb-24">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-xl font-bold text-neon-blue text-glow-blue mb-2">AI RECORDS</h4>
              <p className="text-sm text-muted-foreground">Музыка будущего уже здесь</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-pink transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © 2024 AI Records. Все права защищены.
          </div>
        </div>
      </footer>

      <AudioPlayer tracks={tracks} />
    </div>
  );
};

export default Index;