const LEVEL = 50;
const FIXED_IV = 31;
const MAX_STAT_POINTS = 32;
const TOTAL_STAT_POINTS = 66;
const stats = [
  { key: "hp", label: "HP" }, { key: "atk", label: "공격" }, { key: "def", label: "방어" },
  { key: "spa", label: "특수공격" }, { key: "spd", label: "특수방어" }, { key: "spe", label: "스피드" }
];

const championsRoster = [{"dex": 3, "en": "Venusaur"}, {"dex": 6, "en": "Charizard"}, {"dex": 9, "en": "Blastoise"}, {"dex": 15, "en": "Beedrill"}, {"dex": 18, "en": "Pidgeot"}, {"dex": 24, "en": "Arbok"}, {"dex": 25, "en": "Pikachu"}, {"dex": 26, "en": "Raichu"}, {"dex": 36, "en": "Clefable"}, {"dex": 38, "en": "Ninetales"}, {"dex": 45, "en": "Vileplume"}, {"dex": 59, "en": "Arcanine"}, {"dex": 65, "en": "Alakazam"}, {"dex": 68, "en": "Machamp"}, {"dex": 71, "en": "Victreebel"}, {"dex": 80, "en": "Slowbro"}, {"dex": 94, "en": "Gengar"}, {"dex": 115, "en": "Kangaskhan"}, {"dex": 121, "en": "Starmie"}, {"dex": 127, "en": "Pinsir"}, {"dex": 128, "en": "Tauros"}, {"dex": 130, "en": "Gyarados"}, {"dex": 132, "en": "Ditto"}, {"dex": 134, "en": "Vaporeon"}, {"dex": 135, "en": "Jolteon"}, {"dex": 136, "en": "Flareon"}, {"dex": 142, "en": "Aerodactyl"}, {"dex": 143, "en": "Snorlax"}, {"dex": 149, "en": "Dragonite"}, {"dex": 154, "en": "Meganium"}, {"dex": 157, "en": "Typhlosion"}, {"dex": 160, "en": "Feraligatr"}, {"dex": 168, "en": "Ariados"}, {"dex": 181, "en": "Ampharos"}, {"dex": 184, "en": "Azumarill"}, {"dex": 186, "en": "Politoed"}, {"dex": 196, "en": "Espeon"}, {"dex": 197, "en": "Umbreon"}, {"dex": 199, "en": "Slowking"}, {"dex": 205, "en": "Forretress"}, {"dex": 208, "en": "Steelix"}, {"dex": 211, "en": "Qwilfish"}, {"dex": 212, "en": "Scizor"}, {"dex": 214, "en": "Heracross"}, {"dex": 227, "en": "Skarmory"}, {"dex": 229, "en": "Houndoom"}, {"dex": 248, "en": "Tyranitar"}, {"dex": 254, "en": "Sceptile"}, {"dex": 257, "en": "Blaziken"}, {"dex": 260, "en": "Swampert"}, {"dex": 279, "en": "Pelipper"}, {"dex": 282, "en": "Gardevoir"}, {"dex": 302, "en": "Sableye"}, {"dex": 303, "en": "Mawile"}, {"dex": 306, "en": "Aggron"}, {"dex": 308, "en": "Medicham"}, {"dex": 310, "en": "Manectric"}, {"dex": 319, "en": "Sharpedo"}, {"dex": 323, "en": "Camerupt"}, {"dex": 324, "en": "Torkoal"}, {"dex": 334, "en": "Altaria"}, {"dex": 350, "en": "Milotic"}, {"dex": 351, "en": "Castform"}, {"dex": 354, "en": "Banette"}, {"dex": 358, "en": "Chimecho"}, {"dex": 359, "en": "Absol"}, {"dex": 362, "en": "Glalie"}, {"dex": 376, "en": "Metagross"}, {"dex": 389, "en": "Torterra"}, {"dex": 392, "en": "Infernape"}, {"dex": 395, "en": "Empoleon"}, {"dex": 398, "en": "Staraptor"}, {"dex": 405, "en": "Luxray"}, {"dex": 407, "en": "Roserade"}, {"dex": 409, "en": "Rampardos"}, {"dex": 411, "en": "Bastiodon"}, {"dex": 428, "en": "Lopunny"}, {"dex": 442, "en": "Spiritomb"}, {"dex": 445, "en": "Garchomp"}, {"dex": 448, "en": "Lucario"}, {"dex": 450, "en": "Hippowdon"}, {"dex": 454, "en": "Toxicroak"}, {"dex": 460, "en": "Abomasnow"}, {"dex": 461, "en": "Weavile"}, {"dex": 464, "en": "Rhyperior"}, {"dex": 470, "en": "Leafeon"}, {"dex": 471, "en": "Glaceon"}, {"dex": 472, "en": "Gliscor"}, {"dex": 473, "en": "Mamoswine"}, {"dex": 475, "en": "Gallade"}, {"dex": 478, "en": "Froslass"}, {"dex": 479, "en": "Rotom"}, {"dex": 497, "en": "Serperior"}, {"dex": 500, "en": "Emboar"}, {"dex": 503, "en": "Samurott"}, {"dex": 505, "en": "Watchog"}, {"dex": 510, "en": "Liepard"}, {"dex": 512, "en": "Simisage"}, {"dex": 514, "en": "Simisear"}, {"dex": 516, "en": "Simipour"}, {"dex": 518, "en": "Musharna"}, {"dex": 530, "en": "Excadrill"}, {"dex": 531, "en": "Audino"}, {"dex": 534, "en": "Conkeldurr"}, {"dex": 545, "en": "Scolipede"}, {"dex": 547, "en": "Whimsicott"}, {"dex": 553, "en": "Krookodile"}, {"dex": 560, "en": "Scrafty"}, {"dex": 563, "en": "Cofagrigus"}, {"dex": 569, "en": "Garbodor"}, {"dex": 571, "en": "Zoroark"}, {"dex": 579, "en": "Reuniclus"}, {"dex": 584, "en": "Vanilluxe"}, {"dex": 587, "en": "Emolga"}, {"dex": 604, "en": "Eelektross"}, {"dex": 609, "en": "Chandelure"}, {"dex": 614, "en": "Beartic"}, {"dex": 618, "en": "Stunfisk"}, {"dex": 623, "en": "Golurk"}, {"dex": 635, "en": "Hydreigon"}, {"dex": 637, "en": "Volcarona"}, {"dex": 652, "en": "Chesnaught"}, {"dex": 655, "en": "Delphox"}, {"dex": 658, "en": "Greninja"}, {"dex": 660, "en": "Diggersby"}, {"dex": 663, "en": "Talonflame"}, {"dex": 666, "en": "Vivillon"}, {"dex": 668, "en": "Pyroar"}, {"dex": 670, "en": "Floette"}, {"dex": 671, "en": "Florges"}, {"dex": 675, "en": "Pangoro"}, {"dex": 676, "en": "Furfrou"}, {"dex": 678, "en": "Meowstic"}, {"dex": 681, "en": "Aegislash"}, {"dex": 683, "en": "Aromatisse"}, {"dex": 685, "en": "Slurpuff"}, {"dex": 687, "en": "Malamar"}, {"dex": 689, "en": "Barbaracle"}, {"dex": 691, "en": "Dragalge"}, {"dex": 693, "en": "Clawitzer"}, {"dex": 695, "en": "Heliolisk"}, {"dex": 697, "en": "Tyrantrum"}, {"dex": 699, "en": "Aurorus"}, {"dex": 700, "en": "Sylveon"}, {"dex": 701, "en": "Hawlucha"}, {"dex": 702, "en": "Dedenne"}, {"dex": 706, "en": "Goodra"}, {"dex": 707, "en": "Klefki"}, {"dex": 709, "en": "Trevenant"}, {"dex": 711, "en": "Gourgeist"}, {"dex": 713, "en": "Avalugg"}, {"dex": 715, "en": "Noivern"}, {"dex": 724, "en": "Decidueye"}, {"dex": 727, "en": "Incineroar"}, {"dex": 730, "en": "Primarina"}, {"dex": 733, "en": "Toucannon"}, {"dex": 740, "en": "Crabominable"}, {"dex": 745, "en": "Lycanroc"}, {"dex": 748, "en": "Toxapex"}, {"dex": 750, "en": "Mudsdale"}, {"dex": 752, "en": "Araquanid"}, {"dex": 758, "en": "Salazzle"}, {"dex": 763, "en": "Tsareena"}, {"dex": 765, "en": "Oranguru"}, {"dex": 766, "en": "Passimian"}, {"dex": 778, "en": "Mimikyu"}, {"dex": 780, "en": "Drampa"}, {"dex": 784, "en": "Kommo-o"}, {"dex": 823, "en": "Corviknight"}, {"dex": 841, "en": "Flapple"}, {"dex": 842, "en": "Appletun"}, {"dex": 844, "en": "Sandaconda"}, {"dex": 855, "en": "Polteageist"}, {"dex": 858, "en": "Hatterene"}, {"dex": 861, "en": "Grimmsnarl"}, {"dex": 866, "en": "Mr. Rime"}, {"dex": 867, "en": "Runerigus"}, {"dex": 869, "en": "Alcremie"}, {"dex": 870, "en": "Falinks"}, {"dex": 877, "en": "Morpeko"}, {"dex": 887, "en": "Dragapult"}, {"dex": 899, "en": "Wyrdeer"}, {"dex": 900, "en": "Kleavor"}, {"dex": 902, "en": "Basculegion"}, {"dex": 903, "en": "Sneasler"}, {"dex": 904, "en": "Overqwil"}, {"dex": 908, "en": "Meowscarada"}, {"dex": 911, "en": "Skeledirge"}, {"dex": 914, "en": "Quaquaval"}, {"dex": 925, "en": "Maushold"}, {"dex": 934, "en": "Garganacl"}, {"dex": 936, "en": "Armarouge"}, {"dex": 937, "en": "Ceruledge"}, {"dex": 939, "en": "Bellibolt"}, {"dex": 952, "en": "Scovillain"}, {"dex": 956, "en": "Espathra"}, {"dex": 959, "en": "Tinkaton"}, {"dex": 964, "en": "Palafin"}, {"dex": 968, "en": "Orthworm"}, {"dex": 970, "en": "Glimmora"}, {"dex": 972, "en": "Houndstone"}, {"dex": 979, "en": "Annihilape"}, {"dex": 981, "en": "Farigiraf"}, {"dex": 983, "en": "Kingambit"}, {"dex": 1000, "en": "Gholdengo"}, {"dex": 1013, "en": "Sinistcha"}, {"dex": 1018, "en": "Archaludon"}, {"dex": 1019, "en": "Hydrapple"}];
const megaFormsByBase = {"Venusaur": [{"id": "venusaurmega", "suffix": ""}], "Charizard": [{"id": "charizardmegax", "suffix": "X"}, {"id": "charizardmegay", "suffix": "Y"}], "Blastoise": [{"id": "blastoisemega", "suffix": ""}], "Beedrill": [{"id": "beedrillmega", "suffix": ""}], "Pidgeot": [{"id": "pidgeotmega", "suffix": ""}], "Raichu": [{"id": "raichumegax", "suffix": "X"}, {"id": "raichumegay", "suffix": "Y"}], "Clefable": [{"id": "clefablemega", "suffix": ""}], "Alakazam": [{"id": "alakazammega", "suffix": ""}], "Victreebel": [{"id": "victreebelmega", "suffix": ""}], "Slowbro": [{"id": "slowbromega", "suffix": ""}], "Gengar": [{"id": "gengarmega", "suffix": ""}], "Kangaskhan": [{"id": "kangaskhanmega", "suffix": ""}], "Starmie": [{"id": "starmiemega", "suffix": ""}], "Pinsir": [{"id": "pinsirmega", "suffix": ""}], "Gyarados": [{"id": "gyaradosmega", "suffix": ""}], "Aerodactyl": [{"id": "aerodactylmega", "suffix": ""}], "Dragonite": [{"id": "dragonitemega", "suffix": ""}], "Meganium": [{"id": "meganiummega", "suffix": ""}], "Feraligatr": [{"id": "feraligatrmega", "suffix": ""}], "Ampharos": [{"id": "ampharosmega", "suffix": ""}], "Steelix": [{"id": "steelixmega", "suffix": ""}], "Scizor": [{"id": "scizormega", "suffix": ""}], "Heracross": [{"id": "heracrossmega", "suffix": ""}], "Skarmory": [{"id": "skarmorymega", "suffix": ""}], "Houndoom": [{"id": "houndoommega", "suffix": ""}], "Tyranitar": [{"id": "tyranitarmega", "suffix": ""}], "Sceptile": [{"id": "sceptilemega", "suffix": ""}], "Blaziken": [{"id": "blazikenmega", "suffix": ""}], "Swampert": [{"id": "swampertmega", "suffix": ""}], "Gardevoir": [{"id": "gardevoirmega", "suffix": ""}], "Sableye": [{"id": "sableyemega", "suffix": ""}], "Mawile": [{"id": "mawilemega", "suffix": ""}], "Aggron": [{"id": "aggronmega", "suffix": ""}], "Medicham": [{"id": "medichammega", "suffix": ""}], "Manectric": [{"id": "manectricmega", "suffix": ""}], "Sharpedo": [{"id": "sharpedomega", "suffix": ""}], "Camerupt": [{"id": "cameruptmega", "suffix": ""}], "Altaria": [{"id": "altariamega", "suffix": ""}], "Banette": [{"id": "banettemega", "suffix": ""}], "Chimecho": [{"id": "chimechomega", "suffix": ""}], "Absol": [{"id": "absolmega", "suffix": ""}], "Glalie": [{"id": "glaliemega", "suffix": ""}], "Metagross": [{"id": "metagrossmega", "suffix": ""}], "Staraptor": [{"id": "staraptormega", "suffix": ""}], "Lopunny": [{"id": "lopunnymega", "suffix": ""}], "Garchomp": [{"id": "garchompmega", "suffix": ""}], "Lucario": [{"id": "lucariomega", "suffix": ""}], "Abomasnow": [{"id": "abomasnowmega", "suffix": ""}], "Gallade": [{"id": "gallademega", "suffix": ""}], "Froslass": [{"id": "froslassmega", "suffix": ""}], "Emboar": [{"id": "emboarmega", "suffix": ""}], "Excadrill": [{"id": "excadrillmega", "suffix": ""}], "Audino": [{"id": "audinomega", "suffix": ""}], "Scolipede": [{"id": "scolipedemega", "suffix": ""}], "Scrafty": [{"id": "scraftymega", "suffix": ""}], "Eelektross": [{"id": "eelektrossmega", "suffix": ""}], "Chandelure": [{"id": "chandeluremega", "suffix": ""}], "Chesnaught": [{"id": "chesnaughtmega", "suffix": ""}], "Delphox": [{"id": "delphoxmega", "suffix": ""}], "Greninja": [{"id": "greninjamega", "suffix": ""}], "Pyroar": [{"id": "pyroarmega", "suffix": ""}], "Floette": [{"id": "floettemega", "suffix": ""}], "Meowstic": [{"id": "meowsticmmega", "suffix": ""}], "Malamar": [{"id": "malamarmega", "suffix": ""}], "Barbaracle": [{"id": "barbaraclemega", "suffix": ""}], "Dragalge": [{"id": "dragalgemega", "suffix": ""}], "Hawlucha": [{"id": "hawluchamega", "suffix": ""}], "Crabominable": [{"id": "crabominablemega", "suffix": ""}], "Drampa": [{"id": "drampamega", "suffix": ""}], "Falinks": [{"id": "falinksmega", "suffix": ""}], "Scovillain": [{"id": "scovillainmega", "suffix": ""}], "Glimmora": [{"id": "glimmoramega", "suffix": ""}]};


const MEGA_STONE_BY_FORM = {"venusaurmega":{"itemId":"venusaurite","name":"Venusaurite"},"charizardmegax":{"itemId":"charizarditex","name":"Charizardite X"},"charizardmegay":{"itemId":"charizarditey","name":"Charizardite Y"},"blastoisemega":{"itemId":"blastoisinite","name":"Blastoisinite"},"beedrillmega":{"itemId":"beedrillite","name":"Beedrillite"},"pidgeotmega":{"itemId":"pidgeotite","name":"Pidgeotite"},"raichumegax":{"itemId":"raichunitex","name":"Raichunite X"},"raichumegay":{"itemId":"raichunitey","name":"Raichunite Y"},"clefablemega":{"itemId":"clefablite","name":"Clefablite"},"alakazammega":{"itemId":"alakazite","name":"Alakazite"},"victreebelmega":{"itemId":"victreebelite","name":"Victreebelite"},"slowbromega":{"itemId":"slowbronite","name":"Slowbronite"},"gengarmega":{"itemId":"gengarite","name":"Gengarite"},"kangaskhanmega":{"itemId":"kangaskhanite","name":"Kangaskhanite"},"starmiemega":{"itemId":"starminite","name":"Starminite"},"pinsirmega":{"itemId":"pinsirite","name":"Pinsirite"},"gyaradosmega":{"itemId":"gyaradosite","name":"Gyaradosite"},"aerodactylmega":{"itemId":"aerodactylite","name":"Aerodactylite"},"dragonitemega":{"itemId":"dragoninite","name":"Dragoninite"},"meganiummega":{"itemId":"meganiumite","name":"Meganiumite"},"feraligatrmega":{"itemId":"feraligite","name":"Feraligite"},"ampharosmega":{"itemId":"ampharosite","name":"Ampharosite"},"steelixmega":{"itemId":"steelixite","name":"Steelixite"},"scizormega":{"itemId":"scizorite","name":"Scizorite"},"heracrossmega":{"itemId":"heracronite","name":"Heracronite"},"skarmorymega":{"itemId":"skarmorite","name":"Skarmorite"},"houndoommega":{"itemId":"houndoominite","name":"Houndoominite"},"tyranitarmega":{"itemId":"tyranitarite","name":"Tyranitarite"},"sceptilemega":{"itemId":"sceptilite","name":"Sceptilite"},"blazikenmega":{"itemId":"blazikenite","name":"Blazikenite"},"swampertmega":{"itemId":"swampertite","name":"Swampertite"},"gardevoirmega":{"itemId":"gardevoirite","name":"Gardevoirite"},"sableyemega":{"itemId":"sablenite","name":"Sablenite"},"mawilemega":{"itemId":"mawilite","name":"Mawilite"},"aggronmega":{"itemId":"aggronite","name":"Aggronite"},"medichammega":{"itemId":"medichamite","name":"Medichamite"},"manectricmega":{"itemId":"manectite","name":"Manectite"},"sharpedomega":{"itemId":"sharpedonite","name":"Sharpedonite"},"cameruptmega":{"itemId":"cameruptite","name":"Cameruptite"},"altariamega":{"itemId":"altarianite","name":"Altarianite"},"banettemega":{"itemId":"banettite","name":"Banettite"},"chimechomega":{"itemId":"chimechite","name":"Chimechite"},"absolmega":{"itemId":"absolite","name":"Absolite"},"glaliemega":{"itemId":"glalitite","name":"Glalitite"},"metagrossmega":{"itemId":"metagrossite","name":"Metagrossite"},"staraptormega":{"itemId":"staraptite","name":"Staraptite"},"lopunnymega":{"itemId":"lopunnite","name":"Lopunnite"},"garchompmega":{"itemId":"garchompite","name":"Garchompite"},"lucariomega":{"itemId":"lucarionite","name":"Lucarionite"},"abomasnowmega":{"itemId":"abomasite","name":"Abomasite"},"gallademega":{"itemId":"galladite","name":"Galladite"},"froslassmega":{"itemId":"froslassite","name":"Froslassite"},"emboarmega":{"itemId":"emboarite","name":"Emboarite"},"excadrillmega":{"itemId":"excadrite","name":"Excadrite"},"audinomega":{"itemId":"audinite","name":"Audinite"},"scolipedemega":{"itemId":"scolipite","name":"Scolipite"},"scraftymega":{"itemId":"scraftinite","name":"Scraftinite"},"eelektrossmega":{"itemId":"eelektrossite","name":"Eelektrossite"},"chandeluremega":{"itemId":"chandelurite","name":"Chandelurite"},"chesnaughtmega":{"itemId":"chesnaughtite","name":"Chesnaughtite"},"delphoxmega":{"itemId":"delphoxite","name":"Delphoxite"},"greninjamega":{"itemId":"greninjite","name":"Greninjite"},"pyroarmega":{"itemId":"pyroarite","name":"Pyroarite"},"floettemega":{"itemId":"floettite","name":"Floettite"},"meowsticmmega":{"itemId":"meowsticite","name":"Meowsticite"},"malamarmega":{"itemId":"malamarite","name":"Malamarite"},"barbaraclemega":{"itemId":"barbaracite","name":"Barbaracite"},"dragalgemega":{"itemId":"dragalgite","name":"Dragalgite"},"hawluchamega":{"itemId":"hawluchanite","name":"Hawluchanite"},"crabominablemega":{"itemId":"crabominite","name":"Crabominite"},"drampamega":{"itemId":"drampanite","name":"Drampanite"},"falinksmega":{"itemId":"falinksite","name":"Falinksite"},"scovillainmega":{"itemId":"scovillainite","name":"Scovillainite"},"glimmoramega":{"itemId":"glimmoranite","name":"Glimmoranite"}};

function megaStoneInfoForForm(formId){
  return MEGA_STONE_BY_FORM[formId] || null;
}

const megaBaseByFormId = Object.fromEntries(
  Object.entries(megaFormsByBase).flatMap(([base, forms]) =>
    forms.map(form => [form.id, base])
  )
);

function isMegaFormForBase(baseName, formId){
  return megaBaseByFormId[formId] === baseName;
}

const manualKorean = {"908": "마스카나", "911": "라우드본", "914": "웨이니발", "925": "파밀리쥐", "934": "콜로솔트", "936": "카디나르마", "937": "파라블레이즈", "939": "찌리배리", "952": "스코빌런", "956": "클레스퍼트라", "959": "두드리짱", "964": "돌핀맨", "968": "꿈트렁", "970": "킬라플로르", "972": "묘두기", "979": "저승갓숭", "981": "키키링", "983": "대도각참", "1000": "타부자고", "1013": "그우린차", "1018": "브리두라스", "1019": "과미드라"};

const natures = [
  { name:"무보정", up:null, down:null },
  { name:"외로움 (+공격 / -방어)", up:"atk", down:"def" },
  { name:"고집 (+공격 / -특공)", up:"atk", down:"spa" },
  { name:"개구쟁이 (+공격 / -특방)", up:"atk", down:"spd" },
  { name:"용감 (+공격 / -스피드)", up:"atk", down:"spe" },
  { name:"대담 (+방어 / -공격)", up:"def", down:"atk" },
  { name:"장난꾸러기 (+방어 / -특공)", up:"def", down:"spa" },
  { name:"촐랑 (+방어 / -특방)", up:"def", down:"spd" },
  { name:"무사태평 (+방어 / -스피드)", up:"def", down:"spe" },
  { name:"조심 (+특공 / -공격)", up:"spa", down:"atk" },
  { name:"의젓 (+특공 / -방어)", up:"spa", down:"def" },
  { name:"덜렁 (+특공 / -특방)", up:"spa", down:"spd" },
  { name:"냉정 (+특공 / -스피드)", up:"spa", down:"spe" },
  { name:"차분 (+특방 / -공격)", up:"spd", down:"atk" },
  { name:"얌전 (+특방 / -방어)", up:"spd", down:"def" },
  { name:"신중 (+특방 / -특공)", up:"spd", down:"spa" },
  { name:"건방 (+특방 / -스피드)", up:"spd", down:"spe" },
  { name:"겁쟁이 (+스피드 / -공격)", up:"spe", down:"atk" },
  { name:"성급 (+스피드 / -방어)", up:"spe", down:"def" },
  { name:"명랑 (+스피드 / -특공)", up:"spe", down:"spa" },
  { name:"천진난만 (+스피드 / -특방)", up:"spe", down:"spd" }
];

const pokemonSelect = document.getElementById("pokemon");
const pokemonFormSelect = document.getElementById("pokemonForm");
const pokemonSearch = document.getElementById("pokemonSearch");
const natureSelect = document.getElementById("nature");
const statsBody = document.getElementById("statsBody");

const dexData = {};
const moveData = {};
const koreanMoveNames = {};
const koreanAbilityNames = {};
const koreanItemNames = {};
const championsItemData = {};
const DATA_DIAGNOSTICS = [];
function reportDataIssue(scope,error){
  const message=error?.message||String(error||'unknown error');
  DATA_DIAGNOSTICS.push({scope,message,time:Date.now()});
  if(DATA_DIAGNOSTICS.length>30)DATA_DIAGNOSTICS.shift();
  console.warn(`[Pokémon Stat Lab][${scope}] ${message}`);
}
let championsItemsReady = false;
let moveReady = false;

const TYPE_CHART = {
  Normal:{resist:['Rock','Steel'],immune:['Ghost']},
  Fire:{super:['Grass','Ice','Bug','Steel'],resist:['Fire','Water','Rock','Dragon']},
  Water:{super:['Fire','Ground','Rock'],resist:['Water','Grass','Dragon']},
  Electric:{super:['Water','Flying'],resist:['Electric','Grass','Dragon'],immune:['Ground']},
  Grass:{super:['Water','Ground','Rock'],resist:['Fire','Grass','Poison','Flying','Bug','Dragon','Steel']},
  Ice:{super:['Grass','Ground','Flying','Dragon'],resist:['Fire','Water','Ice','Steel']},
  Fighting:{super:['Normal','Ice','Rock','Dark','Steel'],resist:['Poison','Flying','Psychic','Bug','Fairy'],immune:['Ghost']},
  Poison:{super:['Grass','Fairy'],resist:['Poison','Ground','Rock','Ghost'],immune:['Steel']},
  Ground:{super:['Fire','Electric','Poison','Rock','Steel'],resist:['Grass','Bug'],immune:['Flying']},
  Flying:{super:['Grass','Fighting','Bug'],resist:['Electric','Rock','Steel']},
  Psychic:{super:['Fighting','Poison'],resist:['Psychic','Steel'],immune:['Dark']},
  Bug:{super:['Grass','Psychic','Dark'],resist:['Fire','Fighting','Poison','Flying','Ghost','Steel','Fairy']},
  Rock:{super:['Fire','Ice','Flying','Bug'],resist:['Fighting','Ground','Steel']},
  Ghost:{super:['Psychic','Ghost'],resist:['Dark'],immune:['Normal']},
  Dragon:{super:['Dragon'],resist:['Steel'],immune:['Fairy']},
  Dark:{super:['Psychic','Ghost'],resist:['Fighting','Dark','Fairy']},
  Steel:{super:['Ice','Rock','Fairy'],resist:['Fire','Water','Electric','Steel']},
  Fairy:{super:['Fighting','Dragon','Dark'],resist:['Fire','Poison','Steel']}
};

const SPECIAL_MOVE_WARNINGS = new Set([
  'shellsidearm','electroball','gyroball','lowkick','grassknot','heavyslam','heatcrash',
  'storedpower','powertrip','eruption','waterspout','flail','reversal',
  'brine','hex','acrobatics','knockoff','avalanche','payback','flyingpress'
]);


const ATTACKER_ABILITY_OPTIONS = [
  ['none','없음'],
  ['hugepower','천하장사 / 순수한힘 · 물리 공격 보정 ×2'],
  ['guts','근성 · 상태이상 시 물리 공격 ×1.5 / 화상 감소 무시'],
  ['adaptability','적응력 · 자속 ×2'],
  ['technician','테크니션 · 위력 60 이하 ×1.5'],
  ['toughclaws','단단한발톱 · 접촉기 ×1.3'],
  ['strongjaw','옹골찬턱 · 물기 기술 ×1.5'],
  ['sharpness','예리함 · 베기 기술 ×1.5'],
  ['ironfist','철주먹 · 펀치 기술 ×1.2'],
  ['tintedlens','색안경 · 반감 공격 피해 ×2'],
  ['infiltrator','틈새포착 · 벽 무시'],
  ['solarpower','선파워 · 쾌청 특수공격 ×1.5'],
  ['waterbubble','수포 · 물 기술 공격 보정 ×2'],
  ['levitate','부유 · 필드 계산에서 비접지'],
  ['innerfocus','정신력 · 위협 무효'],
  ['scrappy','배짱 · 위협 무효'],
  ['owntempo','마이페이스 · 위협 무효'],
  ['oblivious','둔감 · 위협 무효']
];

const DEFENDER_ABILITY_OPTIONS = [
  ['none','없음'],
  ['intimidate','위협 · 물리 공격자 공격 -1랭크'],
  ['multiscale','멀티스케일 · 풀HP 피해 ×0.5'],
  ['shadowshield','스펙터가드 · 풀HP 피해 ×0.5'],
  ['thickfat','두꺼운지방 · 불꽃/얼음 공격 보정 ×0.5'],
  ['filter','필터 · 약점 피해 ×0.75'],
  ['solidrock','하드록 · 약점 피해 ×0.75'],
  ['prismarmor','프리즘아머 · 약점 피해 ×0.75'],
  ['fluffy','복슬복슬 · 접촉 ×0.5 / 불꽃 ×2'],
  ['icescales','얼음인분 · 특수 피해 ×0.5'],
  ['furcoat','퍼코트 · 물리 방어 ×2'],
  ['heatproof','내열 · 불꽃 공격 보정 ×0.5'],
  ['waterbubble','수포 · 불꽃 공격 보정 ×0.5'],
  ['levitate','부유 · 땅 무효 / 압정 비접지'],
  ['magicguard','매직가드 · 함정/날씨 등 간접 피해 무효'],
  ['sturdy','옹골참 · 풀HP 일격사 1HP 생존'],
  ['battlearmor','전투무장 / 조가비갑옷 · 급소 무효']
];

function populateSimpleSelect(id, options){
  const sel=document.getElementById(id);
  if(!sel)return;
  sel.innerHTML='';
  options.forEach(([value,label])=>{
    const o=document.createElement('option'); o.value=value; o.textContent=label; sel.appendChild(o);
  });
}

const TYPE_BOOST_ITEMS = {
  silkscarf:'Normal', charcoal:'Fire', mysticwater:'Water', magnet:'Electric',
  miracleseed:'Grass', nevermeltice:'Ice', blackbelt:'Fighting', poisonbarb:'Poison',
  softsand:'Ground', sharpbeak:'Flying', twistedspoon:'Psychic', silverpowder:'Bug',
  hardstone:'Rock', spelltag:'Ghost', dragonfang:'Dragon', blackglasses:'Dark',
  metalcoat:'Steel', fairyfeather:'Fairy'
};
const RESIST_BERRIES = {
  chilanberry:'Normal', occaberry:'Fire', passhoberry:'Water', wacanberry:'Electric',
  rindoberry:'Grass', yacheberry:'Ice', chopleberry:'Fighting', kebiaberry:'Poison',
  shucaberry:'Ground', cobaberry:'Flying', payapaberry:'Psychic', tangaberry:'Bug',
  chartiberry:'Rock', kasibberry:'Ghost', habanberry:'Dragon', colburberry:'Dark',
  babiriberry:'Steel', roseliberry:'Fairy'
};
const SPEED_ITEM_GROUPS = [
  {label:'스피드 계산', items:[
    ['none','없음'],
    ['choicescarf','구애스카프 · 스피드 ×1.5'],
    ['ironball','검은철구 · 스피드 ×0.5']
  ]}
];

const ATTACK_ITEM_GROUPS = [
  {label:'공격 보정', items:[
    ['none','없음'],
    ['lifeorb','생명의구슬 · 기술 피해 ×1.3'],
    ['expertbelt','달인의띠 · 효과가 굉장한 기술 ×1.2'],
    ['muscleband','힘의머리띠 · 물리기술 ×1.1'],
    ['wiseglasses','박식안경 · 특수기술 ×1.1'],
    ['lightball','전기구슬 · 피카츄 공격/특공 ×2']
  ]},
  {label:'타입 강화 · ×1.2', items:[
    ['silkscarf','노말 · 실크스카프'],['charcoal','불꽃 · 목탄'],['mysticwater','물 · 신비의물방울'],
    ['magnet','전기 · 자석'],['miracleseed','풀 · 기적의씨'],['nevermeltice','얼음 · 녹지않는얼음'],
    ['blackbelt','격투 · 검은띠'],['poisonbarb','독 · 독바늘'],['softsand','땅 · 부드러운모래'],
    ['sharpbeak','비행 · 예리한부리'],['twistedspoon','에스퍼 · 휘어진스푼'],['silverpowder','벌레 · 은빛가루'],
    ['hardstone','바위 · 딱딱한돌'],['spelltag','고스트 · 저주의부적'],['dragonfang','드래곤 · 용의이빨'],
    ['blackglasses','악 · 검은안경'],['metalcoat','강철 · 금속코트'],['fairyfeather','페어리 · 요정의깃털']
  ]}
];

const DEFENSE_ITEM_GROUPS = [
  {label:'회복 / 생존', items:[
    ['none','없음'],
    ['leftovers','먹다남은음식 · 턴 종료 HP 1/16 회복'],
    ['sitrusberry','자뭉열매 · HP 절반 이하에서 1회 1/4 회복'],
    ['focussash','기합의띠 · 풀HP 일격사 1회 생존']
  ]},
  {label:'반감열매 · 최초 발동 1회만', items:[
    ['chilanberry','노말 반감 · Chilan Berry'],['occaberry','불꽃 반감 · Occa Berry'],
    ['passhoberry','물 반감 · Passho Berry'],['wacanberry','전기 반감 · Wacan Berry'],
    ['rindoberry','풀 반감 · Rindo Berry'],['yacheberry','얼음 반감 · Yache Berry'],
    ['chopleberry','격투 반감 · Chople Berry'],['kebiaberry','독 반감 · Kebia Berry'],
    ['shucaberry','땅 반감 · Shuca Berry'],['cobaberry','비행 반감 · Coba Berry'],
    ['payapaberry','에스퍼 반감 · Payapa Berry'],['tangaberry','벌레 반감 · Tanga Berry'],
    ['chartiberry','바위 반감 · Charti Berry'],['kasibberry','고스트 반감 · Kasib Berry'],
    ['habanberry','드래곤 반감 · Haban Berry'],['colburberry','악 반감 · Colbur Berry'],
    ['babiriberry','강철 반감 · Babiri Berry'],['roseliberry','페어리 반감 · Roseli Berry']
  ]}
];

const ALL_ITEM_GROUPS = [
  ...SPEED_ITEM_GROUPS,
  ...ATTACK_ITEM_GROUPS,
  ...DEFENSE_ITEM_GROUPS
];

const SAMPLE_ITEM_GROUPS = [
  {label:'기본',items:[['none','없음']]},
  ...SPEED_ITEM_GROUPS.map(g=>({label:g.label,items:g.items.filter(([id])=>id!=='none')})),
  ...ATTACK_ITEM_GROUPS.map(g=>({label:g.label,items:g.items.filter(([id])=>id!=='none')})),
  ...DEFENSE_ITEM_GROUPS.map(g=>({label:g.label,items:g.items.filter(([id])=>id!=='none')}))
].filter(g=>g.items.length);


const ITEM_KO_FALLBACK = {
  choicescarf:'구애스카프', ironball:'검은철구', lifeorb:'생명의구슬',
  expertbelt:'달인의띠', muscleband:'힘의머리띠', wiseglasses:'박식안경',
  lightball:'전기구슬', metronome:'메트로놈', leftovers:'먹다남은음식',
  sitrusberry:'자뭉열매', oranberry:'오랭열매', focussash:'기합의띠',
  focusband:'기합의머리띠', scopelens:'초점렌즈', quickclaw:'선제공격손톱',
  shellbell:'조개껍질방울', whiteherb:'하양허브', mentalherb:'멘탈허브',
  bigroot:'큰뿌리', lightclay:'빛의점토', kingsrock:'왕의징표석',
  widelens:'광각렌즈', zoomlens:'포커스렌즈', brightpowder:'빛의가루',
  dampRock:'축축한바위', heatrock:'뜨거운바위', icyrock:'차가운바위',
  smoothrock:'보송보송바위', shedshell:'아름다운허물'
};

function parseChampionsItemOverrides(text){
  const result={};
  const matches=[...text.matchAll(/^\t([a-z0-9]+):\s*\{/gm)];
  matches.forEach((match,index)=>{
    const id=match[1];
    const from=match.index;
    const to=index+1<matches.length ? matches[index+1].index : text.length;
    const block=text.slice(from,to);
    const ns=block.match(/\bisNonstandard:\s*(null|"[^"]+")/);
    if(ns){
      result[id]={isNonstandard:ns[1]==='null'?null:ns[1].replace(/"/g,'')};
    }
  });
  return result;
}

function itemKoreanName(id){
  return koreanItemNames[id] || ITEM_KO_FALLBACK[id] || '';
}

function championsItemDisplayName(id){
  const item=championsItemData[id];
  const en=item?.name || id;
  const ko=itemKoreanName(id);
  return ko ? `${ko} (${en})` : en;
}

function itemHasAttackAutoEffect(id){
  return ['lifeorb','expertbelt','muscleband','wiseglasses','lightball','metronome'].includes(id)
    || !!TYPE_BOOST_ITEMS[id];
}
function itemHasDefenseAutoEffect(id){
  return [
    'leftovers','blacksludge','sitrusberry','oranberry','focussash','focusband','ironball',
    'airballoon','heavydutyboots','assaultvest','deepseascale','metalpowder',
    'electricseed','grassyseed','psychicseed','mistyseed',
    'figyberry','wikiberry','magoberry','aguavberry','iapapaberry','enigmaberry'
  ].includes(id) || !!RESIST_BERRIES[id];
}
function itemHasSpeedAutoEffect(id){
  return ['choicescarf','ironball'].includes(id);
}

function itemAutoScopeText(id){
  const item=championsItemData[id];
  const tags=[];
  if(item?.megaStone)tags.push('메가진화');
  if(itemHasSpeedAutoEffect(id))tags.push('스피드');
  if(itemHasAttackAutoEffect(id))tags.push('공격');
  if(itemHasDefenseAutoEffect(id))tags.push('내구');
  if(id==='scopelens')tags.push('급소율 안내');
  if(id==='quickclaw')tags.push('행동순서 확률 안내');
  return tags.length ? `자동 반영: ${tags.join(' · ')}` : '현재 수치 계산에 직접 영향 없음';
}

function championsItemCategory(id,item){
  if(item?.megaStone)return '메가스톤';
  if(item?.isBerry)return '열매';
  if(itemHasSpeedAutoEffect(id) || id==='quickclaw')return '스피드 / 행동순서';
  if(itemHasAttackAutoEffect(id) || id==='scopelens')return '공격 / 화력';
  if(itemHasDefenseAutoEffect(id))return '내구 / 회복';
  return '기타 / 보조';
}

function appendRequiredMegaStoneOption(sel,formId){
  const info=megaStoneInfoForForm(formId);
  if(!info || Array.from(sel.options).some(o=>o.value===info.itemId))return;
  const og=document.createElement('optgroup');
  og.label='메가스톤';
  const o=document.createElement('option');
  o.value=info.itemId;
  o.textContent=`${info.name} · 메가진화 자동 연동`;
  og.appendChild(o);
  sel.appendChild(og);
}

function populateSampleHeldItemSelect(filter=''){
  const sel=document.getElementById('heldItem');
  if(!sel)return;
  const current=sel.value||'none';
  const selectedMegaForm=pokemonFormSelect?.value && pokemonFormSelect.value!=='base'
    ? pokemonFormSelect.value : null;

  if(!championsItemsReady){
    populateHeldItemSelect('heldItem',SAMPLE_ITEM_GROUPS,current);
    if(selectedMegaForm)appendRequiredMegaStoneOption(sel,selectedMegaForm);
    if(Array.from(sel.options).some(o=>o.value===current))sel.value=current;
    const count=document.getElementById('sampleItemCount');
    if(count)count.textContent='기본 목록';
    return;
  }

  const q=normalizeSearchText(filter);
  const groups=new Map();
  const requiredInfo=selectedMegaForm ? megaStoneInfoForForm(selectedMegaForm) : null;
  const items=Object.values(championsItemData)
    .filter(item=>item.id!=='none')
    .filter(item=>{
      if(requiredInfo && item.id===requiredInfo.itemId)return true;
      if(!q)return true;
      return [
        championsItemDisplayName(item.id),
        item.name||'', item.id||'', itemKoreanName(item.id),
        item.shortDesc||'', item.desc||''
      ].map(normalizeSearchText).some(v=>v.includes(q));
    })
    .sort((x,y)=>championsItemDisplayName(x.id).localeCompare(championsItemDisplayName(y.id),'ko'));

  items.forEach(item=>{
    const cat=championsItemCategory(item.id,item);
    if(!groups.has(cat))groups.set(cat,[]);
    groups.get(cat).push(item);
  });

  sel.innerHTML='';
  const none=document.createElement('option');
  none.value='none'; none.textContent='없음';
  sel.appendChild(none);

  ['메가스톤','스피드 / 행동순서','공격 / 화력','내구 / 회복','열매','기타 / 보조'].forEach(cat=>{
    const list=groups.get(cat)||[];
    if(!list.length)return;
    const og=document.createElement('optgroup');
    og.label=cat;
    list.forEach(item=>{
      const o=document.createElement('option');
      o.value=item.id;
      o.textContent=`${championsItemDisplayName(item.id)} · ${itemAutoScopeText(item.id)}`;
      og.appendChild(o);
    });
    sel.appendChild(og);
  });

  if(selectedMegaForm)appendRequiredMegaStoneOption(sel,selectedMegaForm);
  if(Array.from(sel.options).some(o=>o.value===current))sel.value=current;
  else sel.value='none';

  const count=document.getElementById('sampleItemCount');
  if(count)count.textContent=`${Object.keys(championsItemData).length}종`;
}

async function loadItemKoreanNames(){
  try{
    const [itemsRes,namesRes]=await Promise.all([
      PokeData.fetch('itemsCsv'),
      PokeData.fetch('itemNamesCsv')
    ]);
    if(!itemsRes.ok||!namesRes.ok)throw new Error('item name source failed');

    const idToIdentifier={};
    (await itemsRes.text()).split(/\r?\n/).slice(1).forEach(line=>{
      const first=line.indexOf(',');
      if(first<0)return;
      const second=line.indexOf(',',first+1);
      if(second<0)return;
      const id=line.slice(0,first);
      const identifier=line.slice(first+1,second).trim();
      if(id&&identifier)idToIdentifier[id]=identifier;
    });

    (await namesRes.text()).split(/\r?\n/).slice(1).forEach(line=>{
      const first=line.indexOf(',');
      if(first<0)return;
      const second=line.indexOf(',',first+1);
      if(second<0)return;
      const itemId=line.slice(0,first);
      const langId=line.slice(first+1,second);
      if(langId!=='3')return;
      const name=line.slice(second+1).replace(/^"|"$/g,'').replace(/""/g,'"').trim();
      const identifier=idToIdentifier[itemId];
      if(identifier&&name)koreanItemNames[toID(identifier)]=name;
    });
    populateSampleHeldItemSelect(document.getElementById('sampleItemSearch')?.value||'');
    populateOffenseTargetItemOptions();
    renderOwnItemNote();
  }catch(e){ reportDataIssue('item-korean',e); }
}

async function loadChampionsItems(){
  try{
    const [baseRes,modRes]=await Promise.all([
      PokeData.fetch('showdownItems'),
      PokeData.fetch('championsItems')
    ]);
    if(!baseRes.ok||!modRes.ok)throw new Error('Champions item data load failed');

    const base=await baseRes.json();
    const overrides=parseChampionsItemOverrides(await modRes.text());

    Object.keys(championsItemData).forEach(k=>delete championsItemData[k]);

    Object.entries(base).forEach(([id,raw])=>{
      if(!raw||!raw.name||raw.isPokeball)return;
      let ns=raw.isNonstandard??null;
      if(Object.prototype.hasOwnProperty.call(overrides,id))ns=overrides[id].isNonstandard;
      if(ns!==null)return;

      championsItemData[id]={
        ...raw,
        id,
        isNonstandard:null
      };
    });

    championsItemsReady=true;
    populateSampleHeldItemSelect(document.getElementById('sampleItemSearch')?.value||'');
    populateOffenseTargetItemOptions();
    syncHeldItemWithMegaForm(false);
    render();
  }catch(e){
    reportDataIssue('champions-items',e);
    championsItemsReady=false;
    populateSampleHeldItemSelect('');
    populateOffenseTargetItemOptions();
    const count=document.getElementById('sampleItemCount');
    if(count)count.textContent='기본 목록';
  }
}

function currentBasePokemonName(){
  return pokemonSelect?.value || '';
}

function megaTargetForItem(item,baseName){
  if(!item?.megaStone)return null;
  if(typeof item.megaStone==='string')return item.megaStone;
  return item.megaStone[baseName] || item.megaStone[baseName.replace(/-.*$/,'')] || null;
}

function findMegaFormOptionForSpecies(targetSpecies){
  if(!targetSpecies)return null;
  const targetId=toID(targetSpecies);
  const forms=megaFormsFor(currentBasePokemonName());
  return forms.find(form=>{
    const loadedName=dexData[form.id]?.name||'';
    return toID(loadedName)===targetId || toID(form.id)===targetId;
  }) || null;
}

function syncMegaFormFromHeldItem(){
  if(!championsItemsReady)return false;
  const item=championsItemData[sampleHeldItem()];
  if(!item?.megaStone)return false;

  const targetSpecies=megaTargetForItem(item,currentBasePokemonName());
  const form=findMegaFormOptionForSpecies(targetSpecies);
  if(!form)return false;

  if(Array.from(pokemonFormSelect.options).some(o=>o.value===form.id&&!o.disabled)){
    pokemonFormSelect.value=form.id;
    return true;
  }
  return false;
}

function megaStoneHeuristicIds(baseName,formId){
  const info=megaStoneInfoForForm(formId);
  return info ? [info.itemId] : [];
}

function findMegaStoneForCurrentForm(){
  if(pokemonFormSelect.value==='base')return null;
  const base=currentBasePokemonName();
  const formId=pokemonFormSelect.value;
  if(!isMegaFormForBase(base,formId))return null;

  const explicit=megaStoneInfoForForm(formId);
  if(!explicit)return null;
  if(championsItemData[explicit.itemId])return championsItemData[explicit.itemId];

  return {
    id:explicit.itemId,
    name:explicit.name,
    megaStone:dexData[formId]?.name||formId,
    isNonstandard:null
  };
}

function syncHeldItemWithMegaForm(clearSearch=true){
  const sel=document.getElementById('heldItem');
  if(!sel)return false;

  // Base form cannot stay automatically paired with a Mega Stone.
  if(pokemonFormSelect.value==='base'){
    const current=championsItemData[sel.value];
    if(current?.megaStone){
      if(clearSearch){
        const search=document.getElementById('sampleItemSearch');
        if(search)search.value='';
        populateSampleHeldItemSelect('');
      }
      sel.value='none';
      return true;
    }
    return false;
  }

  const stone=findMegaStoneForCurrentForm();
  if(!stone)return false;

  if(clearSearch){
    const search=document.getElementById('sampleItemSearch');
    if(search)search.value='';
    populateSampleHeldItemSelect('');
  }

  // Ensure the required stone exists even if the held-item list was filtered.
  if(!Array.from(sel.options).some(o=>o.value===stone.id)){
    populateSampleHeldItemSelect('');
  }

  if(Array.from(sel.options).some(o=>o.value===stone.id)){
    sel.value=stone.id;
    return true;
  }
  return false;
}

function populateHeldItemSelect(id, groups, defaultValue='none') {
  const sel=document.getElementById(id);
  if(!sel)return;
  sel.innerHTML='';
  groups.forEach(group=>{
    const og=document.createElement('optgroup'); og.label=group.label;
    group.items.forEach(([value,label])=>{
      const o=document.createElement('option'); o.value=value; o.textContent=label; og.appendChild(o);
    });
    sel.appendChild(og);
  });
  sel.value=defaultValue;
}

function speedHeldItem(){ return document.getElementById('heldItem')?.value || 'none'; }
function sampleHeldItem(){ return speedHeldItem(); }
function defenseItem(){ return sampleHeldItem(); }
function sampleAbilityValue(){ return document.getElementById('sampleAbility')?.value || 'none'; }
function speedItemMultiplier(itemId){ return itemId==='choicescarf'?1.5:itemId==='ironball'?0.5:1; }
function effectiveSpeed(raw,itemId){ return Math.floor(raw*speedItemMultiplier(itemId)); }

function itemLabel(itemId){
  if(itemId==='none')return '없음';
  if(championsItemData[itemId]){
    return itemKoreanName(itemId) || championsItemData[itemId].name || itemId;
  }
  for(const g of ALL_ITEM_GROUPS) for(const [id,label] of g.items) if(id===itemId)return label.split(' · ')[0];
  return itemId;
}
function itemEffectText(itemId, context='self'){
  if(itemId==='none')return context==='defense'?'내구 도구 없음':'도구 효과 없음';

  const item=championsItemData[itemId];
  if(item?.megaStone)return '메가스톤 · 선택 포켓몬의 메가폼/종족값과 자동 연동';

  if(context==='attack'){
    if(itemId==='lifeorb')return '선택한 공격의 피해 ×1.3';
    if(itemId==='expertbelt')return '효과가 굉장한 공격일 때 피해 ×1.2';
    if(itemId==='muscleband')return '물리기술 피해 ×1.1';
    if(itemId==='wiseglasses')return '특수기술 피해 ×1.1';
    if(itemId==='lightball')return '피카츄일 때 공격·특공 ×2';
    if(itemId==='metronome')return '같은 기술 연속 사용 시 1.0→1.2→1.4→1.6→1.8→2.0배';
    if(itemId==='scopelens')return '급소율 +1 · 현재 확정 피해 범위에는 확률 자체를 섞지 않음';
    if(TYPE_BOOST_ITEMS[itemId])return `${TYPE_BOOST_ITEMS[itemId]} 타입 기술 피해 ×1.2`;
    return item?.shortDesc ? `${item.shortDesc} · 현재 공격 수치에는 직접 반영 없음` : '현재 공격 수치에 직접 반영되는 효과 없음';
  }

  if(context==='defense'){
    if(itemId==='leftovers')return '소모되지 않음 · 기술 사용 사이마다 최대 HP의 1/16 회복';
    if(itemId==='sitrusberry')return '소모성 · HP 절반 이하 최초 1회 최대 HP의 1/4 회복';
    if(itemId==='oranberry')return '소모성 · HP 절반 이하 최초 1회 10HP 회복';
    if(itemId==='focussash')return '소모성 · 풀 HP에서 일격사 피해를 받는 최초 1회 HP 1 생존';
    if(itemId==='focusband')return '치명타 피해에서 10% 확률로 HP 1 생존 · 확정 생존 역산에는 미포함';
    if(itemId==='ironball')return '접지 상태가 되어 압정 영향을 받고 Ground 면역이 해제됨';
    if(RESIST_BERRIES[itemId]){
      return `소모성 · ${RESIST_BERRIES[itemId]} 타입 공격의 최초 발동 1회만 피해 ×0.5`;
    }
    return item?.shortDesc ? `${item.shortDesc} · 현재 내구 수치에는 직접 반영 없음` : '현재 내구 계산에 직접 반영되는 효과 없음';
  }

  if(itemId==='choicescarf')return '전투 스피드 ×1.5 · 실능치 표시는 원래 수치 유지';
  if(itemId==='ironball')return '전투 스피드 ×0.5 · 접지/Ground 피격 조건도 자동 반영';
  if(itemId==='quickclaw')return '20% 확률로 같은 우선도 내 선행 · 실제 스피드 수치는 변하지 않음';
  return item?.shortDesc ? `${item.shortDesc} · 실제 스피드 수치는 변하지 않음` : '스피드 계산에 직접 영향 없음';
}

const koreanNames = {...manualKorean};
let selectedBenchmark = null;
let dexReady = false;

function toID(text) { return text.toLowerCase().replace(/[^a-z0-9]+/g, ""); }

function normalizeSearchText(text) {
  return String(text ?? '')
    .normalize('NFKC')
    .toLowerCase()
    .replace(/\s+/g,'')
    .replace(/[·ㆍ\-_'"().]/g,'');
}
function rosterItemByEn(en) { return championsRoster.find(x => x.en === en); }

function megaFormsFor(en) { return megaFormsByBase[en] || []; }

function megaDisplayName(baseEn, form) {
  const item = rosterItemByEn(baseEn);
  const baseKo = item ? (koreanNames[item.dex] || baseEn) : baseEn;
  return `메가 ${baseKo}${form.suffix ? " " + form.suffix : ""}`;
}

function updateFormOptions(reset=true) {
  const baseEn = pokemonSelect.value;
  const forms = megaFormsFor(baseEn).filter(form => isMegaFormForBase(baseEn, form.id));
  const previous = reset ? "base" : pokemonFormSelect.value;
  pokemonFormSelect.innerHTML = '<option value="base">기본</option>';

  forms.forEach(form => {
    const opt = document.createElement('option');
    opt.value = form.id;
    opt.textContent = megaDisplayName(baseEn, form);
    if (dexReady && !dexData[form.id]) {
      opt.disabled = true;
      opt.textContent += ' · 데이터 확인 필요';
    }
    pokemonFormSelect.appendChild(opt);
  });

  pokemonFormSelect.disabled = forms.length === 0;
  const note = document.getElementById('megaNote');
  if (!forms.length) {
    note.textContent = '이 포켓몬은 현재 Champions에서 메가진화 폼이 없습니다.';
  } else if (forms.length === 1) {
    note.textContent = '기본 종족값과 메가진화 후 종족값을 바로 비교할 수 있습니다.';
  } else {
    note.textContent = '여러 메가진화 폼 중 하나를 선택할 수 있습니다.';
  }

  const options = Array.from(pokemonFormSelect.options);
  const target = options.find(o=>o.value===previous && !o.disabled);
  pokemonFormSelect.value = target ? previous : 'base';
}

function selectedFormId() {
  const base = pokemonSelect?.value || '';
  const selected = pokemonFormSelect?.value || 'base';
  if (selected !== 'base' && isMegaFormForBase(base, selected)) return selected;
  return toID(base);
}

function currentFormLabel() {
  const base = pokemonSelect?.value || '';
  const selected = pokemonFormSelect?.value || 'base';
  if (!pokemonFormSelect || selected === 'base' || !isMegaFormForBase(base, selected)) {
    const item = rosterItemByEn(pokemonSelect.value);
    return item ? (koreanNames[item.dex] || item.en) : pokemonSelect.value;
  }
  const form = megaFormsFor(base).find(f=>f.id===selected);
  return form ? megaDisplayName(base, form) : base;
}

function pointJumpInfo(statKey, base) {
  if (statKey === 'hp') return {breaks:[]};
  const breaks = [];
  for (let p=1; p<=MAX_STAT_POINTS; p++) {
    const before = calculateStat(statKey, base, p-1);
    const after = calculateStat(statKey, base, p);
    const delta = after - before;
    if (delta === 2) breaks.push({points:p, stat:after, before, delta});
  }
  return {breaks};
}

function markerLeft(points) {
  return `${(Math.max(0, Math.min(MAX_STAT_POINTS, points)) / MAX_STAT_POINTS) * 100}%`;
}

function updatePointRoadmap(row, statKey, base, points, target) {
  const box = row.querySelector('.point-roadmap');
  if (!box) return;

  const nextDelta = points < MAX_STAT_POINTS
    ? calculateStat(statKey, base, points + 1) - calculateStat(statKey, base, points)
    : null;

  const goalPoints = target ? minPointsForTarget(statKey, base, target, false) : null;
  const breaks = pointJumpInfo(statKey, base).breaks;
  const statNatureMult = statKey === 'hp' ? 1 : natureMultiplier(statKey);

  let nextText = '';
  if (points >= MAX_STAT_POINTS) {
    nextText = `<span>32P 최대</span>`;
  } else if (nextDelta === 2) {
    nextText = `<span class="next-jump">다음 +1P → 실능치 +2</span>`;
  } else if (nextDelta === 0) {
    nextText = `<span class="next-flat">다음 +1P → 실능치 +0</span>`;
  } else {
    nextText = `<span>다음 +1P → 실능치 +1</span>`;
  }

  let detail = '';
  if (statKey === 'hp') {
    detail = `HP는 <span class="current-text">1P당 +1</span>`;
  } else if (breaks.length) {
    detail = `+2 구간 · ${breaks.map(b => `${b.points}P`).join(' · ')}`;
  } else if (statNatureMult === 1.0) {
    detail = `무보정 · +2 구간 없음`;
  } else if (statNatureMult < 1.0) {
    const flatPoints = [];
    for (let p = 1; p <= MAX_STAT_POINTS; p++) {
      const before = calculateStat(statKey, base, p - 1);
      const after = calculateStat(statKey, base, p);
      if (after === before) flatPoints.push(p);
    }
    detail = `하락보정 +0 · ${flatPoints.length ? flatPoints.map(p => p + 'P').join(' · ') : '없음'}`;
  } else {
    detail = `상승보정 · +2 구간 없음`;
  }

  if (goalPoints !== null) {
    if (goalPoints === -1) detail += ` · 목표 ${target}: 불가`;
    else detail += ` · 목표 ${target}: ${goalPoints}P`;
  }

  box.innerHTML = `
    <div class="point-roadmap-head">${nextText}</div>
    <div class="point-break-list">${detail}</div>
  `;
}

function displayName(item) {
  const ko = koreanNames[item.dex];
  return ko ? `${ko} (${item.en})` : item.en;
}

function populatePokemonOptions(filter="") {
  const current=pokemonSelect.value;
  const raw=filter.trim();
  const q=normalizeSearchText(raw);
  const list=championsRoster.filter(item=>{
    const ko=koreanNames[item.dex]||"";
    const candidates=[
      displayName(item),
      ko,
      item.en,
      toID(item.en)
    ].map(normalizeSearchText);
    return !q || candidates.some(value=>value.includes(q));
  });

  pokemonSelect.innerHTML="";
  list.forEach(item=>{
    const opt=document.createElement("option");
    opt.value=item.en;
    opt.textContent=displayName(item);
    pokemonSelect.appendChild(opt);
  });

  if(list.some(x=>x.en===current))pokemonSelect.value=current;
  else if(raw)pokemonSelect.selectedIndex=-1;
  else if(list.length)pokemonSelect.value=list[0].en;
}

natures.forEach((n, i) => {
  const opt = document.createElement("option"); opt.value = i; opt.textContent = n.name; natureSelect.appendChild(opt);
});

stats.forEach(s => {
  const tr = document.createElement("tr"); tr.dataset.stat = s.key;
  tr.innerHTML = `
    <td>${s.label}</td><td class="base">-</td>
    <td><span class="iv-fixed" title="Pokémon Champions에서는 IV31로 계산">31</span></td>
    <td class="point-cell">
      <input class="points" type="number" min="0" max="32" step="1" value="0" title="위/아래 화살표로 1P씩 조절">
      <div class="point-roadmap"></div>
    </td>
    <td class="nature">×1.0</td><td class="stat-result current">-</td>
    <td><input class="target" type="number" min="1" placeholder="선택"></td>
    <td class="need-ev none">-</td>`;
  statsBody.appendChild(tr);
});

function clampPoints(value) {
  return Math.max(0, Math.min(MAX_STAT_POINTS, Math.floor(Number(value) || 0)));
}

function updateSingleStatRow(row) {
  const p = currentData();
  if (!p) return;

  const key = row.dataset.stat;
  const base = p.baseStats[key];
  const numberInput = row.querySelector('.points');
  const targetInput = row.querySelector('.target');

  const points = clampPoints(numberInput.value);
  numberInput.value = points;

  row.querySelector('.base').textContent = base;

  const mult = natureMultiplier(key);
  const natureCell = row.querySelector('.nature');
  natureCell.textContent = `×${mult.toFixed(1)}`;
  natureCell.className = 'nature';
  if (mult > 1) natureCell.classList.add('nature-up');
  if (mult < 1) natureCell.classList.add('nature-down');

  const current = calculateStat(key, base, points);
  const currentCell = row.querySelector('.current');
  const previousValue = currentCell.textContent;
  currentCell.textContent = current;
  flashStatCell(currentCell, previousValue, current);

  const target = Number(targetInput.value);
  updatePointRoadmap(row, key, base, points, target);

  const need = minPointsForTarget(key, base, target, false);
  const cell = row.querySelector('.need-ev');
  cell.className = 'need-ev';
  if (need === null) {
    cell.textContent = '-';
    cell.classList.add('none');
  } else if (need === -1) {
    cell.textContent = '불가';
    cell.classList.add('fail');
  } else {
    cell.textContent = `${need} P`;
    cell.classList.add('ok');
  }
}

function refreshAfterPointChange(row) {
  updateSingleStatRow(row);
  renderSummaryAndLinkedPanels();
}

function bindStatInputs() {
  document.querySelectorAll('#statsBody tr').forEach(row => {
    const numberInput = row.querySelector('.points');
    const target = row.querySelector('.target');

    const onNumber = () => {
      numberInput.value = clampPoints(numberInput.value);
      refreshAfterPointChange(row);
    };

    numberInput.addEventListener('input', onNumber);
    numberInput.addEventListener('change', onNumber);

    target.addEventListener('input', () => {
      updateSingleStatRow(row);
      renderSpeedPanel();
    });
    target.addEventListener('change', () => {
      updateSingleStatRow(row);
      renderSpeedPanel();
    });
  });
}
bindStatInputs();

function natureMultiplier(statKey) {
  const n = natures[Number(natureSelect.value)] || natures[0];
  if (n.up === statKey) return 1.1;
  if (n.down === statKey) return 0.9;
  return 1.0;
}

function calculateStat(statKey, base, points, natureMult = null) {
  points = Math.max(0, Math.min(MAX_STAT_POINTS, Math.floor(Number(points) || 0)));

  // Pokémon Champions 전용 계산식:
  // HP = Base + StatPoints + 75
  // 기타 = floor((Base + StatPoints + 20) × 성격 보정)
  if (statKey === "hp") return base + points + 75;
  return Math.floor((base + points + 20) * (natureMult ?? natureMultiplier(statKey)));
}

function minPointsForTarget(statKey, base, target, beat=false) {
  if (!target) return null;
  for (let points = 0; points <= MAX_STAT_POINTS; points++) {
    const v = calculateStat(statKey, base, points);
    if (beat ? v > target : v >= target) return points;
  }
  return -1;
}


function abilityDisplayName(id, fallback=''){
  return koreanAbilityNames[id] ? `${koreanAbilityNames[id]} (${fallback||id})` : (fallback||id);
}

function populateSampleAbility(){
  const sel=document.getElementById('sampleAbility');
  if(!sel)return;
  const p=currentData();
  const current=sel.value;
  sel.innerHTML='';

  const abilities=(p?.abilities||[]).filter(Boolean);
  if(!abilities.length){
    const o=document.createElement('option');
    o.value='none'; o.textContent=p?'특성 데이터 없음':'데이터 로드 중…';
    sel.appendChild(o);
    renderSampleAbilityNote();
    return;
  }

  abilities.forEach(name=>{
    const id=toID(name);
    const o=document.createElement('option');
    o.value=id;
    o.textContent=abilityDisplayName(id,name);
    sel.appendChild(o);
  });

  if(Array.from(sel.options).some(o=>o.value===current))sel.value=current;
  else sel.selectedIndex=0;

  renderSampleAbilityNote();
}

function renderSampleAbilityNote(){
  const note=document.getElementById('sampleAbilityNote');
  const sel=document.getElementById('sampleAbility');
  if(!note||!sel)return;
  const id=sel.value||'none';
  const attackSupported=ATTACKER_ABILITY_OPTIONS.some(([v])=>v===id);
  const defenseSupported=DEFENDER_ABILITY_OPTIONS.some(([v])=>v===id);
  if(id==='none'){
    note.textContent='선택 포켓몬의 실제 특성을 표시합니다.';
    return;
  }
  if(attackSupported||defenseSupported){
    const scopes=[];
    if(attackSupported)scopes.push('공격');
    if(defenseSupported)scopes.push('내구');
    note.textContent=`현재 계산 지원: ${scopes.join(' + ')}`;
  }else{
    note.textContent='샘플에는 저장되지만 현재 피해 계산에 직접 반영되는 특성 효과는 아직 없습니다.';
  }
}

async function loadAbilityKoreanNames(){
  try{
    const [abilitiesRes,namesRes]=await Promise.all([
      PokeData.fetch('abilitiesCsv'),
      PokeData.fetch('abilityNamesCsv')
    ]);
    if(!abilitiesRes.ok||!namesRes.ok)throw new Error('ability Korean source failed');

    const idToIdentifier={};
    (await abilitiesRes.text()).split(/\r?\n/).slice(1).forEach(line=>{
      const first=line.indexOf(',');
      if(first<0)return;
      const second=line.indexOf(',',first+1);
      const id=line.slice(0,first);
      const identifier=(second<0?line.slice(first+1):line.slice(first+1,second)).trim();
      if(id&&identifier)idToIdentifier[id]=identifier;
    });

    (await namesRes.text()).split(/\r?\n/).slice(1).forEach(line=>{
      const first=line.indexOf(',');
      if(first<0)return;
      const second=line.indexOf(',',first+1);
      if(second<0)return;
      const abilityId=line.slice(0,first);
      const langId=line.slice(first+1,second);
      if(langId!=='3')return;
      const name=line.slice(second+1).replace(/^"|"$/g,'').replace(/""/g,'"').trim();
      const identifier=idToIdentifier[abilityId];
      if(identifier&&name)koreanAbilityNames[toID(identifier)]=name;
    });
    populateSampleAbility();
  }catch(e){ reportDataIssue('ability-korean',e); }
}


const SAMPLE_VAULT_KEY='pokemonChampionsStatLab.sampleVault.v1';
let sampleVaultSelectedIndex=0;
let sampleVaultMemory=Array(6).fill(null);
let sampleVaultLoadedOnce=false;

function blankSampleVault(){
  return Array(6).fill(null);
}

function readSampleVault(){
  // localStorage는 최초 1회만 읽고, 이후에는 현재 페이지의 메모리를 기준으로 사용한다.
  // 이렇게 해야 덮어쓴 직후 오래된 저장값을 다시 읽어오는 문제가 생기지 않는다.
  if(sampleVaultLoadedOnce){
    return sampleVaultMemory.slice();
  }

  sampleVaultLoadedOnce=true;
  try{
    const raw=localStorage.getItem(SAMPLE_VAULT_KEY);
    if(!raw)return sampleVaultMemory.slice();

    const parsed=JSON.parse(raw);
    if(!Array.isArray(parsed))return sampleVaultMemory.slice();

    const slots=blankSampleVault();
    for(let i=0;i<6;i++)slots[i]=parsed[i]||null;
    sampleVaultMemory=slots.slice();
  }catch(e){}

  return sampleVaultMemory.slice();
}

function writeSampleVault(slots){
  const clean=blankSampleVault();
  for(let i=0;i<6;i++)clean[i]=slots[i]||null;

  // 현재 실행 중인 페이지를 먼저 확실히 갱신한다.
  sampleVaultMemory=clean.slice();
  sampleVaultLoadedOnce=true;

  try{
    localStorage.setItem(SAMPLE_VAULT_KEY,JSON.stringify(clean));
    return true;
  }catch(e){
    return false;
  }
}

function showSampleVaultStatus(message,isError=false){
  const el=document.getElementById('sampleVaultStatus');
  if(!el)return;
  el.textContent=message||'';
  el.className=`sample-vault-save-status${isError?' error':''}`;
}

function currentStatPointSnapshot(){
  const points={};
  document.querySelectorAll('#statsBody tr').forEach(row=>{
    points[row.dataset.stat]=clampPoints(row.querySelector('.points')?.value);
  });
  return points;
}

function currentMoveSnapshot(){
  return [1,2,3,4].map(i=>document.getElementById(`sampleMove${i}`)?.value||'');
}

function captureCurrentSample(){
  if(!pokemonSelect?.value)return null;
  return {
    version:1,
    pokemon:pokemonSelect.value,
    form:pokemonFormSelect?.value||'base',
    nature:Number(natureSelect?.value)||0,
    ability:document.getElementById('sampleAbility')?.value||'none',
    item:sampleHeldItem(),
    points:currentStatPointSnapshot(),
    moves:currentMoveSnapshot(),
    savedAt:Date.now()
  };
}

function sampleVaultPokemonLabel(sample){
  if(!sample?.pokemon)return '빈 슬롯';
  const roster=rosterItemByEn(sample.pokemon);
  const base=roster ? (koreanNames[roster.dex]||roster.en) : sample.pokemon;
  if(sample.form && sample.form!=='base'){
    const form=megaFormsFor(sample.pokemon).find(f=>f.id===sample.form);
    if(form)return megaDisplayName(sample.pokemon,form);
    const dexName=dexData[sample.form]?.name;
    return dexName ? `${base} · ${dexName}` : `${base} · 메가`;
  }
  return base;
}

function sampleVaultNatureLabel(sample){
  return natures[Number(sample?.nature)||0]?.name||'무보정';
}

function sampleVaultAbilityLabel(sample){
  if(!sample?.ability || sample.ability==='none')return '특성 없음';
  const id=sample.ability;
  return koreanAbilityNames[id] || id;
}

function sampleVaultItemLabel(sample){
  if(!sample?.item || sample.item==='none')return '도구 없음';
  return itemLabel(sample.item);
}

function sampleVaultMoveLabel(moveId,index=0){
  if(!moveId)return `기술 ${index+1} 미선택`;
  const move=moveData[moveId];
  if(move){
    return koreanMoveNames[moveId] || move.name || moveId;
  }
  return koreanMoveNames[moveId] || moveId;
}

function sampleVaultPointSummary(sample){
  const p=sample?.points||{};
  return `H${p.hp||0} / A${p.atk||0} / B${p.def||0} / C${p.spa||0} / D${p.spd||0} / S${p.spe||0}`;
}

function renderSampleVault(){
  const grid=document.getElementById('sampleVaultGrid');
  if(!grid)return;

  const slots=readSampleVault();
  sampleVaultSelectedIndex=Math.max(0,Math.min(5,sampleVaultSelectedIndex));
  grid.innerHTML='';

  slots.forEach((sample,index)=>{
    const btn=document.createElement('button');
    btn.type='button';
    btn.className=`sample-slot${sample?'':' empty'}${index===sampleVaultSelectedIndex?' selected':''}`;

    if(!sample){
      btn.innerHTML=`
        <span class="sample-slot-number">${index+1}</span>
        <strong style="font-size:10px">슬롯 ${index+1}</strong>
        <span style="margin-top:4px;font-size:8px">현재 샘플을 저장</span>
      `;
    }else{
      const moves=(sample.moves||[]).slice(0,4);
      while(moves.length<4)moves.push('');
      btn.innerHTML=`
        <span class="sample-slot-number">${index+1}</span>
        <div class="sample-slot-name">${sampleVaultPokemonLabel(sample)}</div>
        <div class="sample-slot-meta">${sampleVaultNatureLabel(sample)} · ${sampleVaultAbilityLabel(sample)} · ${sampleVaultItemLabel(sample)}</div>
        <div class="sample-slot-points">${sampleVaultPointSummary(sample)}</div>
        <div class="sample-slot-moves">
          ${moves.map((m,i)=>`<span class="sample-slot-move">${sampleVaultMoveLabel(m,i)}</span>`).join('')}
        </div>
      `;
    }

    btn.addEventListener('click',()=>{
      sampleVaultSelectedIndex=index;
      renderSampleVault();
      showSampleVaultStatus('');
    });
    grid.appendChild(btn);
  });

  renderSampleVaultDetail(slots[sampleVaultSelectedIndex],sampleVaultSelectedIndex);
  renderPartyAnalysis();
}

function renderSampleVaultDetail(sample,index){
  const title=document.getElementById('sampleVaultDetailTitle');
  const meta=document.getElementById('sampleVaultDetailMeta');
  const statsBox=document.getElementById('sampleVaultStats');
  const movesBox=document.getElementById('sampleVaultMoves');
  const loadBtn=document.getElementById('sampleVaultLoad');
  const clearBtn=document.getElementById('sampleVaultClear');
  const saveBtn=document.getElementById('sampleVaultSave');
  if(!title||!meta||!statsBox||!movesBox||!loadBtn||!clearBtn||!saveBtn)return;

  saveBtn.textContent=sample?'현재 샘플로 덮어쓰기':'현재 샘플 저장';
  loadBtn.disabled=!sample;
  clearBtn.disabled=!sample;

  if(!sample){
    title.textContent=`슬롯 ${index+1} · 빈 슬롯`;
    meta.textContent='현재 왼쪽 샘플을 이 슬롯에 저장할 수 있습니다.';
    statsBox.innerHTML=stats.map(s=>`<div class="sample-vault-stat">${s.label}<b>-</b></div>`).join('');
    movesBox.innerHTML=[1,2,3,4].map(i=>`<div>기술 ${i} · 미저장</div>`).join('');
    return;
  }

  title.textContent=`슬롯 ${index+1} · ${sampleVaultPokemonLabel(sample)}`;
  meta.textContent=`${sampleVaultNatureLabel(sample)} · ${sampleVaultAbilityLabel(sample)} · ${sampleVaultItemLabel(sample)}`;

  const p=sample.points||{};
  statsBox.innerHTML=stats.map(s=>
    `<div class="sample-vault-stat">${s.label}<b>${p[s.key]||0}P</b></div>`
  ).join('');

  const moves=(sample.moves||[]).slice(0,4);
  while(moves.length<4)moves.push('');
  movesBox.innerHTML=moves.map((m,i)=>
    `<div>기술 ${i+1} · ${sampleVaultMoveLabel(m,i)}</div>`
  ).join('');
}

function saveCurrentSampleToVault(){
  const sample=captureCurrentSample();
  if(!sample){
    showSampleVaultStatus('현재 샘플을 읽지 못했습니다.',true);
    return;
  }

  const slots=readSampleVault();
  const wasOverwrite=!!slots[sampleVaultSelectedIndex];
  slots[sampleVaultSelectedIndex]=sample;

  const persisted=writeSampleVault(slots);
  renderSampleVault();

  const action=wasOverwrite?'덮어쓰기':'저장';
  showSampleVaultStatus(
    `슬롯 ${sampleVaultSelectedIndex+1} ${action} 완료${persisted?'':' · 현재 페이지에는 저장됨'}`
  );
}

function clearSelectedSampleVault(){
  const slots=readSampleVault();
  if(!slots[sampleVaultSelectedIndex])return;
  const ok=window.confirm(`슬롯 ${sampleVaultSelectedIndex+1}의 저장 샘플을 비울까요?`);
  if(!ok)return;
  slots[sampleVaultSelectedIndex]=null;
  writeSampleVault(slots);
  renderSampleVault();
  showSampleVaultStatus(`슬롯 ${sampleVaultSelectedIndex+1} 비우기 완료`);
}

function ensureSelectValue(select,value,label=value){
  if(!select || value===undefined || value===null)return false;
  if(Array.from(select.options).some(o=>o.value===String(value))){
    select.value=String(value);
    return true;
  }
  const o=document.createElement('option');
  o.value=String(value);
  o.textContent=label||String(value);
  select.appendChild(o);
  select.value=String(value);
  return true;
}

function loadSelectedSampleVault(){
  const slots=readSampleVault();
  const sample=slots[sampleVaultSelectedIndex];
  if(!sample)return;

  // Restore the full Pokémon list first in case the user has an active search filter.
  pokemonSearch.value='';
  populatePokemonOptions('');
  if(!Array.from(pokemonSelect.options).some(o=>o.value===sample.pokemon)){
    window.alert('저장된 포켓몬을 현재 Champions 목록에서 찾을 수 없습니다.');
    return;
  }

  pokemonSelect.value=sample.pokemon;
  updateFormOptions(true);

  if(sample.form && sample.form!=='base' &&
     Array.from(pokemonFormSelect.options).some(o=>o.value===sample.form && !o.disabled)){
    pokemonFormSelect.value=sample.form;
  }else{
    pokemonFormSelect.value='base';
  }

  natureSelect.value=String(Number(sample.nature)||0);

  // Render once so species/form-specific ability options and base stats are rebuilt.
  render();

  const abilitySel=document.getElementById('sampleAbility');
  if(sample.ability){
    if(Array.from(abilitySel.options).some(o=>o.value===sample.ability)){
      abilitySel.value=sample.ability;
    }
  }

  const itemSearch=document.getElementById('sampleItemSearch');
  if(itemSearch)itemSearch.value='';
  populateSampleHeldItemSelect('');
  const held=document.getElementById('heldItem');
  if(sample.item){
    ensureSelectValue(held,sample.item,itemLabel(sample.item));
  }

  const p=sample.points||{};
  document.querySelectorAll('#statsBody tr').forEach(row=>{
    const input=row.querySelector('.points');
    if(input)input.value=clampPoints(p[row.dataset.stat]||0);
  });

  populateSampleMoveOptions();
  const moves=sample.moves||[];
  [1,2,3,4].forEach((n,i)=>{
    const sel=document.getElementById(`sampleMove${n}`);
    const moveId=moves[i]||'';
    if(!sel)return;
    if(!moveId){
      sel.value='';
    }else{
      const label=sampleVaultMoveLabel(moveId,i);
      ensureSelectValue(sel,moveId,label);
    }
  });

  selectedBenchmark=null;
  resetSpeedTarget();
  render();
  renderSampleVault();
}


const PARTY_TYPE_ORDER=[
  'Normal','Fire','Water','Electric','Grass','Ice','Fighting','Poison','Ground',
  'Flying','Psychic','Bug','Rock','Ghost','Dragon','Dark','Steel','Fairy'
];
const PARTY_TYPE_KO={
  Normal:'노말',Fire:'불꽃',Water:'물',Electric:'전기',Grass:'풀',Ice:'얼음',
  Fighting:'격투',Poison:'독',Ground:'땅',Flying:'비행',Psychic:'에스퍼',
  Bug:'벌레',Rock:'바위',Ghost:'고스트',Dragon:'드래곤',Dark:'악',
  Steel:'강철',Fairy:'페어리'
};

const POKEDEX_OFFENSE_ROLES=[
  {id:'physical',label:'공격형',className:'pokedex-role-physical'},
  {id:'special',label:'특수형',className:'pokedex-role-special'},
  {id:'mixed',label:'쌍두형',className:'pokedex-role-mixed'}
];
const pokedexFilterState={types:new Set(),roles:new Set(),megaOnly:false};

function pokedexHasMega(item){
  return (megaFormsByBase[item.en]||[]).length>0;
}

function pokedexDataFor(item){
  return dexData[toID(item.en)]||null;
}

function pokedexTypeClass(type){
  return `pokedex-type-${String(type||'').toLowerCase()}`;
}

function pokedexOffenseRole(data){
  const attack=Number(data?.baseStats?.atk)||0;
  const specialAttack=Number(data?.baseStats?.spa)||0;
  if(attack>=100 && attack-specialAttack>=20)return 'physical';
  if(specialAttack>=100 && specialAttack-attack>=20)return 'special';
  if(attack>=90 && specialAttack>=90 && Math.abs(attack-specialAttack)<20)return 'mixed';
  return '';
}

function pokedexOffenseRoleInfo(roleId){
  return POKEDEX_OFFENSE_ROLES.find(role=>role.id===roleId)||null;
}

function renderPokedexTypeFilters(){
  const host=document.getElementById('pokedexTypeFilters');
  if(!host)return;
  const frag=document.createDocumentFragment();

  PARTY_TYPE_ORDER.forEach(type=>{
    const button=document.createElement('button');
    button.type='button';
    button.className=`pokedex-filter-chip ${pokedexTypeClass(type)}`;
    button.textContent=PARTY_TYPE_KO[type]||type;
    button.dataset.type=type;
    button.disabled=!dexReady;
    button.setAttribute('aria-pressed',String(pokedexFilterState.types.has(type)));
    button.addEventListener('click',()=>{
      if(pokedexFilterState.types.has(type))pokedexFilterState.types.delete(type);
      else pokedexFilterState.types.add(type);
      renderPokedex();
    });
    frag.appendChild(button);
  });

  host.replaceChildren(frag);
}

function renderPokedexOffenseFilters(){
  const host=document.getElementById('pokedexOffenseFilters');
  if(!host)return;
  const frag=document.createDocumentFragment();

  POKEDEX_OFFENSE_ROLES.forEach(role=>{
    const button=document.createElement('button');
    button.type='button';
    button.className=`pokedex-filter-chip ${role.className}`;
    button.textContent=role.label;
    button.dataset.role=role.id;
    button.disabled=!dexReady;
    button.setAttribute('aria-pressed',String(pokedexFilterState.roles.has(role.id)));
    button.addEventListener('click',()=>{
      if(pokedexFilterState.roles.has(role.id))pokedexFilterState.roles.delete(role.id);
      else pokedexFilterState.roles.add(role.id);
      renderPokedex();
    });
    frag.appendChild(button);
  });

  host.replaceChildren(frag);
}

function filteredPokedexRoster(){
  const query=normalizeSearchText(document.getElementById('pokedexSearch')?.value||'');
  return championsRoster.filter(item=>{
    const data=pokedexDataFor(item);
    const types=data?.types||[];
    const offenseRole=pokedexOffenseRole(data);
    const ko=koreanNames[item.dex]||'';
    const nameMatches=!query || [ko,item.en,displayName(item)]
      .map(normalizeSearchText)
      .some(value=>value.includes(query));
    const typesMatch=[...pokedexFilterState.types].every(type=>types.includes(type));
    const roleMatches=!pokedexFilterState.roles.size || pokedexFilterState.roles.has(offenseRole);
    const megaMatches=!pokedexFilterState.megaOnly || pokedexHasMega(item);
    return nameMatches && typesMatch && roleMatches && megaMatches;
  });
}

function renderPokedex(){
  const grid=document.getElementById('pokedexGrid');
  const summary=document.getElementById('pokedexSummary');
  if(!grid||!summary)return;

  renderPokedexTypeFilters();
  renderPokedexOffenseFilters();
  const megaButton=document.getElementById('pokedexMegaFilter');
  if(megaButton)megaButton.setAttribute('aria-pressed',String(pokedexFilterState.megaOnly));

  const list=filteredPokedexRoster();
  const selectedTypes=[...pokedexFilterState.types].map(type=>PARTY_TYPE_KO[type]||type);
  const selectedRoles=[...pokedexFilterState.roles]
    .map(roleId=>pokedexOffenseRoleInfo(roleId)?.label||roleId);
  const conditions=[
    selectedTypes.length?`타입 ${selectedTypes.join(' + ')}`:'전체 타입',
    selectedRoles.length?`성향 ${selectedRoles.join(' 또는 ')}`:'',
    pokedexFilterState.megaOnly?'메가진화 가능':''
  ].filter(Boolean);

  const count=document.createElement('strong');
  count.textContent=`${list.length} / ${championsRoster.length}종`;
  const condition=document.createElement('span');
  condition.textContent=dexReady?conditions.join(' · '):'타입 데이터 준비 중';
  summary.replaceChildren(count,condition);

  const frag=document.createDocumentFragment();
  if(!list.length){
    const empty=document.createElement('div');
    empty.className='pokedex-empty';
    empty.textContent=dexReady?'선택한 조건에 맞는 포켓몬이 없습니다.':'포켓몬 타입 데이터를 불러오는 중입니다.';
    frag.appendChild(empty);
  }

  list.forEach(item=>{
    const data=pokedexDataFor(item);
    const ko=koreanNames[item.dex]||item.en;
    const types=data?.types||[];
    const forms=megaFormsByBase[item.en]||[];
    const offenseRole=pokedexOffenseRole(data);
    const offenseRoleInfo=pokedexOffenseRoleInfo(offenseRole);
    const total=data?.baseStats
      ? Object.values(data.baseStats).reduce((sum,value)=>sum+(Number(value)||0),0)
      : null;

    const card=document.createElement('article');
    card.className='pokedex-entry';

    const top=document.createElement('div');
    top.className='pokedex-entry-top';
    const image=document.createElement('img');
    image.loading='lazy';
    image.alt=`${ko} 이미지`;
    image.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.dex}.png`;
    image.addEventListener('error',()=>{image.hidden=true;},{once:true});

    const nameBox=document.createElement('div');
    nameBox.className='pokedex-entry-name';
    const number=document.createElement('small');
    number.textContent=`No.${String(item.dex).padStart(4,'0')}`;
    const name=document.createElement('strong');
    name.textContent=ko;
    const english=document.createElement('span');
    english.textContent=item.en;
    nameBox.append(number,name,english);
    top.append(image,nameBox);

    const typeBox=document.createElement('div');
    typeBox.className='pokedex-entry-types';
    if(types.length){
      types.forEach(type=>{
        const badge=document.createElement('span');
        badge.className=`pokedex-type-badge ${pokedexTypeClass(type)}`;
        badge.textContent=PARTY_TYPE_KO[type]||type;
        typeBox.appendChild(badge);
      });
    }else{
      const pending=document.createElement('span');
      pending.className='pokedex-type-badge';
      pending.textContent='타입 준비 중';
      typeBox.appendChild(pending);
    }

    const meta=document.createElement('div');
    meta.className='pokedex-entry-meta';
    if(total!==null){
      const bst=document.createElement('span');
      bst.textContent=`종족값 합계 ${total}`;
      meta.appendChild(bst);
    }
    if(offenseRoleInfo){
      const role=document.createElement('span');
      role.className='pokedex-role-mark';
      role.textContent=`${offenseRoleInfo.label} · A${data.baseStats.atk} C${data.baseStats.spa}`;
      meta.appendChild(role);
    }
    if(forms.length){
      const mega=document.createElement('span');
      mega.className='pokedex-mega-mark';
      mega.textContent=`메가진화 가능${forms.length>1?` · ${forms.length}폼`:''}`;
      meta.appendChild(mega);
    }

    card.append(top,typeBox,meta);
    frag.appendChild(card);
  });

  grid.replaceChildren(frag);
}

function bindPokedexControls(){
  document.getElementById('pokedexSearch')?.addEventListener('input',renderPokedex);
  document.getElementById('pokedexMegaFilter')?.addEventListener('click',()=>{
    pokedexFilterState.megaOnly=!pokedexFilterState.megaOnly;
    renderPokedex();
  });
  document.getElementById('pokedexReset')?.addEventListener('click',()=>{
    pokedexFilterState.types.clear();
    pokedexFilterState.roles.clear();
    pokedexFilterState.megaOnly=false;
    const search=document.getElementById('pokedexSearch');
    if(search)search.value='';
    renderPokedex();
  });
}

function savedSampleDexData(sample){
  if(!sample?.pokemon)return null;
  if(sample.form && sample.form!=='base' && dexData[sample.form])return dexData[sample.form];
  return dexData[toID(sample.pokemon)]||null;
}

function savedSampleNatureMultiplier(sample,statKey){
  if(statKey==='hp')return 1;
  const nature=natures[Number(sample?.nature)||0]||natures[0];
  if(nature.up===statKey)return 1.1;
  if(nature.down===statKey)return 0.9;
  return 1;
}

function savedSampleActualStats(sample){
  const data=savedSampleDexData(sample);
  if(!data?.baseStats)return null;
  const p=sample.points||{};
  const result={};
  stats.forEach(s=>{
    result[s.key]=calculateStat(
      s.key,
      data.baseStats[s.key],
      clampPoints(p[s.key]||0),
      savedSampleNatureMultiplier(sample,s.key)
    );
  });
  return result;
}

function savedSampleTypes(sample){
  return savedSampleDexData(sample)?.types||[];
}

function partyTypeMultiplierClass(mult){
  if(mult===0)return 'type-immune';
  if(mult<1)return 'type-resist';
  if(mult>1)return 'type-weak';
  return 'type-neutral';
}

function formatPartyTypeMultiplier(mult){
  if(mult===0.25)return '¼';
  if(mult===0.5)return '½';
  if(mult===1)return '1';
  if(mult===2)return '2';
  if(mult===4)return '4';
  if(mult===0)return '0';
  return String(mult);
}

function renderPartyOverview(slots){
  const grid=document.getElementById('partyOverviewGrid');
  if(!grid)return;
  grid.innerHTML='';

  slots.forEach((sample,index)=>{
    if(!sample){
      const empty=document.createElement('div');
      empty.className='party-member-card empty';
      empty.textContent=`슬롯 ${index+1} · 미저장`;
      grid.appendChild(empty);
      return;
    }

    const types=savedSampleTypes(sample);
    const actual=savedSampleActualStats(sample);
    const moves=(sample.moves||[]).slice(0,4);
    while(moves.length<4)moves.push('');

    const card=document.createElement('div');
    card.className='party-member-card';
    card.innerHTML=`
      <div class="party-member-head">
        <div class="party-member-name">${sampleVaultPokemonLabel(sample)}</div>
        <span class="party-member-slot">${index+1}</span>
      </div>
      <div class="party-member-types">${types.length?types.map(t=>PARTY_TYPE_KO[t]||t).join(' / '):'타입 데이터 로딩 중'}</div>
      <div class="party-member-meta">${sampleVaultNatureLabel(sample)} · ${sampleVaultAbilityLabel(sample)} · ${sampleVaultItemLabel(sample)}</div>
      <div class="party-member-points">${sampleVaultPointSummary(sample)}</div>
      <div class="party-member-actual">
        ${stats.map(s=>`<div>${s.label}<b>${actual?actual[s.key]:'-'}</b></div>`).join('')}
      </div>
      <div class="party-member-moves">
        ${moves.map((m,i)=>`<span>${sampleVaultMoveLabel(m,i)}</span>`).join('')}
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderPartyTypeChart(slots){
  const head=document.getElementById('partyTypeHead');
  const body=document.getElementById('partyTypeBody');
  if(!head||!body)return;

  head.innerHTML=`
    <tr>
      <th>포켓몬</th>
      ${PARTY_TYPE_ORDER.map(t=>`<th>${PARTY_TYPE_KO[t]||t}</th>`).join('')}
    </tr>
  `;
  body.innerHTML='';

  const saved=slots
    .map((sample,index)=>({sample,index}))
    .filter(x=>x.sample && savedSampleTypes(x.sample).length);

  if(!saved.length){
    body.innerHTML=`<tr><td colspan="${PARTY_TYPE_ORDER.length+1}" class="party-analysis-empty">저장된 파티가 없습니다.</td></tr>`;
    return;
  }

  saved.forEach(({sample,index})=>{
    const types=savedSampleTypes(sample);
    const tr=document.createElement('tr');
    tr.innerHTML=`
      <td>${index+1}. ${sampleVaultPokemonLabel(sample)}</td>
      ${PARTY_TYPE_ORDER.map(atkType=>{
        const mult=typeEffectiveness(atkType,types,'none','', 'none');
        return `<td class="${partyTypeMultiplierClass(mult)}">×${formatPartyTypeMultiplier(mult)}</td>`;
      }).join('')}
    `;
    body.appendChild(tr);
  });
}

function partyStoredDamagingMoves(slots){
  const entries=[];
  slots.forEach((sample,slotIndex)=>{
    if(!sample)return;
    (sample.moves||[]).forEach((moveId,moveIndex)=>{
      if(!moveId)return;
      const move=moveData[moveId];
      if(!move || move.basePower<=0 || !['Physical','Special'].includes(move.category))return;
      entries.push({
        sample,
        slotIndex,
        moveIndex,
        moveId,
        move
      });
    });
  });
  return entries;
}

function renderPartyCoverage(slots){
  const grid=document.getElementById('partyCoverageGrid');
  if(!grid)return;

  const entries=partyStoredDamagingMoves(slots);
  if(!entries.length){
    grid.innerHTML='<div class="party-analysis-empty" style="grid-column:1/-1">저장된 공격 기술이 없습니다.</div>';
    return;
  }

  grid.innerHTML=PARTY_TYPE_ORDER.map(targetType=>{
    const evaluated=entries.map(entry=>({
      ...entry,
      mult:typeEffectiveness(entry.move.type,[targetType],'none',entry.move.id,'none')
    }));
    const best=Math.max(...evaluated.map(x=>x.mult));
    const superEntries=evaluated.filter(x=>x.mult>1);
    const superMembers=new Set(superEntries.map(x=>x.slotIndex));
    const bestEntries=evaluated.filter(x=>x.mult===best);

    const seen=new Set();
    const bestNames=[];
    for(const entry of bestEntries){
      const key=`${entry.slotIndex}:${entry.moveId}`;
      if(seen.has(key))continue;
      seen.add(key);
      bestNames.push(`${entry.slotIndex+1}.${sampleVaultMoveLabel(entry.moveId,entry.moveIndex)}`);
      if(bestNames.length>=3)break;
    }

    const bestClass=best>1?'super':best<1?'none':'';
    const label=best===0?'×0':`×${formatPartyTypeMultiplier(best)}`;
    return `
      <div class="party-coverage-card">
        <div class="party-coverage-head">
          <span class="party-coverage-type">${PARTY_TYPE_KO[targetType]||targetType}</span>
          <span class="party-coverage-best ${bestClass}">최고 ${label}</span>
        </div>
        <div class="party-coverage-stats">
          효과가 굉장함 ${superEntries.length}기술 · ${superMembers.size}마리
        </div>
        <div class="party-coverage-moves">
          ${bestNames.length?`최고 배율: ${bestNames.join(' · ')}`:'공격 기술 데이터 없음'}
        </div>
      </div>
    `;
  }).join('');
}

function renderPartyAnalysis(){
  const slots=readSampleVault();
  renderPartyOverview(slots);
  renderPartyTypeChart(slots);
  renderPartyCoverage(slots);
}

function currentData() {
  const formId = selectedFormId();
  if (pokemonFormSelect && pokemonFormSelect.value !== 'base') {
    return dexData[formId] || null;
  }
  return dexData[toID(pokemonSelect.value)] || null;
}

function formatBulk(value) {
  return Math.round(value).toLocaleString('ko-KR');
}

function durabilityProgress(current, baseline, maximum) {
  if (maximum <= baseline) return 100;
  return Math.max(0, Math.min(100, ((current - baseline) / (maximum - baseline)) * 100));
}


function findNearestHpPattern(baseHp, currentPoints, mod, offset) {
  let best=null;
  for(let p=0;p<=MAX_STAT_POINTS;p++){
    const hp=calculateStat('hp',baseHp,p);
    if(((hp%mod)+mod)%mod!==offset)continue;
    const distance=Math.abs(p-currentPoints);
    if(!best || distance<best.distance || (distance===best.distance && p<best.points)){
      best={points:p,hp,distance};
    }
  }
  return best;
}

function applyHpPoints(points) {
  const input=document.querySelector('tr[data-stat="hp"] .points');
  if(!input)return;
  input.value=points;
  input.dispatchEvent(new Event('input',{bubbles:true}));
}

function renderHpBreakpointHelper() {
  const p=currentData(); if(!p)return;
  const hpInput=document.querySelector('tr[data-stat="hp"] .points');
  if(!hpInput)return;
  const currentPoints=clampPoints(hpInput.value);
  const hp=calculateStat('hp',p.baseStats.hp,currentPoints);
  document.getElementById('hpQuarter').textContent=`${Math.floor(hp/4)} HP`;
  document.getElementById('hpEighth').textContent=`${Math.floor(hp/8)} HP`;
  document.getElementById('hpSixteenth').textContent=`${Math.floor(hp/16)} HP`;

  const specs=[
    [4,0,'4N'],
    [8,0,'8N'],
    [16,0,'16N']
  ];
  const grid=document.getElementById('hpBreakGrid');
  grid.innerHTML='';
  specs.forEach(([mod,offset,label])=>{
    const found=findNearestHpPattern(p.baseStats.hp,currentPoints,mod,offset);
    const box=document.createElement('div'); box.className='hp-break-option';
    if(!found){
      box.innerHTML=`<div class="tag">${label}</div><div class="value">0~32P 범위 내 없음</div>`;
    }else{
      const diff=found.points-currentPoints;
      let diffText='현재 값';
      let directionClass='same';
      if(diff<0){ diffText=`현재보다 ${Math.abs(diff)}P 내리기`; directionClass='down'; }
      if(diff>0){ diffText=`현재보다 ${diff}P 올리기`; directionClass='up'; }

      box.innerHTML=`<div class="tag">${label}</div>
        <div class="value">H${found.points}P → HP ${found.hp}<br>
          <span class="hp-direction ${directionClass}">${diffText}</span>
        </div>
        <button type="button">H${found.points}P 적용</button>`;
      box.querySelector('button').addEventListener('click',()=>applyHpPoints(found.points));
    }
    grid.appendChild(box);
  });
}

function renderDurabilityPanel() {
  const p = currentData();
  if (!p) return;

  const rows = {};
  document.querySelectorAll('#statsBody tr').forEach(row => rows[row.dataset.stat] = row);

  const hpPoints = Number(rows.hp.querySelector('.points').value) || 0;
  const defPoints = Number(rows.def.querySelector('.points').value) || 0;
  const spdPoints = Number(rows.spd.querySelector('.points').value) || 0;
  const totalPoints = Array.from(document.querySelectorAll('#statsBody .points'))
    .reduce((sum, el) => sum + (Number(el.value) || 0), 0);

  const hp = calculateStat('hp', p.baseStats.hp, hpPoints);
  const def = calculateStat('def', p.baseStats.def, defPoints);
  const spd = calculateStat('spd', p.baseStats.spd, spdPoints);

  // 같은 성격 조건에서 해당 내구축의 0P와 32P를 비교한다.
  const hp0 = calculateStat('hp', p.baseStats.hp, 0);
  const hpMax = calculateStat('hp', p.baseStats.hp, MAX_STAT_POINTS);
  const def0 = calculateStat('def', p.baseStats.def, 0);
  const defMax = calculateStat('def', p.baseStats.def, MAX_STAT_POINTS);
  const spd0 = calculateStat('spd', p.baseStats.spd, 0);
  const spdMax = calculateStat('spd', p.baseStats.spd, MAX_STAT_POINTS);

  const physical = hp * def;
  const physical0 = hp0 * def0;
  const physicalMax = hpMax * defMax;

  const special = hp * spd;
  const special0 = hp0 * spd0;
  const specialMax = hpMax * spdMax;

  const physicalGain = physical0 > 0 ? ((physical / physical0) - 1) * 100 : 0;
  const specialGain = special0 > 0 ? ((special / special0) - 1) * 100 : 0;

  document.getElementById('physicalBulkIndex').textContent = formatBulk(physical);
  document.getElementById('physicalHp').textContent = hp;
  document.getElementById('physicalDef').textContent = def;
  document.getElementById('physicalGain').textContent = `무투자 대비 +${physicalGain.toFixed(1)}%`;
  document.getElementById('physicalBulkBar').style.width =
    `${durabilityProgress(physical, physical0, physicalMax)}%`;
  document.getElementById('physicalEv').textContent = `H${hpPoints} / B${defPoints}`;
  document.getElementById('physicalRange').textContent =
    `0P ${formatBulk(physical0)} / H32·B32 ${formatBulk(physicalMax)}`;

  document.getElementById('specialBulkIndex').textContent = formatBulk(special);
  document.getElementById('specialHp').textContent = hp;
  document.getElementById('specialSpd').textContent = spd;
  document.getElementById('specialGain').textContent = `무투자 대비 +${specialGain.toFixed(1)}%`;
  document.getElementById('specialBulkBar').style.width =
    `${durabilityProgress(special, special0, specialMax)}%`;
  document.getElementById('specialEv').textContent = `H${hpPoints} / D${spdPoints}`;
  document.getElementById('specialRange').textContent =
    `0P ${formatBulk(special0)} / H32·D32 ${formatBulk(specialMax)}`;

  const remaining = TOTAL_STAT_POINTS - totalPoints;

  function nextOption(statKey, baseStat, currentPoints, currentBulk, buildBulk) {
    if (remaining <= 0) return {available:false, text:'총 66P 사용 완료'};
    if (currentPoints >= MAX_STAT_POINTS) return {available:false, text:'32P 최대'};
    const nextStat = calculateStat(statKey, baseStat, currentPoints + 1);
    const nextBulk = buildBulk(nextStat);
    const delta = nextBulk - currentBulk;
    const pct = currentBulk > 0 ? (delta / currentBulk) * 100 : 0;
    return {
      available:true,
      delta,
      pct,
      text:`내구 +${formatBulk(delta)} · +${pct.toFixed(2)}%`
    };
  }

  const pHp = nextOption('hp', p.baseStats.hp, hpPoints, physical, nextHp => nextHp * def);
  const pDef = nextOption('def', p.baseStats.def, defPoints, physical, nextDef => hp * nextDef);
  document.getElementById('physicalHpNext').textContent = pHp.text;
  document.getElementById('physicalDefNext').textContent = pDef.text;

  const sHp = nextOption('hp', p.baseStats.hp, hpPoints, special, nextHp => nextHp * spd);
  const sSpd = nextOption('spd', p.baseStats.spd, spdPoints, special, nextSpd => hp * nextSpd);
  document.getElementById('specialHpNext').textContent = sHp.text;
  document.getElementById('specialSpdNext').textContent = sSpd.text;

  function recommendation(a, b, aLabel, bLabel) {
    if (!a.available && !b.available) {
      if (remaining <= 0) return '남은 능력 포인트가 없어 추가 투자할 수 없습니다.';
      return `${aLabel}와 ${bLabel} 모두 32P 최대입니다.`;
    }
    if (a.available && !b.available) return `${aLabel}만 추가 투자 가능합니다.`;
    if (!a.available && b.available) return `${bLabel}만 추가 투자 가능합니다.`;
    if (a.delta === b.delta) return `현재 다음 1P 효율은 ${aLabel}와 ${bLabel}가 같습니다.`;
    const winner = a.delta > b.delta ? aLabel : bLabel;
    const loser = a.delta > b.delta ? bLabel : aLabel;
    const high = Math.max(a.delta,b.delta), low = Math.min(a.delta,b.delta);
    const advantage = low > 0 ? ((high/low)-1)*100 : 0;
    return `현재는 ${winner} 투자 효율이 더 좋습니다. ${loser}보다 다음 1P 내구 증가가 ${advantage.toFixed(1)}% 큽니다.`;
  }

  document.getElementById('physicalEfficiency').textContent =
    recommendation(pHp, pDef, 'HP(H)', '방어(B)');
  document.getElementById('specialEfficiency').textContent =
    recommendation(sHp, sSpd, 'HP(H)', '특방(D)');
  renderHpBreakpointHelper();
}

function flashStatCell(cell, oldValue, newValue) {
  if (String(oldValue) === String(newValue)) return;
  cell.classList.remove('updated');
  void cell.offsetWidth;
  cell.classList.add('updated');
  clearTimeout(cell._flashTimer);
  cell._flashTimer = setTimeout(()=>cell.classList.remove('updated'), 220);
}


function renderOwnItemNote(){
  const item=sampleHeldItem();
  const note=document.getElementById('heldItemNote');
  if(!note)return;

  if(item==='none'){
    note.textContent=championsItemsReady
      ? `Champions 사용 가능 ${Object.keys(championsItemData).length}종 · 도구 없음`
      : '도구 없음';
    note.className='item-effect-note';
    return;
  }

  const auto=itemAutoScopeText(item);
  let detail='';
  if(championsItemData[item]?.megaStone)detail=itemEffectText(item,'attack');
  else if(itemHasSpeedAutoEffect(item))detail=itemEffectText(item,'speed');
  else if(itemHasAttackAutoEffect(item) || item==='scopelens')detail=itemEffectText(item,'attack');
  else if(itemHasDefenseAutoEffect(item))detail=itemEffectText(item,'defense');
  else detail=championsItemData[item]?.shortDesc || '현재 계산값에 직접 반영되는 효과는 없습니다.';

  note.textContent=`${auto} · ${detail}`;
  note.className='item-effect-note active';
}

function renderDefenseItemNote(){
  const item=defenseItem();
  const display=document.getElementById('defenseItemDisplay');
  if(display)display.textContent=item==='none'?'없음':itemLabel(item);
  const note=document.getElementById('defenseItemNote');
  if(note){
    note.textContent=itemEffectText(item,'defense');
    note.className=`item-effect-note ${item!=='none'?'active':''}`;
  }
  const once=document.getElementById('berryOnceNote');
  if(once){
    if(RESIST_BERRIES[item]){
      once.textContent='반감열매는 첫 번째 조건 충족 피격에만 적용됩니다. 2타·3타째에는 소비된 상태로 원래 피해를 받습니다.';
    }else if(item==='sitrusberry'){
      once.textContent='자뭉열매는 HP 조건을 처음 만족한 시점에 1회만 회복하고 소비됩니다. 이후 타수에는 다시 발동하지 않습니다.';
    }else if(item==='focussash'){
      once.textContent='기합의띠는 풀 HP에서 치명타 피해를 받는 최초 1회만 작동하고 소비됩니다.';
    }else if(item==='leftovers'){
      once.textContent='먹다남은음식은 소모되지 않으므로 2·3타 계산에서 각 타격 사이 턴 종료마다 반복 회복합니다.';
    }else{
      once.textContent='소모성 열매는 조건을 만족한 최초 1회만 발동하며, 이후 2·3타에는 다시 적용되지 않습니다.';
    }
  }
}

function renderSummaryAndLinkedPanels() {
  const p = currentData();
  if (!p) return;

  let totalPoints = 0;
  document.querySelectorAll('#statsBody tr').forEach(row => {
    totalPoints += clampPoints(row.querySelector('.points').value);
  });

  document.getElementById('evUsed').textContent = totalPoints;
  document.getElementById('evRemain').textContent = TOTAL_STAT_POINTS - totalPoints;

  const note = document.getElementById('evNote');
  if (totalPoints > TOTAL_STAT_POINTS) {
    note.textContent =
      `총 ${totalPoints}P · 제한보다 ${totalPoints - TOTAL_STAT_POINTS}P 초과`;
    note.style.color = 'var(--danger)';
  } else {
    note.textContent =
      `Lv.50 · IV31 · 각 능력치 최대 32P · 총 ${totalPoints}/66P`;
    note.style.color = 'var(--muted)';
  }

  renderOwnItemNote();
  renderSampleAbilityNote();
  renderDefenseItemNote();
  renderDurabilityPanel();
  renderAttackBenchmark();
  renderOffensePanel();
  selectedBenchmark = null;
  resetSpeedTarget();
  renderSpeedPanel();
}

function render() {
  const p = currentData();
  if (!pokemonSelect.value) return;

  document.getElementById("pokemonName").textContent = currentFormLabel();
  populateSampleAbility();

  if (!p) {
    document.getElementById("pokemonBaseSummary").textContent = "종족값 데이터를 불러오는 중…";
    document.querySelectorAll("#statsBody tr").forEach(row => {
      row.querySelector('.base').textContent = '-';
      row.querySelector('.current').textContent = '-';
    });
    renderSpeedPanel();
    renderSampleVault();
    return;
  }

  const base = p.baseStats;
  const formText = pokemonFormSelect.value === 'base' ? '기본 폼' : '메가진화';
  document.getElementById("pokemonBaseSummary").textContent =
    `종족값 합계 ${Object.values(base).reduce((a,b)=>a+b,0)} · ${formText} · IV31 / Lv.50`;

  document.querySelectorAll('#statsBody tr').forEach(row => updateSingleStatRow(row));
  renderSummaryAndLinkedPanels();
  renderSampleVault();
}

function benchmarkSpeed(base, positive=false, points=MAX_STAT_POINTS) {
  return calculateStat('spe', base, points, positive ? 1.1 : 1.0);
}

function allSpeedEntities() {
  const entities = [];
  championsRoster.forEach(item => {
    entities.push({
      id: toID(item.en), item, isMega:false,
      label: koreanNames[item.dex] || item.en
    });
    megaFormsFor(item.en).forEach(form => {
      if (!dexData[form.id]) return;
      entities.push({
        id: form.id, item, form, isMega:true,
        label: megaDisplayName(item.en, form)
      });
    });
  });
  return entities;
}


function attackEntityOptions() {
  return allSpeedEntities().filter(e => dexData[e.id]);
}

function populateAttackPokemonOptions(filter='') {
  const sel=document.getElementById('attackPokemonSelect');
  if(!sel)return;
  const current=sel.value;
  const q=normalizeSearchText(filter);
  const list=attackEntityOptions().filter(e=>{
    const koBase=e.item ? (koreanNames[e.item.dex]||'') : '';
    const megaKo=e.isMega ? e.label : '';
    const candidates=[
      e.label||'',
      koBase,
      megaKo,
      e.item?.en||'',
      e.form?.suffix||'',
      e.id||''
    ].map(normalizeSearchText);
    return !q || candidates.some(v=>v.includes(q));
  });
  sel.innerHTML='';
  list.forEach(e=>{
    const o=document.createElement('option');
    o.value=e.id; o.textContent=e.label;
    sel.appendChild(o);
  });
  if(list.some(e=>e.id===current)) sel.value=current;
  else if(list.some(e=>e.id==='urshifu')) sel.value='urshifu';
  else if(list.length) sel.value=list[0].id;
  renderAttackBenchmark();
}


function sampleMoveDisplayName(move){
  const ko=koreanMoveNames[move.id];
  const name=ko ? `${ko} (${move.name})` : move.name;
  if(move.category==='Status')return `${name} · ${move.type} · 변화`;
  const cat=move.category==='Physical'?'물리':'특수';
  return `${name} · ${move.type} · ${cat} ${move.basePower}`;
}

function populateSampleMoveOptions(){
  const ids=['sampleMove1','sampleMove2','sampleMove3','sampleMove4'];
  const selects=ids.map(id=>document.getElementById(id)).filter(Boolean);
  if(!selects.length)return;
  const previous=selects.map(s=>s.value);

  const list=Object.values(moveData).sort((a,b)=>{
    const ak=koreanMoveNames[a.id]||a.name;
    const bk=koreanMoveNames[b.id]||b.name;
    return ak.localeCompare(bk,'ko');
  });

  selects.forEach((sel,index)=>{
    sel.innerHTML='';
    const blank=document.createElement('option');
    blank.value=''; blank.textContent=`기술 ${index+1} · 미선택`;
    sel.appendChild(blank);
    list.forEach(move=>{
      const o=document.createElement('option');
      o.value=move.id;
      o.textContent=sampleMoveDisplayName(move);
      sel.appendChild(o);
    });
    if(previous[index] && list.some(m=>m.id===previous[index]))sel.value=previous[index];
  });
}

function moveDisplayName(move) {
  const ko=koreanMoveNames[move.id];
  const name=ko ? `${ko} (${move.name})` : move.name;
  const cat=move.category==='Physical'?'물리':'특수';
  return `${name} · ${move.type} · ${cat} · 위력 ${move.basePower}`;
}

function populateAttackMoveOptions(filter='') {
  const sel=document.getElementById('attackMoveSelect');
  if(!sel)return;
  const current=sel.value;
  const q=normalizeSearchText(filter);
  const list=Object.values(moveData)
    .filter(m=>m.basePower>0 && (m.category==='Physical'||m.category==='Special'))
    .filter(m=>{
      const candidates=[
        sampleMoveDisplayName(m),
        m.name||'',
        koreanMoveNames[m.id]||'',
        m.id||''
      ].map(normalizeSearchText);
      return !q || candidates.some(v=>v.includes(q));
    })
    .sort((a,b)=>a.name.localeCompare(b.name));
  sel.innerHTML='';
  list.slice(0,350).forEach(m=>{
    const o=document.createElement('option');
    o.value=m.id; o.textContent=moveDisplayName(m);
    sel.appendChild(o);
  });
  if(list.some(m=>m.id===current)) sel.value=current;
  else if(list.some(m=>m.id==='closecombat')) sel.value='closecombat';
  else if(list.length) sel.value=list[0].id;
  renderAttackBenchmark();
}

function rankMultiplier(stage) {
  stage=Math.max(-6,Math.min(6,Number(stage)||0));
  return stage>=0 ? (2+stage)/2 : 2/(2-stage);
}

function formatMultiplier(mult) {
  if(mult===0)return '0';
  if(mult===0.25)return '0.25';
  if(mult===0.5)return '0.5';
  if(mult===1)return '1';
  if(mult===2)return '2';
  if(mult===4)return '4';
  return Number(mult).toFixed(2).replace(/0+$/,'').replace(/\.$/,'');
}

function multiplierClass(mult) {
  if(mult===0)return 'immune';
  if(mult<1)return 'resist';
  if(mult>1)return 'weak';
  return 'neutral';
}

function isGrounded(types=[],ability='none',mode='auto',itemId='none'){
  if(mode==='grounded')return true;
  if(mode==='airborne')return false;
  if(itemId==='ironball')return true;
  if(ability==='levitate')return false;
  return !types.includes('Flying');
}

function typeEffectiveness(moveType, defenderTypes=[], defenderAbility='none', moveId='', defenderItem='none') {
  const ironBallGround = defenderItem==='ironball' && moveType==='Ground';
  if(defenderItem==='airballoon' && moveType==='Ground')return 0;
  if(defenderAbility==='levitate' && moveType==='Ground' && !ironBallGround) return 0;
  const chart=TYPE_CHART[moveType]||{};
  let mult=1;
  defenderTypes.forEach(t=>{
    if(moveId==='freezedry' && t==='Water'){
      mult*=2;
      return;
    }
    if((chart.immune||[]).includes(t) && !(ironBallGround && t==='Flying')) mult*=0;
    else if((chart.super||[]).includes(t)) mult*=2;
    else if((chart.resist||[]).includes(t)) mult*=0.5;
  });
  return mult;
}

function stabMultiplier(attackerTypes=[], moveType, enabled=true, ability='none') {
  if(!enabled)return 1;
  if(!attackerTypes.includes(moveType))return 1;
  return ability==='adaptability'?2:1.5;
}

function psModify(value, multiplier) {
  const modifier=Math.floor(multiplier*4096);
  return Math.floor((Math.floor(value*modifier)+2047)/4096);
}

function moveFlag(move,flag){ return !!(move.flags && move.flags[flag]); }

function weatherDamageMultiplier(moveType,weather){
  if(weather==='sun'){
    if(moveType==='Fire')return 1.5;
    if(moveType==='Water')return 0.5;
  }
  if(weather==='rain'){
    if(moveType==='Water')return 1.5;
    if(moveType==='Fire')return 0.5;
  }
  return 1;
}

function terrainDamageMultiplier(move,terrain,attackerGrounded,defenderGrounded){
  let mult=1;
  if(attackerGrounded){
    if(terrain==='electric' && move.type==='Electric')mult*=1.3;
    if(terrain==='grassy' && move.type==='Grass')mult*=1.3;
    if(terrain==='psychic' && move.type==='Psychic')mult*=1.3;
  }
  if(defenderGrounded){
    if(terrain==='misty' && move.type==='Dragon')mult*=0.5;
    if(terrain==='grassy' && ['earthquake','bulldoze','magnitude'].includes(move.id))mult*=0.5;
  }
  return mult;
}

function attackAbilityBasePowerMultiplier(ability,move,typeMult){
  let mult=1;
  if(ability==='technician' && move.basePower<=60)mult*=1.5;
  if(ability==='toughclaws' && moveFlag(move,'contact'))mult*=1.3;
  if(ability==='strongjaw' && moveFlag(move,'bite'))mult*=1.5;
  if(ability==='sharpness' && moveFlag(move,'slicing'))mult*=1.5;
  if(ability==='ironfist' && moveFlag(move,'punch'))mult*=1.2;
  if(ability==='tintedlens' && typeMult>0 && typeMult<1)mult*=2;
  return mult;
}

function attackAbilityStatMultiplier(ability,ctx,status,weather,moveType){
  let mult=1;
  if(ability==='hugepower' && ctx.category==='Physical')mult*=2;
  if(ability==='guts' && ctx.category==='Physical' && status!=='none')mult*=1.5;
  if(ability==='solarpower' && ctx.category==='Special' && weather==='sun')mult*=1.5;
  if(ability==='waterbubble' && moveType==='Water')mult*=2;
  return mult;
}

function defenderAttackStatMultiplier(ability,moveType){
  if(ability==='thickfat' && ['Fire','Ice'].includes(moveType))return 0.5;
  if(ability==='heatproof' && moveType==='Fire')return 0.5;
  if(ability==='waterbubble' && moveType==='Fire')return 0.5;
  return 1;
}

function defenderDefenseMultiplier(ability,defKey,types,weather){
  let mult=1;
  if(ability==='furcoat' && defKey==='def')mult*=2;
  if(weather==='snow' && defKey==='def' && types.includes('Ice'))mult*=1.5;
  if(weather==='sand' && defKey==='spd' && types.includes('Rock'))mult*=1.5;
  return mult;
}

function defenderFinalDamageMultiplier(ability,ctx,move,typeMult,hpBefore,maxHp){
  let mult=1;
  if(['multiscale','shadowshield'].includes(ability) && hpBefore>=maxHp)mult*=0.5;
  if(['filter','solidrock','prismarmor'].includes(ability) && typeMult>1)mult*=0.75;
  if(ability==='fluffy'){
    if(move.type==='Fire')mult*=2;
    if(moveFlag(move,'contact'))mult*=0.5;
  }
  if(ability==='icescales' && ctx.category==='Special')mult*=0.5;
  return mult;
}

function screenMultiplier(screen,category,isCrit,attackerAbility){
  if(isCrit || attackerAbility==='infiltrator')return 1;
  if(screen==='auroraveil')return 0.5;
  if(screen==='reflect' && category==='Physical')return 0.5;
  if(screen==='lightscreen' && category==='Special')return 0.5;
  return 1;
}

function burnMultiplier(status,category,attackerAbility,moveId){
  if(status!=='burn' || category!=='Physical' || attackerAbility==='guts' || moveId==='facade')return 1;
  return 0.5;
}

function itemSequenceDamageMultiplier(itemId,moveNumber){
  if(itemId!=='metronome')return 1;
  const stage=Math.max(0,Math.min(5,(Number(moveNumber)||1)-1));
  return [1,1.2,1.4,1.6,1.8,2][stage];
}

function attackItemMultiplier(itemId,move,typeMult,category,attackerId) {
  if(itemId==='lifeorb')return 1.3;
  if(itemId==='expertbelt' && typeMult>1)return 1.2;
  if(itemId==='muscleband' && category==='Physical')return 1.1;
  if(itemId==='wiseglasses' && category==='Special')return 1.1;
  if(TYPE_BOOST_ITEMS[itemId]===move.type)return 1.2;
  return 1;
}
function attackStatItemMultiplier(itemId,attackerId) {
  return itemId==='lightball' && (attackerId==='pikachu' || attackerId.startsWith('pikachu')) ? 2 : 1;
}
function resistBerryApplies(itemId,moveType,typeMult) {
  const berryType=RESIST_BERRIES[itemId];
  if(!berryType || berryType!==moveType)return false;
  return itemId==='chilanberry' ? true : typeMult>1;
}

function currentOwnStat(statKey){
  const p=currentData(); if(!p)return 1;
  const row=document.querySelector(`tr[data-stat="${statKey}"]`);
  if(!row)return 1;
  const pts=clampPoints(row.querySelector('.points').value);
  return calculateStat(statKey,p.baseStats[statKey],pts);
}

function resolveMoveContext(attacker,move){
  let category=move.category;
  let atkKey=move.overrideOffensiveStat || (category==='Physical'?'atk':'spa');
  let defKey=move.overrideDefensiveStat || (category==='Physical'?'def':'spd');
  let source='attacker';

  if(move.id==='bodypress'){ category='Physical'; atkKey='def'; defKey='def'; }
  if(move.id==='foulplay'){ category='Physical'; atkKey='atk'; defKey='def'; source='defender'; }
  if(['psyshock','psystrike','secretsword'].includes(move.id)){ category='Special'; atkKey='spa'; defKey='def'; }

  return {category,atkKey,defKey,source};
}

function effectiveCrit(move,defenderAbility){
  const forced=!!move.willCrit || document.getElementById('attackCritical').checked;
  if(defenderAbility==='battlearmor')return false;
  return forced;
}

function entryHazardState(maxHp,types,defenderAbility){
  const startPct=Math.max(1,Math.min(100,Number(document.getElementById('startHpPercent').value)||100));
  let hp=Math.max(1,Math.floor(maxHp*startPct/100));
  const before=hp;
  let srDamage=0,spikesDamage=0;
  const magicGuard=defenderAbility==='magicguard';

  if(!magicGuard && document.getElementById('stealthRock').checked){
    const rockMult=typeEffectiveness('Rock',types,'none','stealthrock');
    if(rockMult>0)srDamage=Math.max(1,Math.floor(maxHp*rockMult/8));
    hp=Math.max(0,hp-srDamage);
  }

  const layers=Number(document.getElementById('spikesLayers').value)||0;
  const grounded=isGrounded(types,defenderAbility,document.getElementById('defenderGrounded').value,defenseItem());
  if(!magicGuard && layers>0 && grounded && hp>0){
    const denom=layers===1?8:layers===2?6:4;
    spikesDamage=Math.max(1,Math.floor(maxHp/denom));
    hp=Math.max(0,hp-spikesDamage);
  }

  return {startPct,before,hp,srDamage,spikesDamage,total:srDamage+spikesDamage,grounded};
}

function extraResidualDamage(maxHp,effect,ability){
  if(effect==='none' || ability==='magicguard')return 0;
  if(effect==='fixed16')return Math.max(1,Math.floor(maxHp/16));
  if(effect==='fixed8')return Math.max(1,Math.floor(maxHp/8));
  return 0;
}

function weatherResidualDamage(maxHp,weather,types,ability){
  if(ability==='magicguard')return 0;
  if(weather==='sand' && !types.some(t=>['Rock','Ground','Steel'].includes(t))){
    return Math.max(1,Math.floor(maxHp/16));
  }
  return 0;
}

function grassyTerrainHeal(maxHp,terrain,grounded){
  return terrain==='grassy' && grounded ? Math.max(1,Math.floor(maxHp/16)) : 0;
}

function moveHitCountOptions(move){
  if(Array.isArray(move.multihit)){
    const [lo,hi]=move.multihit.map(Number);
    return Array.from({length:hi-lo+1},(_,i)=>lo+i);
  }
  const n=Number(move.multihit);
  if(n>1)return [n];
  return [1];
}

function updateMultiHitOptions(move){
  const sel=document.getElementById('multiHitCount');
  const previous=Number(sel.value)||1;
  const options=moveHitCountOptions(move);
  sel.innerHTML='';
  options.forEach(n=>{
    const o=document.createElement('option');
    o.value=n;
    o.textContent=n===1?'1타':`${n}타${options.length>1 && n===Math.max(...options)?' · 최대':''}`;
    sel.appendChild(o);
  });
  sel.value=options.includes(previous)?String(previous):String(Math.max(...options));
}

function hitBasePower(move,hitIndex){
  if(move.id==='tripleaxel')return 20*hitIndex;
  if(move.id==='triplekick')return 10*hitIndex;
  let bp=move.basePower;
  if(move.id==='facade' && document.getElementById('attackerStatus').value!=='none')bp*=2;
  return bp;
}


function moveTargetsMultiple(move){
  const target=String(move?.target||'').toLowerCase();
  return ['alladjacentfoes','alladjacent','all'].includes(target);
}

function refreshSpreadDamageNote(move,checkboxId,noteId){
  const cb=document.getElementById(checkboxId);
  const note=document.getElementById(noteId);
  if(!cb || !note)return;
  const multi=moveTargetsMultiple(move);
  note.textContent=multi
    ? '광역 대상 기술입니다. 더블배틀에서 동시에 2마리 이상을 맞힐 때 체크합니다.'
    : '현재 기술은 일반적으로 분산 대상이 아닙니다. 필요한 상황에서만 수동 적용하세요.';
}

function buildBattleParams(attackerId,attacker,move,ctx,defenseState){
  const attackAbility=document.getElementById('attackerAbility').value;
  const defenderAbility=sampleAbilityValue();
  const status=document.getElementById('attackerStatus').value;
  const weather=document.getElementById('battleWeather').value;
  const terrain=document.getElementById('battleTerrain').value;
  const screen=document.getElementById('battleScreen').value;
  const attackerGrounded=isGrounded(attacker.types||[],attackAbility,document.getElementById('attackerGrounded').value);
  const defenderGrounded=isGrounded(defenseState.types,defenderAbility,document.getElementById('defenderGrounded').value,defenseItem());
  const typeMult=typeEffectiveness(move.type,defenseState.types,defenderAbility,move.id,defenseItem());
  const crit=effectiveCrit(move,defenderAbility);

  let rank=Number(document.getElementById('attackRank').value)||0;
  const intimidateImmune=['innerfocus','scrappy','owntempo','oblivious'].includes(attackAbility);
  if(defenderAbility==='intimidate' && ctx.category==='Physical' && !intimidateImmune){
    rank=Math.max(-6,rank-1);
  }
  if(crit && rank<0)rank=0;

  let defRank=Number(document.getElementById('defenderRank').value)||0;
  if(crit && defRank>0)defRank=0;

  let rawAtk;
  if(ctx.source==='defender'){
    rawAtk=currentOwnStat('atk');
    let fpRank=Number(document.getElementById('foulPlayTargetRank').value)||0;
    if(crit && fpRank<0)fpRank=0;
    rawAtk=Math.floor(rawAtk*rankMultiplier(fpRank));
  }else{
    const pts=clampPoints(document.getElementById('attackPoints').value);
    const nature=Number(document.getElementById('attackNature').value)||1;
    rawAtk=calculateStat(ctx.atkKey,attacker.baseStats[ctx.atkKey],pts,nature);
    rawAtk=Math.floor(rawAtk*rankMultiplier(rank));
  }

  const attackItem=document.getElementById('attackItem').value||'none';
  rawAtk=Math.floor(rawAtk*attackStatItemMultiplier(attackItem,attackerId));
  rawAtk=Math.floor(rawAtk*attackAbilityStatMultiplier(attackAbility,ctx,status,weather,move.type));
  rawAtk=Math.floor(rawAtk*defenderAttackStatMultiplier(defenderAbility,move.type));

  const stab=stabMultiplier(attacker.types||[],move.type,document.getElementById('attackAutoStab').checked,attackAbility);
  const itemDamage=attackItemMultiplier(attackItem,move,typeMult,ctx.category,attackerId);
  const abilityBP=attackAbilityBasePowerMultiplier(attackAbility,move,typeMult);
  const manual=Math.max(0.1,Number(document.getElementById('attackExtraMultiplier').value)||1);
  const spread=document.getElementById('attackSpread').checked;
  const multiHits=Math.max(1,Number(document.getElementById('multiHitCount').value)||1);

  return {
    attackAbility,defenderAbility,status,weather,terrain,screen,
    attackerGrounded,defenderGrounded,typeMult,crit,defRank,
    attack:Math.max(1,rawAtk),stab,itemDamage,abilityBP,manual,spread,multiHits,
    ctx,move,attackerId
  };
}

function defenseForHit(defenseState,params){
  let defense=defenseState.defense;
  defense=Math.floor(defense*rankMultiplier(params.defRank));
  defense=Math.floor(defense*defenderDefenseMultiplier(
    params.defenderAbility,params.ctx.defKey,defenseState.types,params.weather
  ));
  return Math.max(1,defense);
}

function singleHitDamage({params,defenseState,hpBefore,maxHp,roll,hitIndex=1}){
  if(params.typeMult===0)return 0;
  const power=Math.max(1,Math.floor(hitBasePower(params.move,hitIndex)*params.abilityBP));
  const defense=defenseForHit(defenseState,params);
  const baseBeforePlus2=Math.floor(Math.floor((22*power*params.attack)/defense)/50);
  let d=baseBeforePlus2+2;

  if(params.spread)d=psModify(d,0.75);
  d=psModify(d,weatherDamageMultiplier(params.move.type,params.weather));
  if(params.crit)d=Math.floor(d*1.5);
  d=Math.floor(d*roll/100);
  d=psModify(d,params.stab);

  if(params.typeMult===4)d*=4;
  else if(params.typeMult===2)d*=2;
  else if(params.typeMult===0.5)d=Math.floor(d/2);
  else if(params.typeMult===0.25)d=Math.floor(Math.floor(d/2)/2);

  d=psModify(d,burnMultiplier(params.status,params.ctx.category,params.attackAbility,params.move.id));
  d=psModify(d,terrainDamageMultiplier(params.move,params.terrain,params.attackerGrounded,params.defenderGrounded));
  d=psModify(d,screenMultiplier(params.screen,params.ctx.category,params.crit,params.attackAbility));
  d=psModify(d,params.itemDamage);
  d=psModify(d,params.manual);
  d=psModify(d,defenderFinalDamageMultiplier(
    params.defenderAbility,params.ctx,params.move,params.typeMult,hpBefore,maxHp
  ));
  return Math.max(1,d);
}

function currentDefensiveState(category,hpPointsOverride=null,defPointsOverride=null,defKeyOverride=null) {
  const p=currentData(); if(!p)return null;
  const rows={}; document.querySelectorAll('#statsBody tr').forEach(r=>rows[r.dataset.stat]=r);
  const hpP=hpPointsOverride??clampPoints(rows.hp.querySelector('.points').value);
  const defenseKey=defKeyOverride || (category==='Physical'?'def':'spd');
  const dP=defPointsOverride??clampPoints(rows[defenseKey].querySelector('.points').value);
  return {
    hpPoints:hpP, defensePoints:dP, defenseKey,
    hp:calculateStat('hp',p.baseStats.hp,hpP),
    defense:calculateStat(defenseKey,p.baseStats[defenseKey],dP),
    types:p.types||[]
  };
}

function simulateBattleSequence({params,defenseState,moveCount,roll}){
  const maxHp=defenseState.hp;
  const entry=entryHazardState(maxHp,defenseState.types,params.defenderAbility);
  let hp=entry.hp;
  let consumableAvailable=true;
  let directTotal=0,residualTotal=0,healingTotal=0,itemActivations=0;
  const itemId=defenseItem();
  const residualEffect=document.getElementById('residualEffect').value||'none';

  if(hp<=0)return {survives:false,hp:0,directTotal,residualTotal,healingTotal,itemActivations,entry};

  const tryHealingBerry=()=>{
    if(!consumableAvailable || hp<=0 || hp>maxHp/2)return;
    let heal=0;
    if(itemId==='sitrusberry')heal=Math.floor(maxHp/4);
    if(itemId==='oranberry')heal=10;
    if(!heal)return;
    const actual=Math.min(heal,maxHp-hp);
    hp+=actual; healingTotal+=actual;
    consumableAvailable=false; itemActivations++;
  };

  for(let moveNo=1;moveNo<=moveCount;moveNo++){
    for(let hit=1;hit<=params.multiHits;hit++){
      let d=singleHitDamage({params,defenseState,hpBefore:hp,maxHp,roll,hitIndex:hit});

      if(consumableAvailable && resistBerryApplies(itemId,params.move.type,params.typeMult)){
        d=Math.max(1,psModify(d,0.5));
        consumableAvailable=false; itemActivations++;
      }

      const sturdy=params.defenderAbility==='sturdy';
      if((sturdy || (consumableAvailable && itemId==='focussash')) && hp===maxHp && d>=hp){
        d=hp-1;
        if(!sturdy){consumableAvailable=false; itemActivations++;}
      }

      hp-=d; directTotal+=d;
      if(hp<=0)return {survives:false,hp:0,directTotal,residualTotal,healingTotal,itemActivations,entry};

      tryHealingBerry();
    }

    if(moveNo<moveCount){
      let chip=0;
      chip+=weatherResidualDamage(maxHp,params.weather,defenseState.types,params.defenderAbility);
      chip+=extraResidualDamage(maxHp,residualEffect,params.defenderAbility);
      hp-=chip; residualTotal+=chip;
      if(hp<=0)return {survives:false,hp:0,directTotal,residualTotal,healingTotal,itemActivations,entry};
      tryHealingBerry();

      const grassy=grassyTerrainHeal(maxHp,params.terrain,params.defenderGrounded);
      if(grassy){
        const actual=Math.min(grassy,maxHp-hp); hp+=actual; healingTotal+=actual;
      }
      if(itemId==='leftovers'){
        const heal=Math.floor(maxHp/16);
        const actual=Math.min(heal,maxHp-hp); hp+=actual; healingTotal+=actual;
      }
    }
  }
  return {survives:hp>0,hp,directTotal,residualTotal,healingTotal,itemActivations,entry};
}

function oneMoveDamageRange(params,defenseState){
  const minSim=simulateBattleSequence({params,defenseState,moveCount:1,roll:85});
  const maxSim=simulateBattleSequence({params,defenseState,moveCount:1,roll:100});
  const lossA=Math.max(0,minSim.entry.hp-minSim.hp);
  const lossB=Math.max(0,maxSim.entry.hp-maxSim.hp);
  const minDamage=Math.min(lossA,lossB);
  const maxDamage=Math.max(lossA,lossB);
  return {minDamage,maxDamage,minSim,maxSim};
}

function hitJudge(minD,maxD,hp) {
  if(!hp)return {text:'-',cls:''};
  if(minD>=hp)return {text:'확정 1타',cls:'danger'};
  if(maxD>=hp)return {text:'난수 1타',cls:'danger'};
  if(minD*2>=hp)return {text:'확정 2타',cls:''};
  if(maxD*2>=hp)return {text:'난수 2타',cls:''};
  if(minD*3>=hp)return {text:'확정 3타',cls:'safe'};
  return {text:'3타 이상',cls:'safe'};
}

function survivalSuggestions(baseParams, hitCount=1) {
  const rows={}; document.querySelectorAll('#statsBody tr').forEach(r=>rows[r.dataset.stat]=r);
  const currentH=clampPoints(rows.hp.querySelector('.points').value);
  const defKey=baseParams.ctx.defKey;
  const currentD=clampPoints(rows[defKey].querySelector('.points').value);
  const currentTotal=Array.from(document.querySelectorAll('#statsBody .points'))
    .reduce((s,e)=>s+clampPoints(e.value),0);
  const fixedOther=currentTotal-currentH-currentD;

  const survives=(hP,dP)=>{
    const st=currentDefensiveState(baseParams.ctx.category,hP,dP,defKey);
    const sim=simulateBattleSequence({params:baseParams,defenseState:st,moveCount:hitCount,roll:100});
    return sim.survives;
  };

  let hpOnly=null;
  for(let h=currentH;h<=MAX_STAT_POINTS;h++){
    if(fixedOther+h+currentD>TOTAL_STAT_POINTS)break;
    if(survives(h,currentD)){hpOnly=h;break;}
  }
  let defOnly=null;
  for(let d=currentD;d<=MAX_STAT_POINTS;d++){
    if(fixedOther+currentH+d>TOTAL_STAT_POINTS)break;
    if(survives(currentH,d)){defOnly=d;break;}
  }

  let mixed=null;
  for(let add=0;add<=64&&!mixed;add++){
    for(let h=currentH;h<=MAX_STAT_POINTS;h++){
      const d=currentD+(add-(h-currentH));
      if(d<currentD||d>MAX_STAT_POINTS)continue;
      if(fixedOther+h+d>TOTAL_STAT_POINTS)continue;
      if(survives(h,d)){mixed={h,d,add};break;}
    }
  }
  return {hpOnly,defOnly,mixed,currentH,currentD,defKey};
}

function renderAttackBenchmark() {
  const p=currentData();
  const attackerId=document.getElementById('attackPokemonSelect')?.value;
  const moveId=document.getElementById('attackMoveSelect')?.value;
  if(!p||!attackerId||!moveId||!dexData[attackerId]||!moveData[moveId])return;

  const attacker=dexData[attackerId], move=moveData[moveId];
  refreshSpreadDamageNote(move,'attackSpread','attackSpreadNote');
  updateMultiHitOptions(move);

  const ctx=resolveMoveContext(attacker,move);
  const defenseState=currentDefensiveState(ctx.category,null,null,ctx.defKey);
  const params=buildBattleParams(attackerId,attacker,move,ctx,defenseState);
  const entry=entryHazardState(defenseState.hp,defenseState.types,params.defenderAbility);
  const oneMove=oneMoveDamageRange(params,defenseState);

  const minD=oneMove.minDamage,maxD=oneMove.maxDamage;
  const pctMin=defenseState.hp?minD/defenseState.hp*100:0;
  const pctMax=defenseState.hp?maxD/defenseState.hp*100:0;
  const judge=hitJudge(minD,maxD,entry.hp);

  document.getElementById('attackActualStat').textContent=params.attack.toLocaleString('ko-KR');
  let statLabel=ctx.atkKey==='def'?'방어':ctx.atkKey==='spa'?'특수공격':'공격';
  if(ctx.source==='defender')statLabel='내 포켓몬 공격(속임수)';
  document.getElementById('attackStatDetail').textContent=
    `${statLabel} 사용 · ${params.crit?'급소 기준':''}${params.attackAbility!=='none'?` · 특성 적용`:''}`;

  const firstPower=hitBasePower(move,1);
  const powerIndex=Math.floor(params.attack*firstPower*params.stab*params.itemDamage*params.abilityBP*params.manual);
  document.getElementById('attackPowerIndex').textContent=powerIndex.toLocaleString('ko-KR');
  document.getElementById('attackPowerDetail').textContent=
    `위력 ${firstPower}${params.multiHits>1?` × ${params.multiHits}타`:''} · 자속 ×${params.stab.toFixed(1)} · 도구 ×${params.itemDamage.toFixed(2)} · 특성/기타 반영`;

  document.getElementById('attackDamageRange').textContent=`${minD} ~ ${maxD}`;
  document.getElementById('attackDamagePercent').textContent=
    `${pctMin.toFixed(1)} ~ ${pctMax.toFixed(1)}% (최대 HP 기준) · 진입 HP ${entry.hp}/${defenseState.hp}`;

  const typeBadge=document.getElementById('attackTypeMultiplier');
  typeBadge.textContent=`받는 배율 ×${formatMultiplier(params.typeMult)}`;
  typeBadge.className=`type-multiplier-badge ${multiplierClass(params.typeMult)}`;

  const judgeEl=document.getElementById('attackDamageJudge');
  judgeEl.textContent=judge.text;
  judgeEl.className=`damage-judge ${judge.cls}`;
  document.getElementById('defenderTypeDisplay').value=(p.types||[]).join(' / ')||'-';
  const defenderAbilityDisplay=document.getElementById('defenderAbilityDisplay');
  if(defenderAbilityDisplay){
    defenderAbilityDisplay.value=document.getElementById('sampleAbility')?.selectedOptions[0]?.textContent||'없음';
  }

  document.getElementById('entryMaxHp').textContent=defenseState.hp;
  document.getElementById('entryCurrentHp').textContent=`${entry.hp} (${entry.startPct}%)`;
  document.getElementById('entryHazardDamage').textContent=
    entry.total ? `${entry.total} · 록 ${entry.srDamage} / 압정 ${entry.spikesDamage}` : '0';
  const chipList=[];
  if(document.getElementById('stealthRock').checked)chipList.push('스텔스록');
  const layers=Number(document.getElementById('spikesLayers').value)||0;
  if(layers)chipList.push(`압정 ${layers}장${entry.grounded?'':' · 비접지'}`);
  if(params.weather!=='none')chipList.push(document.getElementById('battleWeather').selectedOptions[0].textContent);
  if(params.terrain!=='none')chipList.push(document.getElementById('battleTerrain').selectedOptions[0].textContent);
  if(params.screen!=='none')chipList.push(document.getElementById('battleScreen').selectedOptions[0].textContent);
  if(params.crit)chipList.push('급소');
  if(params.multiHits>1)chipList.push(`${params.multiHits}연속기`);
  document.getElementById('entryMechanicChips').innerHTML=
    (chipList.length?chipList:['추가 조건 없음']).map((x,i)=>`<span class="mechanic-chip ${chipList.length?'on':''}">${x}</span>`).join('');

  const hitCount=Math.max(1,Math.min(3,Number(document.getElementById('surviveHits').value)||1));
  const simMin=simulateBattleSequence({params,defenseState,moveCount:hitCount,roll:85});
  const simMax=simulateBattleSequence({params,defenseState,moveCount:hitCount,roll:100});
  const baseStart=entry.hp;
  const lossA=Math.max(0,baseStart-simMin.hp);
  const lossB=Math.max(0,baseStart-simMax.hp);
  const lossMin=Math.min(lossA,lossB);
  const lossMax=Math.max(lossA,lossB);
  const remainLow=Math.min(simMin.hp,simMax.hp);
  const remainHigh=Math.max(simMin.hp,simMax.hp);
  const cumulativePctMin=baseStart?lossMin/baseStart*100:0;
  const cumulativePctMax=baseStart?lossMax/baseStart*100:0;
  const defenseItemName=defenseItem()==='none'?'도구 없음':itemLabel(defenseItem());

  document.getElementById('surviveHitRange').textContent=
    `${hitCount}회 기술 후 남는 HP: ${remainLow} ~ ${remainHigh} / 진입 ${baseStart}`
    + ` · 진입HP 손실 ${cumulativePctMin.toFixed(1)} ~ ${cumulativePctMax.toFixed(1)}%`
    + ` · ${defenseItemName}`
    + ((simMax.itemActivations||simMin.itemActivations)?` 1회 발동`: '')
    + ((simMax.healingTotal||simMin.healingTotal)?` · 회복 ${simMax.healingTotal}~${simMin.healingTotal}`:'')
    + ((simMax.residualTotal||simMin.residualTotal)?` · 턴종료피해 ${simMin.residualTotal}~${simMax.residualTotal}`:'');

  const suggestions=survivalSuggestions(params,hitCount);
  document.getElementById('surviveDefenseLabel').textContent=
    ctx.defKey==='def'?'방어만 추가':'특방만 추가';
  document.getElementById('surviveHpOnly').textContent=
    suggestions.hpOnly===null?'현재 조건에서 불가':
    suggestions.hpOnly===suggestions.currentH?`${hitCount}회 이미 확정 생존`:
    `H ${suggestions.hpOnly}P · +${suggestions.hpOnly-suggestions.currentH}P`;
  document.getElementById('surviveDefenseOnly').textContent=
    suggestions.defOnly===null?'현재 조건에서 불가':
    suggestions.defOnly===suggestions.currentD?`${hitCount}회 이미 확정 생존`:
    `${ctx.defKey==='def'?'B':'D'} ${suggestions.defOnly}P · +${suggestions.defOnly-suggestions.currentD}P`;
  document.getElementById('surviveMixed').textContent=
    !suggestions.mixed?'66P 제한 내 불가':
    suggestions.mixed.add===0?`현재 배분으로 ${hitCount}회 확정 생존`:
    `H${suggestions.mixed.h} / ${ctx.defKey==='def'?'B':'D'}${suggestions.mixed.d} · +${suggestions.mixed.add}P`;

  const attackItem=document.getElementById('attackItem')?.value||'none';
  const attackItemNote=document.getElementById('attackItemNote');
  if(attackItemNote){
    attackItemNote.textContent=itemEffectText(attackItem,'attack');
    attackItemNote.className=`item-effect-note ${attackItem!=='none'?'active':''}`;
  }

  const warning=[];
  if(SPECIAL_MOVE_WARNINGS.has(move.id))warning.push('이 기술은 상황에 따라 위력/계산 방식이 달라져 현재 일반식과 차이가 날 수 있습니다.');
  if(['bodypress','foulplay','psyshock','psystrike','secretsword'].includes(move.id)){
    const msg={
      bodypress:'바디프레스: 공격 대신 상대의 방어 수치를 공격 능력으로 사용합니다.',
      foulplay:'속임수: 내 포켓몬의 공격 실능치와 “속임수 대상 공격 랭크”를 사용합니다.',
      psyshock:'사이코쇼크: 특수공격으로 계산하되 내 방어를 사용합니다.',
      psystrike:'사이코브레이크: 특수공격으로 계산하되 내 방어를 사용합니다.',
      secretsword:'신비의칼: 특수공격으로 계산하되 내 방어를 사용합니다.'
    }[move.id];
    warning.push(msg);
  }
  if(params.defenderAbility==='magicguard' && (entry.srDamage===0 || entry.spikesDamage===0))warning.push('매직가드로 간접 피해를 무시합니다.');
  if(document.getElementById('attackCritical').checked && params.defenderAbility==='battlearmor')warning.push('전투무장/조가비갑옷 때문에 급소 토글은 무효입니다.');
  if(params.multiHits>1)warning.push(`연속기는 기술 1회당 ${params.multiHits}타로 계산하며 열매/기합의띠는 실제 소모 순서대로 한 번만 발동합니다.`);
  if(params.multiHits>1 && document.getElementById('attackCritical').checked){
    warning.push('연속기에서 급소 기준을 켜면 모든 타격을 급소로 계산합니다.');
  }

  document.getElementById('attackWarning').textContent=
    warning.length?warning.join(' '):
    'Champions Lv.50 기준. 시작 HP·함정·특성·날씨·필드·벽·화상·급소·연속기와 주요 특수 계산 기술을 반영합니다.';
}


// ============================================================
// 공격 분석 — 현재 샘플 → 상대 한 마리 피해 및 최소 A/C 역산
// ============================================================
let offenseLastMinimum = null;

function offenseTargetEntities(){
  return attackEntityOptions();
}

function populateOffenseTargetOptions(filter=''){
  const sel=document.getElementById('offenseTargetSelect');
  if(!sel)return;
  const current=sel.value;
  const q=normalizeSearchText(filter);
  const list=offenseTargetEntities().filter(e=>{
    const koBase=e.item ? (koreanNames[e.item.dex]||'') : '';
    const candidates=[
      e.label||'', koBase, e.item?.en||'', e.form?.suffix||'', e.id||''
    ].map(normalizeSearchText);
    return !q || candidates.some(v=>v.includes(q));
  });
  sel.innerHTML='';
  list.forEach(e=>{
    const o=document.createElement('option');
    o.value=e.id; o.textContent=e.label;
    sel.appendChild(o);
  });
  if(list.some(e=>e.id===current))sel.value=current;
  else if(list.some(e=>e.id==='garchomp'))sel.value='garchomp';
  else if(list.length)sel.value=list[0].id;
  populateOffenseTargetAbilityOptions();
  renderOffensePanel();
}


function defenderAbilityOptionLabel(id,name){
  const supported=DEFENDER_ABILITY_OPTIONS.some(([v])=>v===id);
  const ko=koreanAbilityNames[id];
  const base=ko ? `${ko} (${name})` : name;
  return supported ? `${base} · 계산 지원` : `${base} · 효과 미구현`;
}

function populateOffenseTargetAbilityOptions(){
  const sel=document.getElementById('offenseTargetAbility');
  const targetId=document.getElementById('offenseTargetSelect')?.value;
  if(!sel)return;
  const current=sel.value;
  const data=dexData[targetId];
  sel.innerHTML='';

  const none=document.createElement('option');
  none.value='none'; none.textContent='특성 미적용';
  sel.appendChild(none);

  const abilities=[...new Set(data?.abilities||[])].filter(Boolean);
  abilities.forEach(name=>{
    const id=toID(name);
    const o=document.createElement('option');
    o.value=id;
    o.textContent=defenderAbilityOptionLabel(id,name);
    sel.appendChild(o);
  });

  if(Array.from(sel.options).some(o=>o.value===current))sel.value=current;
  else sel.value='none';
}

function targetAbilityEffectText(id){
  if(id==='none')return '특성 미적용';
  const entry=DEFENDER_ABILITY_OPTIONS.find(([v])=>v===id);
  if(entry)return entry[1];
  const name=document.getElementById('offenseTargetAbility')?.selectedOptions[0]?.textContent||id;
  return `${name} · 현재 피해 계산 효과는 아직 미구현`;
}

function populateOffenseTargetItemOptions(){
  const sel=document.getElementById('offenseTargetItem');
  if(!sel)return;
  const current=sel.value||'none';

  if(!championsItemsReady){
    populateHeldItemSelect('offenseTargetItem',DEFENSE_ITEM_GROUPS,current);
    return;
  }

  const groups=new Map();
  Object.values(championsItemData)
    .filter(item=>item.id!=='none')
    .sort((a,b)=>championsItemDisplayName(a.id).localeCompare(championsItemDisplayName(b.id),'ko'))
    .forEach(item=>{
      const cat=championsItemCategory(item.id,item);
      if(!groups.has(cat))groups.set(cat,[]);
      groups.get(cat).push(item);
    });

  sel.innerHTML='';
  const none=document.createElement('option');
  none.value='none'; none.textContent='없음';
  sel.appendChild(none);

  ['내구 / 회복','열매','스피드 / 행동순서','공격 / 화력','메가스톤','기타 / 보조'].forEach(cat=>{
    const list=groups.get(cat)||[];
    if(!list.length)return;
    const og=document.createElement('optgroup');
    og.label=cat;
    list.forEach(item=>{
      const o=document.createElement('option');
      o.value=item.id;
      o.textContent=`${championsItemDisplayName(item.id)} · ${itemHasDefenseAutoEffect(item.id)?'내구 계산 지원':'직접 내구 보정 없음'}`;
      og.appendChild(o);
    });
    sel.appendChild(og);
  });

  if(Array.from(sel.options).some(o=>o.value===current))sel.value=current;
  else sel.value='none';
}

function populateOffenseMoveOptions(filter=''){
  const sel=document.getElementById('offenseMoveSelect');
  if(!sel)return;
  const current=sel.value;
  const q=normalizeSearchText(filter);
  const list=Object.values(moveData)
    .filter(m=>m.basePower>0 && (m.category==='Physical'||m.category==='Special'))
    .filter(m=>{
      const candidates=[
        sampleMoveDisplayName(m),
        m.name||'',
        koreanMoveNames[m.id]||'',
        m.id||''
      ].map(normalizeSearchText);
      return !q || candidates.some(v=>v.includes(q));
    })
    .sort((a,b)=>a.name.localeCompare(b.name));
  sel.innerHTML='';
  list.slice(0,350).forEach(m=>{
    const o=document.createElement('option');
    o.value=m.id; o.textContent=moveDisplayName(m);
    sel.appendChild(o);
  });
  if(list.some(m=>m.id===current))sel.value=current;
  else if(list.some(m=>m.id==='earthquake'))sel.value='earthquake';
  else if(list.length)sel.value=list[0].id;
  const move=moveData[sel.value];
  if(move)updateOffenseMultiHitOptions(move);
  renderOffensePanel();
}

function offenseCurrentPoints(statKey){
  const row=document.querySelector(`tr[data-stat="${statKey}"]`);
  return row ? clampPoints(row.querySelector('.points').value) : 0;
}

function offenseResolveMoveContext(move){
  let category=move.category;
  let atkKey=move.overrideOffensiveStat || (category==='Physical'?'atk':'spa');
  let defKey=move.overrideDefensiveStat || (category==='Physical'?'def':'spd');
  let source='self';

  if(move.id==='bodypress'){category='Physical';atkKey='def';defKey='def';}
  if(move.id==='foulplay'){category='Physical';atkKey='atk';defKey='def';source='target';}
  if(['psyshock','psystrike','secretsword'].includes(move.id)){category='Special';atkKey='spa';defKey='def';}
  return {category,atkKey,defKey,source};
}

function offenseTargetState(target,ctx,hpPointsOverride=null,defPointsOverride=null){
  const hpP=hpPointsOverride??clampPoints(document.getElementById('offenseTargetHpPoints').value);
  const defInputId=ctx.defKey==='def'?'offenseTargetDefPoints':'offenseTargetSpdPoints';
  const dP=defPointsOverride??clampPoints(document.getElementById(defInputId).value);
  const nature=Number(document.getElementById('offenseTargetNature').value)||1;
  return {
    hpPoints:hpP, defensePoints:dP, defenseKey:ctx.defKey,
    hp:calculateStat('hp',target.baseStats.hp,hpP,1),
    defense:calculateStat(ctx.defKey,target.baseStats[ctx.defKey],dP,nature),
    attack:calculateStat('atk',target.baseStats.atk,0,1),
    types:target.types||[]
  };
}

function offenseEntryHazardState(maxHp,types,ability){
  const startPct=Math.max(1,Math.min(100,Number(document.getElementById('offenseTargetStartHp').value)||100));
  let hp=Math.max(1,Math.floor(maxHp*startPct/100));
  let srDamage=0,spikesDamage=0;
  const magicGuard=ability==='magicguard';
  const targetItem=document.getElementById('offenseTargetItem')?.value||'none';
  const boots=targetItem==='heavydutyboots';

  if(!magicGuard && !boots && document.getElementById('offenseTargetStealthRock').checked){
    const rockMult=typeEffectiveness('Rock',types,'none','stealthrock');
    if(rockMult>0)srDamage=Math.max(1,Math.floor(maxHp*rockMult/8));
    hp=Math.max(0,hp-srDamage);
  }

  const layers=Number(document.getElementById('offenseTargetSpikes').value)||0;
  const grounded=isGrounded(types,ability,document.getElementById('offenseTargetGrounded').value,targetItem);
  if(!magicGuard && !boots && layers>0 && grounded && hp>0){
    const denom=layers===1?8:layers===2?6:4;
    spikesDamage=Math.max(1,Math.floor(maxHp/denom));
    hp=Math.max(0,hp-spikesDamage);
  }

  return {startPct,hp,total:srDamage+spikesDamage,srDamage,spikesDamage,grounded};
}

function updateOffenseMultiHitOptions(move){
  const sel=document.getElementById('offenseMultiHitCount');
  if(!sel||!move)return;
  const previous=Number(sel.value)||1;
  const options=moveHitCountOptions(move);
  sel.innerHTML='';
  options.forEach(n=>{
    const o=document.createElement('option');
    o.value=n;
    o.textContent=n===1?'1타':`${n}타${options.length>1&&n===Math.max(...options)?' · 최대':''}`;
    sel.appendChild(o);
  });
  sel.value=options.includes(previous)?String(previous):String(Math.max(...options));
}

function offenseHitBasePower(move,hitIndex){
  if(move.id==='tripleaxel')return 20*hitIndex;
  if(move.id==='triplekick')return 10*hitIndex;
  let bp=move.basePower;
  if(move.id==='facade' && document.getElementById('offenseStatus').value!=='none')bp*=2;
  return bp;
}

function offenseBuildParams(own,target,move,ctx,pointOverride=null){
  const ability=sampleAbilityValue();
  const defenderAbility=document.getElementById('offenseTargetAbility').value||'none';
  const status=document.getElementById('offenseStatus').value||'none';
  const weather=document.getElementById('offenseWeather').value||'none';
  const terrain=document.getElementById('offenseTerrain').value||'none';
  const screen=document.getElementById('offenseScreen').value||'none';
  const ownGrounded=isGrounded(own.types||[],ability,document.getElementById('offenseGrounded').value,sampleHeldItem());
  const targetItem=document.getElementById('offenseTargetItem')?.value||'none';
  const targetGrounded=isGrounded(target.types||[],defenderAbility,document.getElementById('offenseTargetGrounded').value,targetItem);
  const typeMult=typeEffectiveness(move.type,target.types||[],defenderAbility,move.id,targetItem);
  const crit=(!!move.willCrit || document.getElementById('offenseCritical').checked) && defenderAbility!=='battlearmor';

  let rank=Number(document.getElementById('offenseRank').value)||0;
  const intimidateImmune=['innerfocus','scrappy','owntempo','oblivious'].includes(ability);
  if(defenderAbility==='intimidate' && ctx.category==='Physical' && !intimidateImmune)rank=Math.max(-6,rank-1);
  if(crit && rank<0)rank=0;

  let rawAtk=1;
  let statPoints=null;
  if(ctx.source==='target'){
    const targetAtkPoints=0;
    const targetAtkBase=calculateStat('atk',target.baseStats.atk,targetAtkPoints,1);
    let fpRank=Number(document.getElementById('offenseFoulPlayRank').value)||0;
    if(crit && fpRank<0)fpRank=0;
    rawAtk=Math.floor(targetAtkBase*rankMultiplier(fpRank));
  }else{
    statPoints=pointOverride??offenseCurrentPoints(ctx.atkKey);
    rawAtk=calculateStat(ctx.atkKey,own.baseStats[ctx.atkKey],statPoints,natureMultiplier(ctx.atkKey));
    rawAtk=Math.floor(rawAtk*rankMultiplier(rank));
  }

  const item=sampleHeldItem();
  const effectiveStatus=((item==='rawstberry' && status==='burn') || (item==='lumberry' && status!=='none'))
    ? 'none' : status;
  rawAtk=Math.floor(rawAtk*attackStatItemMultiplier(item,toID(own.name||'')));
  rawAtk=Math.floor(rawAtk*attackAbilityStatMultiplier(ability,ctx,effectiveStatus,weather,move.type));
  rawAtk=Math.floor(rawAtk*defenderAttackStatMultiplier(defenderAbility,move.type));

  const stab=stabMultiplier(own.types||[],move.type,document.getElementById('offenseAutoStab').checked,ability);
  const itemDamage=attackItemMultiplier(item,move,typeMult,ctx.category,toID(own.name||''));
  const abilityBP=attackAbilityBasePowerMultiplier(ability,move,typeMult);
  const manual=Math.max(0.1,Number(document.getElementById('offenseExtraMultiplier').value)||1);
  const spread=document.getElementById('offenseSpread').checked;
  const multiHits=Math.max(1,Number(document.getElementById('offenseMultiHitCount').value)||1);
  let defRank=Number(document.getElementById('offenseTargetDefRank').value)||0;
  if(crit && defRank>0)defRank=0;

  return {
    ability,defenderAbility,status:effectiveStatus,weather,terrain,screen,
    ownGrounded,targetGrounded,typeMult,crit,rank,defRank,
    attack:Math.max(1,rawAtk),statPoints,stab,itemDamage,abilityBP,manual,spread,multiHits,
    ctx,move,item,target
  };
}


function offenseTargetItemDefenseMultiplier(itemId,ctx,target){
  let mult=1;
  if(itemId==='assaultvest' && ctx.defKey==='spd')mult*=1.5;
  if(itemId==='deepseascale' && ctx.defKey==='spd' && toID(target?.name||'')==='clamperl')mult*=2;
  if(itemId==='metalpowder' && ctx.defKey==='def' && toID(target?.name||'')==='ditto')mult*=2;
  return mult;
}

function offenseTargetItemRankBonus(itemId,ctx,terrain){
  if(itemId==='electricseed' && terrain==='electric' && ctx.defKey==='def')return 1;
  if(itemId==='grassyseed' && terrain==='grassy' && ctx.defKey==='def')return 1;
  if(itemId==='psychicseed' && terrain==='psychic' && ctx.defKey==='spd')return 1;
  if(itemId==='mistyseed' && terrain==='misty' && ctx.defKey==='spd')return 1;
  return 0;
}

function targetItemDetailedEffectText(itemId,ctx,target,terrain){
  if(itemId==='none')return '도구 없음';
  if(itemId==='assaultvest')return ctx.defKey==='spd'?'돌격조끼 · 특방 ×1.5 적용':'돌격조끼 · 현재 물리 방어 계산에는 직접 영향 없음';
  if(itemId==='airballoon')return '풍선 · 땅 타입 기술 면역으로 계산';
  if(itemId==='heavydutyboots')return '통굽부츠 · 스텔스록/압정 진입 피해 무시';
  if(['electricseed','grassyseed','psychicseed','mistyseed'].includes(itemId)){
    const bonus=offenseTargetItemRankBonus(itemId,ctx,terrain);
    return bonus?`${itemLabel(itemId)} · 현재 필드에서 사용하는 방어 능력치 +1랭크 적용`
                :`${itemLabel(itemId)} · 현재 필드/방어축에서는 발동하지 않음`;
  }
  return itemEffectText(itemId,'defense');
}

function offenseDefenseForHit(targetState,params,target=null){
  let defense=targetState.defense;
  const itemId=document.getElementById('offenseTargetItem')?.value||'none';
  const seedBonus=offenseTargetItemRankBonus(itemId,params.ctx,params.terrain);
  defense=Math.floor(defense*rankMultiplier(Math.max(-6,Math.min(6,params.defRank+seedBonus))));
  defense=Math.floor(defense*defenderDefenseMultiplier(
    params.defenderAbility,params.ctx.defKey,targetState.types,params.weather
  ));
  defense=Math.floor(defense*offenseTargetItemDefenseMultiplier(itemId,params.ctx,target));
  return Math.max(1,defense);
}

function offenseSingleHitDamage({params,targetState,hpBefore,maxHp,roll,hitIndex=1,moveNumber=1}){
  if(params.typeMult===0)return 0;
  const power=Math.max(1,Math.floor(offenseHitBasePower(params.move,hitIndex)*params.abilityBP));
  const defense=offenseDefenseForHit(targetState,params,params.target);
  const baseBeforePlus2=Math.floor(Math.floor((22*power*params.attack)/defense)/50);
  let d=baseBeforePlus2+2;

  if(params.spread)d=psModify(d,0.75);
  d=psModify(d,weatherDamageMultiplier(params.move.type,params.weather));
  if(params.crit)d=Math.floor(d*1.5);
  d=Math.floor(d*roll/100);
  d=psModify(d,params.stab);

  if(params.typeMult===4)d*=4;
  else if(params.typeMult===2)d*=2;
  else if(params.typeMult===0.5)d=Math.floor(d/2);
  else if(params.typeMult===0.25)d=Math.floor(Math.floor(d/2)/2);

  d=psModify(d,burnMultiplier(params.status,params.ctx.category,params.ability,params.move.id));
  d=psModify(d,terrainDamageMultiplier(params.move,params.terrain,params.ownGrounded,params.targetGrounded));
  d=psModify(d,screenMultiplier(params.screen,params.ctx.category,params.crit,params.ability));
  d=psModify(d,params.itemDamage);
  d=psModify(d,itemSequenceDamageMultiplier(params.item,moveNumber));
  d=psModify(d,params.manual);
  d=psModify(d,defenderFinalDamageMultiplier(
    params.defenderAbility,params.ctx,params.move,params.typeMult,hpBefore,maxHp
  ));
  return Math.max(1,d);
}

function offenseSimulateSequence({params,targetState,moveCount,roll}){
  const maxHp=targetState.hp;
  const entry=offenseEntryHazardState(maxHp,targetState.types,params.defenderAbility);
  let hp=entry.hp;
  let consumableAvailable=true;
  let directTotal=0,healingTotal=0,residualTotal=0,itemActivations=0;
  const itemId=document.getElementById('offenseTargetItem').value||'none';

  if(hp<=0)return {survives:false,hp:0,entry,directTotal,healingTotal,residualTotal,itemActivations};

  const tryHealingBerry=()=>{
    if(!consumableAvailable || hp<=0)return;
    let heal=0;
    if(itemId==='sitrusberry' && hp<=maxHp/2)heal=Math.floor(maxHp/4);
    if(itemId==='oranberry' && hp<=maxHp/2)heal=10;
    if(['figyberry','wikiberry','magoberry','aguavberry','iapapaberry'].includes(itemId) && hp<=maxHp/4){
      heal=Math.floor(maxHp/3);
    }
    if(itemId==='enigmaberry' && params.typeMult>1)heal=Math.floor(maxHp/4);
    if(!heal)return;
    const actual=Math.min(heal,maxHp-hp);
    hp+=actual; healingTotal+=actual;
    consumableAvailable=false; itemActivations++;
  };

  for(let moveNo=1;moveNo<=moveCount;moveNo++){
    for(let hit=1;hit<=params.multiHits;hit++){
      let d=offenseSingleHitDamage({params,targetState,hpBefore:hp,maxHp,roll,hitIndex:hit,moveNumber:moveNo});

      if(consumableAvailable && resistBerryApplies(itemId,params.move.type,params.typeMult)){
        d=Math.max(1,psModify(d,0.5));
        consumableAvailable=false; itemActivations++;
      }

      const sturdy=params.defenderAbility==='sturdy';
      if((sturdy || (consumableAvailable && itemId==='focussash')) && hp===maxHp && d>=hp){
        d=hp-1;
        if(!sturdy){consumableAvailable=false;itemActivations++;}
      }

      hp-=d; directTotal+=d;
      if(hp<=0)return {survives:false,hp:0,entry,directTotal,healingTotal,residualTotal,itemActivations};
      tryHealingBerry();
    }

    if(moveNo<moveCount){
      const chip=weatherResidualDamage(maxHp,params.weather,targetState.types,params.defenderAbility);
      hp-=chip; residualTotal+=chip;
      if(hp<=0)return {survives:false,hp:0,entry,directTotal,healingTotal,residualTotal,itemActivations};
      tryHealingBerry();

      const grassy=grassyTerrainHeal(maxHp,params.terrain,params.targetGrounded);
      if(grassy){
        const actual=Math.min(grassy,maxHp-hp);hp+=actual;healingTotal+=actual;
      }
      if(itemId==='leftovers' || (itemId==='blacksludge' && targetState.types.includes('Poison'))){
        const heal=Math.floor(maxHp/16);
        const actual=Math.min(heal,maxHp-hp);hp+=actual;healingTotal+=actual;
      }else if(itemId==='blacksludge' && !targetState.types.includes('Poison')){
        const chip=Math.max(1,Math.floor(maxHp/8));
        hp-=chip; residualTotal+=chip;
        if(hp<=0)return {survives:false,hp:0,entry,directTotal,healingTotal,residualTotal,itemActivations};
      }
    }
  }
  return {survives:hp>0,hp,entry,directTotal,healingTotal,residualTotal,itemActivations};
}

function offenseOneMoveRange(params,targetState){
  const lo=offenseSimulateSequence({params,targetState,moveCount:1,roll:85});
  const hi=offenseSimulateSequence({params,targetState,moveCount:1,roll:100});
  return {
    minDirect:Math.min(lo.directTotal,hi.directTotal),
    maxDirect:Math.max(lo.directTotal,hi.directTotal),
    lo,hi
  };
}

function offenseKoJudge(params,targetState){
  const entry=offenseEntryHazardState(targetState.hp,targetState.types,params.defenderAbility);
  if(entry.hp<=0)return {text:'진입 시 쓰러짐',cls:'danger',detail:'함정 피해만으로 HP가 0이 됩니다.'};

  for(let n=1;n<=3;n++){
    const minSim=offenseSimulateSequence({params,targetState,moveCount:n,roll:85});
    const maxSim=offenseSimulateSequence({params,targetState,moveCount:n,roll:100});
    if(!minSim.survives)return {text:`확정 ${n}타`,cls:'danger',detail:`최저 난수 기준 ${n}회 안에 KO`};
    if(!maxSim.survives)return {text:`난수 ${n}타`,cls:'',detail:`최고 난수에서는 ${n}회 안에 KO`};
  }
  return {text:'3타 이상',cls:'safe',detail:'3회 최고 난수에도 생존'};
}

function offenseMinimumPoints(own,target,move,ctx,goalHits){
  if(ctx.source!=='self' || !['atk','spa'].includes(ctx.atkKey)){
    return {
      points:null,
      reason:ctx.source==='target'
        ?'속임수는 내 A/C 투자를 사용하지 않습니다.'
        :'이 기술은 A/C가 아닌 능력치를 사용합니다.'
    };
  }

  for(let points=0;points<=MAX_STAT_POINTS;points++){
    const targetState=offenseTargetState(target,ctx);
    const params=offenseBuildParams(own,target,move,ctx,points);
    const sim=offenseSimulateSequence({params,targetState,moveCount:goalHits,roll:85});
    if(!sim.survives)return {points,reason:null};
  }
  return {points:null,reason:`${ctx.atkKey==='atk'?'A':'C'}32P에서도 확정 ${goalHits}타 불가`};
}

function offenseMainBudgetFor(statKey,newPoints){
  const current=offenseCurrentPoints(statKey);
  const total=Array.from(document.querySelectorAll('#statsBody .points'))
    .reduce((sum,input)=>sum+clampPoints(input.value),0);
  return total-current+newPoints;
}

function applyOffenseMinimum(){
  if(!offenseLastMinimum || offenseLastMinimum.points===null || !offenseLastMinimum.statKey)return;
  const row=document.querySelector(`tr[data-stat="${offenseLastMinimum.statKey}"]`);
  if(!row)return;
  const input=row.querySelector('.points');
  input.value=offenseLastMinimum.points;
  input.dispatchEvent(new Event('input',{bubbles:true}));
}


function benchmarkDamageFromPowerIndex(powerIndex,defense,typeMult,roll=85){
  if(typeMult===0)return 0;
  let d=Math.floor(Math.floor((22*Math.max(0,powerIndex))/Math.max(1,defense))/50)+2;
  d=Math.floor(d*roll/100);

  if(typeMult===4)d*=4;
  else if(typeMult===2)d*=2;
  else if(typeMult===0.5)d=Math.floor(d/2);
  else if(typeMult===0.25)d=Math.floor(Math.floor(d/2)/2);

  return Math.max(1,d);
}

function requiredPowerIndexForGuaranteedOhko(hp,defense,typeMult){
  if(typeMult===0)return Infinity;

  let low=0;
  let high=1000;
  while(benchmarkDamageFromPowerIndex(high,defense,typeMult,85)<hp && high<20000000){
    high*=2;
  }
  if(high>=20000000 && benchmarkDamageFromPowerIndex(high,defense,typeMult,85)<hp)return Infinity;

  while(low+1<high){
    const mid=Math.floor((low+high)/2);
    if(benchmarkDamageFromPowerIndex(mid,defense,typeMult,85)>=hp)high=mid;
    else low=mid;
  }
  return high;
}

function offenseBulkBenchmarkRows(move,ctx,currentPower){
  const mode=document.getElementById('offenseBulkType')?.value||'h32';
  const rows=[];

  const variantMap={
    h0:{key:'h0',label:'무보정',hpPoints:0,defPoints:0},
    h2:{key:'h2',label:'H2',hpPoints:2,defPoints:0},
    h32:{key:'h32',label:'H32',hpPoints:32,defPoints:0},
    full32:{key:'full32',label:'H32+B/D32',hpPoints:32,defPoints:32}
  };
  const variants=[variantMap[mode]||variantMap.h32];

  offenseTargetEntities().forEach(entity=>{
    const data=dexData[entity.id];
    if(!data?.baseStats)return;

    variants.forEach(variant=>{
      const hp=calculateStat('hp',data.baseStats.hp,variant.hpPoints,1);
      const defense=calculateStat(ctx.defKey,data.baseStats[ctx.defKey],variant.defPoints,1);
      const durability=hp*defense;
      const typeMult=typeEffectiveness(move.type,data.types||[],'none',move.id,'none');
      const requiredPower=requiredPowerIndexForGuaranteedOhko(hp,defense,typeMult);

      if(!Number.isFinite(requiredPower))return;

      const ratio=requiredPower>0?currentPower/requiredPower:0;
      const distance=currentPower>0 && requiredPower>0
        ? Math.abs(Math.log(currentPower/requiredPower))
        : Infinity;

      rows.push({
        entity,
        variant,
        hp,
        defense,
        durability,
        typeMult,
        requiredPower,
        ratio,
        distance
      });
    });
  });

  rows.sort((a,b)=>a.requiredPower-b.requiredPower);
  return rows;
}

function applyOffenseBulkBenchmark(row,ctx){
  const targetSel=document.getElementById('offenseTargetSelect');
  if(!targetSel)return;

  // Ensure target exists even if the user's target-search text was filtering the select.
  if(!Array.from(targetSel.options).some(o=>o.value===row.entity.id)){
    document.getElementById('offenseTargetSearch').value='';
    populateOffenseTargetOptions('');
  }
  targetSel.value=row.entity.id;
  populateOffenseTargetAbilityOptions();

  document.getElementById('offenseTargetHpPoints').value=row.variant.hpPoints;
  document.getElementById('offenseTargetDefPoints').value=ctx.defKey==='def'?row.variant.defPoints:0;
  document.getElementById('offenseTargetSpdPoints').value=ctx.defKey==='spd'?row.variant.defPoints:0;
  document.getElementById('offenseTargetNature').value='1';
  document.getElementById('offenseTargetItem').value='none';
  document.getElementById('offenseTargetAbility').value='none';
  document.getElementById('offenseTargetStartHp').value='100';
  document.getElementById('offenseTargetStealthRock').checked=false;
  document.getElementById('offenseTargetSpikes').value='0';
  document.getElementById('offenseTargetDefRank').value='0';
  document.getElementById('offenseTargetGrounded').value='auto';

  renderOffensePanel();
}

function renderOffenseBulkBenchmark(move,ctx,currentPower){
  const currentEl=document.getElementById('offenseBulkCurrent');
  const listEl=document.getElementById('offenseBulkList');
  if(!currentEl||!listEl)return;

  currentEl.innerHTML=
    `현재 결정력 <b>${Math.round(currentPower).toLocaleString('ko-KR')}</b> · `
    + `${ctx.defKey==='def'?'물리 내구(HP×방어)':'특수 내구(HP×특방)'} 기준`;

  let rows=offenseBulkBenchmarkRows(move,ctx,currentPower);
  const view=document.getElementById('offenseBulkView')?.value||'near';

  if(view==='near' && rows.length){
    // Exact analogue to the speed panel: show a small window around the current power line.
    let insertion=rows.findIndex(r=>r.requiredPower>=currentPower);
    if(insertion<0)insertion=rows.length-1;
    const start=Math.max(0,insertion-7);
    const end=Math.min(rows.length,start+15);
    rows=rows.slice(Math.max(0,end-15),end);
  }

  if(!rows.length){
    listEl.innerHTML='<div class="offense-bulk-empty">표시할 내구 기준선이 없습니다.</div>';
    return;
  }

  listEl.innerHTML='';
  rows.forEach(row=>{
    const btn=document.createElement('button');
    btn.type='button';
    btn.className='offense-bulk-row';
    if(Math.abs(row.ratio-1)<=0.08)btn.classList.add('near-current');

    const ratioClass=row.ratio>=1?'over':'under';
    const ratioText=`현재 ${row.ratio.toFixed(2)}×`;
    const defenseLabel=ctx.defKey==='def'?'B':'D';

    btn.innerHTML=`
      <div class="offense-bulk-name">
        <strong>${row.entity.label}</strong>
        <span>${row.variant.label} · H${row.variant.hpPoints}/${defenseLabel}${row.variant.defPoints}</span>
      </div>
      <div class="offense-bulk-cell">
        <b>${row.durability.toLocaleString('ko-KR')}</b>
        내구지수
      </div>
      <div class="offense-bulk-cell">
        <b>×${formatMultiplier(row.typeMult)}</b>
        ${move.type} 상성
      </div>
      <div class="offense-bulk-cell bulk-hide-small">
        <b>${row.requiredPower.toLocaleString('ko-KR')}</b>
        확1 요구 결정력
      </div>
      <div class="offense-bulk-cell">
        <span class="offense-bulk-ratio ${ratioClass}">${ratioText}</span>
      </div>
    `;
    btn.addEventListener('click',()=>applyOffenseBulkBenchmark(row,ctx));
    listEl.appendChild(btn);
  });
}


function renderOffenseTargetDetail(target,ctx,targetState,params,entry){
  const rawDefense=targetState.defense;
  const effectiveDefense=offenseDefenseForHit(targetState,params,target);
  const bulk=Math.max(0,entry.hp)*effectiveDefense;
  const itemId=document.getElementById('offenseTargetItem')?.value||'none';
  const abilityId=document.getElementById('offenseTargetAbility')?.value||'none';

  const set=(id,value)=>{
    const el=document.getElementById(id);
    if(el)el.textContent=value;
  };
  set('offenseDetailMaxHp',targetState.hp);
  set('offenseDetailRawDefense',`${ctx.defKey==='def'?'B':'D'} ${rawDefense}`);
  set('offenseDetailEffectiveDefense',`${ctx.defKey==='def'?'B':'D'} ${effectiveDefense}`);
  set('offenseDetailBulkIndex',Math.round(bulk).toLocaleString('ko-KR'));

  const note=document.getElementById('offenseTargetEffectNote');
  if(note){
    const itemText=targetItemDetailedEffectText(itemId,ctx,target,params.terrain);
    const abilityText=targetAbilityEffectText(abilityId);
    const entryText=entry.total
      ? `진입 피해 ${entry.total} → ${entry.hp}/${targetState.hp}`
      : `진입 HP ${entry.hp}/${targetState.hp}`;
    note.innerHTML=
      `<b>도구</b> ${itemText}<br>`
      + `<b>특성</b> ${abilityText}<br>`
      + `<b>현재 적용</b> ${entryText} · 방어 랭크 ${params.defRank>=0?'+':''}${params.defRank}`
      + `${params.screen!=='none'?' · 벽 적용':''}${params.weather!=='none'?' · 날씨 적용':''}`;
  }
}

function renderOffensePanel(){
  const own=currentData();
  const moveId=document.getElementById('offenseMoveSelect')?.value;
  const targetId=document.getElementById('offenseTargetSelect')?.value;
  if(!own||!moveId||!targetId||!moveData[moveId]||!dexData[targetId]){
    offenseLastMinimum=null;
    return;
  }

  const move=moveData[moveId];
  refreshSpreadDamageNote(move,'offenseSpread','offenseSpreadNote');
  const target=dexData[targetId];
  updateOffenseMultiHitOptions(move);
  const ctx=offenseResolveMoveContext(move);
  const targetState=offenseTargetState(target,ctx);
  const params=offenseBuildParams(own,target,move,ctx);
  const range=offenseOneMoveRange(params,targetState);
  const ko=offenseKoJudge(params,targetState);
  const entry=offenseEntryHazardState(targetState.hp,targetState.types,params.defenderAbility);
  renderOffenseTargetDetail(target,ctx,targetState,params,entry);

  let currentPointsText='-';
  let statText='-';
  if(ctx.source==='target'){
    statText=`상대 공격 ${params.attack}`;
    currentPointsText='속임수 · 내 A/C 미사용';
  }else{
    const label=ctx.atkKey==='atk'?'공격':ctx.atkKey==='spa'?'특수공격':'방어';
    statText=`${label} ${params.attack}`;
    currentPointsText=`${ctx.atkKey==='atk'?'A':ctx.atkKey==='spa'?'C':'B'}${params.statPoints}P`;
  }

  document.getElementById('offenseOwnPokemon').textContent=currentFormLabel();
  document.getElementById('offenseOwnStat').textContent=statText;
  document.getElementById('offenseOwnPoints').textContent=currentPointsText;

  let totalBasePower=0;
  for(let i=1;i<=params.multiHits;i++)totalBasePower+=offenseHitBasePower(move,i);
  const powerIndex=Math.floor(params.attack*totalBasePower*params.stab*params.itemDamage*params.abilityBP*params.manual);
  document.getElementById('offensePowerIndex').textContent=powerIndex.toLocaleString('ko-KR');
  document.getElementById('offensePowerDetail').textContent=
    `총 위력 ${totalBasePower}${params.multiHits>1?` · ${params.multiHits}타`:''} · 자속 ×${params.stab.toFixed(1)} · 도구 ×${params.itemDamage.toFixed(2)}`;

  renderOffenseBulkBenchmark(move,ctx,powerIndex);

  const pctMin=targetState.hp?range.minDirect/targetState.hp*100:0;
  const pctMax=targetState.hp?range.maxDirect/targetState.hp*100:0;
  document.getElementById('offenseDamagePercent').textContent=
    `${pctMin.toFixed(1)} ~ ${pctMax.toFixed(1)}%`;
  document.getElementById('offenseDamageRange').textContent=
    `실피해 ${range.minDirect} ~ ${range.maxDirect} · 최대 HP ${targetState.hp}`;

  document.getElementById('offenseTypeMultiplier').textContent=`×${formatMultiplier(params.typeMult)}`;
  document.getElementById('offenseTypeDetail').textContent=
    `${move.type} → ${(target.types||[]).join(' / ')||'-'}`;

  const koEl=document.getElementById('offenseKoJudge');
  koEl.textContent=ko.text;
  koEl.className=`offense-ko ${ko.cls}`;
  document.getElementById('offenseKoDetail').textContent=ko.detail;

  document.getElementById('offenseTargetMaxHp').textContent=targetState.hp;
  document.getElementById('offenseTargetEntryHp').textContent=
    `${entry.hp}${entry.total?` · 함정 -${entry.total}`:''}`;
  document.getElementById('offenseTargetDefense').textContent=
    `${ctx.defKey==='def'?'방어':'특방'} ${offenseDefenseForHit(targetState,params,target)}`;
  const remainLow=Math.min(range.lo.hp,range.hi.hp);
  const remainHigh=Math.max(range.lo.hp,range.hi.hp);
  document.getElementById('offenseAfterOne').textContent=`${remainLow} ~ ${remainHigh}`;

  const item=sampleHeldItem();
  const itemNote=document.getElementById('offenseItemNote');
  const abilityLabel=document.getElementById('sampleAbility')?.selectedOptions[0]?.textContent||'특성 없음';
  const itemDisplay=document.getElementById('offenseSampleItem');
  const abilityDisplay=document.getElementById('offenseSampleAbility');
  if(itemDisplay)itemDisplay.textContent=item==='none'?'없음':itemLabel(item);
  if(abilityDisplay)abilityDisplay.textContent=abilityLabel;
  if(itemNote){
    itemNote.textContent=`왼쪽 샘플 사용 · ${itemEffectText(item,'attack')}`;
    itemNote.className=`item-effect-note ${(item!=='none'||params.ability!=='none')?'active':''}`;
  }

  const goalHits=Math.max(1,Math.min(3,Number(document.getElementById('offenseGoalHits').value)||1));
  const minResult=offenseMinimumPoints(own,target,move,ctx,goalHits);
  const minEl=document.getElementById('offenseMinPoints');
  const detailEl=document.getElementById('offenseMinDetail');
  const applyBtn=document.getElementById('offenseApplyPoints');

  offenseLastMinimum=null;
  if(minResult.points===null){
    minEl.textContent=minResult.reason||'계산 불가';
    detailEl.textContent='현재 기술의 계산 구조에서는 A/C 최소 투자 역산을 제공하지 않습니다.';
    applyBtn.disabled=true;
    applyBtn.textContent='현재 샘플에 적용';
  }else{
    const statKey=ctx.atkKey;
    const statLabel=statKey==='atk'?'A':'C';
    const current=offenseCurrentPoints(statKey);
    const diff=minResult.points-current;
    const budget=offenseMainBudgetFor(statKey,minResult.points);
    minEl.textContent=`${statLabel}${minResult.points}P`;
    const diffText=diff===0?'현재 투자와 동일':diff>0?`현재보다 +${diff}P`:`현재보다 ${Math.abs(diff)}P 줄여도 충족`;
    const budgetText=budget<=TOTAL_STAT_POINTS
      ? `현재 다른 투자 유지 시 총 ${budget}P`
      : `현재 다른 투자 유지 시 총 ${budget}P · 66P 초과`;
    detailEl.textContent=`확정 ${goalHits}타 최소 · ${diffText} · ${budgetText}`;
    applyBtn.disabled=false;
    applyBtn.textContent=`${statLabel}${minResult.points}P 적용`;
    offenseLastMinimum={points:minResult.points,statKey};
  }

  const warnings=[];
  if(SPECIAL_MOVE_WARNINGS.has(move.id))warnings.push('상황에 따라 위력이 변하는 기술이라 실제 전투와 차이가 날 수 있습니다.');
  if(ctx.atkKey==='def')warnings.push('바디프레스 계열은 A/C가 아니라 방어 수치를 사용합니다.');
  if(ctx.source==='target')warnings.push('속임수는 상대의 공격 능력치를 사용하므로 내 A/C 역산 대상이 아닙니다.');
  if(['psyshock','psystrike','secretsword'].includes(move.id))warnings.push('특수공격을 사용하지만 상대 특방이 아니라 방어를 공격합니다.');
  if(params.multiHits>1)warnings.push(`연속기 ${params.multiHits}타를 기술 1회로 계산하며, 반감열매·자뭉열매·기합의띠는 소비 후 재발동하지 않습니다.`);
  if(document.getElementById('offenseTargetStealthRock').checked)warnings.push(`스텔스록은 바위 상성에 따라 진입 피해 ${entry.srDamage}가 먼저 적용됩니다.`);
  document.getElementById('offenseWarning').textContent=
    warnings.length?warnings.join(' '):
    '현재 샘플의 능력 포인트와 성격을 그대로 사용합니다. 목표 역산은 최저 난수 기준으로 해당 타수 안에 반드시 KO 되는 최소 A/C를 찾습니다.';
}

function renderSpeedPanel() {
  const status=document.getElementById('speedStatus'), listEl=document.getElementById('speedList');
  if(!dexReady){status.textContent='Champions 종족값을 준비하는 중…'; listEl.innerHTML=''; return;}
  const p=currentData(); if(!p)return;

  const speRow=document.querySelector('tr[data-stat="spe"]');
  const points=Number(speRow.querySelector('.points').value)||0;
  const myRawSpeed=calculateStat('spe',p.baseStats.spe,points);
  const mySpeed=effectiveSpeed(myRawSpeed,speedHeldItem());
  const benchmarkItem=document.getElementById('speedBenchmarkItem')?.value||'none';
  const type=document.getElementById('speedType').value;
  const query=(document.getElementById('speedPokemonSearch')?.value||'').trim().toLowerCase();

  const benchmarkItemText=benchmarkItem==='none'?'도구 없음':itemLabel(benchmarkItem);
  status.textContent = (type==='uninvested'
    ? '무보정 = 성격 보정 없음 · S0P'
    : '준속 = 성격 보정 없음 · S32P / 최속 = +스피드 성격 · S32P')
    + ` · 기준선 ${benchmarkItemText}`;

  let rows=[];
  allSpeedEntities().forEach(entity=>{
    const d=dexData[entity.id]; if(!d)return;
    if(query){
      const en=((entity.item?.en||'') + ' ' + (entity.form?.suffix||'')).toLowerCase();
      const label=(entity.label||'').toLowerCase();
      if(!label.includes(query) && !en.includes(query) && !entity.id.includes(toID(query))) return;
    }

    if(type==='both'||type==='neutral')
      rows.push({entity,type:'준속',speed:effectiveSpeed(benchmarkSpeed(d.baseStats.spe,false,32),benchmarkItem)});
    if(type==='both'||type==='positive')
      rows.push({entity,type:'최속',speed:effectiveSpeed(benchmarkSpeed(d.baseStats.spe,true,32),benchmarkItem)});
    if(type==='uninvested')
      rows.push({entity,type:'무보정',speed:effectiveSpeed(benchmarkSpeed(d.baseStats.spe,false,0),benchmarkItem)});
  });

  rows.push({mine:true,entity:{label:currentFormLabel()},type:`현재 S${points}P`,speed:mySpeed});
  rows.sort((a,b)=>b.speed-a.speed || (a.mine?-1:1));

  if(!query && document.getElementById('speedView').value==='near'){
    const idx=rows.findIndex(x=>x.mine);
    rows=rows.slice(Math.max(0,idx-6),Math.min(rows.length,idx+7));
  }

  listEl.innerHTML='';
  if(query && rows.length===1){
    const empty=document.createElement('div');
    empty.className='speed-status';
    empty.textContent='검색 결과가 없습니다.';
    listEl.appendChild(empty);
  }

  rows.forEach(r=>{
    const btn=document.createElement('button'); btn.type='button';
    btn.className='speed-row'+(r.mine?' mine':'');
    if(!r.mine){
      btn.dataset.entityId=r.entity.id||'';
      btn.dataset.benchmarkType=r.type||'';
    }
    if(selectedBenchmark && !r.mine &&
       selectedBenchmark.entity.id===r.entity.id && selectedBenchmark.type===r.type) {
      btn.classList.add('selected');
    }

    const detail = r.mine
      ? `${r.type}${speedHeldItem()!=='none' ? ` · ${itemLabel(speedHeldItem())}` : ''}`
      : `${r.type==='무보정' ? '무보정 · S0P' : `${r.type} · S32P`}${benchmarkItem!=='none' ? ` · ${itemLabel(benchmarkItem)}` : ''}`;
    btn.innerHTML=`<div class="speed-number">${r.speed}</div>
      <div class="speed-desc"><strong>${r.entity.label}</strong><span>${detail}</span></div>`;
    if(!r.mine) btn.addEventListener('click',()=>selectBenchmark(r));
    listEl.appendChild(btn);
  });
}
function minPointsForEffectiveSpeed(base,target,itemId){
  for(let p=0;p<=MAX_STAT_POINTS;p++){
    const raw=calculateStat('spe',base,p);
    if(effectiveSpeed(raw,itemId)>target)return p;
  }
  return -1;
}
function selectBenchmark(r){
  selectedBenchmark=r;
  const p=currentData(), speRow=document.querySelector('tr[data-stat="spe"]');
  const currentPoints=Number(speRow.querySelector('.points').value)||0;
  const rawCurrent=calculateStat('spe',p.baseStats.spe,currentPoints);
  const current=effectiveSpeed(rawCurrent,speedHeldItem());
  const need=minPointsForEffectiveSpeed(p.baseStats.spe,r.speed,speedHeldItem());
  const box=document.getElementById('speedTarget');
  box.querySelector('.name').textContent=`${r.entity.label} ${r.type} · ${r.speed}`;
  let result='';
  if(current>r.speed) {
    result=`현재 적용 스피드 <b>${current}</b> (실능치 ${rawCurrent})<br>이미 추월 중입니다.<br>추월 최소 기준: <b>${r.speed+1}</b>`;
  } else if(need===-1) {
    result=`추월 최소 기준: <b>${r.speed+1}</b><br>현재 성격·도구에서는 <b>S32P로도 추월 불가</b>`;
  } else {
    const rawAtNeed=calculateStat('spe',p.baseStats.spe,need);
    result=`추월 최소 기준: <b>${r.speed+1}</b><br>필요 최소 S 능력 포인트: <b>${need}P</b><br>
      실능치 <b>${rawAtNeed}</b> → 도구 적용 <b>${effectiveSpeed(rawAtNeed,speedHeldItem())}</b>`;
  }
  box.querySelector('.result').innerHTML=result;
  renderSpeedPanel();
}

function resetSpeedTarget(){
  const box=document.getElementById('speedTarget');
  box.querySelector('.name').textContent='비교 대상을 선택하세요';
  box.querySelector('.result').textContent='다른 포켓몬의 기준선을 누르면 추월 최소 실능치와 S 능력 포인트를 계산합니다.';
}

async function loadKoreanNames(){
  const applyNames = txt => {
    let loaded=0;
    txt.split(/\r?\n/).slice(1).forEach(line=>{
      // pokemon_species_id,local_language_id,name,genus
      const parts=line.split(',');
      if(parts.length<3 || parts[1]!=='3') return;
      const dex=Number(parts[0]);
      const name=(parts[2]||'').replace(/^"|"$/g,'').replace(/""/g,'"').trim();
      if(dex && name){ koreanNames[dex]=name; loaded++; }
    });
    return loaded;
  };

  try{
    const res=await PokeData.fetch('speciesNamesCsv');
    if(!res.ok)throw new Error('species name fetch failed');
    const loaded=applyNames(await res.text());
    if(!loaded)throw new Error('no Korean species names parsed');
  }catch(e){
    // Fallback to the older compact Korean list.
    try{
      const res=await PokeData.fetch('legacyKoreanNames');
      if(res.ok){
        const txt=await res.text();
        txt.split(/\r?\n/).slice(1).forEach(line=>{
          const comma=line.indexOf(','); if(comma<0)return;
          const dex=Number(line.slice(0,comma));
          const name=line.slice(comma+1).trim();
          if(dex&&name)koreanNames[dex]=name;
        });
      }
    }catch(_){}
  }

  populatePokemonOptions(pokemonSearch.value);
  updateFormOptions(false);
  populateAttackPokemonOptions(document.getElementById('attackPokemonSearch')?.value||'');
  populateOffenseTargetOptions(document.getElementById('offenseTargetSearch')?.value||'');
  renderSpeedPanel();
  renderPokedex();
}

function pokeApiDexEntry(data,fallbackName=''){
  const bs={};
  (data.stats||[]).forEach(s=>{
    const map={'hp':'hp','attack':'atk','defense':'def','special-attack':'spa','special-defense':'spd','speed':'spe'};
    const key=map[s.stat?.name];
    if(key)bs[key]=s.base_stat;
  });
  if(Object.keys(bs).length!==6)return null;
  return {
    name:data.name||fallbackName,
    baseStats:bs,
    types:(data.types||[]).map(x=>{
      const n=x.type?.name||'';
      return n?n[0].toUpperCase()+n.slice(1):'';
    }).filter(Boolean),
    abilities:(data.abilities||[]).map(x=>x.ability?.name||'').filter(Boolean)
  };
}

function pokeApiMegaSlug(formId){
  const specials={meowsticmmega:'meowstic-male-mega',floettemega:'floette-eternal-mega'};
  if(specials[formId])return specials[formId];
  if(formId.endsWith('megax'))return `${formId.slice(0,-5)}-mega-x`;
  if(formId.endsWith('megay'))return `${formId.slice(0,-5)}-mega-y`;
  if(formId.endsWith('mega'))return `${formId.slice(0,-4)}-mega`;
  return formId;
}

async function loadDexData(){
  const status=document.getElementById('speedStatus');
  let showdownLoaded=false;

  try{
    const res=await PokeData.fetch('showdownPokedex');
    if(!res.ok)throw new Error('showdown fetch failed');
    const all=await res.json();

    championsRoster.forEach(item=>{
      const d=all[toID(item.en)];
      if(d&&d.baseStats)dexData[toID(item.en)]={
        name:d.name||item.en,baseStats:d.baseStats,types:d.types||[],
        abilities:[...new Set(Object.values(d.abilities||{}))]
      };
    });

    Object.entries(megaFormsByBase).forEach(([baseEn,forms])=>{
      forms.forEach(form=>{
        const candidates=form.id==='meowsticmmega'
          ? ['meowsticmmega','meowsticmega','meowsticfmega']:[form.id];
        const foundId=candidates.find(id=>all[id]&&all[id].baseStats);
        if(foundId){
          const d=all[foundId];
          dexData[form.id]={
            name:d.name||form.id,baseStats:d.baseStats,types:d.types||[],
            abilities:[...new Set(Object.values(d.abilities||{}))]
          };
        }
      });
    });
    showdownLoaded=true;
  }catch(e){
    reportDataIssue('dex-showdown',e);
  }

  if(!showdownLoaded){
    status.textContent='기본 데이터 연결 재시도 중…';

    for(let i=0;i<championsRoster.length;i+=12){
      const batch=championsRoster.slice(i,i+12);
      await Promise.allSettled(batch.map(async item=>{
        try{
          const slug=item.en.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
          const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`);
          if(!res.ok)return;
          const entry=pokeApiDexEntry(await res.json(),item.en);
          if(entry)dexData[toID(item.en)]=entry;
        }catch(e){ reportDataIssue(`dex-base-${item.en}`,e); }
      }));
    }

    const forms=Object.values(megaFormsByBase).flat();
    for(let i=0;i<forms.length;i+=10){
      const batch=forms.slice(i,i+10);
      await Promise.allSettled(batch.map(async form=>{
        if(dexData[form.id])return;
        try{
          const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeApiMegaSlug(form.id)}`);
          if(!res.ok)return;
          const entry=pokeApiDexEntry(await res.json(),form.id);
          if(entry)dexData[form.id]=entry;
        }catch(e){ reportDataIssue(`dex-mega-${form.id}`,e); }
      }));
    }
  }

  dexReady=true;
  const loaded=championsRoster.filter(x=>dexData[toID(x.en)]).length;
  const megaLoaded=Object.values(megaFormsByBase).flat().filter(f=>dexData[f.id]).length;
  status.textContent=`Champions 기본 ${loaded}/208 · 메가폼 ${megaLoaded}개 로드`;
  updateFormOptions(false);
  populateAttackPokemonOptions(document.getElementById('attackPokemonSearch')?.value||'');
  populateOffenseTargetOptions(document.getElementById('offenseTargetSearch')?.value||'');
  populateSampleAbility();
  render();
  renderPartyAnalysis();
  renderPokedex();
}

async function loadMoveKoreanNames(){
  const parseCsvFieldLine = line => {
    // These two PokeAPI CSVs only need the first 2 commas separated reliably.
    const first=line.indexOf(',');
    if(first<0)return null;
    const second=line.indexOf(',',first+1);
    if(second<0)return null;
    return [
      line.slice(0,first),
      line.slice(first+1,second),
      line.slice(second+1).replace(/^"|"$/g,'').replace(/""/g,'"')
    ];
  };

  try{
    const [movesRes,namesRes]=await Promise.all([
      PokeData.fetch('movesCsv'),
      PokeData.fetch('moveNamesCsv')
    ]);
    if(!movesRes.ok||!namesRes.ok)throw new Error('move Korean source failed');

    const movesTxt=await movesRes.text();
    const namesTxt=await namesRes.text();
    const idToIdentifier={};

    movesTxt.split(/\r?\n/).slice(1).forEach(line=>{
      const first=line.indexOf(',');
      if(first<0)return;
      const second=line.indexOf(',',first+1);
      const id=line.slice(0,first);
      const identifier=(second<0?line.slice(first+1):line.slice(first+1,second)).trim();
      if(id&&identifier)idToIdentifier[id]=identifier;
    });

    namesTxt.split(/\r?\n/).slice(1).forEach(line=>{
      const parsed=parseCsvFieldLine(line);
      if(!parsed)return;
      const [moveId,langId,name]=parsed;
      if(langId!=='3')return;
      const ident=idToIdentifier[moveId];
      if(ident&&name)koreanMoveNames[toID(ident)]=name.trim();
    });

    populateAttackMoveOptions(document.getElementById('attackMoveSearch')?.value||'');
    populateOffenseMoveOptions(document.getElementById('offenseMoveSearch')?.value||'');
    populateSampleMoveOptions();
    renderPartyAnalysis();
  }catch(e){
    // English remains usable even if translation data cannot load.
  }
}

async function loadMoveData(){
  const sel=document.getElementById('attackMoveSelect');
  try{
    const res=await PokeData.fetch('showdownMoves');
    if(!res.ok)throw new Error('move data failed');
    const all=await res.json();
    Object.entries(all).forEach(([id,m])=>{
      if(!m||!m.name)return;
      moveData[id]={
        id,name:m.name,type:m.type||'Normal',
        category:m.category||'Status',basePower:Number(m.basePower)||0,
        target:m.target||'normal',
        flags:m.flags||{},
        multihit:m.multihit||null,
        willCrit:!!m.willCrit,
        critRatio:Number(m.critRatio)||0,
        overrideOffensiveStat:m.overrideOffensiveStat||null,
        overrideDefensiveStat:m.overrideDefensiveStat||null,
        overrideOffensivePokemon:m.overrideOffensivePokemon||null,
        ignoreNegativeOffensive:!!m.ignoreNegativeOffensive,
        ignorePositiveDefensive:!!m.ignorePositiveDefensive
      };
    });

    // Champions에서 직접 바뀐 단순 basePower 값을 가능한 범위에서 덮어쓴다.
    try{
      const modRes=await PokeData.fetch('championsMoves');
      if(modRes.ok){
        const txt=await modRes.text();
        const re=/(?:^|\n)([a-z0-9]+):\s*\{\s*inherit:\s*true,\s*basePower:\s*(\d+)/g;
        let m;
        while((m=re.exec(txt))){
          if(moveData[m[1]])moveData[m[1]].basePower=Number(m[2]);
        }
      }
    }catch(e){ reportDataIssue('champions-move-overrides',e); }

    moveReady=true;
    populateAttackMoveOptions('');
    populateOffenseMoveOptions('');
    populateSampleMoveOptions();
    renderPartyAnalysis();
  }catch(e){
    reportDataIssue('move-data',e);
    sel.innerHTML='<option value="">기술 데이터를 불러오지 못했습니다.</option>';
  }
}

populateSampleHeldItemSelect('');
populateHeldItemSelect('attackItem',ATTACK_ITEM_GROUPS,'none');
populateOffenseTargetItemOptions();
populateSimpleSelect('attackerAbility',ATTACKER_ABILITY_OPTIONS);
populateOffenseTargetAbilityOptions();

function fillRankSelect(id,defaultValue='0'){
  const sel=document.getElementById(id);
  for(let r=-6;r<=6;r++){
    const o=document.createElement('option'); o.value=r; o.textContent=`${r>=0?'+':''}${r}`;
    sel.appendChild(o);
  }
  sel.value=defaultValue;
}
const attackRankSelect=document.getElementById('attackRank');
fillRankSelect('attackRank','0');
fillRankSelect('defenderRank','0');
fillRankSelect('foulPlayTargetRank','0');
fillRankSelect('offenseRank','0');
fillRankSelect('offenseTargetDefRank','0');
fillRankSelect('offenseFoulPlayRank','0');

document.getElementById('offenseTargetSearch').addEventListener('input',e=>populateOffenseTargetOptions(e.target.value));
document.getElementById('offenseTargetSelect').addEventListener('change',()=>{
  populateOffenseTargetAbilityOptions();
  renderOffensePanel();
});
document.getElementById('offenseMoveSearch').addEventListener('input',e=>populateOffenseMoveOptions(e.target.value));
document.getElementById('offenseMoveSelect').addEventListener('change',()=>{
  const move=moveData[document.getElementById('offenseMoveSelect').value];
  if(move)updateOffenseMultiHitOptions(move);
  renderOffensePanel();
});
[
  'offenseRank','offenseStatus','offenseGrounded','offenseCritical',
  'offenseAutoStab','offenseSpread','offenseExtraMultiplier','offenseMultiHitCount','offenseFoulPlayRank',
  'offenseTargetHpPoints','offenseTargetDefPoints','offenseTargetSpdPoints','offenseTargetNature',
  'offenseTargetItem','offenseTargetAbility','offenseTargetStartHp','offenseTargetStealthRock',
  'offenseTargetSpikes','offenseTargetDefRank','offenseTargetGrounded','offenseWeather',
  'offenseTerrain','offenseScreen','offenseGoalHits','offenseBulkView','offenseBulkType'
].forEach(id=>{
  const el=document.getElementById(id);
  if(!el)return;
  el.addEventListener('input',renderOffensePanel);
  el.addEventListener('change',renderOffensePanel);
});
document.getElementById('offenseApplyPoints').addEventListener('click',applyOffenseMinimum);

document.getElementById('attackPokemonSearch').addEventListener('input',e=>populateAttackPokemonOptions(e.target.value));
document.getElementById('attackPokemonSelect').addEventListener('change',renderAttackBenchmark);
document.getElementById('attackMoveSearch').addEventListener('input',e=>populateAttackMoveOptions(e.target.value));
document.getElementById('attackMoveSelect').addEventListener('change',()=>{
  const move=moveData[document.getElementById('attackMoveSelect').value];
  if(move)updateMultiHitOptions(move);
  renderAttackBenchmark();
});
[
  'attackNature','attackPoints','attackRank','attackItem','attackAutoStab','attackSpread','attackCritical',
  'attackExtraMultiplier','surviveHits','residualEffect','attackerAbility','attackerStatus','attackerGrounded',
  'defenderRank','defenderGrounded','startHpPercent','stealthRock','spikesLayers',
  'battleWeather','battleTerrain','battleScreen','multiHitCount','foulPlayTargetRank'
].forEach(id=>{
  const el=document.getElementById(id);
  el.addEventListener('input',renderAttackBenchmark);
  el.addEventListener('change',renderAttackBenchmark);
});

pokemonSearch.addEventListener('input',()=>populatePokemonOptions(pokemonSearch.value));
document.getElementById('sampleVaultSave').addEventListener('click',saveCurrentSampleToVault);
document.getElementById('sampleVaultLoad').addEventListener('click',loadSelectedSampleVault);
document.getElementById('sampleVaultClear').addEventListener('click',clearSelectedSampleVault);

pokemonSelect.addEventListener('change',()=>{
  updateFormOptions(true);
  selectedBenchmark=null;
  resetSpeedTarget();
  render();
});
pokemonFormSelect.addEventListener('change',()=>{
  const base=pokemonSelect.value;
  if(pokemonFormSelect.value!=='base' && !isMegaFormForBase(base,pokemonFormSelect.value)){
    pokemonFormSelect.value='base';
  }
  syncHeldItemWithMegaForm(true);
  selectedBenchmark=null;
  resetSpeedTarget();
  render();
});
natureSelect.addEventListener('change',render);
document.getElementById('sampleItemSearch').addEventListener('input',e=>{
  populateSampleHeldItemSelect(e.target.value);
});

document.getElementById('heldItem').addEventListener('change',()=>{
  syncMegaFormFromHeldItem();
  selectedBenchmark=null;
  resetSpeedTarget();
  render();
});
document.getElementById('sampleAbility').addEventListener('change',render);

document.getElementById('speedView').addEventListener('change',renderSpeedPanel);
document.getElementById('speedBenchmarkItem').addEventListener('change',()=>{ selectedBenchmark=null; resetSpeedTarget(); renderSpeedPanel(); });
document.getElementById('speedType').addEventListener('change',()=>{
  selectedBenchmark=null;
  resetSpeedTarget();
  renderSpeedPanel();
});
document.getElementById('speedPokemonSearch').addEventListener('input',()=>{
  selectedBenchmark=null;
  resetSpeedTarget();
  renderSpeedPanel();
});

natureSelect.value='0';
populatePokemonOptions();
pokemonSelect.value='Garchomp';
updateFormOptions(true);
populateAttackPokemonOptions('');
populateOffenseTargetOptions('');
populateOffenseMoveOptions('');
populateSampleMoveOptions();
bindPokedexControls();
renderPokedex();
Promise.allSettled([loadKoreanNames(),loadDexData(),loadMoveData(),loadMoveKoreanNames(),loadAbilityKoreanNames(),loadChampionsItems(),loadItemKoreanNames()]);
render();

(() => {
  const mobileQuery = window.matchMedia('(max-width:720px)');
  const samplePanel = document.getElementById('currentSamplePanel');
  const persistentSample = document.getElementById('mobilePersistentSample');
  const persistentSentinel = document.getElementById('mobilePersistentSentinel');
  const persistentPlaceholder = document.getElementById('mobilePersistentPlaceholder');
  const editButton = document.getElementById('mobilePersistentEdit');
  const nameEl = document.getElementById('mobilePersistentName');
  const metaEl = document.getElementById('mobilePersistentMeta');
  const pointsEl = document.getElementById('mobilePersistentPoints');

  const quickEditor = document.getElementById('mobileQuickEditor');
  const quickClose = document.getElementById('mobileQuickClose');
  const quickFullEdit = document.getElementById('mobileQuickFullEdit');
  const quickBudget = document.getElementById('mobileQuickBudget');

  const TAB_TO_FOLD = {
    pokedex:'pokedexFold',
    vault:'sampleVaultFold',
    durability:'durabilityFold',
    offense:'offenseFold',
    speed:'speedFold'
  };

  const NAV_TO_TAB = {
    sample:'sample',
    pokedexFold:'pokedex',
    sampleVaultFold:'vault',
    durabilityFold:'durability',
    offenseFold:'offense',
    speedFold:'speed'
  };

  function selectedText(id, fallback='-') {
    const el = document.getElementById(id);
    return el?.selectedOptions?.[0]?.textContent?.split(' · ')[0]?.trim() || fallback;
  }

  function compactMoveText(selectId, slotNo) {
    const el = document.getElementById(selectId);
    const raw = el?.selectedOptions?.[0]?.textContent?.trim() || '';
    if (!raw || /선택|미선택/.test(raw)) return `${slotNo}. -`;

    let name = raw.split(' · ')[0].trim();
    name = name.replace(/\s*\([^)]*\)\s*$/,'').trim();
    return `${slotNo}. ${name || '-'}`;
  }

  function sourcePointInput(statKey) {
    const row = document.querySelector(`#statsBody tr[data-stat="${statKey}"]`);
    return row?.querySelector('.points') || null;
  }

  function syncSelectOptions(sourceId, proxyId) {
    const source = document.getElementById(sourceId);
    const proxy = document.getElementById(proxyId);
    if (!source || !proxy) return;

    const sourceSignature = Array.from(source.options)
      .map(o => `${o.value}\u0001${o.textContent}`)
      .join('\u0002');

    if (proxy.dataset.optionSignature !== sourceSignature) {
      const frag = document.createDocumentFragment();
      Array.from(source.options).forEach(option => {
        const clone = document.createElement('option');
        clone.value = option.value;
        clone.textContent = option.textContent;
        clone.disabled = option.disabled;
        frag.appendChild(clone);
      });
      proxy.replaceChildren(frag);
      proxy.dataset.optionSignature = sourceSignature;
    }
    proxy.value = source.value;
  }

  function syncQuickEditorFromSources() {
    const selectPairs = [
      ['pokemonForm','mobileQuickForm'],
      ['nature','mobileQuickNature'],
      ['sampleAbility','mobileQuickAbility'],
      ['heldItem','mobileQuickItem'],
      ['sampleMove1','mobileQuickMove1'],
      ['sampleMove2','mobileQuickMove2'],
      ['sampleMove3','mobileQuickMove3'],
      ['sampleMove4','mobileQuickMove4']
    ];
    selectPairs.forEach(([sourceId, proxyId]) => syncSelectOptions(sourceId, proxyId));

    document.querySelectorAll('#mobileQuickEditor [data-stat-key]').forEach(proxy => {
      const source = sourcePointInput(proxy.dataset.statKey);
      if (source && document.activeElement !== proxy) proxy.value = source.value;
    });

    const used = document.getElementById('evUsed')?.textContent?.trim() || '0';
    const remain = document.getElementById('evRemain')?.textContent?.trim() || '66';
    if (quickBudget) quickBudget.textContent = `사용 ${used}/66P · 남음 ${remain}P`;

    const megaNote=document.getElementById('mobileQuickMegaNote');
    const formSource=document.getElementById('pokemonForm');
    if(megaNote && formSource){
      const isMega=formSource.value!=='base';
      const selected=formSource.selectedOptions?.[0]?.textContent?.trim()||'기본';
      megaNote.textContent=isMega
        ? `${selected} · 대응 메가스톤 자동 장착`
        : (formSource.disabled ? '현재 포켓몬은 메가진화 폼 없음' : '메가폼 선택 시 메가스톤 자동 장착');
    }
  }


  function syncPersistentPlaceholderHeight() {
    if (!persistentSample || !persistentPlaceholder) return;
    if (!persistentSample.classList.contains('is-floating')) {
      persistentPlaceholder.style.height = '0px';
      persistentPlaceholder.classList.remove('is-active');
      return;
    }
    persistentPlaceholder.style.height = `${persistentSample.offsetHeight}px`;
    persistentPlaceholder.classList.add('is-active');
  }

  function setPersistentFloating(floating) {
    if (!persistentSample) return;
    const shouldFloat = !!floating && mobileQuery.matches;
    persistentSample.classList.toggle('is-floating', shouldFloat);
    document.body.classList.toggle('mobile-sample-floating', shouldFloat);
    syncPersistentPlaceholderHeight();
  }

  function setupPersistentFloating() {
    if (!persistentSample || !persistentSentinel) return;

    const evaluate = () => {
      if (!mobileQuery.matches) {
        setPersistentFloating(false);
        return;
      }
      const rect = persistentSentinel.getBoundingClientRect();
      setPersistentFloating(rect.top < (7 + (window.visualViewport?.offsetTop || 0)));
    };

    window.addEventListener('scroll', evaluate, {passive:true});
    window.addEventListener('resize', () => {
      evaluate();
      syncPersistentPlaceholderHeight();
    }, {passive:true});
    window.visualViewport?.addEventListener('resize', syncPersistentPlaceholderHeight, {passive:true});
    mobileQuery.addEventListener?.('change', evaluate);

    if ('ResizeObserver' in window) {
      const ro = new ResizeObserver(syncPersistentPlaceholderHeight);
      ro.observe(persistentSample);
    }

    evaluate();
  }

  function setQuickEditorOpen(open) {
    if (!quickEditor || !editButton) return;
    quickEditor.hidden = !open;
    document.getElementById('mobilePersistentSample')?.classList.toggle('quick-edit-open', open);
    document.body.classList.toggle('mobile-quick-open', open);
    editButton.setAttribute('aria-expanded', String(open));
    editButton.textContent = open ? '닫기' : '수정';
    if (open) {
      syncQuickEditorFromSources();
      window.setTimeout(syncQuickEditorFromSources, 100);
    }
  }

  function bindQuickEditor() {
    document.querySelectorAll('#mobileQuickEditor [data-source-select]').forEach(proxy => {
      proxy.addEventListener('change', () => {
        const source = document.getElementById(proxy.dataset.sourceSelect);
        if (!source) return;
        source.value = proxy.value;
        source.dispatchEvent(new Event('change', {bubbles:true}));
        window.setTimeout(() => {
          syncPersistentSample();
          syncQuickEditorFromSources();
        }, 0);
      });
    });

    document.querySelectorAll('#mobileQuickEditor [data-stat-key]').forEach(proxy => {
      const applyPoint = () => {
        const source = sourcePointInput(proxy.dataset.statKey);
        if (!source) return;
        const value = Math.max(0, Math.min(32, Math.floor(Number(proxy.value) || 0)));
        proxy.value = value;
        source.value = value;
        source.dispatchEvent(new Event('input', {bubbles:true}));
        window.setTimeout(() => {
          syncPersistentSample();
          syncQuickEditorFromSources();
        }, 0);
      };
      proxy.addEventListener('input', applyPoint);
      proxy.addEventListener('change', applyPoint);
    });

    const sourceSelectIds = [
      'pokemonForm','nature','sampleAbility','heldItem',
      'sampleMove1','sampleMove2','sampleMove3','sampleMove4'
    ];

    if ('MutationObserver' in window) {
      const optionObserver = new MutationObserver(() => {
        if (!quickEditor?.hidden) syncQuickEditorFromSources();
      });
      sourceSelectIds.forEach(id => {
        const source = document.getElementById(id);
        if (source) optionObserver.observe(source, {childList:true, subtree:true});
      });
    }
  }

  function pointSummary() {
    const p = {hp:0,atk:0,def:0,spa:0,spd:0,spe:0};
    document.querySelectorAll('#statsBody tr').forEach(row => {
      const key = row.dataset.stat;
      if (!key || !(key in p)) return;
      p[key] = Math.max(0, Math.min(32, Number(row.querySelector('.points')?.value) || 0));
    });
    return `H${p.hp} A${p.atk} B${p.def} C${p.spa} D${p.spd} S${p.spe}`;
  }

  function syncPersistentSample() {
    if (!nameEl || !metaEl || !pointsEl) return;

    const name = document.getElementById('pokemonName')?.textContent?.trim() || '포켓몬 선택';
    const nature = selectedText('nature', '성격 -');
    const ability = selectedText('sampleAbility', '특성 -');
    const item = selectedText('heldItem', '도구 없음');
    const used = document.getElementById('evUsed')?.textContent?.trim() || '0';

    nameEl.textContent = name;
    metaEl.textContent = `${nature} · ${ability} · ${item}`;
    pointsEl.textContent = `${pointSummary()} · ${used}/66P`;

    document.querySelectorAll('#mobilePersistentMoves .mobile-move-chip').forEach((chip,index) => {
      const slotNo=index+1;
      const text=compactMoveText(`sampleMove${slotNo}`,slotNo);
      chip.textContent=text;
      chip.title=text.replace(/^\d+\.\s*/,'');
    });

    if (quickEditor && !quickEditor.hidden) syncQuickEditorFromSources();
  }

  function setActiveNav(tab) {
    document.querySelectorAll('.mobile-bottom-nav button').forEach(btn => {
      const btnTab = NAV_TO_TAB[btn.dataset.mobileTarget] || 'sample';
      const active = btnTab === tab;
      btn.classList.toggle('active', active);
      if (active) btn.setAttribute('aria-current', 'page');
      else btn.removeAttribute('aria-current');
    });
  }

  function scrollToWorkspace() {
    const layout = document.querySelector('.layout');
    if (!layout) return;
    const top = Math.max(0, layout.getBoundingClientRect().top + window.scrollY - 76);
    window.scrollTo({top, behavior:'smooth'});
  }

  function setMobileTab(tab, {scroll=true, save=true}={}) {
    if (!['sample','pokedex','vault','durability','offense','speed'].includes(tab)) tab='sample';
    setQuickEditorOpen(false);

    document.body.dataset.mobileTab = tab;
    document.querySelectorAll('.analysis-fold').forEach(fold => {
      fold.classList.remove('mobile-tab-active');
    });

    if (tab !== 'sample') {
      const fold = document.getElementById(TAB_TO_FOLD[tab]);
      if (fold) {
        fold.open = true;
        fold.classList.add('mobile-tab-active');
      }
    }

    setActiveNav(tab);

    if (save) {
      try { localStorage.setItem('pokemonChampionsStatLab.mobileTab', tab); } catch (_) {}
    }
    if (scroll) scrollToWorkspace();
  }

  function restoreMobileTab() {
    if (!mobileQuery.matches) {
      delete document.body.dataset.mobileTab;
      document.querySelectorAll('.analysis-fold').forEach(fold => {
        fold.classList.remove('mobile-tab-active');
      });
      return;
    }

    let tab='sample';
    try {
      const saved=localStorage.getItem('pokemonChampionsStatLab.mobileTab');
      if (saved) tab=saved;
    } catch (_) {}

    setMobileTab(tab,{scroll:false,save:false});
  }

  document.querySelectorAll('.mobile-bottom-nav button').forEach(button => {
    button.addEventListener('click', () => {
      const tab = NAV_TO_TAB[button.dataset.mobileTarget] || 'sample';
      setMobileTab(tab);
    });
  });

  editButton?.addEventListener('click', () => {
    setQuickEditorOpen(quickEditor?.hidden !== false);
  });
  quickClose?.addEventListener('click', () => setQuickEditorOpen(false));
  quickFullEdit?.addEventListener('click', () => {
    setQuickEditorOpen(false);
    setMobileTab('sample');
  });

  const mutationTargets = [
    document.getElementById('pokemonName'),
    document.getElementById('evUsed'),
    document.getElementById('sampleAbility'),
    document.getElementById('heldItem'),
    document.getElementById('sampleMove1'),
    document.getElementById('sampleMove2'),
    document.getElementById('sampleMove3'),
    document.getElementById('sampleMove4')
  ].filter(Boolean);

  if ('MutationObserver' in window) {
    const observer = new MutationObserver(syncPersistentSample);
    mutationTargets.forEach(el => observer.observe(el, {
      childList:true,
      subtree:true,
      characterData:true,
      attributes:true
    }));
  }

  samplePanel?.addEventListener('input', () => window.setTimeout(syncPersistentSample,0));
  samplePanel?.addEventListener('change', () => window.setTimeout(syncPersistentSample,0));

  mobileQuery.addEventListener?.('change', restoreMobileTab);

  bindQuickEditor();
  setupPersistentFloating();
  restoreMobileTab();
  syncPersistentSample();
  syncQuickEditorFromSources();
  window.setTimeout(syncPersistentSample,500);
  window.setTimeout(syncPersistentSample,1600);
})();

(() => {
  const CURRENT_APP_VERSION='v19.0';
  const INSTALL_DISMISS_KEY='pokemonChampionsStatLab.installPromptDismissed.v1';
  const $=id=>document.getElementById(id);
  const ui={
    installBtn:$('pwaInstallBtn'),pwaStatus:$('pwaStatus'),version:$('appVersionStatus'),
    updateStatus:$('appUpdateStatus'),updateBtn:$('applyAppUpdate'),
    mobileVersion:$('mobileVersionStatus'),mobileUpdateStatus:$('mobileUpdateStatus'),
    mobileUpdateBtn:$('mobileApplyUpdate'),installBar:$('smartInstallBar'),
    installTitle:$('smartInstallTitle'),installHint:$('smartInstallHint'),
    installAction:$('smartInstallAction'),installDismiss:$('smartInstallDismiss'),
    guide:$('installGuideModal'),guideTitle:$('installGuideTitle'),
    guideBody:$('installGuideBody'),guideClose:$('installGuideClose')
  };

  const isMobile=/android|iphone|ipad|ipod/i.test(navigator.userAgent||'') ||
    window.matchMedia?.('(max-width:720px)').matches;
  const isNative=window.Capacitor?.isNativePlatform?.()===true ||
    location.protocol==='capacitor:';
  const isStandalone=isNative || window.matchMedia?.('(display-mode: standalone)').matches ||
    navigator.standalone===true;

  let deferredPrompt=null,registrationRef=null,waitingWorker=null,serverVersion=null;
  let refreshing=false,applyingUpdate=false;

  const setText=(el,text)=>{if(el)el.textContent=text;};
  const hideInstallBar=()=>{if(ui.installBar)ui.installBar.hidden=true;};

  function setPwaStatus(text,ready=false){
    setText(ui.pwaStatus,text);
    ui.pwaStatus?.classList.toggle('ready',!!ready);
  }
  function setUpdateStatus(text,ready=false){
    [ui.updateStatus,ui.mobileUpdateStatus].forEach(el=>{
      if(!el)return; el.textContent=text; el.classList.toggle('update-ready',!!ready);
    });
    [ui.updateBtn,ui.mobileUpdateBtn].forEach(btn=>{
      if(!btn)return; btn.hidden=!ready; if(!ready)btn.disabled=false;
    });
  }

  function refreshInstallUi(){
    if(isNative){
      hideInstallBar();
      if(ui.installBtn)ui.installBtn.hidden=true;
      setPwaStatus('Android 앱 실행 중',true);
      setUpdateStatus(`앱 버전 ${CURRENT_APP_VERSION}`,false);
      return;
    }
    if(isMobile||isStandalone||localStorage.getItem(INSTALL_DISMISS_KEY)==='1'){
      hideInstallBar(); setPwaStatus(isStandalone?'앱 실행 중':'웹 실행',isStandalone); return;
    }
    if(!ui.installBar)return;
    setText(ui.installTitle,'앱 설치');
    setText(ui.installHint,deferredPrompt
      ? '버튼을 누르면 브라우저의 PWA 설치창이 열립니다.'
      : 'Chrome/Edge의 앱 설치 기능을 사용할 수 있습니다.');
    setText(ui.installAction,deferredPrompt?'앱으로 설치':'설치 방법');
    ui.installBar.hidden=false;
    setPwaStatus(deferredPrompt?'설치 가능':'웹 실행',!!deferredPrompt);
  }

  function showInstallGuide(){
    if(!ui.guide||!ui.guideBody)return;
    setText(ui.guideTitle,'PC에서 앱으로 설치');
    ui.guideBody.innerHTML=`
      <p>Chrome/Edge에서 이 웹을 별도 앱처럼 설치할 수 있습니다.</p>
      <ol><li>주소창 오른쪽의 <b>설치 아이콘</b>을 누르거나</li>
      <li>브라우저 메뉴에서 <b>앱 설치</b>를 선택합니다.</li></ol>`;
    ui.guide.hidden=false;
  }

  async function triggerInstall(){
    if(isMobile||isStandalone)return;
    if(deferredPrompt){
      deferredPrompt.prompt();
      try{await deferredPrompt.userChoice;}catch(_){}
      deferredPrompt=null; refreshInstallUi(); return;
    }
    showInstallGuide();
  }

  async function fetchServerVersion(){
    if(!/^https?:$/.test(location.protocol))return null;
    try{
      const response=await fetch('./app-version.json',{cache:'no-store',headers:{'Cache-Control':'no-cache'}});
      if(!response.ok)throw new Error('version fetch failed');
      const data=await response.json();
      return String(data?.version||'').trim()||null;
    }catch(_){return null;}
  }
  const versionsDiffer=()=>!!serverVersion&&serverVersion!==CURRENT_APP_VERSION;

  async function refreshServerVersionStatus(){
    const latest=await fetchServerVersion();
    if(!latest){setUpdateStatus('최신 버전 확인 실패',false);return;}
    serverVersion=latest;
    setUpdateStatus(versionsDiffer()?`새 버전 ${serverVersion} 있음`:`최신 ${CURRENT_APP_VERSION} 사용 중`,versionsDiffer());
  }

  function watchRegistration(registration){
    registrationRef=registration;
    if(registration.waiting&&navigator.serviceWorker.controller)waitingWorker=registration.waiting;
    registration.addEventListener('updatefound',()=>{
      const installing=registration.installing;if(!installing)return;
      installing.addEventListener('statechange',async()=>{
        if(installing.state==='installed'&&navigator.serviceWorker.controller){
          waitingWorker=registration.waiting||installing;
          await refreshServerVersionStatus();
        }
      });
    });
  }

  async function waitForWaitingWorker(timeoutMs=6000){
    const start=Date.now();
    while(Date.now()-start<timeoutMs){
      if(registrationRef?.waiting){waitingWorker=registrationRef.waiting;return waitingWorker;}
      await new Promise(resolve=>setTimeout(resolve,180));
    }
    return null;
  }

  function forceFreshNavigation(param='app-update'){
    const url=new URL(location.href);url.searchParams.set(param,Date.now().toString());location.replace(url.href);
  }

  async function applyWaitingUpdate(){
    if(applyingUpdate)return;
    applyingUpdate=true;
    [ui.updateBtn,ui.mobileUpdateBtn].forEach(btn=>{if(btn)btn.disabled=true;});
    setUpdateStatus('업데이트 적용 중',false);
    try{
      await registrationRef?.update();
      const worker=waitingWorker||await waitForWaitingWorker();
      if(worker){waitingWorker=worker;worker.postMessage({type:'SKIP_WAITING'});return;}
      if(versionsDiffer()){forceFreshNavigation();return;}
      await refreshServerVersionStatus();
    }catch(_){
      if(versionsDiffer())forceFreshNavigation();
      else setUpdateStatus('업데이트 적용 실패',true);
    }finally{applyingUpdate=false;}
  }

  setText(ui.version,CURRENT_APP_VERSION);setText(ui.mobileVersion,CURRENT_APP_VERSION);

  window.addEventListener('beforeinstallprompt',event=>{
    event.preventDefault();deferredPrompt=event;if(ui.installBtn)ui.installBtn.hidden=isMobile;refreshInstallUi();
  });
  window.addEventListener('appinstalled',()=>{
    deferredPrompt=null;if(ui.installBtn)ui.installBtn.hidden=true;hideInstallBar();setPwaStatus('앱 설치됨',true);
  });

  ui.installBtn?.addEventListener('click',triggerInstall);
  ui.installAction?.addEventListener('click',triggerInstall);
  ui.installDismiss?.addEventListener('click',()=>{
    if(isMobile)return;localStorage.setItem(INSTALL_DISMISS_KEY,'1');hideInstallBar();
  });
  ui.guideClose?.addEventListener('click',()=>{if(ui.guide)ui.guide.hidden=true;});
  ui.guide?.addEventListener('click',e=>{if(e.target===ui.guide)ui.guide.hidden=true;});
  ui.updateBtn?.addEventListener('click',applyWaitingUpdate);
  ui.mobileUpdateBtn?.addEventListener('click',applyWaitingUpdate);

  if(!isNative&&'serviceWorker'in navigator&&/^https?:$/.test(location.protocol)){
    navigator.serviceWorker.addEventListener('controllerchange',()=>{
      if(refreshing)return;refreshing=true;forceFreshNavigation('updated');
    });
    navigator.serviceWorker.register('./sw.js',{scope:'./',updateViaCache:'none'})
      .then(async registration=>{
        watchRegistration(registration);try{await registration.update();}catch(_){}
        await refreshServerVersionStatus();
      }).catch(refreshServerVersionStatus);
    window.setInterval(async()=>{
      try{await registrationRef?.update();}catch(_){}
      await refreshServerVersionStatus();
    },15*60*1000);
    window.addEventListener('focus',refreshServerVersionStatus);
    document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')refreshServerVersionStatus();});
  }else if(isNative)setUpdateStatus(`앱 버전 ${CURRENT_APP_VERSION}`,false);
  else setUpdateStatus('웹 배포 시 업데이트 지원',false);

  refreshInstallUi();
})();

(() => {
  const DUR_KEY='pokemonChampionsStatLab.durabilityView.v2';
  const OFF_KEY='pokemonChampionsStatLab.offenseView.v1';

  function setButtonState(container, attr, value) {
    container?.querySelectorAll(`[${attr}]`).forEach(button => {
      const active=button.getAttribute(attr)===value;
      button.classList.toggle('active',active);
      button.setAttribute('aria-selected',String(active));
    });
  }

  function setDurabilityView(value, save=true) {
    const fold=document.getElementById('durabilityFold');
    if (!fold) return;
    if (!['survive','own'].includes(value)) value='own';
    fold.dataset.durabilityView=value;
    setButtonState(
      document.getElementById('durabilityModeSwitch'),
      'data-durability-mode',
      value
    );
    if (save) {
      try { localStorage.setItem(DUR_KEY,value); } catch (_) {}
    }
  }

  function setOffenseView(value, save=true) {
    const fold=document.getElementById('offenseFold');
    if (!fold) return;
    if (!['detail','benchmark'].includes(value)) value='detail';
    fold.dataset.offenseView=value;
    setButtonState(
      document.getElementById('offenseTargetModeSwitch'),
      'data-offense-mode',
      value
    );
    if (save) {
      try { localStorage.setItem(OFF_KEY,value); } catch (_) {}
    }
  }

  document.querySelectorAll('[data-durability-mode]').forEach(button => {
    button.addEventListener('click',() => {
      setDurabilityView(button.dataset.durabilityMode);
    });
  });

  document.querySelectorAll('[data-offense-mode]').forEach(button => {
    button.addEventListener('click',() => {
      setOffenseView(button.dataset.offenseMode);
    });
  });

  let dur='own', off='detail';
  try {
    dur=localStorage.getItem(DUR_KEY)||dur;
    off=localStorage.getItem(OFF_KEY)||off;
  } catch (_) {}

  setDurabilityView(dur,false);
  setOffenseView(off,false);
})();

(() => {
  const statusEl=document.getElementById('offlineDataStatus');
  if(!statusEl)return;

  function setOfflineDataStatus(text,ready=false){
    statusEl.textContent=text;
    statusEl.classList.toggle('ready',!!ready);
  }

  const isNative=window.Capacitor?.isNativePlatform?.()===true ||
    location.protocol==='capacitor:';
  if(isNative){
    setOfflineDataStatus('앱 내 오프라인 데이터 사용 중',true);
    return;
  }

  if(!('serviceWorker' in navigator) || !/^https?:$/.test(location.protocol)){
    setOfflineDataStatus('웹 배포 시 오프라인 지원');
    return;
  }

  navigator.serviceWorker.addEventListener('message',event=>{
    const data=event.data||{};
    if(data.type==='CORE_DATA_PROGRESS'){
      const total=Number(data.total)||0;
      const done=Number(data.done)||0;
      if(total>0)setOfflineDataStatus(`오프라인 데이터 ${done}/${total}`);
    }
    if(data.type==='CORE_DATA_READY'){
      setOfflineDataStatus('오프라인 데이터 준비됨',true);
    }
  });

  async function requestCoreDataCache(){
    try{
      const reg=await navigator.serviceWorker.ready;
      const sw=navigator.serviceWorker.controller || reg.active;
      if(sw){
        sw.postMessage({type:'PRECACHE_CORE_DATA'});
      }
    }catch(_){}
  }

  window.addEventListener('load',()=>{
    window.setTimeout(requestCoreDataCache,600);
  });
})();

(() => {
  function normalizeSearchText(value='') {
    return String(value)
      .toLocaleLowerCase()
      .replace(/\s+/g,'')
      .replace(/[·•\-_/()[\]]/g,'');
  }

  function bindMoveSearch(searchId, selectId) {
    const search=document.getElementById(searchId);
    const select=document.getElementById(selectId);
    if(!search || !select) return;

    let optionSnapshot=[];

    function snapshotOptions() {
      optionSnapshot=Array.from(select.options).map(o=>({
        value:o.value,
        text:o.textContent,
        disabled:o.disabled
      }));
    }

    function rebuildOptions(query='') {
      const q=normalizeSearchText(query);
      const currentValue=select.value;
      const source=optionSnapshot.length ? optionSnapshot : Array.from(select.options).map(o=>({
        value:o.value,text:o.textContent,disabled:o.disabled
      }));

      const filtered = q
        ? source.filter(o => normalizeSearchText(o.text).includes(q) || o.value===currentValue)
        : source;

      const frag=document.createDocumentFragment();
      filtered.forEach(o=>{
        const opt=document.createElement('option');
        opt.value=o.value;
        opt.textContent=o.text;
        opt.disabled=o.disabled;
        frag.appendChild(opt);
      });
      select.replaceChildren(frag);

      if(Array.from(select.options).some(o=>o.value===currentValue)){
        select.value=currentValue;
      }
    }

    // move options are populated asynchronously; refresh snapshot on mutations.
    if('MutationObserver' in window){
      const observer=new MutationObserver(()=>{
        if(!search.value){
          snapshotOptions();
        }
      });
      observer.observe(select,{childList:true});
    }

    search.addEventListener('focus',()=>{
      snapshotOptions();
    });

    search.addEventListener('input',()=>{
      if(!optionSnapshot.length) snapshotOptions();
      rebuildOptions(search.value);
    });

    search.addEventListener('search',()=>{
      if(!search.value){
        if(!optionSnapshot.length) snapshotOptions();
        rebuildOptions('');
      }
    });

    select.addEventListener('change',()=>{
      if(search.value){
        const selected=select.selectedOptions?.[0];
        if(selected && !normalizeSearchText(selected.textContent).includes(normalizeSearchText(search.value))){
          search.value='';
          snapshotOptions();
          rebuildOptions('');
          select.value=selected.value;
        }
      }
    });

    window.setTimeout(snapshotOptions,700);
    window.setTimeout(snapshotOptions,1800);
  }

  for(let i=1;i<=4;i++){
    bindMoveSearch(`sampleMoveSearch${i}`,`sampleMove${i}`);
    bindMoveSearch(`mobileQuickMoveSearch${i}`,`mobileQuickMove${i}`);
  }
})();

(() => {
  const MAX_HELPER_RESULTS = 10;
  const normalize = value => String(value ?? '')
    .normalize('NFKC')
    .toLocaleLowerCase()
    .replace(/\s+/g,'')
    .replace(/[·ㆍ\-_'"()./]/g,'');

  function pokemonCandidates(){
    return (window.championsRoster || championsRoster || []).map(p => {
      const ko=(window.koreanNames || koreanNames || {})[p.dex] || '';
      return {
        value:p.en,
        main:ko ? `${ko} (${p.en})` : p.en,
        sub:'포켓몬',
        search:[ko,p.en].filter(Boolean)
      };
    });
  }

  function battlePokemonCandidates(){
    if(typeof attackEntityOptions!=='function')return pokemonCandidates();
    return attackEntityOptions().map(e=>({
      value:e.id, main:e.label, sub:e.isMega?'메가폼':'포켓몬',
      search:[e.label||'',e.item?.en||'',e.form?.suffix||'',e.id||''].filter(Boolean)
    }));
  }

  function speedCandidates(){
    if(typeof allSpeedEntities!=='function')return pokemonCandidates();
    return allSpeedEntities().filter(e=>dexData[e.id]).map(e=>({
      value:e.id, main:e.label, sub:e.isMega?'메가 스피드 기준':'스피드 기준',
      search:[e.label||'',e.item?.en||'',e.form?.suffix||'',e.id||''].filter(Boolean)
    }));
  }

  function moveCandidates(){
    const data=(window.moveData || moveData || {});
    const koMap=(window.koreanMoveNames || koreanMoveNames || {});
    return Object.entries(data)
      .filter(([,m])=>m?.name)
      .map(([id,m])=>{
        const ko=koMap[id] || '';
        return {
          value:id,
          main:ko ? `${ko} (${m.name})` : m.name,
          sub:m.category==='Status' ? '변화기' : `${m.type} · ${m.category==='Physical'?'물리':'특수'}`,
          search:[ko,m.name,id].filter(Boolean)
        };
      });
  }

  function itemCandidates(){
    const data=(window.championsItemData || championsItemData || {});
    return Object.entries(data)
      .filter(([id,item])=>id!=='none' && item?.name)
      .map(([id,item])=>{
        const ko=(window.koreanItemNames || koreanItemNames || {})[id] || '';
        return {
          value:id,
          main:ko ? `${ko} (${item.name})` : item.name,
          sub:item?.megaStone ? '메가스톤' : '도구',
          search:[ko,item.name,id].filter(Boolean)
        };
      });
  }

  function getCandidates(kind,input){
    if(kind==='pokemon')return pokemonCandidates();
    if(kind==='battlePokemon')return battlePokemonCandidates();
    if(kind==='speed')return speedCandidates();
    if(kind==='move'){
      const candidates=moveCandidates();
      if(input && (input.id==='attackMoveSearch'||input.id==='offenseMoveSearch')){
        const data=(window.moveData || moveData || {});
        return candidates.filter(candidate=>{
          const move=data[candidate.value];
          return move && move.basePower>0 && (move.category==='Physical'||move.category==='Special');
        });
      }
      return candidates;
    }
    if(kind==='item')return itemCandidates();
    return [];
  }

  function scoreCandidate(candidate, query){
    if(!query)return 10;
    // The helper's completed label must also be a valid search query.
    // This keeps values such as "한카리아스 (Garchomp)" searchable after selection.
    const values=[candidate.main,...candidate.search].map(normalize);
    let best=999;
    values.forEach(v=>{
      if(v===query)best=Math.min(best,0);
      else if(v.startsWith(query))best=Math.min(best,1);
      else if(v.includes(query))best=Math.min(best,2);
    });
    return best;
  }

  function helperMatches(kind, rawQuery, input){
    const q=normalize(rawQuery);
    return getCandidates(kind,input)
      .map(c=>({...c,score:scoreCandidate(c,q)}))
      .filter(c=>!q || c.score<999)
      .sort((a,b)=>a.score-b.score || a.main.localeCompare(b.main,'ko'))
      .slice(0,MAX_HELPER_RESULTS);
  }

  function targetSelectForSearch(input){
    const map={
      pokemonSearch:'pokemon',
      attackPokemonSearch:'attackPokemonSelect',
      offenseTargetSearch:'offenseTargetSelect',
      speedPokemonSearch:'speedTargetSelect',
      sampleItemSearch:'heldItem',
      attackMoveSearch:'attackMoveSelect',
      offenseMoveSearch:'offenseMoveSelect',
      sampleMoveSearch1:'sampleMove1',
      sampleMoveSearch2:'sampleMove2',
      sampleMoveSearch3:'sampleMove3',
      sampleMoveSearch4:'sampleMove4',
      mobileQuickMoveSearch1:'mobileQuickMove1',
      mobileQuickMoveSearch2:'mobileQuickMove2',
      mobileQuickMoveSearch3:'mobileQuickMove3',
      mobileQuickMoveSearch4:'mobileQuickMove4'
    };
    return document.getElementById(map[input.id]||'');
  }

  function chooseCandidate(input,candidate){
    const select=targetSelectForSearch(input);
    const kind=input.dataset.searchHelperKind;

    if(kind==='speed'){
      input.value=candidate.main;
      input.dispatchEvent(new Event('input',{bubbles:true}));
      window.setTimeout(()=>{
        if(typeof renderSpeedPanel==='function')renderSpeedPanel();
        const rows=Array.from(document.querySelectorAll('#speedList .speed-row[data-entity-id]'))
          .filter(row=>row.dataset.entityId===candidate.value);
        if(!rows.length)return;
        const speedType=document.getElementById('speedType')?.value||'both';
        let preferred=rows[0];
        if(speedType==='both')preferred=rows.find(r=>r.dataset.benchmarkType==='준속')||rows[0];
        else if(speedType==='positive')preferred=rows.find(r=>r.dataset.benchmarkType==='최속')||rows[0];
        else if(speedType==='uninvested')preferred=rows.find(r=>r.dataset.benchmarkType==='무보정')||rows[0];
        preferred?.click();
      },0);
      hideHelper(input);
      return;
    }

    if(kind==='pokemon'||kind==='battlePokemon'){
      input.value=candidate.main;
      input.dispatchEvent(new Event('input',{bubbles:true}));
      window.setTimeout(()=>{
        if(!select)return;
        const option=Array.from(select.options).find(o=>o.value===candidate.value);
        if(option){
          select.value=candidate.value;
          select.dispatchEvent(new Event('change',{bubbles:true}));
        }
      },0);
      hideHelper(input);
      return;
    }

    input.value=candidate.main;
    input.dispatchEvent(new Event('input',{bubbles:true}));
    window.setTimeout(()=>{
      if(select){
        let option=Array.from(select.options).find(o=>o.value===candidate.value);
        if(!option){
          input.value='';
          input.dispatchEvent(new Event('input',{bubbles:true}));
          option=Array.from(select.options).find(o=>o.value===candidate.value);
        }
        if(option){
          select.value=candidate.value;
          select.dispatchEvent(new Event('change',{bubbles:true}));
        }
      }
    },0);
    hideHelper(input);
  }

  function renderHelper(input){
    const helper=document.getElementById(`${input.id}Helper`);
    if(!helper)return;
    const kind=input.dataset.searchHelperKind;
    const matches=helperMatches(kind,input.value,input);

    helper.innerHTML='';
    if(!matches.length){
      const empty=document.createElement('div');
      empty.className='search-helper-empty';
      empty.textContent='일치하는 후보가 없습니다.';
      helper.appendChild(empty);
      helper.hidden=false;
      return;
    }

    matches.forEach(candidate=>{
      const btn=document.createElement('button');
      btn.type='button';
      btn.className='search-helper-item';
      btn.setAttribute('role','option');
      btn.innerHTML=`<span class="search-helper-main"></span><span class="search-helper-sub"></span>`;
      btn.querySelector('.search-helper-main').textContent=candidate.main;
      btn.querySelector('.search-helper-sub').textContent=candidate.sub;
      btn.addEventListener('mousedown',e=>e.preventDefault());
      btn.addEventListener('click',()=>chooseCandidate(input,candidate));
      helper.appendChild(btn);
    });
    helper.hidden=false;
  }

  function hideHelper(input){
    const helper=document.getElementById(`${input.id}Helper`);
    if(helper)helper.hidden=true;
  }

  document.querySelectorAll('[data-search-helper-kind]').forEach(input=>{
    input.addEventListener('focus',()=>renderHelper(input));
    input.addEventListener('input',()=>renderHelper(input));
    input.addEventListener('keydown',event=>{
      const helper=document.getElementById(`${input.id}Helper`);
      if(!helper || helper.hidden)return;
      const buttons=Array.from(helper.querySelectorAll('.search-helper-item'));
      if(!buttons.length)return;
      let active=buttons.findIndex(b=>b.classList.contains('is-active'));

      if(event.key==='ArrowDown'){
        event.preventDefault();
        if(active>=0)buttons[active].classList.remove('is-active');
        active=(active+1)%buttons.length;
        buttons[active].classList.add('is-active');
        buttons[active].scrollIntoView({block:'nearest'});
      }else if(event.key==='ArrowUp'){
        event.preventDefault();
        if(active>=0)buttons[active].classList.remove('is-active');
        active=active<=0?buttons.length-1:active-1;
        buttons[active].classList.add('is-active');
        buttons[active].scrollIntoView({block:'nearest'});
      }else if(event.key==='Enter'){
        event.preventDefault();
        buttons[active>=0?active:0].click();
      }else if(event.key==='Escape'){
        hideHelper(input);
      }
    });
    input.addEventListener('blur',()=>window.setTimeout(()=>hideHelper(input),120));
  });

  // Data arrives asynchronously; reopening/focusing always reads current data.
})();
