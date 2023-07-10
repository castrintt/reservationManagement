import React from "react";
import { IconType } from "react-icons/lib";
import styles from "./SidebarIcon.module.css";

type SidebarIconProps = {
  icon: IconType;
};

const SidebarIcon = ({ icon: Icon }: SidebarIconProps) => {
  return <Icon className={styles.icon} />;
};

export default SidebarIcon;
