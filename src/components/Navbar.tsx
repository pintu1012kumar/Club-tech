"use client";
import React from 'react'
import  { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from 'next/link';

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)} >
      
      <Menu setActive={setActive}>
        <Link href={"/"} >
        <MenuItem setActive={setActive} active={active} item="Home">

       </MenuItem>
        </Link>
         
        <MenuItem setActive={setActive} active={active} item="All Courses">
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/courses/javascript">JavaScript</HoveredLink>
        <HoveredLink href="/courses/reactjs">ReactJs</HoveredLink>
        <HoveredLink href="/courses/nodejs">NodeJs</HoveredLink>
        <HoveredLink href="/courses/fullstack">Full Stack Development</HoveredLink>
        <HoveredLink href="/courses/devops">Devops</HoveredLink>
        </div>
     
       </MenuItem>

       <Link href={"/contact"} >
        <MenuItem setActive={setActive} active={active} item="Contact Us">

       </MenuItem>
        </Link>

      </Menu>

    </div>
  )
}

export default Navbar
