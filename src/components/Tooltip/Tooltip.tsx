import {
  Arrow,
  Content,
  Portal,
  Provider,
  Root,
  TooltipContentProps,
  Trigger,
} from "@radix-ui/react-tooltip";
import clsx from "clsx";
import { Children, isValidElement, type ReactNode } from "react";

type TooltipProps = {
  children: ReactNode;
  label: string;
  side?: TooltipContentProps["side"];
  hideTooltip?: boolean;
  mobileOnly?: boolean;
};

const Tooltip = ({
  children,
  label,
  side = "right",
  hideTooltip,
  mobileOnly,
}: TooltipProps) => {
  let asChild = true;

  // Convert children to an array and get the first element
  const firstChild = Children.toArray(children)[0];

  // Check if the first child is a button
  if (isValidElement(firstChild) && firstChild.type === "button") {
    asChild = false;
  }

  const contentClass = {
    base: "z-30 text-primary-text bg-background-hover px-3 py-2 rounded-lg select-none",
    state:
      "data-[state=delayed-open]:animate-slide-in data-[state=closed]:animate-slide-out",
    conditional: clsx({
      "block md:hidden": mobileOnly,
      hidden: hideTooltip,
    }),
  };

  return (
    <Provider>
      <Root>
        <Trigger asChild={asChild}>{children}</Trigger>
        <Portal>
          <Content
            side={side}
            sideOffset={8}
            className={clsx(
              contentClass.base,
              contentClass.state,
              contentClass.conditional
            )}
          >
            {label}
            <Arrow width={15} height={10} className="fill-background-hover" />
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
};

export default Tooltip;
