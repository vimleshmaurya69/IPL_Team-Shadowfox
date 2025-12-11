// NAV TOGGLE
const navToggle = document.getElementById("nav-toggle");
const nav = document.querySelector(".nav");
const playerModal = document.getElementById("playerModal");
const playerModalClose = document.getElementById("playerModalClose");
const playerModalContent = document.getElementById("playerModalContent");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

const players = [
  {
    id: 1,
    name: "Rohit Sharma",
    role: "batsman",
    country: "India",
    image: "https://documents.iplt20.com/ipl/IPLHeadshot2025/6.png",
    age: 37,
    style: "Right-hand batsman",
    info: "Experienced opener known for big-match performances and elegant stroke play."
  },
  {
    id: 2,
    name: "Suryakumar Yadav",
    role: "batsman",
    country: "India",
    image: "surya.webp",
    age: 34,
    style: "Right-hand batsman",
    info: "Key middle-order batter, famous for 360° shots and aggressive intent."
  },
  {
    id: 3,
    name: "Ishan Kishan",
    role: "wk",
    country: "India",
    image: "Ishan_Kishan.webp",
    age: 27,
    style: "Left-hand batsman, wicket-keeper",
    info: "Explosive top-order wicket-keeper batter who can shift momentum quickly."
  },
  {
    id: 4,
    name: "Tim David",
    role: "batsman",
    country: "Australia",
    image: "tim.jpeg",
    age: 29,
    style: "Right-hand power hitter",
    info: "Finisher known for clearing boundaries in death overs."
  },
  {
    id: 5,
    name: "Hardik Pandya",
    role: "all-rounder",
    country: "India",
    image: "63751.webp",
    age: 31,
    style: "Right-hand batsman, medium-fast",
    info: "Captain and key all-rounder, balances the side with both bat and ball."
  },
  {
    id: 6,
    name: "Cameron Green",
    role: "all-rounder",
    country: "Australia",
    image: "green.jpeg",
    age: 26,
    style: "Right-hand batsman, fast-medium",
    info: "Tall all-rounder who provides pace with the ball and power with the bat."
  },
  {
    id: 7,
    name: "Jasprit Bumrah",
    role: "bowler",
    country: "India",
    image: "bum.avif",
    age: 31,
    style: "Right-arm fast",
    info: "World-class death bowler with unplayable yorkers and consistent accuracy."
  },
  {
    id: 8,
    name: "Piyush Chawla",
    role: "bowler",
    country: "India",
    image: "images/chawla.jpg",
    age: 36,
    style: "Right-arm leg-spin",
    info: "Veteran spinner with experience and control in middle overs."
  },
  {
    id: 9,
    name: "Gerald Coetzee",
    role: "bowler",
    country: "South Africa",
    image: "images/coetzee.jpg",
    age: 24,
    style: "Right-arm fast",
    info: "Young quick who brings raw pace and aggression to the attack."
  },
  {
    id: 10,
    name: "Trent Boult",
    role: "bowler",
    country: "South Africa",
    image: "images/coetzee.jpg",
    age: 24,
    style: "Right-arm fast",
    info: "Young quick who brings raw pace and aggression to the attack."
  },
  {
    id: 11,
    name: "Deepak Chahar",
    role: "bowler",
    country: "South Africa",
    image: "images/coetzee.jpg",
    age: 24,
    style: "Right-arm fast",
    info: "Young quick who brings raw pace and aggression to the attack."
  }
];


const squadGrid = document.getElementById("squadGrid");
const chips = document.querySelectorAll(".chip");

function renderSquad(filterRole = "all") {
  squadGrid.innerHTML = "";
  players
    .filter(p => filterRole === "all" || p.role === filterRole)
    .forEach(p => {
      const card = document.createElement("article");
      card.className = "player-card";
      card.dataset.id = p.id;

      card.innerHTML = `
        <h3 class="player-name">${p.name}</h3>
        <p class="player-role">${formatRole(p.role)} · ${p.country}</p>
      `;

      squadGrid.appendChild(card);
    });
}
function openPlayerModal(player) {
  playerModalContent.innerHTML = `
    <img src="${player.image}" alt="${player.name}" class="player-modal-image" />
    <div>
      <h3 class="player-modal-name">${player.name}</h3>
      <p class="player-modal-role">${formatRole(player.role)} · ${player.country}</p>

      <div class="player-meta-grid">
        <span class="player-meta-pill">Age: ${player.age}</span>
        <span class="player-meta-pill">${player.style}</span>
      </div>

      <p>${player.info}</p>
    </div>
  `;

  playerModal.setAttribute("aria-hidden", "false");
}

function closePlayerModal() {
  playerModal.setAttribute("aria-hidden", "true");
}

squadGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".player-card");
  if (!card) return;
  const id = Number(card.dataset.id);
  const player = players.find(p => p.id === id);
  if (!player) return;
  openPlayerModal(player);
});

// close button and backdrop
playerModalClose.addEventListener("click", closePlayerModal);
playerModal.addEventListener("click", (e) => {
  if (e.target === playerModal) closePlayerModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePlayerModal();
});


function formatRole(role) {
  if (role === "wk") return "Wicket-keeper";
  if (role === "all-rounder") return "All-rounder";
  return role[0].toUpperCase() + role.slice(1);
}

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    const role = chip.dataset.role;
    renderSquad(role);
  });
});

// SCHEDULE DATA
const schedule = [
  {
    vs: "CSK",
    homeAway: "home",
    venue: "Wankhede, Mumbai",
    date: "12 Apr 2025",
    time: "7:30 PM",
    status: "upcoming"
  },
  {
    vs: "RCB",
    homeAway: "away",
    venue: "Chinnaswamy, Bengaluru",
    date: "16 Apr 2025",
    time: "7:30 PM",
    status: "upcoming"
  },
  {
    vs: "KKR",
    homeAway: "home",
    venue: "Wankhede, Mumbai",
    date: "20 Apr 2025",
    time: "3:30 PM",
    status: "upcoming"
  },
  {
    vs: "DC",
    homeAway: "away",
    venue: "Arun Jaitley, Delhi",
    date: "05 Apr 2025",
    time: "7:30 PM",
    status: "completed"
  }
];

const scheduleBody = document.getElementById("scheduleBody");
const scheduleFilter = document.getElementById("scheduleFilter");
const nextMatchTitle = document.getElementById("nextMatchTitle");
const nextMatchInfo = document.getElementById("nextMatchInfo");

function renderSchedule(filter = "all") {
  scheduleBody.innerHTML = "";
  let upcomingList = [];

  schedule.forEach(match => {
    const isUpcoming = match.status === "upcoming";

    let include = false;
    if (filter === "all") include = true;
    else if (filter === "upcoming" && isUpcoming) include = true;
    else if (filter === "completed" && !isUpcoming) include = true;
    else if (filter === "home" && match.homeAway === "home") include = true;
    else if (filter === "away" && match.homeAway === "away") include = true;

    if (!include) return;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>MI vs ${match.vs}</td>
      <td>${match.venue}</td>
      <td>${match.date}</td>
      <td>${match.time}</td>
      <td>${renderStatusPill(match)}</td>
    `;
    scheduleBody.appendChild(tr);
  });

  upcomingList = schedule.filter(m => m.status === "upcoming");
  if (upcomingList.length > 0) {
    const n = upcomingList[0];
    nextMatchTitle.textContent = `MI vs ${n.vs}`;
    nextMatchInfo.textContent = `${n.venue} · ${n.date} · ${n.time}`;
  }
}

function renderStatusPill(match) {
  if (match.status === "completed") {
    return `<span class="status-pill status-completed">Completed</span>`;
  }
  if (match.homeAway === "home") {
    return `<span class="status-pill status-home">Home · Upcoming</span>`;
  }
  return `<span class="status-pill status-upcoming">Upcoming</span>`;
}

scheduleFilter.addEventListener("change", () => {
  renderSchedule(scheduleFilter.value);
});

// FAN POLL
const pollOptionsEl = document.getElementById("pollOptions");
const pollResultsEl = document.getElementById("pollResults");
const POLL_KEY = "mi-poll-votes";

const pollOptions = ["Rohit Sharma", "Suryakumar Yadav", "Hardik Pandya", "Jasprit Bumrah"];

let pollVotes = loadPollVotes();

function loadPollVotes() {
  const stored = localStorage.getItem(POLL_KEY);
  if (stored) return JSON.parse(stored);
  // default 0 votes
  const init = {};
  pollOptions.forEach(name => (init[name] = 0));
  return init;
}

function savePollVotes() {
  localStorage.setItem(POLL_KEY, JSON.stringify(pollVotes));
}

function renderPoll() {
  pollOptionsEl.innerHTML = "";
  pollResultsEl.innerHTML = "";

  pollOptions.forEach(name => {
    const btn = document.createElement("button");
    btn.className = "poll-btn";
    btn.textContent = name;
    btn.addEventListener("click", () => {
      pollVotes[name] += 1;
      savePollVotes();
      renderPoll();
    });
    pollOptionsEl.appendChild(btn);
  });

  const total = Object.values(pollVotes).reduce((a, b) => a + b, 0) || 1;

  pollOptions.forEach(name => {
    const votes = pollVotes[name];
    const percent = Math.round((votes / total) * 100);
    const row = document.createElement("div");
    row.className = "poll-results-row";
    row.innerHTML = `
      <div class="poll-label">${name} — ${percent}% (${votes})</div>
      <div class="poll-bar">
        <div class="poll-bar-fill" style="width:${percent}%"></div>
      </div>
    `;
    pollResultsEl.appendChild(row);
  });
}

const messageForm = document.getElementById("messageForm");
const messageList = document.getElementById("messageList");

messageForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("fanName").value.trim();
  const msg = document.getElementById("fanMessage").value.trim();
  if (!name || !msg) return;

  const item = document.createElement("div");
  item.className = "message-item";
  item.innerHTML = `
    <div>${msg}</div>
    <div class="message-meta">— ${name}</div>
  `;
  messageList.prepend(item);

  messageForm.reset();
});

const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks! This contact form is for demo only.");
  contactForm.reset();
});

// INIT
renderSquad();
renderSchedule("all");
renderPoll();
