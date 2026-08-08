
type NavButtonProps = {
  sectionId: string;
  children: React.ReactNode;
};

export default function NavButton({
  sectionId,
  children,
}: NavButtonProps) {
  return (
    <a
      href={`#${sectionId}`}
      className="text-slate-500 transition hover:text-slate-900"
    >
      {children}
    </a>
  );
}