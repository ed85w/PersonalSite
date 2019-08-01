// add projects here!

var app = new Vue ({
  el: '#portfolio',
  data: {
    projects: [
      {
        title: 'VAN SOLUTIONS',
        description: 'a website',
        siteURL: 'https://www.vansolutionsltd.co.uk',
        projectImage: 'img/project4.png',
        imgAlt: 'Van Solutions Project Image',
        backgroundImage: 'img/paint.jpg'
      },
      {
        title: 'TINY STOMPERS',
        description: "Client work. A Website for a children's music and movement group. Created using Vue.js. Hosted on GitHub",
        siteURL: 'https://www.tinystompers.co.uk',
        projectImage: 'img/project4.png',
        backgroundImage: 'img/paint.jpg'
      },
      {
        title: 'REGGAE COVER BAND',
        description: 'A website for a fictional cover band. Created using Angular.js. Hosted on GitHub',
        siteURL: 'https://ed85w.github.io/Stream1Project',
        projectImage: 'img/project1.png',
        backgroundImage: 'img/wood.jpeg'
      },
      {
        title: 'WEDDING STATIONERY SHOP',
        description: 'Shop application with basket and Stripe payment function. Created in Django. Hosted on Github, Heroku and AWS',
        siteURL: 'https://wedding-stationery-shop.herokuapp.com',
        projectImage: 'img/project2.png',
        backgroundImage: 'img/flowers.jpeg'
      },
      {
        title: 'PREMIER LEAGUE STATISTICS',
        description: 'An interactive statistics page. Created in Flask and using D3.js, DC.js and Crossfilter. Hosted on Github and Heroku ',
        siteURL: 'https://premier-league-2015-16.herokuapp.com',
        projectImage: 'img/project3.png',
        backgroundImage: 'img/grass1.jpeg'
      },
    ]
  },
  methods: {

  }
})