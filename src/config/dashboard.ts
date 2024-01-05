'use client';

import { DashboardConfig } from '@/types';

import {
  UsersRound,
  Tags,
  Headphones,
  Music,
  Truck,
  Send,
  BookUser,
  BookText,
  Wrench,
} from 'lucide-react';

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Support',
      href: '/support',
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: 'Posts',
      href: '/dashboard',
      icon: 'post',
    },
    {
      title: 'Billing',
      href: '/dashboard/billing',
      icon: 'billing',
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: 'settings',
    },
  ],
};

export const sectionWithHeaders = [
  {
    heading: 'Overview',
    key: 'overview',
    Icon: UsersRound,
    links: [
      {
        title: 'Artists',
        href: '/artists',
        key: 'artists',
        disabled: true,
      },
      {
        title: 'Record titles',
        href: '/record-titles',
        key: 'record-titles',
        disabled: true,
      },
      {
        title: 'Songwriters',
        href: '/songwriters',
        key: 'song-writers',
        disabled: true,
      },
      {
        title: 'Music Publishers',
        href: '/music-publishers',
        key: 'music-publishers',
        disabled: true,
      },
    ],
  },
  {
    heading: 'Properties',
    key: 'properties',
    Icon: Tags,
    links: [
      {
        title: 'Property 1',
        href: '/property-1',
        key: 'property-1',
        disabled: true,
      },
      {
        title: 'Property 2',
        href: '/property-2',
        key: 'property-2',
        disabled: true,
      },
    ],
  },
  {
    heading: 'Audio manager',
    key: 'audio-manager',
    Icon: Headphones,
    links: [
      {
        title: 'Tracks',
        href: '/dashboard/tracks',
        key: 'tracks',
        disabled: false,
        label: 'New',
      },
      {
        title: 'Albums',
        href: '/dashboard/albums',
        key: 'albums',
        disabled: false,
      },
    ],
  },
  {
    heading: 'Works manager',
    key: 'works-manager',
    Icon: Music,
    links: [
      {
        title: 'Works',
        href: '/works',
        key: 'works',
        disabled: true,
      },
    ],
  },
  {
    heading: 'Releases manager',
    key: 'releases-manager',
    Icon: Truck,
    links: [
      {
        title: 'Release 1',
        href: '/release-1',
        key: 'release-1',
        disabled: true,
      },
      {
        title: 'Release 2',
        href: '/release-2',
        key: 'release-2',
        disabled: true,
      },
    ],
  },
  {
    heading: 'Playlists for business',
    key: 'playlists-for-business',
    Icon: Send,
    links: [
      {
        title: 'Playlist 1',
        href: '/playlist-1',
        key: 'playlist-1',
        disabled: true,
      },
      {
        title: 'Playlist 2',
        href: '/playlist-2',
        key: 'playlist-2',
        disabled: true,
      },
    ],
  },
  {
    heading: 'CRM',
    key: 'crm',
    Icon: BookUser,
    links: [
      {
        title: 'Contacts',
        href: '/contacts',
        key: 'contacts',
        disabled: true,
      },
      {
        title: 'Companies',
        href: '/companies',
        key: 'companies',
        disabled: true,
      },
    ],
  },
  {
    heading: 'Rights manager',
    key: 'rights-manager',
    Icon: BookText,
    links: [
      {
        title: 'Contacts',
        href: '/contacts',
        key: 'contacts',
        disabled: true,
      },
    ],
  },
  {
    heading: 'Settings',
    key: 'settings',
    Icon: Wrench,
    links: [
      {
        title: 'Setting-1',
        href: '/setting-1',
        key: 'setting-1',
        disabled: true,
      },
      {
        title: 'Setting-2',
        href: '/setting-2',
        key: 'setting-2',
        disabled: true,
      },
    ],
  },
];
