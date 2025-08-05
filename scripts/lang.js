const translations = {
  en: {
    name: "Arnav Shrestha",
    description: "I'm an IT student balancing studies and a junior dev role. Passionate about real-world problem solving through technology and design.",
    project: "Projects",
    projects: "Projects",
    game: "Games",
    games: "Games",
    social: "Social",
    socials: "Social Links"
  },
  np: {
    name: "अर्णव श्रेष्ठ",
    description: "म एक IT विद्यार्थी हुँ र Junior IT developerको रुपमा काम गर्दै छु , म प्रविधि र डिजाइन मार्फत संसारका समस्याहरू समाधान गर्न चाहन्छु ।",
    project: "परियोजना",
    projects: "परियोजनाहरू",
    game: "खेल",
    games: "खेलहरू",
    social: "सामाजिक",
    socials: "सामाजिक लिङ्कहरू"
  },
  jp: {
    name: "アルナブ・シュレスタ",
    description: "私はITの学生で、学業とジュニア開発者の役割を両立させています。技術とデザインを通じて現実の問題解決に情熱を注いでいます。",
    project: "プロジェクト",
    projects: "プロジェクト",
    games: "ゲーム",
    game: "ゲーム",
    social: "ソーシャル",
    socials: "ソーシャルリンク"
  }
};

function setLanguage(lang) {
    document.getElementById('name').innerHTML = translations[lang].name;
    document.getElementById('description').innerText = translations[lang].description;
    document.getElementById('project').innerText = translations[lang].project;
    document.getElementById('projects').innerText = translations[lang].projects;
    document.getElementById('game').innerText = translations[lang].game;
    document.getElementById('games').innerText = translations[lang].games;
    document.getElementById('socials').innerText = translations[lang].socials;
    document.getElementById('social').innerText = translations[lang].social;
}

// Set default language
let userLang = navigator.language || navigator.userLanguage;
userLang = userLang.slice(0, 2);

if(userLang === "ne") {
    setLanguage('np');
} else if(userLang === "ja") {
    setLanguage('jp');
} else {
    setLanguage('en');
}
