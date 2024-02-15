import Divider from "@/components/Divider";
import Drawer, { type DrawerProps } from "@/components/Drawer";
import SearchBar from "./SearchBar";
import Queries from "./Queries";
import Profiles from "./Profiles";
import { queries, recent } from "@/data";

const SearchDrawer = (props: DrawerProps) => {
  // @test by setting queries to []
  // @test by setting results to []

  return (
    <Drawer {...props}>
      <div className="flex flex-col py-2 h-dvh">
        <div className="flex flex-col gap-9">
          <h2 className="text-2xl text-primary-text mx-6 mt-4 font-semibold">
            Search
          </h2>
          <SearchBar className="mx-4" />
        </div>

        <div className="flex flex-col overflow-y-auto">
          <Queries queries={queries} />
          <Divider />
          <Profiles recent={recent} results={[]} />
        </div>
      </div>
    </Drawer>
  );
};

export default SearchDrawer;
