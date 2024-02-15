import Menu, { type MenuProps, MenuItem } from "@/components/Menu";
import { IconLiveVideo, IconPost } from "@/components/icons";

const items = [
  {
    id: "post",
    label: "Post",
    icon: IconPost,
  },
  {
    id: "live-video",
    label: "Live video",
    icon: IconLiveVideo,
  },
];

const CreateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      {items.map(({ id, label, icon }) => {
        const Icon = icon;

        return (
          <MenuItem
            key={id}
            className="flex items-center justify-between text-primary-text w-[200px] px-4 py-2.5"
          >
            <span>{label}</span>
            <Icon
              aria-label={label}
              className="w-6 h-6 min-w-6 min-h-6 pointer-events-none"
            />
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default CreateMenu;
