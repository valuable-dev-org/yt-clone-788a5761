import { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router-dom";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  channelName: string;
  views: string;
  uploadedAt: Date;
  duration: string;
}

const VideoCard = ({ id, title, thumbnail, channelName, views, uploadedAt, duration }: VideoCardProps) => {
  const navigate = useNavigate();
  const timeAgo = formatDistanceToNow(uploadedAt, { addSuffix: true });

  const handleClick = () => {
    navigate(`/watch/${id}`);
  };

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-secondary">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
          {duration}
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Video Info */}
      <div className="flex gap-3">
        {/* Channel Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-youtube-red to-purple-600 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-medium">
            {channelName.charAt(0).toUpperCase()}
          </span>
        </div>

        {/* Video Details */}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm leading-5 line-clamp-2 mb-1 group-hover:text-foreground transition-colors">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground mb-1">{channelName}</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>{views} views</span>
            <span>•</span>
            <span>{timeAgo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;