import thumb1 from "@/assets/thumb1.jpg";
import thumb2 from "@/assets/thumb2.jpg";
import thumb3 from "@/assets/thumb3.jpg";
import thumb4 from "@/assets/thumb4.jpg";

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channelName: string;
  views: string;
  uploadedAt: Date;
  duration: string;
}

export const mockVideos: Video[] = [
  {
    id: "1",
    title: "Ultimate Tech Setup Tour 2024 - My Complete Workspace",
    thumbnail: thumb1,
    channelName: "TechReviewer",
    views: "1.2M",
    uploadedAt: new Date(2024, 0, 15),
    duration: "12:34"
  },
  {
    id: "2", 
    title: "5-Minute Healthy Breakfast Recipes That Will Change Your Life",
    thumbnail: thumb2,
    channelName: "QuickCook",
    views: "856K",
    uploadedAt: new Date(2024, 0, 12),
    duration: "8:45"
  },
  {
    id: "3",
    title: "Full Body Workout - No Equipment Needed (Beginner Friendly)",
    thumbnail: thumb3,
    channelName: "FitLife",
    views: "2.1M",
    uploadedAt: new Date(2024, 0, 10),
    duration: "15:22"
  },
  {
    id: "4",
    title: "Solo Travel Adventure: Hiking the Alps - Epic Mountain Views",
    thumbnail: thumb4,
    channelName: "WanderlustVlog",
    views: "634K",
    uploadedAt: new Date(2024, 0, 8),
    duration: "18:56"
  },
  {
    id: "5",
    title: "Building My Dream Gaming Setup - RTX 4090 Build Guide",
    thumbnail: thumb1,
    channelName: "TechReviewer", 
    views: "3.4M",
    uploadedAt: new Date(2024, 0, 5),
    duration: "22:15"
  },
  {
    id: "6",
    title: "Italian Pasta Masterclass - Professional Chef Techniques",
    thumbnail: thumb2,
    channelName: "ChefMaster",
    views: "1.8M", 
    uploadedAt: new Date(2024, 0, 3),
    duration: "16:42"
  },
  {
    id: "7",
    title: "Morning Yoga Flow - 20 Minutes to Start Your Day Right",
    thumbnail: thumb3,
    channelName: "YogaZen",
    views: "925K",
    uploadedAt: new Date(2024, 0, 1),
    duration: "20:03"
  },
  {
    id: "8",
    title: "Tokyo Street Food Tour - Must Try Japanese Delicacies",
    thumbnail: thumb4,
    channelName: "FoodieTravel",
    views: "2.7M",
    uploadedAt: new Date(2023, 11, 28),
    duration: "24:18"
  }
];