const styles = {
  container: `flex flex-col min-h-[calc(100dvh)]`,
  childrenContainer: `mt-[70px] relative flex-grow`,
};

export default function UploadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <main className={styles.childrenContainer}>{children}</main>
    </div>
  );
}
