import debounce from "lodash/debounce";
import { Gift, Plus, Search, Star, Store } from "lucide-react";
import { useCallback, useRef, useState } from "react";

import Badge from "./components/Badge";
import Card from "./components/Card";
import Input from "./components/Input";
import Select from "./components/Select";

import { useCategories } from "./hooks/useCategories";
import { useRestaurants } from "./hooks/useRestaurants";

import "./styles/app.css";
import Loader from "./components/Loader";

function App() {
  const { categories } = useCategories();
  const { isLoading, restos, hasLoadMore, onFilterResto, onLoadMore } =
    useRestaurants();

  const searchInput = useRef<HTMLInputElement>(null);

  const [category, setCategory] = useState("all");

  const handleDebounceSearch = debounce((searchQuery) => {
    onFilterResto(searchQuery, category);
  }, 500);

  const handleSearch = useCallback(handleDebounceSearch, [
    handleDebounceSearch,
  ]);

  const handleFilter = (categoryId: string) => {
    setCategory(categoryId);
    onFilterResto(searchInput.current?.value || "", categoryId);
  };

  const renderFlag = (promotion: string) => {
    if (promotion === "gift") {
      return (
        <Badge variant="primary">
          <Gift color="white" width={20} height={20} />
        </Badge>
      );
    }
    if (promotion === "1+1") {
      return <Badge variant="info">1 + 1</Badge>;
    }
    if (promotion === "discount") {
      return <Badge variant="alert">%</Badge>;
    }
    return null;
  };

  return (
    <>
      <section className="search-container">
        <Input
          ref={searchInput}
          placeholder="Enter restaurant name.."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Search width={20} height={20} />
      </section>

      <section className="category-container">
        <div>
          <button
            className={category === "all" ? "active" : ""}
            onClick={() => handleFilter("all")}
          >
            All
          </button>
          {categories.map((item) => (
            <button
              key={item.id}
              className={category === item.id ? "active" : ""}
              onClick={() => handleFilter(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <Select
          value={category}
          options={[{ id: "all", name: "All" }, ...categories]}
          onChange={(e) => handleFilter(e.target.value)}
        />
      </section>

      {isLoading && (
        <div className="empty-container">
          <Loader />
        </div>
      )}

      {!isLoading && restos.length === 0 && (
        <div className="empty-container">
          <Store width={64} height={64} />
          <h2>No restaurant found</h2>
        </div>
      )}
      {!isLoading && restos.length > 0 && (
        <section>
          <div className="resto-container">
            {restos.map((resto) => (
              <Card
                key={resto.id}
                imgUrl={resto.imageUrl}
                title={resto.name}
                flag={renderFlag(resto.promotion)}
              >
                <Badge>
                  <Star color="#656565" width={16} height={16} />
                  <label>{Math.round(resto.rating)}</label>
                </Badge>
                <Badge>
                  <label>
                    {resto.minCookTime}-{resto.maxCookTime} min
                  </label>
                </Badge>
                {resto.isNew && (
                  <Badge variant="new">
                    <label>New</label>
                  </Badge>
                )}
              </Card>
            ))}
          </div>

          {hasLoadMore && (
            <div className="show-more-container">
              <button onClick={() => onLoadMore()}>
                <Plus width={16} height={16} />
                Show More
              </button>
            </div>
          )}
        </section>
      )}
    </>
  );
}

export default App;
