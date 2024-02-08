import Drawer, { type DrawerProps } from "./Drawer";

type NotificationsDrawerProps = DrawerProps;

const NotificationsDrawer = (props: NotificationsDrawerProps) => {
  return (
    <Drawer {...props}>
      <div className="flex flex-col py-2">
        <h2 className="text-2xl text-primary px-6 pt-4 pb-8 font-bold">
          Notifications
        </h2>
      </div>
    </Drawer>
  );
};

export default NotificationsDrawer;
