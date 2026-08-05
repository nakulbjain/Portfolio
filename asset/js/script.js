const portfolioData = {
  name: "NAKUL B JAIN",
  bio: "I am a Computer Science engineering student driven by a deep passion to build something innovative, practically feasible solutions. Whether I am crafting clean, responsive user interfaces or designing reliable backend systems, I enjoy turning complex ideas into functional code. For me, coding isnt just about writing codeits a process of understanding problems and driving efficient solutions for it. With a strong foundation in core computer science principles and full-stack development, I enjoy solving real-world challenges, adapting to new technologies, and constantly improving my skills as a developer.",
  heroSocials: [
    heroSocials: [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/nakulbjain", icon: "fa-brands fa-linkedin" },
  { label: "GitHub", url: "https://github.com/Nakul-sanghvi195", icon: "fa-brands fa-github" },
  { label: "CV", url: "assets/docs/nakulbjaincvf (1).pdf", icon: "fa-solid fa-file-lines" }
]
  ],
  skills: {
    "Languages": [
      { name: "Java (Primary)", icon: "devicon-java-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "SQL", icon: "devicon-mysql-plain colored" },
      { name: "C/C++", icon: "devicon-cplusplus-plain colored" }
    ],
    "Frameworks & Web": [
      { name: "Spring Boot", icon: "devicon-spring-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "HTML5 / CSS3", icon: "devicon-html5-plain colored" },
      { name: "REST APIs", icon: "fa-solid fa-network-wired text-amber-400" }
    ],
    "Databases & Cloud": [
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" }
    ],
    "Core CS & Tools": [
      { name: "Data Structures & Algo", icon: "fa-solid fa-diagram-project text-amber-400" },
      { name: "Machine Learning", icon: "fa-solid fa-brain text-amber-400" },
      { name: "Networking", icon: "fa-solid fa-sitemap text-amber-400" },
      { name: "Git & GitHub", icon: "devicon-git-plain colored" },
      { name: "Jira & Agile", icon: "devicon-jira-plain colored" }
    ]
  },
  projects: [
    {
      title: "AI-Powered Fitness Ecosystem",
      description: "Built an intelligent fitness platform incorporating computer vision for real-time exercise posture correction, repetition tracking, and personalized activity analytics.",
      tags: ["Python", "Computer Vision", "AI", "Full-Stack Web"],
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/Nakul-sanghvi195"
    },
    {
      title: "Voice-Enabled RAG Chatbot for Farmers",
      description: "Developed an accessible, multi-lingual voice-driven conversational assistant leveraging Retrieval-Augmented Generation (RAG) and LLMs to provide real-time agricultural guidance and crop management insights.",
      tags: ["Python", "RAG", "LLM", "Speech Recognition", "AgriTech"],
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/Nakul-sanghvi195"
    },
    {
      title: "Automated Stock Portfolio Tracker & Risk Analyzer",
      description: "Designed a financial analytics platform that fetches real-time market data, calculates portfolio risk metrics, and visualizes investment performance over time.",
      tags: ["Python", "Pandas", "NumPy", "Data Analytics", "Finance"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/Nakul-sanghvi195"
    }
  ],
  education: [
    {
      institution: "R V Institute of Technology and Management, Bengaluru",
      degree: "B.E. in Computer Science & Engineering",
      period: "2023 – Present",
      score: "CGPA: 8.48 / 10"
    },
    {
      institution: "SRS PU College, Chitradurga",
      degree: "State Board (12th Grade - PCMB)",
      period: "2023",
      score: "Percentage: 92%"
    },
    {
      institution: "Don Bosco ICSE School, Chitradurga",
      degree: "ICSE Board (10th Grade)",
      period: "2021",
      score: "Percentage: 92%"
    }
  ]
};

// Global Scroll Progress
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('scroll-progress').style.width = scrolled + '%';
});

// Custom Cursor
const cursorOrb = document.getElementById('cursor-orb');
const cursorRing = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorOrb.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
});

function renderCursor() {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
  requestAnimationFrame(renderCursor);
}
renderCursor();

function attachCursorHover() {
  document.querySelectorAll('a, button, input, textarea, .interactive-element').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
  });
}

// Populate Bio & Footer
document.getElementById("bio").innerText = portfolioData.bio;
document.getElementById("footer-text").innerText = `© ${new Date().getFullYear()} ${portfolioData.name}. All rights reserved.`;

const socialsContainer = document.getElementById("socials");
portfolioData.heroSocials.forEach(s => {
  const isCV = s.label === "CV";
  socialsContainer.innerHTML += `
    <a href="${s.url}" target="_blank" rel="noopener" class="${isCV ? 'bg-amber-500 text-black shadow-md font-bold hover:bg-amber-400' : 'glass-card text-slate-200 hover:text-amber-400'} interactive-element inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg hover:scale-105 transition">
      <i class="${s.icon} text-base"></i>
      <span>${s.label}</span>
    </a>`;
});

// Populate Skills
const skillsContainer = document.getElementById("skills-container");
for (const [category, items] of Object.entries(portfolioData.skills)) {
  skillsContainer.innerHTML += `
    <div class="glass-card p-4 rounded-xl">
      <h3 class="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 border-b border-amber-500/20 pb-1.5">${category}</h3>
      <div class="flex flex-wrap gap-2">
        ${items.map(item => `
          <div class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-950/40 text-slate-200 rounded-md border border-amber-500/30 text-xs font-medium">
            <i class="${item.icon} text-sm"></i>
            <span>${item.name}</span>
          </div>
        `).join('')}
      </div>
    </div>`;
}

// Populate Projects Carousel
const carouselWrapper = document.getElementById("horizontal-carousel-wrapper");
const projectIndicators = document.getElementById("project-indicators");

portfolioData.projects.forEach((p, idx) => {
  carouselWrapper.innerHTML += `
    <div class="project-snap-card">
      <div class="glass-card rounded-2xl overflow-hidden border border-amber-500/30 flex flex-col md:flex-row h-full min-h-[360px]">
        <div class="md:w-1/2 h-48 md:h-auto overflow-hidden relative">
          <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover transition duration-500 hover:scale-105" />
        </div>
        <div class="md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <span class="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/30 inline-block">Project 0${idx + 1}</span>
            <h3 class="text-xl md:text-2xl font-extrabold text-white leading-tight">${p.title}</h3>
            <p class="text-slate-300 text-xs md:text-sm leading-relaxed">${p.description}</p>
          </div>
          <div class="space-y-4">
            <div class="flex flex-wrap gap-2">
              ${p.tags.map(t => `<span class="px-2.5 py-1 text-xs bg-amber-950/60 text-amber-300 rounded-md border border-amber-500/30 font-medium">${t}</span>`).join('')}
            </div>
            <div class="pt-2 border-t border-slate-700/50 flex items-center justify-between">
              <a href="${p.github}" target="_blank" class="interactive-element inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm transition">
                <i class="fa-brands fa-github text-base"></i> View Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  projectIndicators.innerHTML += `
    <span class="indicator-dot w-2 h-2 rounded-full ${idx === 0 ? 'bg-amber-400 w-5' : 'bg-slate-700'} transition-all duration-300"></span>`;
});

const dots = document.querySelectorAll('.indicator-dot');
carouselWrapper.addEventListener('scroll', () => {
  const scrollPos = carouselWrapper.scrollLeft;
  const cardWidth = carouselWrapper.offsetWidth;
  const activeIdx = Math.round(scrollPos / cardWidth);

  dots.forEach((dot, idx) => {
    if (idx === activeIdx) {
      dot.classList.add('bg-amber-400', 'w-5');
      dot.classList.remove('bg-slate-700');
    } else {
      dot.classList.remove('bg-amber-400', 'w-5');
      dot.classList.add('bg-slate-700');
    }
  });
});

document.getElementById('prev-project').addEventListener('click', () => {
  carouselWrapper.scrollBy({ left: -carouselWrapper.offsetWidth, behavior: 'smooth' });
});

document.getElementById('next-project').addEventListener('click', () => {
  carouselWrapper.scrollBy({ left: carouselWrapper.offsetWidth, behavior: 'smooth' });
});

// Populate Education
const eduContainer = document.getElementById("education-container");
portfolioData.education.forEach(e => {
  eduContainer.innerHTML += `
    <div class="glass-card p-4 rounded-xl flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-l-4 border-l-amber-400">
      <div>
        <h3 class="font-bold text-white text-sm">${e.institution}</h3>
        <p class="text-xs text-amber-400 font-semibold">${e.degree}</p>
      </div>
      <div class="text-left sm:text-right">
        <span class="text-xs font-medium text-slate-300 bg-black/60 px-2 py-0.5 rounded border border-amber-500/20">${e.period}</span>
        <p class="text-xs text-amber-400 font-bold mt-1">${e.score}</p>
      </div>
    </div>`;
});

// Typing Animation
const roles = ["Computer Science Engineer", "Full-Stack Developer", "AI & ML Enthusiast"];
let roleIdx = 0, charIdx = 0, isDeleting = false;
const typedTextEl = document.getElementById("typed-text");

function typeEffect() {
  const currentRole = roles[roleIdx];
  typedTextEl.innerText = isDeleting 
    ? currentRole.substring(0, charIdx--) 
    : currentRole.substring(0, charIdx++);

  let speed = isDeleting ? 40 : 80;
  if (!isDeleting && charIdx === currentRole.length + 1) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    roleIdx = (roleIdx + 1) % roles.length;
    speed = 500;
  }
  setTimeout(typeEffect, speed);
}
typeEffect();

// Intersection Observer for Reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      const id = entry.target.getAttribute('id');
      document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active-link', tab.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".scroll-reveal").forEach(el => observer.observe(el));

// Form & Copy Utilities
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert("Email address copied to clipboard!");
}

function sendEmail(e) {
  e.preventDefault();
  const name = document.getElementById("sender-name").value;
  const subject = document.getElementById("msg-subject").value;
  const body = document.getElementById("msg-body").value;
  window.location.href = `mailto:nakulbjain@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Nakul,\n\n${body}\n\nBest regards,\n${name}`)}`;
}

const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

attachCursorHover();
