import type { SearchResult } from "@/types";
import Result from "./Result";

type Profiles = {
  recent: SearchResult[];
  results: SearchResult[];
};

const Profiles = ({ recent, results }: Profiles) => {
  if (results.length) {
    return (
      <ul className="flex flex-col">
        {results.map((props) => (
          <Result key={props.id} {...props} />
        ))}
      </ul>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mx-6 mt-5 mb-2">
        <h3 className="font-semibold">Recent</h3>
        {!!recent.length && (
          <button className="text-sm text-link font-semibold hover:text-primary-text">
            Clear all
          </button>
        )}
      </div>

      <ul className="flex flex-col my-2">
        {recent.map((props) => (
          <Result key={props.id} {...props} isRecent />
        ))}
      </ul>
    </div>
  );
};

export default Profiles;
