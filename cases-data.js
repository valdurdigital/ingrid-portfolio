/* Cases data + render. Used by index.html. */

const CASES = [
  {
    n: '001 — Fintech',
    title: 'Simplifying Investment Analysis for <em>Enterprise Consultants</em>',
    desc: "Designed an enterprise platform that helps consultants and actuarial teams build investment strategies, model assumptions, and analyze pension plans with confidence.",
    pills: ['Prototyping with AI', 'Research', 'Testing'],
    meta: [['Client', 'Eckler - Investment Team'], ['Role', 'Lead PD'], ['Type', 'Internal Software']],
    img: 'uploads/Connect-Thumbail-1-3f158a4c.png',
  },
  {
    n: '002 — AI Powered Insurance Brokerage',
    title: 'Helping Insurance Brokers Grow Revenue <em>with AI</em>',
    desc: 'Led the design of AI-driven cross-sell recommendations and campaign workflows, helping scale agency growth through intelligent automation and informed decisions based on data.',
    pills: ['Desk Research', 'Prototyping with AI', 'Analytics'],
    meta: [['Client', 'GYDE health'], ['Role', 'Lead PD'], ['Type', 'B2B']],
    img: 'uploads/Campaign - List-ecb96069.png',
  },
  {
    n: '003 — Insurance',
    title: 'A More <em>Human Insurance</em> Experience',
    desc: "Led the redesign of RIMAC's customer app and employee intranet, transforming complex insurance services into a more intuitive digital experience backed by user research.",
    pills: ['Service design', 'User Research', 'Design Concept'],
    meta: [['Client', 'Rimac'], ['Role', 'Product Designer'], ['Type', 'App & Intranet']],
    img: 'uploads/Rimac-Thumbnail1.png',
  },
  {
    n: '004 — B2B',
    title: '<em>Enterprise</em> User Management',
    desc: 'Led research and concept design for an enterprise account management experience, helping administrators manage users, permissions, and organizational roles more efficiently across large teams.',
    pills: ['Design Concept', 'Testing', 'Catalog'],
    meta: [['Client', 'TalentReef'], ['Role', 'Lead PD'], ['Type', 'B2B']],
    img: 'uploads/Case004-Thumbnail-cropped.png',
  },
  {
    n: '005 — Public health',
    title: 'A <em>CRM for community health workers,</em> offline-first.',
    desc: 'Eighteen weeks, pro bono, with Foundry — a non-profit serving 400 community health workers across rural Ontario. Designed offline-first, on used Android.',
    pills: ['Pro bono', 'CRM', 'Mobile'],
    meta: [['Client', 'Foundry'], ['Role', 'PD'], ['Year', '2022']],
    hidden: true,
  },
];

(function renderCases() {
  const root = document.getElementById('cases');
  if (!root) return;
  root.innerHTML = CASES.filter(c => !c.hidden).map((c, i) => {
    const num = String(i + 1).padStart(2, '0');
    const flip = i % 2 ? ' flip' : '';
    const pills = c.pills.map((p) => `<span class="case__pill">${p}</span>`).join('');
    const meta  = c.meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
    const thumbStyle = c.img ? ` style="background-image:url('${c.img}');background-size:cover;background-position:top center;"` : '';
    return `
      <article class="case${flip}" id="case-${num}">
        <div class="case__thumb" data-n="${num}"${thumbStyle}></div>
        <div>
          <div class="case__num">${c.n}</div>
          <h3 class="case__title">${c.title}</h3>
          <p class="case__desc">${c.desc}</p>
          <div class="case__pills">${pills}</div>
          <dl class="case__metarow">${meta}</dl>
          <a class="case__link" href="case-${num}.html">Read the case <span>→</span></a>
        </div>
      </article>
    `;
  }).join('');
})();
