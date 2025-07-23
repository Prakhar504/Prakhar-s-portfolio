"use client"
import { cn } from "@/lib/utils";


import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
  MoreHorizontal,
 
  User,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/animation/DockAnimation';

import Link from "next/link";
import { useEffect, useState } from "react";
import FramerWrapper from "./animation/FramerWrapper";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const Navbar = () => {
  const links = [
    { title: "Home", href: "/", icon: <HomeIcon className="inline-block w-5 h-5 mr-1 sm:hidden" /> },
    { title: "About", href: "/about", icon: <User className="inline-block w-5 h-5 mr-1 sm:hidden" /> },
    { title: "Skills", href: "/skills", icon: <LightbulbIcon className="inline-block w-5 h-5 mr-1 sm:hidden" /> },
    { title: "Education", href: "/education", icon: <GraduationCap className="inline-block w-5 h-5 mr-1 sm:hidden" /> },
    { title: "Projects", href: "/projects", icon: <FolderGit2 className="inline-block w-5 h-5 mr-1 sm:hidden" /> },
  ];
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-black/80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center px-4 sm:px-8 py-3">
        <div className="flex gap-4 sm:gap-10 overflow-x-auto whitespace-nowrap sm:overflow-x-visible sm:whitespace-normal scrollbar-hide w-full justify-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative uppercase text-white font-bold tracking-wide text-sm px-2 py-1 transition-colors duration-200 hover:text-[hsl(var(--accent))]"
            >
              <span className="inline sm:hidden">{link.icon}</span>
              <span className="sm:inline hidden">{link.title}</span>
              {pathname === link.href && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[hsl(var(--accent))] rounded"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
