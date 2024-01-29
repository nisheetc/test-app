import { sectionWithHeaders } from '@/config/dashboard';
import { DashboardNav } from '@/components/nav';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SiteHeader } from '@/components/site-header';
import Providers from './providers';

const styles = {
  container: `flex flex-col min-h-[calc(100dvh)]`,
  childrenContainer: `mt-[70px] relative flex-grow`,
};

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <Providers>
      <div className={styles.container}>
        <SiteHeader />

        <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="fixed top-16 z-30 hidden h-[calc(100dvh-4rem)] w-full shrink-0 md:sticky md:block">
            <ScrollArea className="h-full border-r py-4">
              <DashboardNav items={sectionWithHeaders} />
            </ScrollArea>
          </aside>
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </Providers>
  );
}
