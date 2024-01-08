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
        title: 'Songwriters',
        href: '/songwriters',
        key: 'songwriters',
        disabled: true,
      },
      {
        title: 'Publishers',
        href: '/publishers',
        key: 'publishers',
        disabled: true,
      },
    ],
  },
  {
    heading: 'Portfolio manager',
    key: 'portfolio-manager',
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
      {
        title: 'Collections',
        href: '/dashboard/collections',
        key: 'collections',
        disabled: true,
      },
    ],
  },
  {
    heading: 'Analytics',
    key: 'works-manager',
    Icon: Music,
    links: [
      {
        title: 'Hit Prediction',
        href: '/hit-prediction',
        key: 'hit-prediction',
        disabled: true,
        label: 'New',
      },
      {
        title: 'Originality Score',
        href: '/originality-score',
        key: 'originality-score',
        disabled: true,
      },
      {
        title: 'Valuation Estimate',
        href: '/valuation-estimate',
        key: 'valuation-estimate',
        disabled: true,
      },
      {
        title: 'Spectral Analyzer',
        href: '/spectral-analyzer',
        key: 'spectral-analyzer',
        disabled: true,
      },
    ],
  },
  {
    heading: 'CRM',
    key: 'crm',
    Icon: Truck,
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
    heading: 'Licensing/Sales',
    key: 'licensing&sales',
    Icon: Send,
    links: [
      {
        title: 'Rights Manager',
        href: '/rights-manager',
        key: 'rights-manager',
        disabled: true,
      },
      {
        title: 'My Offers',
        href: '/my-offers',
        key: 'my-offers',
        disabled: true,
      },
    ],
  },
  // {
  //   heading: 'CRM',
  //   key: 'crm',
  //   Icon: BookUser,
  //   links: [
  //     {
  //       title: 'Contacts',
  //       href: '/contacts',
  //       key: 'contacts',
  //       disabled: true,
  //     },
  //     {
  //       title: 'Companies',
  //       href: '/companies',
  //       key: 'companies',
  //       disabled: true,
  //     },
  //   ],
  // },
  // {
  //   heading: 'Rights manager',
  //   key: 'rights-manager',
  //   Icon: BookText,
  //   links: [
  //     {
  //       title: 'Contacts',
  //       href: '/contacts',
  //       key: 'contacts',
  //       disabled: true,
  //     },
  //   ],
  // },
  // {
  //   heading: 'Settings',
  //   key: 'settings',
  //   Icon: Wrench,
  //   links: [
  //     {
  //       title: 'Setting-1',
  //       href: '/setting-1',
  //       key: 'setting-1',
  //       disabled: true,
  //     },
  //     {
  //       title: 'Setting-2',
  //       href: '/setting-2',
  //       key: 'setting-2',
  //       disabled: true,
  //     },
  //   ],
  // },
];
