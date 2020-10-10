const songs = [
  {
    title: 'キセキ',
    artist: 'GReeeeN',
    seconds: 272,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602247960/wataridori/songs/cover/kiseki-greeeen.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602214009/wataridori/songs/Kiseki.mp3'
  },
  {
    title: 'なごり雪',
    artist: 'Ayaka Hirahara',
    seconds: 230,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602251930/wataridori/images/nagoriyuki.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213761/wataridori/songs/NagoriYuki.mp3'
  },
  {
    title: 'Sparkle',
    artist: 'RADWIMPS',
    seconds: 408,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602212639/wataridori/images/your-name.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213762/wataridori/songs/sparkle.mp3'
  },
  {
    title: '君だったら',
    artist: 'Happy Birthday',
    seconds: 320,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602255073/wataridori/songs/cover/kimidattara.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213760/wataridori/songs/KimiDattara.mp3'
  },
  {
    title: 'オレンジ',
    artist: '7!!',
    seconds: 350,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602212639/wataridori/images/orange.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213763/wataridori/songs/orange.mp3'
  },
  {
    title: 'ひらり',
    artist: 'Sakurako Ohara',
    seconds: 295,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602245131/wataridori/images/hirari-sakurako-ohara.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213752/wataridori/songs/Hirari.mp3'
  },
  {
    title: '夢と葉桜',
    artist: 'Hatsune Miku',
    seconds: 254,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602253418/wataridori/songs/cover/Yume_to_Hazakura.png',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213753/wataridori/songs/YumeToHazakura.mp3'
  },
  {
    title: 'Hai Triệu Năm',
    artist: 'Đen, Biên',
    seconds: 216,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602245738/wataridori/songs/cover/2trieunam.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213753/wataridori/songs/HaiTrieuNam.mp3'
  },
  {
    title: 'Hello Goodbye & Hello',
    artist: 'Anri Kumaki',
    seconds: 273,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602253806/wataridori/songs/cover/hellogoodbye.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213752/wataridori/songs/HelloGoodbyeHello.mp3'
  },
  {
    title: 'Bài Này Chill Phết',
    artist: 'Đen, Min',
    seconds: 276,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602245738/wataridori/songs/cover/chillphet.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213749/wataridori/songs/BaiNayChillPhet.mp3'
  },
  {
    title: 'ありがとう',
    artist: 'Kokia',
    seconds: 370,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602245738/wataridori/songs/cover/arigatou.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213744/wataridori/songs/Arigato.mp3'
  },
  {
    title: 'ひらり、ひらり',
    artist: 'Hatsune Miku',
    seconds: 210,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602253985/wataridori/songs/cover/HirariHirari.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213742/wataridori/songs/HirariHirari.mp3'
  },
  {
    title: '未来',
    artist: 'Garnidelia',
    seconds: 343,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602212638/wataridori/images/mirai.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602239330/wataridori/songs/Mirai.mp3'
  },
  {
    title: 'Tokyo Bon 2020',
    artist: 'Namewee',
    seconds: 299,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602255674/wataridori/songs/cover/TokyoBon2020.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602229667/wataridori/songs/tokyo_bon.mp3'
  },
  {
    title: 'Wishing',
    artist: 'Minase Inori',
    seconds: 360,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602252277/wataridori/songs/cover/wishing.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213743/wataridori/songs/Wishing.mp3'
  },
  {
    title: '雪の華',
    artist: 'Mika Nakashima',
    seconds: 335,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602254425/wataridori/images/yuki-no-hana.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213742/wataridori/songs/YukiNoHana.mp3'
  },
  {
    title: '桜色舞うころ',
    artist: 'Mika Nakashima',
    seconds: 296,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602245738/wataridori/songs/cover/SakuraIroMauKoro.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213740/wataridori/songs/SakurairoMauKoro.mp3'
  },
  {
    title: 'Ý Em Sao',
    artist: 'Kay Trần, Lăng LD',
    seconds: 141,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602245739/wataridori/songs/cover/YEmSao.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213736/wataridori/songs/YEmSao.mp3'
  },
  {
    title: '私の声',
    artist: 'Minase Inori',
    seconds: 164,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602253186/wataridori/songs/cover/WatashiNoKoe-minase.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213735/wataridori/songs/WatashiNoKoe.mp3'
  },
  {
    title: '花のあとさき',
    artist: 'MAO',
    seconds: 227,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602245738/wataridori/songs/cover/HanaNoAtosaki.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602239328/wataridori/songs/HanaNoAtosaki.mp3'
  },
  {
    title: '1年2ヶ月20日',
    artist: 'BRIGHT',
    seconds: 315,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602255004/wataridori/songs/cover/ichinen.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213736/wataridori/songs/IchinenNikagetsuHatsuka.mp3'
  },
  {
    title: ' 碧いうさぎ',
    artist: 'Noriko Sakai',
    seconds: 227,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602251604/wataridori/images/norico-sakai.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213732/wataridori/songs/AoiUsagi.mp3'
  },
  {
    title: 'さよならの夏',
    artist: 'Aoi Teshima',
    seconds: 323,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602245741/wataridori/songs/cover/SayonaraNoNatsu.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213733/wataridori/songs/SayonaraNoNatsu.mp3'
  },
  {
    title: 'Thằng Điên',
    artist: 'JustaTee, Phương Ly',
    seconds: 286,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602254084/wataridori/songs/cover/thangdien.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213731/wataridori/songs/thang_dien.mp3'
  },
  {
    title: '叶わない恋でも',
    artist: 'KG, Yumi Shizukusa',
    seconds: 312,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602212639/wataridori/images/kanawanai-koi-demo.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213734/wataridori/songs/KanawanaiKoiDemo.mp3'
  },
  {
    title: 'アンブレラ',
    artist: 'Itou Kashitarou',
    seconds: 260,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602255300/wataridori/songs/cover/umbrella.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213725/wataridori/songs/Umbrella.mp3'
  },
  {
    title: '水風船',
    artist: 'Fujita Maiko',
    seconds: 267,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602292216/wataridori/images/fujita-maiko.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213724/wataridori/songs/MizuFuusen.mp3'
  },
  {
    title: 'Hôm Nay Tôi Buồn',
    artist: 'Phùng Khánh Linh',
    seconds: 275,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602245740/wataridori/songs/cover/HomNayToiBuon.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213722/wataridori/songs/HomNayToiBuon.mp3'
  },
  {
    title: '明日、僕は君に会いに行く。',
    artist: 'ワカバ',
    seconds: 250,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602245739/wataridori/songs/cover/ashitaainiiku.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213714/wataridori/songs/AshitaBokuwaKimiNiAiNiIku.mp3'
  },
  {
    title: '大きな古時計',
    artist: 'Noriko Mitose',
    seconds: 287,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602251481/wataridori/songs/cover/tokei.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213716/wataridori/songs/OokiNaFurudokei.mp3'
  },
  {
    title: '風の記憶',
    artist: 'Anri Kumaki',
    seconds: 227,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602245738/wataridori/songs/cover/kazenokyoku.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213715/wataridori/songs/KazenoKioku.mp3'
  },
  {
    title: '百恋歌',
    artist: 'Satomi Takasugi',
    seconds: 282,
    cover:
      'https://res.cloudinary.com/phucdx/image/upload/v1602255512/wataridori/songs/cover/hyaku-renka.jpg',
    src:
      'https://res.cloudinary.com/phucdx/video/upload/v1602213716/wataridori/songs/HyakuRenka.mp3'
  }
];

export default songs;
