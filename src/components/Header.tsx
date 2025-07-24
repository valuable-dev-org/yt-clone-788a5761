import { Search, Menu, Mic, Bell, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-youtube-header-bg border-b border-border px-4 py-3">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="p-2">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 bg-youtube-red rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">YT</span>
            </div>
            <span className="text-xl font-medium ml-1">YouTube</span>
          </div>
        </div>

        {/* Center section - Search */}
        <div className="flex items-center gap-3 flex-1 max-w-2xl mx-8">
          <div className="flex flex-1 max-w-xl">
            <Input
              placeholder="Search"
              className="rounded-l-full rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-background border-border"
            />
            <Button className="rounded-l-none rounded-r-full px-6 bg-secondary hover:bg-secondary/80 border border-l-0 border-border">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="p-2 rounded-full bg-secondary hover:bg-secondary/80">
            <Mic className="h-5 w-5" />
          </Button>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="p-2">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2 rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;