import { useState } from "react";
import { useSearchGifsQuery, useGetRandomGifsQuery } from "./api/giphyApi";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import GifList from "./components/GifList";

export default function AppContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: searchData } = useSearchGifsQuery(searchTerm, {
    skip: !searchTerm,
  });
  const { data: randomData } = useGetRandomGifsQuery(undefined);

  const gifs = searchTerm ? searchData?.data : randomData?.data;

  return (
    <div className="p-4">
      <Header />
      <SearchInput value={searchTerm} onChange={setSearchTerm} />
      <GifList gifs={gifs} />
    </div>
  );
}
