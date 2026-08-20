const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
    const fullPath = path.resolve(filePath);
    if (!fs.existsSync(fullPath)) return;
    let content = fs.readFileSync(fullPath, 'utf8');
    for (const [search, replace] of replacements) {
        content = content.split(search).join(replace);
    }
    fs.writeFileSync(fullPath, content);
}

// 1. App.tsx (Sections)
replaceInFile('App.tsx', [
    ['<section id="home" className="w-full bg-indigo-950">', '<section id="home" className="w-full bg-blue-50">'],
    ['<section id="skills" className="py-24 w-full bg-violet-900 reveal">', '<section id="skills" className="py-24 w-full bg-violet-50 reveal">'],
    ['<section id="projects" className="py-24 w-full bg-indigo-50">', '<section id="projects" className="py-24 w-full bg-amber-50">'],
    ['<section id="experience" className="py-24 w-full bg-indigo-900 reveal">', '<section id="experience" className="py-24 w-full bg-emerald-50 reveal">'],
    ['text-indigo-600', 'text-amber-600'] // Projects section title in App.tsx
]);

// 2. Hero.tsx (Light Blue)
replaceInFile('components/Hero.tsx', [
    ['text-white', 'text-slate-900'],
    ['text-indigo-400', 'text-blue-600'],
    ['text-indigo-200', 'text-slate-600'],
    ['bg-indigo-900', 'bg-white'],
    ['text-indigo-300', 'text-blue-600'],
    ['border-indigo-700', 'border-blue-200'],
    ['!bg-indigo-600 !text-white !border-indigo-500 hover:!bg-indigo-500', '!bg-blue-600 !text-white !border-blue-600 hover:!bg-blue-700'],
    ['bg-indigo-400 animate-pulse', 'bg-blue-500 animate-pulse'],
    ['bg-indigo-500/10', 'bg-blue-400/20'],
    ['bg-violet-500/10', 'bg-violet-400/20']
]);

// 3. About.tsx (Clean)
replaceInFile('components/About.tsx', [
    ['text-indigo-600', 'text-blue-600'],
    ['decoration-indigo-400', 'decoration-blue-400']
]);

// 4. SkillsSection.tsx (Light Purple)
replaceInFile('components/SkillsSection.tsx', [
    ['bg-violet-950 border border-violet-800', 'bg-white border border-violet-100'],
    ['text-white', 'text-slate-900'],
    ['text-violet-200', 'text-slate-600'],
    ['text-violet-300', 'text-violet-600'],
    ['bg-violet-800 flex items-center justify-center text-slate-900 border border-violet-700', 'bg-violet-100 flex items-center justify-center text-violet-600 border border-violet-200'],
    ['bg-violet-400 mt-2', 'bg-violet-500 mt-2']
]);

// 5. Projects.tsx (Light Yellow/Amber)
replaceInFile('components/Projects.tsx', [
    ['text-indigo-600', 'text-amber-600'],
    ['bg-indigo-100', 'bg-amber-100'],
    ['border-indigo-200', 'border-amber-200'],
    ['hover:bg-indigo-600', 'hover:bg-amber-600'],
    ['border-indigo-400/50', 'border-amber-400/50'],
    ['hover:text-indigo-400', 'hover:text-amber-600'],
    ['border-indigo-100', 'border-amber-100'],
    ['bg-blue-600', 'bg-amber-600'],
    ['text-blue-600', 'text-amber-600']
]);

// 6. ExperienceSection.tsx (Light Green)
replaceInFile('components/ExperienceSection.tsx', [
    ['bg-indigo-950 border border-indigo-800', 'bg-white border border-emerald-100 shadow-sm'],
    ['text-white', 'text-slate-900'],
    ['text-indigo-400', 'text-emerald-600'],
    ['text-indigo-200', 'text-slate-600'],
    ['bg-indigo-500', 'bg-emerald-500'],
    ['text-indigo-300', 'text-slate-400'],
    ['border-indigo-800', 'border-emerald-100'],
    ['hover:bg-indigo-600', 'hover:bg-emerald-600'],
    ['bg-indigo-950', 'bg-emerald-50'],
    ['border-indigo-700', 'border-emerald-200'],
    ['text-violet-600', 'text-teal-600'],
    ['bg-violet-50', 'bg-teal-50'],
    ['border-violet-100', 'border-teal-200'],
    ['bg-blue-600', 'bg-emerald-600'],
    ['text-blue-600', 'text-emerald-600']
]);

// 7. EducationSection.tsx (Light Blue/Clean)
replaceInFile('components/EducationSection.tsx', [
    ['text-indigo-600', 'text-blue-600'],
    ['bg-indigo-100', 'bg-blue-100'],
    ['border-indigo-200', 'border-blue-200']
]);

// 8. Navbar.tsx (Light Blue)
replaceInFile('components/Navbar.tsx', [
    ['text-indigo-600', 'text-blue-600'],
    ['bg-indigo-600', 'bg-blue-600'],
    ['border-indigo-400/30', 'border-blue-400/30']
]);

// 9. Footer.tsx (Light Blue/Gray)
replaceInFile('components/Footer.tsx', [
    ['bg-indigo-950', 'bg-slate-50'],
    ['text-white', 'text-slate-900'],
    ['text-indigo-400', 'text-blue-600'],
    ['hover:text-indigo-300', 'hover:text-blue-700'],
    ['text-indigo-200', 'text-slate-600'],
    ['text-indigo-300', 'text-slate-500'],
    ['!bg-indigo-800', '!bg-white'],
    ['!border-indigo-600', '!border-blue-200'],
    ['!text-indigo-200', '!text-blue-600'],
    ['hover:!bg-indigo-700', 'hover:!bg-blue-50'],
    ['hover:!border-indigo-500', 'hover:!border-blue-300 hover:!text-blue-700'],
    ['border-t border-white/20', 'border-t border-slate-200'],
    ['border-t border-white/50', 'border-t border-slate-200'],
    ['border-slate-700', 'border-slate-300'],
    ['bg-slate-600', 'bg-slate-300']
]);

console.log('Colors updated.');
