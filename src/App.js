import { Navigation } from "./components/navigation/Navigation";
import { Products } from "./components/products/Products";
import { Recommended } from "./components/recommended/Recommended";
import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { useMemo, useState } from "react";

// db
import productsDB from "./db/data";
import { Card } from "./components/Card";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [query, setQuery] = useState(""); //input

  // ----------- Handle Change(input) -----------
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // ----------- Radio Filtering -----------
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // ------------ Button Filtering -----------
  const handleButtonClick = (e) => {
    setSelectedOption(e.target.value);
  };

  // const filteredItems = productsDB.filter(
  //   (p) => p.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  // );

  // // main filter function for all
  // function filteredData(products, selected, query) {
  //   let filteredProducts = products;

  //   // Filtering Input Items
  //   if (query) {
  //     filteredProducts = filteredItems;
  //   }

  //   // Applying selected filter
  //   if (selected) {
  //     filteredProducts = filteredProducts.filter(
  //       ({ category, color, company, newPrice, title }) =>
  //         category === selected ||
  //         color === selected ||
  //         company === selected ||
  //         newPrice === selected ||
  //         title === selected
  //     );
  //   }

  //   return filteredProducts.map(
  //     ({ img, title, star, reviews, prevPrice, newPrice }) => (
  //       <Card
  //         key={Math.random()}
  //         img={img}
  //         title={title}
  //         star={star}
  //         reviews={reviews}
  //         prevPrice={prevPrice}
  //         newPrice={newPrice}
  //       />
  //     )
  //   );
  // }

  //   const result = filteredData(products, selectedCategory, query);

  //-------------explanation-------------------

  //   First, it checks if selectedOption has any value (is not empty, null, or undefined).
  // If selectedOption has a value:

  // It compares the item's category (p.category) with the selectedOption.
  // If they are exactly the same, categoryMatches becomes true.
  // If they are different, categoryMatches becomes false.

  // If selectedOption is empty, null, or undefined:

  // categoryMatches is set to true without checking the item's category.

  const filteredData = useMemo(() => {
    return productsDB
      .filter((p) => {
        const titleMatches = p.title
          .toLowerCase()
          .includes(query.toLowerCase()); //search
        const categoryMatches = selectedOption
          ? p.category === selectedOption
          : true;
        const colorMatches = selectedOption ? p.color === selectedOption : true;
        const companyMatches = selectedOption
          ? p.company === selectedOption
          : true;
        const newPriceMatches = selectedOption
          ? p.newPrice === selectedOption
          : true;

        return (
          titleMatches &&
          (categoryMatches || colorMatches || companyMatches || newPriceMatches)
        );
      })
      .map((product) => (
        <Card
          key={Math.random()}
          img={product.img}
          title={product.title}
          star={product.star}
          reviews={product.reviews}
          prevPrice={product.prevPrice}
          newPrice={product.newPrice}
        />
      ));
  }, [productsDB, query, selectedOption]);

  return (
    <>
      <Sidebar handleRadioChange={handleRadioChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleButtonClick={handleButtonClick} />
      <Products filteredData={filteredData} />
    </>
  );
}

export default App;
