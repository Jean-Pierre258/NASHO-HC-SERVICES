/**
 * NASHO HEALTH CENTER - JAVASCRIPT CONTROLLER
 * Multilingual, theme management, dynamic portal & admin store
 */

// 1. Language Dictionaries (Kinyarwanda & English)
const i18n = {
    rw: {
        langLabel: "English",
        status: "Sisitemu Iri ku Murongo (Online)",
        mainTitle: "Ikigo Nderabuzima cya NASHO",
        mainSubtitle: "Urubuga rw'Imiyoborere y'Ubuzima mu Ikoranabuhanga",
        backBtn: "Gusubira Inyuma",
        homeBtn: "Ahabanza",
        adminBtn: "Icyicaro cy'Ubuyobozi",
        searchPlaceholder: "Shakisha serivisi cyangwa imiyoboro...",
        facilityBadge: "Ubuzima bufite Ubuziranenge",
        showcaseSub: "Urubuga Nyarwo rw'Ikoranabuhanga",
        showcaseTitle: "Ubuziranenge mu Kwita ku Buzima bw'Abaturage",
        showcaseDesc: "Guhuza abarwayi, abaganga, n'ubuyobozi binyuze mu micungire y'ubuzima igezweho, gutanga raporo kuri interineti, n'ubutabazi bwihuse.",
        stat1: "Ubutabazi 24/7",
        stat2: "Raporo zose kuri Net",
        stat3: "Intara y'Iburasirazuba",
        portalTag: "Ibyinjiriro by'Imirimo",
        portalHeading: "Hitamo Serivisi Wifuza Gukoresha",
        portalSubheading: "Hitamo urubuga munsi hano waba ushaka kwivuza, gucunga ibikorwa cyangwa gutanga raporo.",
        badgeHealth: "Abarwayi n'Abaturage",
        titleHealth: "NASHO Health Center",
        descHealth: "Sura urubuga rw'ibanze rw'Ikigo Nderabuzima cya NASHO",
        featH1: "Gusaba Gahunda yo Kwivuza",
        featH2: "Amashami y'Ubuvuzi n'Amasaha",
        featH3: "Amakuru n'Ubutumwa bw'Ubuzima",
        btnHealth: "Sura Urubuga",
        badgeAdmin: "Icyicaro cy'Ubuyobozi",
        titleAdmin: "Admin Dashboard",
        descAdmin: "Cunga gahunda zo kwivuza, ubutumwa n'amakuru y'ibanze y'ikigo",
        featA1: "Gucunga Gahunda z'Abarwayi",
        featA2: "Ubutumwa n'Ibibazo byakiriwe",
        featA3: "Gahunda z'Abakozi n'Imiterere",
        btnAdmin: "Fungura Dashboard",
        badgeReport: "Raporo n'Imibare ya Buri Munsi",
        titleReport: "Daily Report",
        descReport: "Ohereza kandi ucunge raporo z'ubuzima za buri munsi",
        featR1: "Imibare y'Abarwayi ba Buri Munsi",
        featR2: "Imiti n'Ibikoresho byakoreshejwe",
        featR3: "Raporo y'Amashami yose",
        btnReport: "Tanga Raporo",
        emgTitle: "Ukeneye Ubufasha Byihutirwa?",
        emgDesc: "Imbangukiragutabara (Ambulance), ubuvuzi bw'ababyeyi, n'ibindi byihutirwa bifunguye amasaha 24/7.",
        emgCall: "Hamagara: 0787126902",
        copyNum: "Kopiya Nomero",
        copiedToast: "Nomero yakoporowe neza: 0787126902",
        footerDesc: "Twiyemeje gutanga serivisi z'ubuzima zinoze, zihuse, kandi ziboneye ku baturage bo muri Nasho n'inkengero zayo.",
        footerLinksTitle: "Ibyerekezo Byihuse",
        footerHealth: "Ikigo Nderabuzima",
        footerAdmin: "Ubuyobozi (Admin)",
        footerReport: "Raporo ya Buri Munsi",
        footerCall: "Hamagara: 0787126902",
        copyright: "© 2026 Ikigo Nderabuzima cya NASHO. Uburenganzira bwose burabitswe."
    },
    en: {
        langLabel: "Kinyarwanda",
        status: "System Operational & Online",
        mainTitle: "NASHO Health Center",
        mainSubtitle: "Digital Health Management System",
        backBtn: "Back",
        homeBtn: "Home",
        adminBtn: "Admin Hub",
        searchPlaceholder: "Search services or portals...",
        facilityBadge: "Modern Healthcare Excellence",
        showcaseSub: "Official Digital Portal",
        showcaseTitle: "Excellence in Community Health & Innovation",
        showcaseDesc: "Connecting patients, medical staff, and administration through seamless digital healthcare management, daily electronic reporting, and rapid emergency response.",
        stat1: "Emergency Care",
        stat2: "Digital Reports",
        stat3: "Eastern Province",
        portalTag: "Gateway Access",
        portalHeading: "Select a Service Portal",
        portalSubheading: "Choose your destination below to access healthcare consultations, administrative tools, or report submissions.",
        badgeHealth: "Patient & Public Portal",
        titleHealth: "NASHO Health Center",
        descHealth: "Visit the main NASHO Health Center website",
        featH1: "Online Appointment Booking",
        featH2: "Clinical Departments & Schedules",
        featH3: "Community Health & Patient Guidance",
        btnHealth: "Visit Website",
        badgeAdmin: "Administration Hub",
        titleAdmin: "Admin Dashboard",
        descAdmin: "Manage appointments, messages and system information",
        featA1: "Appointment & Patient Queue Manager",
        featA2: "Incoming Inquiries & Messages",
        featA3: "Staff Roster & System Configuration",
        btnAdmin: "Open Dashboard",
        badgeReport: "Daily Analytics & Log",
        titleReport: "Daily Report",
        descReport: "Submit and manage daily health reports",
        featR1: "Daily Patient Inflow & Consultations",
        featR2: "Pharmacy & Medical Inventory Logs",
        featR3: "Departmental Activity Submissions",
        btnReport: "Submit Report",
        emgTitle: "Need Urgent Assistance?",
        emgDesc: "Ambulance, emergency maternity, or urgent medical inquiries are active 24/7.",
        emgCall: "Call: 0787126902",
        copyNum: "Copy Number",
        copiedToast: "Phone number copied to clipboard: 0787126902",
        footerDesc: "Dedicated to delivering compassionate, accessible, and high-quality digital health services to the residents of Nasho and surrounding sectors.",
        footerLinksTitle: "Quick Access Links",
        footerHealth: "Health Center",
        footerAdmin: "Admin",
        footerReport: "Daily Report",
        footerCall: "Call: 0787126902",
        copyright: "© 2026 NASHO Health Center. All Rights Reserved."
    }
};

let currentLang = localStorage.getItem("nasho_lang") || "rw";

// 2. Update Dynamic Texts on the page
function updateTexts() {
    const data = i18n[currentLang];
    if (!data) return;

    document.documentElement.lang = currentLang;

    // Utility Elements
    const langBtn = document.getElementById("currentLangLabel");
    if (langBtn) langBtn.textContent = data.langLabel;

    const statusEl = document.getElementById("txt-status");
    if (statusEl) statusEl.textContent = data.status;

    // Header Elements
    const mainTitle = document.getElementById("txt-main-title");
    if (mainTitle) mainTitle.innerHTML = `<span>${data.mainTitle}</span>`;

    const mainSubtitle = document.getElementById("txt-main-subtitle");
    if (mainSubtitle) mainSubtitle.textContent = data.mainSubtitle;

    // Nav Buttons
    const btnBack = document.getElementById("txt-btn-back");
    if (btnBack) btnBack.textContent = data.backBtn;

    const btnHome = document.getElementById("txt-btn-home");
    if (btnHome) btnHome.textContent = data.homeBtn;

    const searchInput = document.getElementById("serviceSearch");
    if (searchInput) searchInput.placeholder = data.searchPlaceholder;

    // Showcase Elements
    const facilityBadge = document.getElementById("txt-facility-badge");
    if (facilityBadge) facilityBadge.textContent = data.facilityBadge;

    const showcaseSub = document.getElementById("txt-showcase-sub");
    if (showcaseSub) showcaseSub.textContent = data.showcaseSub;

    const showcaseTitle = document.getElementById("txt-showcase-title");
    if (showcaseTitle) showcaseTitle.textContent = data.showcaseTitle;

    const showcaseDesc = document.getElementById("txt-showcase-desc");
    if (showcaseDesc) showcaseDesc.textContent = data.showcaseDesc;

    const stat1 = document.getElementById("txt-stat-1");
    if (stat1) stat1.textContent = data.stat1;

    const stat2 = document.getElementById("txt-stat-2");
    if (stat2) stat2.textContent = data.stat2;

    const stat3 = document.getElementById("txt-stat-3");
    if (stat3) stat3.textContent = data.stat3;

    // Section Titles
    const portalTag = document.getElementById("txt-portal-tag");
    if (portalTag) portalTag.textContent = data.portalTag;

    const portalHeading = document.getElementById("txt-portal-heading");
    if (portalHeading) portalHeading.textContent = data.portalHeading;

    const portalSubheading = document.getElementById("txt-portal-subheading");
    if (portalSubheading) portalSubheading.textContent = data.portalSubheading;

    // Card 1 (Health)
    const badgeHealth = document.getElementById("badge-health");
    if (badgeHealth) badgeHealth.textContent = data.badgeHealth;

    const titleHealth = document.getElementById("title-health");
    if (titleHealth) titleHealth.textContent = data.titleHealth;

    const descHealth = document.getElementById("desc-health");
    if (descHealth) descHealth.textContent = data.descHealth;

    const featH1 = document.getElementById("feat-h1");
    if (featH1) featH1.textContent = data.featH1;
    const featH2 = document.getElementById("feat-h2");
    if (featH2) featH2.textContent = data.featH2;
    const featH3 = document.getElementById("feat-h3");
    if (featH3) featH3.textContent = data.featH3;

    const btnTextHealth = document.getElementById("btn-text-health");
    if (btnTextHealth) btnTextHealth.textContent = data.btnHealth;

    // Card 2 (Admin)
    const badgeAdmin = document.getElementById("badge-admin");
    if (badgeAdmin) badgeAdmin.textContent = data.badgeAdmin;

    const titleAdmin = document.getElementById("title-admin");
    if (titleAdmin) titleAdmin.textContent = data.titleAdmin;

    const descAdmin = document.getElementById("desc-admin");
    if (descAdmin) descAdmin.textContent = data.descAdmin;

    const featA1 = document.getElementById("feat-a1");
    if (featA1) featA1.textContent = data.featA1;
    const featA2 = document.getElementById("feat-a2");
    if (featA2) featA2.textContent = data.featA2;
    const featA3 = document.getElementById("feat-a3");
    if (featA3) featA3.textContent = data.featA3;

    const btnTextAdmin = document.getElementById("btn-text-admin");
    if (btnTextAdmin) btnTextAdmin.textContent = data.btnAdmin;

    // Card 3 (Report)
    const badgeReport = document.getElementById("badge-report");
    if (badgeReport) badgeReport.textContent = data.badgeReport;

    const titleReport = document.getElementById("title-report");
    if (titleReport) titleReport.textContent = data.titleReport;

    const descReport = document.getElementById("desc-report");
    if (descReport) descReport.textContent = data.descReport;

    const featR1 = document.getElementById("feat-r1");
    if (featR1) featR1.textContent = data.featR1;
    const featR2 = document.getElementById("feat-r2");
    if (featR2) featR2.textContent = data.featR2;
    const featR3 = document.getElementById("feat-r3");
    if (featR3) featR3.textContent = data.featR3;

    const btnTextReport = document.getElementById("btn-text-report");
    if (btnTextReport) btnTextReport.textContent = data.btnReport;

    // Emergency Section
    const emgTitle = document.getElementById("txt-emg-title");
    if (emgTitle) emgTitle.textContent = data.emgTitle;

    const emgDesc = document.getElementById("txt-emg-desc");
    if (emgDesc) emgDesc.textContent = data.emgDesc;

    const emgCall = document.getElementById("txt-emg-call");
    if (emgCall) emgCall.textContent = data.emgCall;

    const copyNum = document.getElementById("txt-copy-num");
    if (copyNum) copyNum.textContent = data.copyNum;

    // Footer
    const footerDesc = document.getElementById("txt-footer-desc");
    if (footerDesc) footerDesc.textContent = data.footerDesc;

    const footerLinksTitle = document.getElementById("txt-footer-links-title");
    if (footerLinksTitle) footerLinksTitle.textContent = data.footerLinksTitle;

    const footerHealth = document.getElementById("txt-footer-health");
    if (footerHealth) footerHealth.textContent = data.footerHealth;

    const footerAdmin = document.getElementById("txt-footer-admin");
    if (footerAdmin) footerAdmin.textContent = data.footerAdmin;

    const footerReport = document.getElementById("txt-footer-report");
    if (footerReport) footerReport.textContent = data.footerReport;

    const footerCall = document.getElementById("txt-footer-call");
    if (footerCall) footerCall.textContent = data.footerCall;

    const copyright = document.getElementById("txt-copyright");
    if (copyright) copyright.textContent = data.copyright;
}

// 3. Toggle Language
function toggleLanguage() {
    currentLang = (currentLang === "rw") ? "en" : "rw";
    localStorage.setItem("nasho_lang", currentLang);
    updateTexts();
    showToast(currentLang === "rw" ? "Ururimi rwahinduwe mu Kinyarwanda" : "Language switched to English");
}

// 4. Back Button Navigation with Referrer Check
function goBack() {
    if (document.referrer && document.referrer !== window.location.href) {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
}

// 5. Search & Filter Cards
function filterCards() {
    const input = document.getElementById("serviceSearch");
    if (!input) return;
    const query = input.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".nav-card");
    let visibleCount = 0;

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        const keywords = card.getAttribute("data-keywords") || "";
        if (text.includes(query) || keywords.includes(query)) {
            card.style.display = "flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    const noResults = document.getElementById("noResults");
    if (noResults) {
        noResults.style.display = (visibleCount === 0) ? "block" : "none";
    }
}

// 6. Dark / Light Theme Toggle
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("nasho_theme", newTheme);

    const themeIcon = document.getElementById("themeIcon");
    const themeLabel = document.getElementById("themeLabel");
    if (themeIcon) themeIcon.textContent = isDark ? "🌙" : "☀️";
    if (themeLabel) themeLabel.textContent = isDark ? "Dark" : "Light";
}

// 7. Clipboard Copy with Feedback
function copyPhoneNumber(number) {
    navigator.clipboard.writeText(number).then(() => {
        const msg = i18n[currentLang] ? i18n[currentLang].copiedToast : `Copied: ${number}`;
        showToast(msg);
    }).catch(() => {
        showToast(number);
    });
}

// 8. Toast Feedback Message
let toastTimeout;
function showToast(message) {
    let toast = document.getElementById("toastNotification");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toastNotification";
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 3200);
}

// 9. Real-Time Rwanda (CAT / Kigali) Clock
function updateClock() {
    const clockEl = document.getElementById("live-clock");
    if (!clockEl) return;
    try {
        const now = new Date();
        const options = {
            timeZone: 'Africa/Kigali',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);
        clockEl.textContent = `${timeString} CAT`;
    } catch (e) {
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString() + " CAT";
    }
}

// 10. Global Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
    const active = document.activeElement;
    if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.tagName === "SELECT")) return;

    const key = e.key.toUpperCase();
    if (key === "1") {
        window.open("https://nasho-health-center.vercel.app/", "_blank");
    } else if (key === "2") {
        window.location.href = "admin.html";
    } else if (key === "3") {
        window.open("https://nasho-daily-report.vercel.app/", "_blank");
    } else if (key === "H") {
        window.location.href = "index.html";
    } else if (key === "B") {
        goBack();
    } else if (key === "C") {
        window.location.href = "tel:0787126902";
    }
});

// ==========================================================================
// ADMIN DASHBOARD STATE & CONTROLS
// ==========================================================================

const defaultAppointments = [
    { id: "APT-101", patient: "Mukamana Claudine", department: "Maternity & Prenatal", time: "09:30 AM", phone: "0788123456", status: "confirmed" },
    { id: "APT-102", patient: "Habimana Jean Paul", department: "General Consultation", time: "10:15 AM", phone: "0785654321", status: "pending" },
    { id: "APT-103", patient: "Uwase Diane", department: "Pediatrics & Child Care", time: "11:00 AM", phone: "0789789012", status: "confirmed" },
    { id: "APT-104", patient: "Ndayisaba Eric", department: "Dental Clinic", time: "02:00 PM", phone: "0783334455", status: "completed" },
    { id: "APT-105", patient: "Kwizera Emmanuel", department: "Laboratory & Diagnostics", time: "03:30 PM", phone: "0781223344", status: "pending" }
];

const defaultMessages = [
    { id: "MSG-1", from: "Gaspard Mugabo", phone: "0788445566", subject: "Inquiry about vaccination schedules for children under 5", status: "new", date: "Today 08:20" },
    { id: "MSG-2", from: "Marie Chantal", phone: "0789112233", subject: "Request for ambulance transfer contact confirmation", status: "replied", date: "Yesterday 16:45" },
    { id: "MSG-3", from: "Kayitare Bosco", phone: "0782334455", subject: "Laboratory results pickup timing for Friday test", status: "new", date: "Today 09:10" }
];

const defaultReports = [
    { id: "REP-2026-09", shift: "Morning Shift (07:00 - 15:00)", supervisor: "Dr. Nshuti Patrick", patientsSeen: 74, emergencies: 3, status: "Submitted" },
    { id: "REP-2026-08", shift: "Night Shift (19:00 - 07:00)", supervisor: "Nurse Mukarwego Alice", patientsSeen: 29, emergencies: 4, status: "Verified" }
];

function getStore(key, defaults) {
    const val = localStorage.getItem(key);
    if (!val) {
        localStorage.setItem(key, JSON.stringify(defaults));
        return defaults;
    }
    try {
        return JSON.parse(val);
    } catch (e) {
        return defaults;
    }
}

function saveStore(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Render Admin Appointments Table
function renderAppointments() {
    const tbody = document.getElementById("appointmentsTableBody");
    if (!tbody) return;

    const list = getStore("nasho_appointments", defaultAppointments);
    tbody.innerHTML = "";

    list.forEach(apt => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>#${apt.id}</strong></td>
            <td><strong>${apt.patient}</strong></td>
            <td>${apt.department}</td>
            <td>${apt.time}</td>
            <td><a href="tel:${apt.phone}" style="color:var(--primary);text-decoration:none;font-weight:600;">${apt.phone}</a></td>
            <td><span class="badge-status status-${apt.status}">${apt.status.toUpperCase()}</span></td>
            <td>
                <div style="display:flex;gap:6px;">
                    ${apt.status === 'pending' ? `<button class="btn-sm btn-sm-primary" onclick="confirmAppointment('${apt.id}')">Approve</button>` : ''}
                    <button class="btn-sm btn-sm-danger" onclick="deleteAppointment('${apt.id}')">Delete</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    const kpiCount = document.getElementById("kpiAppointmentsCount");
    if (kpiCount) kpiCount.textContent = list.length;
}

function confirmAppointment(id) {
    let list = getStore("nasho_appointments", defaultAppointments);
    list = list.map(item => item.id === id ? { ...item, status: "confirmed" } : item);
    saveStore("nasho_appointments", list);
    renderAppointments();
    showToast(`Appointment #${id} approved!`);
}

function deleteAppointment(id) {
    if (!confirm(`Are you sure you want to remove appointment #${id}?`)) return;
    let list = getStore("nasho_appointments", defaultAppointments);
    list = list.filter(item => item.id !== id);
    saveStore("nasho_appointments", list);
    renderAppointments();
    showToast(`Appointment #${id} removed.`);
}

function addNewAppointment(e) {
    e.preventDefault();
    const patient = document.getElementById("patientName").value.trim();
    const department = document.getElementById("patientDept").value;
    const time = document.getElementById("patientTime").value;
    const phone = document.getElementById("patientPhone").value.trim();

    if (!patient || !phone) {
        alert("Please provide both patient name and telephone.");
        return;
    }

    const list = getStore("nasho_appointments", defaultAppointments);
    const newId = "APT-" + (100 + list.length + 1);
    list.unshift({
        id: newId,
        patient,
        department,
        time: time || "10:00 AM",
        phone,
        status: "confirmed"
    });

    saveStore("nasho_appointments", list);
    renderAppointments();
    closeModal('appointmentModal');
    showToast(`Appointment for ${patient} created successfully!`);
    e.target.reset();
}

// Render Admin Messages
function renderMessages() {
    const tbody = document.getElementById("messagesTableBody");
    if (!tbody) return;

    const list = getStore("nasho_messages", defaultMessages);
    tbody.innerHTML = "";

    list.forEach(msg => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>#${msg.id}</strong></td>
            <td><strong>${msg.from}</strong></td>
            <td><a href="tel:${msg.phone}" style="color:var(--primary);text-decoration:none;">${msg.phone}</a></td>
            <td>${msg.subject}</td>
            <td>${msg.date}</td>
            <td><span class="badge-status status-${msg.status === 'new' ? 'pending' : 'completed'}">${msg.status.toUpperCase()}</span></td>
            <td>
                <button class="btn-sm btn-sm-primary" onclick="replyMessage('${msg.id}')">
                    ${msg.status === 'new' ? 'Mark Answered' : 'Done'}
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    const kpiMsg = document.getElementById("kpiMessagesCount");
    if (kpiMsg) kpiMsg.textContent = list.filter(m => m.status === 'new').length;
}

function replyMessage(id) {
    let list = getStore("nasho_messages", defaultMessages);
    list = list.map(item => item.id === id ? { ...item, status: "replied" } : item);
    saveStore("nasho_messages", list);
    renderMessages();
    showToast(`Message #${id} marked as answered.`);
}

// Render Admin Reports
function renderReports() {
    const tbody = document.getElementById("reportsTableBody");
    if (!tbody) return;

    const list = getStore("nasho_reports", defaultReports);
    tbody.innerHTML = "";

    list.forEach(rep => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>#${rep.id}</strong></td>
            <td>${rep.shift}</td>
            <td><strong>${rep.supervisor}</strong></td>
            <td>${rep.patientsSeen}</td>
            <td><span style="color:var(--rose);font-weight:700;">${rep.emergencies}</span></td>
            <td><span class="badge-status status-confirmed">${rep.status}</span></td>
        `;
        tbody.appendChild(tr);
    });

    const kpiRep = document.getElementById("kpiReportsCount");
    if (kpiRep) kpiRep.textContent = list.length;
}

// Modal open/close helpers
function openModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add("open");
}

function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove("open");
}

// Switch Admin Panels
function switchAdminTab(panelId, btn) {
    document.querySelectorAll(".admin-panel").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));

    const target = document.getElementById(panelId);
    if (target) target.classList.add("active");
    if (btn) btn.classList.add("active");
}

// Initialize on DOM Ready
window.addEventListener("DOMContentLoaded", () => {
    // 1. Saved Theme
    const savedTheme = localStorage.getItem("nasho_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    const themeIcon = document.getElementById("themeIcon");
    const themeLabel = document.getElementById("themeLabel");
    if (themeIcon) themeIcon.textContent = savedTheme === "dark" ? "☀️" : "🌙";
    if (themeLabel) themeLabel.textContent = savedTheme === "dark" ? "Light" : "Dark";

    // 2. Saved Language
    updateTexts();

    // 3. Clock
    updateClock();
    setInterval(updateClock, 1000);

    // 4. Admin View Renderers
    renderAppointments();
    renderMessages();
    renderReports();
});
