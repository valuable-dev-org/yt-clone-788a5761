import { Home, Compass, PlaySquare, Clock, ThumbsUp, FolderOpen, User, Settings } from "lucide-react";
import { Button } from "./ui/button";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Compass, label: "Explore" },
    { icon: PlaySquare, label: "Subscriptions" },
  ];

  const libraryItems = [
    { icon: FolderOpen, label: "Library" },
    { icon: Clock, label: "History" },
    { icon: ThumbsUp, label: "Liked videos" },
  ];

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-60 bg-youtube-sidebar-bg border-r border-border overflow-y-auto z-40">
      <div className="p-3">
        {/* Main Navigation */}
        <div className="space-y-1 mb-6">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className={`w-full justify-start gap-6 px-3 py-2 h-10 ${
                item.active ? "bg-secondary hover:bg-secondary" : "hover:bg-youtube-video-hover"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-sm">{item.label}</span>
            </Button>
          ))}
        </div>

        <hr className="border-border mb-6" />

        {/* Library */}
        <div className="space-y-1 mb-6">
          <h3 className="text-sm font-medium text-muted-foreground px-3 mb-2">Library</h3>
          {libraryItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start gap-6 px-3 py-2 h-10 hover:bg-youtube-video-hover"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-sm">{item.label}</span>
            </Button>
          ))}
        </div>

        <hr className="border-border mb-6" />

        {/* Settings */}
        <div className="space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start gap-6 px-3 py-2 h-10 hover:bg-youtube-video-hover"
          >
            <Settings className="h-5 w-5" />
            <span className="text-sm">Settings</span>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;