// add projects here!

var app = new Vue ({
  el: '#portfolio',
  data: {
    projects: [
      {
        title: 'TINY STOMPERS',
        description: "Website designed and built for a children's music and movement group. Created using Vue.js. Hosted on GitHub",
        siteURL: 'https://www.tinystompers.co.uk',
        projectImage: 'img/tiny-stompers.png',
        imgAlt: 'Tiny stompers project image',
        backgroundImage: 'img/paint.jpg'
      },
      {
        title: 'REGGAE COVER BAND',
        description: 'A website for a fictional cover band. Created using Angular.js. Hosted on GitHub',
        siteURL: 'https://ed85w.github.io/Stream1Project',
        projectImage: 'img/project1.png',
        imgAlt: 'reggae cover band project image',
        backgroundImage: 'img/wood.jpeg'
      },
      {
        title: 'VAN SOLUTIONS',
        description: "Website designed and built for a van servicing business in Leeds. Design was developed around the business' existing branding and logo",
        siteURL: 'https://www.vansolutionsltd.co.uk',
        projectImage: 'img/van-solutions.png',
        imgAlt: 'Van Solutions Project Image',
        backgroundImage: 'img/tyre.jpg'
      },
      {
        title: 'PREMIER LEAGUE STATISTICS',
        description: 'An interactive statistics page. Created in Flask and using D3.js, DC.js and Crossfilter. Hosted on Github and Heroku ',
        siteURL: 'https://premier-league-2015-16.herokuapp.com',
        projectImage: 'img/project3.png',
        imgAlt: 'premier league statistics project image',
        backgroundImage: 'img/grass1.jpeg'
      },
      {
        title: 'WEDDING STATIONERY SHOP',
        description: 'Shop application with basket and Stripe payment function. Created in Django. Hosted on Github, Heroku and AWS',
        siteURL: 'https://wedding-stationery-shop.herokuapp.com',
        projectImage: 'img/project2.png',
        imgAlt: 'wedding stationery shop project image',
        backgroundImage: 'img/flowers.jpeg'
      },
    ]
  }
})