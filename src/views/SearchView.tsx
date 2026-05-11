// import { useEffect, useState } from "react";
// import { Button, ImageGrid, Pagination, SearchBar } from "@/components";
// import { getImageUrl } from "@/core";
// import { MOVIE_ENDPOINT, SEARCH_ENDPOINT, TV_ENDPOINT } from "@/core/constants/endpoints";
// import type { SearchResponse } from "@/core/types/components";
// import { useDebounce, useTmdb } from "@/hooks";
// //mainlayout and use that to keep state and show searches
// export const SearchView = () => {
//   const [query, setQuery] = useState("");
//   const [page, setPage] = useState<number>(1);
//   const debouncedQuery = useDebounce(query, 500);
//   let endpoint: typeof SEARCH_ENDPOINT | typeof MOVIE_ENDPOINT | typeof TV_ENDPOINT;
//   const { data } = useTmdb<SearchResponse>(SEARCH_ENDPOINT, { page, query: debouncedQuery });

//   const gridData = (data?.results ?? []).map((result) => ({
//     id: result.id,
//     imageUrl: getImageUrl(result.profile_path),
//     primaryText: result.name,
//   }));

//   useEffect(() => {
//     setPage(1);
//   }, []);

//   if (!data) {
//     return <p className="text-center text-gray-400">Loading...</p>;
//   }

//   return (
//     <section className="mx-auto max-w-[1200px] space-y-5 p-10">
//       <SearchBar onChange={setQuery} value={query} />
//       <Button children={undefined} onClick={() => (endpoint = MOVIE_ENDPOINT)}></Button>
//       <Button children={undefined} onClick={() => (endpoint = TV_ENDPOINT)}></Button>
//       <Button children={undefined} onClick={() => (endpoint = SEARCH_ENDPOINT)}></Button>

//       {/* <ButtonGroup value={'primary'} options={[label='Movies']} onClick={() => (endpoint = TV_ENDPOINT)} */}
//       {/* /> */}
//       {data.results.length ? (
//         <>
//           <ImageGrid images={gridData} onClick={(id) => `/person/${id}`} />
//           <Pagination maxPages={data.total_pages} onClick={setPage} page={page} />
//         </>
//       ) : (
//         <p className="text-center text-gray-400">No search results found</p>
//       )}
//     </section>
//   );
// };
