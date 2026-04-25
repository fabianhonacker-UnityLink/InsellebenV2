(() => {
  const DBG_VERSION = 'DBG-32';
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => document.body.classList.toggle('menu-open'));
  }

  const currentPath = location.pathname.split('/').pop() || 'index.html';
  const isStartPage = /index\.html$/.test(currentPath) || currentPath === '' || currentPath === '/';

  // Navigation state + remove Tebex Store link globally
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === 'store.html') {
      link.remove();
      return;
    }
    const href = link.getAttribute('href');
    link.classList.toggle('is-active', href === currentPath);
  });

  const rules = [{"id": "allgemein", "title": "Allgemeines", "intro": "Grundsätze rund um Gültigkeit, Annahme und Anpassung des Regelwerks.", "items": [["§1.0", "Die Serverleitung steht über dem Regelwerk."], ["§1.1", "Dieses Regelwerk gilt für alle Spieler auf dem Server."], ["§1.2", "Mit dem Betreten des Servers akzeptierst du automatisch alle Regeln."], ["§1.3", "Unwissenheit schützt nicht vor Strafe."], ["§1.4", "Die Serverleitung behält sich das Recht vor, Regeln jederzeit anzupassen oder zu ergänzen."], ["§1.5", "Aktives Fremdwerben für andere Projekte ist nicht gestattet und führt zum direkten Ausschluss des Projekts."], ["§1.6", "Streitigkeiten außerhalb des RPs werden nicht geduldet. Was im RP passiert, sollte auch im RP bleiben."], ["§1.7", "Das Inselleben-RP-Team behält sich vor, Spieler bei mangelnder RP-Qualität aus dem Projekt auszuschließen."]]}, {"id": "verhalten", "title": "Serverregeln & Verhalten", "intro": "Respekt, Fairness und störungsfreies Miteinander stehen an erster Stelle.", "items": [["§2.1", "Jeder Spieler hat sich respektvoll gegenüber anderen Spielern, Supportern und Administratoren zu verhalten."], ["§2.2", "Diskriminierung, Beleidigungen, Rassismus, Sexismus oder jegliche Form von Hetze sind strengstens verboten."], ["§2.3", "Voicechat und Chat sind Teil des Roleplays. Spam, Musik oder Störungen sind zu unterlassen. Ein funktionsfähiges Kommunikations-Equipment ist sicherzustellen. Die Nutzung eines Stimmverzerrers ist untersagt."], ["§2.4", "Cheats, Mod-Menüs, Exploits oder das Ausnutzen von Bugs führen zum permanenten Ausschluss. Darunter zählen auch Crosshairs."], ["§2.5", "Entscheidungen des Supports sind zu respektieren. Diskussionen sind sachlich zu führen."], ["§2.6", "Teammitglieder mit sichtbarem Tag sind zu ignorieren, es sei denn, man wird aktiv angesprochen."], ["§2.7", "Teammitglieder sowie Streamer sind als normale Spieler zu betrachten. Teammitglieder ohne sichtbaren Tag dürfen nicht auf Support-Fälle oder damit verbundene Probleme angesprochen werden."], ["§2.8", "Das Spielen auf dem Server unter Alkohol- oder Drogeneinfluss ist strengstens untersagt."], ["§2.9", "Spieler mit Vollmaskierung dürfen nicht an Stimme oder Dialekt erkannt werden. Bei einer Vollmaskierung muss das gesamte Gesicht bedeckt sein. Nur Fraktions-Bandanas zählen in Verbindung mit einer Sonnenbrille als Vollmaskierung."], ["§2.10", "Das Nachspielen von Terroranschlägen oder Amokläufern ist verboten und führt zum sofortigen Ausschluss."], ["§2.11", "Random Deathmatch und Vehicle Deathmatch sind untersagt."], ["§2.12", "Baiting jeglicher Art ist untersagt."], ["§2.13", "Bug-Using ist untersagt. Darunter zählt unter anderem das Ein- und wieder Ausparken eines Fahrzeugs zur Reparatur."], ["§2.14", "Jegliche Art von Trolling oder vorsätzlichem Stören von RP-Situationen führt zum direkten Ausschluss."], ["§2.15", "Beleidigungen müssen zur RP-Situation passen. Blacklist-Wörter sind verboten."], ["§2.16", "Bewusstlose Personen dürfen nur unter den festgelegten Bedingungen durchsucht werden."], ["§2.17", "Millionenstadt-Prinzip: Die Stadt gilt immer als groß und belebt. Handlungen dürfen nicht auf niedriger Spielerzahl basieren."], ["§2.18", "Die Änderung einer Fraktionsleitung muss von der Fraktionsverwaltung genehmigt werden. Mindestalter zum Führen einer Fraktion: 18 Jahre, Ausnahmen unterliegen der Serverleitung."]]}, {"id": "rp", "title": "Roleplay-Grundlagen", "intro": "Hier wird festgelegt, wie immersives und glaubwürdiges RP auf Inselleben RP verstanden wird.", "items": [["§3.1", "Roleplay bedeutet, einen Charakter realistisch und immersiv auszuspielen."], ["§3.2", "Dein Charakter benötigt einen glaubwürdigen Namen. Fantasie- oder Promi-Namen sind nicht erlaubt."], ["§3.3", "Charaktertod: PK bedeutet Erinnerungsverlust an das Ereignis. CK bedeutet endgültigen Tod des Charakters und muss entsprechend genehmigt sein."], ["§3.4", "Verbotene RP-Formen: Fail-RP, Power-RP und fehlendes Fear-RP."], ["§3.5", "Combat Logging während einer RP-Situation ist verboten. Nach Gamecrashs ist die Situation fortzuführen oder dem Team zu melden."], ["§3.6", "Stream-Sniping oder Meta-Informationen aus Streams sind verboten."], ["§3.7", "Nach dem Verbinden mit dem Server ist OOC-Sprechen außerhalb des Spielcharakters untersagt."]]}, {"id": "kriminalitaet", "title": "Kriminalität", "intro": "Illegales RP ist erlaubt, aber nur mit nachvollziehbarem Hintergrund und klaren Grenzen.", "items": [["§4.1", "Mafia oder Kartell sind nur mit Genehmigung des Serverteams erlaubt."], ["§4.2", "Ein Zusammenschluss für illegale Aktionen ist nur mit bis zu fünf Bürgern erlaubt, sofern diese keiner illegalen Fraktion angehören."], ["§4.3", "Beteiligte illegaler Aktivitäten müssen durch mindestens zwei klare Merkmale identifizierbar sein."], ["§4.4", "Überfälle und Entführungen müssen einen RP-Hintergrund haben und dürfen nicht grundlos erfolgen."], ["§4.5", "Überfälle auf Spieler sind nur bei angemessener RP-Situation erlaubt."], ["§4.6", "Geiselnahmen müssen realistisch bleiben. Das maximale Lösegeld pro Geisel beträgt 25.000€. NPCs dürfen nicht als Geiseln genommen werden."], ["§4.7", "Drogenhandel oder Waffenschmuggel müssen im RP ausgespielt werden."], ["§4.8", "Ein Fluchtfahrzeug muss bereitstehen. Fahrzeuge dürfen in Verfolgungen nicht einfach eingeparkt werden."], ["§4.9", "Taser, Schlagstock oder Pfefferspray dürfen Polizisten nicht abgenommen werden."], ["§4.10", "Jeder illegalen Fraktion ist ein Bündnis mit einer anderen illegalen Fraktion gestattet. Bei Raubüberfällen dürfen diese nicht gemeinsam agieren."], ["§4.11", "Bei Auseinandersetzungen zwischen Gruppierungen darf es keine zivilen Opfer geben, außer Zivilisten mischen sich aktiv ein."], ["§4.12", "Gangs und Banden haben zusätzliche interne Regeln, die genehmigt sein müssen."]]}, {"id": "staat", "title": "Polizei & staatliche Fraktionen", "intro": "Staatliche Fraktionen handeln verhältnismäßig, strukturiert und an Gesetze gebunden.", "items": [["§5.1", "Die Polizei ist an Gesetze und Dienstvorschriften gebunden."], ["§5.2", "Polizeigewalt darf nur verhältnismäßig eingesetzt werden."], ["§5.3", "Schusswaffen sind das letzte Mittel und dürfen nur bei akuter Bedrohung eingesetzt werden."], ["§5.4", "Verfolgungen und Festnahmen müssen realistisch und verhältnismäßig sein."], ["§5.5", "Fraktionen dürfen nur durch die Serverleitung gegründet werden."], ["§5.6", "Haft- und Bußgeldregelungen sind an feste Grenzen gebunden. Höchsthaftzeit: 180 Hafteinheiten."], ["§5.7", "Tasern aus Fahrzeugen ist nicht erlaubt."], ["§5.8", "Pitten während einer Verfolgungsjagd ist erst nach 10 Minuten und Freigabe des höchstrangigen Beamten gestattet."], ["§5.9", "Stürmungen sind nur dem SEK erlaubt."], ["§5.10", "Das SEK darf Geiseln befreien, sobald eine realistische Chance besteht."], ["§5.11", "Festnahmen während des Laufens sind nicht gestattet."], ["§5.12", "Beamte dürfen nach einer Verhaftung Kommunikationsmittel abnehmen, müssen diese aber später zurückgeben."], ["§5.13", "Polizeitransporte dürfen unter den festgelegten Bedingungen überfallen werden."], ["§5.14", "NPC-Fahrzeuge dürfen nur abgeschleppt werden, wenn kein Abschleppdienst erreichbar ist."]]}, {"id": "medic", "title": "Medizinischer Dienst & Feuerwehr", "intro": "Rettungsdienst und Feuerwehr sind ein wichtiger Teil der Spielwelt und besonders geschützt.", "items": [["§6.1", "Wiederbelebte Spieler erinnern sich an die Situation bis zur Bewusstlosigkeit."], ["§6.2", "Medic-RP muss ausgespielt werden."], ["§6.3", "Beim Ausbluten verliert der Spieler die Erinnerung an die tödliche Situation. Frühere Straftaten und Erinnerungen bleiben bestehen."], ["§6.4", "Mitarbeiter von Rettungsdienst, Feuerwehr und Klinikum sind unantastbar, sofern keine Provokation von ihnen ausgeht."], ["§6.5", "Dauerhaftes Wiederbeleben per Herz-Lungen-Massage zur künstlichen Verlängerung des Ausblutens ist verboten."]]}, {"id": "wirtschaft", "title": "Wirtschaft & Unternehmen", "intro": "Arbeit, Unternehmen und Fraktionsstruktur sollen aktiv und glaubwürdig ausgespielt werden.", "items": [["§7.1", "Jeder Spieler darf zwei Jobs haben. Ein dritter Job ist als ehrenamtliche Tätigkeit möglich."], ["§7.2", "Unternehmensgründungen müssen beantragt und genehmigt werden."], ["§7.3", "Unternehmen müssen aktiv betrieben und ins RP eingebunden werden."], ["§7.4", "Nach dem Verlassen einer Fraktion gilt eine dreitägige Fraktionssperre. Praktika bis zu 24 Stunden sind möglich."], ["§7.5", "Paycheck-Farming ist verboten."], ["§7.6", "Staatliche Fraktionen dürfen Sperrzonen nur mit aufgebauter Straßensperre errichten."]]}, {"id": "fahrzeuge", "title": "Fahrzeug- & Waffenregeln", "intro": "Realistisches Fahren und glaubwürdiger Umgang mit Waffen gehören zum Grundverständnis des Servers.", "items": [["§8.1", "Offroad-Fahren ist nur mit geländefähigen Fahrzeugen erlaubt."], ["§8.2", "Extras und Anbauteile dürfen nur im Stillstand verändert werden."], ["§8.3", "Langwaffen dürfen nur mit Tasche oder aus einem Auto gezogen werden."], ["§8.4", "Drive-bys sind nur Mitfahrern erlaubt, nicht dem Fahrer."], ["§8.5", "Mit zwei oder mehr platten Reifen ist das Weiterfahren verboten."]]}, {"id": "metagaming", "title": "Metagaming", "intro": "Alles, was dein Charakter nicht ingame weiß, darf auch nicht im RP genutzt werden.", "items": [["§9.1", "Metagaming ist verboten."], ["§9.2", "Streamer dürfen Informationen aus dem Live-Chat nicht im RP verwenden."], ["§9.3", "Niemand darf einen Streamer auf dem Server schauen, während er selbst auf dem Server spielt."], ["§9.4", "Streamsniping und das Ausnutzen von Livestream-Informationen sind verboten."], ["§9.5", "Scripted-RP, also Absprachen außerhalb des RP, ist nicht erlaubt."], ["§9.6", "In den Einreise-Fliegern Richtung Bitterhafen gibt es ausschließlich gebratene Nudeln mit Ente zu essen."]]}, {"id": "support", "title": "Support-Regeln", "intro": "Support ist da, um fair zu klären, nicht um auszuweichen oder Situationen zu verzerren.", "items": [["§10.1", "Jeder Spieler ist verpflichtet, Regelverstöße im Support zu melden."], ["§10.2", "Falschangaben bei Reports oder im Support können zum Ausschluss führen."], ["§10.3", "Das Aufzeichnen von Support-Gesprächen ist nicht gestattet."], ["§10.4", "Supportfälle sind grundsätzlich nur mit Videobeweis gültig, ausgenommen Modder-Situationen."]]}, {"id": "schlusswort", "title": "Schlusswort", "intro": "Der Rahmen, in dem das Regelwerk gilt und angepasst werden kann.", "items": [["§11.1", "Dieses Regelwerk tritt mit Veröffentlichung in Kraft."], ["§11.2", "Änderungen können jederzeit erfolgen und sind verbindlich."], ["§11.3", "Die Serverleitung übernimmt keine Haftung für Schäden oder Verluste durch Regelverstöße anderer Spieler."]]}];

  const tabs = document.getElementById('rule-tabs');
  const content = document.getElementById('rules-content');
  const search = document.getElementById('rule-search');

  if (tabs && content) {
    let activeCategory = 'all';
    const renderTabs = () => {
      tabs.innerHTML = '';
      const all = document.createElement('button');
      all.className = 'tab-pill' + (activeCategory === 'all' ? ' is-active' : '');
      all.type = 'button';
      all.textContent = 'Alle Kategorien';
      all.addEventListener('click', () => { activeCategory = 'all'; renderTabs(); renderRules(search?.value || ''); });
      tabs.appendChild(all);
      rules.forEach(rule => {
        const btn = document.createElement('button');
        btn.className = 'tab-pill' + (activeCategory === rule.id ? ' is-active' : '');
        btn.type = 'button';
        btn.textContent = rule.title;
        btn.addEventListener('click', () => { activeCategory = rule.id; renderTabs(); renderRules(search?.value || ''); });
        tabs.appendChild(btn);
      });
    };
    const createRuleItem = (id, text) => {
      const article = document.createElement('article');
      article.className = 'rule-item';
      article.innerHTML = `<strong>${id}</strong><p>${text}</p>`;
      return article;
    };
    const renderRules = (query='') => {
      const q = query.trim().toLowerCase();
      content.innerHTML = '';
      const filteredCategories = rules.filter(category => activeCategory === 'all' || category.id === activeCategory);
      filteredCategories.forEach(category => {
        const matchedItems = category.items.filter(([id, text]) => (`${category.title} ${category.intro} ${id} ${text}`.toLowerCase()).includes(q) || !q);
        if (!matchedItems.length) return;
        const section = document.createElement('section');
        section.className = 'rule-section glass-card is-open';
        const header = document.createElement('button');
        header.type = 'button';
        header.className = 'rule-section-header';
        header.innerHTML = `<div><h3>${category.title}</h3><p>${category.intro}</p></div><span class="rule-chevron"></span>`;
        const body = document.createElement('div');
        body.className = 'rule-section-body';
        const list = document.createElement('div');
        list.className = 'rule-list';
        matchedItems.forEach(([id, text]) => list.appendChild(createRuleItem(id, text)));
        body.appendChild(list);
        header.addEventListener('click', () => section.classList.toggle('is-open'));
        section.appendChild(header);
        section.appendChild(body);
        content.appendChild(section);
      });
      if (!content.children.length) {
        const empty = document.createElement('article');
        empty.className = 'glass-card';
        empty.style.padding = '28px';
        empty.innerHTML = '<h3>Keine Treffer gefunden</h3><p style="color:var(--muted);line-height:1.7">Versuch es mit einem anderen Begriff oder wechsle die Kategorie.</p>';
        content.appendChild(empty);
      }
    };
    renderTabs();
    renderRules();
    if (search) search.addEventListener('input', (event) => renderRules(event.target.value));
  }

  
  // Live stats on start page
  async function updateLiveStats() {
    if (!isStartPage) return;

    const fiveMCode = 'yg8z9k';
    const discordInvite = 'YhVeud3Suz';

    const serverCard = document.querySelector('[data-live-card="server"]');
    const serverCount = document.querySelector('[data-live-server-count]');
    const serverStatus = serverCard?.querySelector('.dual-live-status');

    const discordCard = document.querySelector('[data-live-card="discord"]');
    const discordCount = document.querySelector('[data-live-discord-count]');
    const discordStatus = discordCard?.querySelector('.dual-live-status');

    let serverPlayers = 0;
    let serverMax = 64;
    let discordOnline = 42;
    let discordTotal = 205;

    try {
      const res = await fetch(`https://servers-frontend.fivem.net/api/servers/single/${fiveMCode}`);
      const data = await res.json();
      serverPlayers = Number(data?.Data?.clients ?? 0);
      serverMax = Number(data?.Data?.sv_maxclients ?? 64);
    } catch (e) {}

    try {
      const res = await fetch(`https://discord.com/api/v9/invites/${discordInvite}?with_counts=true`);
      const data = await res.json();
      discordOnline = Number(data?.approximate_presence_count ?? discordOnline);
      discordTotal = Number(data?.approximate_member_count ?? discordTotal);
    } catch (e) {}

    if (serverCount) serverCount.textContent = `${serverPlayers} / ${serverMax}`;
    if (serverStatus) serverStatus.textContent = serverPlayers > 0 ? 'Server live' : 'Server erreichbar';

    if (discordCount) discordCount.textContent = `${discordOnline} / ${discordTotal}`;
    if (discordStatus) discordStatus.textContent = 'Mitglieder online';

    let headerBadge = document.querySelector('.header-live-badge');
    const headerActions = document.querySelector('.header-actions');
    if (!headerBadge && headerActions) {
      headerBadge = document.createElement('a');
      headerBadge.className = 'header-live-badge';
      headerBadge.href = `https://cfx.re/join/${fiveMCode}`;
      headerBadge.target = '_blank';
      headerBadge.rel = 'noreferrer';
      headerActions.prepend(headerBadge);
    }
    if (headerBadge) {
      headerBadge.innerHTML = `
        <img class="header-live-badge-bg" src="assets/media/logo-v4-cropped.png?v=dbg29" alt="" aria-hidden="true">
        <span class="header-live-badge-copy">
          <span class="header-live-badge-state"><span class="status-dot is-live"></span>Server live</span>
          <strong class="header-live-badge-value">${serverPlayers} / ${serverMax}</strong>
        </span>`;
    }
  }
  if (isStartPage) updateLiveStats();


  // Debug badge on every page
  const pageMap = {
    'index.html': 'Startseite + Live-Stats',
    'philosophie.html': 'Subpage Hero mittig',
    'geschichte.html': 'Subpage Hero mittig',
    'regelwerk.html': 'Subpage Hero mittig',
    'team.html': 'Subpage Hero mittig',
    'impressum.html': 'Subpage Hero mittig',
  };
  let badge = document.querySelector('.debug-badge');
  if (!badge) {
    badge = document.createElement('div');
    badge.className = 'debug-badge';
    document.body.appendChild(badge);
  }
    badge.innerHTML = `<strong>Debug-Build ${DBG_VERSION}</strong><span>${pageMap[currentPath] || (document.body.dataset.page || 'Seite')}</span><span>Stylesheet: styles.css?v=dbg32</span><span>Panel-Logos zentriert · Hero unverändert</span><span>FiveM: yg8z9k · Discord: YhVeud3Suz</span>`;
})();
