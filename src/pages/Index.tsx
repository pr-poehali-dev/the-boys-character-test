import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/6a79f9c0-f0f4-4781-a460-d0d38f816f66/files/c2dec6f6-2638-497a-919c-d2b2b81fc062.jpg';

type CharId = 'homelander' | 'butcher' | 'starlight' | 'hughie' | 'mm' | 'maeve';

interface Character {
  id: CharId;
  name: string;
  role: string;
  faction: 'Seven' | 'Boys';
  tagline: string;
  description: string;
  traits: string[];
  image: string;
}

const CHARACTERS: Character[] = [
  {
    id: 'homelander',
    name: 'Хоумлендер',
    role: 'Лидер «Семёрки»',
    faction: 'Seven',
    tagline: 'Сила без морали',
    description:
      'Самый могущественный супергерой планеты и публичное лицо корпорации Vought. За безупречной улыбкой скрывается нарциссизм, жажда власти и эмоциональная нестабильность.',
    traits: ['Лидерство', 'Контроль', 'Перфекционизм'],
    image: 'https://cdn.poehali.dev/projects/6a79f9c0-f0f4-4781-a460-d0d38f816f66/files/f9a33289-fb37-4479-9e4c-8576359da7df.jpg',
  },
  {
    id: 'butcher',
    name: 'Билли Бутчер',
    role: 'Лидер «Пацанов»',
    faction: 'Boys',
    tagline: 'Цель оправдывает средства',
    description:
      'Жёсткий, циничный и бесстрашный. Ведёт личную войну против супергероев. Идёт до конца ради того, во что верит, даже если ставки слишком высоки.',
    traits: ['Воля', 'Хитрость', 'Решимость'],
    image: 'https://cdn.poehali.dev/projects/6a79f9c0-f0f4-4781-a460-d0d38f816f66/files/a41e9ccc-eb00-43b3-8151-09910b1c8120.jpg',
  },
  {
    id: 'starlight',
    name: 'Старлайт',
    role: 'Член «Семёрки»',
    faction: 'Seven',
    tagline: 'Свет против системы',
    description:
      'Идеалистка с сильными моральными принципами. Попав в коррумпированную систему, не сломалась, а начала бороться за правду изнутри.',
    traits: ['Честность', 'Эмпатия', 'Смелость'],
    image: 'https://cdn.poehali.dev/projects/6a79f9c0-f0f4-4781-a460-d0d38f816f66/files/0fdd3dca-adf9-487e-90b4-fe986d860037.jpg',
  },
  {
    id: 'hughie',
    name: 'Хьюи Кэмпбелл',
    role: 'Член «Пацанов»',
    faction: 'Boys',
    tagline: 'Обычный человек в необычном мире',
    description:
      'Скромный и добрый парень, который оказался втянут в опасную игру. Его сила — в человечности, сомнениях и умении поступать правильно под давлением.',
    traits: ['Доброта', 'Аналитика', 'Лояльность'],
    image: 'https://cdn.poehali.dev/projects/6a79f9c0-f0f4-4781-a460-d0d38f816f66/files/c9fdb98e-df6b-47ed-a1a3-ffdf85422f66.jpg',
  },
  {
    id: 'mm',
    name: 'Эм-Эм',
    role: 'Член «Пацанов»',
    faction: 'Boys',
    tagline: 'Голос разума',
    description:
      'Дисциплинированный и надёжный. Семья для него важнее всего. Сохраняет хладнокровие там, где другие теряют голову, и удерживает команду от безумия.',
    traits: ['Стабильность', 'Порядок', 'Семья'],
    image: 'https://cdn.poehali.dev/projects/6a79f9c0-f0f4-4781-a460-d0d38f816f66/files/6164948d-246a-422c-b319-cef29527c5f8.jpg',
  },
  {
    id: 'maeve',
    name: 'Куин Мэйв',
    role: 'Член «Семёрки»',
    faction: 'Seven',
    tagline: 'Уставший герой',
    description:
      'Когда-то верила в идеалы геройства, но разочаровалась в системе. Несмотря на цинизм, в решающий момент способна на настоящий подвиг.',
    traits: ['Сила', 'Опыт', 'Независимость'],
    image: 'https://cdn.poehali.dev/projects/6a79f9c0-f0f4-4781-a460-d0d38f816f66/files/f864a1c3-f54b-4498-8ba3-641426a2d3c6.jpg',
  },
];

interface Question {
  q: string;
  options: { text: string; weight: CharId }[];
}

const QUESTIONS: Question[] = [
  {
    q: 'Как ты принимаешь важные решения?',
    options: [
      { text: 'Делаю так, как считаю правильным — любой ценой', weight: 'homelander' },
      { text: 'Иду напролом к своей цели', weight: 'butcher' },
      { text: 'Слушаю сердце и совесть', weight: 'starlight' },
      { text: 'Долго взвешиваю все «за» и «против»', weight: 'hughie' },
    ],
  },
  {
    q: 'Что для тебя важнее всего?',
    options: [
      { text: 'Признание и власть', weight: 'homelander' },
      { text: 'Справедливость, даже жестокая', weight: 'butcher' },
      { text: 'Помогать другим', weight: 'starlight' },
      { text: 'Семья и стабильность', weight: 'mm' },
    ],
  },
  {
    q: 'Как ты ведёшь себя в конфликте?',
    options: [
      { text: 'Подавляю силой', weight: 'homelander' },
      { text: 'Использую хитрость и давление', weight: 'butcher' },
      { text: 'Пытаюсь договориться', weight: 'hughie' },
      { text: 'Сохраняю хладнокровие', weight: 'maeve' },
    ],
  },
  {
    q: 'Твоя главная сила?',
    options: [
      { text: 'Уверенность и харизма', weight: 'homelander' },
      { text: 'Несгибаемая воля', weight: 'butcher' },
      { text: 'Доброта и эмпатия', weight: 'starlight' },
      { text: 'Опыт и независимость', weight: 'maeve' },
    ],
  },
  {
    q: 'Как ты относишься к правилам?',
    options: [
      { text: 'Правила — для других', weight: 'homelander' },
      { text: 'Нарушаю, если так нужно', weight: 'butcher' },
      { text: 'Уважаю, но не слепо', weight: 'mm' },
      { text: 'Стараюсь поступать честно', weight: 'starlight' },
    ],
  },
];

const NAV = [
  { id: 'home', label: 'Главная' },
  { id: 'quiz', label: 'Тест' },
  { id: 'characters', label: 'Персонажи' },
  { id: 'about', label: 'О сериале' },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* SVG-фон с атрибутами The Boys */
function TheBoysBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(4,90%,55%)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(38,95%,52%)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Фоновые глоу-пятна */}
      <ellipse cx="15%" cy="30%" rx="300" ry="300" fill="url(#glow1)" />
      <ellipse cx="85%" cy="70%" rx="250" ry="250" fill="url(#glow2)" />
      <ellipse cx="70%" cy="15%" rx="180" ry="180" fill="url(#glow1)" />

      {/* Молнии / вспышки лазерных глаз */}
      <g opacity="0.07" stroke="hsl(4,90%,65%)" strokeWidth="1.5" fill="none">
        <polyline points="80,60 95,90 85,90 100,125" />
        <polyline points="920,200 935,230 925,230 940,265" strokeOpacity="0.6" />
        <polyline points="200,500 215,530 205,530 220,565" strokeOpacity="0.4" />
        <polyline points="750,380 765,410 755,410 770,445" />
      </g>

      {/* Звёзды / блики */}
      {[
        [120, 150], [340, 80], [600, 200], [820, 120], [1050, 300],
        [200, 450], [500, 550], [900, 480], [150, 600], [700, 650],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.5 : 1} fill="hsl(40,80%,80%)" opacity={0.15 + (i % 4) * 0.05} />
      ))}

      {/* Силуэт щита — Vought */}
      <g transform="translate(88%, 8%) scale(0.9)" opacity="0.04" fill="hsl(40,90%,60%)">
        <path d="M60,10 L110,30 L110,70 C110,95 85,115 60,125 C35,115 10,95 10,70 L10,30 Z" />
        <text x="60" y="80" textAnchor="middle" fontSize="28" fontFamily="sans-serif" fill="hsl(40,90%,60%)">V</text>
      </g>

      {/* Силуэт щита — левый нижний */}
      <g transform="translate(2%, 75%) scale(0.7)" opacity="0.035" fill="hsl(4,80%,60%)">
        <path d="M60,10 L110,30 L110,70 C110,95 85,115 60,125 C35,115 10,95 10,70 L10,30 Z" />
      </g>

      {/* Горизонтальные разделители — тонкие линии */}
      <line x1="0" y1="33%" x2="100%" y2="33%" stroke="hsl(220,14%,30%)" strokeWidth="0.5" opacity="0.3" />
      <line x1="0" y1="66%" x2="100%" y2="66%" stroke="hsl(220,14%,30%)" strokeWidth="0.5" opacity="0.3" />

      {/* Прицел — правый */}
      <g transform="translate(93%, 55%)" opacity="0.06" stroke="hsl(4,90%,55%)" strokeWidth="1" fill="none">
        <circle cx="0" cy="0" r="22" />
        <circle cx="0" cy="0" r="8" />
        <line x1="-30" y1="0" x2="-25" y2="0" />
        <line x1="25" y1="0" x2="30" y2="0" />
        <line x1="0" y1="-30" x2="0" y2="-25" />
        <line x1="0" y1="25" x2="0" y2="30" />
      </g>

      {/* Прицел — левый */}
      <g transform="translate(7%, 85%)" opacity="0.05" stroke="hsl(4,90%,55%)" strokeWidth="1" fill="none">
        <circle cx="0" cy="0" r="18" />
        <circle cx="0" cy="0" r="6" />
        <line x1="-24" y1="0" x2="-20" y2="0" />
        <line x1="20" y1="0" x2="24" y2="0" />
        <line x1="0" y1="-24" x2="0" y2="-20" />
        <line x1="0" y1="20" x2="0" y2="24" />
      </g>

      {/* Буква V — Vought watermark */}
      <text x="50%" y="52%" textAnchor="middle" fontSize="420" fontFamily="'Oswald',sans-serif"
        fill="hsl(220,14%,18%)" opacity="0.25" fontWeight="700">V</text>
    </svg>
  );
}

export default function Index() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [result, setResult] = useState<Character | null>(null);

  const started = step > 0 || result !== null;

  const startQuiz = () => {
    setScores({});
    setResult(null);
    setStep(1);
    scrollToId('quiz');
  };

  const answer = (weight: CharId) => {
    const next = { ...scores, [weight]: (scores[weight] || 0) + 1 };
    setScores(next);
    if (step >= QUESTIONS.length) {
      const winnerId = Object.entries(next).sort((a, b) => b[1] - a[1])[0][0] as CharId;
      setResult(CHARACTERS.find((c) => c.id === winnerId)!);
      setStep(0);
    } else {
      setStep(step + 1);
    }
  };

  const reset = () => {
    setScores({});
    setResult(null);
    setStep(0);
    scrollToId('quiz');
  };

  const share = (platform: 'tg' | 'vk') => {
    if (!result) return;
    const text = `Я прошёл тест «Кто ты из The Boys» и я — ${result.name}! ${result.tagline}. Проверь себя:`;
    const url = window.location.href;
    const links = {
      tg: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      vk: `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
    };
    window.open(links[platform], '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollToId('home')} className="flex items-center gap-2 group">
            <Icon name="Zap" className="text-primary group-hover:scale-110 transition-transform" size={22} />
            <span className="font-display text-lg tracking-widest">THE BOYS / ТЕСТ</span>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollToId(n.id)}
                className="font-display text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={startQuiz} className="font-display tracking-widest text-xs">
            ПРОЙТИ ТЕСТ
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{clipPath:'polygon(0 0,100% 0,100% 92%,0 100%)'}}>
        <TheBoysBg />
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="The Boys" className="w-full h-full object-cover object-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        <div className="container relative z-10 pt-20">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 border border-primary/50 px-3 py-1 mb-6 bg-primary/5">
              <span className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse" />
              <span className="font-display text-xs tracking-[0.3em] text-primary">ПСИХОЛОГИЧЕСКИЙ ТЕСТ</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6 font-display uppercase tracking-wide">
              Кто ты <br />
              из{' '}
              <span className="text-primary" style={{textShadow:'0 0 30px hsl(4 90% 55% / 0.5)'}}>
                The Boys
              </span>
              ?
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-lg mb-10">
              Пять вопросов — и ты узнаешь, кто ты на самом деле: герой «Семёрки» или боец «Пацанов».
              Без фильтров. Без масок.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={startQuiz} size="lg" className="font-display tracking-widest h-14 px-8 text-base">
                <Icon name="Play" size={18} className="mr-2" />
                НАЧАТЬ ТЕСТ
              </Button>
              <Button
                onClick={() => scrollToId('characters')}
                variant="outline"
                size="lg"
                className="font-display tracking-widest h-14 px-8 text-base border-border hover:border-primary"
              >
                ВСЕ ПЕРСОНАЖИ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* QUIZ */}
      <section id="quiz" className="py-24 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
        <div className="container max-w-3xl relative z-10">
          <SectionLabel index="01" title="Тест" />

          {/* Result */}
          {result && (
            <div className="animate-scale-in">
              <div className="border border-border bg-card relative overflow-hidden">
                <div className="absolute top-0 right-0 h-64 w-64 bg-primary/10 blur-3xl pointer-events-none" />
                <div className="grid md:grid-cols-[280px_1fr]">
                  <div className="relative overflow-hidden md:min-h-[420px]">
                    <img
                      src={result.image}
                      alt={result.name}
                      className="w-full h-64 md:h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/30 md:bg-gradient-to-t md:from-card/60 md:to-transparent" />
                    <div className="absolute bottom-3 left-3 md:hidden">
                      <span className="font-display text-xs tracking-widest border border-primary/50 text-primary px-2 py-1 bg-background/80">
                        {result.faction === 'Seven' ? 'СЕМЁРКА' : 'ПАЦАНЫ'}
                      </span>
                    </div>
                  </div>
                  <div className="p-7 md:p-10 relative z-10">
                    <div className="hidden md:block mb-4">
                      <span className="font-display text-xs tracking-widest border border-primary/50 text-primary px-2 py-1">
                        {result.faction === 'Seven' ? 'СЕМЁРКА' : 'ПАЦАНЫ'}
                      </span>
                    </div>
                    <p className="font-display text-sm tracking-[0.3em] text-muted-foreground mb-1">ТВОЙ ПЕРСОНАЖ</p>
                    <h3
                      className="text-4xl md:text-5xl text-primary mb-2 font-display uppercase tracking-wide"
                      style={{textShadow:'0 0 24px hsl(4 90% 55% / 0.4)'}}
                    >
                      {result.name}
                    </h3>
                    <p className="font-display tracking-widest text-sm text-foreground/70 mb-1">{result.role}</p>
                    <p className="font-body text-accent mb-5">«{result.tagline}»</p>
                    <p className="font-body text-foreground/80 leading-relaxed mb-7 text-sm">{result.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {result.traits.map((t) => (
                        <span key={t} className="font-display text-xs tracking-widest border border-primary/40 text-primary px-3 py-1.5">
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="font-display text-xs tracking-[0.3em] text-muted-foreground mb-3">ПОДЕЛИТЬСЯ</p>
                    <div className="flex flex-wrap gap-3">
                      <Button onClick={() => share('tg')} className="font-display tracking-widest">
                        <Icon name="Send" size={16} className="mr-2" />
                        TELEGRAM
                      </Button>
                      <Button onClick={() => share('vk')} variant="secondary" className="font-display tracking-widest">
                        <Icon name="Share2" size={16} className="mr-2" />
                        ВКОНТАКТЕ
                      </Button>
                      <Button onClick={reset} variant="outline" className="font-display tracking-widest border-border">
                        <Icon name="RotateCcw" size={16} className="mr-2" />
                        ЗАНОВО
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Question */}
          {started && step > 0 && !result && (
            <div className="animate-fade-in" key={step}>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display tracking-widest text-muted-foreground text-sm">
                  ВОПРОС {step} / {QUESTIONS.length}
                </span>
                <span className="font-display tracking-widest text-primary text-sm">
                  {Math.round(((step - 1) / QUESTIONS.length) * 100)}%
                </span>
              </div>
              <div className="h-1 w-full bg-muted mb-10 relative overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${((step - 1) / QUESTIONS.length) * 100}%` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              </div>
              <h3 className="text-2xl md:text-4xl mb-10 font-display uppercase tracking-wide">{QUESTIONS[step - 1].q}</h3>
              <div className="grid gap-3">
                {QUESTIONS[step - 1].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => answer(opt.weight)}
                    className="group text-left border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all p-5 flex items-center gap-4"
                  >
                    <span className="font-display text-primary text-xl w-6 shrink-0">{String.fromCharCode(65 + i)}</span>
                    <span className="font-body text-base md:text-lg flex-1">{opt.text}</span>
                    <Icon
                      name="ArrowRight"
                      size={18}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Idle */}
          {!started && (
            <div className="border border-dashed border-border bg-card/50 p-10 md:p-16 text-center animate-fade-in">
              <Icon name="HelpCircle" size={40} className="text-primary mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl mb-3 font-display uppercase tracking-wide">Готов узнать правду о себе?</h3>
              <p className="font-body text-muted-foreground max-w-md mx-auto mb-8">
                Всего {QUESTIONS.length} вопросов отделяют тебя от ответа, каким персонажем The Boys ты являешься.
              </p>
              <Button onClick={startQuiz} size="lg" className="font-display tracking-widest h-14 px-8">
                НАЧАТЬ ТЕСТ
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CHARACTERS */}
      <section id="characters" className="py-24 border-b border-border relative overflow-hidden">
        <TheBoysBg />
        <div className="container relative z-10">
          <SectionLabel index="02" title="Персонажи" />
          <p className="font-body text-muted-foreground max-w-xl mb-12">
            Досье на ключевых героев сериала — две стороны конфликта между супергероями «Семёрки» и охотниками «Пацанами».
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CHARACTERS.map((c) => (
              <article
                key={c.id}
                className="group border border-border bg-card hover:border-primary transition-all relative overflow-hidden flex flex-col"
              >
                {/* Портрет */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <Icon
                      name={c.faction === 'Seven' ? 'Shield' : 'Crosshair'}
                      size={18}
                      className={c.faction === 'Seven' ? 'text-primary' : 'text-muted-foreground'}
                    />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span
                      className={`font-display text-xs tracking-widest px-2 py-1 border bg-background/80 ${
                        c.faction === 'Seven'
                          ? 'border-primary/50 text-primary'
                          : 'border-border text-muted-foreground'
                      }`}
                    >
                      {c.faction === 'Seven' ? 'СЕМЁРКА' : 'ПАЦАНЫ'}
                    </span>
                  </div>
                </div>

                {/* Контент */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="absolute -top-10 -right-10 h-24 w-24 bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all pointer-events-none" />
                  <h3 className="text-2xl mb-1 font-display uppercase tracking-wide">{c.name}</h3>
                  <p className="font-display text-xs tracking-widest text-primary mb-4">{c.role}</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{c.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.traits.map((t) => (
                      <span key={t} className="font-body text-xs text-muted-foreground border border-border px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="container max-w-4xl relative z-10">
          <SectionLabel index="03" title="О сериале" />
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <p className="font-body text-lg text-foreground/90 leading-relaxed">
              «The Boys» — мрачный сатирический сериал о мире, где супергерои реальны, но далеки от идеала.
              Корпорация Vought превратила их в медиа-звёзд и товар, скрывая злоупотребления властью.
            </p>
            <p className="font-body text-lg text-foreground/90 leading-relaxed">
              Группа обычных людей — «Пацаны» — объявляет войну зарвавшимся «супергероям». Это история о власти,
              коррупции, славе и о том, что скрывается за безупречным публичным образом.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
            {[
              { icon: 'Tv', value: 'Сериал', label: 'Жанр' },
              { icon: 'Flame', value: '18+', label: 'Рейтинг' },
              { icon: 'Users', value: '2 стороны', label: 'Конфликт' },
              { icon: 'Skull', value: 'Сатира', label: 'Тон' },
            ].map((s) => (
              <div key={s.label} className="border border-border bg-card p-6 text-center hover:border-primary transition-colors">
                <Icon name={s.icon} size={24} className="text-primary mx-auto mb-3" />
                <p className="font-display text-xl">{s.value}</p>
                <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={18} />
            <span className="font-display text-sm tracking-widest">THE BOYS / ТЕСТ</span>
          </div>
          <p className="font-body text-xs text-muted-foreground text-center">
            Фан-проект. Все права на сериал принадлежат правообладателям.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="font-display text-primary text-sm tracking-widest">{index}</span>
      <span className="h-px w-12 bg-primary" />
      <h2 className="text-3xl md:text-4xl font-display uppercase tracking-wide">{title}</h2>
    </div>
  );
}
