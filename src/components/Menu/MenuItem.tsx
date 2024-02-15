import { type MenuItemProps, Item } from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";

const MenuItem = ({ children, className, ...props }: MenuItemProps) => {
  const baseClass = "text-primary-text hover:bg-hover-overlay cursor-pointer";

  return (
    <Item className={clsx(baseClass, className)} {...props}>
      {children}
    </Item>
  );
};

export default MenuItem;
