import { useParams } from "react-router-dom";
import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockVideos } from "@/data/mockVideos";
import VideoCard from "@/components/VideoCard";

const Watch = () => {
  const { id } = useParams();
  const video = mockVideos.find(v => v.id === id);
  
  if (!video) {
    return <div className="pt-16 pl-60 p-8">Video not found</div>;
  }

  const relatedVideos = mockVideos.filter(v => v.id !== id).slice(0, 6);

  return (
    <div className="pt-16 pl-60 min-h-screen bg-background">
      <div className="flex gap-6 p-6">
        {/* Main Content */}
        <div className="flex-1 max-w-5xl">
          {/* Video Player */}
          <div className="aspect-video bg-black rounded-xl mb-4 relative overflow-hidden">
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
              </div>
            </div>
          </div>

          {/* Video Title */}
          <h1 className="text-xl font-semibold mb-4 leading-6">{video.title}</h1>

          {/* Channel Info & Actions */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-youtube-red to-purple-600 flex items-center justify-center">
                <span className="text-white font-medium">
                  {video.channelName.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h3 className="font-medium">{video.channelName}</h3>
                <p className="text-sm text-muted-foreground">1.2M subscribers</p>
              </div>
              <Button className="ml-4 bg-youtube-red hover:bg-youtube-red-hover rounded-full px-6">
                Subscribe
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex bg-secondary rounded-full">
                <Button variant="ghost" className="rounded-l-full rounded-r-none px-4 py-2 h-9">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  1.2K
                </Button>
                <div className="w-px bg-border my-1" />
                <Button variant="ghost" className="rounded-l-none rounded-r-full px-4 py-2 h-9">
                  <ThumbsDown className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="secondary" className="rounded-full px-4 py-2 h-9">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="secondary" className="rounded-full px-4 py-2 h-9">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="secondary" size="sm" className="rounded-full p-2 h-9 w-9">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Video Stats */}
          <div className="bg-secondary rounded-xl p-4 mb-6">
            <div className="flex items-center gap-4 text-sm font-medium mb-2">
              <span>{video.views} views</span>
              <span>Jan 15, 2024</span>
            </div>
            <p className="text-sm text-muted-foreground leading-5">
              This is where the video description would go. It would contain details about the video content,
              links to products mentioned, timestamps for different sections, and other relevant information
              that helps viewers understand what the video is about.
            </p>
          </div>

          {/* Comments Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Comments</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-medium">U</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">@user{i}</span>
                      <span className="text-xs text-muted-foreground">2 days ago</span>
                    </div>
                    <p className="text-sm">Great video! Really helpful content.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Related Videos */}
        <div className="w-80 space-y-4">
          <h3 className="font-medium mb-4">Related Videos</h3>
          {relatedVideos.map((relatedVideo) => (
            <VideoCard key={relatedVideo.id} {...relatedVideo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watch;