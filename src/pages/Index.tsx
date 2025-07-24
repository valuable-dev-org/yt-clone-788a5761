import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import VideoCard from "@/components/VideoCard";
import { mockVideos } from "@/data/mockVideos";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      
      {/* Main Content */}
      <main className="pt-16 pl-60 p-6">
        <div className="max-w-screen-2xl mx-auto">
          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {mockVideos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
