import axios from "axios";
import React, { useEffect, useState } from "react";
import { JobSearchProps } from "../../interfaces/JobSearchInterface.ts";
import { IndustryType } from "../../types/IndustryType.ts";
import { GeoOptionsTypes } from "../../types/GeoOptionType.ts";

const JobSearch: React.FC<JobSearchProps> = ({
  getData,
  setCount,
  setGeo,
  setIndustry,
  setTag,
  count,
  geo,
  industry,
  tag,
}) => {
  const [industries, setIndustries] = useState<IndustryType[]>([]);
  const [geos, setGeos] = useState<GeoOptionsTypes[]>([]);

  useEffect(() => {
    console.log(geo, industry);
  }, [geo, industry]);

  useEffect(() => {
    const fetchIndustries = axios.get(
      "https://jobicy.com/api/v2/remote-jobs?get=industries"
    );
    const fetchGeos = axios.get(
      "https://jobicy.com/api/v2/remote-jobs?get=locations"
    );

    Promise.all([fetchIndustries, fetchGeos])
      .then(([industriesRes, geosRes]) => {
        setIndustries(industriesRes.data.industries);

        setGeos(geosRes.data.locations);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getData();
        }}
      >
        <div className="flex gap-4 flex-wrap">
          <div className="flex gap-1 flex-1">
            <label htmlFor="count">Count: </label>
            <input
              type="number"
              name="count"
              id="count"
              max="50"
              min="1"
              value={count}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCount(Number(e.target.value.trim()));
              }}
              className="border hover:bg-gray-50 focus:bg-gray-50 transition-colors flex-1 px-1"
            />
          </div>
          <select
            name="geo"
            onInput={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setGeo(e.target.value);
            }}
            value={geo}
            className="flex-1 p-1"
          >
            <option value="">Anywhere</option>
            {geos &&
              geos.map((geo) => (
                <option
                  key={geo.geoID}
                  value={geo.geoSlug}
                  dangerouslySetInnerHTML={{ __html: geo.geoName }}
                />
              ))}
          </select>
          <select
            name="industry"
            onInput={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setIndustry(e.target.value);
            }}
            value={industry}
            className="flex-1 p-1"
          >
            <option value="">Any Industry</option>
            {industries &&
              industries.map((industry) => (
                <option
                  key={industry.industryID}
                  value={industry.industrySlug}
                  dangerouslySetInnerHTML={{ __html: industry.industryName }}
                />
              ))}
          </select>
          <div className="flex gap-1 flex-1">
            <label htmlFor="tag">Tag: </label>
            <input
              type="text"
              name="tag"
              id="tag"
              value={tag}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTag(e.target.value.trim());
              }}
              className="border hover:bg-gray-50 focus:bg-gray-50 transition-colors flex-1 px-1"
            />
          </div>
        </div>

        <button className="w-full text-blue-600 bg-purple-100 text-xl font-medium px-3 py-1 rounded-xl hover:bg-purple-200 hover:text-blue-700 transition-colors mt-4">
          SEARCH
        </button>
      </form>
    </>
  );
};

export default JobSearch;
