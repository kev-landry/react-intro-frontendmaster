import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  // const location = "Seattle, WA";
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            type="text"
            placeholder="Location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
