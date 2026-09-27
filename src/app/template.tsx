export default function Template({ children }: { children: React.ReactNode }) {
  // Re-mounts on every navigation, replaying a soft page-in fade (CSS only, so
  // server-rendered content is never hidden while JS loads).
  return <div className="animate-in fade-in duration-500">{children}</div>;
}
