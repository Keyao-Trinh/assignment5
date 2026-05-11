import { Button, ImageGrid, Pagination, SearchBar } from '@/components';
import { getImageUrl } from '@/core';
import { SEARCH_ENDPOINT, MOVIE_ENDPOINT, TV_ENDPOINT } from '@/core/constants/endpoints';
import type { SearchResponse } from '@/core/types/components';
import { useDebounce, useTmdb } from '@/hooks';
import { useEffect, useState } from 'react';
//mainlayout and use that to keep state and show searches
export const SearchView = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState<number>(1);
  const debouncedQuery = useDebounce(query, 500);
  let endpoint: typeof SEARCH_ENDPOINT | typeof MOVIE_ENDPOINT | typeof TV_ENDPOINT;
  let { data } = useTmdb<SearchResponse>(SEARCH_ENDPOINT, { query: debouncedQuery, page });


  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imageUrl: getImageUrl(result.profile_path),
    primaryText: result.name,
  }));

  useEffect(() => {
    setPage(1);
  }, [debouncedQuery]);

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="max-w-[1200px] mx-auto p-10 space-y-5">
      <SearchBar value={query} onChange={setQuery} />
      <Button onClick={() => (endpoint = MOVIE_ENDPOINT)} children={undefined} ></Button>
      <Button onClick={() => (endpoint = TV_ENDPOINT)}  children={undefined} ></Button>
      <Button onClick={() => (endpoint = SEARCH_ENDPOINT)} children = {undefined}></Button>
     
      {/* <ButtonGroup value={'primary'} options={[label='Movies']} onClick={() => (endpoint = TV_ENDPOINT)} */}
      {/* /> */}
      {data.results.length ? (
        <>
          <ImageGrid images={gridData} onClick={(id) => `/person/${id}`} />
          <Pagination page={page} maxPages={data.total_pages} onClick={setPage} />
        </>
      ) : (
        <p className="text-center text-gray-400">No search results found</p>
      )}
    </section>
  );
};
