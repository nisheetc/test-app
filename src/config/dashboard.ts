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
    heading: 'Contributors',
    key: 'contributors',
    Icon: UsersRound,
    links: [
      {
        label: 'Artists',
        href: '/artists',
        key: 'artists',
      },
      {
        label: 'Record Labels',
        href: '/record-labels',
        key: 'record-labels',
      },
      {
        label: 'Songwriters',
        href: '/songwriters',
        key: 'song-writers',
      },
      {
        label: 'Music Publishers',
        href: '/music-publishers',
        key: 'music-publishers',
      },
    ],
  },
  {
    heading: 'Properties',
    key: 'properties',
    Icon: Tags,
    links: [
      {
        label: 'Property 1',
        href: '/property-1',
        key: 'property-1',
      },
      {
        label: 'Property 2',
        href: '/property-2',
        key: 'property-2',
      },
    ],
  },
  {
    heading: 'Audio manager',
    key: 'audio-manager',
    Icon: Headphones,
    links: [
      {
        label: 'Tracks',
        href: '/tracks',
        key: 'tracks',
      },
      {
        label: 'Albums',
        href: '/albums',
        key: 'albums',
      },
    ],
  },
  {
    heading: 'Works manager',
    key: 'works-manager',
    Icon: Music,
    links: [
      {
        label: 'Works',
        href: '/works',
        key: 'works',
      },
    ],
  },
  {
    heading: 'Releases manager',
    key: 'releases-manager',
    Icon: Truck,
    links: [
      {
        label: 'Release 1',
        href: '/release-1',
        key: 'release-1',
      },
      {
        label: 'Release 2',
        href: '/release-2',
        key: 'release-2',
      },
    ],
  },
  {
    heading: 'Playlists for business',
    key: 'playlists-for-business',
    Icon: Send,
    links: [
      {
        label: 'Playlist 1',
        href: '/playlist-1',
        key: 'playlist-1',
      },
      {
        label: 'Playlist 2',
        href: '/playlist-2',
        key: 'playlist-2',
      },
    ],
  },
  {
    heading: 'CRM',
    key: 'crm',
    Icon: BookUser,
    links: [
      {
        label: 'Contacts',
        href: '/contacts',
        key: 'contacts',
      },
      {
        label: 'Companies',
        href: '/companies',
        key: 'companies',
      },
    ],
  },
  {
    heading: 'Rights manager',
    key: 'rights-manager',
    Icon: BookText,
    links: [
      {
        label: 'Contacts',
        href: '/contacts',
        key: 'contacts',
      },
    ],
  },
  {
    heading: 'Settings',
    key: 'settings',
    Icon: Wrench,
    links: [
      {
        label: 'Setting-1',
        href: '/setting-1',
        key: 'setting-1',
      },
      {
        label: 'Setting-2',
        href: '/setting-2',
        key: 'setting-2',
      },
    ],
  },
];
