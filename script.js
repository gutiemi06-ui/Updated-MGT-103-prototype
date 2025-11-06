// Simple data-driven render to make adding jobs easy
const jobs = [
  {
    title: "Frontend Developer for FinTech Startup",
    company: "FinTech Startup",
    roleType: "Micro-Internship",
    location: "Remote",
    description:
      "We are a FinTech startup seeking a frontend developer with experience in React to join our team on a short-term basis. You'll be working closely with our product team to develop user-facing features.",
    responsibilities: [
      "Develop new user interface components",
      "Improve the performance of existing features",
      "Collaborate with designers and backend developers",
    ],
    qualifications: [
      "Proficiency in React and JavaScript",
      "Experience with REST APIs",
      "Familiarity with Git and Agile methodologies",
    ],
    badge: "F",
    color: "#3b82f6",
    applyUrl: "#"
  }
];

const companies = [
  { title: "FinTech Startup", listings: 5, initials: "F", color: "#3b82f6" },
  { title: "EdTech Solutions", listings: 3, initials: "E", color: "#10b981" },
  { title: "HealthTech Innovations", listings: 4, initials: "H", color: "#ef4444" },
  { title: "AI Labs", listings: 2, initials: "AI", color: "#8b5cf6" },
];

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k === "style") node.setAttribute("style", v);
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
    else node.setAttribute(k, v);
  });
  const kids = Array.isArray(children) ? children : [children];
  kids.forEach((c) => {
    if (typeof c === "string") node.appendChild(document.createTextNode(c));
    else if (c) node.appendChild(c);
  });
  return node;
}

function renderJobs() {
  const wrap = document.querySelector(".content");
  jobs.forEach((job) => {
    const card = el("article", { class: "card" }, [
      el("h3", {}, job.title),
      el("div", { class: "meta" }, [
        el("div", { class: "badge", style: `background:${job.color}` }, job.badge),
        el("div", {}, [
          el("div", { class: "company-name" }, job.company),
          el("div", { class: "role-type" }, job.roleType),
        ]),
      ]),
      el("div", { class: "location" }, ["Location: ", el("span", {}, job.location)]),
      el("p", { class: "description" }, job.description),
      el("h4", { class: "section-title" }, "Responsibilities"),
      el("ul", { class: "list" }, job.responsibilities.map((r) => el("li", {}, r))),
      el("h4", { class: "section-title" }, "Qualifications"),
      el("ul", { class: "list" }, job.qualifications.map((q) => el("li", {}, q))),
      el("div", { class: "apply-wrap" }, [
        el("a", { href: job.applyUrl }, el("button", { class: "button" }, "Apply Now")),
      ]),
    ]);
    wrap.appendChild(card);
  });
}

function renderCompanies() {
  const list = document.getElementById("companyList");
  companies.forEach((c) => {
    const item = el("div", { class: "company-item" }, [
      el("div", { class: "company-icon", style: `background:${c.color}` }, c.initials),
      el("div", { class: "company-meta" }, [
        el("div", { class: "company-title" }, c.title),
        el("div", { class: "company-sub" }, `${c.listings} Listings`),
      ]),
    ]);
    list.appendChild(item);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
renderJobs();
renderCompanies();
