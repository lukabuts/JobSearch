export interface HomeProps {
  getData: () => void;
  setCount: React.Dispatch<React.SetStateAction<string>>;
  setGeo: React.Dispatch<React.SetStateAction<string>>;
  setIndustry: React.Dispatch<React.SetStateAction<string>>;
  setTag: React.Dispatch<React.SetStateAction<string>>;
  errorMsg: string;
  lastUpdate: string;
  count: string;
  geo: string;
  industry: string;
  tag: string;
}
