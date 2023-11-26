let games = [
    { id: 1, title: 'The Legend of Zelda: Breath of the Wild', platform: 'Nintendo Switch' },
    { id: 2, title: 'Red Dead Redemption 2', platform: 'PlayStation 4' },
    { id: 3, title: 'Minecraft', platform: 'PC' },
    { id: 4, title: 'Fortnite', platform: 'Multiplatform' },
    { id: 5, title: 'Super Mario Odyssey', platform: 'Nintendo Switch' },
    { id: 6, title: 'The Witcher 3: Wild Hunt', platform: 'Xbox One' },
    { id: 7, title: 'Overwatch', platform: 'PC' },
    { id: 8, title: 'FIFA 22', platform: 'PlayStation 5' },
    { id: 9, title: 'Among Us', platform: 'Mobile' },
    { id: 10, title: 'Cyberpunk 2077', platform: 'PC' }
  ];
  let authors = [
    { id: 1, name: "John Doe", verified: true },
    { id: 2, name: "Jane Smith", verified: false },
    { id: 3, name: "Alice Johnson", verified: true },
    { id: 4, name: "Bob Anderson", verified: false },
    { id: 5, name: "Eva Williams", verified: true },
    { id: 6, name: "Mark Taylor", verified: true },
    { id: 7, name: "Sophie Brown", verified: false },
    { id: 8, name: "Daniel White", verified: true },
    { id: 9, name: "Olivia Harris", verified: false },
    { id: 10, name: "William Turner", verified: true },
  ];
  let reviews = [
    {
      id: 1,
      rating: 4.5,
      content: "Great game! Really enjoyed the graphics and gameplay.",
      author_id: 101,
      game_id: 201,
    },
    {
      id: 2,
      rating: 3.8,
      content: "The storyline could be better, but overall a decent game.",
      author_id: 102,
      game_id: 202,
    },
    {
      id: 3,
      rating: 5.0,
      content: "Amazing experience! Must-play for every gamer.",
      author_id: 103,
      game_id: 203,
    },
    {
      id: 4,
      rating: 4.0,
      content: "Solid game with a good balance of challenge and fun.",
      author_id: 104,
      game_id: 204,
    },
    {
      id: 5,
      rating: 4.7,
      content: "Impressive graphics and an engaging storyline.",
      author_id: 105,
      game_id: 205,
    },
    {
      id: 6,
      rating: 3.5,
      content: "Decent game, but the controls could use some improvement.",
      author_id: 106,
      game_id: 206,
    },
    {
      id: 7,
      rating: 4.2,
      content: "Enjoyable gameplay and interesting characters.",
      author_id: 107,
      game_id: 207,
    },
    {
      id: 8,
      rating: 4.8,
      content: "Exceptional game! Couldn't put it down.",
      author_id: 108,
      game_id: 208,
    },
    {
      id: 9,
      rating: 3.0,
      content: "Not my favorite. The story was a bit confusing.",
      author_id: 109,
      game_id: 209,
    },
    {
      id: 10,
      rating: 4.6,
      content: "Highly recommended. A masterpiece of game design.",
      author_id: 110,
      game_id: 210,
    },
  ];
  
  export default { games, authors, reviews}