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
import { Badge } from '@/components/ui/badge';

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
      {console.log('path', path)}
      <Accordion
        type="multiple"
        defaultValue={items.map((item: any) => item.key)}
      >
        {items.map(({ heading, key, Icon, links }: any) => {
          // const Icon = Icons[item.icon || 'arrowRight'];
          return (
            <AccordionItem key={key} value={key}>
              <AccordionTrigger className="px-6">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Icon className="h-4 w-4" />
                  <span className="uppercase font-medium truncate text-ellipsis tracking-wide">
                    {heading}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col pl-7 ">
                  {links &&
                    links.map((item: any, index: any) =>
                      !item.disabled ? (
                        <li key={index}>
                          <Link
                            href={item.href}
                            className={cn(
                              'border-l-2 border-border group flex items-center justify-between px-7 py-1.5 cursor-pointer',
                              {
                                'border-[#adfa1d]': path === item.href,
                              }
                            )}
                          >
                            <span>
                              <span
                                className={cn(
                                  'tracking-normal group-hover:opacity-60 duration-300 transition-opacity ease-out',
                                  {
                                    'font-medium text-foreground':
                                      path === item.href,
                                    'text-muted-foreground': path !== item.href,
                                  }
                                )}
                              >
                                {item.title}
                              </span>
                              {item.label && (
                                <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                  {item.label}
                                </span>
                              )}
                            </span>
                            <span className="text-muted">0</span>
                          </Link>
                        </li>
                      ) : (
                        <span
                          key={index}
                          className={cn(
                            'border-l-2 border-border group flex items-center justify-between px-7 py-1.5 text-muted-foreground',
                            item.disabled && 'cursor-not-allowed opacity-60'
                          )}
                        >
                          {item.title}
                          {item.label && (
                            <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                              {item.label}
                            </span>
                          )}
                        </span>
                      )
                    )}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </nav>
  );
}
