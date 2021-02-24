// REDUCER: APPLIQUER LES ACTIONS SUR LE STORE
// on donne deux arguments au compteur, 
// le state et on lui donne une valeur par défaut / l'état initial
// et une action 

const titleList = [
  { "title" : "Harry Potter"},
  { "title" : "Marvel"},
  { "title" : "Star Wars"},
  { "title" : "Le Seigneur des Anneaux"},
  { "title" : "Nos collections"},
];

const PageTitleReducer = (state = "", action) => {
  switch (action.type) {
    case 'HARRY_POTTER':
      const a = titleList.filter((title) => title.title === "Harry Potter");
      const title_hp = a[0];
      return (Object.values(title_hp)[0]);

    case 'MARVEL':
      const b = titleList.filter((title) => title.title === "Marvel");
      const title_marvel = b[0];
      return (Object.values(title_marvel)[0]);

    case 'SW':
      const c = titleList.filter((title) => title.title === "Star Wars");
      const title_sw = c[0];
      return (Object.values(title_sw)[0]);

    case 'SDA':
      const d = titleList.filter((title) => title.title === "Le Seigneur des Anneaux");
      const title_sda = d[0];
      return (Object.values(title_sda)[0]);

    case 'COLLECTIONS':
      const e = titleList.filter((title) => title.title === "Nos collections");
      const title_coll = e[0];
      return (Object.values(title_coll)[0]);

    default:
      return state;
  };
};

export default PageTitleReducer;