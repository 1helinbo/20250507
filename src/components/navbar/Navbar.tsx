"use client";

import {useState} from "react";
import { AlignJustify, Sprout, X } from "lucide-react";
import { Button } from "../ui/button";
import styles from "./Navbar.module.scss";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="logo">
        <a href="#" className="flex items-center p-2 font-bold text-xl">
          <Sprout size={30} />
          PDF.ai
        </a>
      </div>
      <div className={cn("flex items-center hide-mobile", styles["nav-main"])}>
        <a href="#">定价</a>
        <a href="#">Chrome 扩展程序</a>
        <a href="#">用例</a>
        <a href="#">API 中心</a>
        <a href="#">ZH-CN</a>
        <a href="#">开始 →</a>
      </div>
      <Button variant="link" className="hide-desktop" onClick={handleToggle}>
        {isOpen? <X size={20} /> : <AlignJustify size={20} />}
      </Button>
      <div
        className={cn(
          "hide-desktop",
          styles["nav-menu"],
          isOpen && styles["open"]
        )}>
        <a href="#">定价</a>
        <a href="#">Chrome 扩展程序</a>
        <a href="#">用例</a>
        <a href="#">API 中心</a>
        <a href="#">ZH-CN</a>
        <a href="#">开始 →</a>
      </div>
    </nav>
  );
};

export default Navbar;
