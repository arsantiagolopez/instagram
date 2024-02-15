import { useState } from "react";
import clsx from "clsx";
import Result from "./Result";
import type { Query } from "@/types";

type QueriesProps = {
  queries: Query[];
};

const Queries = ({ queries }: QueriesProps) => {
  const initialQueries = queries.slice(0, 5);

  const [items, setItems] = useState(initialQueries);

  const handleSeeMore = () => {
    setItems(queries);
  };

  return (
    <div className={clsx("flex flex-col", queries.length ? "mt-3" : "mt-6")}>
      <ul className="flex flex-col">
        {items.map((item) => (
          <Result key={item.id} {...item} />
        ))}
      </ul>

      {items.length < 6 && (
        <button
          onClick={handleSeeMore}
          className="text-sm font-semibold hover:text-tertiary-text px-5 py-4 w-fit leading-[18px]"
        >
          See more...
        </button>
      )}
    </div>
  );
};

export default Queries;
