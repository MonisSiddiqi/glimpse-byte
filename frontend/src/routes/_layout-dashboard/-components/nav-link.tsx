import { FC } from "react";
import { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Props = {
  to: string;
  name: string;
  icon: LucideIcon;
};

export const NavLink: FC<Props> = ({ to, name, icon }) => {
  const Icon = icon;
  return (
    <div>
      <Link
        to={to}
        className="flex font-medium items-center px-3 py-2.5 text-gray-500 duration-300 hover:text-basf-blue [&.active]:text-basf-blue "
      >
        <Icon className="mr-2 h-6 w-6" /> {name}
      </Link>
    </div>
  );
};
