export interface JobSearchProps {
  getData: () => void;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setGeo: React.Dispatch<React.SetStateAction<string>>;
  setIndustry: React.Dispatch<React.SetStateAction<string>>;
  setTag: React.Dispatch<React.SetStateAction<string>>;
  count: number;
  geo: string;
  industry: string;
  tag: string;
}
