import { AppstoreOutlined, ProfileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href="/resume">My Profile</Link>,
          key: `/${role}/resume`,
        },
      ],
    },
  ];
  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Manage Company",
      key: "company",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href="/dashboard/company">View Company</Link>,
          key: `/${role}/dashboard/company`,
        },
      ],
    },
    {
      label: "Manage Blog",
      key: "blog",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href="/dashboard/blog">View Blog</Link>,
          key: `/${role}/dashboard/blog`,
        },
        {
          label: <Link href="/dashboard/blog/create">Publish a Blog</Link>,
          key: `/${role}/dashboard/blog/create`,
        },
      ],
    },
  ];
  const recruiterSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Manage Job",
      key: "management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href="/dashboard/job">View Job</Link>,
          key: `/${role}/dashboard/job`,
        },
        {
          label: <Link href="/dashboard/job/create">Publish a Job</Link>,
          key: `/${role}/dashboard/job/create`,
        },
      ],
    },

    {
      label: "Manage Blog",
      key: "blog",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href="/dashboard/blog">View Blog</Link>,
          key: `/${role}/dashboard/blog`,
        },
        {
          label: <Link href="/dashboard/blog/create">Publish a Blog</Link>,
          key: `/${role}/dashboard/blog/create`,
        },
      ],
    },
    {
      label: "Manage Events",
      key: "events",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href="/dashboard/events">View Events</Link>,
          key: `/${role}/dashboard/events`,
        },
        {
          label: <Link href="/dashboard/events/create">Manage events</Link>,
          key: `/${role}/dashboard/events/create`,
        },
      ],
    },

  ];

  if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.RECRUITER) return recruiterSidebarItems;
  else {
    return defaultSidebarItems;
  }
};


