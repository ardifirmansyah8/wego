import { Plus, Search, Star } from "lucide-react";
import { useState } from "react";

import Badge from "./components/Badge";
import Card from "./components/Card";
import Input from "./components/Input";
import Select from "./components/Select";

import "./App.css";

const CATEGORIES = [
  "All",
  "Sushi",
  "Pizza",
  "Burgers",
  "Hot Meals",
  "Desserts",
  "Drinks",
];

function App() {
  const [category, setCategory] = useState("All");

  return (
    <>
      <section className="search-container">
        <Input placeholder="Enter restaurant name.." />
        <Search width={20} height={20} />
      </section>

      <section className="category-container">
        <div>
          {CATEGORIES.map((categoryName) => (
            <button
              className={category === categoryName ? "active" : ""}
              onClick={() => setCategory(categoryName)}
            >
              {categoryName}
            </button>
          ))}
        </div>
        <Select options={CATEGORIES} />
      </section>

      <section className="resto-container">
        {Array.from({ length: 9 }).map(() => (
          <Card
            imgUrl="https://zen.wego.com/cdn-cgi/image/width=600/web/mock/exam/drink.jpg"
            title="Restaurant Name"
          >
            <Badge>
              <Star color="#656565" width={16} height={16} />
              <label>4.7</label>
            </Badge>
            <Badge>
              <label>50-70 min</label>
            </Badge>
            <Badge variant="new">
              <label>New</label>
            </Badge>
          </Card>
        ))}
      </section>

      <section className="show-more-container">
        <button>
          <Plus width={16} height={16} />
          Show More
        </button>
      </section>
    </>
  );
}

export default App;
