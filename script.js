const menu = [
  {id:"coolers",no:"01",title:"Coolers + Matcha",groups:[
    {name:"Non-Coffee Mocktails",items:[
      ["Sol de Mexico",260],["Salted Pineapple Refresh",435],["Tropical Lychee Spritzer",475],["Orange Sunset",370],["Chocolate Martini",475],["Pink Sakura",435],["Lavender Blush Cooler",350],["Lavender Mint Mojito",380],["Tropical Blue Lagoon",295],["Blue Sky",335],["Dragon Halo",340],["Classic Mint Mojito",210],["Strawberry Mojito",260],["Blackcurrant Mojito",260],["Blueberry Mojito",260],["Cranberry Mojito",260]
    ]},
    {name:"Matcha Cloud",items:[
      ["Coco Matcha Bliss",445],["Matcha Iceland Cloud",440],["Strawberry Matcha",435],["Elderflower Cloud Matcha",435]
    ]}
  ]},
  {id:"coffee",no:"02",title:"Coffee Bar",groups:[
    {name:"Frappés",items:[
      ["Classic Frappé",315],["Mocha Frappé",370],["Hazelnut Frappé",345],["Vanilla Frappé",345],["Caramel Frappé",345],["Salted Caramel Frappé",345]
    ]},
    {name:"Everyday Coffee",items:[
      ["Espresso",150,"Hot / Iced"],["Cappuccino",225,"Hot / Iced"],["Latte",225,"Hot / Iced"],["Flat White",210],["Mocha",260,"Hot / Iced"],["Vietnamese Coffee",260],["Espresso Tonic / Ginger Ale",345],["Espresso Red Bull",415]
    ]},
    {name:"Cold Brew",items:[
      ["House Blend Cold Brew",240],["Cold Brew Tonic / Ginger Ale",380],["Cold Brew Red Bull",435],["Vietnamese Cold Brew",335],["Brew Sundowner",315],["Whiskey Barrel Edge",190],["Rum Barrel Edge",190]
    ]}
  ]},
  {id:"kitchen",no:"03",title:"Kitchen",groups:[
    {name:"Starters",items:[
      ["Cheese Garlic Bread",350],["Italian Jalapeño Poppers",510],["Peri Peri Paneer Popcorn",560],["Mexican Cheese Balls",480],["Pesto Potato",480],["Honey Chilli Paneer",480],["Burshetta",390],["Pesto Paneer",520],["Limoncello Falafel Platter",670]
    ]},
    {name:"Pasta",items:[
      ["Alfredo Pasta",610],["Chilli Garlic Pasta",570],["Arrabbiata Pasta",560],["Pink Sauce Pasta",600],["Pesto Cream Pasta",630],["Rigatoni Pasta",595],["Aglio e Olio",590],["Pesto Spaghetti",590]
    ]}
  ]},
  {id:"specials",no:"05",title:"Specials",groups:[
    {name:"Coffee Mocktails",items:[
      ["Protein Espresso",320],["Midnight Berry Rush",350],["Cranberry Cold Brew",280],["Rosa Coffee Tropic",350],["Spicy Velvet",435],["Berry Luscious Espresso",410],["Choco Almond",445],["Cold Brew Martini",295],["Harvest Slim",295],["Midnight Berry",410]
    ]},
    {name:"Iced Tea",items:[
      ["Lemon Iced Tea",240],["Peach Iced Tea",270],["Cranberry Iced Tea",240],["Watermelon Iced Tea",270],["Green Apple Iced Tea",240]
    ]},
    {name:"Shakes",items:[
      ["Oreo Shake",340],["Nutella Shake",370],["Biscoff Shake",370],["Choco Brownie Shake",null,"Price unavailable"],["Pistachio Shake",400],["Mixed Berry Shake",340]
    ]}
  ]},
  {id:"toast-rice",no:"06",title:"Toast + More",groups:[
    {name:"Toast",items:[
      ["Creamy Mushroom Open Toast",520],["Avocado Toast",510],["Beans Open Toast",540]
    ]},
    {name:"Rice Bowls",items:[
      ["Burnt Garlic Rice",570],["Mexican Rice",450],["Mushroom Risotto Bowl",470],["Peri Peri Rice Bowl",595],["Malaysian Rice Bowl",630]
    ]},
    {name:"Desserts",items:[
      ["Mango Puff",410,"Danish pastry, creamy filling, fresh mango"],
      ["Matcha Mont Blanc",430,"Crunchy puff, mango puree & crumbs, matcha ganache, fresh mango"],
      ["Matcha Mango Parfait",410,"Muesli & corn flakes, matcha soft serve, fresh strawberries & homemade strawberry puree"],
      ["Mango Bento",430,"Moist Victorian sponge, mascarpone filling, fresh mango, mango foam"],
      ["Japanese French Toast",380,"Housemade shokupan, Japanese-style butter, caramelised crust, golden syrup"],
      ["Tiramisu",370,"Uji matcha / Japanese dark roast coffee"],
      ["Japanese Pancakes",390,"Stack of 2, golden syrup & vanilla soft serve"],
      ["Thai Mango Sticky Rice",460,"Sweet coconut sticky rice, ripe mangoes, warm coconut cream"]
    ]}
  ]}
];

document.addEventListener("DOMContentLoaded",()=>{
  const root=document.querySelector("#menuRoot");
  const navList=document.querySelector("#categoryNav");
  const nav=document.querySelector(".category-nav");
  const format=n=>new Intl.NumberFormat("en-IN").format(n);
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const recommendedItems=new Set([
    "Salted Pineapple Refresh","Pink Sakura",
    "Coco Matcha Bliss","Strawberry Matcha",
    "Classic Frappé","Salted Caramel Frappé",
    "Cappuccino","Vietnamese Coffee",
    "House Blend Cold Brew","Brew Sundowner",
    "Peri Peri Paneer Popcorn","Limoncello Falafel Platter",
    "Pink Sauce Pasta","Pesto Cream Pasta",
    "Cranberry Cold Brew","Spicy Velvet",
    "Peach Iced Tea","Watermelon Iced Tea",
    "Biscoff Shake","Pistachio Shake",
    "Creamy Mushroom Open Toast","Avocado Toast",
    "Mexican Rice","Peri Peri Rice Bowl",
    "Matcha Mont Blanc","Japanese French Toast"
  ]);

  menu.forEach((section,sectionIndex)=>{
    const count=section.groups.reduce((n,g)=>n+g.items.length,0);
    navList.insertAdjacentHTML("beforeend",`<a class="category-link${sectionIndex===0?" active":""}" href="#${section.id}">${esc(section.title)}</a>`);
    const groups=section.groups.map((group,groupIndex)=>{
      const items=group.items.map(([name,price,note],itemIndex)=>{
        const key=`${section.id}-${groupIndex}-${itemIndex}`;
        const unavailable=price==null;
        const recommended=recommendedItems.has(name);
        return `<article class="menu-item${recommended?" recommended":""}" data-key="${key}" data-name="${esc(name)}" ${unavailable?"":`data-price="${price}"`}>
          <div><div class="item-title"><h4>${esc(name)}</h4>${recommended?'<em>★ Recommended</em>':""}</div>${note?`<p>${esc(note)}</p>`:""}</div>
          <strong>${unavailable?"—":`₹${format(price)}`}</strong>
        </article>`;
      }).join("");
      return `<details class="menu-group" ${groupIndex===0?"open":""}>
        <summary><h3>${esc(group.name)}</h3><span>${group.items.length} items</span></summary>
        <div class="items">${items}</div>
      </details>`;
    }).join("");
    root.insertAdjacentHTML("beforeend",`<section class="menu-section" id="${section.id}">
      <div class="section-head"><div><small>${section.no}</small><h2>${esc(section.title)}</h2></div><span>${count} items</span></div>
      ${groups}
    </section>`);
  });

  const links=[...document.querySelectorAll(".category-link")];
  const sections=[...document.querySelectorAll(".menu-section")];
  const items=[...document.querySelectorAll(".menu-item")];
  const search=document.querySelector("#menuSearch");
  const noResults=document.querySelector("#noResults");
  const bar=document.querySelector("#billBar");
  const countEl=document.querySelector("#billCount");
  const barTotal=document.querySelector("#billBarTotal");
  const sheet=document.querySelector("#cartSheet");
  const overlay=document.querySelector("#cartOverlay");
  const list=document.querySelector("#cartList");
  const empty=document.querySelector("#emptyCart");
  const subtotal=document.querySelector("#subtotal");
  const grandTotal=document.querySelector("#grandTotal");
  const close=document.querySelector("#closeCart");
  const clear=document.querySelector("#clearOrder");
  const toast=document.querySelector("#toast");
  const cart=new Map();
  let toastTimer;

  function notify(text){
    clearTimeout(toastTimer);
    toast.textContent=text;
    toast.classList.add("show");
    toastTimer=setTimeout(()=>toast.classList.remove("show"),1100);
  }

  function renderCart(){
    list.innerHTML="";
    let count=0,total=0;
    cart.forEach((item,key)=>{
      count+=item.qty;
      total+=item.price*item.qty;
      const row=document.createElement("div");
      row.className="selected-row";
      row.innerHTML=`<div><h3>${esc(item.name)}</h3><span>₹${format(item.price)} each</span><div class="qty"><button data-key="${key}" data-change="-1">−</button><b>${item.qty}</b><button data-key="${key}" data-change="1">+</button></div></div><strong>₹${format(item.price*item.qty)}</strong>`;
      list.appendChild(row);
    });
    countEl.textContent=count;
    barTotal.textContent=format(total);
    subtotal.textContent=format(total);
    grandTotal.textContent=format(total);
    bar.hidden=count===0;
    empty.hidden=count>0;
    clear.disabled=count===0;
  }

  document.querySelectorAll(".menu-item>button:not(:disabled)").forEach(button=>{
    button.addEventListener("click",()=>{
      const item=button.closest(".menu-item");
      const key=item.dataset.key;
      const saved=cart.get(key);
      cart.set(key,{name:item.dataset.name,price:Number(item.dataset.price),qty:saved?saved.qty+1:1});
      renderCart();
      notify(`${item.dataset.name} added`);
      button.textContent="✓";
      setTimeout(()=>button.textContent="+",500);
    });
  });

  list.addEventListener("click",event=>{
    const button=event.target.closest("button[data-key]");
    if(!button)return;
    const item=cart.get(button.dataset.key);
    item.qty+=Number(button.dataset.change);
    if(item.qty<=0)cart.delete(button.dataset.key);
    renderCart();
  });

  function openSheet(){sheet.classList.add("show");overlay.classList.add("show");sheet.setAttribute("aria-hidden","false");document.body.classList.add("locked")}
  function closeSheet(){sheet.classList.remove("show");overlay.classList.remove("show");sheet.setAttribute("aria-hidden","true");document.body.classList.remove("locked")}
  bar.addEventListener("click",openSheet);
  close.addEventListener("click",closeSheet);
  overlay.addEventListener("click",closeSheet);
  clear.addEventListener("click",()=>{cart.clear();renderCart();closeSheet()});

  function activate(link){
    links.forEach(x=>x.classList.toggle("active",x===link));
    navList.scrollTo({left:link.offsetLeft-navList.clientWidth/2+link.clientWidth/2,behavior:"smooth"});
  }
  links.forEach(link=>link.addEventListener("click",event=>{
    event.preventDefault();
    const target=document.querySelector(link.getAttribute("href"));
    window.scrollTo({top:target.getBoundingClientRect().top+scrollY-nav.offsetHeight-9,behavior:"smooth"});
    activate(link);
  }));

  function updateNav(){
    const visible=sections.filter(s=>!s.classList.contains("hidden"));
    if(!visible.length)return;
    const marker=scrollY+nav.offsetHeight+85;
    let current=visible[0];
    visible.forEach(section=>{if(section.offsetTop<=marker)current=section});
    const link=links.find(x=>x.getAttribute("href")===`#${current.id}`);
    if(link&&!link.classList.contains("active"))activate(link);
  }
  window.addEventListener("scroll",updateNav,{passive:true});

  search.addEventListener("input",()=>{
    const query=search.value.trim().toLowerCase();
    let matches=0;
    items.forEach(item=>{
      const match=item.textContent.toLowerCase().includes(query);
      item.classList.toggle("hidden",!match);
      if(match)matches++;
    });
    document.querySelectorAll(".menu-group").forEach(group=>{
      const hasMatch=!!group.querySelector(".menu-item:not(.hidden)");
      group.classList.toggle("hidden",!hasMatch);
      if(query&&hasMatch)group.open=true;
    });
    sections.forEach(section=>section.classList.toggle("hidden",!section.querySelector(".menu-group:not(.hidden)")));
    noResults.hidden=matches>0;
    updateNav();
  });

  renderCart();
  updateNav();
});
