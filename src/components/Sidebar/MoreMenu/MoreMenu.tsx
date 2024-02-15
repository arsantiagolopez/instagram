import Divider from "@/components/Divider";
import type { MenuProps } from "@/components/Menu";
import Menu, { MenuItem } from "@/components/Menu";
import {
  IconReport,
  IconSaved,
  IconSettings,
  IconTheme,
  IconYourActivity,
} from "@/components/icons";

const items = [
  {
    id: "settings",
    label: "Settings",
    icon: IconSettings,
  },
  {
    id: "your-activity",
    label: "Your activity",
    icon: IconYourActivity,
  },
  {
    id: "saved",
    label: "Saved",
    icon: IconSaved,
  },
  {
    id: "switch-appearance",
    label: "Switch appearance",
    icon: IconTheme,
  },
  {
    id: "report-a-problem",
    label: "Report a problem",
    icon: IconReport,
  },
];

const MoreMenu = (props: MenuProps) => {
  const itemClass =
    "flex items-center gap-3 text-primary-text p-4 rounded-lg text-sm leading-[18px] w-[266px]";

  return (
    <Menu {...props} className="p-2 rounded-2xl">
      {items.map(({ id, label, icon }) => {
        const Icon = icon;

        return (
          <MenuItem key={id} className={itemClass}>
            <Icon
              aria-label={label}
              className="w-[18px] h-[18px] min-w-[18px] min-h-[18px] pointer-events-none"
            />
            <span>{label}</span>
          </MenuItem>
        );
      })}

      <Divider className="border-[6px] -mx-2 my-2 border-stroke" />

      <MenuItem className={itemClass}>
        <span>Switch accounts</span>
      </MenuItem>

      <Divider className="-mx-2 my-2 border-stroke" />

      <MenuItem className={itemClass}>
        <span>Log out</span>
      </MenuItem>
    </Menu>
  );
};

export default MoreMenu;
