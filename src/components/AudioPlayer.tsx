import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface Track {
  id: number;
  title: string;
  artist: string;
  cover: string;
  duration: string;
}

interface AudioPlayerProps {
  tracks: Track[];
}

const AudioPlayer = ({ tracks }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    } else {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying, currentTrackIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
      setProgress(0);
    }
  };

  const handleNext = () => {
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      setProgress(0);
    } else {
      setIsPlaying(false);
      setProgress(0);
    }
  };

  const handleProgressChange = (value: number[]) => {
    setProgress(value[0]);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setProgress(0);
    setIsPlaying(true);
    setShowPlaylist(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentTime = formatTime((progress / 100) * 180);
  const totalTime = currentTrack?.duration || '3:00';

  return (
    <>
      <Card className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-neon-blue/30 shadow-2xl z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 glow-neon-blue">
                <img
                  src={currentTrack?.cover}
                  alt={currentTrack?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-bold text-foreground truncate">{currentTrack?.title}</h4>
                <p className="text-xs text-muted-foreground truncate">{currentTrack?.artist}</p>
              </div>
            </div>

            <div className="flex-1 max-w-2xl">
              <div className="flex items-center justify-center gap-4 mb-2">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handlePrevious}
                  disabled={currentTrackIndex === 0}
                  className="text-foreground hover:text-neon-blue"
                >
                  <Icon name="SkipBack" size={20} />
                </Button>
                <Button
                  size="icon"
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-neon-blue hover:bg-neon-blue/80 text-background glow-neon-blue"
                >
                  <Icon name={isPlaying ? 'Pause' : 'Play'} size={24} />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleNext}
                  disabled={currentTrackIndex === tracks.length - 1}
                  className="text-foreground hover:text-neon-pink"
                >
                  <Icon name="SkipForward" size={20} />
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-12 text-right">{currentTime}</span>
                <Slider
                  value={[progress]}
                  onValueChange={handleProgressChange}
                  max={100}
                  step={0.1}
                  className="flex-1"
                />
                <span className="text-xs text-muted-foreground w-12">{totalTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-1 justify-end">
              <div className="flex items-center gap-2">
                <Icon name="Volume2" size={20} className="text-muted-foreground" />
                <Slider
                  value={[volume]}
                  onValueChange={handleVolumeChange}
                  max={100}
                  step={1}
                  className="w-24"
                />
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setShowPlaylist(!showPlaylist)}
                className="text-foreground hover:text-neon-purple"
              >
                <Icon name="ListMusic" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {showPlaylist && (
        <Card className="fixed bottom-24 right-6 w-96 max-h-96 overflow-y-auto bg-card/95 backdrop-blur-xl border border-neon-purple/30 shadow-2xl z-50">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-neon-purple">Плейлист</h3>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setShowPlaylist(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
            <div className="space-y-2">
              {tracks.map((track, index) => (
                <div
                  key={track.id}
                  onClick={() => selectTrack(index)}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                    index === currentTrackIndex
                      ? 'bg-neon-blue/20 border border-neon-blue/50'
                      : 'hover:bg-muted/50'
                  }`}
                >
                  <div className="relative w-12 h-12 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={track.cover}
                      alt={track.title}
                      className="w-full h-full object-cover"
                    />
                    {index === currentTrackIndex && isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <Icon name="Play" size={16} className="text-neon-blue" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-foreground truncate">{track.title}</h4>
                    <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{track.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default AudioPlayer;
