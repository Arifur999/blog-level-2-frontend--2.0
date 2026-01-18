import { Route } from "@/types";

export const adminRoutes : Route[] = [
    {
      title: "Getting Started",
      items: [
        {
          title: "Home",
          url: "/",
        },
       
        {
          title: "Analyze",
          url: "/dashboard/analyze",
        },
        {
          title: "manage",
          url: "/dashboard/manage",
        },
        {
          title: "admin Dashboard",
          url: "/admin-dashboard",
        },
    
      ],
    }
  ];