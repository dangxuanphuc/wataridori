Skill.create!([
  {name: "Vietnamese", percent: 100, skill_type: "language"},
  {name: "Japanese", percent: 40, skill_type: "language"},
  {name: "English", percent: 55, skill_type: "language"},
  {name: "Ruby", percent: 60, skill_type: "technology"},
  {name: "Javascript", percent: 50, skill_type: "technology"},
  {name: "VueJS", percent: 45, skill_type: "technology"},
  {name: "MySQL", percent: 55, skill_type: "technology"},
  {name: "Docker", percent: 50, skill_type: "technology"},
  {name: "CSS", percent: 75, skill_type: "technology"},
])

Favorite.create!([
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1623479619/wataridori/images/fujita-maiko_nz5lj0.jpg",
    name: "Maiko Fujita", favorite_type: "singer"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1623422532/wataridori/images/noriko-sakai_nvsnzx.jpg",
    name: "Noriko Sakai", favorite_type: "singer"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1602212641/wataridori/images/radwimps.jpg",
    name: "Radwimps", favorite_type: "singer"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1623469822/wataridori/images/inori-minase_acuk9c.jpg",
    name: "Inori Minase", favorite_type: "singer"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1623421641/wataridori/images/noriko-mitose_moy8ji.jpg",
    name: "Noriko Mitose", favorite_type: "singer"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1602212641/wataridori/images/aoi-teshima.jpg",
    name: "Aoi Teshima", favorite_type: "singer"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1623469284/wataridori/images/kenshi-yonezu_hlnjyy.jpg",
    name: "Kenshi Yonezu", favorite_type: "singer"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1625385203/wataridori/images/ikimono-gakari_gczotc.jpg",
    name: "Ikimono Gakari", favorite_type: "singer"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1623470806/wataridori/images/nagori-yuki_pmyodc.jpg",
    name: "なごり雪", favorite_type: "song"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1623422929/wataridori/images/mizu-fuusen_f03o4l.jpg",
    name: "水風船", favorite_type: "song"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1623423313/wataridori/images/lemon_tppomh.png",
    name: "レモン", favorite_type: "song"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1623423455/wataridori/images/ookina-furudokei_j1j6ya.jpg",
    name: "大きな古時計", favorite_type: "song"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1623423621/wataridori/images/uchiage-hanabi_w6ugst.jpg",
    name: "打上花火", favorite_type: "song"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1623468350/wataridori/images/sakura_tfl9vc.jpg",
    name: "桜", favorite_type: "song"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1623424126/wataridori/images/ato-hitotsu_ecutcq.jpg",
    name: "あとひとつ", favorite_type: "song"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1623424209/wataridori/images/ne_c5r119.jpg",
    name: "ねぇ", favorite_type: "song"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1625465895/wataridori/images/doraemon_jlmll0.png",
    name: "ドラえもん", favorite_type: "other"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1625466887/wataridori/images/astronomy_v2yqyo.jpg",
    name: "Astronomy", favorite_type: "other"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1625465893/wataridori/images/cydia_nogk9w.jpg",
    name: "iOS Jailbreaking", favorite_type: "other"},
  {image: "https://res.cloudinary.com/phucdx/image/upload/v1623481358/wataridori/images/novak_bsqmkl.jpg",
    name: "Novak Djokovic", favorite_type: "other"},
])
