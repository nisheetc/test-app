'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SidebarNavItem } from '@/types';
import { cn } from '@/utils';
// import { Icons } from '@/components/icons';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface DashboardNavProps {
  items: any; //update types
}

export function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      <Accordion
        type="multiple"
        defaultValue={items.map((item: any) => item.key)}
      >
        {items.map(({ heading, key, Icon, links }: any) => {
          // const Icon = Icons[item.icon || 'arrowRight'];
          return (
            <AccordionItem key={key} value={key}>
              <AccordionTrigger className="px-6">
                <div className="flex items-center gap-3 overflow-hidden text-muted-foreground">
                  <Icon className="h-5 w-5" />
                  <span className="text-base uppercase font-medium truncate text-ellipsis">
                    {heading}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col">
                  {links &&
                    links.map((item: any, index: any) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="group flex items-center justify-between pl-14 pr-7 py-1.5 cursor-pointer"
                        >
                          <span className="text-base tracking-normal group-hover:opacity-60 duration-300 transition-opacity ease-out">
                            {item.label}
                          </span>
                          <span className="text-muted">0</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </nav>
  );
}
