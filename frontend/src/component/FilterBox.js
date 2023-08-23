import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

function FilterBox(props) {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    fetchFilteredData();
  }, [searchParams.size]);
  const fetchFilteredData = () => {
    if (searchParams.size) {
      let languages = searchParams.get("languages") || "";
      let categories = searchParams.get("categories") || "";
      let genre = searchParams.get("genre") || "";
      let prices = searchParams.get("prices") || "";

      const currQuery = [
        ...languages.split("|"),
        ...categories.split("|"),
        ...genre.split("|"),
        ...prices.split("|"),
      ];
      if (currQuery.includes(props.name)) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    } else {
      setIsActive(false);
    }
  };

  const filterData = () => {
    let languages = searchParams.get("languages") || "";
    let categories = searchParams.get("categories") || "";
    let genre = searchParams.get("genre") || "";
    let prices = searchParams.get("prices") || "";

    let lang, cat, gen, price;
    if (props.category == "Languages") {
      if (!languages.includes(props.name)) {
        lang = languages == "" ? props.name : languages + "|" + props.name;
      } else {
        lang = languages.split("|");
        lang = lang.filter((lang) => {
          return lang != props.name;
        });
        lang = lang.join("|");
      }
    } else {
      lang = languages.split("|");
      lang = lang.filter((lang) => {
        return lang != props.name;
      });
      lang = lang.join("|");
    }
    props.setLangQuery(lang);

    if (props.category == "Categories") {
      if (!categories.includes(props.name)) {
        cat = categories == "" ? props.name : categories + "|" + props.name;
      } else {
        cat = categories.split("|");
        cat = cat.filter((lang) => {
          return lang != props.name;
        });
        cat = cat.join("|");
      }
    } else {
      cat = categories.split("|");
      cat = cat.filter((lang) => {
        return lang != props.name;
      });
      cat = cat.join("|");
    }
    props.setCatQuery(cat);
    if (props.category == "Genre") {
      if (!genre.includes(props.name)) {
        gen = genre == "" ? props.name : genre + "|" + props.name;
      } else {
        gen = genre.split("|");
        gen = gen.filter((lang) => {
          return lang != props.name;
        });
        gen = gen.join("|");
      }
    } else {
      gen = genre.split("|");
      gen = gen.filter((lang) => {
        return lang != props.name;
      });
      gen = gen.join("|");
    }
    props.setGenQuery(gen);
    if (props.category == "Prices") {
      if (!prices.includes(props.name)) {
        price = prices == "" ? props.name : prices + "|" + props.name;
      } else {
        price = prices.split("|");
        price = price.filter((lang) => {
          return lang != props.name;
        });
        price = price.join("|");
      }
    } else {
      price = prices.split("|");
      price = price.filter((lang) => {
        return lang != props.name;
      });
      price = price.join("|");
    }
    props.setPriceQuery(price);
    setSearchParams({
      ...(lang != undefined && { languages: lang }),
      ...(cat != undefined && { categories: cat }),
      ...(gen != undefined && { genre: gen }),
      ...(price != undefined && { prices: price }),
      page_size: 3,
    });

    setIsActive(!isActive);
  };

  const onActive = {
    border: "0.1px solid #8e918f",
    backgroundColor: "#eb4034",
    color: "#fff",
    width: "auto",
    display: "inline",
    padding: "5px 8px",
    cursor: "pointer",
  };
  const onInActive = {
    border: "1px solid #8e918f",
    width: "auto",
    display: "inline",
    padding: "5px 8px",
    color: "#eb4034",
    cursor: "pointer",
  };
  return (
    <div style={{ margin: "10px" }}>
      <p
        style={isActive || isHover ? onActive : onInActive}
        onClick={filterData}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {props.name}
      </p>
    </div>
  );
}

export default FilterBox;
