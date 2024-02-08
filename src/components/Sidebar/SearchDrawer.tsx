import Drawer, { type DrawerProps } from "./Drawer";

type SearchDrawerProps = DrawerProps;

const SearchDrawer = (props: SearchDrawerProps) => {
  return (
    <Drawer {...props}>
      <div className="flex flex-col py-2">
        <h2 className="text-2xl text-primary px-6 pt-4 pb-8 font-bold">
          Search
        </h2>
      </div>
    </Drawer>
  );
};

export default SearchDrawer;
