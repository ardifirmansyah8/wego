import { useEffect, useState } from "react";

interface Restaurant {
  id: number;
  index: number;
  rating: number;
  promotion: "gift" | "discount" | "1+1";
  isNew: boolean;
  categoryId: string;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  name: string;
  imageUrl: string;
}

const LIMIT = 9;

export const useRestaurants = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rawRestos, setRawRestos] = useState<Restaurant[]>([]);
  const [filteredRestos, setFilteredRestos] = useState<Restaurant[]>([]);
  const [restos, setRestos] = useState<Restaurant[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasLoadMore, setHasLoadMore] = useState(true);

  const fetchRestaurants = async () => {
    setIsLoading(true);

    const response = await fetch(
      "https://gist.githubusercontent.com/wilson-wego/8311b463cd331099e34a1f251dad4cbf/raw/f1b04f9afe0fcc0c9270cb486b927641b7d27436/food.json"
    );
    const data = await response.json();
    setRawRestos(data.foods);
    setFilteredRestos(data.foods);
    setIsLoading(false);
  };

  const onLoadMore = () => {
    const nextOffset = offset + LIMIT;
    setRestos([
      ...restos,
      ...filteredRestos.slice(nextOffset, nextOffset + LIMIT),
    ]);
    setOffset(nextOffset);
    if (nextOffset + LIMIT >= filteredRestos.length) {
      setHasLoadMore(false);
    }
  };

  const onFilterResto = (query: string, categoryId: string) => {
    setIsLoading(true);
    let filtered = null;
    if (categoryId !== "all") {
      filtered = rawRestos.filter((resto) => {
        return (
          resto.name.toLowerCase().includes(query.toLowerCase()) &&
          resto.categoryId.includes(categoryId)
        );
      });
    } else {
      filtered = rawRestos.filter((resto) => {
        return resto.name.toLowerCase().includes(query.toLowerCase());
      });
    }
    setOffset(0);
    setFilteredRestos(filtered);
    setRestos(filtered.slice(0, LIMIT));
    setHasLoadMore(filtered.length > LIMIT);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    if (filteredRestos.length > 0) {
      setRestos(filteredRestos.slice(offset, LIMIT));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredRestos]);

  return {
    isLoading,
    hasLoadMore,
    restos,
    onFilterResto,
    onLoadMore,
  };
};
