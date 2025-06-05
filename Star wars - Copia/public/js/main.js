document.addEventListener('DOMContentLoaded', () => {
  // Elementos principais
  const landing = document.getElementById('landing');
  const mainApp = document.getElementById('main-app');
  const startBtn = document.getElementById('start-btn');
  const sectionContent = document.getElementById('section-content');
  let navLinks = document.querySelectorAll('.main-nav a');

  // Conteúdo base das seções (pode ser expandido depois)
  const sections = {
    home: {
      subtitle: 'Bem-vindo à Galáxia',
      title: 'HOME',
      desc: 'Explore o universo de Star Wars RPG. Escolha uma seção para começar sua jornada.',
    },
    racas: {
      subtitle: 'Bem-vindo à Galáxia',
      title: 'ESPÉCIES DA GALÁXIA',
      desc: 'Das profundezas de Dagobah às alturas de Coruscant, explore as diversas espécies que habitam a galáxia muito, muito distante. Cada uma com habilidades únicas, culturas e papéis.',
    },
    habilidades: {
      subtitle: 'Bem-vindo à Galáxia',
      title: 'HABILIDADES DA FORÇA',
      desc: 'A Força flui através de todos os seres vivos, mas como alguém a manipula define seu destino. Da telecinese aos relâmpagos, da persuasão à precognição, aprenda os poderes que moldam a galáxia.',
    },
    classes: {
      subtitle: 'Bem-vindo à Galáxia',
      title: 'CAMINHOS DA GALÁXIA',
      desc: 'Nem todos seguem o caminho da Força. Alguns dominam a tecnologia, outros o combate. Escolha seu papel, molde seu destino.',
    },
    sistema: {
      subtitle: 'Bem-vindo à Galáxia',
      title: 'VISÃO GERAL DO SISTEMA',
      desc: 'Um sistema detalhado projetado para imergir você no universo Star Wars. Combate, maestria da Força, reputação, alinhamento e muito mais.',
    },
  };

  const racasList = [
    { 
      nome: 'Humanos',
      img: 'images/racas/humanos.png',
      origem: 'Diversos planetas (Coruscant, Corellia, Tatooine, etc.)',
      caracteristicas: 'Versáteis, adaptáveis, com enorme diversidade física e cultural.',
      habilidades: 'Adaptabilidade excepcional, criatividade, aptidão para qualquer função (pilotos, soldados, Jedi, líderes).'
    },
    { 
      nome: 'Mandalorianos',
      img: 'images/racas/mandalorianos.png',
      origem: 'Mandalore e planetas colonizados como Concordia',
      caracteristicas: 'Humanos imersos em uma cultura guerreira. Armaduras icônicas de beskar.',
      habilidades: 'Especialistas em combate, táticas militares, uso de tecnologia e honra marcial ("This is the way").'
    },
    { 
      nome: 'Twi\'lek',
      img: 'images/racas/twilek.png',
      origem: 'Ryloth',
      caracteristicas: 'Humanoides com pele colorida (verde, azul, vermelha) e tentáculos cranianos (lekku).',
      habilidades: 'Comunicação não-verbal com lekku, graciosidade, adaptabilidade social e habilidades de espionagem.'
    },
    { 
      nome: 'Zabrak',
      img: 'images/racas/zabrak.png',
      origem: 'Iridonia (ou Dathomir, no caso dos Zabraks da diáspora)',
      caracteristicas: 'Chifres no crânio, tatuagens faciais tradicionais, extrema resistência física e mental.',
      habilidades: 'Resistência à dor, determinação inabalável, excelentes guerreiros corpo a corpo.'
    },
    { 
      nome: 'Chiss',
      img: 'images/racas/chiss.png',
      origem: 'Csilla (Regiões Desconhecidas)',
      caracteristicas: 'Pele azul, olhos vermelhos, raciocínio lógico elevado, cultura isolacionista.',
      habilidades: 'Estratégia tática, frieza emocional, percepção espacial avançada.'
    },
    { 
      nome: 'Wookiees',
      img: 'images/racas/wookiee.png',
      origem: 'Kashyyyk',
      caracteristicas: 'Humanoides peludos, altos e fortes, com garras retráteis e longevidade acima da média.',
      habilidades: 'Força sobre-humana, resistência natural à dor, excelentes construtores e pilotos.'
    },
    { 
      nome: 'Togruta',
      img: 'images/racas/togruta.png',
      origem: 'Shili',
      caracteristicas: 'Montrals e tentáculos cranianos, pele colorida com listras únicas.',
      habilidades: 'Audição espacial através dos montrals, agilidade, forte conexão com a natureza e com a Força.'
    },
    { 
      nome: 'Dathomirianos',
      img: 'images/racas/dathomirianos.png',
      origem: 'Dathomir',
      caracteristicas: 'Mistura de Zabrak e humanos, aparência selvagem, presença marcante.',
      habilidades: 'Afinidade com magia das sombras (Irmãs da Noite), aptidão para combate e ocultismo.'
    },
    { 
      nome: 'Nautolanos',
      img: 'images/racas/nautolan.png',
      origem: 'Glee Anselm',
      caracteristicas: 'Pele lisa e tentáculos na cabeça, aparência anfíbia.',
      habilidades: 'Resistência subaquática, percepção de feromônios, reflexos rápidos, nado ágil.'
    },
    { 
      nome: 'Trandoshans',
      img: 'images/racas/trandoshans.png',
      origem: 'Trandosha',
      caracteristicas: 'Reptilianos escamosos, olhos amarelos, postura intimidadora.',
      habilidades: 'Regeneração de membros, visão térmica, caçadores instintivos e força bruta.'
    },
    { 
      nome: 'Mirialans',
      img: 'images/racas/mirialans.png',
      origem: 'Mirial',
      caracteristicas: 'Pele esverdeada/amarelada, tatuagens simbólicas no rosto.',
      habilidades: 'Disciplina espiritual, reflexos aguçados, conexão com a Força comum entre os Jedi.'
    },
    { 
      nome: 'Miraluka',
      img: 'images/racas/miraluka.png',
      origem: 'Alpheridies',
      caracteristicas: 'Humanóides cegos de nascença, cobrem os olhos com faixas ou máscaras.',
      habilidades: 'Visão através da Força, percepção espiritual e energética extremamente aguçada.'
    },
    { 
      nome: 'Chagrians',
      img: 'images/racas/chagrians.png',
      origem: 'Champala',
      caracteristicas: 'Pele azul, chifres frontais e tentáculos cervicais.',
      habilidades: 'Resistência a radiação e calor, capacidade anfíbia, intelecto elevado.'
    },
    { 
      nome: 'Devaronianos',
      img: 'images/racas/devaronianos.png',
      origem: 'Devaron',
      caracteristicas: 'Chifres grandes, pele vermelha ou cinzenta, aparência demoníaca.',
      habilidades: 'Resistência a venenos, alta tolerância à dor, carisma intimidador.'
    },
    { 
      nome: 'Ewoks',
      img: 'images/racas/ewoks.png',
      origem: 'Endor (lua florestal)',
      caracteristicas: 'Pequenos, peludos, de aparência ursoide, extremamente curiosos e engenhosos.',
      habilidades: 'Camuflagem natural em florestas, inteligência adaptativa, construção de armadilhas rudimentares.'
    },
    { 
      nome: 'Espécie de Yoda',
      img: 'images/racas/yoda-species.png',
      origem: 'Desconhecida (espécie extremamente rara)',
      caracteristicas: 'Pequenos, pele esverdeada, orelhas longas, longevidade milenar.',
      habilidades: 'Conexão intensa com a Força, sabedoria ancestral, resistência física e mental surpreendente.'
    }
  ];

  const habilidadesList = [
    { 
      nome: 'Telecinese',
      desc: 'A capacidade de mover e manipular objetos com a mente através da Força. Pode ser usada para levitar objetos, desviar projéteis ou realizar ataques à distância.',
      icon: '🌀',
      cor: '#00eaff',
      nivel: 'Básico',
      requisitos: 'Conexão inicial com a Força',
      alinhamento: 'Ambos os lados da Força'
    },
    { 
      nome: 'Truque Mental',
      desc: 'A habilidade de influenciar e manipular a mente de outros seres. Pode ser usada para confundir, persuadir ou até mesmo controlar indivíduos mais fracos de mente.',
      icon: '🧠',
      cor: '#00eaff',
      nivel: 'Intermediário',
      requisitos: 'Forte conexão com a Força e treinamento mental',
      alinhamento: 'Ambos os lados da Força'
    },
    { 
      nome: 'Relâmpago da Força',
      desc: 'Um poder destrutivo que canaliza a energia da Força em descargas elétricas. Extremamente perigoso e difícil de controlar, é uma marca registrada dos usuários do Lado Sombrio.',
      icon: '⚡',
      cor: '#a100ff',
      nivel: 'Avançado',
      requisitos: 'Forte conexão com o Lado Sombrio',
      alinhamento: 'Lado Sombrio da Força'
    },
    { 
      nome: 'Empurrão/Puxão da Força',
      desc: 'Uma técnica fundamental que permite empurrar ou puxar objetos e seres através da Força. Essencial tanto para combate quanto para situações cotidianas.',
      icon: '💨',
      cor: '#00eaff',
      nivel: 'Básico',
      requisitos: 'Conexão inicial com a Força',
      alinhamento: 'Ambos os lados da Força'
    },
    { 
      nome: 'Precognição',
      desc: 'A capacidade de ver eventos futuros ou antecipar movimentos através da Força. Crucial para o combate com sabre de luz e para evitar perigos.',
      icon: '🔮',
      cor: '#00eaff',
      nivel: 'Intermediário',
      requisitos: 'Forte conexão com a Força e treinamento mental',
      alinhamento: 'Ambos os lados da Força'
    },
    { 
      nome: 'Fúria do Lado Sombrio',
      desc: 'Um poder que canaliza emoções negativas como raiva e ódio para aumentar temporariamente a força física e os poderes da Força. Extremamente perigoso e viciante.',
      icon: '🔥',
      cor: '#ff003c',
      nivel: 'Avançado',
      requisitos: 'Forte conexão com o Lado Sombrio e controle emocional',
      alinhamento: 'Lado Sombrio da Força'
    },
    { 
      nome: 'Domínio do Sabre de Luz',
      desc: 'Mestre no uso do sabre em combate, com estilos variados como Ataru, Soresu e Djem So. Combina técnica física com conexão com a Força para criar um estilo único e letal.',
      icon: '⚔️',
      cor: '#00ff9d',
      nivel: 'Avançado',
      requisitos: 'Treinamento extensivo em combate e forte conexão com a Força',
      alinhamento: 'Ambos os lados da Força'
    },
    { 
      nome: 'Controle Mental Avançado',
      desc: 'Manipulação profunda da mente, capaz de iludir até os mais resistentes. Permite influenciar decisões, criar ilusões complexas e até mesmo controlar múltiplos alvos simultaneamente.',
      icon: '👁️',
      cor: '#b19cd9',
      nivel: 'Avançado',
      requisitos: 'Domínio do Truque Mental e forte conexão com a Força',
      alinhamento: 'Ambos os lados da Força'
    },
    { 
      nome: 'Camuflagem da Força',
      desc: 'Capacidade de ocultar sua presença na Força, usada por usuários avançados e espiões Jedi/Sith. Permite passar despercebido por outros sensíveis à Força e realizar missões furtivas.',
      icon: '🫥',
      cor: '#2a2a2a',
      nivel: 'Intermediário',
      requisitos: 'Controle preciso da Força e treinamento em furtividade',
      alinhamento: 'Ambos os lados da Força'
    },
    { 
      nome: 'Reflexos Aumentados',
      desc: 'Reações sobre-humanas guiadas pela Força, ideal para combate e pilotagem. Permite antecipar movimentos e reagir instantaneamente a ameaças.',
      icon: '⚡',
      cor: '#ffd700',
      nivel: 'Intermediário',
      requisitos: 'Conexão com a Força e treinamento físico',
      alinhamento: 'Ambos os lados da Força'
    },
    { 
      nome: 'Sabedoria Jedi',
      desc: 'Conhecimento profundo da história, filosofia e equilíbrio da Força. Permite compreender melhor os mistérios da Força e tomar decisões mais sábias.',
      icon: '📘',
      cor: '#87ceeb',
      nivel: 'Avançado',
      requisitos: 'Anos de estudo e meditação',
      alinhamento: 'Lado Luminoso da Força'
    },
    { 
      nome: 'Manutenção e Criação de Tecnologia',
      desc: 'Habilidade em construir, reparar e modificar droides, sabres e naves. Combina conhecimento técnico com compreensão da Força para criar tecnologia avançada.',
      icon: '🛠️',
      cor: '#ff8c00',
      nivel: 'Intermediário',
      requisitos: 'Conhecimento técnico e conexão com a Força',
      alinhamento: 'Ambos os lados da Força'
    },
    { 
      nome: 'Pilotagem Avançada',
      desc: 'Especialista em manobras arriscadas e controle de naves de caça e cargueiros. Usa a Força para melhorar a precisão e o tempo de reação durante voos.',
      icon: '🚀',
      cor: '#00008b',
      nivel: 'Intermediário',
      requisitos: 'Experiência em pilotagem e conexão com a Força',
      alinhamento: 'Ambos os lados da Força'
    },
    { 
      nome: 'Combate com Armas de Fogo',
      desc: 'Domínio de blasters, rifles e táticas de tiro de precisão ou cobertura. Combina treinamento militar com uso da Força para melhorar a precisão.',
      icon: '🔫',
      cor: '#8b0000',
      nivel: 'Intermediário',
      requisitos: 'Treinamento militar e conexão com a Força',
      alinhamento: 'Ambos os lados da Força'
    },
    { 
      nome: 'Fúria Controlada',
      desc: 'Canalização da raiva para aumentar poder físico e foco, sem perder o controle. Uma versão mais equilibrada da Fúria do Lado Sombrio.',
      icon: '🔥',
      cor: '#ff4500',
      nivel: 'Avançado',
      requisitos: 'Controle emocional avançado e forte conexão com a Força',
      alinhamento: 'Ambos os lados da Força'
    },
    { 
      nome: 'Cura com a Força',
      desc: 'Capacidade de regenerar ferimentos e restaurar a energia vital de si ou de aliados. Uma das habilidades mais raras e poderosas do Lado Luminoso.',
      icon: '✨',
      cor: '#00ff7f',
      nivel: 'Avançado',
      requisitos: 'Forte conexão com o Lado Luminoso e compaixão',
      alinhamento: 'Lado Luminoso da Força'
    }
  ];

  const classesList = [
    { 
      nome: 'Guardião Jedi',
      desc: 'Mestres do combate corpo a corpo e da defesa, os Guardiões Jedi são os protetores da paz e da justiça na galáxia.',
      icon: '🛡️',
      cor: '#00eaff',
      habilidades: 'Combate com sabre de luz, defesa avançada, telecinese de combate, e resistência física aprimorada.',
      equipamento: 'Sabre de luz, armadura Jedi, e equipamentos de defesa.',
      alinhamento: 'Lado Luminoso da Força'
    },
    { 
      nome: 'Consular Jedi',
      desc: 'Focados no estudo e domínio da Força, os Consulares são diplomatas e estudiosos que buscam a harmonia através da sabedoria.',
      icon: '✨',
      cor: '#00eaff',
      habilidades: 'Manipulação da Força, cura, persuasão, e habilidades telepáticas.',
      equipamento: 'Sabre de luz, holocrons, e artefatos da Força.',
      alinhamento: 'Lado Luminoso da Força'
    },
    { 
      nome: 'Guerreiro Sith',
      desc: 'Brutais e implacáveis, os Guerreiros Sith canalizam sua raiva e ódio em poder destrutivo no campo de batalha.',
      icon: '⚔️',
      cor: '#a100ff',
      habilidades: 'Combate agressivo, relâmpagos da Força, fúria sombria, e resistência ao dano.',
      equipamento: 'Sabre de luz vermelho, armadura Sith, e equipamentos de combate.',
      alinhamento: 'Lado Sombrio da Força'
    },
    { 
      nome: 'Inquisidor Sith',
      desc: 'Manipuladores da mente e da Força, os Inquisidores são mestres da tortura e da extração de informações.',
      icon: '👁️',
      cor: '#a100ff',
      habilidades: 'Manipulação mental, tortura, furtividade, e poderes sombrios da Força.',
      equipamento: 'Sabre de luz duplo, equipamentos de tortura, e artefatos Sith.',
      alinhamento: 'Lado Sombrio da Força'
    },
    { 
      nome: 'Caçador de Recompensas',
      desc: 'Mercenários implacáveis que caçam alvos por toda a galáxia, movidos pelo dinheiro e pela reputação.',
      icon: '🎯',
      cor: '#ffb300',
      habilidades: 'Rastreamento, combate à distância, furtividade, e negociação.',
      equipamento: 'Armas de fogo, armaduras Mandalorianas, e gadgets de caça.',
      alinhamento: 'Neutro'
    },
    { 
      nome: 'Contrabandista',
      desc: 'Mestres da discrição e do comércio ilegal, os Contrabandistas navegam pelas sombras da galáxia.',
      icon: '🕶️',
      cor: '#ffb300',
      habilidades: 'Pilotagem, furtividade, negociação, e conhecimento do submundo.',
      equipamento: 'Nave espacial, armas ocultas, e equipamentos de contrabando.',
      alinhamento: 'Neutro'
    },
    { 
      nome: 'Soldado/Stormtrooper',
      desc: 'Elite militar treinada para servir ao Império, os Stormtroopers são a força de combate mais temida da galáxia.',
      icon: '💂',
      cor: '#fff',
      habilidades: 'Combate militar, táticas de grupo, uso de armas, e disciplina.',
      equipamento: 'Armadura Stormtrooper, blasters, e equipamentos militares.',
      alinhamento: 'Império'
    },
    { 
      nome: 'Engenheiro Droide',
      desc: 'Especialistas em tecnologia e construção, os Engenheiros Droide são mestres da mecânica e da programação.',
      icon: '🤖',
      cor: '#00eaff',
      habilidades: 'Construção de droides, programação, reparos, e hacking.',
      equipamento: 'Ferramentas de engenharia, droides, e equipamentos técnicos.',
      alinhamento: 'Neutro'
    },
  ];

  const sistemaList = [
    { 
      nome: 'Combate',
      desc: 'Sistema de combate híbrido por turnos/ação que combina elementos táticos com ação dinâmica.',
      icon: '⚔️',
      cor: '#00eaff',
      mecanicas: 'Rolagem de dados para ataques e defesas, pontos de vida, armadura e resistência.',
      interacoes: 'Integração com habilidades da Força, equipamentos e status de personagem.',
      desenvolvimento: 'Progressão através de pontos de combate e experiência em batalha.'
    },
    { 
      nome: 'Modos de Combate',
      desc: 'Diferentes abordagens de combate que testam habilidades específicas e estratégias únicas.',
      icon: '🎯',
      cor: '#ff4500',
      mecanicas: 'Sistema de regras específicas para cada modo de combate, incluindo Sabre vs Sabre, Sabre vs Blaster, Blaster vs Blaster e Força vs Todos.',
      interacoes: 'Integração com habilidades da Força, equipamentos e táticas de combate.',
      desenvolvimento: 'Progressão através de experiência em diferentes modos de combate e adaptação de estratégias.'
    },
    { 
      nome: 'Força & Habilidades',
      desc: 'Sistema de evolução que permite escolher entre o lado claro ou sombrio da Força.',
      icon: '✨',
      cor: '#a100ff',
      mecanicas: 'Pontos de Força, medidor de alinhamento, e sistema de aprendizado de habilidades.',
      interacoes: 'Afeta combate, diálogos, e interações com o ambiente.',
      desenvolvimento: 'Progressão através de treinamento e uso das habilidades.'
    },
    { 
      nome: 'Reputação',
      desc: 'Sistema de interação com diferentes facções da galáxia, incluindo Império, Rebeldes, Piratas e Hutts.',
      icon: '🏅',
      cor: '#ffb300',
      mecanicas: 'Níveis de reputação, missões específicas por facção, e recompensas únicas.',
      interacoes: 'Afeta preços de mercadores, disponibilidade de missões e reações de NPCs.',
      desenvolvimento: 'Progressão através de missões e escolhas alinhadas com cada facção.'
    },
    { 
      nome: 'Alinhamento',
      desc: 'Sistema que reflete suas escolhas morais e como elas moldam seu caminho entre o Lado Luminoso e Sombrio.',
      icon: '⚖️',
      cor: '#00eaff',
      mecanicas: 'Medidor de alinhamento, escolhas com consequências, e eventos especiais.',
      interacoes: 'Afeta habilidades da Força, diálogos e reações de NPCs.',
      desenvolvimento: 'Progressão através de escolhas morais e ações significativas.'
    },
    { 
      nome: 'Equipamento',
      desc: 'Sistema detalhado de armas, sabres de luz, armaduras e gadgets com diferentes níveis de raridade e poder.',
      icon: '🛠️',
      cor: '#fff',
      mecanicas: 'Sistema de slots de equipamento, modificações, e requisitos de uso.',
      interacoes: 'Afeta combate, habilidades e aparência do personagem.',
      desenvolvimento: 'Progressão através de aquisição e melhoria de equipamentos.'
    },
    { 
      nome: 'Navegação Espacial',
      desc: 'Sistema de viagens entre sistemas e planetas, incluindo combate espacial e exploração.',
      icon: '🛸',
      cor: '#00eaff',
      mecanicas: 'Sistema de navegação, combate espacial, e gerenciamento de recursos da nave.',
      interacoes: 'Afeta missões, comércio e exploração da galáxia.',
      desenvolvimento: 'Progressão através de melhorias na nave e experiência em pilotagem.'
    },
  ];

  // Adicionar dados das formas de combate
  const estilosCombateList = [
    {
      nome: 'Forma Zero',
      img: 'images/estilos/forma0.png',
      titulo: 'Forma Zero: A Filosofia Jedi',
      desc: `<b>Características:</b> A não-violência e a busca pela resolução pacífica. A verdadeira maestria do sabre de luz é saber quando não usá-lo. Jedi experientes priorizam a diplomacia e evitam o combate sempre que possível.<br><b>Praticantes Notáveis:</b> Yoda, Obi-Wan Kenobi (em negociações).`
    },
    {
      nome: 'Shii-Cho',
      img: 'images/estilos/forma1.png',
      titulo: 'Forma I: Shii-Cho (Caminho do Sarlacc)',
      desc: `<b>Características:</b> A forma mais básica e versátil, foca em golpes amplos e defesa em seis zonas do corpo. Ensina fundamentos a Younglings e Padawans. É a 'forma da determinação'.<br><b>Praticantes Notáveis:</b> Kit Fisto, Anakin Skywalker (inicialmente).<br><br>
      <b>Mecânicas:</b><br>
      🎲 <b>Ataque:</b> 1d20<br>
      🎲 <b>Defesa:</b> 2d10 (contra múltiplos oponentes)<br>
      <b>Vantagem:</b> Contra 2 ou mais inimigos, usa 2d20 no ataque, mantendo o maior resultado.<br>
      <b>Desvantagem:</b> Em duelos 1x1, rola apenas 1d10 no ataque.<br>
      <b>Habilidade:</b> Pode contra-atacar após uma defesa bem-sucedida contra grupos, rolando 1d10 de dano imediato.`
    },
    {
      nome: 'Makashi',
      img: 'images/estilos/forma2.png',
      titulo: 'Forma II: Makashi (Caminho do Ysalamir)',
      desc: `<b>Características:</b> Especializada em duelos de sabre contra sabre, com movimentos elegantes e precisos. Favorece o controle e a economia de energia.<br><b>Praticantes Notáveis:</b> Conde Dookan, Asajj Ventress.<br><br>
      <b>Mecânicas:</b><br>
      🎲 <b>Ataque:</b> 2d10 (contra sabres) ou 1d20 (contra outros)<br>
      🎲 <b>Defesa:</b> 1d20<br>
      <b>Vantagem:</b> Em duelos de sabre, usa 2d10 no ataque, representando precisão e controle.<br>
      <b>Desvantagem:</b> Contra inimigos usando blasters, sua defesa sofre — só rola 1d10 na defesa contra disparos.<br>
      <b>Habilidade:</b> Após um sucesso crítico no ataque (rolagem máxima), aplica um contra-ataque imediato com 1d10, ignorando a defesa do oponente.`
    },
    {
      nome: 'Soresu',
      img: 'images/estilos/forma3.png',
      titulo: 'Forma III: Soresu (Caminho do Mynock)',
      desc: `<b>Características:</b> Defesa absoluta, bloqueio de disparos de blaster e resistência. Ideal para situações de cerco.<br><b>Praticantes Notáveis:</b> Obi-Wan Kenobi, Luminara Unduli.<br><br>
      <b>Mecânicas:</b><br>
      🎲 <b>Ataque:</b> 1d10<br>
      🎲 <b>Defesa:</b> 2d20 (sempre)<br>
      <b>Vantagem:</b> Defesa quase impenetrável — sempre rola 2d20 na defesa.<br>
      <b>Desvantagem:</b> Ataque fixo em 1d10, sem acesso a dados maiores.<br>
      <b>Habilidade:</b> Se obtiver 18+ nos dois dados de defesa, ativa um contra-ataque com 1d20 imediatamente.`
    },
    {
      nome: 'Ataru',
      img: 'images/estilos/forma4.png',
      titulo: 'Forma IV: Ataru (Caminho do Falcão)',
      desc: `<b>Características:</b> Acrobática, agressiva, utiliza saltos e giros. Exige grande conexão com a Força para impulsionar movimentos.<br><b>Praticantes Notáveis:</b> Yoda, Qui-Gon Jinn.<br><br>
      <b>Mecânicas:</b><br>
      🎲 <b>Ataque:</b> 2d20 (escolhe o maior)<br>
      🎲 <b>Defesa:</b> 1d10 (sempre)<br>
      <b>Vantagem:</b> Ataques extremamente ágeis e letais — sempre rola 2d20 no ataque, mantendo o maior.<br>
      <b>Desvantagem:</b> Defesa extremamente frágil — defesa sempre é só 1d10, independentemente do inimigo.<br>
      <b>Habilidade:</b> Se derrotar um inimigo com um único golpe, pode gastar 1 ponto de Foco para atacar outro alvo imediatamente com 1d20.`
    },
    {
      nome: 'Shien/Djem So',
      img: 'images/estilos/forma5.png',
      titulo: 'Forma V: Shien/Djem So (Caminho do Dragão)',
      desc: `<b>Características:</b> Reflete disparos de blaster e converte defesa em ataque poderoso. Djem So é mais voltada para duelos.<br><b>Praticantes Notáveis:</b> Anakin Skywalker, Luke Skywalker.<br><br>
      <b>Mecânicas:</b><br>
      🎲 <b>Ataque:</b> 2d20 (sempre)<br>
      🎲 <b>Defesa:</b> 1d20 (Shien, contra blasters) ou 2d10 (Djem So, contra sabres)<br>
      <b>Vantagem:</b> Ataque sempre com 2d20, representando força bruta e agressividade.<br>
      <b>Desvantagem:</b> Defesa varia — contra sabres usa 2d10, o que é mais arriscado, e contra blasters usa 1d20, que é mais confiável.<br>
      <b>Habilidade:</b> Sempre que defende com sucesso, pode refletir o dano de volta ao inimigo, rolando 1d10 como contra-ataque automático.`
    },
    {
      nome: 'Niman',
      img: 'images/estilos/forma6.png',
      titulo: 'Forma VI: Niman (Caminho do Rancor)',
      desc: `<b>Características:</b> Equilíbrio entre todas as formas, incorpora habilidades da Força. Versátil, mas sem especialização extrema.<br><b>Praticantes Notáveis:</b> Exar Kun, Jedi Consulares.<br><br>
      <b>Mecânicas:</b><br>
      🎲 <b>Ataque:</b> 1d20<br>
      🎲 <b>Defesa:</b> 1d20<br>
      <b>Vantagem:</b> Pode adicionar 1d10 extra a qualquer rolagem (ataque ou defesa) quando combinado com habilidades da Força.<br>
      <b>Desvantagem:</b> Sem dados extras em ataques ou defesas puramente físicos — depende do uso da Força.<br>
      <b>Habilidade:</b> Se bloquear usando a Força (gastando recurso ou foco), realiza um contra-ataque com 1d20.`
    },
    {
      nome: 'Juyo/Vaapad',
      img: 'images/estilos/forma7.png',
      titulo: 'Forma VII: Juyo/Vaapad (Caminho do Vornskr)',
      desc: `<b>Características:</b> A mais agressiva e imprevisível, canaliza emoções intensas. Vaapad é uma variação criada por Mace Windu.<br><b>Praticantes Notáveis:</b> Mace Windu, Sora Bulq.<br><br>
      <b>Mecânicas:</b><br>
      🎲 <b>Ataque:</b> 2d20 (sempre)<br>
      🎲 <b>Defesa:</b> 1d10 (sempre)<br>
      <b>Vantagem:</b> Ofensiva devastadora — rola 2d20 no ataque, mantendo o maior.<br>
      <b>Desvantagem:</b> Defesa mínima — sempre apenas 1d10, altamente vulnerável.<br>
      <b>Habilidade:</b> Sempre que causa dano, pode escolher rolar 1d10 adicional como dano extra, mas se falhar na defesa no turno seguinte, sofre +1d10 de dano recebido (arriscando tudo na ofensiva).`
    },
  ];

  const combateModes = [
    {
      nome: 'Sabre vs Sabre',
      desc: 'Duelo tradicional entre usuários da Força, testando técnica e conexão com a Força.',
      icon: '⚔️',
      cor: '#00ff9d',
      regras: 'Combate corpo a corpo com sabres de luz, permitindo uso de habilidades da Força para defesa e ataque.',
      vantagens: 'Maior precisão com sabre, melhor defesa contra ataques de sabre.',
      desvantagens: 'Vulnerável a ataques à distância.'
    },
    {
      nome: 'Sabre vs Blaster',
      desc: 'Combate entre usuário da Força e atirador, testando defesa e precisão.',
      icon: '🔫',
      cor: '#ff4500',
      regras: 'Usuário do sabre pode desviar tiros, atirador deve manter distância e usar cobertura.',
      vantagens: 'Sabre: Defesa contra tiros. Blaster: Alcance e poder de fogo.',
      desvantagens: 'Sabre: Alcance limitado. Blaster: Vulnerável em combate corpo a corpo.'
    },
    {
      nome: 'Blaster vs Blaster',
      desc: 'Combate tático entre atiradores, testando precisão e posicionamento.',
      icon: '🎯',
      cor: '#ff0000',
      regras: 'Uso de cobertura, tiro de precisão e táticas de combate à distância.',
      vantagens: 'Alcance, poder de fogo e uso de equipamentos táticos.',
      desvantagens: 'Vulnerável em combate corpo a corpo e contra usuários da Força.'
    },
    {
      nome: 'Força vs Todos',
      desc: 'Combate focado no uso das habilidades da Força contra qualquer oponente.',
      icon: '✨',
      cor: '#00eaff',
      regras: 'Uso intensivo de poderes da Força, com foco em controle e poder.',
      vantagens: 'Versatilidade, poder ofensivo e defensivo.',
      desvantagens: 'Consumo de energia da Força, vulnerável quando exausto.'
    }
  ];

  // Atualizar menu para incluir Estilos de Combate
  const navMenuOrder = [
    'home',
    'racas',
    'habilidades',
    'classes',
    'estilos-combate',
    'sistema',
    'regras'
  ];

  // Adicionar dados das regras
  const regrasList = [
    {
      nome: 'Regras Básicas',
      icon: '📖',
      cor: '#00eaff',
      desc: 'Fundamentos do sistema e mecânicas principais.',
      regras: [
        {
          titulo: 'Rolagem de Dados',
          conteudo: 'O sistema utiliza dados de 20 faces (d20) para testes de habilidade e combate. Modificadores são aplicados baseados em atributos, habilidades e equipamentos.'
        },
        {
          titulo: 'Níveis e Experiência',
          conteudo: 'Personagens ganham pontos de experiência através de missões, combates e conquistas. Cada nível traz novos pontos de habilidade e melhorias.'
        }
      ]
    },
    {
      nome: 'Regras de Combate',
      icon: '⚔️',
      cor: '#ff4500',
      desc: 'Sistema detalhado de combate e interações em batalha.',
      regras: [
        {
          titulo: 'Iniciativa',
          conteudo: 'Determinada por rolagem de d20 . Define a ordem das ações em combate.'
        },
        {
          titulo: 'Ações em Combate',
          conteudo: 'Cada personagem tem uma ação principal, uma ação bônus e uma reação por turno. Movimento é separado das ações.'
        },
        {
          titulo: 'Dano e Cura',
          conteudo: 'Diferentes tipos de dano (físico, energia, Força) afetam personagens de maneiras distintas. Cura pode ser aplicada através de habilidades, itens ou descanso.'
        }
      ]
    },
    {
      nome: 'Regras da Força',
      icon: '✨',
      cor: '#a100ff',
      desc: 'Mecânicas específicas para usuários da Força.',
      regras: [
        {
          titulo: 'Alinhamento com a Força',
          conteudo: 'Personagens podem se alinhar com o Lado Luminoso ou Sombrio da Força, afetando habilidades disponíveis e interações.'
        },
        {
          titulo: 'Poderes da Força',
          conteudo: 'Cada poder tem um custo em pontos de Força e pode ser aprimorado com pontos de habilidade. Alguns poderes têm requisitos de alinhamento.'
        },
        {
          titulo: 'Meditação e Recuperação',
          conteudo: 'Usuários da Força podem recuperar pontos de Força através de meditação e descanso. O tempo necessário varia com o nível de poder.'
        }
      ]
    },
    {
      nome: 'Regras de Equipamento',
      icon: '🛠️',
      cor: '#ffb300',
      desc: 'Sistema de equipamentos, armas e modificações.',
      regras: [
        {
          titulo: 'Sabres de Luz',
          conteudo: 'Arma icônica dos usuários da Força. Pode ser personalizada com diferentes cristais e modificações. Requer treinamento específico.'
        },
        {
          titulo: 'Armas de Fogo',
          conteudo: 'Blasters e outras armas de fogo têm diferentes tipos de munição, alcance e dano. Podem ser modificadas para melhor desempenho.'
        },
        {
          titulo: 'Armaduras e Proteção',
          conteudo: 'Diferentes tipos de armadura oferecem proteção variada. Algumas podem interferir com o uso da Força.'
        }
      ]
    },
    {
      nome: 'Regras de Navegação',
      icon: '🛸',
      cor: '#00eaff',
      desc: 'Sistema de viagens e combate espacial.',
      regras: [
        {
          titulo: 'Pilotagem',
          conteudo: 'Habilidades de pilotagem afetam o controle da nave, manobras e combate espacial. Diferentes naves têm características únicas.'
        },
        {
          titulo: 'Combate Espacial',
          conteudo: 'Sistema específico para batalhas entre naves, incluindo posicionamento, armas e escudos.'
        },
        {
          titulo: 'Hiperespaço',
          conteudo: 'Regras para viagens entre sistemas, incluindo cálculos de rota, riscos e consumo de combustível.'
        }
      ]
    },
    {
      nome: 'Regras de Interação',
      icon: '🤝',
      cor: '#00ff9d',
      desc: 'Sistema de diálogos, reputação e missões.',
      regras: [
        {
          titulo: 'Diálogos e Persuasão',
          conteudo: 'Sistema de escolhas de diálogo que afetam a reputação e o desenvolvimento da história. Habilidades sociais podem influenciar resultados.'
        },
        {
          titulo: 'Reputação',
          conteudo: 'Personagens ganham ou perdem reputação com diferentes facções baseado em suas ações. Afeta preços, missões disponíveis e reações de NPCs.'
        },
        {
          titulo: 'Missões',
          conteudo: 'Diferentes tipos de missões (principais, secundárias, aleatórias) com recompensas e consequências variadas.'
        }
      ]
    }
  ];

  // Função para inicializar o menu de combate
  function initCombateMenu() {
    const menuBtn = document.querySelector('.combate-menu-btn');
    const combateMenu = document.querySelector('.combate-menu');
    const modoDescArea = document.querySelector('.estilo-desc-content');

    console.log('Menu Button:', menuBtn);
    console.log('Menu:', combateMenu);

    if (menuBtn && combateMenu) {
      // Remover event listeners existentes
      const newMenuBtn = menuBtn.cloneNode(true);
      menuBtn.parentNode.replaceChild(newMenuBtn, menuBtn);

      newMenuBtn.addEventListener('click', function(e) {
        console.log('Menu button clicked');
        e.preventDefault();
        e.stopPropagation();
        combateMenu.classList.toggle('active');
        console.log('Menu active:', combateMenu.classList.contains('active'));
      });

      document.querySelectorAll('.combate-mode').forEach(mode => {
        mode.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = mode.getAttribute('data-idx');
          const modo = combateModes[idx];
          if (modoDescArea) {
            modoDescArea.innerHTML = `
              <div class='modo-detalhe'>
                <h3>${modo.nome}</h3>
                <div class="modo-detalhe-content">
                  <p><b>Descrição:</b> ${modo.desc}</p>
                  <p><b>Regras:</b> ${modo.regras}</p>
                  <p><b>Vantagens:</b> ${modo.vantagens}</p>
                  <p><b>Desvantagens:</b> ${modo.desvantagens}</p>
                </div>
              </div>
            `;
          }
          combateMenu.classList.remove('active');
          document.querySelectorAll('.combate-mode').forEach(m => m.classList.remove('active'));
          mode.classList.add('active');
        });
      });

      // Fechar menu ao clicar fora
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.combate-options')) {
          combateMenu.classList.remove('active');
        }
      });
    }
  }

  function showSection(section) {
    // Atualizar navLinks sempre que uma seção for exibida
    navLinks = document.querySelectorAll('.main-nav a');
    
    // Remover classe active de todos os links
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Adicionar classe active ao link atual
    const activeLink = Array.from(navLinks).find(link => link.dataset.section === section);
    if (activeLink) activeLink.classList.add('active');

    // Mostrar conteúdo da seção
    if (section === 'home') {
      sectionContent.innerHTML = `
        <div class="section-left">
          <span class="section-subtitle">Bem-vindo à Galáxia</span>
          <h1 class="section-title">Bem-Vindo à Galáxia: Ascensão Inesperada</h1>
          <div class="section-desc home-desc">
            <p>
              <b>Prepare-se para embarcar em uma jornada única pelo universo de Star Wars!</b> <br><br>
              <b>Ascensão Inesperada</b> é um projeto de RPG desenvolvido ao longo de <b>nove meses</b> de dedicação, pesquisa e paixão. Aqui, você encontrará um novo capítulo na galáxia muito, muito distante, onde <b>dramas intensos</b>, <b>romances improváveis</b>, <b>batalhas épicas</b> e <b>dilemas morais</b> se entrelaçam para criar uma experiência imersiva e inesquecível.<br><br>
              Nossa história se inicia durante a lendária era de <b>Anakin Skywalker</b>, mas se expande para territórios inexplorados, onde <b>novos heróis</b> e <b>vilões</b> surgem, prontos para desafiar o destino da galáxia. <br><br>
              <b>Qual será o seu caminho?</b> Você pode trilhar a senda de um Padawan em ascensão, tornar-se um mercador astuto, um caçador de recompensas implacável, um agente das sombras ou até mesmo um mestre da Força. <br><br>
              Este guia foi criado para ser seu <b>holocron pessoal</b>:
            </p>
            <ul class="home-list">
              <li>Descubra as <b>Espécies</b> que habitam cada canto da galáxia;</li>
              <li>Domine as <b>Habilidades da Força</b> e compreenda seus mistérios;</li>
              <li>Escolha seu <b>Caminho</b> entre as diferentes classes e estilos de vida;</li>
              <li>Explore os lendários <b><a href="#" data-section="estilos-combate" class="home-link">Estilos de Combate Jedi</a></b> e suas filosofias;</li>
              <li>Entenda a <b>Visão Geral do Sistema</b> de jogo, com regras, reputação, alinhamento e muito mais.</li>
            </ul>
            <p>
              <b>Explore, escolha, desafie e escreva sua própria lenda.</b> <br>
              Que a Força esteja com você em cada decisão!
            </p>
          </div>
          <div class="section-quote">Sua Aventura na Galáxia Começa Agora.</div>
          <div class="home-credits">
            <span>Site e sistema desenvolvidos por <b>Vitor Costa</b> &mdash; Web Developer & Estudante de Ciência da Computação.<br>
            Star Wars &copy; Lucasfilm/Disney. Este projeto é uma obra de fã, sem fins lucrativos.</span>
          </div>
        </div>
        <div class="section-right home-visual">
          <img src="images/home/galaxy-hero.png" alt="Era de Anakin Skywalker" class="home-hero-img">
          <div class="section-side-titles">
            <span>JEDIS</span>
            <span>SITH</span>
            <span>DIVERSOS</span>
          </div>
        </div>
      `;

      // Adicionar listener para o link de estilos de combate
      setTimeout(() => {
        const combateLink = document.querySelector('.home-link[data-section="estilos-combate"]');
        if (combateLink) {
          combateLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('estilos-combate');
            document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));
            document.querySelector('.main-nav a[data-section="estilos-combate"]').classList.add('active');
          });
        }
      }, 100);
    } else if (section === 'estilos-combate') {
      sectionContent.innerHTML = `
        <div class="estilos-combate-container">
          <div class="section-header">
            <span class="section-subtitle">Artes Marciais Jedi</span>
            <h1 class="section-title">Estilos de Combate Jedi</h1>
            <p class="section-desc">
              Os estilos de combate Jedi são mais do que simples técnicas de luta - são expressões da filosofia e personalidade de cada praticante. Cada estilo reflete uma abordagem única de combate e uma compreensão particular da Força.
            </p>
          </div>
          
          <div class="estilos-cards">
            ${estilosCombateList.map((estilo, idx) => `
              <div class="estilo-card" data-idx="${idx}" tabindex="0">
                <div class="estilo-img-container">
                  <img src="${estilo.img}" alt="${estilo.nome}" class="estilo-img">
                </div>
                <div class="estilo-nome">${estilo.nome}</div>
              </div>
            `).join('')}
          </div>
          
          <div class="estilo-desc-area">
            <div class="estilo-desc-content">
              <span class="estilo-desc-placeholder">Selecione um estilo para ver detalhes.</span>
            </div>
          </div>
        </div>
      `;
      
      // Interatividade: mostrar descrição ao clicar/focar
      setTimeout(() => {
        const descArea = document.querySelector('.estilo-desc-content');
        document.querySelectorAll('.estilo-card').forEach(card => {
          card.addEventListener('click', () => {
            const idx = card.getAttribute('data-idx');
            const estilo = estilosCombateList[idx];
            descArea.innerHTML = `
              <div class='estilo-detalhe'>
                <h3>${estilo.titulo}</h3>
                <div class="estilo-detalhe-content">${estilo.desc}</div>
              </div>
            `;
            document.querySelectorAll('.estilo-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
          });
          
          card.addEventListener('focus', () => {
            const idx = card.getAttribute('data-idx');
            const estilo = estilosCombateList[idx];
            descArea.innerHTML = `
              <div class='estilo-detalhe'>
                <h3>${estilo.titulo}</h3>
                <div class="estilo-detalhe-content">${estilo.desc}</div>
              </div>
            `;
            document.querySelectorAll('.estilo-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
          });
        });
      }, 100);
    } else if (section === 'racas') {
      sectionContent.innerHTML = `
        <div class="section-left">
          <span class="section-subtitle">Bem-vindo à Galáxia</span>
          <h1 class="section-title">ESPÉCIES DA GALÁXIA</h1>
          <p class="section-desc">Das profundezas de Dagobah às alturas de Coruscant, explore as diversas espécies que habitam a galáxia muito, muito distante. Cada uma com habilidades únicas, culturas e papéis.</p>
          <div class="section-quote">A Diversidade impulsiona a Força.</div>
          
          <div class="racas-container">
            <div class="racas-cards">
              ${racasList.map((raca, idx) => `
                <div class="raca-card" data-idx="${idx}" tabindex="0">
                  <div class="raca-img-container">
                    <img src="${raca.img}" alt="${raca.nome}" class="raca-img">
                  </div>
                  <div class="raca-nome">${raca.nome}</div>
                </div>
              `).join('')}
            </div>
            <div class="raca-desc-area">
              <div class="raca-desc-content">
                <span class="raca-desc-placeholder">Selecione uma raça para ver detalhes.</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section-right">
          <div class="racas-bg-icons">
            <span class="icon-republica">&#9737;</span>
            <span class="icon-imperio">&#9760;</span>
            <span class="icon-jedi">&#10024;</span>
            <span class="icon-sith">&#9762;</span>
          </div>
          <svg class="racas-holo-lines" viewBox="0 0 400 200">
            <path d="M0,100 Q100,0 200,100 T400,100" stroke="#00eaff55" stroke-width="2" fill="none"/>
          </svg>
        </div>
      `;
      
      // Interatividade: mostrar descrição ao clicar/focar
      setTimeout(() => {
        const descArea = document.querySelector('.raca-desc-content');
        document.querySelectorAll('.raca-card').forEach(card => {
          card.addEventListener('click', () => {
            const idx = card.getAttribute('data-idx');
            const raca = racasList[idx];
            descArea.innerHTML = `
              <div class='raca-detalhe'>
                <h3>${raca.nome}</h3>
                <div class="raca-detalhe-content">
                  <p><b>Origem:</b> ${raca.origem || 'Planeta natal desconhecido'}</p>
                  <p><b>Características:</b> ${raca.caracteristicas || 'Espécie única com habilidades especiais'}</p>
                  <p><b>Habilidades Naturais:</b> ${raca.habilidades || 'Adaptação natural ao seu ambiente'}</p>
                </div>
              </div>
            `;
            // Adicionar classe ativa ao card selecionado
            document.querySelectorAll('.raca-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
          });
          
          card.addEventListener('focus', () => {
            const idx = card.getAttribute('data-idx');
            const raca = racasList[idx];
            descArea.innerHTML = `
              <div class='raca-detalhe'>
                <h3>${raca.nome}</h3>
                <div class="raca-detalhe-content">
                  <p><b>Origem:</b> ${raca.origem || 'Planeta natal desconhecido'}</p>
                  <p><b>Características:</b> ${raca.caracteristicas || 'Espécie única com habilidades especiais'}</p>
                  <p><b>Habilidades Naturais:</b> ${raca.habilidades || 'Adaptação natural ao seu ambiente'}</p>
                </div>
              </div>
            `;
            // Adicionar classe ativa ao card selecionado
            document.querySelectorAll('.raca-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
          });
        });
      }, 100);
    } else if (section === 'habilidades') {
      sectionContent.innerHTML = `
        <div class="section-left">
          <span class="section-subtitle">Bem-vindo à Galáxia</span>
          <h1 class="section-title">DOMINAR A FORÇA</h1>
          <p class="section-desc">A Força flui através de todos os seres vivos, mas como alguém a manipula define seu destino. Da telecinese aos relâmpagos, da persuasão à precognição, aprenda os poderes que moldam a galáxia.</p>
          <div class="section-quote">O Equilíbrio é uma escolha. O Poder é um caminho.</div>
          
          <div class="habilidades-container">
            <div class="habilidades-cards">
              ${habilidadesList.map((habilidade, idx) => `
                <div class="habilidade-card" data-idx="${idx}" tabindex="0" style="--cor:${habilidade.cor}">
                  <div class="habilidade-icon">${habilidade.icon}</div>
                  <div class="habilidade-nome">${habilidade.nome}</div>
                </div>
              `).join('')}
            </div>
            <div class="habilidade-desc-area">
              <div class="habilidade-desc-content">
                <span class="habilidade-desc-placeholder">Selecione uma habilidade para ver detalhes.</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section-right">
          <div class="habilidades-console">
            <div class="jedi-holo"></div>
            <div class="sith-holo"></div>
          </div>
          <svg class="habilidades-holo-lines" viewBox="0 0 400 200">
            <path d="M20,180 Q200,20 380,180" stroke="#00eaff55" stroke-width="2" fill="none"/>
          </svg>
        </div>
      `;
      
      // Interatividade: mostrar descrição ao clicar/focar
      setTimeout(() => {
        const descArea = document.querySelector('.habilidade-desc-content');
        document.querySelectorAll('.habilidade-card').forEach(card => {
          card.addEventListener('click', () => {
            const idx = card.getAttribute('data-idx');
            const habilidade = habilidadesList[idx];
            descArea.innerHTML = `
              <div class='habilidade-detalhe'>
                <h3>${habilidade.nome}</h3>
                <div class="habilidade-detalhe-content">
                  <p><b>Descrição:</b> ${habilidade.desc}</p>
                  <p><b>Nível de Poder:</b> ${habilidade.nivel || 'Intermediário'}</p>
                  <p><b>Requisitos:</b> ${habilidade.requisitos || 'Conexão com a Força'}</p>
                  <p><b>Alinhamento:</b> ${habilidade.alinhamento || 'Ambos os lados da Força'}</p>
                </div>
              </div>
            `;
            // Adicionar classe ativa ao card selecionado
            document.querySelectorAll('.habilidade-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
          });
          
          card.addEventListener('focus', () => {
            const idx = card.getAttribute('data-idx');
            const habilidade = habilidadesList[idx];
            descArea.innerHTML = `
              <div class='habilidade-detalhe'>
                <h3>${habilidade.nome}</h3>
                <div class="habilidade-detalhe-content">
                  <p><b>Descrição:</b> ${habilidade.desc}</p>
                  <p><b>Nível de Poder:</b> ${habilidade.nivel || 'Intermediário'}</p>
                  <p><b>Requisitos:</b> ${habilidade.requisitos || 'Conexão com a Força'}</p>
                  <p><b>Alinhamento:</b> ${habilidade.alinhamento || 'Ambos os lados da Força'}</p>
                </div>
              </div>
            `;
            // Adicionar classe ativa ao card selecionado
            document.querySelectorAll('.habilidade-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
          });
        });
      }, 100);
    } else if (section === 'classes') {
      sectionContent.innerHTML = `
        <div class="section-left">
          <span class="section-subtitle">Bem-vindo à Galáxia</span>
          <h1 class="section-title">CAMINHOS DA GALÁXIA</h1>
          <p class="section-desc">Nem todos seguem o caminho da Força. Alguns dominam a tecnologia, outros o combate. Escolha seu papel, molde seu destino.</p>
          <div class="section-quote">Todo caminho leva a um legado.</div>
          
          <div class="classes-container">
            <div class="classes-cards">
              ${classesList.map((classe, idx) => `
                <div class="classe-card" data-idx="${idx}" tabindex="0" style="--cor:${classe.cor}">
                  <div class="classe-icon">${classe.icon}</div>
                  <div class="classe-nome">${classe.nome}</div>
                </div>
              `).join('')}
            </div>
            <div class="classe-desc-area">
              <div class="classe-desc-content">
                <span class="classe-desc-placeholder">Selecione uma classe para ver detalhes.</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section-right">
          <svg class="classes-holo-lines" viewBox="0 0 400 200">
            <circle cx="200" cy="100" r="90" stroke="#00eaff55" stroke-width="2" fill="none"/>
            <circle cx="200" cy="100" r="40" stroke="#a100ff55" stroke-width="1.5" fill="none"/>
          </svg>
          <div class="classes-stars">
            <span class="star" style="top:10%;left:20%"></span>
            <span class="star" style="top:60%;left:80%"></span>
            <span class="star" style="top:30%;left:60%"></span>
            <span class="star" style="top:80%;left:30%"></span>
          </div>
        </div>
      `;
      
      // Interatividade: mostrar descrição ao clicar/focar
      setTimeout(() => {
        const descArea = document.querySelector('.classe-desc-content');
        document.querySelectorAll('.classe-card').forEach(card => {
          card.addEventListener('click', () => {
            const idx = card.getAttribute('data-idx');
            const classe = classesList[idx];
            descArea.innerHTML = `
              <div class='classe-detalhe'>
                <h3>${classe.nome}</h3>
                <div class="classe-detalhe-content">
                  <p><b>Descrição:</b> ${classe.desc}</p>
                  <p><b>Habilidades Principais:</b> ${classe.habilidades || 'Combate corpo a corpo e defesa'}</p>
                  <p><b>Equipamento Típico:</b> ${classe.equipamento || 'Sabre de luz e armadura Jedi'}</p>
                  <p><b>Alinhamento:</b> ${classe.alinhamento || 'Lado Luminoso da Força'}</p>
                </div>
              </div>
            `;
            // Adicionar classe ativa ao card selecionado
            document.querySelectorAll('.classe-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
          });
          
          card.addEventListener('focus', () => {
            const idx = card.getAttribute('data-idx');
            const classe = classesList[idx];
            descArea.innerHTML = `
              <div class='classe-detalhe'>
                <h3>${classe.nome}</h3>
                <div class="classe-detalhe-content">
                  <p><b>Descrição:</b> ${classe.desc}</p>
                  <p><b>Habilidades Principais:</b> ${classe.habilidades || 'Combate corpo a corpo e defesa'}</p>
                  <p><b>Equipamento Típico:</b> ${classe.equipamento || 'Sabre de luz e armadura Jedi'}</p>
                  <p><b>Alinhamento:</b> ${classe.alinhamento || 'Lado Luminoso da Força'}</p>
                </div>
              </div>
            `;
            // Adicionar classe ativa ao card selecionado
            document.querySelectorAll('.classe-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
          });
        });
      }, 100);
    } else if (section === 'sistema') {
      sectionContent.innerHTML = `
        <div class="section-left">
          <span class="section-subtitle">Bem-vindo à Galáxia</span>
          <h1 class="section-title">VISÃO GERAL DO SISTEMA</h1>
          <p class="section-desc">Um sistema detalhado projetado para imergir você no universo Star Wars. Combate, maestria da Força, reputação, alinhamento e muito mais.</p>
          <div class="section-quote">Seu destino é seu para forjar.</div>
          
          <div class="sistema-container">
            <div class="sistema-cards">
              ${sistemaList.map((sistema, idx) => `
                <div class="sistema-card" data-idx="${idx}" tabindex="0" style="--cor:${sistema.cor}">
                  <div class="sistema-icon">${sistema.icon}</div>
                  <div class="sistema-nome">${sistema.nome}</div>
                </div>
              `).join('')}
            </div>
            <div class="sistema-desc-area">
              <div class="sistema-desc-content">
                <span class="sistema-desc-placeholder">Selecione um aspecto do sistema para ver detalhes.</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section-right">
          <div class="sistema-holo-panel">
            <svg class="sistema-circuit" viewBox="0 0 400 200">
              <polyline points="10,100 100,30 200,100 300,170 390,100" stroke="#00eaff55" stroke-width="2" fill="none"/>
              <circle cx="100" cy="30" r="6" fill="#00eaff"/>
              <circle cx="200" cy="100" r="6" fill="#a100ff"/>
              <circle cx="300" cy="170" r="6" fill="#ffb300"/>
            </svg>
            <div class="sistema-icons">
              <span title="Nave"><span class="sistema-icon">🛸</span></span>
              <span title="Sabre de Luz"><span class="sistema-icon">🗡️</span></span>
              <span title="Planeta"><span class="sistema-icon">🪐</span></span>
            </div>
          </div>
        </div>
      `;
      
      // Interatividade: mostrar descrição ao clicar/focar
      setTimeout(() => {
        const descArea = document.querySelector('.sistema-desc-content');
        document.querySelectorAll('.sistema-card').forEach(card => {
          card.addEventListener('click', () => {
            const idx = card.getAttribute('data-idx');
            const sistema = sistemaList[idx];
            descArea.innerHTML = `
              <div class='sistema-detalhe'>
                <h3>${sistema.nome}</h3>
                <div class="sistema-detalhe-content">
                  <p><b>Descrição:</b> ${sistema.desc}</p>
                  <p><b>Mecânicas:</b> ${sistema.mecanicas}</p>
                  <p><b>Interações:</b> ${sistema.interacoes}</p>
                  <p><b>Desenvolvimento:</b> ${sistema.desenvolvimento}</p>
                </div>
              </div>
            `;
            document.querySelectorAll('.sistema-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
          });
          
          card.addEventListener('focus', () => {
            const idx = card.getAttribute('data-idx');
            const sistema = sistemaList[idx];
            descArea.innerHTML = `
              <div class='sistema-detalhe'>
                <h3>${sistema.nome}</h3>
                <div class="sistema-detalhe-content">
                  <p><b>Descrição:</b> ${sistema.desc}</p>
                  <p><b>Mecânicas:</b> ${sistema.mecanicas}</p>
                  <p><b>Interações:</b> ${sistema.interacoes}</p>
                  <p><b>Desenvolvimento:</b> ${sistema.desenvolvimento}</p>
                </div>
              </div>
            `;
            document.querySelectorAll('.sistema-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
          });
        });
      }, 100);
    } else if (section === 'regras') {
      sectionContent.innerHTML = `
        <div class="section-left">
          <span class="section-subtitle">Bem-vindo à Galáxia</span>
          <h1 class="section-title">REGRAS DO SISTEMA</h1>
          <p class="section-desc">Um guia detalhado de todas as regras e mecânicas do sistema, organizado por categorias para fácil consulta.</p>
          <div class="section-quote">O conhecimento é o caminho para a maestria.</div>
          
          <div class="regras-container">
            <div class="regras-cards">
              ${regrasList.map((regra, idx) => `
                <div class="regra-card" data-idx="${idx}" tabindex="0" style="--cor:${regra.cor}">
                  <div class="regra-icon">${regra.icon}</div>
                  <div class="regra-info">
                    <h3 class="regra-nome">${regra.nome}</h3>
                    <p class="regra-desc">${regra.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
            <div class="regra-desc-area">
              <div class="regra-desc-content">
                <span class="regra-desc-placeholder">Selecione uma categoria de regras para ver detalhes.</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section-right">
          <div class="regras-holo-panel">
            <svg class="regras-circuit" viewBox="0 0 400 200">
              <path d="M20,100 Q100,20 200,100 T380,100" stroke="#00eaff55" stroke-width="2" fill="none"/>
              <circle cx="100" cy="20" r="6" fill="#00eaff"/>
              <circle cx="200" cy="100" r="6" fill="#a100ff"/>
              <circle cx="300" cy="180" r="6" fill="#ffb300"/>
            </svg>
          </div>
        </div>
      `;
      
      // Interatividade: mostrar descrição ao clicar/focar
      setTimeout(() => {
        const descArea = document.querySelector('.regra-desc-content');
        document.querySelectorAll('.regra-card').forEach(card => {
          card.addEventListener('click', () => {
            const idx = card.getAttribute('data-idx');
            const regra = regrasList[idx];
            descArea.innerHTML = `
              <div class='regra-detalhe'>
                <h3>${regra.nome}</h3>
                <div class="regra-detalhe-content">
                  ${regra.regras.map(r => `
                    <div class="regra-item">
                      <h4>${r.titulo}</h4>
                      <p>${r.conteudo}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
            document.querySelectorAll('.regra-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
          });
          
          card.addEventListener('focus', () => {
            const idx = card.getAttribute('data-idx');
            const regra = regrasList[idx];
            descArea.innerHTML = `
              <div class='regra-detalhe'>
                <h3>${regra.nome}</h3>
                <div class="regra-detalhe-content">
                  ${regra.regras.map(r => `
                    <div class="regra-item">
                      <h4>${r.titulo}</h4>
                      <p>${r.conteudo}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
            document.querySelectorAll('.regra-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
          });
        });
      }, 100);
    } else {
      const data = sections[section] || sections.home;
      sectionContent.innerHTML = `
        <div class="section-left">
          <span class="section-subtitle">${data.subtitle}</span>
          <h1 class="section-title">${data.title}</h1>
          <p class="section-desc">${data.desc}</p>
        </div>
        <div class="section-right">
          <div class="section-visual-placeholder">[Visual Star Wars]</div>
          <div class="section-side-titles">
            <span>JEDIS</span>
            <span>SITH</span>
            <span>DIVERSOS</span>
          </div>
        </div>
      `;
    }
  }

  // Botão da Landing Page
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      landing.classList.remove('active');
      setTimeout(() => {
        landing.style.display = 'none';
        mainApp.classList.add('active');
        showSection('home');
      }, 700);
    });
  }

  function addNavListeners() {
    document.querySelectorAll('.main-nav a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = e.target.getAttribute('data-section');
        if (section) {
          showSection(section);
          document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));
          e.target.classList.add('active');
        }
      });
    });
  }

  function renderNavMenu() {
    const nav = document.querySelector('.main-nav ul');
    nav.innerHTML = navMenuOrder.map(item => 
      `<li><a href="#${item}" data-section="${item}">${item}</a></li>`
    ).join('');
    addNavListeners();
  }

  // Inicialização
  renderNavMenu();

  // Carregar seção correta ao acessar via hash
  if (window.location.hash) {
    landing.classList.remove('active');
    landing.style.display = 'none';
    mainApp.classList.add('active');
    const section = window.location.hash.replace('#', '');
    showSection(section);
  }
});