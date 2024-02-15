import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Root, Trigger, Portal, Content } from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";

type ExtraDrawerProps = {
  id: string;
  trigger: ReactNode;
  className?: string;
  onContentHover: (hovered?: string) => void;
};

export type MenuProps = ComponentPropsWithoutRef<typeof Root> &
  ExtraDrawerProps;

const Menu = ({
  id,
  children,
  trigger,
  className,
  onContentHover,
}: MenuProps) => {
  const contentClass =
    "z-30 flex flex-col w-full bg-banner-background rounded-lg overflow-hidden";

  const handleMouseEnter = () => onContentHover(id);
  const handleMouseLeave = () => onContentHover(undefined);

  return (
    <Root>
      <Trigger asChild>{trigger}</Trigger>
      <Portal>
        <Content
          id={id}
          align="start"
          sideOffset={3}
          className={clsx(contentClass, className)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </Content>
      </Portal>
    </Root>
  );
};

export default Menu;
