// import { notFound } from 'next/navigation';

import { dashboardConfig, sectionWithHeaders } from '@/config/dashboard';
// import { getCurrentUser } from '@/lib/session';
// import { MainNav } from '@/components/main-nav';
import { DashboardNav } from '@/components/nav';
import { Layers3 } from 'lucide-react';
// import { SiteFooter } from '@/components/site-footer';
// import { UserAccountNav } from '@/components/user-account-nav';

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
  // const user = await getCurrentUser();

  // if (!user) {
  //   return notFound();
  // }

  return (
    <div className={styles.container}>
      {/* Top Nav goes here */}
      {/* <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />
          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          />
        </div>
      </header> */}
      <header className="sticky top-0 z-40 h-16 border-b bg-background">
        <div className="text-2xl font-bold px-6 py-4">CreateBase</div>
      </header>

      {/* Bottom Nav */}
      <div className="grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[350px] flex-col md:flex border-r">
          <div className="flex items-center gap-3 px-6 py-8 text-foreground">
            <Layers3 className="h-8 w-8" />
            <span className="uppercase font-semibold text-xl">Dashboard</span>
          </div>
          <DashboardNav items={sectionWithHeaders} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      {/* <SiteFooter className="border-t" /> */}
    </div>
  );
}
