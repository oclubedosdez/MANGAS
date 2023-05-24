let Mangas = document.querySelector('.container')

let mangas_e_manhaws = [
	{
        "id":"A",
        "nome":"A Returner's Magic Should Be Special",
        "img":"A Returner's Magic Should Be Special.jpg",
        "tipo":"manhaw",
		"simbolo" : "",
        "status" : "ativo ativo2",
        "capitulos" : "Capitulos-220"
    },
    {
        "id":"D",
        "nome":"Domestic na kanojo",
        "img":"Domestic na kanojo.webp",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "completo",
        "capitulos" : ""
    },
    {
        "id":"A",
        "nome":"Actually I Was the Real One",
        "img":"Actually I Was the Real One.jpg",
        "tipo":"manhaw",
		"simbolo" : "",
        "status" : "ativo ativo2",
        "capitulos" : "Capitulos:89-100"
    },
    {
        "id":"H",
        "nome":"Henjo: Hen na Joshikousei Amaguri Chiko",
        "img":"Henjo Hen na Joshikousei Amaguri Chiko.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"A",
        "nome":"akuyaku reijou level 99 watashi wa ore-boss desu ga maou dewa arimasen",
        "img":"akuyaku reijou level 99 watashi wa ore-boss desu ga maou dewa arimasen.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"B",
        "nome":"Bocchi na Bokura no Renai Jijou",
        "img":"Bocchi na Bokura no Renai Jijou.webp",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "completo",
        "capitulos" : ""
    },
    {
        "id":"A",
        "nome":"Akuyaku Reijou wa Ringoku no Outaishi ni Dekiai sareru",
        "img":"Akuyaku Reijou wa Ringoku no Outaishi ni Dekiai sareru.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"A",
        "nome":"akuyaku reijou nanode rasubosu wo katte mimashita",
        "img":"akuyaku reijou nanode rasubosu wo katte mimashita.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"E",
        "nome":"Eiyu-Oh, Bu wo Kiwameru Tame Tensei Su, Soshite, Sekai Saikyou no Minarai Kisi",
        "img":"Eiyu-Oh, Bu wo Kiwameru Tame Tensei Su, Soshite, Sekai Saikyou no Minarai Kisi.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"A",
        "nome":"Amano Megumi wa Sukidarake!",
        "img":"Amano Megumi wa Sukidarake!.webp",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"V",
        "nome":"Virtues of the Villainess",
        "img":"Virtues of the Villainess.jpg",
        "tipo":"manhaw",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"A",
        "nome":"Anyone Can Become a Villainess",
        "img":"Anyone Can Become a Villainess.jpg",
        "tipo":"manhaw",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"A",
        "nome":"Alexis Teikoku Kouryuuki",
        "img":"Alexis Teikoku Kouryuuki.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"A",
        "nome":"Aidin",
        "img":"Aidin.jpg",
        "tipo":"manhaw",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"F",
        "nome":"fairy tail 100 years quest",
        "img":"fairy tail 100 years quest.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"A",
        "nome":"Amakunai Karera no Nichijou wa",
        "img":"Amakunai Karera no Nichijou wa.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"C",
        "nome":"Chitra",
        "img":"Chitra.png",
        "tipo":"manhaw",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"G",
        "nome":"God Bless You",
        "img":"God Bless You.jpg",
        "tipo":"manhaw",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"I",
        "nome":"Ijiranaide, Nagatoro-san",
        "img":"Ijiranaide, Nagatoro-san.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"J",
        "nome":"Jungle Juice",
        "img":"Jungle Juice.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"K",
        "nome":"Kawaii Joushi wo Komarasetai",
        "img":"Kawaii Joushi wo Komarasetai.webp",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"M",
        "nome":"Maou ni Natte node, Dungeon Tsukutte Jingai Musume to Honobono suru",
        "img":"Maou ni Natte node, Dungeon Tsukutte Jingai Musume to Honobono suru.webp",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"N",
        "nome":"Nisekoi",
        "img":"Nisekoi.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"O",
        "nome":"Oroka na Tenshi wa Akuma to Odoru",
        "img":"Oroka na Tenshi wa Akuma to Odoru.webp",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"R",
        "nome":"Real no Heroine wa Irimasen!",
        "img":"Real no Heroine wa Irimasen!.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"S",
        "nome":"Saenai Riman to Yankee Joshi Kousei",
        "img":"Saenai Riman to Yankee Joshi Kousei.png",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"T",
        "nome":"The Tutorial Tower of the Advanced Player",
        "img":"The Tutorial Tower of the Advanced Player.jpg",
        "tipo":"manhaw",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"U",
        "nome":"Uchi no Musume no Tame naraba, Ore wa Moshikashitara Maou mo Taoseru kamo Shirenai",
        "img":"Uchi no Musume no Tame naraba, Ore wa Moshikashitara Maou mo Taoseru kamo Shirenai.webp",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"B",
        "nome":"Bug Player",
        "img":"Bug Player.jpg",
        "tipo":"manhaw",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"A",
        "nome":"Ano Oni Kyoushi ga Boku no Ane ni Narundesuka",
        "img":"Ano Oni Kyoushi ga Boku no Ane ni Narundesuka.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"M",
        "nome":"My Dad Is Too Strong",
        "img":"My Dad Is Too Strong.jpg",
        "tipo":"manhaw",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"R",
        "nome":"Rakudai Kenja no Gakuin Musou ~Nidome no Tensei, S-Rank Cheat Majutsushi Boukenroku",
        "img":"Rakudai Kenja no Gakuin Musou ~Nidome no Tensei, S-Rank Cheat Majutsushi Boukenroku.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"S",
        "nome":"Sono Bisque Doll wa Koi wo Suru",
        "img":"Sono Bisque Doll wa Koi wo Suru.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"S",
        "nome":"Shin no Nakama janai to Yuusha no Party wo Oidasareta node",
        "img":"Shin no Nakama janai to Yuusha no Party wo Oidasareta node.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"S",
        "nome":"Seoul Station Druid",
        "img":"Seoul Station Druid.jpg",
        "tipo":"manhaw",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"S",
        "nome":"Shikkakumon no Saikyou Kenja",
        "img":"Shikkakumon no Saikyou Kenja.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"T",
        "nome":"The Blood Princess and the Knight",
        "img":"The Blood Princess and the Knight.jpg",
        "tipo":"manhaw",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"T",
        "nome":"Tsurezure Children",
        "img":"Tsurezure Children.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"O",
        "nome":"Orenchi ni Kita Onna Kishi to Inakagurashi suru Koto ni Natta Ken",
        "img":"Orenchi ni Kita Onna Kishi to Inakagurashi suru Koto ni Natta Ken.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"L",
        "nome":"Level 1 No Saikyou Kenja",
        "img":"Level 1 No Saikyou Kenja.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"S",
        "nome":"Sensei Wa Koi Wo Oshie Rarenai",
        "img":"Sensei Wa Koi Wo Oshie Rarenai.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"K",
        "nome":"Kumo desu ga, Nani ka",
        "img":"Kumo desu ga, Nani ka.jpg",
        "tipo":"manga",
		"simbolo" : "?",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"R",
        "nome":"return of the legendary spear knight",
        "img":"return of the legendary spear knight.jpg",
        "tipo":"manhaw",
		"simbolo" : "",
        "status" : "",
        "capitulos" : ""
    },
    {
        "id":"T",
        "nome":"This Is an Obvious Fraudulent Marriage",
        "img":"This Is an Obvious Fraudulent Marriage.jpg",
        "tipo":"manhaw",
		"simbolo" : "",
        "status" : "completo completo2",
        "capitulos" : ""
    },
    {
        "id":"S",
        "nome":"Shinsetsu Ookami to Koushinryou Ookami to Youhishi",
        "img":"Shinsetsu Ookami to Koushinryou Ookami to Youhishi.jpg",
        "tipo":"manga",
		"simbolo" : "",
        "status" : "ativo",
        "capitulos" : "Capitulos-07"
    },
];

mangas_e_manhaws.forEach((banner) => {
    let banner_element = `
    <div class="box letra-${banner.id}" name="MANHAW">
         <span class="${banner.tipo}"></span>
         <span class="${banner.status}">${banner.capitulos}</span>
         <div class="imagem">
            <a href="./pages/${banner.tipo}s/${banner.nome}/index.html">
               <img class="img"
                  src="./imgs/${banner.img}">
            </a>
         </div>
         <div class="texto">
            <p class="titulo">${banner.nome}${banner.simbolo}</p>
         </div>
      </div>
    `;
    Mangas.innerHTML += banner_element;
})


var A = document.querySelectorAll('.letra-A')
var B = document.querySelectorAll('.letra-B')
var C = document.querySelectorAll('.letra-C')
var D = document.querySelectorAll('.letra-D')
var E = document.querySelectorAll('.letra-E')
var F = document.querySelectorAll('.letra-F')
var G = document.querySelectorAll('.letra-G')
var H = document.querySelectorAll('.letra-H')
var I = document.querySelectorAll('.letra-I')
var J = document.querySelectorAll('.letra-J')
var K = document.querySelectorAll('.letra-K')
var L = document.querySelectorAll('.letra-L')
var M = document.querySelectorAll('.letra-M')
var N = document.querySelectorAll('.letra-N')
var O = document.querySelectorAll('.letra-O')
var P = document.querySelectorAll('.letra-P')
var Q = document.querySelectorAll('.letra-Q')
var R = document.querySelectorAll('.letra-R')
var S = document.querySelectorAll('.letra-S')
var T = document.querySelectorAll('.letra-T')
var U = document.querySelectorAll('.letra-U')
var V = document.querySelectorAll('.letra-V')
var V = document.querySelectorAll('.letra-W')

var botaoA = document.getElementById('botao-A')
var botaoB = document.getElementById('botao-B')
var botaoC = document.getElementById('botao-C')
var botaoD = document.getElementById('botao-D')
var botaoE = document.getElementById('botao-E')
var botaoF = document.getElementById('botao-F')
var botaoG = document.getElementById('botao-G')
var botaoH = document.getElementById('botao-H')
var botaoI = document.getElementById('botao-I')
var botaoJ = document.getElementById('botao-J')
var botaoK = document.getElementById('botao-K')
var botaoL = document.getElementById('botao-L')
var botaoM = document.getElementById('botao-M')
var botaoN = document.getElementById('botao-N')
var botaoO = document.getElementById('botao-O')
var botaoP = document.getElementById('botao-P')
var botaoQ = document.getElementById('botao-Q')
var botaoR = document.getElementById('botao-R')
var botaoS = document.getElementById('botao-S')
var botaoT = document.getElementById('botao-T')
var botaoU = document.getElementById('botao-U')
var botaoV = document.getElementById('botao-V')
var botaoV = document.getElementById('botao-W')







  
















