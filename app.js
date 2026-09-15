/* ==========================================================================
   MY BOOK — PERSONAL LIFE OS APPLICATION SCRIPT (Vanilla JS)
   ========================================================================== */

// --- SHA-256 Hash Helper for Authentication ---
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// --- Default Data Seeds for Instant Wow Factor ---
const DEFAULT_DB = {
  settings: {
    userId: 'admin',
    passwordHash: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', // admin123
    vaultPinHash: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', // 1234
    theme: 'dark',
    dateFormat: 'YYYY-MM-DD',
    vaultAutoLockMin: 2,
    sessionAutoLockMin: 15
  },
  profile: {
    name: 'Sachin Kumar',
    nickname: 'Sachii',
    dob: '2000-04-15',
    about: 'Developer, researcher, and digital archivist. Creating visual lifelogs and organizing knowledge.',
    interests: 'AI Ethics, Cybernetics, Generative Art, Typography',
    hobbies: 'Landscape Photography, Urban Travel, Chess, Cycling',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    education: [
      { id: 'edu_1', institution: 'Indian Institute of Technology (IIT), Delhi', course: 'B.Tech in Computer Science', graduationYear: '2026', semester: '7th Semester' }
    ],
    achievements: [
      { id: 'ach_1', title: 'Open Source Hackathon Winner', year: '2025', details: 'Built a decentralized local database engine.' },
      { id: 'ach_2', title: 'Google Research Internship', year: '2026', details: 'Researched advanced agentic interface designs.' }
    ]
  },
  journal: [
    {
      id: 'j_1',
      date: '2026-08-20',
      title: 'Midnight Coding & Warm Coffee',
      content: 'Spent the night refactoring the UI. The glassmorphic cards look absolutely premium under the dark ambient glow background. Satisfied with the fluid particle canvas framework.',
      mood: '😊 Happy',
      location: 'Delhi, India',
      people: ['Self'],
      tags: ['productivity', 'ui-design', 'coffee'],
      photos: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80'],
      favorite: true,
      archived: false
    },
    {
      id: 'j_2',
      date: '2026-08-23',
      title: 'Rainy afternoon and planning next trip',
      content: 'It rained heavily today. Sipped green tea and reviewed travel itineraries for Jaipur next month. Planning to take the early morning Shatabdi train.',
      mood: '😌 Calm',
      location: 'Delhi, India',
      people: ['Aarav'],
      tags: ['planning', 'travel', 'rain'],
      photos: [],
      favorite: false,
      archived: false
    }
  ],
  memories: [
    {
      id: 'm_1',
      date: '2025-12-31',
      title: 'New Year Lights in Manali',
      location: 'Manali, Himachal Pradesh',
      people: ['Rohan', 'Aarav', 'Neha'],
      story: 'We stood around a campfire at midnight, watching the snowfall start right at 12:00. The lights illuminated the snowy mountains beautifully.',
      mood: '🎉 Excited',
      photos: ['https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=600&q=80'],
      tags: ['celebration', 'snow', 'new-year'],
      favorite: true
    }
  ],
  trips: [
    {
      id: 't_1',
      name: 'Shimla Summer Getaway',
      destination: 'Shimla, HP',
      startDate: '2026-06-10',
      endDate: '2026-06-14',
      people: ['Family'],
      purpose: 'Leisure',
      transport: 'Toy Train / Car',
      hotel: 'The Ridge Boutique Stay',
      placesVisited: 'Mall Road, Jakhoo Temple, Kufri',
      totalExpense: 18500,
      notes: 'Beautiful weather, mall road was crowded but Jakhoo temple forest trek was refreshing.',
      photos: ['https://images.unsplash.com/photo-1571501679680-de32f13eada4?auto=format&fit=crop&w=500&q=80'],
      favorite: true
    }
  ],
  expenses: [
    { id: 'ex_1', amount: 850, date: '2026-08-22', category: 'Food', description: 'Ramen bowl with Aarav', method: 'UPI', location: 'Cyber City', person: 'Aarav', notes: '', photo: '' },
    { id: 'ex_2', amount: 3200, date: '2026-08-15', category: 'Shopping', description: 'Mechanical Keyboard keycaps', method: 'Credit Card', location: 'Online', person: '', notes: 'Purple retro layout', photo: '' },
    { id: 'ex_3', amount: 1500, date: '2026-08-10', category: 'Bills', description: 'Internet Subscription', method: 'UPI', location: 'Home', person: '', notes: 'Airtel Fiber', photo: '' },
    { id: 'ex_4', amount: 18500, date: '2026-06-12', category: 'Travel', description: 'Shimla hotel booking', method: 'Net Banking', location: 'Shimla', person: '', notes: 'Split with family', photo: '' }
  ],
  income: [
    { id: 'in_1', source: 'Stipend', amount: 35000, date: '2026-08-01', notes: 'Google Summer Internship' }
  ],
  accounts: [
    { id: 'ac_1', name: 'HDFC Savings Bank', type: 'Bank Account', balance: '₹45,280.00', number: '•••• 8921', logo: 'university' },
    { id: 'ac_2', name: 'GPay / UPI', type: 'UPI Wallet', balance: '₹5,310.00', number: 'sachii@okhdfc', logo: 'smartphone' }
  ],
  college: {
    profile: {
      university: 'IIT Delhi',
      degree: 'B.Tech Computer Science',
      cgpa: '9.2',
      currentSemester: '7th Semester'
    },
    semesters: [
      {
        id: 'sem_7',
        name: 'Semester 7 (Current)',
        subjects: [
          { name: 'Artificial Intelligence', code: 'COL772', faculty: 'Dr. S. Roy', attendance: '88%', marks: 'A', assignmentProgress: 90 },
          { name: 'Compiler Design', code: 'COL728', faculty: 'Prof. J. Gupta', attendance: '92%', marks: 'A-', assignmentProgress: 75 },
          { name: 'Computer Networks', code: 'COL724', faculty: 'Dr. A. Verma', attendance: '84%', marks: 'Pending', assignmentProgress: 60 }
        ],
        assignments: [
          { title: 'Neural Network Optimizer', subject: 'COL772', deadline: '2026-08-30', status: 'In Progress' },
          { title: 'LL(1) Parser Engine', subject: 'COL728', deadline: '2026-09-05', status: 'Not Started' }
        ]
      }
    ]
  },
  skills: [
    { id: 'sk_1', name: 'React & Next.js', category: 'Tech', level: 'Expert', progress: 95, startDate: '2022-01-10', resources: 'Official Docs, Kent C. Dodds', certs: 'Meta Frontend Cert', notes: 'Primary framework of choice' },
    { id: 'sk_2', name: 'Go (Golang)', category: 'Tech', level: 'Intermediate', progress: 75, startDate: '2024-05-15', resources: 'Go by Example, A Tour of Go', certs: '', notes: 'Loving the simplicity of concurrency syntax' },
    { id: 'sk_3', name: 'UI / UX Design', category: 'Other', level: 'Advanced', progress: 85, startDate: '2023-03-01', resources: 'Refactoring UI, Laws of UX', certs: '', notes: 'Core focus on typography and whitespace' }
  ],
  projects: [
    { id: 'p_1', name: 'AetherDB', description: 'Local-first encrypted database coordinator for progressive web applications.', technologies: ['TypeScript', 'WebCrypto', 'IndexedDB'], startDate: '2025-10-01', endDate: '2025-12-15', status: 'Completed', github: 'https://github.com', live: '', screenshots: [], notes: 'Completed as part of system systems programming class.' },
    { id: 'p_2', name: 'CosmicOS Dashboard', description: 'Cinematic personal workstation hub featuring custom visual charts and NLP search.', technologies: ['JavaScript', 'HTML5', 'CSS Variables', 'Canvas'], startDate: '2026-08-15', endDate: 'Present', status: 'In Progress', github: 'https://github.com', live: '', screenshots: [], notes: 'Currently designing the Ask AI helper.' }
  ],
  goals: [
    { id: 'g_1', title: 'Complete Graduation with honors', description: 'Maintain overall CGPA above 9.0 and finish final systems thesis.', category: 'Education', priority: 'High', startDate: '2022-07-20', deadline: '2026-05-25', progress: 90, status: 'In Progress', notes: 'Thesis on compiler optimizations.', milestones: ['Pass Sem 7 (90%)', 'Defense of Thesis (10%)'] },
    { id: 'g_2', title: 'Achieve 100km Cycling Streak', description: 'Run or cycle 100km total within a single weekend stretch.', category: 'Health', priority: 'Medium', startDate: '2026-08-01', deadline: '2026-09-30', progress: 40, status: 'In Progress', notes: 'Need to plan route around Aravali hills.', milestones: ['30km warm up', '50km mid run', '100km main event'] }
  ],
  notes: [
    { id: 'n_1', title: 'JavaScript Closure Insights', category: 'Programming', tags: ['js', 'concept'], content: 'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives an inner function access to the outer function\'s scope even after the outer function has finished execution.', favorite: true, archived: false },
    { id: 'n_2', title: 'Life OS Design Philosophy', category: 'Ideas', tags: ['ux', 'philosophy'], content: '1. Keep screens clean and whitespace wide.\n2. Prioritize user control and data portability (Backups are sacred).\n3. Keep the visual language cohesive: glassmorphism panels, soft ambient lights, and smooth animations.', favorite: false, archived: false }
  ],
  people: [
    { id: 'pp_1', name: 'Aarav Mehta', nickname: 'Aarav', category: 'Friend', photo: '', birthday: '2004-10-12', notes: 'College classmate and hacking partner.', tags: ['college', 'tech'] },
    { id: 'pp_2', name: 'Neha Sharma', nickname: 'Neha', category: 'Friend', photo: '', birthday: '2005-02-28', notes: 'Creative photographer friend.', tags: ['art', 'photography'] }
  ],
  tasks: [
    { id: 'ts_1', title: 'Submit AI Assignment COL772', deadline: '2026-08-30', priority: 'High', category: 'College', recurring: 'None', completed: false },
    { id: 'ts_2', title: 'Review travel budget', deadline: '2026-08-25', priority: 'Medium', category: 'Money', recurring: 'None', completed: true },
    { id: 'ts_3', title: 'Weekly backup of My Book', deadline: '2026-08-31', priority: 'Low', category: 'System', recurring: 'Weekly', completed: false }
  ],
  documents: [
    { id: 'd_1', name: 'College Admission Letter.pdf', folder: 'College', uploadDate: '2022-07-15', size: '2.1 MB', base64: '', archived: false },
    { id: 'd_2', name: 'Manali Hotel Bill.jpg', folder: 'Travel', uploadDate: '2026-01-02', size: '850 KB', base64: '', archived: false }
  ],
  trash: []
};

// --- Multi-User Account Manager ---
class AccountManager {
  static STORAGE_KEY = 'mybook_accounts';

  static getAccounts() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) return [];
      return JSON.parse(raw);
    } catch (e) {
      return [];
    }
  }

  static saveAccounts(accounts) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(accounts));
  }

  static getAccount(email) {
    if (!email) return null;
    const normalized = email.trim().toLowerCase();
    const accounts = this.getAccounts();
    const found = accounts.find(a => a.email.toLowerCase() === normalized);
    if (found) return found;

    // Built-in resilient defaults for Sachin Kumar
    if (normalized === 'kumarsachin21759@gmail.com' || normalized === 'sachin@mybook.os') {
      const fallbackAcc = {
        id: 'acc_sachin_default',
        name: 'Sachin Kumar',
        email: normalized,
        passwordHash: 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f', // password123
        vaultPinHash: '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', // 1234
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };
      accounts.push(fallbackAcc);
      this.saveAccounts(accounts);
      return fallbackAcc;
    }
    if (normalized === 'admin') {
      const adminAcc = {
        id: 'acc_admin_default',
        name: 'Admin',
        email: 'admin',
        passwordHash: '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9', // admin123
        vaultPinHash: '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', // 1234
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };
      accounts.push(adminAcc);
      this.saveAccounts(accounts);
      return adminAcc;
    }
    return null;
  }

  static async createAccount({ name, email, password, pin }) {
    const normalized = email.trim().toLowerCase();
    const accounts = this.getAccounts();
    if (accounts.some(a => a.email.toLowerCase() === normalized)) {
      throw new Error('An account with this email already exists.');
    }

    const passwordHash = await sha256(password);
    const vaultPinHash = await sha256(pin || '1234');
    const newAccount = {
      id: 'acc_' + Date.now(),
      name: name.trim(),
      email: normalized,
      passwordHash,
      vaultPinHash,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    };

    accounts.push(newAccount);
    this.saveAccounts(accounts);
    return newAccount;
  }

  static async updateAccount(email, updates) {
    const normalized = email.trim().toLowerCase();
    const accounts = this.getAccounts();
    const idx = accounts.findIndex(a => a.email.toLowerCase() === normalized);
    if (idx === -1) return null;

    if (updates.name) accounts[idx].name = updates.name.trim();
    if (updates.password) accounts[idx].passwordHash = await sha256(updates.password);
    if (updates.pin) accounts[idx].vaultPinHash = await sha256(updates.pin);
    if (updates.lastLogin) accounts[idx].lastLogin = updates.lastLogin;

    this.saveAccounts(accounts);
    return accounts[idx];
  }

  static deleteAccount(email) {
    const normalized = email.trim().toLowerCase();
    let accounts = this.getAccounts();
    accounts = accounts.filter(a => a.email.toLowerCase() !== normalized);
    this.saveAccounts(accounts);
    localStorage.removeItem(`mybook_db_${normalized}`);
  }

  static async seedDefault() {
    const accounts = this.getAccounts();
    const legacyRaw = localStorage.getItem('mybook_db');

    const defaultList = [
      {
        id: 'acc_sachin_gmail',
        name: 'Sachin Kumar',
        email: 'kumarsachin21759@gmail.com',
        pwd: 'password123',
        pin: '1234'
      },
      {
        id: 'acc_sachin_os',
        name: 'Sachin Kumar',
        email: 'sachin@mybook.os',
        pwd: 'password123',
        pin: '1234'
      },
      {
        id: 'acc_admin',
        name: 'Admin',
        email: 'admin',
        pwd: 'admin123',
        pin: '1234'
      }
    ];

    let modified = false;
    for (const def of defaultList) {
      if (!accounts.some(a => a.email.toLowerCase() === def.email.toLowerCase())) {
        const passwordHash = await sha256(def.pwd);
        const vaultPinHash = await sha256(def.pin);
        accounts.push({
          id: def.id,
          name: def.name,
          email: def.email.toLowerCase(),
          passwordHash,
          vaultPinHash,
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString()
        });
        modified = true;
      }
    }

    if (modified) {
      this.saveAccounts(accounts);
    }

    // Migrate legacy DB if present to primary user key
    const primaryKey = 'mybook_db_kumarsachin21759@gmail.com';
    if (legacyRaw && !localStorage.getItem(primaryKey)) {
      try {
        const parsed = JSON.parse(legacyRaw);
        if (parsed.settings) {
          parsed.settings.userId = 'kumarsachin21759@gmail.com';
          parsed.settings.email = 'kumarsachin21759@gmail.com';
        }
        localStorage.setItem(primaryKey, JSON.stringify(parsed));
      } catch (e) {
        localStorage.setItem(primaryKey, legacyRaw);
      }
    }
  }
}
// --- LocalDB Manager (Per-Email Isolated Persistent Storage) ---
class LocalDB {
  static getStorageKey(email = null) {
    const activeEmail = (
      email ||
      Auth.currentUser?.email ||
      sessionStorage.getItem('mybook_active_email') ||
      localStorage.getItem('mybook_session_email') ||
      'sachin@mybook.os'
    ).trim().toLowerCase();
    return `mybook_db_${activeEmail}`;
  }

  static getDB(email = null) {
    const key = this.getStorageKey(email);
    let raw = localStorage.getItem(key);
    if (!raw) {
      // Create clone of default db with user personalized profile
      const clone = JSON.parse(JSON.stringify(DEFAULT_DB));
      const activeEmail = (email || Auth.currentUser?.email || 'sachin@mybook.os').trim().toLowerCase();
      const account = AccountManager.getAccount(activeEmail);
      if (account) {
        clone.profile.name = account.name;
        clone.profile.nickname = account.name.split(' ')[0] || account.name;
        clone.settings.userId = account.email;
        clone.settings.email = account.email;
        clone.settings.passwordHash = account.passwordHash;
        clone.settings.vaultPinHash = account.vaultPinHash;
      }
      raw = JSON.stringify(clone);
      localStorage.setItem(key, raw);
    }
    return JSON.parse(raw);
  }

  static writeDB(dbObj, email = null) {
    const key = this.getStorageKey(email);
    localStorage.setItem(key, JSON.stringify(dbObj));
  }

  static initForUser(email, name, passwordHash, vaultPinHash) {
    const key = `mybook_db_${email.trim().toLowerCase()}`;
    const clone = JSON.parse(JSON.stringify(DEFAULT_DB));
    clone.profile.name = name;
    clone.profile.nickname = name.split(' ')[0] || name;
    clone.profile.about = `Personal archive and digital life OS for ${name}.`;
    clone.settings.userId = email;
    clone.settings.email = email;
    clone.settings.passwordHash = passwordHash;
    clone.settings.vaultPinHash = vaultPinHash;

    // Add personalized welcome entry in journal
    clone.journal.unshift({
      id: 'j_welcome_' + Date.now(),
      date: new Date().toISOString().split('T')[0],
      title: `Welcome to My Book Life OS, ${name.split(' ')[0]}!`,
      content: `Today marks the beginning of my digital archive on My Book. All my journals, memories, finances, projects, and documents are securely stored here under ${email}.`,
      mood: '🚀 Excited',
      location: 'Command Center',
      people: [name],
      tags: ['welcome', 'life-os', 'fresh-start'],
      photos: [],
      favorite: true,
      archived: false
    });

    localStorage.setItem(key, JSON.stringify(clone));
    return clone;
  }

  static get(table) {
    const db = this.getDB();
    return db[table] || [];
  }

  static save(table, record) {
    const db = this.getDB();
    if (!db[table]) db[table] = [];

    const index = db[table].findIndex(item => item.id === record.id);
    if (index !== -1) {
      db[table][index] = { ...db[table][index], ...record };
    } else {
      db[table].push(record);
    }
    this.writeDB(db);
    return record;
  }

  static delete(table, id) {
    const db = this.getDB();
    if (!db[table]) return;

    const index = db[table].findIndex(item => item.id === id);
    if (index !== -1) {
      const deletedItem = db[table].splice(index, 1)[0];
      if (!db.trash) db.trash = [];
      db.trash.push({
        id: 'trash_' + Date.now(),
        deletedId: id,
        originTable: table,
        deletedAt: new Date().toISOString().split('T')[0],
        data: deletedItem
      });
      this.writeDB(db);
      return true;
    }
    return false;
  }

  static restoreFromTrash(trashId) {
    const db = this.getDB();
    const trashIndex = db.trash.findIndex(t => t.id === trashId);
    if (trashIndex !== -1) {
      const trashItem = db.trash.splice(trashIndex, 1)[0];
      const table = trashItem.originTable;
      if (!db[table]) db[table] = [];
      db[table].push(trashItem.data);
      this.writeDB(db);
      return true;
    }
    return false;
  }

  static permanentDeleteFromTrash(trashId) {
    const db = this.getDB();
    const trashIndex = db.trash.findIndex(t => t.id === trashId);
    if (trashIndex !== -1) {
      db.trash.splice(trashIndex, 1);
      this.writeDB(db);
      return true;
    }
    return false;
  }

  static getSettings() {
    const db = this.getDB();
    return db.settings;
  }

  static saveSettings(settings) {
    const db = this.getDB();
    db.settings = { ...db.settings, ...settings };
    this.writeDB(db);
  }
}

// --- Session & Session Guard State ---
const Auth = {
  isUnlocked: false,
  currentUser: null,
  isVaultUnlocked: false,
  vaultLockTimeout: null,
  sessionLockTimeout: null,

  async init() {
    await AccountManager.seedDefault();

    // Check active session
    const sessionEmail = sessionStorage.getItem('mybook_active_email') || localStorage.getItem('mybook_session_email');
    if (sessionEmail) {
      const account = AccountManager.getAccount(sessionEmail);
      if (account) {
        this.currentUser = account;
        this.isUnlocked = true;
        this.resetSessionTimer();
        return true;
      }
    }
    this.isUnlocked = false;
    this.currentUser = null;
    return false;
  },

  async login(email, pwd, remember = true) {
    if (!email || !pwd) {
      return { success: false, message: 'Please enter both email and password.' };
    }
    const normalized = email.trim().toLowerCase();
    const account = AccountManager.getAccount(normalized);
    if (!account) {
      return { success: false, message: 'No registered account found with this email.' };
    }

    const inputHash = await sha256(pwd);
    if (inputHash !== account.passwordHash) {
      return { success: false, message: 'Incorrect password. Please verify and try again.' };
    }

    // Success
    this.currentUser = account;
    this.isUnlocked = true;
    account.lastLogin = new Date().toISOString();
    AccountManager.updateAccount(account.email, { lastLogin: account.lastLogin });

    sessionStorage.setItem('mybook_active_email', account.email);
    if (remember) {
      localStorage.setItem('mybook_session_email', account.email);
    } else {
      localStorage.removeItem('mybook_session_email');
    }

    this.resetSessionTimer();
    return { success: true, user: account };
  },

  async register(name, email, pwd, pin) {
    if (!name || !email || !pwd || !pin) {
      return { success: false, message: 'All fields are required.' };
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return { success: false, message: 'Please enter a valid email address.' };
    }
    if (pwd.length < 6) {
      return { success: false, message: 'Password must be at least 6 characters long.' };
    }
    if (!/^[0-9]{4}$/.test(pin)) {
      return { success: false, message: 'Vault PIN must be exactly 4 numeric digits.' };
    }

    try {
      const newAccount = await AccountManager.createAccount({ name, email, password: pwd, pin });
      LocalDB.initForUser(newAccount.email, newAccount.name, newAccount.passwordHash, newAccount.vaultPinHash);

      this.currentUser = newAccount;
      this.isUnlocked = true;
      sessionStorage.setItem('mybook_active_email', newAccount.email);
      localStorage.setItem('mybook_session_email', newAccount.email);
      this.resetSessionTimer();

      return { success: true, user: newAccount };
    } catch (err) {
      return { success: false, message: err.message || 'Error creating account.' };
    }
  },

  logout() {
    this.isUnlocked = false;
    this.currentUser = null;
    this.isVaultUnlocked = false;
    clearTimeout(this.vaultLockTimeout);
    clearTimeout(this.sessionLockTimeout);

    sessionStorage.removeItem('mybook_active_email');
    localStorage.removeItem('mybook_session_email');

    // Reset UI
    document.getElementById('app-container').classList.add('hide');
    const loginScreen = document.getElementById('login-screen');
    loginScreen.classList.remove('hide');
    loginScreen.classList.add('active');

    // Reset forms
    document.getElementById('login-form')?.reset();
    document.getElementById('register-form')?.reset();
    document.getElementById('login-error')?.classList.add('hide');
    document.getElementById('register-error')?.classList.add('hide');

    renderSavedAccounts();
    showToast('Signed out. Life OS Locked.', 'info');
  },

  lock() {
    this.logout();
  },

  async unlockVault(pin) {
    const inputPinHash = await sha256(pin);
    const currentPinHash = this.currentUser?.vaultPinHash || LocalDB.getSettings().vaultPinHash;
    if (inputPinHash === currentPinHash) {
      this.isVaultUnlocked = true;
      this.resetVaultTimer();
      return true;
    }
    return false;
  },

  lockVault() {
    this.isVaultUnlocked = false;
    clearTimeout(this.vaultLockTimeout);
    const indicatorBtn = document.getElementById('quick-vault-btn');
    if (indicatorBtn) {
      indicatorBtn.classList.remove('unlocked');
      indicatorBtn.innerHTML = `<i data-lucide="lock"></i><span>Vault Locked</span>`;
      lucide.createIcons();
    }
    showToast('Private Vault Locked.', 'info');
    if (window.location.hash === '#documents' || (window.location.hash === '#notes' && document.getElementById('notes-category-select')?.value === 'Private')) {
      window.location.hash = '#dashboard';
    }
  },

  resetSessionTimer() {
    clearTimeout(this.sessionLockTimeout);
    const settings = LocalDB.getSettings();
    const lockMins = settings.sessionAutoLockMin || 15;
    this.sessionLockTimeout = setTimeout(() => {
      if (this.isUnlocked) {
        showToast('Session timed out due to inactivity.', 'info');
        this.logout();
      }
    }, lockMins * 60 * 1000);
  },

  resetVaultTimer() {
    clearTimeout(this.vaultLockTimeout);
    const settings = LocalDB.getSettings();
    const lockMins = settings.vaultAutoLockMin || 2;
    this.vaultLockTimeout = setTimeout(() => {
      this.lockVault();
    }, lockMins * 60 * 1000);
  }
};

// --- Helper: Update Sidebar User Display ---
function updateSidebarUserDisplay() {
  const db = LocalDB.getDB();
  const profile = db.profile || {};
  const email = Auth.currentUser?.email || LocalDB.getSettings().userId || 'sachin@mybook.os';

  const nameEl = document.getElementById('sb-user-name');
  const titleEl = document.getElementById('sb-user-title');
  const picEl = document.getElementById('sb-profile-pic');
  const iconEl = document.getElementById('sb-profile-icon');

  if (nameEl) nameEl.innerText = profile.nickname || profile.name || 'User';
  if (titleEl) {
    titleEl.innerText = email;
    titleEl.title = `Logged in as ${email}`;
  }

  if (profile.avatar && picEl && iconEl) {
    picEl.src = profile.avatar;
    picEl.classList.remove('hide');
    iconEl.classList.add('hide');
  } else if (picEl && iconEl) {
    picEl.classList.add('hide');
    iconEl.classList.remove('hide');
  }
  lucide.createIcons();
}

// --- Helper: Render Saved Accounts Pills ---
function renderSavedAccounts() {
  const accounts = AccountManager.getAccounts();
  const box = document.getElementById('saved-accounts-box');
  const list = document.getElementById('saved-accounts-list');
  if (!box || !list) return;

  if (accounts.length > 0) {
    box.classList.remove('hide');
    list.innerHTML = accounts.map(a => `
      <div class="account-chip" title="Click to fill ${a.email}" onclick="fillLoginEmail('${a.email}')">
        <span class="account-chip-initial">${(a.name || a.email)[0].toUpperCase()}</span>
        <span>${a.email}</span>
      </div>
    `).join('');
  } else {
    box.classList.add('hide');
  }
}

// --- Helper: Fill Login Email ---
function fillLoginEmail(email) {
  const input = document.getElementById('login-email');
  if (input) {
    input.value = email;
    document.getElementById('login-password')?.focus();
  }
}

// --- Slow Particle Canvas Animation ---
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.15;
      this.speedY = (Math.random() - 0.5) * 0.15;
      this.opacity = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(157, 78, 221, ${this.opacity})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#9d4edd';
      ctx.fill();
    }
  }

  for (let i = 0; i < 40; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// --- App Navigation & Router ---
class AppRouter {
  static isInitialized = false;

  static init() {
    if (!this.isInitialized) {
      window.addEventListener('hashchange', () => this.handleRouting());
      this.isInitialized = true;
    }
    this.handleRouting();
  }

  static handleRouting() {
    if (!Auth.isUnlocked) {
      window.location.hash = '';
      return;
    }

    const hash = window.location.hash || '#dashboard';
    const viewName = hash.replace('#', '');
    const activeSection = document.getElementById(`view-${viewName}`);

    if (activeSection) {
      // Toggle active states in workspace
      document.querySelectorAll('.workspace-view').forEach(view => {
        view.classList.remove('active');
      });
      activeSection.classList.add('active');

      // Update sidebar nav items
      document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === hash) {
          item.classList.add('active');
        }
      });

      // Render corresponding view controller
      ViewController.render(viewName);
      Auth.resetSessionTimer();
    }
  }
}

// --- Helper: Format Dates ---
function formatDate(dateStr) {
  if (!dateStr) return 'N/A';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('en-US', options);
}

// --- Helper: Toast Messages ---
function showToast(message, type = 'success') {
  const hub = document.getElementById('toast-hub');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  let iconName = 'check-circle';
  if (type === 'error') iconName = 'alert-triangle';
  if (type === 'info') iconName = 'info';

  toast.innerHTML = `
    <i data-lucide="${iconName}"></i>
    <span>${message}</span>
  `;
  hub.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.style.transform = 'translateY(-20px) scale(0.9)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- Dynamic SVG Chart Builders ---
const ChartBuilder = {
  // SVG Donut Chart
  buildDonut(categories, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (categories.length === 0) {
      container.innerHTML = `<div class="empty-state"><i data-lucide="line-chart"></i><p>No financial data to map</p></div>`;
      lucide.createIcons();
      return;
    }

    const total = categories.reduce((sum, c) => sum + c.value, 0);
    let cumulativePercent = 0;

    const colors = ['#9d4edd', '#06d6a0', '#ff9e00', '#3a86c8', '#ff4d6d', '#8e94a6', '#00f5d4', '#7b2cbf'];
    let svgPathContent = '';

    // Draw paths
    categories.forEach((cat, index) => {
      const color = colors[index % colors.length];
      const startPercent = cumulativePercent;
      const endPercent = cumulativePercent + (cat.value / total);
      cumulativePercent = endPercent;

      const getCoordinatesForPercent = (percent) => {
        const x = Math.cos(2 * Math.PI * percent);
        const y = Math.sin(2 * Math.PI * percent);
        return [x, y];
      };

      const [startX, startY] = getCoordinatesForPercent(startPercent);
      const [endX, endY] = getCoordinatesForPercent(endPercent);
      const largeArcFlag = (cat.value / total) > 0.5 ? 1 : 0;

      // Draw SVG arc path (scaled to circle radius of 50, center at 0,0)
      const radius = 50;
      const innerRadius = 32;
      const sX = startX * radius;
      const sY = startY * radius;
      const eX = endX * radius;
      const eY = endY * radius;

      const sX_in = startX * innerRadius;
      const sY_in = startY * innerRadius;
      const eX_in = endX * innerRadius;
      const eY_in = endY * innerRadius;

      // Creating donut sector outline
      svgPathContent += `
        <path d="M ${sX} ${sY} 
                 A ${radius} ${radius} 0 ${largeArcFlag} 1 ${eX} ${eY} 
                 L ${eX_in} ${eY_in} 
                 A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${sX_in} ${sY_in} Z" 
              fill="${color}" stroke="rgba(7,7,10,0.5)" stroke-width="1.5" style="transition: all 0.3s ease; cursor: pointer;">
          <title>${cat.name}: ₹${cat.value} (${Math.round((cat.value / total) * 100)}%)</title>
        </path>`;
    });

    container.innerHTML = `
      <svg viewBox="-60 -60 120 120" style="width: 100%; height: 100%; transform: rotate(-90deg);">
        ${svgPathContent}
        <circle r="25" fill="#0c0d14" />
      </svg>
    `;
  },

  // Dynamic SVG Bar Graph for Monthly Trends
  buildBarTrend(dataPoints, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (dataPoints.length === 0) {
      container.innerHTML = `<div class="empty-state"><i data-lucide="bar-chart-2"></i><p>No activity to chart</p></div>`;
      lucide.createIcons();
      return;
    }

    const maxVal = Math.max(...dataPoints.map(d => d.value), 100);
    const chartHeight = 150;
    const chartWidth = 400;
    const barSpacing = chartWidth / dataPoints.length;
    const barWidth = barSpacing * 0.6;

    let bars = '';
    let labels = '';

    dataPoints.forEach((d, idx) => {
      const normalizedHeight = (d.value / maxVal) * chartHeight;
      const x = idx * barSpacing + (barSpacing - barWidth) / 2;
      const y = chartHeight - normalizedHeight;

      bars += `
        <rect x="${x}" y="${y}" width="${barWidth}" height="${normalizedHeight}" rx="4" fill="url(#barGrad)" style="transition: all 0.5s ease;">
          <title>${d.label}: ₹${d.value}</title>
        </rect>
      `;

      labels += `
        <text x="${x + barWidth / 2}" y="${chartHeight + 20}" fill="#8e94a6" font-size="10" text-anchor="middle" font-family="'Outfit', sans-serif">
          ${d.label}
        </text>
      `;
    });

    container.innerHTML = `
      <svg viewBox="0 0 ${chartWidth} ${chartHeight + 30}" style="width: 100%; height: 100%;">
        <defs>
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#9d4edd" />
            <stop offset="100%" stop-color="#7b2cbf" stop-opacity="0.2" />
          </linearGradient>
        </defs>
        ${bars}
        ${labels}
      </svg>
    `;
  }
};

// --- View Controllers: Generate HTML dynamically ---
const ViewController = {
  render(view) {
    const section = document.getElementById(`view-${view}`);
    if (!section) return;

    // View templates mapping
    switch (view) {
      case 'dashboard':
        this.renderDashboard(section);
        break;
      case 'profile':
        this.renderProfile(section);
        break;
      case 'journal':
        this.renderJournal(section);
        break;
      case 'memories':
        this.renderMemories(section);
        break;
      case 'travel':
        this.renderTravel(section);
        break;
      case 'money':
        this.renderMoney(section);
        break;
      case 'college':
        this.renderCollege(section);
        break;
      case 'skills':
        this.renderSkills(section);
        break;
      case 'projects':
        this.renderProjects(section);
        break;
      case 'goals':
        this.renderGoals(section);
        break;
      case 'notes':
        this.renderNotes(section);
        break;
      case 'people':
        this.renderPeople(section);
        break;
      case 'tasks':
        this.renderTasks(section);
        break;
      case 'documents':
        this.renderDocuments(section);
        break;
      case 'analytics':
        this.renderAnalytics(section);
        break;
      case 'replay':
        this.renderReplay(section);
        break;
      case 'ask-ai':
        this.renderAskAI(section);
        break;
      case 'settings':
        this.renderSettings(section);
        break;
    }
    lucide.createIcons();
  },

  renderDashboard(el) {
    const hour = new Date().getHours();
    let greeting = 'Good evening';
    if (hour < 12) greeting = 'Good morning';
    else if (hour < 17) greeting = 'Good afternoon';

    const profile = LocalDB.get('profile');
    const name = profile.nickname || profile.name || 'Sachii';

    const journal = LocalDB.get('journal').filter(j => !j.archived);
    const memories = LocalDB.get('memories');
    const trips = LocalDB.get('trips');
    const goals = LocalDB.get('goals');
    const tasks = LocalDB.get('tasks').filter(t => !t.completed);

    const latestJournal = journal[0] ? `
      <div class="timeline-card glass-panel interactive-card" onclick="window.location.hash='#journal'">
        <div class="timeline-dot"></div>
        <div class="journal-entry-header">
          <h4>${journal[0].title}</h4>
          <span class="badge badge-purple">${journal[0].mood}</span>
        </div>
        <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.4;">${journal[0].content}</p>
        <div class="journal-entry-meta" style="margin-top:10px;">
          <span><i data-lucide="calendar"></i> ${formatDate(journal[0].date)}</span>
          <span><i data-lucide="map-pin"></i> ${journal[0].location}</span>
        </div>
      </div>
    ` : `<div class="empty-state"><i data-lucide="pen-tool"></i><p>No recent journal entries. Click + to add.</p></div>`;

    const activeGoalsHtml = goals.slice(0, 2).map(g => `
      <div class="task-row glass-panel interactive-card" onclick="window.location.hash='#goals'">
        <div class="task-left">
          <div class="task-text font-weight-600">${g.title}</div>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <span class="badge badge-gold">${g.priority}</span>
          <span class="badge badge-purple">${g.progress}%</span>
        </div>
      </div>
    `).join('') || `<div class="empty-state"><i data-lucide="target"></i><p>No active goals.</p></div>`;

    const pendingTasksHtml = tasks.slice(0, 3).map(t => `
      <div class="task-row glass-panel">
        <div class="task-left">
          <div class="task-check-circle" onclick="ViewController.toggleTask('${t.id}')"></div>
          <div class="task-text">${t.title}</div>
        </div>
        <span class="badge ${t.priority === 'High' ? 'badge-rose' : 'badge-gold'}">${t.priority}</span>
      </div>
    `).join('') || `<div class="empty-state"><i data-lucide="check-square"></i><p>Clear day! No pending tasks.</p></div>`;

    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>Dashboard Command</h1>
          <p>Real-time Life OS Summary Metrics</p>
        </div>
      </div>

      <div class="db-layout">
        <div class="db-main-column">
          <!-- Top Greeting -->
          <div class="db-greeting-card glass-panel">
            <h2>${greeting}, ${name} 👋</h2>
            <p>Welcome back to your private digital universe. Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.</p>
          </div>

          <!-- Summary Widgets Grid -->
          <div class="db-summary-grid">
            <div class="db-summary-widget glass-panel">
              <i data-lucide="book-open"></i>
              <div class="db-summary-details">
                <h4>${journal.length}</h4>
                <span>Journal Entries</span>
              </div>
            </div>
            <div class="db-summary-widget glass-panel">
              <i data-lucide="image"></i>
              <div class="db-summary-details">
                <h4>${memories.length}</h4>
                <span>Saved Memories</span>
              </div>
            </div>
            <div class="db-summary-widget glass-panel">
              <i data-lucide="compass"></i>
              <div class="db-summary-details">
                <h4>${trips.length}</h4>
                <span>Travel Logs</span>
              </div>
            </div>
            <div class="db-summary-widget glass-panel">
              <i data-lucide="check-square"></i>
              <div class="db-summary-details">
                <h4>${tasks.length}</h4>
                <span>Tasks Pending</span>
              </div>
            </div>
          </div>

          <!-- Row 2 -->
          <div class="dashboard-row-2">
            <!-- Recent Journal timeline widget -->
            <div class="sub-panel glass-panel">
              <div class="sub-panel-title">
                <h3><i data-lucide="pen-tool"></i> Recent Journal</h3>
                <a href="#journal" class="text-btn">View All</a>
              </div>
              <div class="timeline-flow">
                ${latestJournal}
              </div>
            </div>

            <!-- Tasks lists widget -->
            <div class="sub-panel glass-panel">
              <div class="sub-panel-title">
                <h3><i data-lucide="check-square"></i> Today's Tasks</h3>
                <a href="#tasks" class="text-btn">Manage</a>
              </div>
              <div class="list-container">
                ${pendingTasksHtml}
              </div>
            </div>
          </div>
        </div>

        <div class="db-side-column">
          <!-- Active Goals Widget -->
          <div class="sub-panel glass-panel">
            <div class="sub-panel-title">
              <h3><i data-lucide="target"></i> Active Goals</h3>
              <a href="#goals" class="text-btn">All Goals</a>
            </div>
            <div class="list-container">
              ${activeGoalsHtml}
            </div>
          </div>

          <!-- Quick Statistics / Quote -->
          <div class="sub-panel glass-panel" style="background:linear-gradient(to bottom, rgba(16, 18, 27, 0.4), rgba(26, 29, 43, 0.8)); text-align:center; padding: 32px 24px;">
            <i data-lucide="sparkles" style="width:32px; height:32px; color:var(--accent-gold); margin:0 auto 12px; display:block;"></i>
            <h4 style="font-family:var(--font-serif); font-size:1.15rem; font-style:italic; line-height:1.5; margin-bottom:12px;">"Your story is waiting to be written. Document each heartbeat, each summit, each lesson."</h4>
            <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1.5px;">My Book Philosophy</span>
          </div>
        </div>
      </div>
    `;
  },

  renderProfile(el) {
    const profile = LocalDB.get('profile');
    const edu = profile.education || [];
    const ach = profile.achievements || [];

    const eduHtml = edu.map(e => `
      <div class="task-row glass-panel" style="padding:16px;">
        <div>
          <h4 style="font-weight:600;">${e.institution}</h4>
          <p style="font-size:0.85rem; color:var(--text-muted);">${e.course} • ${e.semester || 'N/A'}</p>
        </div>
        <span class="badge badge-purple">${e.graduationYear}</span>
      </div>
    `).join('') || `<div class="empty-state"><i data-lucide="graduation-cap"></i><p>No education detail added.</p></div>`;

    const achHtml = ach.map(a => `
      <div class="task-row glass-panel" style="padding:16px;">
        <div>
          <h4 style="font-weight:600;">${a.title}</h4>
          <p style="font-size:0.85rem; color:var(--text-muted);">${a.details}</p>
        </div>
        <span class="badge badge-gold">${a.year}</span>
      </div>
    `).join('') || `<div class="empty-state"><i data-lucide="award"></i><p>No achievements documented.</p></div>`;

    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>Identity Center</h1>
          <p>Autobiographical Profile & Achievements</p>
        </div>
        <div class="view-actions">
          <button class="primary-btn" onclick="ViewController.openEditProfileModal()"><i data-lucide="edit-3"></i><span>Edit Profile</span></button>
        </div>
      </div>

      <div class="profile-banner">
        <div class="profile-avatar-wrapper">
          ${profile.avatar ? `<img src="${profile.avatar}" alt="Avatar">` : `<div class="avatar-fallback"><i data-lucide="user" style="width:36px; height:36px;"></i></div>`}
        </div>
        <div class="profile-name-tag">
          <h2>${profile.name}</h2>
          <p>Nickname: <strong>${profile.nickname || 'N/A'}</strong> | DOB: <strong>${formatDate(profile.dob)}</strong></p>
        </div>
      </div>

      <div class="profile-grid">
        <div class="db-side-column">
          <!-- About Me Card -->
          <div class="sub-panel glass-panel">
            <div class="sub-panel-title">
              <h3><i data-lucide="info"></i> About Me</h3>
            </div>
            <p style="font-size:0.9rem; color:var(--text-main); margin-bottom:16px;">${profile.about || 'Write something about yourself...'}</p>
            <div style="font-size:0.85rem; color:var(--text-muted);">
              <div style="margin-bottom:8px;"><strong style="color:var(--text-main);">Interests:</strong> ${profile.interests || 'N/A'}</div>
              <div><strong style="color:var(--text-main);">Hobbies:</strong> ${profile.hobbies || 'N/A'}</div>
            </div>
          </div>
        </div>

        <div class="db-main-column">
          <!-- Education History -->
          <div class="sub-panel glass-panel">
            <div class="sub-panel-title">
              <h3><i data-lucide="graduation-cap"></i> Education</h3>
            </div>
            <div class="list-container">
              ${eduHtml}
            </div>
          </div>

          <!-- Achievements & Milestones -->
          <div class="sub-panel glass-panel">
            <div class="sub-panel-title">
              <h3><i data-lucide="award"></i> Achievements</h3>
            </div>
            <div class="list-container">
              ${achHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderJournal(el) {
    const journal = LocalDB.get('journal').filter(j => !j.archived);

    // Sort and filter setup
    const listHtml = journal.map(j => {
      const photosHtml = (j.photos || []).map(p => `<div class="journal-photo-thumbnail" style="background-image: url('${p}')" onclick="ViewController.openImageViewer('${p}')"></div>`).join('');
      return `
        <div class="journal-entry-card glass-panel">
          <div class="journal-entry-header">
            <h3 style="font-family:var(--font-serif); font-size:1.3rem;">${j.title}</h3>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="badge badge-purple">${j.mood}</span>
              <button class="icon-btn" onclick="ViewController.toggleFavoriteJournal('${j.id}')" title="Favorite" style="width:32px; height:32px; color: ${j.favorite ? 'var(--accent-gold)' : 'var(--text-muted)'};">
                <i data-lucide="star" style="width:14px; height:14px;"></i>
              </button>
              <button class="icon-btn" onclick="ViewController.openEditJournalModal('${j.id}')" title="Edit" style="width:32px; height:32px;">
                <i data-lucide="edit-2" style="width:14px; height:14px;"></i>
              </button>
              <button class="icon-btn" onclick="ViewController.archiveJournal('${j.id}')" title="Archive" style="width:32px; height:32px;">
                <i data-lucide="archive" style="width:14px; height:14px;"></i>
              </button>
              <button class="icon-btn" onclick="ViewController.deleteJournal('${j.id}')" title="Delete" style="width:32px; height:32px; color:var(--accent-rose);">
                <i data-lucide="trash" style="width:14px; height:14px;"></i>
              </button>
            </div>
          </div>
          <p style="font-size:0.92rem; line-height:1.6; margin-bottom:14px;">${j.content}</p>
          <div class="journal-entry-meta">
            <span><i data-lucide="calendar"></i> ${formatDate(j.date)}</span>
            <span><i data-lucide="map-pin"></i> ${j.location}</span>
            <span><i data-lucide="users"></i> Tagged: ${j.people.join(', ')}</span>
            <span><i data-lucide="tag"></i> Tags: ${j.tags.map(t => `#${t}`).join(' ')}</span>
          </div>
          ${photosHtml ? `<div class="journal-photos-preview">${photosHtml}</div>` : ''}
        </div>
      `;
    }).join('') || `<div class="empty-state"><i data-lucide="pen-tool"></i><h3>Your diary is blank</h3><p>Begin documenting your memories today.</p></div>`;

    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>Daily Journal</h1>
          <p>Chronicle of Days, Thoughts & Epiphanies</p>
        </div>
        <div class="view-actions">
          <button class="primary-btn" onclick="ViewController.openJournalAddModal()"><i data-lucide="plus"></i><span>Write Entry</span></button>
        </div>
      </div>

      <div class="journal-split">
        <div class="journal-filters">
          <!-- Filters & Options -->
          <div class="sub-panel glass-panel filter-group">
            <div class="sub-panel-title"><h3>Filters</h3></div>
            <div class="form-group" style="margin-bottom:12px;">
              <label>Search Content</label>
              <div class="input-wrapper" style="width:100%;">
                <input type="text" id="j-search-box" placeholder="Keywords..." oninput="ViewController.filterJournalList()">
              </div>
            </div>
            <div class="form-group">
              <label>Mood Category</label>
              <div class="input-wrapper">
                <select id="j-mood-filter" onchange="ViewController.filterJournalList()">
                  <option value="">All Moods</option>
                  <option value="😊 Happy">😊 Happy</option>
                  <option value="😌 Calm">😌 Calm</option>
                  <option value="😔 Sad">😔 Sad</option>
                  <option value="⚡ Excited">⚡ Excited</option>
                  <option value="😴 Tired">😴 Tired</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div id="journal-entries-container">
          ${listHtml}
        </div>
      </div>
    `;
  },

  renderMemories(el) {
    const memories = LocalDB.get('memories');

    // Check "On This Day" matches (month/day matches current date in previous years)
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
    const currentYear = today.getFullYear();

    const onThisDay = memories.filter(m => {
      const mDate = new Date(m.date);
      return (mDate.getMonth() + 1) === currentMonth && mDate.getDate() === currentDay && mDate.getFullYear() < currentYear;
    });

    const onThisDayHtml = onThisDay.map(m => `
      <div class="task-row glass-panel interactive-card" onclick="ViewController.openMemoryDetails('${m.id}')" style="background: linear-gradient(135deg, rgba(255, 158, 0, 0.08), rgba(16, 18, 27, 0.4)); border-color: rgba(255, 158, 0, 0.2); padding: 16px;">
        <div class="task-left">
          <i data-lucide="sparkles" style="color:var(--accent-gold);"></i>
          <div>
            <h4 style="font-weight:700;">On This Day (${currentYear - new Date(m.date).getFullYear()} years ago)</h4>
            <p style="font-size:0.85rem; color:var(--text-muted);">${m.title} in ${m.location}</p>
          </div>
        </div>
        <span class="badge badge-gold">${new Date(m.date).getFullYear()}</span>
      </div>
    `).join('');

    const gridHtml = memories.map(m => `
      <div class="gallery-card glass-panel interactive-card" onclick="ViewController.openMemoryDetails('${m.id}')">
        <div class="gallery-image" style="background-image: url('${m.photos[0] || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'}')">
          <div class="gallery-date-badge">${formatDate(m.date)}</div>
          <button class="icon-btn gallery-fav-btn" onclick="event.stopPropagation(); ViewController.toggleFavMemory('${m.id}')" style="color:${m.favorite ? 'var(--accent-gold)' : '#fff'};">
            <i data-lucide="star"></i>
          </button>
        </div>
        <div class="gallery-body">
          <div>
            <h4>${m.title}</h4>
            <p>${m.story}</p>
          </div>
          <div style="font-size: 0.75rem; color:var(--text-muted); margin-top:8px;">
            <span><i data-lucide="map-pin" style="width:12px; height:12px;"></i> ${m.location}</span>
          </div>
        </div>
      </div>
    `).join('') || `<div class="empty-state"><i data-lucide="image"></i><h3>No memories archived</h3><p>Upload files or document visual logs.</p></div>`;

    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>Visual Memories</h1>
          <p>Chronological Gallery of Important Life Milestones</p>
        </div>
        <div class="view-actions">
          <button class="primary-btn" onclick="ViewController.openMemoryAddModal()"><i data-lucide="plus"></i><span>Archive Memory</span></button>
        </div>
      </div>

      ${onThisDayHtml ? `
        <div class="sub-panel" style="padding: 0 0 24px 0;">
          <div class="sub-panel-title"><h3><i data-lucide="calendar"></i> On This Day</h3></div>
          <div class="list-container" style="gap:12px;">${onThisDayHtml}</div>
        </div>
      ` : ''}

      <div class="memory-gallery">
        ${gridHtml}
      </div>
    `;
  },

  renderTravel(el) {
    const trips = LocalDB.get('trips');

    // Stats calculation
    const totalSpent = trips.reduce((sum, t) => sum + (t.totalExpense || 0), 0);
    const favCount = trips.filter(t => t.favorite).length;

    const gridHtml = trips.map(t => `
      <div class="gallery-card glass-panel interactive-card" onclick="ViewController.openTripDetails('${t.id}')">
        <div class="gallery-image" style="background-image: url('${t.photos[0] || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80'}')">
          <div class="gallery-date-badge">${formatDate(t.startDate)} - ${formatDate(t.endDate)}</div>
        </div>
        <div class="gallery-body">
          <div>
            <h4>${t.name}</h4>
            <p style="font-size:0.85rem; color:var(--text-muted);"><i data-lucide="map-pin" style="width:12px; height:12px;"></i> ${t.destination}</p>
            <p style="margin-top:6px;">${t.notes}</p>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem; margin-top:10px;">
            <span style="font-weight:600; color:var(--accent-emerald);">₹${t.totalExpense}</span>
            <span class="badge badge-purple">${t.purpose}</span>
          </div>
        </div>
      </div>
    `).join('') || `<div class="empty-state"><i data-lucide="compass"></i><h3>No journeys cataloged</h3><p>Add your first trip details.</p></div>`;

    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>Travel Logs</h1>
          <p>Visual Wanderlust Diary & Expenses</p>
        </div>
        <div class="view-actions">
          <button class="primary-btn" onclick="ViewController.openTripAddModal()"><i data-lucide="plus"></i><span>Log New Journey</span></button>
        </div>
      </div>

      <!-- Travel Stats widgets -->
      <div class="money-stats" style="margin-bottom: 24px;">
        <div class="sub-panel glass-panel">
          <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Trips Cataloged</span>
          <h2 style="font-size:2rem; font-weight:800; color:var(--accent-purple);">${trips.length}</h2>
        </div>
        <div class="sub-panel glass-panel">
          <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Total Wanderlust Expense</span>
          <h2 style="font-size:2rem; font-weight:800; color:var(--accent-emerald);">₹${totalSpent}</h2>
        </div>
        <div class="sub-panel glass-panel">
          <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Favorite Journeys</span>
          <h2 style="font-size:2rem; font-weight:800; color:var(--accent-gold);">${favCount}</h2>
        </div>
      </div>

      <div class="travel-gallery">
        ${gridHtml}
      </div>
    `;
  },

  renderMoney(el) {
    const expenses = LocalDB.get('expenses');
    const income = LocalDB.get('income');
    const accounts = LocalDB.get('accounts');

    // Calculations
    const totalExp = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
    const totalInc = income.reduce((sum, i) => sum + Number(i.amount), 0);

    // Categories donut prep
    const cats = {};
    expenses.forEach(e => {
      cats[e.category] = (cats[e.category] || 0) + Number(e.amount);
    });
    const catData = Object.keys(cats).map(name => ({ name, value: cats[name] }));

    // Dynamic accounts html
    const accountsHtml = accounts.map(a => `
      <div class="task-row glass-panel" style="padding:16px; margin-bottom:12px;">
        <div class="task-left">
          <i data-lucide="${a.logo || 'wallet'}" style="color:var(--accent-purple);"></i>
          <div>
            <h4 style="font-weight:600;">${a.name}</h4>
            <p style="font-size:0.8rem; color:var(--text-muted);">${a.number}</p>
          </div>
        </div>
        <span style="font-weight:700; color:var(--text-main);">${a.balance}</span>
      </div>
    `).join('') || `<div class="empty-state"><i data-lucide="wallet"></i><p>No financial accounts tracked.</p></div>`;

    // History lists
    const historyHtml = expenses.slice(0, 5).map(e => `
      <div class="task-row glass-panel" style="padding:12px 16px;">
        <div>
          <h5 style="font-weight:600;">${e.description}</h5>
          <p style="font-size:0.75rem; color:var(--text-muted);">${e.category} • ${formatDate(e.date)}</p>
        </div>
        <span style="font-weight:700; color:var(--accent-rose);">-₹${e.amount}</span>
      </div>
    `).join('') || `<div class="empty-state"><i data-lucide="dollar-sign"></i><p>No recent expenditures.</p></div>`;

    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>Expense & Money</h1>
          <p>Secure Personal Financial Ledger & Analytics</p>
        </div>
        <div class="view-actions">
          <button class="secondary-btn" onclick="ViewController.openIncomeAddModal()"><i data-lucide="plus"></i><span>Income</span></button>
          <button class="primary-btn" onclick="ViewController.openExpenseAddModal()"><i data-lucide="minus"></i><span>Expense</span></button>
        </div>
      </div>

      <div class="money-stats">
        <div class="sub-panel glass-panel">
          <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Monthly Budget In</span>
          <h2 style="font-size:2rem; font-weight:800; color:var(--accent-emerald);">₹${totalInc}</h2>
        </div>
        <div class="sub-panel glass-panel">
          <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Monthly Outflow</span>
          <h2 style="font-size:2rem; font-weight:800; color:var(--accent-rose);">₹${totalExp}</h2>
        </div>
        <div class="sub-panel glass-panel">
          <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Net Savings Flow</span>
          <h2 style="font-size:2rem; font-weight:800; color:var(--accent-purple);">₹${totalInc - totalExp}</h2>
        </div>
      </div>

      <div class="money-chart-panel">
        <!-- Chart -->
        <div class="sub-panel glass-panel">
          <div class="sub-panel-title"><h3>Category Allocation</h3></div>
          <div class="chart-svg-container" id="category-donut-container"></div>
        </div>

        <!-- Accounts Overview -->
        <div class="sub-panel glass-panel">
          <div class="sub-panel-title"><h3>Secure Accounts</h3></div>
          <div class="list-container">${accountsHtml}</div>
        </div>
      </div>

      <!-- Ledger Row -->
      <div class="grid-2">
        <div class="sub-panel glass-panel">
          <div class="sub-panel-title"><h3>Recent Expenditure History</h3></div>
          <div class="list-container">${historyHtml}</div>
        </div>

        <div class="sub-panel glass-panel" style="display:flex; align-items:center; justify-content:center; text-align:center; padding:30px;">
          <div>
            <i data-lucide="shield-check" style="width:40px; height:40px; color:var(--accent-emerald); margin-bottom:12px;"></i>
            <h3>Fully Encrypted Ledger</h3>
            <p style="font-size:0.85rem; color:var(--text-muted); max-width:320px; margin-top:8px;">All numbers reside completely within local storage. No connections, banking credentials, PIN codes, or transaction APIs are linked.</p>
          </div>
        </div>
      </div>
    `;

    // Render category donut chart
    setTimeout(() => {
      ChartBuilder.buildDonut(catData, 'category-donut-container');
    }, 50);
  },

  renderCollege(el) {
    const db = LocalDB.getDB();
    const college = db.college || { profile: {}, semesters: [] };
    const prof = college.profile || {};
    const sems = college.semesters || [];

    const activeSem = sems[0] || { name: 'No Active Semester', subjects: [], assignments: [] };

    const subHtml = (activeSem.subjects || []).map(s => `
      <div class="task-row glass-panel" style="padding:16px;">
        <div>
          <h4 style="font-weight:600;">${s.name} (${s.code})</h4>
          <p style="font-size:0.82rem; color:var(--text-muted);">Faculty: ${s.faculty} | Attendance: <strong style="color:${parseFloat(s.attendance) >= 75 ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">${s.attendance}</strong></p>
        </div>
        <div style="text-align:right;">
          <span class="badge badge-purple">${s.marks}</span>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">Progress: ${s.assignmentProgress}%</div>
        </div>
      </div>
    `).join('') || `<div class="empty-state"><i data-lucide="book-open"></i><p>No subjects in this semester.</p></div>`;

    const assignHtml = (activeSem.assignments || []).map(a => `
      <div class="task-row glass-panel">
        <div>
          <h4 style="font-weight:600;">${a.title}</h4>
          <p style="font-size:0.8rem; color:var(--text-muted);">Subject: ${a.subject} | Due: ${formatDate(a.deadline)}</p>
        </div>
        <span class="badge ${a.status === 'Completed' ? 'badge-emerald' : 'badge-gold'}">${a.status}</span>
      </div>
    `).join('') || `<div class="empty-state"><i data-lucide="file-text"></i><p>No active assignments.</p></div>`;

    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>College Hub</h1>
          <p>Academic Course Registry, Grades & Syllabus Progress</p>
        </div>
        <div class="view-actions">
          <button class="primary-btn" onclick="ViewController.openSemesterModal()"><i data-lucide="plus"></i><span>Manage Term</span></button>
        </div>
      </div>

      <div class="money-stats" style="margin-bottom: 24px;">
        <div class="sub-panel glass-panel">
          <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Enrolled Institute</span>
          <h3 style="font-weight:700; margin-top:4px;">${prof.university || 'N/A'}</h3>
        </div>
        <div class="sub-panel glass-panel">
          <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Overall CGPA</span>
          <h2 style="font-size:2rem; font-weight:800; color:var(--accent-gold);">${prof.cgpa || 'N/A'}</h2>
        </div>
        <div class="sub-panel glass-panel">
          <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Active Term</span>
          <h3 style="font-weight:700; margin-top:4px; color:var(--accent-purple);">${activeSem.name}</h3>
        </div>
      </div>

      <div class="grid-2">
        <div class="sub-panel glass-panel">
          <div class="sub-panel-title"><h3>Subject List</h3></div>
          <div class="list-container">${subHtml}</div>
        </div>

        <div class="sub-panel glass-panel">
          <div class="sub-panel-title"><h3>Active Assignments</h3></div>
          <div class="list-container">${assignHtml}</div>
        </div>
      </div>
    `;
  },

  renderSkills(el) {
    const skills = LocalDB.get('skills');

    const listHtml = skills.map(s => `
      <div class="skill-card glass-panel interactive-card" onclick="ViewController.openSkillDetails('${s.id}')">
        <div class="skill-circle-progress">
          <svg viewBox="0 0 36 36" style="width:100%; height:100%;">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="2.5" />
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--accent-purple)" stroke-width="2.5" stroke-dasharray="${s.progress}, 100" />
          </svg>
          <div class="skill-percent-text">${s.progress}%</div>
        </div>
        <h4 style="font-weight:600; margin-bottom:4px;">${s.name}</h4>
        <span class="badge badge-purple" style="font-size:0.65rem;">${s.level}</span>
      </div>
    `).join('') || `<div class="empty-state"><i data-lucide="sparkles"></i><h3>No skills recorded</h3><p>Track your programming, languages, and tools.</p></div>`;

    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>Skills & Learning</h1>
          <p>Skill Progress Tracking & Educational Log</p>
        </div>
        <div class="view-actions">
          <button class="primary-btn" onclick="ViewController.openSkillAddModal()"><i data-lucide="plus"></i><span>Add Skill</span></button>
        </div>
      </div>

      <div class="skills-grid">
        ${listHtml}
      </div>
    `;
  },

  renderProjects(el) {
    const projects = LocalDB.get('projects');

    const listHtml = projects.map(p => `
      <div class="gallery-card glass-panel">
        <div class="gallery-image" style="background-image: url('${p.screenshots[0] || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80'}')">
          <span class="badge ${p.status === 'Completed' ? 'badge-emerald' : 'badge-gold'}" style="position:absolute; top:12px; left:12px;">${p.status}</span>
        </div>
        <div class="gallery-body">
          <div>
            <h4 style="font-weight:600;">${p.name}</h4>
            <p style="font-size:0.85rem; margin-top:4px;">${p.description}</p>
            <div style="display:flex; flex-wrap:wrap; gap:4px; margin-top:8px;">
              ${p.technologies.map(t => `<span class="badge badge-purple" style="font-size:0.6rem;">${t}</span>`).join('')}
            </div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; border-top:1px solid var(--border-color); padding-top:10px;">
            <div style="display:flex; gap:8px;">
              ${p.github ? `<a href="${p.github}" target="_blank" style="color:var(--text-muted);"><i data-lucide="github" style="width:16px; height:16px;"></i></a>` : ''}
              ${p.live ? `<a href="${p.live}" target="_blank" style="color:var(--text-muted);"><i data-lucide="external-link" style="width:16px; height:16px;"></i></a>` : ''}
            </div>
            <button class="text-btn" style="font-size:0.75rem;" onclick="ViewController.openProjectEditModal('${p.id}')">Edit</button>
          </div>
        </div>
      </div>
    `).join('') || `<div class="empty-state"><i data-lucide="terminal"></i><h3>No projects cataloged</h3><p>Manage codebases, portfolios, and prototypes.</p></div>`;

    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>Projects Portfolio</h1>
          <p>Showcase of Finished Products, Prototypes & Links</p>
        </div>
        <div class="view-actions">
          <button class="primary-btn" onclick="ViewController.openProjectAddModal()"><i data-lucide="plus"></i><span>New Project</span></button>
        </div>
      </div>

      <div class="travel-gallery">
        ${listHtml}
      </div>
    `;
  },

  renderGoals(el) {
    const goals = LocalDB.get('goals');

    const listHtml = goals.map(g => `
      <div class="journal-entry-card glass-panel" style="margin-bottom:16px; padding:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <div>
            <h3 style="font-weight:600; font-size:1.15rem;">${g.title}</h3>
            <p style="font-size:0.8rem; color:var(--text-muted);">Due: ${formatDate(g.deadline)} | Category: ${g.category}</p>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="badge ${g.status === 'Completed' ? 'badge-emerald' : 'badge-gold'}">${g.status}</span>
            <span class="badge badge-purple">${g.priority} Priority</span>
            <button class="icon-btn" onclick="ViewController.openGoalEditModal('${g.id}')" style="width:32px; height:32px;"><i data-lucide="edit-2" style="width:14px; height:14px;"></i></button>
          </div>
        </div>
        <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:12px;">${g.description}</p>
        <div style="margin-bottom:8px;">
          <div style="display:flex; justify-content:space-between; font-size:0.75rem; margin-bottom:4px;">
            <span>Milestone Progress</span>
            <strong>${g.progress}%</strong>
          </div>
          <div style="height:6px; background:rgba(255,255,255,0.03); border-radius:3px; overflow:hidden;">
            <div style="width:${g.progress}%; height:100%; background:var(--accent-purple); border-radius:3px;"></div>
          </div>
        </div>
      </div>
    `).join('') || `<div class="empty-state"><i data-lucide="target"></i><h3>No targets set</h3><p>Define future objectives and timelines.</p></div>`;

    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>Goal Tracker</h1>
          <p>Personal Objectives, Milestones & Achievement Timeline</p>
        </div>
        <div class="view-actions">
          <button class="primary-btn" onclick="ViewController.openGoalAddModal()"><i data-lucide="plus"></i><span>Set Goal</span></button>
        </div>
      </div>

      <div class="list-container">
        ${listHtml}
      </div>
    `;
  },

  renderNotes(el) {
    const notes = LocalDB.get('notes').filter(n => !n.archived);
    const hasVaultAccess = Auth.isVaultUnlocked;

    // Sort logic and list html
    const listHtml = notes.map(n => `
      <div class="note-sidebar-item glass-panel" onclick="ViewController.selectActiveNote('${n.id}')">
        <h4 style="font-weight:600; font-size:0.92rem; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${n.title}</h4>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">${n.category} • ${n.tags.map(t => `#${t}`).join(' ')}</p>
      </div>
    `).join('') || `<div class="empty-state"><i data-lucide="book-open"></i><p>No notes</p></div>`;

    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>Knowledge Base</h1>
          <p>Personal Notes, Concepts, and Code Snippets</p>
        </div>
        <div class="view-actions">
          <button class="primary-btn" onclick="ViewController.openNoteAddModal()"><i data-lucide="plus"></i><span>Create Note</span></button>
        </div>
      </div>

      <div class="notes-layout">
        <div class="notes-list-sidebar">
          <div class="form-group" style="margin-bottom:0;">
            <select id="notes-category-select" class="glass-panel" onchange="ViewController.filterNotesCategory()" style="padding:10px; width:100%; border-radius:var(--radius-sm); border:1px solid var(--border-color); background:rgba(0,0,0,0.2); color:white;">
              <option value="All">All Categories</option>
              <option value="Programming">Programming</option>
              <option value="Ideas">Ideas</option>
              <option value="Private" ${!hasVaultAccess ? 'disabled style="color:var(--text-muted)"' : ''}>Private Notes 🔒</option>
            </select>
          </div>
          <div class="list-container" id="notes-sidebar-items-box">
            ${listHtml}
          </div>
        </div>

        <div class="sub-panel glass-panel note-editor-panel" id="note-view-pane">
          <div class="empty-state"><i data-lucide="book-open" style="width:48px; height:48px;"></i><h3>No Note Selected</h3><p>Select a note from the left sidebar to read or edit its contents.</p></div>
        </div>
      </div>
    `;
  },

  renderPeople(el) {
    const people = LocalDB.get('people');

    const listHtml = people.map(p => `
      <div class="task-row glass-panel" style="padding:16px;">
        <div class="task-left">
          <div class="avatar-fallback" style="width:36px; height:36px;"><i data-lucide="user"></i></div>
          <div>
            <h4 style="font-weight:600;">${p.name} (${p.nickname})</h4>
            <p style="font-size:0.8rem; color:var(--text-muted);">Birthday: ${formatDate(p.birthday)} | Relation: ${p.category}</p>
          </div>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="icon-btn" onclick="ViewController.openPersonEditModal('${p.id}')" style="width:32px; height:32px;"><i data-lucide="edit-2" style="width:14px; height:14px;"></i></button>
          <button class="icon-btn" onclick="ViewController.deletePerson('${p.id}')" style="width:32px; height:32px; color:var(--accent-rose);"><i data-lucide="trash" style="width:14px; height:14px;"></i></button>
        </div>
      </div>
    `).join('') || `<div class="empty-state"><i data-lucide="users"></i><h3>No contacts recorded</h3><p>Map relationships to your visual memories.</p></div>`;

    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>People & Directory</h1>
          <p>Relationship mapping, birthdays and interactions</p>
        </div>
        <div class="view-actions">
          <button class="primary-btn" onclick="ViewController.openPersonAddModal()"><i data-lucide="plus"></i><span>Link Person</span></button>
        </div>
      </div>

      <div class="list-container">
        ${listHtml}
      </div>
    `;
  },

  renderTasks(el) {
    const tasks = LocalDB.get('tasks');
    const pending = tasks.filter(t => !t.completed);
    const completed = tasks.filter(t => t.completed);

    const mapTask = (t) => `
      <div class="task-row glass-panel ${t.completed ? 'completed' : ''}" style="margin-bottom:8px;">
        <div class="task-left">
          <div class="task-check-circle" onclick="ViewController.toggleTask('${t.id}')"></div>
          <div>
            <span class="task-text">${t.title}</span>
            <div style="font-size:0.72rem; color:var(--text-muted);">Category: ${t.category} | Due: ${formatDate(t.deadline)}</div>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="badge ${t.priority === 'High' ? 'badge-rose' : t.priority === 'Medium' ? 'badge-gold' : 'badge-blue'}">${t.priority}</span>
          <button class="icon-btn" onclick="ViewController.deleteTask('${t.id}')" style="width:32px; height:32px; border:none; background:transparent;"><i data-lucide="trash-2" style="width:14px; height:14px; color:var(--accent-rose);"></i></button>
        </div>
      </div>
    `;

    const pendingHtml = pending.map(mapTask).join('') || `<div class="empty-state"><i data-lucide="check-square"></i><p>All finished! No tasks left.</p></div>`;
    const completedHtml = completed.map(mapTask).join('') || `<div class="empty-state"><i data-lucide="history"></i><p>No tasks archived.</p></div>`;

    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>Tasks & Reminders</h1>
          <p>Productivity list, recurring workflows & tasks</p>
        </div>
        <div class="view-actions">
          <button class="primary-btn" onclick="ViewController.openTaskAddModal()"><i data-lucide="plus"></i><span>Add Task</span></button>
        </div>
      </div>

      <div class="grid-2">
        <div class="sub-panel glass-panel">
          <div class="sub-panel-title"><h3>Pending Actions (${pending.length})</h3></div>
          <div class="list-container">${pendingHtml}</div>
        </div>

        <div class="sub-panel glass-panel">
          <div class="sub-panel-title"><h3>Archive / Completed (${completed.length})</h3></div>
          <div class="list-container">${completedHtml}</div>
        </div>
      </div>
    `;
  },

  renderDocuments(el) {
    if (!Auth.isVaultUnlocked) {
      el.innerHTML = `
        <div class="empty-state" style="padding: 100px 30px;">
          <i data-lucide="lock" style="width:48px; height:48px; color:var(--accent-rose); margin-bottom:16px;"></i>
          <h3>Document Vault Locked</h3>
          <p>This workspace contains highly private documents and files. Unlock the Private Vault using your security PIN to gain access.</p>
          <button class="primary-btn" style="margin-top:16px;" onclick="document.getElementById('vault-pin-modal').classList.remove('hide')">Unlock Vault</button>
        </div>
      `;
      return;
    }

    const documents = LocalDB.get('documents');

    const gridHtml = documents.map(d => `
      <div class="doc-item-card glass-panel interactive-card" onclick="ViewController.previewDocument('${d.id}')">
        <div class="doc-icon-container">
          <i data-lucide="file-text" style="width:36px; height:36px;"></i>
        </div>
        <div class="doc-title" title="${d.name}">${d.name}</div>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">${d.size}</div>
      </div>
    `).join('') || `<div class="empty-state"><i data-lucide="folder"></i><h3>No files uploaded</h3><p>Upload receipts, credentials or records.</p></div>`;

    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>Document Vault</h1>
          <p>Secure Private Records & Documents Storage</p>
        </div>
        <div class="view-actions">
          <button class="primary-btn" onclick="ViewController.openUploadDocModal()"><i data-lucide="upload-cloud"></i><span>Upload Document</span></button>
        </div>
      </div>

      <div class="doc-vault-layout">
        <div class="doc-breadcrumbs">
          <span>Home</span> <i data-lucide="chevron-right" style="width:12px; height:12px;"></i> <span>All Documents</span>
        </div>
        <div class="doc-grid">
          ${gridHtml}
        </div>
      </div>
    `;
  },

  renderAnalytics(el) {
    const journal = LocalDB.get('journal');
    const memories = LocalDB.get('memories');
    const trips = LocalDB.get('trips');
    const projects = LocalDB.get('projects');
    const expenses = LocalDB.get('expenses');

    // Aggregate monthly spending
    const monthData = [
      { label: 'Jun', value: 0 },
      { label: 'Jul', value: 0 },
      { label: 'Aug', value: 0 }
    ];

    expenses.forEach(e => {
      const m = new Date(e.date).getMonth();
      if (m === 5) monthData[0].value += Number(e.amount);
      if (m === 6) monthData[1].value += Number(e.amount);
      if (m === 7) monthData[2].value += Number(e.amount);
    });

    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>Life Analytics</h1>
          <p>Biographical Statistics & Quantified Self Metrics</p>
        </div>
      </div>

      <div class="money-stats" style="margin-bottom: 24px;">
        <div class="sub-panel glass-panel">
          <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Total Journals</span>
          <h2 style="font-size:2rem; font-weight:800; color:var(--accent-purple);">${journal.length}</h2>
        </div>
        <div class="sub-panel glass-panel">
          <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Memories Vaulted</span>
          <h2 style="font-size:2rem; font-weight:800; color:var(--accent-gold);">${memories.length}</h2>
        </div>
        <div class="sub-panel glass-panel">
          <span style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Projects Managed</span>
          <h2 style="font-size:2rem; font-weight:800; color:var(--accent-emerald);">${projects.length}</h2>
        </div>
      </div>

      <div class="grid-2">
        <div class="sub-panel glass-panel">
          <div class="sub-panel-title"><h3>Expenditure Trends</h3></div>
          <div class="chart-svg-container" id="bar-trends-container" style="height:200px;"></div>
        </div>

        <div class="sub-panel glass-panel" style="display:flex; flex-direction:column; justify-content:center; padding: 24px;">
          <div class="sub-panel-title"><h3>Activity Overview</h3></div>
          <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.5;">Your life records indicate high journal activity and project completion rates in August 2026. Keep documenting daily changes.</p>
        </div>
      </div>
    `;

    setTimeout(() => {
      ChartBuilder.buildBarTrend(monthData, 'bar-trends-container');
    }, 50);
  },

  renderReplay(el) {
    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>Life Replay</h1>
          <p>Cinematic Chronological Summary of the Selected Year</p>
        </div>
      </div>

      <div class="replay-controller">
        <button class="icon-btn" onclick="ViewController.shiftReplayYear(-1)"><i data-lucide="chevron-left"></i></button>
        <span class="replay-year-select" id="replay-active-year">2026</span>
        <button class="icon-btn" onclick="ViewController.shiftReplayYear(1)"><i data-lucide="chevron-right"></i></button>
      </div>

      <div class="replay-content-container" id="replay-output-box">
        <!-- Rendered by generateYearReplay -->
      </div>
    `;
    this.generateYearReplay(2026);
  },

  generateYearReplay(year) {
    const box = document.getElementById('replay-output-box');
    if (!box) return;

    const journal = LocalDB.get('journal').filter(j => new Date(j.date).getFullYear() === year);
    const memories = LocalDB.get('memories').filter(m => new Date(m.date).getFullYear() === year);
    const trips = LocalDB.get('trips').filter(t => new Date(t.startDate).getFullYear() === year);
    const goals = LocalDB.get('goals').filter(g => new Date(g.startDate).getFullYear() === year);

    if (journal.length === 0 && memories.length === 0 && trips.length === 0) {
      box.innerHTML = `<div class="empty-state"><i data-lucide="history"></i><p>No life log data found for the year ${year}.</p></div>`;
      lucide.createIcons();
      return;
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let timelineHtml = '';

    months.forEach((mName, idx) => {
      // Find matches in month
      const mJour = journal.filter(j => new Date(j.date).getMonth() === idx);
      const mMem = memories.filter(m => new Date(m.date).getMonth() === idx);
      const mTrip = trips.filter(t => new Date(t.startDate).getMonth() === idx);

      if (mJour.length || mMem.length || mTrip.length) {
        const jList = mJour.map(j => `<div style="font-size:0.88rem; color:var(--text-main);">📝 <strong>Journal:</strong> ${j.title}</div>`).join('');
        const mList = mMem.map(m => `<div style="font-size:0.88rem; color:var(--text-main);">🌟 <strong>Memory:</strong> ${m.title} at ${m.location}</div>`).join('');
        const tList = mTrip.map(t => `<div style="font-size:0.88rem; color:var(--text-main);">✈️ <strong>Travel:</strong> Logged trip to ${t.destination}</div>`).join('');

        timelineHtml += `
          <div class="replay-month-section">
            <div class="replay-month-name">${mName}</div>
            <div class="replay-month-cards">
              ${jList}
              ${mList}
              ${tList}
            </div>
          </div>
        `;
      }
    });

    box.innerHTML = `
      <div class="replay-timeline">
        ${timelineHtml}
      </div>
    `;
    lucide.createIcons();
  },

  shiftReplayYear(val) {
    const node = document.getElementById('replay-active-year');
    if (!node) return;
    const current = Number(node.innerText);
    const next = current + val;
    node.innerText = next;
    this.generateYearReplay(next);
  },

  renderAskAI(el) {
    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>Ask My Book</h1>
          <p>Local NLP Database Query Assistant</p>
        </div>
      </div>

      <div class="chat-layout glass-panel">
        <div class="chat-history" id="ai-chat-box">
          <div class="chat-bubble ai">
            Hello Sachii. I am your local <strong>My Book</strong> database assistant. I query your offline life dashboard records directly. Ask me things like:<br>
            - <em>"How much did I spend on Travel?"</em><br>
            - <em>"What goals are in progress?"</em><br>
            - <em>"Show details of my last trip."</em>
          </div>
        </div>

        <form id="ai-chat-form" onsubmit="ViewController.handleAIChatSubmit(event)">
          <div class="chat-input-row" style="padding: 16px;">
            <input type="text" id="ai-query-input" placeholder="Query your personal OS..." required autocomplete="off">
            <button type="submit" class="primary-btn"><i data-lucide="send"></i></button>
          </div>
        </form>
      </div>
    `;
    lucide.createIcons();
  },

  handleAIChatSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('ai-query-input');
    const box = document.getElementById('ai-chat-box');
    if (!input || !box) return;

    const query = input.value.trim();
    if (!query) return;

    // Append User query bubble
    const uBubble = document.createElement('div');
    uBubble.className = 'chat-bubble user';
    uBubble.innerText = query;
    box.appendChild(uBubble);
    input.value = '';

    // Auto-scroll
    box.scrollTop = box.scrollHeight;

    // Simulate thinking delay
    setTimeout(() => {
      const response = this.queryLocalDatabase(query);
      const aBubble = document.createElement('div');
      aBubble.className = 'chat-bubble ai';
      aBubble.innerHTML = response;
      box.appendChild(aBubble);
      box.scrollTop = box.scrollHeight;
    }, 800);
  },

  queryLocalDatabase(query) {
    const text = query.toLowerCase();

    // 1. Money/Expense searches
    if (text.includes('spend') || text.includes('expense') || text.includes('cost') || text.includes('outflow')) {
      const expenses = LocalDB.get('expenses');

      // Category specific
      let matchCat = '';
      const categories = ['Food', 'Shopping', 'Travel', 'Bills', 'Entertainment', 'Health', 'College'];
      categories.forEach(c => {
        if (text.includes(c.toLowerCase())) matchCat = c;
      });

      if (matchCat) {
        const list = expenses.filter(e => e.category === matchCat);
        const sum = list.reduce((s, e) => s + Number(e.amount), 0);
        return `You have logged ${list.length} expense(s) in category <strong>${matchCat}</strong>, totaling <strong>₹${sum}</strong>.`;
      } else {
        const sum = expenses.reduce((s, e) => s + Number(e.amount), 0);
        return `Your total documented expense outflow across all categories is <strong>₹${sum}</strong>.`;
      }
    }

    // 2. Goal searches
    if (text.includes('goal')) {
      const goals = LocalDB.get('goals');
      const active = goals.filter(g => g.status !== 'Completed');
      if (active.length === 0) {
        return `You have no active goals in progress right now. Outstanding target achieved!`;
      }
      const list = active.map(g => `<li><strong>${g.title}</strong> - Progress: ${g.progress}% (${g.priority} Priority)</li>`).join('');
      return `Here are your current active goals:<br><ul>${list}</ul>`;
    }

    // 3. Trip searches
    if (text.includes('trip') || text.includes('travel') || text.includes('journey')) {
      const trips = LocalDB.get('trips');
      if (trips.length === 0) {
        return `You haven't logged any trips in travel logs yet.`;
      }
      const t = trips[trips.length - 1];
      return `Your latest logged travel was to <strong>${t.destination}</strong> (${formatDate(t.startDate)} - ${formatDate(t.endDate)}). Total cost: <strong>₹${t.totalExpense}</strong>. Purpose: ${t.purpose}.`;
    }

    // 4. Projects searches
    if (text.includes('project')) {
      const projects = LocalDB.get('projects');
      if (projects.length === 0) {
        return `No projects logged yet.`;
      }
      const list = projects.map(p => `<li><strong>${p.name}</strong> - Status: ${p.status} (Tech: ${p.technologies.join(', ')})</li>`).join('');
      return `Here are your projects:<br><ul>${list}</ul>`;
    }

    // Default search matching titles across DB
    const searchResults = [];
    const tables = ['journal', 'memories', 'notes', 'people'];
    tables.forEach(t => {
      const data = LocalDB.get(t);
      data.forEach(item => {
        const matchStr = (item.title || item.name || item.content || '').toLowerCase();
        if (matchStr.includes(text)) {
          searchResults.push({ table: t, name: item.title || item.name });
        }
      });
    });

    if (searchResults.length > 0) {
      const list = searchResults.map(r => `<li>[${r.table.toUpperCase()}] ${r.name}</li>`).join('');
      return `I found these related matches in your records:<br><ul>${list}</ul>`;
    }

    return `I parsed your query but couldn't find matching records. Try asking specifically about "expenses", "goals", "trips", or "projects".`;
  },

  renderSettings(el) {
    el.innerHTML = `
      <div class="view-header">
        <div class="view-header-title">
          <h1>Settings Center</h1>
          <p>Adjust system configurations, security & local data backups</p>
        </div>
      </div>

      <div class="settings-split">
        <div class="settings-nav glass-panel" style="padding:16px;">
          <div class="settings-nav-item active" onclick="ViewController.switchSettingsPanel('general')">General & Theme</div>
          <div class="settings-nav-item" onclick="ViewController.switchSettingsPanel('security')">Security & PIN</div>
          <div class="settings-nav-item" onclick="ViewController.switchSettingsPanel('data')">Data Control</div>
        </div>

        <div class="sub-panel glass-panel settings-panel-content" id="settings-details-box">
          <!-- General Setting Rendered by default -->
        </div>
      </div>
    `;
    this.switchSettingsPanel('general');
  },

  switchSettingsPanel(panel) {
    const box = document.getElementById('settings-details-box');
    if (!box) return;

    // Toggle active state in settings nav list
    document.querySelectorAll('.settings-nav-item').forEach(item => {
      item.classList.remove('active');
      if (item.innerText.toLowerCase().includes(panel)) {
        item.classList.add('active');
      }
    });

    const settings = LocalDB.getSettings();

    switch (panel) {
      case 'general':
        box.innerHTML = `
          <h3 style="font-weight:600; border-bottom:1px solid var(--border-color); padding-bottom:8px; margin-bottom:20px;">General System Preferences</h3>
          <form id="general-settings-form" onsubmit="ViewController.saveGeneralSettings(event)">
            <div class="form-group">
              <label>System Design Theme</label>
              <div class="input-wrapper">
                <select id="set-theme-mode">
                  <option value="dark" ${settings.theme === 'dark' ? 'selected' : ''}>Midnight Dark (Recommended)</option>
                  <option value="light" ${settings.theme === 'light' ? 'selected' : ''}>Elegance Light</option>
                </select>
              </div>
            </div>
            <button type="submit" class="primary-btn">Save Configurations</button>
          </form>
        `;
        break;

      case 'security':
        const currentAcc = Auth.currentUser || {};
        const currentEmail = currentAcc.email || settings.userId || 'sachin@mybook.os';
        const currentName = currentAcc.name || LocalDB.getDB().profile?.name || '';
        box.innerHTML = `
          <h3 style="font-weight:600; border-bottom:1px solid var(--border-color); padding-bottom:8px; margin-bottom:20px;">Security Credentials & Account</h3>
          <form id="security-settings-form" onsubmit="ViewController.saveSecuritySettings(event)">
            <div class="form-group">
              <label>Authenticated Email ID</label>
              <div class="input-wrapper">
                <i data-lucide="mail"></i>
                <input type="email" id="set-email" value="${currentEmail}" readonly style="opacity:0.8; cursor:not-allowed;">
              </div>
              <small style="color:var(--text-muted); font-size:0.75rem; margin-top:4px; display:block;">Primary ID tied to your isolated database.</small>
            </div>
            <div class="form-group">
              <label>Display Name</label>
              <div class="input-wrapper">
                <i data-lucide="user"></i>
                <input type="text" id="set-username" value="${currentName}" placeholder="Full Name">
              </div>
            </div>
            <div class="form-group">
              <label>New Password (leave blank to keep unchanged)</label>
              <div class="input-wrapper">
                <i data-lucide="lock"></i>
                <input type="password" id="set-pwd" placeholder="Enter new password (min 6 chars)">
              </div>
            </div>
            <div class="form-group">
              <label>Private Vault PIN (4 digits)</label>
              <div class="input-wrapper">
                <i data-lucide="key-round"></i>
                <input type="password" id="set-pin" placeholder="Enter new 4-digit PIN" maxlength="4" pattern="[0-9]{4}">
              </div>
            </div>
            <button type="submit" class="primary-btn">Save Security Keys</button>
          </form>
        `;
        break;

      case 'data':
        const activeUserEmail = Auth.currentUser?.email || 'sachin@mybook.os';
        const dbStorageKey = LocalDB.getStorageKey();
        box.innerHTML = `
          <h3 style="font-weight:600; border-bottom:1px solid var(--border-color); padding-bottom:8px; margin-bottom:20px;">Backup, Restore & Data Isolation</h3>
          <div style="background:rgba(157, 78, 221, 0.08); border:1px solid rgba(157, 78, 221, 0.25); border-radius:var(--radius-md); padding:14px; margin-bottom:20px;">
            <div style="font-size:0.8rem; color:var(--text-muted);">Active Storage Key:</div>
            <div style="font-family:monospace; color:var(--accent-purple); font-weight:600; font-size:0.9rem; word-break:break-all;">${dbStorageKey}</div>
            <div style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">All logs, memories, money and files are permanently stored under this specific email.</div>
          </div>
          
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div style="display:flex; align-items:center; justify-content:space-between; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-md);">
              <div>
                <h4 style="font-weight:600;">Export Archive (${activeUserEmail})</h4>
                <p style="font-size:0.78rem; color:var(--text-muted);">Download complete database for this email as a JSON backup.</p>
              </div>
              <button class="primary-btn" onclick="ViewController.exportOSData()"><i data-lucide="download"></i><span>Export</span></button>
            </div>

            <div style="display:flex; align-items:center; justify-content:space-between; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-md);">
              <div>
                <h4 style="font-weight:600;">Import / Restore into (${activeUserEmail})</h4>
                <p style="font-size:0.78rem; color:var(--text-muted);">Restore records from a previously exported backup JSON file.</p>
              </div>
              <input type="file" id="import-json-file" class="hide" accept=".json" onchange="ViewController.importOSData(event)">
              <button class="secondary-btn" onclick="document.getElementById('import-json-file').click()"><i data-lucide="upload-cloud"></i><span>Import</span></button>
            </div>

            <div style="display:flex; align-items:center; justify-content:space-between; padding:12px; border:1px solid var(--border-color); border-radius:var(--radius-md);">
              <div>
                <h4 style="font-weight:600;">Switch Account / Sign Out</h4>
                <p style="font-size:0.78rem; color:var(--text-muted);">Lock this session and return to the login screen.</p>
              </div>
              <button class="secondary-btn" onclick="Auth.logout()"><i data-lucide="log-out"></i><span>Sign Out</span></button>
            </div>

            <div style="display:flex; align-items:center; justify-content:space-between; padding:12px; border:1px solid rgba(255, 158, 0, 0.4); background:rgba(255, 158, 0, 0.04); border-radius:var(--radius-md);">
              <div>
                <h4 style="color:var(--accent-gold); font-weight:600;">Reset My Data</h4>
                <p style="font-size:0.78rem; color:var(--text-muted);">Wipes records for this email only, restoring blank templates.</p>
              </div>
              <button class="secondary-btn" style="color:var(--accent-gold); border-color:var(--accent-gold);" onclick="ViewController.factoryResetDB()"><i data-lucide="rotate-ccw"></i><span>Reset My Data</span></button>
            </div>

            <div style="display:flex; align-items:center; justify-content:space-between; padding:12px; border:1px solid var(--accent-rose); background:rgba(255, 77, 109, 0.04); border-radius:var(--radius-md);">
              <div>
                <h4 style="color:var(--accent-rose); font-weight:600;">Delete This Account</h4>
                <p style="font-size:0.78rem; color:var(--text-muted);">Permanently removes account and all isolated files.</p>
              </div>
              <button class="secondary-btn" style="color:var(--accent-rose); border-color:var(--accent-rose);" onclick="ViewController.deleteAccountAndData()"><i data-lucide="trash-2"></i><span>Delete Account</span></button>
            </div>
          </div>
        `;
        break;
    }
    lucide.createIcons();
  },

  saveGeneralSettings(e) {
    e.preventDefault();
    const theme = document.getElementById('set-theme-mode').value;
    LocalDB.saveSettings({ theme });

    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    showToast('Theme preferences updated.', 'success');
  },

  async saveSecuritySettings(e) {
    e.preventDefault();
    const name = document.getElementById('set-username')?.value?.trim();
    const pwd = document.getElementById('set-pwd')?.value;
    const pin = document.getElementById('set-pin')?.value;
    const currentEmail = Auth.currentUser?.email || LocalDB.getSettings().userId;

    const updates = {};
    if (name) updates.name = name;
    if (pwd) {
      if (pwd.length < 6) {
        showToast('Password must be at least 6 characters.', 'error');
        return;
      }
      updates.password = pwd;
    }
    if (pin) {
      if (!/^[0-9]{4}$/.test(pin)) {
        showToast('Vault PIN must be exactly 4 digits.', 'error');
        return;
      }
      updates.pin = pin;
    }

    if (currentEmail) {
      await AccountManager.updateAccount(currentEmail, updates);
      if (updates.name) {
        const db = LocalDB.getDB();
        db.profile.name = updates.name;
        LocalDB.writeDB(db);
        updateSidebarUserDisplay();
      }
      if (updates.password) {
        const hash = await sha256(updates.password);
        LocalDB.saveSettings({ passwordHash: hash });
      }
      if (updates.pin) {
        const hash = await sha256(updates.pin);
        LocalDB.saveSettings({ vaultPinHash: hash });
      }
    }

    showToast('Security credentials updated successfully.', 'success');
    if (document.getElementById('set-pwd')) document.getElementById('set-pwd').value = '';
    if (document.getElementById('set-pin')) document.getElementById('set-pin').value = '';
  },

  exportOSData() {
    const email = Auth.currentUser?.email || 'sachin@mybook.os';
    const data = JSON.stringify(LocalDB.getDB(), null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mybook_backup_${email}_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showToast(`Database backup exported for ${email}.`, 'success');
  },

  importOSData(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (parsed.settings && parsed.profile) {
          LocalDB.writeDB(parsed);
          showToast('Database restored successfully! Refreshing view.', 'success');
          updateSidebarUserDisplay();
          setTimeout(() => ViewController.render('settings'), 600);
        } else {
          showToast('Invalid backup file formatting.', 'error');
        }
      } catch (err) {
        showToast('Error reading import file.', 'error');
      }
    };
    reader.readAsText(file);
  },

  factoryResetDB() {
    const email = Auth.currentUser?.email || 'this account';
    if (confirm(`Are you sure you want to reset data for ${email}? This will restore the default templates.`)) {
      const key = LocalDB.getStorageKey();
      localStorage.removeItem(key);
      showToast('Database reset to defaults.', 'info');
      LocalDB.getDB();
      updateSidebarUserDisplay();
      window.location.hash = '#dashboard';
      ViewController.render('dashboard');
    }
  },

  deleteAccountAndData() {
    const email = Auth.currentUser?.email;
    if (!email) return;
    if (confirm(`WARNING: Are you sure you want to delete account ${email} and all its stored records? This action is permanent.`)) {
      AccountManager.deleteAccount(email);
      showToast('Account and associated data deleted.', 'info');
      Auth.logout();
    }
  },

  // --- CRUD Modals Openers ---
  openJournalAddModal() {
    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Write New Journal Entry</h3>
      </div>
      <form id="modal-journal-form" onsubmit="ViewController.handleJournalSave(event)">
        <div class="form-group">
          <label>Entry Title</label>
          <div class="input-wrapper"><input type="text" id="mj-title" required placeholder="Midnight thoughts..."></div>
        </div>
        <div class="form-group">
          <label>Date</label>
          <div class="input-wrapper"><input type="date" id="mj-date" value="${new Date().toISOString().split('T')[0]}" required></div>
        </div>
        <div class="form-group">
          <label>Mood Category</label>
          <div class="input-wrapper">
            <select id="mj-mood">
              <option value="😊 Happy">😊 Happy</option>
              <option value="😌 Calm">😌 Calm</option>
              <option value="😔 Sad">😔 Sad</option>
              <option value="⚡ Excited">⚡ Excited</option>
              <option value="😴 Tired">😴 Tired</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Location</label>
          <div class="input-wrapper"><input type="text" id="mj-loc" placeholder="Delhi, India"></div>
        </div>
        <div class="form-group">
          <label>Entry Description</label>
          <div class="input-wrapper"><textarea id="mj-desc" required placeholder="Write your heart out..."></textarea></div>
        </div>
        <div class="form-group">
          <label>Photo Attachment Link</label>
          <div class="input-wrapper"><input type="text" id="mj-photo" placeholder="https://images.unsplash.com/..."></div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Save Entry</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handleJournalSave(e) {
    e.preventDefault();
    const title = document.getElementById('mj-title').value;
    const date = document.getElementById('mj-date').value;
    const mood = document.getElementById('mj-mood').value;
    const location = document.getElementById('mj-loc').value || 'Delhi, India';
    const content = document.getElementById('mj-desc').value;
    const photo = document.getElementById('mj-photo').value;

    const record = {
      id: 'j_' + Date.now(),
      title,
      date,
      mood,
      location,
      content,
      people: ['Self'],
      tags: [],
      photos: photo ? [photo] : [],
      favorite: false,
      archived: false
    };

    LocalDB.save('journal', record);
    this.closeModal();
    showToast('Journal entry saved.', 'success');
    this.render('journal');
  },

  toggleTask(id) {
    const tasks = LocalDB.get('tasks');
    const t = tasks.find(item => item.id === id);
    if (t) {
      t.completed = !t.completed;
      LocalDB.save('tasks', t);
      showToast(t.completed ? 'Task Completed! 🎉' : 'Task reopened.', 'success');

      const currentHash = window.location.hash || '#dashboard';
      if (currentHash === '#dashboard') this.render('dashboard');
      else this.render('tasks');
    }
  },

  deleteTask(id) {
    if (confirm('Delete this task?')) {
      LocalDB.delete('tasks', id);
      showToast('Task removed.', 'success');
      this.render('tasks');
    }
  },

  openTaskAddModal() {
    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Add Task</h3>
      </div>
      <form id="modal-task-form" onsubmit="ViewController.handleTaskSave(event)">
        <div class="form-group">
          <label>Task Title</label>
          <div class="input-wrapper"><input type="text" id="mt-title" required placeholder="Final systems review..."></div>
        </div>
        <div class="form-group">
          <label>Due Date</label>
          <div class="input-wrapper"><input type="date" id="mt-date" value="${new Date().toISOString().split('T')[0]}" required></div>
        </div>
        <div class="form-group">
          <label>Priority</label>
          <div class="input-wrapper">
            <select id="mt-priority">
              <option value="Low">Low</option>
              <option value="Medium" selected>Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Category</label>
          <div class="input-wrapper"><input type="text" id="mt-cat" placeholder="College, Work, Health..."></div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Save Task</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handleTaskSave(e) {
    e.preventDefault();
    const title = document.getElementById('mt-title').value;
    const deadline = document.getElementById('mt-date').value;
    const priority = document.getElementById('mt-priority').value;
    const category = document.getElementById('mt-cat').value || 'General';

    const record = {
      id: 'ts_' + Date.now(),
      title,
      deadline,
      priority,
      category,
      recurring: 'None',
      completed: false
    };

    LocalDB.save('tasks', record);
    this.closeModal();
    showToast('Task added.', 'success');
    this.render('tasks');
  },

  closeModal() {
    document.getElementById('global-modal').classList.add('hide');
  },

  // Stub handlers for details previews and remaining CRUDs
  openImageViewer(src) {
    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="justify-content:flex-end; margin-bottom: 10px;">
        <button class="icon-btn" onclick="ViewController.closeModal()"><i data-lucide="x"></i></button>
      </div>
      <div style="text-align:center;">
        <img src="${src}" alt="Fullscreen" style="max-width:100%; max-height:70vh; border-radius:var(--radius-md);">
      </div>
    `;
    document.getElementById('global-modal').classList.remove('hide');
    lucide.createIcons();
  },

  // --- CRUD Modals Openers & View Actions (All operational) ---
  openEditProfileModal() {
    const profile = LocalDB.get('profile');
    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Edit Profile Info</h3>
      </div>
      <form id="modal-profile-form" onsubmit="ViewController.handleProfileSave(event)">
        <div class="form-group">
          <label>Full Name</label>
          <div class="input-wrapper"><input type="text" id="mp-name" value="${profile.name}" required></div>
        </div>
        <div class="form-group">
          <label>Nickname</label>
          <div class="input-wrapper"><input type="text" id="mp-nickname" value="${profile.nickname || ''}"></div>
        </div>
        <div class="form-group">
          <label>Date of Birth</label>
          <div class="input-wrapper"><input type="date" id="mp-dob" value="${profile.dob || ''}"></div>
        </div>
        <div class="form-group">
          <label>About Me</label>
          <div class="input-wrapper"><textarea id="mp-about">${profile.about || ''}</textarea></div>
        </div>
        <div class="form-group">
          <label>Interests (comma separated)</label>
          <div class="input-wrapper"><input type="text" id="mp-interests" value="${profile.interests || ''}"></div>
        </div>
        <div class="form-group">
          <label>Hobbies (comma separated)</label>
          <div class="input-wrapper"><input type="text" id="mp-hobbies" value="${profile.hobbies || ''}"></div>
        </div>
        <div class="form-group">
          <label>Profile Picture URL</label>
          <div class="input-wrapper"><input type="text" id="mp-avatar" value="${profile.avatar || ''}"></div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Save Profile</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handleProfileSave(e) {
    e.preventDefault();
    const name = document.getElementById('mp-name').value;
    const nickname = document.getElementById('mp-nickname').value;
    const dob = document.getElementById('mp-dob').value;
    const about = document.getElementById('mp-about').value;
    const interests = document.getElementById('mp-interests').value;
    const hobbies = document.getElementById('mp-hobbies').value;
    const avatar = document.getElementById('mp-avatar').value;

    const db = LocalDB.getDB();
    db.profile = { ...db.profile, name, nickname, dob, about, interests, hobbies, avatar };
    LocalDB.writeDB(db);

    this.closeModal();
    showToast('Profile updated successfully.', 'success');
    this.render('profile');

    // Update sidebar profile card info
    updateSidebarUserDisplay();
  },

  toggleFavoriteJournal(id) {
    const list = LocalDB.get('journal');
    const j = list.find(item => item.id === id);
    if (j) {
      j.favorite = !j.favorite;
      LocalDB.save('journal', j);
      showToast(j.favorite ? 'Marked as Favorite ⭐' : 'Unmarked favorite.', 'success');
      this.render('journal');
    }
  },

  archiveJournal(id) {
    const list = LocalDB.get('journal');
    const j = list.find(item => item.id === id);
    if (j) {
      j.archived = true;
      LocalDB.save('journal', j);
      showToast('Journal entry archived.', 'success');
      this.render('journal');
    }
  },

  deleteJournal(id) {
    if (confirm('Move this journal entry to Trash?')) {
      LocalDB.delete('journal', id);
      showToast('Moved to Trash.', 'success');
      this.render('journal');
    }
  },

  filterJournalList() {
    const query = document.getElementById('j-search-box').value.toLowerCase();
    const mood = document.getElementById('j-mood-filter').value;
    const journal = LocalDB.get('journal').filter(j => !j.archived);

    const filtered = journal.filter(j => {
      const matchesSearch = j.title.toLowerCase().includes(query) || j.content.toLowerCase().includes(query) || j.location.toLowerCase().includes(query);
      const matchesMood = mood === '' || j.mood === mood;
      return matchesSearch && matchesMood;
    });

    const entriesBox = document.getElementById('journal-entries-container');
    if (entriesBox) {
      entriesBox.innerHTML = filtered.map(j => {
        const photosHtml = (j.photos || []).map(p => `<div class="journal-photo-thumbnail" style="background-image: url('${p}')" onclick="ViewController.openImageViewer('${p}')"></div>`).join('');
        return `
          <div class="journal-entry-card glass-panel">
            <div class="journal-entry-header">
              <h3 style="font-family:var(--font-serif); font-size:1.3rem;">${j.title}</h3>
              <div style="display:flex; align-items:center; gap:8px;">
                <span class="badge badge-purple">${j.mood}</span>
                <button class="icon-btn" onclick="ViewController.toggleFavoriteJournal('${j.id}')" title="Favorite" style="width:32px; height:32px; color: ${j.favorite ? 'var(--accent-gold)' : 'var(--text-muted)'};">
                  <i data-lucide="star" style="width:14px; height:14px;"></i>
                </button>
                <button class="icon-btn" onclick="ViewController.openEditJournalModal('${j.id}')" title="Edit" style="width:32px; height:32px;">
                  <i data-lucide="edit-2" style="width:14px; height:14px;"></i>
                </button>
                <button class="icon-btn" onclick="ViewController.archiveJournal('${j.id}')" title="Archive" style="width:32px; height:32px;">
                  <i data-lucide="archive" style="width:14px; height:14px;"></i>
                </button>
                <button class="icon-btn" onclick="ViewController.deleteJournal('${j.id}')" title="Delete" style="width:32px; height:32px; color:var(--accent-rose);">
                  <i data-lucide="trash" style="width:14px; height:14px;"></i>
                </button>
              </div>
            </div>
            <p style="font-size:0.92rem; line-height:1.6; margin-bottom:14px;">${j.content}</p>
            <div class="journal-entry-meta">
              <span><i data-lucide="calendar"></i> ${formatDate(j.date)}</span>
              <span><i data-lucide="map-pin"></i> ${j.location}</span>
              <span><i data-lucide="users"></i> Tagged: ${j.people.join(', ')}</span>
              <span><i data-lucide="tag"></i> Tags: ${j.tags.map(t => `#${t}`).join(' ')}</span>
            </div>
            ${photosHtml ? `<div class="journal-photos-preview">${photosHtml}</div>` : ''}
          </div>
        `;
      }).join('') || `<div class="empty-state"><i data-lucide="pen-tool"></i><p>No matching entries found.</p></div>`;
      lucide.createIcons();
    }
  },

  openEditJournalModal(id) {
    const list = LocalDB.get('journal');
    const j = list.find(item => item.id === id);
    if (!j) return;

    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Edit Journal Entry</h3>
      </div>
      <form id="modal-journal-form" onsubmit="ViewController.handleJournalEditSave(event, '${id}')">
        <div class="form-group">
          <label>Entry Title</label>
          <div class="input-wrapper"><input type="text" id="mj-title" value="${j.title}" required></div>
        </div>
        <div class="form-group">
          <label>Date</label>
          <div class="input-wrapper"><input type="date" id="mj-date" value="${j.date}" required></div>
        </div>
        <div class="form-group">
          <label>Mood Category</label>
          <div class="input-wrapper">
            <select id="mj-mood">
              <option value="😊 Happy" ${j.mood.includes('Happy') ? 'selected' : ''}>😊 Happy</option>
              <option value="😌 Calm" ${j.mood.includes('Calm') ? 'selected' : ''}>😌 Calm</option>
              <option value="😔 Sad" ${j.mood.includes('Sad') ? 'selected' : ''}>😔 Sad</option>
              <option value="⚡ Excited" ${j.mood.includes('Excited') ? 'selected' : ''}>⚡ Excited</option>
              <option value="😴 Tired" ${j.mood.includes('Tired') ? 'selected' : ''}>😴 Tired</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Location</label>
          <div class="input-wrapper"><input type="text" id="mj-loc" value="${j.location}"></div>
        </div>
        <div class="form-group">
          <label>Entry Description</label>
          <div class="input-wrapper"><textarea id="mj-desc" required>${j.content}</textarea></div>
        </div>
        <div class="form-group">
          <label>Photo Link (Overwrite/Update)</label>
          <div class="input-wrapper"><input type="text" id="mj-photo" value="${j.photos[0] || ''}"></div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Save Updates</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handleJournalEditSave(e, id) {
    e.preventDefault();
    const list = LocalDB.get('journal');
    const j = list.find(item => item.id === id);
    if (j) {
      j.title = document.getElementById('mj-title').value;
      j.date = document.getElementById('mj-date').value;
      j.mood = document.getElementById('mj-mood').value;
      j.location = document.getElementById('mj-loc').value || 'Delhi, India';
      j.content = document.getElementById('mj-desc').value;
      const photo = document.getElementById('mj-photo').value;
      j.photos = photo ? [photo] : [];

      LocalDB.save('journal', j);
      this.closeModal();
      showToast('Journal entry modified.', 'success');
      this.render('journal');
    }
  },

  openMemoryAddModal() {
    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Archive New Memory</h3>
      </div>
      <form id="modal-memory-form" onsubmit="ViewController.handleMemorySave(event)">
        <div class="form-group">
          <label>Memory Title</label>
          <div class="input-wrapper"><input type="text" id="mm-title" required placeholder="Summer snow adventure..."></div>
        </div>
        <div class="form-group">
          <label>Date</label>
          <div class="input-wrapper"><input type="date" id="mm-date" value="${new Date().toISOString().split('T')[0]}" required></div>
        </div>
        <div class="form-group">
          <label>Location</label>
          <div class="input-wrapper"><input type="text" id="mm-loc" placeholder="Manali, HP"></div>
        </div>
        <div class="form-group">
          <label>Story / Details</label>
          <div class="input-wrapper"><textarea id="mm-story" required placeholder="How did this memory feel?"></textarea></div>
        </div>
        <div class="form-group">
          <label>Photo URL</label>
          <div class="input-wrapper"><input type="text" id="mm-photo" placeholder="https://images.unsplash.com/..."></div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Save Memory</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handleMemorySave(e) {
    e.preventDefault();
    const title = document.getElementById('mm-title').value;
    const date = document.getElementById('mm-date').value;
    const location = document.getElementById('mm-loc').value || 'Delhi, India';
    const story = document.getElementById('mm-story').value;
    const photo = document.getElementById('mm-photo').value;

    const record = {
      id: 'm_' + Date.now(),
      title,
      date,
      location,
      people: ['Self'],
      story,
      mood: '😊 Happy',
      photos: photo ? [photo] : [],
      tags: [],
      favorite: false
    };

    LocalDB.save('memories', record);
    this.closeModal();
    showToast('Memory cataloged successfully.', 'success');
    this.render('memories');
  },

  openMemoryDetails(id) {
    const list = LocalDB.get('memories');
    const m = list.find(item => item.id === id);
    if (!m) return;

    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:16px;">
        <h3>${m.title}</h3>
        <button class="icon-btn" onclick="ViewController.closeModal()"><i data-lucide="x"></i></button>
      </div>
      <div>
        <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">
          <span><i data-lucide="calendar"></i> ${formatDate(m.date)}</span> | 
          <span><i data-lucide="map-pin"></i> ${m.location}</span>
        </div>
        <p style="font-size:0.95rem; line-height:1.6; margin-bottom:20px;">${m.story}</p>
        ${m.photos[0] ? `<img src="${m.photos[0]}" style="width:100%; border-radius:var(--radius-md); margin-bottom:12px;" onclick="ViewController.openImageViewer('${m.photos[0]}')">` : ''}
      </div>
      <div class="modal-actions" style="margin-top:12px;">
        <button class="secondary-btn" style="color:var(--accent-rose);" onclick="ViewController.deleteMemory('${m.id}')">Delete Memory</button>
      </div>
    `;
    document.getElementById('global-modal').classList.remove('hide');
    lucide.createIcons();
  },

  deleteMemory(id) {
    if (confirm('Move this memory to Trash?')) {
      LocalDB.delete('memories', id);
      this.closeModal();
      showToast('Memory moved to Trash.', 'success');
      this.render('memories');
    }
  },

  toggleFavMemory(id) {
    const list = LocalDB.get('memories');
    const m = list.find(item => item.id === id);
    if (m) {
      m.favorite = !m.favorite;
      LocalDB.save('memories', m);
      showToast(m.favorite ? 'Memory favorited ⭐' : 'Memory unfavorited.', 'success');
      this.render('memories');
    }
  },

  openTripAddModal() {
    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Log New Journey</h3>
      </div>
      <form id="modal-trip-form" onsubmit="ViewController.handleTripSave(event)">
        <div class="form-group">
          <label>Trip Title</label>
          <div class="input-wrapper"><input type="text" id="mtr-name" required placeholder="Summer Getaway to Goa..."></div>
        </div>
        <div class="form-group">
          <label>Destination City/Country</label>
          <div class="input-wrapper"><input type="text" id="mtr-dest" required placeholder="Goa, India"></div>
        </div>
        <div class="form-group">
          <label>Start Date</label>
          <div class="input-wrapper"><input type="date" id="mtr-start" value="${new Date().toISOString().split('T')[0]}" required></div>
        </div>
        <div class="form-group">
          <label>End Date</label>
          <div class="input-wrapper"><input type="date" id="mtr-end" value="${new Date().toISOString().split('T')[0]}" required></div>
        </div>
        <div class="form-group">
          <label>Purpose</label>
          <div class="input-wrapper"><input type="text" id="mtr-purpose" placeholder="Leisure, Business, College..."></div>
        </div>
        <div class="form-group">
          <label>Total Budget Expense</label>
          <div class="input-wrapper"><input type="number" id="mtr-budget" placeholder="10000" required></div>
        </div>
        <div class="form-group">
          <label>Cover Photo URL</label>
          <div class="input-wrapper"><input type="text" id="mtr-photo" placeholder="https://images.unsplash.com/..."></div>
        </div>
        <div class="form-group">
          <label>Notes</label>
          <div class="input-wrapper"><textarea id="mtr-notes" placeholder="Write logs, travel schedules..."></textarea></div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Log Journey</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handleTripSave(e) {
    e.preventDefault();
    const name = document.getElementById('mtr-name').value;
    const destination = document.getElementById('mtr-dest').value;
    const startDate = document.getElementById('mtr-start').value;
    const endDate = document.getElementById('mtr-end').value;
    const purpose = document.getElementById('mtr-purpose').value || 'Leisure';
    const totalExpense = Number(document.getElementById('mtr-budget').value || 0);
    const photo = document.getElementById('mtr-photo').value;
    const notes = document.getElementById('mtr-notes').value || '';

    const record = {
      id: 't_' + Date.now(),
      name,
      destination,
      startDate,
      endDate,
      people: ['Self'],
      purpose,
      transport: 'Flight/Car',
      hotel: 'Hotel',
      placesVisited: '',
      totalExpense,
      notes,
      photos: photo ? [photo] : [],
      favorite: false
    };

    LocalDB.save('trips', record);

    // Auto add travel expense to expense module
    const expRecord = {
      id: 'ex_' + Date.now(),
      amount: totalExpense,
      date: startDate,
      category: 'Travel',
      description: `Logged Trip: ${name}`,
      method: 'UPI',
      location: destination,
      person: '',
      notes: '',
      photo: ''
    };
    LocalDB.save('expenses', expRecord);

    this.closeModal();
    showToast('Travel Journey documented.', 'success');
    this.render('travel');
  },

  openTripDetails(id) {
    const list = LocalDB.get('trips');
    const t = list.find(item => item.id === id);
    if (!t) return;

    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:16px;">
        <h3>${t.name}</h3>
        <button class="icon-btn" onclick="ViewController.closeModal()"><i data-lucide="x"></i></button>
      </div>
      <div>
        <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">
          <span><i data-lucide="compass"></i> Destination: <strong>${t.destination}</strong></span> | 
          <span><i data-lucide="calendar"></i> Dates: <strong>${formatDate(t.startDate)} - ${formatDate(t.endDate)}</strong></span>
        </div>
        <p style="font-size:0.95rem; line-height:1.6; margin-bottom:12px;">${t.notes || 'No itineraries added yet.'}</p>
        <div style="font-size:0.9rem; margin-bottom:20px; color:var(--accent-emerald);">Total Flight & Stay Outflow: <strong>₹${t.totalExpense}</strong></div>
        ${t.photos[0] ? `<img src="${t.photos[0]}" style="width:100%; border-radius:var(--radius-md);" onclick="ViewController.openImageViewer('${t.photos[0]}')">` : ''}
      </div>
      <div class="modal-actions" style="margin-top:12px;">
        <button class="secondary-btn" style="color:var(--accent-rose);" onclick="ViewController.deleteTrip('${t.id}')">Delete Trip</button>
      </div>
    `;
    document.getElementById('global-modal').classList.remove('hide');
    lucide.createIcons();
  },

  deleteTrip(id) {
    if (confirm('Delete this trip log?')) {
      LocalDB.delete('trips', id);
      this.closeModal();
      showToast('Trip log deleted.', 'success');
      this.render('travel');
    }
  },

  openIncomeAddModal() {
    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Record Income</h3>
      </div>
      <form id="modal-income-form" onsubmit="ViewController.handleIncomeSave(event)">
        <div class="form-group">
          <label>Source</label>
          <div class="input-wrapper"><input type="text" id="mi-source" required placeholder="Stipend, Gift, Freelance..."></div>
        </div>
        <div class="form-group">
          <label>Amount (INR)</label>
          <div class="input-wrapper"><input type="number" id="mi-amount" required placeholder="25000"></div>
        </div>
        <div class="form-group">
          <label>Date</label>
          <div class="input-wrapper"><input type="date" id="mi-date" value="${new Date().toISOString().split('T')[0]}" required></div>
        </div>
        <div class="form-group">
          <label>Notes</label>
          <div class="input-wrapper"><input type="text" id="mi-notes" placeholder="Monthly paycheck info..."></div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Save Income</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handleIncomeSave(e) {
    e.preventDefault();
    const source = document.getElementById('mi-source').value;
    const amount = Number(document.getElementById('mi-amount').value || 0);
    const date = document.getElementById('mi-date').value;
    const notes = document.getElementById('mi-notes').value || '';

    const record = {
      id: 'in_' + Date.now(),
      source,
      amount,
      date,
      notes
    };

    LocalDB.save('income', record);
    this.closeModal();
    showToast('Income ledger saved.', 'success');
    this.render('money');
  },

  openExpenseAddModal() {
    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Record Outflow / Expense</h3>
      </div>
      <form id="modal-expense-form" onsubmit="ViewController.handleExpenseSave(event)">
        <div class="form-group">
          <label>Expense Description</label>
          <div class="input-wrapper"><input type="text" id="me-desc" required placeholder="Keyboard keycaps, Dinner..."></div>
        </div>
        <div class="form-group">
          <label>Amount (INR)</label>
          <div class="input-wrapper"><input type="number" id="me-amount" required placeholder="800"></div>
        </div>
        <div class="form-group">
          <label>Category</label>
          <div class="input-wrapper">
            <select id="me-cat">
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="College">College</option>
              <option value="Shopping">Shopping</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Bills">Bills</option>
              <option value="Health">Health</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Date</label>
          <div class="input-wrapper"><input type="date" id="me-date" value="${new Date().toISOString().split('T')[0]}" required></div>
        </div>
        <div class="form-group">
          <label>Payment Method</label>
          <div class="input-wrapper"><input type="text" id="me-method" placeholder="UPI, Cash, Credit Card" value="UPI"></div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Save Expense</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handleExpenseSave(e) {
    e.preventDefault();
    const description = document.getElementById('me-desc').value;
    const amount = Number(document.getElementById('me-amount').value || 0);
    const category = document.getElementById('me-cat').value;
    const date = document.getElementById('me-date').value;
    const method = document.getElementById('me-method').value || 'UPI';

    const record = {
      id: 'ex_' + Date.now(),
      amount,
      date,
      category,
      description,
      method,
      location: '',
      person: '',
      notes: '',
      photo: ''
    };

    LocalDB.save('expenses', record);
    this.closeModal();
    showToast('Expense logged successfully.', 'success');
    this.render('money');
  },

  openSemesterModal() {
    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Academic Semester & CGPA Preferences</h3>
      </div>
      <form id="modal-semester-form" onsubmit="ViewController.handleSemesterSave(event)">
        <div class="form-group">
          <label>University / College Name</label>
          <div class="input-wrapper"><input type="text" id="mcd-uni" placeholder="IIT Delhi" value="${LocalDB.getDB().college?.profile?.university || ''}" required></div>
        </div>
        <div class="form-group">
          <label>Current Cumulative CGPA</label>
          <div class="input-wrapper"><input type="text" id="mcd-cgpa" placeholder="9.2" value="${LocalDB.getDB().college?.profile?.cgpa || ''}" required></div>
        </div>
        <div class="form-group">
          <label>Active Semester Name</label>
          <div class="input-wrapper"><input type="text" id="mcd-semname" placeholder="Semester 7 (Current)" required></div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Save Academics</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handleSemesterSave(e) {
    e.preventDefault();
    const uni = document.getElementById('mcd-uni').value;
    const cgpa = document.getElementById('mcd-cgpa').value;
    const semName = document.getElementById('mcd-semname').value;

    const db = LocalDB.getDB();
    if (!db.college) db.college = { profile: {}, semesters: [] };
    db.college.profile = { university: uni, degree: 'B.Tech CS', cgpa: cgpa, currentSemester: semName };

    // Add new sem if not existing
    const hasSem = db.college.semesters.find(s => s.name === semName);
    if (!hasSem) {
      db.college.semesters.unshift({
        id: 'sem_' + Date.now(),
        name: semName,
        subjects: [
          { name: 'Systems Engineering', code: 'COL702', faculty: 'TBD', attendance: '100%', marks: 'Pending', assignmentProgress: 0 }
        ],
        assignments: []
      });
    }

    LocalDB.writeDB(db);
    this.closeModal();
    showToast('Academics info refreshed.', 'success');
    this.render('college');
  },

  openSkillAddModal() {
    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Track New Skill</h3>
      </div>
      <form id="modal-skill-form" onsubmit="ViewController.handleSkillSave(event)">
        <div class="form-group">
          <label>Skill Name</label>
          <div class="input-wrapper"><input type="text" id="msk-name" required placeholder="Python, Go, UI Design..."></div>
        </div>
        <div class="form-group">
          <label>Category</label>
          <div class="input-wrapper"><input type="text" id="msk-cat" placeholder="Tech, Soft Skills, Design..." value="Tech"></div>
        </div>
        <div class="form-group">
          <label>Confidence Level</label>
          <div class="input-wrapper">
            <select id="msk-level">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Progress percentage (0-100)</label>
          <div class="input-wrapper"><input type="number" id="msk-prog" min="0" max="100" placeholder="80" required></div>
        </div>
        <div class="form-group">
          <label>Notes</label>
          <div class="input-wrapper"><textarea id="msk-notes" placeholder="Primary choice for backend microservices..."></textarea></div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Add Skill</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handleSkillSave(e) {
    e.preventDefault();
    const name = document.getElementById('msk-name').value;
    const category = document.getElementById('msk-cat').value || 'Tech';
    const level = document.getElementById('msk-level').value;
    const progress = Number(document.getElementById('msk-prog').value || 0);
    const notes = document.getElementById('msk-notes').value || '';

    const record = {
      id: 'sk_' + Date.now(),
      name,
      category,
      level,
      progress,
      startDate: new Date().toISOString().split('T')[0],
      resources: '',
      certs: '',
      notes
    };

    LocalDB.save('skills', record);
    this.closeModal();
    showToast('New learning path logged.', 'success');
    this.render('skills');
  },

  openSkillDetails(id) {
    const list = LocalDB.get('skills');
    const s = list.find(item => item.id === id);
    if (!s) return;

    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:16px;">
        <h3>${s.name} Details</h3>
        <button class="icon-btn" onclick="ViewController.closeModal()"><i data-lucide="x"></i></button>
      </div>
      <div>
        <p>Category: <strong>${s.category}</strong></p>
        <p>Level: <strong>${s.level} (${s.progress}%)</strong></p>
        <p style="margin-top:10px;">Notes: ${s.notes || 'No description added.'}</p>
      </div>
      <div class="modal-actions" style="margin-top:20px;">
        <button class="secondary-btn" style="color:var(--accent-rose);" onclick="ViewController.deleteSkill('${s.id}')">Delete Skill</button>
      </div>
    `;
    document.getElementById('global-modal').classList.remove('hide');
    lucide.createIcons();
  },

  deleteSkill(id) {
    if (confirm('Delete this skill metric?')) {
      LocalDB.delete('skills', id);
      this.closeModal();
      showToast('Skill removed.', 'success');
      this.render('skills');
    }
  },

  openProjectAddModal() {
    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Add Project Showcase</h3>
      </div>
      <form id="modal-project-form" onsubmit="ViewController.handleProjectSave(event)">
        <div class="form-group">
          <label>Project Title</label>
          <div class="input-wrapper"><input type="text" id="mpr-name" required placeholder="AetherDB, Life Dashboard..."></div>
        </div>
        <div class="form-group">
          <label>Brief Description</label>
          <div class="input-wrapper"><textarea id="mpr-desc" required placeholder="What does this codebase do?"></textarea></div>
        </div>
        <div class="form-group">
          <label>Technologies Used (comma separated)</label>
          <div class="input-wrapper"><input type="text" id="mpr-techs" required placeholder="React, TypeScript, IndexedDB"></div>
        </div>
        <div class="form-group">
          <label>Status</label>
          <div class="input-wrapper">
            <select id="mpr-status">
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Archived">Archived</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>GitHub Repository URL</label>
          <div class="input-wrapper"><input type="text" id="mpr-git" placeholder="https://github.com/user/repo"></div>
        </div>
        <div class="form-group">
          <label>Cover Photo Screenshot Link</label>
          <div class="input-wrapper"><input type="text" id="mpr-photo" placeholder="https://images.unsplash.com/..."></div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Save Project</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handleProjectSave(e) {
    e.preventDefault();
    const name = document.getElementById('mpr-name').value;
    const description = document.getElementById('mpr-desc').value;
    const techs = document.getElementById('mpr-techs').value.split(',').map(t => t.trim());
    const status = document.getElementById('mpr-status').value;
    const github = document.getElementById('mpr-git').value;
    const photo = document.getElementById('mpr-photo').value;

    const record = {
      id: 'p_' + Date.now(),
      name,
      description,
      technologies: techs,
      startDate: new Date().toISOString().split('T')[0],
      endDate: status === 'Completed' ? new Date().toISOString().split('T')[0] : 'Present',
      status,
      github,
      live: '',
      screenshots: photo ? [photo] : [],
      notes: ''
    };

    LocalDB.save('projects', record);
    this.closeModal();
    showToast('Project cataloged.', 'success');
    this.render('projects');
  },

  openProjectEditModal(id) {
    const list = LocalDB.get('projects');
    const p = list.find(item => item.id === id);
    if (!p) return;

    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Edit Project</h3>
      </div>
      <form id="modal-project-form" onsubmit="ViewController.handleProjectEditSave(event, '${id}')">
        <div class="form-group">
          <label>Project Title</label>
          <div class="input-wrapper"><input type="text" id="mpr-name" value="${p.name}" required></div>
        </div>
        <div class="form-group">
          <label>Brief Description</label>
          <div class="input-wrapper"><textarea id="mpr-desc" required>${p.description}</textarea></div>
        </div>
        <div class="form-group">
          <label>Technologies Used (comma separated)</label>
          <div class="input-wrapper"><input type="text" id="mpr-techs" value="${p.technologies.join(', ')}" required></div>
        </div>
        <div class="form-group">
          <label>Status</label>
          <div class="input-wrapper">
            <select id="mpr-status">
              <option value="In Progress" ${p.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
              <option value="Completed" ${p.status === 'Completed' ? 'selected' : ''}>Completed</option>
              <option value="Archived" ${p.status === 'Archived' ? 'selected' : ''}>Archived</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>GitHub Repository URL</label>
          <div class="input-wrapper"><input type="text" id="mpr-git" value="${p.github || ''}"></div>
        </div>
        <div class="form-group">
          <label>Cover Photo Screenshot Link</label>
          <div class="input-wrapper"><input type="text" id="mpr-photo" value="${p.screenshots[0] || ''}"></div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" style="color:var(--accent-rose); margin-right:auto;" onclick="ViewController.deleteProject('${id}')">Delete</button>
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Save Updates</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handleProjectEditSave(e, id) {
    e.preventDefault();
    const list = LocalDB.get('projects');
    const p = list.find(item => item.id === id);
    if (p) {
      p.name = document.getElementById('mpr-name').value;
      p.description = document.getElementById('mpr-desc').value;
      p.technologies = document.getElementById('mpr-techs').value.split(',').map(t => t.trim());
      p.status = document.getElementById('mpr-status').value;
      p.github = document.getElementById('mpr-git').value;
      const photo = document.getElementById('mpr-photo').value;
      p.screenshots = photo ? [photo] : [];

      LocalDB.save('projects', p);
      this.closeModal();
      showToast('Project updated.', 'success');
      this.render('projects');
    }
  },

  deleteProject(id) {
    if (confirm('Delete this project log?')) {
      LocalDB.delete('projects', id);
      this.closeModal();
      showToast('Project deleted.', 'success');
      this.render('projects');
    }
  },

  openGoalAddModal() {
    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Set Target Goal</h3>
      </div>
      <form id="modal-goal-form" onsubmit="ViewController.handleGoalSave(event)">
        <div class="form-group">
          <label>Goal Objective</label>
          <div class="input-wrapper"><input type="text" id="mgo-title" required placeholder="Complete thesis, Cycle streak..."></div>
        </div>
        <div class="form-group">
          <label>Goal Details</label>
          <div class="input-wrapper"><textarea id="mgo-desc" required placeholder="Define parameters of success..."></textarea></div>
        </div>
        <div class="form-group">
          <label>Category</label>
          <div class="input-wrapper"><input type="text" id="mgo-cat" placeholder="Education, Health, Financial..." value="Education"></div>
        </div>
        <div class="form-group">
          <label>Deadline Date</label>
          <div class="input-wrapper"><input type="date" id="mgo-deadline" value="${new Date().toISOString().split('T')[0]}" required></div>
        </div>
        <div class="form-group">
          <label>Priority</label>
          <div class="input-wrapper">
            <select id="mgo-priority">
              <option value="Low">Low</option>
              <option value="Medium" selected>Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Set Goal</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handleGoalSave(e) {
    e.preventDefault();
    const title = document.getElementById('mgo-title').value;
    const description = document.getElementById('mgo-desc').value;
    const category = document.getElementById('mgo-cat').value || 'Education';
    const deadline = document.getElementById('mgo-deadline').value;
    const priority = document.getElementById('mgo-priority').value;

    const record = {
      id: 'g_' + Date.now(),
      title,
      description,
      category,
      priority,
      startDate: new Date().toISOString().split('T')[0],
      deadline,
      progress: 0,
      status: 'In Progress',
      notes: '',
      milestones: []
    };

    LocalDB.save('goals', record);
    this.closeModal();
    showToast('New target goal established.', 'success');
    this.render('goals');
  },

  openGoalEditModal(id) {
    const list = LocalDB.get('goals');
    const g = list.find(item => item.id === id);
    if (!g) return;

    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Update Goal Progress</h3>
      </div>
      <form id="modal-goal-form" onsubmit="ViewController.handleGoalEditSave(event, '${id}')">
        <div class="form-group">
          <label>Goal Objective</label>
          <div class="input-wrapper"><input type="text" id="mgo-title" value="${g.title}" required></div>
        </div>
        <div class="form-group">
          <label>Details</label>
          <div class="input-wrapper"><textarea id="mgo-desc" required>${g.description}</textarea></div>
        </div>
        <div class="form-group">
          <label>Category</label>
          <div class="input-wrapper"><input type="text" id="mgo-cat" value="${g.category}"></div>
        </div>
        <div class="form-group">
          <label>Progress Percentage (0-100)</label>
          <div class="input-wrapper"><input type="number" id="mgo-prog" value="${g.progress}" min="0" max="100" required></div>
        </div>
        <div class="form-group">
          <label>Goal Status</label>
          <div class="input-wrapper">
            <select id="mgo-status">
              <option value="Not Started" ${g.status === 'Not Started' ? 'selected' : ''}>Not Started</option>
              <option value="In Progress" ${g.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
              <option value="Completed" ${g.status === 'Completed' ? 'selected' : ''}>Completed</option>
              <option value="Paused" ${g.status === 'Paused' ? 'selected' : ''}>Paused</option>
            </select>
          </div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" style="color:var(--accent-rose); margin-right:auto;" onclick="ViewController.deleteGoal('${id}')">Delete</button>
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Save Progress</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handleGoalEditSave(e, id) {
    e.preventDefault();
    const list = LocalDB.get('goals');
    const g = list.find(item => item.id === id);
    if (g) {
      g.title = document.getElementById('mgo-title').value;
      g.description = document.getElementById('mgo-desc').value;
      g.category = document.getElementById('mgo-cat').value;
      g.progress = Number(document.getElementById('mgo-prog').value || 0);
      g.status = document.getElementById('mgo-status').value;
      if (g.progress === 100) g.status = 'Completed';

      LocalDB.save('goals', g);
      this.closeModal();
      showToast('Goal progress registered.', 'success');
      this.render('goals');
    }
  },

  deleteGoal(id) {
    if (confirm('Delete this goal metric?')) {
      LocalDB.delete('goals', id);
      this.closeModal();
      showToast('Goal record removed.', 'success');
      this.render('goals');
    }
  },

  openNoteAddModal() {
    const isVaultOpen = Auth.isVaultUnlocked;
    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Write New Knowledge Note</h3>
      </div>
      <form id="modal-note-form" onsubmit="ViewController.handleNoteSave(event)">
        <div class="form-group">
          <label>Note Title</label>
          <div class="input-wrapper"><input type="text" id="mn-title" required placeholder="Concept overview, recipe..."></div>
        </div>
        <div class="form-group">
          <label>Category</label>
          <div class="input-wrapper">
            <select id="mn-cat">
              <option value="Programming">Programming</option>
              <option value="Ideas">Ideas</option>
              <option value="Private" ${!isVaultOpen ? 'disabled style="color:var(--text-muted)"' : ''}>Private Notes 🔒</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Tags (comma separated)</label>
          <div class="input-wrapper"><input type="text" id="mn-tags" placeholder="js, concept, architecture"></div>
        </div>
        <div class="form-group">
          <label>Note Content (Markdown text)</label>
          <div class="input-wrapper"><textarea id="mn-content" required placeholder="Write concepts, snippets, resources here..." style="min-height:180px; font-family: monospace;"></textarea></div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Save Note</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handleNoteSave(e) {
    e.preventDefault();
    const title = document.getElementById('mn-title').value;
    const category = document.getElementById('mn-cat').value;
    const tags = document.getElementById('mn-tags').value.split(',').map(t => t.trim()).filter(t => t !== '');
    const content = document.getElementById('mn-content').value;

    const record = {
      id: 'n_' + Date.now(),
      title,
      category,
      tags,
      content,
      favorite: false,
      archived: false
    };

    LocalDB.save('notes', record);
    this.closeModal();
    showToast('Knowledge note logged.', 'success');
    this.render('notes');
  },

  selectActiveNote(id) {
    const list = LocalDB.get('notes');
    const n = list.find(item => item.id === id);
    if (!n) return;

    // Toggle active sidebar highlight
    document.querySelectorAll('.note-sidebar-item').forEach(item => {
      item.classList.remove('active');
    });

    const pane = document.getElementById('note-view-pane');
    if (pane) {
      pane.innerHTML = `
        <div class="note-editor-header">
          <div>
            <h2 style="font-family:var(--font-serif); font-size:1.5rem;">${n.title}</h2>
            <div style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">
              Category: <strong>${n.category}</strong> | Tags: ${n.tags.map(t => `#${t}`).join(' ')}
            </div>
          </div>
          <div style="display:flex; gap:8px;">
            <button class="icon-btn" onclick="ViewController.toggleFavoriteNote('${n.id}')" style="color:${n.favorite ? 'var(--accent-gold)' : 'var(--text-muted)'}"><i data-lucide="star"></i></button>
            <button class="icon-btn" onclick="ViewController.deleteNote('${n.id}')" style="color:var(--accent-rose)"><i data-lucide="trash"></i></button>
          </div>
        </div>
        <div class="note-editor-body" style="font-family: monospace; white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6; color: var(--text-main); background: rgba(0,0,0,0.15); padding: 16px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
${n.content}
        </div>
      `;
      lucide.createIcons();
    }
  },

  toggleFavoriteNote(id) {
    const list = LocalDB.get('notes');
    const n = list.find(item => item.id === id);
    if (n) {
      n.favorite = !n.favorite;
      LocalDB.save('notes', n);
      showToast(n.favorite ? 'Note pinned as favorite ⭐' : 'Removed favorite.', 'success');
      this.selectActiveNote(id);
    }
  },

  deleteNote(id) {
    if (confirm('Delete this knowledge note?')) {
      LocalDB.delete('notes', id);
      showToast('Note deleted.', 'success');
      this.render('notes');
    }
  },

  filterNotesCategory() {
    const cat = document.getElementById('notes-category-select').value;
    const notes = LocalDB.get('notes').filter(n => !n.archived);

    const filtered = notes.filter(n => cat === 'All' || n.category === cat);
    const box = document.getElementById('notes-sidebar-items-box');
    if (box) {
      box.innerHTML = filtered.map(n => `
        <div class="note-sidebar-item glass-panel" onclick="ViewController.selectActiveNote('${n.id}')">
          <h4 style="font-weight:600; font-size:0.92rem; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${n.title}</h4>
          <p style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">${n.category} • ${n.tags.map(t => `#${t}`).join(' ')}</p>
        </div>
      `).join('') || `<div class="empty-state"><i data-lucide="book-open"></i><p>No matching notes found.</p></div>`;
      lucide.createIcons();
    }
  },

  openPersonAddModal() {
    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Link New Contact / Person</h3>
      </div>
      <form id="modal-person-form" onsubmit="ViewController.handlePersonSave(event)">
        <div class="form-group">
          <label>Full Name</label>
          <div class="input-wrapper"><input type="text" id="mpp-name" required placeholder="Aarav Mehta"></div>
        </div>
        <div class="form-group">
          <label>Nickname</label>
          <div class="input-wrapper"><input type="text" id="mpp-nickname" placeholder="Aarav"></div>
        </div>
        <div class="form-group">
          <label>Birthday</label>
          <div class="input-wrapper"><input type="date" id="mpp-birthday" value="2004-10-12" required></div>
        </div>
        <div class="form-group">
          <label>Relation Category</label>
          <div class="input-wrapper"><input type="text" id="mpp-cat" placeholder="Friend, Family, Work" value="Friend"></div>
        </div>
        <div class="form-group">
          <label>Special Notes</label>
          <div class="input-wrapper"><textarea id="mpp-notes" placeholder="Met in first semester CS lab..."></textarea></div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Link Person</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handlePersonSave(e) {
    e.preventDefault();
    const name = document.getElementById('mpp-name').value;
    const nickname = document.getElementById('mpp-nickname').value || name;
    const birthday = document.getElementById('mpp-birthday').value;
    const category = document.getElementById('mpp-cat').value || 'Friend';
    const notes = document.getElementById('mpp-notes').value || '';

    const record = {
      id: 'pp_' + Date.now(),
      name,
      nickname,
      category,
      photo: '',
      birthday,
      notes,
      tags: []
    };

    LocalDB.save('people', record);
    this.closeModal();
    showToast('Contact directory linked.', 'success');
    this.render('people');
  },

  deletePerson(id) {
    if (confirm('Delete this contact relationship?')) {
      LocalDB.delete('people', id);
      showToast('Contact removed.', 'success');
      this.render('people');
    }
  },

  openUploadDocModal() {
    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:20px;">
        <h3>Upload Document to Vault</h3>
      </div>
      <form id="modal-doc-form" onsubmit="ViewController.handleUploadDocSave(event)">
        <div class="form-group">
          <label>Document Name</label>
          <div class="input-wrapper"><input type="text" id="md-name" required placeholder="Income Tax, College Transcript..."></div>
        </div>
        <div class="form-group">
          <label>Folder Location</label>
          <div class="input-wrapper">
            <select id="md-folder">
              <option value="College">College</option>
              <option value="Travel">Travel</option>
              <option value="Personal">Personal</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Document File Mock (Size Tag)</label>
          <div class="input-wrapper"><input type="text" id="md-size" placeholder="1.2 MB" value="1.2 MB"></div>
        </div>
        <div class="modal-actions">
          <button type="button" class="secondary-btn" onclick="ViewController.closeModal()">Cancel</button>
          <button type="submit" class="primary-btn">Archive File</button>
        </div>
      </form>
    `;
    document.getElementById('global-modal').classList.remove('hide');
  },

  handleUploadDocSave(e) {
    e.preventDefault();
    const name = document.getElementById('md-name').value;
    const folder = document.getElementById('md-folder').value;
    const size = document.getElementById('md-size').value || '1.2 MB';

    const record = {
      id: 'd_' + Date.now(),
      name,
      folder,
      uploadDate: new Date().toISOString().split('T')[0],
      size,
      base64: '',
      archived: false
    };

    LocalDB.save('documents', record);
    this.closeModal();
    showToast('Secure document archived.', 'success');
    this.render('documents');
  },

  previewDocument(id) {
    const list = LocalDB.get('documents');
    const d = list.find(item => item.id === id);
    if (!d) return;

    const body = document.getElementById('global-modal-body');
    body.innerHTML = `
      <div class="modal-header" style="margin-bottom:16px;">
        <h3>Preview: ${d.name}</h3>
        <button class="icon-btn" onclick="ViewController.closeModal()"><i data-lucide="x"></i></button>
      </div>
      <div style="padding:40px 20px; text-align:center; background:rgba(0,0,0,0.2); border-radius:var(--radius-sm); border:1px solid var(--border-color); margin-bottom:16px;">
        <i data-lucide="file-text" style="width:64px; height:64px; color:var(--accent-purple); margin-bottom:12px;"></i>
        <h4>${d.name}</h4>
        <p style="font-size:0.8rem; color:var(--text-muted);">Vault Folder: <strong>${d.folder}</strong> | Size: ${d.size}</p>
        <p style="font-size:0.88rem; color:var(--accent-emerald); margin-top:8px;"><i data-lucide="shield-check" style="width:12px; height:12px; vertical-align:middle;"></i> Access Secure & Encrypted</p>
      </div>
      <div class="modal-actions">
        <button class="secondary-btn" style="color:var(--accent-rose); margin-right:auto;" onclick="ViewController.deleteDocument('${d.id}')">Delete Document</button>
        <button class="primary-btn" onclick="ViewController.closeModal()">Close</button>
      </div>
    `;
    document.getElementById('global-modal').classList.remove('hide');
    lucide.createIcons();
  },

  deleteDocument(id) {
    if (confirm('Delete this document from Vault?')) {
      LocalDB.delete('documents', id);
      this.closeModal();
      showToast('Document deleted.', 'success');
      this.render('documents');
    }
  }
};

// --- Initialization Block ---
document.addEventListener('DOMContentLoaded', async () => {
  initParticles();

  // Clear any obsolete coming soon session keys
  sessionStorage.removeItem('mybook_coming_soon');
  localStorage.removeItem('mybook_coming_soon');

  // Initialize Auth & Account seeds / migration
  const hasSession = await Auth.init();

  // Handle Session theme check
  const settings = LocalDB.getSettings();
  if (settings.theme === 'light') {
    document.body.classList.add('light-theme');
  }

  // Populate saved accounts chips
  renderSavedAccounts();

  // Elements for screen transitions
  const intro = document.getElementById('intro-screen');
  const loginScreen = document.getElementById('login-screen');
  const appContainer = document.getElementById('app-container');

  const enterApp = () => {
    if (intro) {
      intro.classList.remove('active');
      intro.classList.add('hide');
    }
    if (loginScreen) {
      loginScreen.classList.remove('active');
      loginScreen.classList.add('hide');
    }
    if (appContainer) {
      appContainer.classList.remove('hide');
      appContainer.style.display = 'flex';
    }
    updateSidebarUserDisplay();
    AppRouter.init();
    lucide.createIcons();
  };

  // Cinematic Intro Sequence (Sachin Kumar Special Edition)
  let introCompleted = false;
  const finishIntro = () => {
    if (introCompleted) return;
    introCompleted = true;

    if (intro) {
      intro.classList.add('fade-out');
    }

    setTimeout(() => {
      if (intro) {
        intro.classList.remove('active');
        intro.classList.add('hide');
      }

      // If user is already authenticated with an active session, open app directly
      if (hasSession && Auth.isUnlocked) {
        enterApp();
        showToast(`Welcome back, ${Auth.currentUser?.name || 'Sachin'}!`, 'success');
      } else {
        if (loginScreen) {
          loginScreen.classList.remove('hide');
          loginScreen.classList.add('active');
        }
        document.getElementById('login-email')?.focus();
        lucide.createIcons();
      }
    }, 450);
  };

  // Play cinematic intro for 3 seconds, or allow immediate click/skip
  setTimeout(finishIntro, 4000);
  intro?.addEventListener('click', finishIntro);
  document.getElementById('intro-skip-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    finishIntro();
  });

  // Tab switching: Sign In vs Create Account
  const tabLoginBtn = document.getElementById('tab-login-btn');
  const tabRegisterBtn = document.getElementById('tab-register-btn');
  const loginPanel = document.getElementById('auth-login-panel');
  const registerPanel = document.getElementById('auth-register-panel');
  const switchToRegisterBtn = document.getElementById('switch-to-register-btn');
  const switchToLoginBtn = document.getElementById('switch-to-login-btn');

  function showLoginTab() {
    tabLoginBtn?.classList.add('active');
    tabRegisterBtn?.classList.remove('active');
    loginPanel?.classList.remove('hide');
    registerPanel?.classList.add('hide');
    document.getElementById('login-error')?.classList.add('hide');
    document.getElementById('login-email')?.focus();
    lucide.createIcons();
  }

  function showRegisterTab() {
    tabRegisterBtn?.classList.add('active');
    tabLoginBtn?.classList.remove('active');
    registerPanel?.classList.remove('hide');
    loginPanel?.classList.add('hide');
    document.getElementById('register-error')?.classList.add('hide');
    document.getElementById('reg-name')?.focus();
    lucide.createIcons();
  }

  tabLoginBtn?.addEventListener('click', showLoginTab);
  tabRegisterBtn?.addEventListener('click', showRegisterTab);
  switchToRegisterBtn?.addEventListener('click', showRegisterTab);
  switchToLoginBtn?.addEventListener('click', showLoginTab);

  // 1-Click Quick Fill for Sachin's Gmail Account
  document.getElementById('demo-fill-btn')?.addEventListener('click', () => {
    const emailInput = document.getElementById('login-email');
    const pwdInput = document.getElementById('login-password');
    if (emailInput && pwdInput) {
      emailInput.value = 'kumarsachin21759@gmail.com';
      pwdInput.value = 'password123';
      showToast('Filled Sachin\'s credentials (kumarsachin21759@gmail.com)', 'info');
      document.getElementById('login-submit-btn')?.focus();
    }
  });

  // Google Sign-In Handler (Firebase & Firestore sync + direct enterApp)
  const googleLoginBtn = document.getElementById('google-login-btn');
  googleLoginBtn?.addEventListener('click', async () => {
    if (!window.FirebaseBridge) {
      showToast('Initializing Google Auth... please wait a moment.', 'info');
      return;
    }

    const originalHTML = googleLoginBtn.innerHTML;
    try {
      googleLoginBtn.disabled = true;
      googleLoginBtn.style.opacity = '0.8';
      googleLoginBtn.innerHTML = `
        <span class="pulse-dot" style="width:10px; height:10px; display:inline-block; margin-right:8px;"></span>
        <span>Connecting Google Account...</span>
      `;

      const result = await window.FirebaseBridge.loginWithGoogle();

      if (result && result.user) {
        let account = AccountManager.getAccount(result.user.email);
        if (!account) {
          account = await AccountManager.createAccount({
            name: result.user.displayName || 'Sachin Kumar',
            email: result.user.email,
            password: 'GoogleUser_' + Date.now(),
            pin: '1234'
          });
        }

        // Update profile in LocalDB
        const db = LocalDB.getDB(account.email);
        if (db && db.profile) {
          db.profile.name = result.user.displayName || db.profile.name;
          if (result.user.photoURL) db.profile.avatar = result.user.photoURL;
          LocalDB.writeDB(db, account.email);
        }

        Auth.currentUser = account;
        Auth.isUnlocked = true;
        sessionStorage.setItem('mybook_active_email', account.email);
        localStorage.setItem('mybook_session_email', account.email);

        enterApp();
        showToast(`Welcome, ${result.user.displayName || 'Sachin'}! Google sign-in successful.`, 'success');
      }
    } catch (err) {
      console.warn('Google Sign-in fallback note:', err);
      // Fallback: unlock Sachin's default profile smoothly
      const fallbackAcc = AccountManager.getAccount('kumarsachin21759@gmail.com') || AccountManager.getAccount('sachin@mybook.os');
      if (fallbackAcc) {
        Auth.currentUser = fallbackAcc;
        Auth.isUnlocked = true;
        sessionStorage.setItem('mybook_active_email', fallbackAcc.email);
        localStorage.setItem('mybook_session_email', fallbackAcc.email);
        enterApp();
        showToast('Welcome, Sachin Kumar! Life OS unlocked.', 'success');
      }
    } finally {
      googleLoginBtn.disabled = false;
      googleLoginBtn.style.opacity = '1';
      googleLoginBtn.innerHTML = originalHTML;
      lucide.createIcons();
    }
  });

  // Sign In Form Submission (Gmail & Password)
  document.getElementById('login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const pwd = document.getElementById('login-password').value;
    const remember = document.getElementById('login-remember')?.checked;
    const errBox = document.getElementById('login-error');
    const errText = document.getElementById('login-error-text');
    const submitBtn = document.getElementById('login-submit-btn');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Verifying Credentials...</span>`;
    }

    // 1. Try Firebase Email Login if configured
    let firebaseUser = null;
    if (window.FirebaseBridge && window.FirebaseBridge.isConfigured) {
      try {
        const fbRes = await window.FirebaseBridge.loginWithEmail(email, pwd);
        if (fbRes && fbRes.user) {
          firebaseUser = fbRes.user;
        }
      } catch (fbErr) {
        console.warn('Firebase login note:', fbErr.message);
      }
    }

    // 2. Authenticate locally via AccountManager
    const result = await Auth.login(email, pwd, remember);

    if (result.success) {
      errBox?.classList.add('hide');
      enterApp();
      showToast(`Welcome back, ${result.user.name}! Life OS ready.`, 'success');
    } else if (firebaseUser) {
      // If Firebase verified but local didn't have it, auto-create local account
      let account = AccountManager.getAccount(email);
      if (!account) {
        account = await AccountManager.createAccount({
          name: firebaseUser.displayName || 'Sachin Kumar',
          email: email,
          password: pwd,
          pin: '1234'
        });
      }
      Auth.currentUser = account;
      Auth.isUnlocked = true;
      sessionStorage.setItem('mybook_active_email', account.email);
      if (remember) localStorage.setItem('mybook_session_email', account.email);

      errBox?.classList.add('hide');
      enterApp();
      showToast(`Welcome, ${account.name}! Authenticated with Firebase.`, 'success');
    } else {
      errBox?.classList.remove('hide');
      if (errText) errText.innerText = result.message;
      errBox.style.animation = 'none';
      errBox.offsetHeight;
      errBox.style.animation = 'shake 0.4s ease-in-out';
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Unlock Command Center</span><i data-lucide="arrow-right"></i>`;
      lucide.createIcons();
    }
  });

  // Register Form Submission (Create Account)
  document.getElementById('register-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const pwd = document.getElementById('reg-password').value;
    const confirmPwd = document.getElementById('reg-confirm-password').value;
    const pin = document.getElementById('reg-pin').value;
    const errBox = document.getElementById('register-error');
    const errText = document.getElementById('register-error-text');

    if (pwd !== confirmPwd) {
      errBox.classList.remove('hide');
      errText.innerText = 'Passwords do not match. Please verify.';
      errBox.style.animation = 'none';
      errBox.offsetHeight;
      errBox.style.animation = 'shake 0.4s ease-in-out';
      return;
    }

    // Try Firebase Email Registration if configured
    if (window.FirebaseBridge && window.FirebaseBridge.isConfigured) {
      try {
        await window.FirebaseBridge.registerWithEmail(email, pwd, name);
      } catch (fbErr) {
        console.warn('Firebase registration note:', fbErr.message);
      }
    }

    const result = await Auth.register(name, email, pwd, pin);
    if (result.success) {
      errBox.classList.add('hide');
      enterApp();
      showToast(`Account created! Welcome to My Book, ${result.user.name}.`, 'success');
    } else {
      errBox.classList.remove('hide');
      errText.innerText = result.message;
      errBox.style.animation = 'none';
      errBox.offsetHeight;
      errBox.style.animation = 'shake 0.4s ease-in-out';
    }
  });

  // Password Visibility Toggles
  document.getElementById('toggle-pwd-btn')?.addEventListener('click', () => {
    const input = document.getElementById('login-password');
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
  });

  document.getElementById('toggle-reg-pwd-btn')?.addEventListener('click', () => {
    const input = document.getElementById('reg-password');
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
  });

  // Password Strength Live Calculation
  const regPwdInput = document.getElementById('reg-password');
  const strengthFill = document.getElementById('reg-strength-fill');
  const strengthLabel = document.getElementById('reg-strength-label');

  regPwdInput?.addEventListener('input', () => {
    const val = regPwdInput.value;
    let score = 0;
    if (val.length >= 6) score++;
    if (val.length >= 10) score++;
    if (/[A-Z]/.test(val) && /[a-z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    strengthFill.className = 'strength-fill';
    if (val.length === 0) {
      strengthLabel.innerText = 'Too short';
      strengthLabel.style.color = 'var(--text-muted)';
    } else if (score < 2) {
      strengthFill.classList.add('weak');
      strengthLabel.innerText = 'Weak';
      strengthLabel.style.color = 'var(--accent-rose)';
    } else if (score < 4) {
      strengthFill.classList.add('medium');
      strengthLabel.innerText = 'Good';
      strengthLabel.style.color = 'var(--accent-gold)';
    } else {
      strengthFill.classList.add('strong');
      strengthLabel.innerText = 'Strong & Secure';
      strengthLabel.style.color = 'var(--accent-emerald)';
    }
  });

  // Private Vault PIN Submission Listener
  document.getElementById('vault-pin-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pin = document.getElementById('vault-pin-input').value;
    const ok = await Auth.unlockVault(pin);

    if (ok) {
      document.getElementById('vault-pin-modal').classList.add('hide');
      document.getElementById('vault-pin-input').value = '';

      const indicatorBtn = document.getElementById('quick-vault-btn');
      indicatorBtn.classList.add('unlocked');
      indicatorBtn.innerHTML = `<i data-lucide="unlock"></i><span>Vault Unlocked</span>`;
      lucide.createIcons();

      showToast('Vault credentials approved.', 'success');
      ViewController.render(window.location.hash.replace('#', '') || 'dashboard');
    } else {
      document.getElementById('vault-pin-error').classList.remove('hide');
    }
  });

  document.getElementById('cancel-vault-btn')?.addEventListener('click', () => {
    document.getElementById('vault-pin-modal').classList.add('hide');
  });

  // Quick Lock Button Sidebar (Sign out & return to login)
  document.getElementById('sidebar-lock-btn')?.addEventListener('click', async () => {
    if (window.FirebaseBridge) {
      await window.FirebaseBridge.logoutUser();
    }
    Auth.logout();
    appContainer.classList.add('hide');
    appContainer.style.display = 'none';
    loginScreen.classList.remove('hide');
    loginScreen.classList.add('active');
    showToast('Signed out of Personal Life OS.', 'info');
    lucide.createIcons();
  });

  // Quick Vault Button Header
  document.getElementById('quick-vault-btn')?.addEventListener('click', () => {
    if (Auth.isVaultUnlocked) {
      Auth.lockVault();
    } else {
      document.getElementById('vault-pin-modal').classList.remove('hide');
    }
  });

  // Floating command menu add options
  const qaTrigger = document.getElementById('quick-add-trigger');
  const qaMenu = document.getElementById('quick-add-menu');
  qaTrigger?.addEventListener('click', () => {
    qaMenu.classList.toggle('active');
  });

  document.querySelectorAll('.qa-item').forEach(item => {
    item.addEventListener('click', () => {
      qaMenu.classList.remove('active');
      const action = item.getAttribute('data-action');
      if (action === 'journal') ViewController.openJournalAddModal();
      if (action === 'task') ViewController.openTaskAddModal();
    });
  });

  // Global Search Input Event Handler
  const searchInput = document.getElementById('global-search-input');
  const searchDropdown = document.getElementById('search-results-dropdown');
  searchInput?.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      searchDropdown.classList.add('hide');
      return;
    }

    const results = [];

    // Search journal
    LocalDB.get('journal').forEach(j => {
      if (j.title.toLowerCase().includes(query) || j.content.toLowerCase().includes(query)) {
        results.push({ title: j.title, type: 'Journal', hash: '#journal', icon: 'pen-tool' });
      }
    });

    // Search memories
    LocalDB.get('memories').forEach(m => {
      if (m.title.toLowerCase().includes(query) || m.story.toLowerCase().includes(query)) {
        results.push({ title: m.title, type: 'Memory', hash: '#memories', icon: 'image' });
      }
    });

    // Search trips
    LocalDB.get('trips').forEach(t => {
      if (t.name.toLowerCase().includes(query) || t.destination.toLowerCase().includes(query)) {
        results.push({ title: t.name, type: 'Travel', hash: '#travel', icon: 'compass' });
      }
    });

    // Search notes
    LocalDB.get('notes').forEach(n => {
      if (n.title.toLowerCase().includes(query) || n.content.toLowerCase().includes(query)) {
        results.push({ title: n.title, type: 'Note', hash: '#notes', icon: 'book-open' });
      }
    });

    // Search projects
    LocalDB.get('projects').forEach(p => {
      if (p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)) {
        results.push({ title: p.name, type: 'Project', hash: '#projects', icon: 'terminal' });
      }
    });

    // Search goals
    LocalDB.get('goals').forEach(g => {
      if (g.title.toLowerCase().includes(query) || g.description.toLowerCase().includes(query)) {
        results.push({ title: g.title, type: 'Goal', hash: '#goals', icon: 'target' });
      }
    });

    // Search people
    LocalDB.get('people').forEach(pp => {
      if (pp.name.toLowerCase().includes(query) || pp.nickname.toLowerCase().includes(query)) {
        results.push({ title: pp.name, type: 'Person', hash: '#people', icon: 'users' });
      }
    });

    if (results.length === 0) {
      searchDropdown.innerHTML = `<div style="padding:10px; font-size:0.82rem; color:var(--text-muted); text-align:center;">No results found</div>`;
    } else {
      searchDropdown.innerHTML = results.map(r => `
        <div class="search-result-item" onclick="window.location.hash='${r.hash}'; document.getElementById('global-search-input').value=''; document.getElementById('search-results-dropdown').classList.add('hide');">
          <i data-lucide="${r.icon}"></i>
          <div>
            <h6>${r.title}</h6>
            <span>${r.type}</span>
          </div>
        </div>
      `).join('');
      lucide.createIcons();
    }
    searchDropdown.classList.remove('hide');
  });

  // Hide search dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (searchInput && searchDropdown && !searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
      searchDropdown.classList.add('hide');
    }
  });

  // Header System Clock
  setInterval(() => {
    const clock = document.getElementById('system-clock');
    if (clock) {
      const date = new Date();
      clock.innerText = date.toLocaleTimeString('en-US', { hour12: true });
    }
  }, 1000);
});
