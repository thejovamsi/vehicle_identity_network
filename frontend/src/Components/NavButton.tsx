import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
};

export default function NavButton({ to, children }: Props) {
  return (
    <Link
      to={to}
      className="transition-all duration-300 hover:text-blue-500"
    >
      {children}
    </Link>
  );
}