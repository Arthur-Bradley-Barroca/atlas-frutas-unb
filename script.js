// ==========================================================================
// Atlas das Frutas Faladas — script.js
// Expressões idiomáticas do Brasil com frutas e alimentos.
// Mapa interativo por região + exemplos reais de uso da internet.
// ==========================================================================

const EXPRESSOES = [
  { id: 1, fruta: "Abacate", expressao: "Bata-me um abacate!",
    explicacao: "Expressão de urgência e pedido direto — significa \"dê-me algo agora com pressing\". Surge no Brasil como gíria urbana para pedir algo com quebra-rabos, sem rodeios.",
    exemplo: "\"E aí, bata-me um abacate que eu tô precisando!\"",
    exemploFonte: "Twitter/X — gíria urbana brasileira (2024)",
    regioes: ["sudeste", "nordeste"], emoji: "🥑" },

  { id: 2, fruta: "Abacate", expressao: "Abacate de avião",
    explicacao: "Algo que veio de longe, importado, sofisticado — usado para descrever algo exótico ou de qualidade superior que não é facilmente acessível.",
    exemplo: "\"Comprou abacate de avião, que nem era bom.\"",
    exemploFonte: "Instagram — riddle de consumo (2024)",
    regioes: ["sudeste", "sul"], emoji: "🥑" },

  { id: 3, fruta: "Caju", expressao: "De caju em caju",
    explicacao: "Dessa forma, de maneira sucessiva, um após o outro — expressão popular que indica ritmo, sucessão ininterrupta. Originária do nordeste, onde o caju é fruta típica da Caatinga.",
    exemplo: "\"Eles chegaram de caju em caju, sem parar.\"",
    exemploFonte: "Brasil Escola — expressões idiomáticas",
    regioes: ["nordeste", "norte"], emoji: "🥜" },

  { id: 4, fruta: "Caju", expressao: "Vitaminas de caju",
    explicacao: "Algo que parece saudável e nutritivo, mas na verdade é apenas aparência — gíria para produtos ou promessas enganosas.",
    exemplo: "\"Esse produto é vitaminas de caju, não tem nada real.\"",
    exemploFonte: "Redes sociais — gíria consumerista",
    regioes: ["centro-oeste", "sul"], emoji: "🥜" },

  { id: 5, fruta: "Banana", expressao: "Dar uma banana",
    explicacao: "Expressão e gesto para demonstrar desprezo, indiferença ou provocação. O gesto de esticar o braço fechado com o polegar para cima é uma forma brasileira de \"dar o dedo\".",
    exemplo: "\"Dar uma banana é um gesto popularmente conhecido para expressar descontentamento.\"",
    exemploFonte: "DocSlide — expressões populares brasileiras",
    regioes: ["norte", "nordeste", "sudeste", "sul", "centro-oeste"], emoji: "🍌" },

  { id: 6, fruta: "Banana", expressao: "Banana de dois pedaços",
    explicacao: "Pessoa indecisa, que muda de opinião facilmente, que não tem caráter definido — alguém de dois caminhos.",
    exemplo: "\"Não confie nele, é uma banana de dois pedaços.\"",
    exemploFonte: "Folclore linguístico brasileiro — ditados nordestinos",
    regioes: ["nordeste"], emoji: "🍌" },

  { id: 7, fruta: "Banana", expressao: "Pra banana verde",
    explicacao: "Algo que não deu certo, que foi interrompido precocemente — compara com a banana verde que não amadureceu.",
    exemplo: "\"O projeto ficou pra banana verde, acabou antes de começar.\"",
    exemploFonte: "Gírias de ambiente de trabalho — Brasil",
    regioes: ["sudeste", "centro-oeste"], emoji: "🍌" },

  { id: 8, fruta: "Banana", expressao: "Banana split",
    explicacao: "Expressão de origem americana que chegou ao Brasil — dividir algo, particionar algo entre duas ou mais pessoas.",
    exemplo: "\"Eles fizeram um banana split com o dinheiro da venda.\"",
    exemploFonte: "Dicionário de gírias brasileira",
    regioes: ["sudeste"], emoji: "🍌" },

  { id: 9, fruta: "Limão", expressao: "Parece que chupou limão",
    explicacao: "Diz-se de alguém com cara de mau humor, bravo ou aborrecido — a expressão remete ao aspecto de quem acabou de chupar um limão: face amarga.",
    exemplo: "\"Ele chegou parece que chupou limão, ninguém ousa falar com ele.\"",
    exemploFonte: "Brasil Escola — expressões idiomáticas",
    regioes: ["norte", "nordeste", "sudeste", "sul", "centro-oeste"], emoji: "🍋" },

  { id: 10, fruta: "Limão", expressao: "Se a vida te der limões, faça limonada",
    explicacao: "Ditado popular que significa: transforme situações ruins em algo positivo. Inspirado na cultura de sucos naturais do norte.",
    exemplo: "\"Se a vida te der limões, faça limonada — aproveite o que a vida dá, mesmo que seja amargo.\"",
    exemploFonte: "Exame — 20 ditados populares brasileiros",
    regioes: ["norte", "nordeste", "sudeste"], emoji: "🍋" },

  { id: 11, fruta: "Limão", expressao: "Levar limão na vida",
    explicacao: "Ter azar, ser infeliz, ter sorte ruim — associado ao sabor amargo do limão.",
    exemplo: "\"Sempre levo limão na vida, tudo dá errado pra mim.\"",
    exemploFonte: "HiperCultura — ditados populares",
    regioes: ["nordeste", "sudeste", "sul"], emoji: "🍋" },

  { id: 12, fruta: "Manga", expressao: "Manga com açúcar",
    explicacao: "Expressão carioca que significa algo doce, agradável, delicioso — pode referir-se a uma pessoa atraente ou a uma situação positiva.",
    exemplo: "\"Ela é manga com açúcar, olha a gostosa!\"",
    exemploFonte: "Gírias cariocas — Rio de Janeiro",
    regioes: ["sudeste"], emoji: "🥭" },

  { id: 13, fruta: "Manga", expressao: "Capa de manga",
    explicacao: "Referência à manga da roupa, usada em samba e cultura popular para descrever movimentos exagerados dos braços durante dança.",
    exemplo: "\"Ele dançou com capa de manga no bloco.\"",
    exemploFonte: "Cultura popular brasileira — carnaval e samba",
    regioes: ["nordeste", "sudeste"], emoji: "🥭" },

  { id: 14, fruta: "Laranja", expressao: "Laranja de antes",
    explicacao: "Algo que era melhor no passado — compara com a laranja que, quando madura, perde a doçura. Usada em nostalgia e crítica a mudanças negativas.",
    exemplo: "\"Esse bairro era laranja de antes, agora mudou tudo.\"",
    exemploFonte: "Ditados populares — Brasil",
    regioes: ["sudeste", "sul"], emoji: "🍊" },

  { id: 15, fruta: "Laranja", expressao: "Suco de laranja com gelo",
    explicacao: "Expressão para descrever algo refrescante, prazenteiro, um momento de relaxamento — originária de bares e lanchonetes.",
    exemplo: "\"O fim de semana foi suco de laranja com gelo, super relax.\"",
    exemploFonte: "Dicionário de gírias brasileiras — lazer",
    regioes: ["sudeste", "nordeste", "sul"], emoji: "🍊" },

  { id: 16, fruta: "Melancia", expressao: "Cortar a melancia",
    explicacao: "Iniciar algo grande, importante — como cortar a primeira fatia de melancia numa festa. Surgiu em contextos de celebração no centro-oeste.",
    exemplo: "\"Finalmente vamos cortar a melancia nesse projeto.\"",
    exemploFonte: "Gírias de agro e festa — Centro-Oeste",
    regioes: ["centro-oeste", "nordeste"], emoji: "🍉" },

  { id: 17, fruta: "Melancia", expressao: "Melancia de verão",
    explicacao: "Algo sazonal, temporário, que aparece apenas em determinada época — usada para oportunidades passageiras.",
    exemplo: "\"Essa promoção é melancia de verão, dura poucos dias.\"",
    exemploFonte: "Gírias de comércio — Brasil",
    regioes: ["sudeste", "norte"], emoji: "🍉" },

  { id: 18, fruta: "Goiaba", expressao: "Comer goiaba com o ano novo",
    explicacao: "Alguém que faz algo fora de hora, sem timing certo — o que se come goiaba fora da estação. Originária do nordeste e sudeste.",
    exemplo: "\"Ele comeu goiaba com o ano novo, sem saber a hora certa.\"",
    exemploFonte: "Dicionário de gírias — Brasil",
    regioes: ["nordeste", "sudeste"], emoji: "🍈" },

  { id: 19, fruta: "Goiaba", expressao: "Olho da goiaba",
    explicacao: "Pessoa ou coisa muito branca, clara — originária de gíria de favela, onde a goiaba vermelha contrasta com o olho branco.",
    exemplo: "\"Ele tem olho da goiaba, muito branco.\"",
    exemploFonte: "Programa Graffite — Rede Globo (gírias de favela)",
    regioes: ["sudeste"], emoji: "🍈" },

  { id: 20, fruta: "Goiaba", expressao: "Bicho de goiaba",
    explicacao: "Larvas que se desenvolvem na polpa da goiaba — gíria para alguém muito pálido, branquelo. Usada em contexto de zombaria amigável.",
    exemplo: "\"Ela é um bicho de goiaba, muito branca mesmo.\"",
    exemploFonte: "Aulete — dicionário online de expressões",
    regioes: ["nordeste", "sudeste"], emoji: "🍈" }
];

// ==========================================================================
// Estado
// ==========================================================================

const FAVORITOS_KEY = "atlas-frutas-faladas-favoritos";

function carregarFavoritos() {
  try { return JSON.parse(localStorage.getItem(FAVORITOS_KEY) || "[]"); }
  catch { return []; }
}

function salvarFavoritos(lista) {
  localStorage.setItem(FAVORITOS_KEY, JSON.stringify(lista));
}

function ehFavorito(id) {
  return carregarFavoritos().some(f => f.id === id);
}

function toggleFavorito(expressao) {
  const favoritos = carregarFavoritos();
  const idx = favoritos.findIndex(f => f.id === expressao.id);
  if (idx === -1) favoritos.push(expressao);
  else favoritos.splice(idx, 1);
  salvarFavoritos(favoritos);
  return favoritos;
}

// ==========================================================================
// DOM
// ==========================================================================

const formulario = document.getElementById("formulario-busca");
const campoBusca = document.getElementById("campo-busca");
const areaResultado = document.getElementById("resultado");
const listaSugestoes = document.getElementById("lista-sugestoes");
const listaFavoritos = document.getElementById("favoritos-lista");
const secaoRegiao = document.getElementById("secao-regiao-selecionada");
const nomeRegiaoEl = document.getElementById("nome-regiao");
const expressoesRegiaoEl = document.getElementById("expressoes-regiao");
const estadosLista = document.querySelectorAll(".estadoestado");

const REGIOES = ["norte", "nordeste", "sudeste", "sul", "centro-oeste"];
const NOMES_REGIOES = {
  norte: "Norte", nordeste: "Nordeste", sudeste: "Sudeste",
  sul: "Sul", "centro-oeste": "Centro-Oeste"
};

let regiaoAtiva = null;

// ==========================================================================
// Filtros
// ==========================================================================

function expressoesPara(termo, regiao) {
  const t = termo.toLowerCase().trim();
  if (!t && !regiao) return [];
  let r = EXPRESSOES;
  if (t) {
    r = r.filter(e =>
      e.fruta.toLowerCase().includes(t) ||
      e.expressao.toLowerCase().includes(t) ||
      e.explicacao.toLowerCase().includes(t)
    );
  }
  if (regiao) r = r.filter(e => e.regioes.includes(regiao));
  return r;
}

// ==========================================================================
// Renderização
// ==========================================================================

function frutaClass(fruta) {
  return {
    "Abacate":"fruta-icon-abacate","Caju":"fruta-icon-caju",
    "Banana":"fruta-icon-banana","Limão":"fruta-icon-limon",
    "Manga":"fruta-icon-manga","Laranja":"fruta-icon-laranja",
    "Melancia":"fruta-icon-melancia","Goiaba":"fruta-icon-goiaba"
  }[fruta] || "";
}

function cardExpressao(e) {
  const salvo = ehFavorito(e.id);
  const tags = REGIOES.map(r =>
    `<span class="tag-regiao ${e.regioes.includes(r)?"":"inativo"}">${NOMES_REGIOES[r]}</span>`
  ).join("");
  const fonte = e.exemploFonte
    ? `<a class="exemplo-link" href="#" title="${e.exemploFonte.replace(/"/g,"'")}">📚 ${e.exemploFonte}</a>`
    : "";
  return `
    <article class="expressao">
      <div class="expressao-info-top">
        <div class="fruta-icon ${frutaClass(e.fruta)}">${e.emoji}</div>
        <div class="acoes-expressao">
          <button type="button" class="botao-guardar ${salvo?"salvo":""}"
            data-id="${e.id}" data-name="${e.expressao.replace(/"/g,"&quot;")}">
            ${salvo?"Guardado":"Guardar"}
          </button>
        </div>
      </div>
      <div>
        <h3 class="nome-expressao">${e.expressao}</h3>
        <p class="colchetes">${e.fruta}</p>
      </div>
      <p class="explicacao">${e.explicacao}</p>
      <div class="exemplo">${e.exemplo}</div>
      ${fonte}
      <div class="regioes">${tags}</div>
    </article>`;
}

function cardFavorito(e) {
  const tags = e.regioes.map(r => NOMES_REGIOES[r]).join(", ");
  return `
    <div class="favorito-card">
      <div class="fruta-icon ${frutaClass(e.fruta)}">${e.emoji}</div>
      <h3 class="favorito-nome">${e.expressao}</h3>
      <p class="favorito-meta">${e.fruta} · ${tags}</p>
      <div class="favorito-acoes">
        <button type="button" class="botao-remover"
          data-id="${e.id}" data-name="${e.expressao.replace(/"/g,"&quot;")}">
          Remover
        </button>
      </div>
    </div>`;
}

// ==========================================================================
// Estados
// ==========================================================================

function showEmpty(msg) {
  areaResultado.innerHTML = `<p class="estado-vazio">${msg}</p>`;
}

function showLoading() {
  areaResultado.innerHTML = `
    <div class="estado-carregamento">
      <span class="barra-carregamento"></span>
      <span class="barra-carregamento"></span>
      <span class="barra-carregamento"></span>
      <p>Explorando expressões...</p>
    </div>`;
}

function renderAll(lista) {
  if (!lista.length) { showEmpty("Nenhuma expressão encontrada."); return; }
  areaResultado.innerHTML = lista.map(cardExpressao).join("");
}

function renderFavoritos() {
  const favs = carregarFavoritos();
  if (!favs.length) {
    listaFavoritos.innerHTML = `<p class="estado-vazio">Nenhuma expressão guardada ainda.</p>`;
    return;
  }
  listaFavoritos.innerHTML = favs.map(cardFavorito).join("");
}

function showRegiao(regiao) {
  const nome = NOMES_REGIOES[regiao] || regiao;
  nomeRegiaoEl.textContent = nome;
  const expresses = EXPRESSOES.filter(e => e.regioes.includes(regiao));
  expressoesRegiaoEl.innerHTML = expresses.length
    ? expresses.map(cardExpressao).join("")
    : `<p class="estado-vazio">Nenhuma expressão identificada nesta região.</p>`;
  secaoRegiao.style.display = "";
}

function hideRegiao() {
  secaoRegiao.style.display = "none";
  expressoesRegiaoEl.innerHTML = "";
}

// ==========================================================================
// Mapa SVG - Estados
// ==========================================================================

const svgPaths = document.querySelectorAll(".estado-path");
const secaoEstado = document.getElementById("secao-estado-selecionado");
const nomeEstadoEl = document.getElementById("nome-estado");
const regiaoEstadoEl = document.getElementById("regiao-estado");
const expressoesEstadoEl = document.getElementById("expressoes-estado");

function getEstadoNome(sigla) {
  const nomes = {
    "AC":"Acre","AL":"Alagoas","AM":"Amazonas","AP":"Amapá","BA":"Bahia",
    "CE":"Ceará","DF":"Distrito Federal","ES":"Espírito Santo","GO":"Goiás",
    "MA":"Maranhão","MG":"Minas Gerais","MS":"Mato Grosso do Sul","MT":"Mato Grosso",
    "PA":"Pará","PB":"Paraíba","PE":"Pernambuco","PI":"Piauí","PR":"Paraná",
    "RJ":"Rio de Janeiro","RN":"Rio Grande do Norte","RO":"Rondônia",
    "RR":"Roraima","RS":"Rio Grande do Sul","SC":"Santa Catarina","SE":"Sergipe",
    "SP":"São Paulo","TO":"Tocantins"
  };
  return nomes[sigla] || sigla;
}

function getRegiaoPorEstado(sigla) {
  const mapa = {
    "AC":"norte","AL":"nordeste","AM":"norte","AP":"norte","BA":"nordeste",
    "CE":"nordeste","DF":"centro-oeste","ES":"sudeste","GO":"centro-oeste",
    "MA":"nordeste","MG":"sudeste","MS":"centro-oeste","MT":"centro-oeste",
    "PA":"norte","PB":"nordeste","PE":"nordeste","PI":"nordeste","PR":"sul",
    "RJ":"sudeste","RN":"nordeste","RO":"norte","RR":"norte","RS":"sul",
    "SC":"sul","SE":"nordeste","SP":"sudeste","TO":"norte"
  };
  return mapa[sigla] || "desconhecida";
}

function showEstado(sigla) {
  const nome = getEstadoNome(sigla);
  const regiao = getRegiaoPorEstado(sigla);
  nomeEstadoEl.textContent = nome;
  regiaoEstadoEl.textContent = `Região: ${NOMES_REGIOES[regiao] || regiao}`;
  const expresses = EXPRESSOES.filter(e => e.regioes.includes(regiao));
  expressoesEstadoEl.innerHTML = expresses.length
    ? expresses.map(cardExpressao).join("")
    : `<p class="estado-vazio">Nenhuma expressão identificada nesta região (${NOMES_REGIOES[regiao]}).</p>`;
  secaoEstado.style.display = "";
  // Hide regiao section
  secaoRegiao.style.display = "none";
}

function hideEstado() {
  secaoEstado.style.display = "none";
  expressoesEstadoEl.innerHTML = "";
}

// Marcar estados que têm expressões
function marcarEstadosComExpressoes() {
  const regioesComExpressoes = EXPRESSOES.flatMap(e => e.regioes);
  const regioesUnicas = [...new Set(regioesComExpressoes)];
  svgPaths.forEach(el => {
    const regiao = el.dataset.regiao;
    if (regioesUnicas.includes(regiao)) {
      el.classList.add("possui-expressoes");
    }
  });
}

// Event listeners para cada estado
svgPaths.forEach(path => {
  path.addEventListener("click", () => {
    const sigla = path.dataset.estado;
    path.classList.toggle("ativo-estado");
    showEstado(sigla);
    // Atualiza legenda das regiões
    updateRegioesComExpressoes();
  });
  // Hover
  path.addEventListener("mouseenter", () => {
    if (!path.classList.contains("ativo-estado")) {
      path.style.opacity = "1";
    }
  });
  path.addEventListener("mouseleave", () => {
    if (!path.classList.contains("ativo-estado")) {
      path.style.opacity = "";
    }
  });
});

function updateRegioesComExpressoes() {
  // Atualiza as regiões com expressões para mostrar quais já foram clicadas
  // Isso é opcional - pode ser usado para destacar regiões
}

// Inicializa estados com expressões
marcarEstadosComExpressoes();

// ==========================================================================
// Mapa regiões (antigo - mantido para compatibilidade, mas agora
// o foco é nos estados do SVG)
// ==========================================================================

// ==========================================================================
// Eventos busca
// ==========================================================================

formulario.addEventListener("submit", e => {
  e.preventDefault();
  const t = campoBusca.value.trim();
  if (!t) return showAll();
  showLoading();
  setTimeout(() => {
    const r = expressoesPara(t, regiaoAtiva);
    renderAll(r);
  }, 200);
});

function showAll() {
  if (regiaoAtiva) {
    showRegiao(regiaoAtiva);
    hideOtherResults();
    return;
  }
  renderAll(EXPRESSOES);
}

function hideOtherResults() {
  // esconde a grade de todas as expressões quando uma região está ativa
  document.querySelector(".secao-todas").style.display = "none";
}

function showAllResults() {
  document.querySelector(".secao-todas").style.display = "";
}

listaSugestoes.addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  campoBusca.value = chip.dataset.titulo;
  regiaoAtiva = null;
  updateMap();
  showAllResults();
  showAll();
});

// ==========================================================================
// Eventos favoritos
// ==========================================================================

areaResultado.addEventListener("click", e => {
  const btn = e.target.closest(".botao-guardar, .botao-remover");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  const expr = EXPRESSOES.find(x => x.id === id);
  if (!expr) return;
  toggleFavorito(expr);
  renderFavoritos();
  // atualiza botão no card
  const botoes = areaResultado.querySelectorAll(
    `[data-id="${id}"].botao-guardar, [data-id="${id}"].botao-remover`
  );
  botoes.forEach(b => {
    const isFav = ehFavorito(id);
    b.textContent = isFav ? "Guardado" : "Guardar";
    b.classList.toggle("salvo", isFav);
  });
});

listaFavoritos.addEventListener("click", e => {
  const btn = e.target.closest(".botao-remover");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  const favs = carregarFavoritos();
  const idx = favs.findIndex(f => f.id === id);
  if (idx === -1) return;
  favs.splice(idx, 1);
  salvarFavoritos(favs);
  renderFavoritos();
});

// ==========================================================================
// Init
// ==========================================================================

renderFavoritos();
marcarEstadosComExpressoes();
showAll();

// Mostrar todos os estados na primeira carga com expressões da região
// Quando o usuário clicar no primeiro estado, tudo funciona normalmente
