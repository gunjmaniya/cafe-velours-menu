const menu = [
  {
    id: "coolers",
    no: "01",
    title: "Coolers + Matcha",
    groups: [
      {
        name: "Non-Coffee Mocktails",
        items: [
          ["Sol de Mexico", 260],
          ["Salted Pineapple Refresh", 435],
          ["Tropical Lychee Spritzer", 475],
          ["Orange Sunset", 370],
          ["Chocolate Martini", 475],
          ["Pink Sakura", 435],
          ["Lavender Blush Cooler", 350],
          ["Lavender Mint Mojito", 380],
          ["Tropical Blue Lagoon", 295],
          ["Blue Sky", 335],
          ["Dragon Halo", 340],
          ["Classic Mint Mojito", 210],
          ["Strawberry Mojito", 260],
          ["Blackcurrant Mojito", 260],
          ["Blueberry Mojito", 260],
          ["Cranberry Mojito", 260]
        ]
      },
      {
        name: "Matcha Cloud",
        items: [
          ["Coco Matcha Bliss", 445],
          ["Matcha Iceland Cloud", 440],
          ["Strawberry Matcha", 435],
          ["Elderflower Cloud Matcha", 435]
        ]
      }
    ]
  },

  {
    id: "coffee",
    no: "02",
    title: "Coffee Bar",
    groups: [
      {
        name: "Frappés",
        items: [
          ["Classic Frappé", 315],
          ["Mocha Frappé", 370],
          ["Hazelnut Frappé", 345],
          ["Vanilla Frappé", 345],
          ["Caramel Frappé", 345],
          ["Salted Caramel Frappé", 345]
        ]
      },
      {
        name: "Everyday Coffee",
        items: [
          ["Espresso", 150, "Hot / Iced"],
          ["Cappuccino", 225, "Hot / Iced"],
          ["Latte", 225, "Hot / Iced"],
          ["Flat White", 210],
          ["Mocha", 260, "Hot / Iced"],
          ["Vietnamese Coffee", 260],
          ["Espresso Tonic / Ginger Ale", 345],
          ["Espresso Red Bull", 415]
        ]
      },
      {
        name: "Cold Brew",
        items: [
          ["House Blend Cold Brew", 240],
          ["Cold Brew Tonic / Ginger Ale", 380],
          ["Cold Brew Red Bull", 435],
          ["Vietnamese Cold Brew", 335],
          ["Brew Sundowner", 315],
          ["Whiskey Barrel Edge", 190],
          ["Rum Barrel Edge", 190]
        ]
      }
    ]
  },

  {
    id: "kitchen",
    no: "03",
    title: "Kitchen",
    groups: [
      {
        name: "Starters",
        items: [
          ["Cheese Garlic Bread", 350],
          ["Italian Jalapeño Poppers", 510],
          ["Peri Peri Paneer Popcorn", 560],
          ["Mexican Cheese Balls", 480],
          ["Pesto Potato", 480],
          ["Honey Chilli Paneer", 480],
          ["Burshetta", 390],
          ["Pesto Paneer", 520],
          ["Limoncello Falafel Platter", 670]
        ]
      },
      {
        name: "Pasta",
        items: [
          ["Alfredo Pasta", 610],
          ["Chilli Garlic Pasta", 570],
          ["Arrabbiata Pasta", 560],
          ["Pink Sauce Pasta", 600],
          ["Pesto Cream Pasta", 630],
          ["Rigatoni Pasta", 595],
          ["Aglio e Olio", 590],
          ["Pesto Spaghetti", 590]
        ]
      }
    ]
  },

  {
    id: "pizza-sandwiches",
    no: "04",
    title: "Pizza + Sandwiches",
    groups: [
      {
        name: "Pizza",
        items: [
          ["Italian Pizza", 790],
          ["Margherita Pizza", 750],
          ["Farmhouse Pizza", 810],
          ["Mexican Pizza", 790],
          ["Cottage Cheese Pesto Pizza", 1050],
          ["Tandoori Pizza", 790],
          ["Cottage Cheese Peri Peri Pizza", 970],
          ["Roasted Mushroom Pizza", 820]
        ]
      },
      {
        name: "Sandwiches",
        items: [
          ["Spinach Cottage Cheese Sandwich", 630],
          ["Cottage Cheese Sandwich", 620],
          ["Avocado Sandwich", 640],
          ["Avocado Butter Croissant", 690]
        ]
      },
      {
        name: "Salads",
        items: [
          ["Caesar Salad", 370],
          ["Exotic Vegetable Saute Salad", 450],
          ["Creamy Pasta Salad", 490]
        ]
      }
    ]
  },

  {
    id: "specials",
    no: "05",
    title: "Specials",
    groups: [
      {
        name: "Coffee Mocktails",
        items: [
          ["Protein Espresso", 320],
          ["Midnight Berry Rush", 350],
          ["Cranberry Cold Brew", 280],
          ["Rosa Coffee Tropic", 350],
          ["Spicy Velvet", 435],
          ["Berry Luscious Espresso", 410],
          ["Choco Almond", 445],
          ["Cold Brew Martini", 295],
          ["Harvest Slim", 295],
          ["Midnight Berry", 410]
        ]
      },
      {
        name: "Iced Tea",
        items: [
          ["Lemon Iced Tea", 240],
          ["Peach Iced Tea", 270],
          ["Cranberry Iced Tea", 240],
          ["Watermelon Iced Tea", 270],
          ["Green Apple Iced Tea", 240]
        ]
      },
      {
        name: "Shakes",
        items: [
          ["Oreo Shake", 340],
          ["Nutella Shake", 370],
          ["Biscoff Shake", 370],
          ["Choco Brownie Shake", null, "Price unavailable"],
          ["Pistachio Shake", 400],
          ["Mixed Berry Shake", 340]
        ]
      }
    ]
  },

  {
    id: "toast-rice",
    no: "06",
    title: "Toast + More",
    groups: [
      {
        name: "Toast",
        items: [
          ["Creamy Mushroom Open Toast", 520],
          ["Avocado Toast", 510],
          ["Beans Open Toast", 540]
        ]
      },
      {
        name: "Rice Bowls",
        items: [
          ["Burnt Garlic Rice", 570],
          ["Mexican Rice", 450],
          ["Mushroom Risotto Bowl", 470],
          ["Peri Peri Rice Bowl", 595],
          ["Malaysian Rice Bowl", 630]
        ]
      },
      {
        name: "Desserts",
        items: [
          [
            "Mango Puff",
            410,
            "Danish pastry, creamy filling, fresh mango"
          ],
          [
            "Matcha Mont Blanc",
            430,
            "Crunchy puff, mango puree & crumbs, matcha ganache, fresh mango"
          ],
          [
            "Matcha Mango Parfait",
            410,
            "Muesli & corn flakes, matcha soft serve, fresh strawberries & homemade strawberry puree"
          ],
          [
            "Mango Bento",
            430,
            "Moist Victorian sponge, mascarpone filling, fresh mango, mango foam"
          ],
          [
            "Japanese French Toast",
            380,
            "Housemade shokupan, Japanese-style butter, caramelised crust, golden syrup"
          ],
          [
            "Tiramisu",
            370,
            "Uji matcha / Japanese dark roast coffee"
          ],
          [
            "Japanese Pancakes",
            390,
            "Stack of 2, golden syrup & vanilla soft serve"
          ],
          [
            "Thai Mango Sticky Rice",
            460,
            "Sweet coconut sticky rice, ripe mangoes, warm coconut cream"
          ]
        ]
      }
    ]
  }
];

/* Two recommended items from every subcategory */

const recommendedItems = new Set([
  "Salted Pineapple Refresh",
  "Pink Sakura",

  "Coco Matcha Bliss",
  "Strawberry Matcha",

  "Classic Frappé",
  "Salted Caramel Frappé",

  "Cappuccino",
  "Vietnamese Coffee",

  "House Blend Cold Brew",
  "Brew Sundowner",

  "Peri Peri Paneer Popcorn",
  "Limoncello Falafel Platter",

  "Pink Sauce Pasta",
  "Pesto Cream Pasta",

  "Farmhouse Pizza",
  "Cottage Cheese Pesto Pizza",

  "Spinach Cottage Cheese Sandwich",
  "Avocado Butter Croissant",

  "Caesar Salad",
  "Exotic Vegetable Saute Salad",

  "Cranberry Cold Brew",
  "Spicy Velvet",

  "Peach Iced Tea",
  "Watermelon Iced Tea",

  "Biscoff Shake",
  "Pistachio Shake",

  "Creamy Mushroom Open Toast",
  "Avocado Toast",

  "Mexican Rice",
  "Peri Peri Rice Bowl",

  "Matcha Mont Blanc",
  "Japanese French Toast"
]);

document.addEventListener("DOMContentLoaded", () => {
  const menuRoot = document.querySelector("#menuRoot");
  const categoryNav = document.querySelector("#categoryNav");
  const searchInput = document.querySelector("#menuSearch");
  const noResults = document.querySelector("#noResults");
  const navigation = document.querySelector(".category-nav");

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  const escapeHTML = (text) => {
    return String(text).replace(/[&<>"']/g, (character) => {
      const characters = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };

      return characters[character];
    });
  };

  /* Create categories and menu items */

  menu.forEach((section, sectionIndex) => {
    const sectionItemCount = section.groups.reduce(
      (total, group) => total + group.items.length,
      0
    );

    categoryNav.insertAdjacentHTML(
      "beforeend",
      `
        <a
          class="category-link ${sectionIndex === 0 ? "active" : ""}"
          href="#${section.id}"
        >
          ${escapeHTML(section.title)}
        </a>
      `
    );

    const groupHTML = section.groups
      .map((group, groupIndex) => {
        const itemsHTML = group.items
          .map((item, itemIndex) => {
            const [name, price, note] = item;
            const itemID =
              `${section.id}-${groupIndex}-${itemIndex}`;

            const isRecommended =
              recommendedItems.has(name);

            const priceHTML =
              price === null
                ? "—"
                : `₹${formatPrice(price)}`;

            return `
              <article
                class="menu-item ${
                  isRecommended ? "recommended" : ""
                }"
                data-id="${itemID}"
                data-name="${escapeHTML(name)}"
              >
                <div>
                  <div class="item-title">
                    <h4>${escapeHTML(name)}</h4>

                    ${
                      isRecommended
                        ? "<em>★ Recommended</em>"
                        : ""
                    }
                  </div>

                  ${
                    note
                      ? `<p>${escapeHTML(note)}</p>`
                      : ""
                  }
                </div>

                <strong>${priceHTML}</strong>
              </article>
            `;
          })
          .join("");

        return `
          <details class="menu-group" open>
            <summary>
              <h3>${escapeHTML(group.name)}</h3>

              <span>
                ${group.items.length} items
              </span>
            </summary>

            <div class="items">
              ${itemsHTML}
            </div>
          </details>
        `;
      })
      .join("");

    menuRoot.insertAdjacentHTML(
      "beforeend",
      `
        <section
          class="menu-section"
          id="${section.id}"
        >
          <div class="section-head">
            <div>
              <small>${section.no}</small>
              <h2>${escapeHTML(section.title)}</h2>
            </div>

            <span>
              ${sectionItemCount} items
            </span>
          </div>

          ${groupHTML}
        </section>
      `
    );
  });

  const categoryLinks = [
    ...document.querySelectorAll(".category-link")
  ];

  const menuSections = [
    ...document.querySelectorAll(".menu-section")
  ];

  const menuItems = [
    ...document.querySelectorAll(".menu-item")
  ];

  const menuGroups = [
    ...document.querySelectorAll(".menu-group")
  ];

  /* Active category navigation */

  function activateCategory(activeLink) {
    categoryLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link === activeLink
      );
    });

    categoryNav.scrollTo({
      left:
        activeLink.offsetLeft -
        categoryNav.clientWidth / 2 +
        activeLink.clientWidth / 2,
      behavior: "smooth"
    });
  }

  categoryLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetID = link.getAttribute("href");
      const targetSection =
        document.querySelector(targetID);

      if (!targetSection) return;

      const navigationHeight =
        navigation.offsetHeight;

      const sectionPosition =
        targetSection.getBoundingClientRect().top +
        window.scrollY -
        navigationHeight -
        9;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth"
      });

      activateCategory(link);
    });
  });

  /* Change active category while scrolling */

  function updateActiveCategory() {
    const visibleSections = menuSections.filter(
      (section) =>
        !section.classList.contains("hidden")
    );

    if (visibleSections.length === 0) return;

    const marker =
      window.scrollY +
      navigation.offsetHeight +
      85;

    let currentSection = visibleSections[0];

    visibleSections.forEach((section) => {
      if (section.offsetTop <= marker) {
        currentSection = section;
      }
    });

    const matchingLink = categoryLinks.find(
      (link) =>
        link.getAttribute("href") ===
        `#${currentSection.id}`
    );

    if (
      matchingLink &&
      !matchingLink.classList.contains("active")
    ) {
      activateCategory(matchingLink);
    }
  }

  window.addEventListener(
    "scroll",
    updateActiveCategory,
    { passive: true }
  );

  /* Search functionality */

  searchInput.addEventListener("input", () => {
    const searchText =
      searchInput.value.trim().toLowerCase();

    let resultCount = 0;

    menuItems.forEach((item) => {
      const itemText =
        item.textContent.toLowerCase();

      const matches =
        itemText.includes(searchText);

      item.classList.toggle(
        "hidden",
        !matches
      );

      if (matches) {
        resultCount++;
      }
    });

    menuGroups.forEach((group) => {
      const matchingItem = group.querySelector(
        ".menu-item:not(.hidden)"
      );

      const hasMatchingItem =
        Boolean(matchingItem);

      group.classList.toggle(
        "hidden",
        !hasMatchingItem
      );

      if (hasMatchingItem) {
        group.open = true;
      }
    });

    menuSections.forEach((section) => {
      const visibleGroup = section.querySelector(
        ".menu-group:not(.hidden)"
      );

      section.classList.toggle(
        "hidden",
        !visibleGroup
      );
    });

    noResults.hidden = resultCount > 0;

    updateActiveCategory();
  });

  updateActiveCategory();
});
