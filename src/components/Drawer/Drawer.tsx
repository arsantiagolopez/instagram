import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  type DialogContentProps,
  Content,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-dialog";
import clsx from "clsx";

type ExtraDrawerProps = {
  trigger: ReactNode;
  onInteractOutside?: DialogContentProps["onInteractOutside"];
};

export type DrawerProps = ComponentPropsWithoutRef<typeof Root> &
  ExtraDrawerProps;

const Drawer = ({
  children,
  trigger,
  onInteractOutside,
  ...props
}: DrawerProps) => {
  const contentClass = {
    base: "z-10 absolute top-0 left-nav-narrow bg-background h-dvh w-nav-drawer border-r border-r-borders rounded-r-2xl",
    state:
      "data-[state=open]:animate-drawer-out data-[state=closed]:animate-drawer-in",
  };

  return (
    <Root modal={false} {...props}>
      <Trigger asChild>{trigger}</Trigger>
      <Portal>
        <Content
          onInteractOutside={onInteractOutside}
          className={clsx(contentClass.base, contentClass.state)}
        >
          {children}
        </Content>
      </Portal>
    </Root>
  );
};

export default Drawer;
