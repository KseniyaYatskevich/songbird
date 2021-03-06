const movieData = [
  [
    {
      id: 1,
      name: 'Операцыя "Ы" и другие приключения Шурика',
      year: '1965',
      description: 'Фильм состоит из трех новелл, объединенных фигурой главного героя Шурика. В «Напарнике» Шурик сражается с хулиганом; в «Наваждении» готовится к экзамену; в «Операции «Ы» предотвращает «ограбление века».',
      image: './assets/ussrCinema/img/operationY.jpg',
      audio: './assets/ussrCinema/audio/operationY.mp3',
    },
    {
      id: 2,
      name: 'Бриллиантовая рука',
      year: '1968',
      description: 'Cоветская эксцентрическая комедия, снятая режиссёром Леонидом Гайдаем. Один из самых популярных фильмов в истории советского кино',
      image: './assets/ussrCinema/img/brillianHand.jpg',
      audio: './assets/ussrCinema/audio/brilliantHand.mp3',
    },
    {
      id: 3,
      name: 'Иван Васильевич меняет профессию',
      year: '1973',
      description: 'Фильм рассказывает об инженере-изобретателе Шурике, создавшем машину времени, которая открывает двери в XVI век — во времена Ивана Грозного, в результате чего царь оказывается в советской Москве.',
      image: './assets/ussrCinema/img/ivanChangeWork.jpg',
      audio: './assets/ussrCinema/audio/ivanChangeWork.mp3',
    },
    {
      id: 4,
      name: 'Служебный роман',
      year: '1977',
      description: 'Советский художественный фильм, лирическая комедия в двух сериях режиссёра Эльдара Рязанова. Фильм повествует о жизни работников московского статистического учреждения.',
      image: './assets/ussrCinema/img/workRomane.jpg',
      audio: './assets/ussrCinema/audio/workRomane.mp3',
    },
    {
      id: 5,
      name: 'Кавказская пленница',
      year: '1967',
      description: 'Действие фильма происходит на Кавказе. В основе сюжета — приключения собирателя фольклора Шурика, который, находясь в южном городе, оказывается втянутым в историю с похищением девушки Нины.',
      image: './assets/ussrCinema/img/kavkazskayaPlennica.jpg',
      audio: './assets/ussrCinema/audio/kavkazCaptive.mp3',
    },
    {
      id: 6,
      name: 'Джентельмены удачи',
      year: '1972',
      description: 'Заведующему детсадом Трошкину фатально не повезло: он оказался как две капли воды похож на бандита по кличке «Доцент», похитившего уникальный шлем Александра Македонского.',
      image: './assets/ussrCinema/img/genteelLuck.jpg',
      audio: './assets/ussrCinema/audio/genteelLucky.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Брат 2',
      year: '1997',
      description: 'Российский художественный фильм в жанре боевика и криминальной драмы. Фильм включён в список «100 главных русских фильмов по версии журнала "Афиша"',
      image: './assets/russianCinema/img/brother.jpg',
      audio: './assets/russianCinema/audio/brother.mp3',
    },
    {
      id: 2,
      name: 'Бой с тенью',
      year: '2004',
      description: 'Культовый российский боевик «Бой с тенью» не только покорил зрителей, но и стал основой для суперуспешной трилогии.',
      image: './assets/russianCinema/img/shadowBoxing.jpg',
      audio: './assets/russianCinema/audio/shadowBoxing.mp3',
    },
    {
      id: 3,
      name: 'Бумер',
      year: '2003',
      description: 'Памятные многим бандитские 90-е, эпоха беспредела на самых разных уровнях жизни ─ таков фон, на котором разворачиваются события криминальной драмы «Бумер» режиссера Петра Буслова.',
      image: './assets/russianCinema/img/bumer.jpeg',
      audio: './assets/russianCinema/audio/bumer.mp3',
    },
    {
      id: 4,
      name: 'Метро',
      year: '2012',
      description: 'Российский фильм-катастрофа режиссёра Антона Мегердичева, снятый по мотивам одноимённого романа Дмитрия Сафонова.',
      image: './assets/russianCinema/img/underground.jpg',
      audio: './assets/russianCinema/audio/underground.mp3',
    },
    {
      id: 5,
      name: 'Ночной дозор',
      year: '2004',
      description: 'Российский фильм режиссёра Тимура Бекмамбетова в жанре городского фэнтези. Фильм рассказывает о тайной борьбе светлых и тёмных мистических сил в современной Москве.',
      image: './assets/russianCinema/img/nightWatch.jpg',
      audio: './assets/russianCinema/audio/nightWatch.mp3',
    },
    {
      id: 6,
      name: 'Битва за Севастополь',
      year: '2015',
      description: 'Фильм повествует о судьбе легендарной женщины-снайпера 25-й Чапаевской стрелковой дивизии Красной армии, Героя Советского Союза, лейтенанта Людмилы Павличенко.',
      image: './assets/russianCinema/img/sevastopol.jpg',
      audio: './assets/russianCinema/audio/sevastopol.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Титаник',
      year: '1997',
      description: 'Американский фильм-катастрофа 1997 года, снятый режиссёром Джеймсом Кэмероном, в котором показана гибель легендарного лайнера "Титаник".',
      image: './assets/foreignCinema/img/titanic.jpg',
      audio: './assets/foreignCinema/audio/titanic.mp3',
    },
    {
      id: 2,
      name: 'Пираты карибского моря: Проклятие черной жемчужины',
      year: '2003',
      description: 'Первый фильм серии приключенческих фильмов о пиратах, действие которого разворачивается на Карибах в первой половине XVIII века.',
      image: './assets/foreignCinema/img/piratesOfCaribian.jpg',
      audio: './assets/foreignCinema/audio/piratesOfCaribian.mp3',
    },
    {
      id: 3,
      name: 'Гарри Поттер и философский камень',
      year: '2001',
      description: 'Британско-американский фэнтезийный фильм 2001 года режиссёра Криса Коламбуса. Первый фильм о мальчике-волшебнике Гарри Поттере, экранизация одноимённого романа Джоан Роулинг.',
      image: './assets/foreignCinema/img/harryPotter.jpg',
      audio: './assets/foreignCinema/audio/harryPotter.mp3',
    },
    {
      id: 4,
      name: 'Терминатор',
      year: '1984',
      description: 'Американский научно-фантастический фильм 1984 года режиссёра Джеймса Кэмерона. В центре сюжета — противостояние солдата и робота-терминатора, прибывших в 1984 год из постапокалиптического 2029 года.',
      image: './assets/foreignCinema/img/terminator.jpg',
      audio: './assets/foreignCinema/audio/terminator.mp3',
    },
    {
      id: 5,
      name: 'Крестный отец',
      year: '1972',
      description: 'Эпическая гангстерская драма режиссёра Фрэнсиса Форда Копполы. Экранизация одноимённого романа Марио Пьюзо, изданного в 1969 году. Слоган: "Предложение, от которого невозможно отказаться".',
      image: './assets/foreignCinema/img/godfather.jpg',
      audio: './assets/foreignCinema/audio/godFather.mp3',
    },
    {
      id: 6,
      name: 'Один дома',
      year: '1990',
      description: 'Аамериканский рождественский комедийный фильм 1990 года. Маколей Калкин исполнил роль Кевина Маккаллистера, мальчика, забытого дома, когда на рождественских каникулах его семья улетает в Париж.',
      image: './assets/foreignCinema/img/homeAlone.jpg',
      audio: './assets/foreignCinema/audio/homeAlone.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Король лев',
      year: '1994',
      description: 'Классический полнометражный мультфильм, о львёнке по имени Симба, которому предстоит пройти через предательство и изгнание, найти преданных друзей и свою любовь, а также стать истинным Королём.',
      image: './assets/cartoons/img/kingOfLion.jpeg',
      audio: './assets/cartoons/audio/kingOfLion.mp3',
    },
    {
      id: 2,
      name: 'Аладдин',
      year: '1992',
      description: 'Мультипликационный фильм, снятый по мотивам известной сказки об Аладдине из "1001 ночи". Некоторые персонажи и сюжетные повороты основаны на фильме "Багдадский вор" и мультфильме "1001 арабская ночь"',
      image: './assets/cartoons/img/аladdin.jpg',
      audio: './assets/cartoons/audio/aladdin.mp3',
    },
    {
      id: 3,
      name: 'Город героев',
      year: '2014',
      description: 'Главный герой - 14-летний вундеркинд, Хиро Хамада, большой любитель боёв ботов — подпольных игр на деньги, цель которых — при помощи своего боевого робота победить робота соперника.',
      image: './assets/cartoons/img/cityOfHero.jpg',
      audio: './assets/cartoons/audio/cityOfHero.mp3',
    },
    {
      id: 4,
      name: 'Бременские музыканты',
      year: '1969',
      description: 'Советский рисованный мультфильм 1969 года, музыкальная фантазия на темы одноимённой сказки братьев Гримм, ставшая популярной в СССР благодаря музыке, написанной Геннадием Гладковым с элементами рок-н-ролла.',
      image: './assets/cartoons/img/bremenTownMusicians.jpg',
      audio: './assets/cartoons/audio/bremenskieMusition.mp3',
    },
    {
      id: 5,
      name: 'Алёша Попович и Тугарин Змей',
      year: '2004',
      description: 'В древнем русском городе Ростове у попа в семье родился сын, и его назвали Алёшей, а по отцу — Поповичем. Когда он вырос, то стал богатырём, который всё время попадал в неприятности и даже был прозван "непутёвым". ',
      image: './assets/cartoons/img/aleshaPopovich.jpg',
      audio: './assets/cartoons/audio/aleshaPopovich.mp3',
    },
    {
      id: 6,
      name: 'Зверополис',
      year: '2016',
      description: 'Мультфильм повествует о Зверополисе — современном городе, населённом антропоморфными животными.Зверополис разделён на районы, каждый из которых полностью повторяет естественную среду обитания его жителей. ',
      image: './assets/cartoons/img/zootopia.jpg',
      audio: './assets/cartoons/audio/zootopia.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Игра престолов',
      year: '2011-2019',
      description: 'Действие «Игры престолов» происходит в вымышленном мире, напоминающем средневековую Европу. В сериале одновременно действует множество персонажей и развивается несколько сюжетных линий. ',
      image: './assets/serials/img/gameOfThrones.jpg',
      audio: './assets/serials/audio/gameOfThrones.mp3',
    },
    {
      id: 2,
      name: 'Ведьмак',
      year: '2019-',
      description: 'Фэнтезийный телесериал, снятый по мотивам одноименной серии романов Анджея Сапковского. Ведьмак Геральт из Ривии, мутант и убийца чудовищ, изо всех сил старается найти своё место в мире.',
      image: './assets/serials/img/witcher.jpeg',
      audio: './assets/serials/audio/witcher.mp3',
    },
    {
      id: 3,
      name: 'Друзья',
      year: '1994-2004',
      description: 'Комедийный телесериал, повествующий о жизни шестерых друзей. Признан одним из лучших комедийных сериалов в истории американского телевидения и стал одним из наиболее знаменитых проектов 1990-х годов.',
      image: './assets/serials/img/friends.jpg',
      audio: './assets/serials/audio/friends.mp3',
    },
    {
      id: 4,
      name: 'Доктор Хаус',
      year: '2004-2012',
      description: 'Американский телесериал о выдающемся враче-диагносте Грегори Хаусе и его команде. По жанру представляет собой медицинский детектив, но в сюжетах серий использованы также элементы драмы.',
      image: './assets/serials/img/drHouse.jpeg',
      audio: './assets/serials/audio/drHouse.mp3',
    },
    {
      id: 5,
      name: 'Гравити Фолз',
      year: '2012-2016',
      description: 'История рассказывает о приключениях близнецов, брата и сестры Диппера и Мэйбл Пайнс, чьи летние планы отправляются в чулан, когда родители оправляют их к дальнему родственнику в тихий городок Гравити Фолз.',
      image: './assets/serials/img/gravityFalls.jpg',
      audio: './assets/serials/audio/gravityFalls.mp3',
    },
    {
      id: 6,
      name: 'Бумажный дом',
      year: '2017-',
      description: 'Испанский телесериал в жанре криминальной драмы. Действие разворачивается вокруг группы авантюристов во главе с Профессором, планирующих ограбление Испанского королевского монетного двора.',
      image: './assets/serials/img/paperHouse.jpg',
      audio: './assets/serials/audio/paperHouse.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Стиляги',
      year: '2008',
      description: 'Это история Москвы начала пятидесятых, в которой компании молодых людей приходится бороться за право быть не такими как все, слушать другую музыку, по-другому одеваться и, конечно же, любить.',
      image: './assets/musicals/img/stylish.jpg',
      audio: './assets/musicals/audio/stylish.mp3',
    },
    {
      id: 2,
      name: 'Ла-Ла Ленд',
      year: '2016',
      description: 'Это история любви старлетки и фанатичного джазового музыканта, вынужденного подрабатывать в заштатных барах. Но пришедший к влюбленным успех начинает подтачивать их отношения.',
      image: './assets/musicals/img/lalalend.jpg',
      audio: './assets/musicals/audio/laLaLand.mp3',
    },
    {
      id: 3,
      name: 'Мамма Мия!',
      year: '2008',
      description: '20-летняя Софи Шеридан собирается выйти замуж за Ская. Омрачает будущий праздник одно — Софи воспитывала её мать, Донна, и главная героиня не знает, кто её отец.',
      image: './assets/musicals/img/mammaMia.jpg',
      audio: './assets/musicals/audio/mammaMia.mp3',
    },
    {
      id: 4,
      name: 'Мэри Поппинс возвращается',
      year: '2018',
      description: 'Фильм рассказывает о новых приключениях Мэри и ее друга Джека, которым предстоит встретиться с представителями следующего поколения семейства Бэнкс.',
      image: './assets/musicals/img/marryPoppins.jpg',
      audio: './assets/musicals/audio/merryPopins.mp3',
    },
    {
      id: 5,
      name: 'Бурлеск',
      year: '2010',
      description: 'Молодая амбициозная девушка Али с чудесным голосом отправляется из маленького городка в Лос-Анджелес, где хочет найти свою любовь, семью и успех. Она находит работу в нео-бурлеск-клубею.',
      image: './assets/musicals/img/burlesk.jpg',
      audio: './assets/musicals/audio/burlesque.mp3',
    },
    {
      id: 6,
      name: 'Зверопой',
      year: '2016',
      description: 'В мире человекоподобных животных коала Бастер Мун владеет театром, являясь фанатом шоу-бизнеса. Он любит эстраду с тех пор, как отец в первый раз взял его ещё ребёнком на музыкальное шоу.',
      image: './assets/musicals/img/zveropoy.jpg',
      audio: './assets/musicals/audio/zveropoy.mp3',
    },
  ],
];

export default movieData;
