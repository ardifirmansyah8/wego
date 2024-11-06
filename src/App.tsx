import { Gift, Plus, Search, Star } from "lucide-react";
import { useEffect, useState } from "react";

import Badge from "./components/Badge";
import Card from "./components/Card";
import Input from "./components/Input";
import Select from "./components/Select";

import "./styles/App.css";
import { useCategories } from "./hooks/useCategories";
import { useRestaurants } from "./hooks/useRestaurants";

function App() {
  const { categories } = useCategories();
  const { restos, hasLoadMore, onLoadMore } = useRestaurants();

  const [category, setCategory] = useState("");

  useEffect(() => {
    if (categories.length > 0) {
      setCategory(categories[0].name);
    }
  }, [categories]);

  return (
    <>
      <section className="search-container">
        <Input placeholder="Enter restaurant name.." />
        <Search width={20} height={20} />
      </section>

      <section className="category-container">
        <div>
          {categories.map((item) => (
            <button
              key={item.name}
              className={category === item.name ? "active" : ""}
              onClick={() => setCategory(item.name)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <Select options={categories} />
      </section>

      <section className="resto-container">
        {restos.map((resto) => (
          <Card
            imgUrl={resto.imageUrl}
            title={resto.name}
            flag={
              <Badge variant="primary">
                <Gift color="white" width={20} height={20} />
              </Badge>
            }
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
      </section>

      {hasLoadMore && (
        <section className="show-more-container">
          <button onClick={() => onLoadMore()}>
            <Plus width={16} height={16} />
            Show More
          </button>
        </section>
      )}
    </>
  );
}

export default App;
