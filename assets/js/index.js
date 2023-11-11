const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true },
  });
  
  // Body color
  scroll.on("scroll", () => {
    if (document.querySelector("#color.is-inview")) {
      document.body.style.background = "#000101";
      document.body.style.color = "#fefeff";
    } else {
      document.body.style.background = "#fefeff";
      document.body.style.color = "#000101";
    }
  });

  const langSec = document.querySelector('.languageSelection');
  const butti = document.querySelectorAll('a');
  const desc = document.querySelector('.description');
  const dev = document.querySelector('.developpeur');
  const prop = document.querySelector('.propos');
  const bi = document.querySelector('.avete');
  const bo = document.querySelector('.discuter');
  const bob = document.querySelector('.dimi');
  const ba = document.querySelector('.vous');
  


  butti.forEach(el => {
    el.addEventListener('click', () => {

      const attr = el.getAttribute('language');
      desc.textContent = data[attr].description;
      dev.textContent = dd[attr].description;
      prop.textContent = da[attr].description;
      bi.textContent = di[attr].description;
      bo.textContent = dod[attr].description;
      bob.textContent = dodi[attr].description;
      ba.textContent = dad[attr].description;
      
    })
  });

  const data = { 
    "english": 
    {
      'description': " Hi! My name is Ismael Koussoube, I am 29 years old and I am currently working as an Angular/Java Developer in Nantes. Passionate about new technologies, I am interested in interface design and their ability to improve business productivity. Through my training and experiences, I have specialized in the field of front-end and I want to deepen my knowledge.",
      },

    "italian": 
    { 
      'description': "Ciao! Mi chiamo Ismael Koussoube, Ho 29 anni e sono attualmente in carica come Sviluppatore Angular/Java a Nantes. Appassionato di nuove tecnologie, sono interessato al design e alle loro capacità di migliorare la produttività delle aziende. Nel corso della mia formazione e delle mie esperienze, mi sono specializzato nel campo del front-end e desidero continuare ad approfondire le mie conoscenze.",
      },

    'french': 
    {
      'description': "Salut! Je m’appelle Ismael Koussoube, j'ai 29 ans et je suis actuellement en poste en tant que Concepteur Développeur Angular/Java à Nantes. Passionné par les nouvelles technologies, je m'intéresse au design d'interface et leurs facultés à améliorer la productivité des entreprises. Au fil de mes formations et de mes expériences, je me suis spécialisé dans le domaine du front-end et je souhaite approfondir mes connaissances.",
      },
  }
  

  const dd = { 
    "english": 
    {
      'description': "Developer",
      },

    "italian": 
    { 
      'description': "Sviluppatore",
      },

    'french': 
    {
      'description': "Développeur",
      },
  }

  const da = { 
    "english": 
    {
      'description': "About",
      },

    "italian": 
    { 
      'description': "A proposito",
      },

    'french': 
    {
      'description': "À propos",
      },
  }
  const di = { 
    "english": 
    {
      'description': "Do you have a project?",
      },

    "italian": 
    { 
      'description': "Avete un progetto?",
      },

    'french': 
    {
      'description': "Vous avez un projet ?",
      },
  }
  const dod = { 
    "english": 
    {
      'description': "I’d be happy to",
      },

    "italian": 
    { 
      'description': "Sarei felice di",
      },

    'french': 
    {
      'description': "Je serai ravi d'en",
      },
  }
  const dodi = { 
    "english": 
    {
      'description': "talk about it",
      },

    "italian": 
    { 
      'description': "discuterne",
      },

    'french': 
    {
      'description': "discuter",
      },
  }

  const dad = { 
    "english": 
    {
      'description': "with you",
      },

    "italian": 
    { 
      'description': "con voi",
      },

    'french': 
    {
      'description': "avec vous",
      },
  }
