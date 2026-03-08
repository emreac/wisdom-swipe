export interface Quote {
  id: number;
  text: string;
  philosopher: string;
  school: string;
  era: string;
  emoji: string;
}

export const philosophers = [
  { name: "Marcus Aurelius", school: "Stoicism", emoji: "🏛️" },
  { name: "Friedrich Nietzsche", school: "Existentialism", emoji: "⚡" },
  { name: "Socrates", school: "Classical", emoji: "🫒" },
  { name: "Lao Tzu", school: "Taoism", emoji: "☯️" },
  { name: "Epictetus", school: "Stoicism", emoji: "⛓️" },
  { name: "Jean-Paul Sartre", school: "Existentialism", emoji: "🚬" },
  { name: "Confucius", school: "Confucianism", emoji: "📜" },
  { name: "Seneca", school: "Stoicism", emoji: "🔥" },
  { name: "Plato", school: "Platonism", emoji: "💎" },
  { name: "Albert Camus", school: "Absurdism", emoji: "☀️" },
  { name: "Aristotle", school: "Classical", emoji: "📐" },
  { name: "Søren Kierkegaard", school: "Existentialism", emoji: "🌊" },
  { name: "Zhuangzi", school: "Taoism", emoji: "🦋" },
  { name: "Simone de Beauvoir", school: "Existentialism", emoji: "🌹" },
];

export const allQuotes: Quote[] = [
  // Stoicism
  { id: 1, text: "You have power over your mind — not outside events. Realize this, and you will find strength.", philosopher: "Marcus Aurelius", school: "Stoicism", era: "Ancient Rome", emoji: "🏛️" },
  { id: 5, text: "It's not what happens to you, but how you react to it that matters.", philosopher: "Epictetus", school: "Stoicism", era: "Ancient Rome", emoji: "⛓️" },
  { id: 8, text: "We suffer more often in imagination than in reality.", philosopher: "Seneca", school: "Stoicism", era: "Ancient Rome", emoji: "🔥" },
  { id: 11, text: "The happiness of your life depends upon the quality of your thoughts.", philosopher: "Marcus Aurelius", school: "Stoicism", era: "Ancient Rome", emoji: "🏛️" },
  { id: 15, text: "First say to yourself what you would be; and then do what you have to do.", philosopher: "Epictetus", school: "Stoicism", era: "Ancient Rome", emoji: "⛓️" },
  { id: 17, text: "Luck is what happens when preparation meets opportunity.", philosopher: "Seneca", school: "Stoicism", era: "Ancient Rome", emoji: "🔥" },
  { id: 20, text: "Waste no more time arguing about what a good man should be. Be one.", philosopher: "Marcus Aurelius", school: "Stoicism", era: "Ancient Rome", emoji: "🏛️" },
  { id: 22, text: "The soul becomes dyed with the color of its thoughts.", philosopher: "Marcus Aurelius", school: "Stoicism", era: "Ancient Rome", emoji: "🏛️" },
  { id: 26, text: "No person is free who is not master of themselves.", philosopher: "Epictetus", school: "Stoicism", era: "Ancient Rome", emoji: "⛓️" },
  { id: 27, text: "Begin at once to live, and count each separate day as a separate life.", philosopher: "Seneca", school: "Stoicism", era: "Ancient Rome", emoji: "🔥" },
  { id: 28, text: "The best revenge is not to be like your enemy.", philosopher: "Marcus Aurelius", school: "Stoicism", era: "Ancient Rome", emoji: "🏛️" },
  { id: 29, text: "If it is not right, do not do it; if it is not true, do not say it.", philosopher: "Marcus Aurelius", school: "Stoicism", era: "Ancient Rome", emoji: "🏛️" },
  { id: 30, text: "Difficulties strengthen the mind, as labor does the body.", philosopher: "Seneca", school: "Stoicism", era: "Ancient Rome", emoji: "🔥" },
  { id: 31, text: "Man is not worried by real problems so much as by his imagined anxieties about real problems.", philosopher: "Epictetus", school: "Stoicism", era: "Ancient Rome", emoji: "⛓️" },

  // Existentialism
  { id: 2, text: "He who has a why to live can bear almost any how.", philosopher: "Friedrich Nietzsche", school: "Existentialism", era: "19th Century", emoji: "⚡" },
  { id: 6, text: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.", philosopher: "Jean-Paul Sartre", school: "Existentialism", era: "20th Century", emoji: "🚬" },
  { id: 12, text: "Without music, life would be a mistake.", philosopher: "Friedrich Nietzsche", school: "Existentialism", era: "19th Century", emoji: "⚡" },
  { id: 21, text: "Existence precedes essence.", philosopher: "Jean-Paul Sartre", school: "Existentialism", era: "20th Century", emoji: "🚬" },
  { id: 23, text: "That which does not kill us makes us stronger.", philosopher: "Friedrich Nietzsche", school: "Existentialism", era: "19th Century", emoji: "⚡" },
  { id: 32, text: "Life can only be understood backwards; but it must be lived forwards.", philosopher: "Søren Kierkegaard", school: "Existentialism", era: "19th Century", emoji: "🌊" },
  { id: 33, text: "Anxiety is the dizziness of freedom.", philosopher: "Søren Kierkegaard", school: "Existentialism", era: "19th Century", emoji: "🌊" },
  { id: 34, text: "One is not born, but rather becomes, a woman.", philosopher: "Simone de Beauvoir", school: "Existentialism", era: "20th Century", emoji: "🌹" },
  { id: 35, text: "Freedom is what we do with what is done to us.", philosopher: "Jean-Paul Sartre", school: "Existentialism", era: "20th Century", emoji: "🚬" },
  { id: 36, text: "To live is to suffer, to survive is to find some meaning in the suffering.", philosopher: "Friedrich Nietzsche", school: "Existentialism", era: "19th Century", emoji: "⚡" },
  { id: 37, text: "The most common form of despair is not being who you are.", philosopher: "Søren Kierkegaard", school: "Existentialism", era: "19th Century", emoji: "🌊" },
  { id: 38, text: "Change your life today. Don't gamble on the future, act now, without delay.", philosopher: "Simone de Beauvoir", school: "Existentialism", era: "20th Century", emoji: "🌹" },

  // Classical
  { id: 3, text: "The unexamined life is not worth living.", philosopher: "Socrates", school: "Classical", era: "Ancient Greece", emoji: "🫒" },
  { id: 13, text: "I know that I know nothing.", philosopher: "Socrates", school: "Classical", era: "Ancient Greece", emoji: "🫒" },
  { id: 19, text: "The only true wisdom is in knowing you know nothing.", philosopher: "Socrates", school: "Classical", era: "Ancient Greece", emoji: "🫒" },
  { id: 39, text: "Knowing yourself is the beginning of all wisdom.", philosopher: "Aristotle", school: "Classical", era: "Ancient Greece", emoji: "📐" },
  { id: 40, text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", philosopher: "Aristotle", school: "Classical", era: "Ancient Greece", emoji: "📐" },
  { id: 41, text: "The educated differ from the uneducated as much as the living from the dead.", philosopher: "Aristotle", school: "Classical", era: "Ancient Greece", emoji: "📐" },
  { id: 42, text: "Education is the kindling of a flame, not the filling of a vessel.", philosopher: "Socrates", school: "Classical", era: "Ancient Greece", emoji: "🫒" },
  { id: 43, text: "Happiness depends upon ourselves.", philosopher: "Aristotle", school: "Classical", era: "Ancient Greece", emoji: "📐" },

  // Taoism
  { id: 4, text: "The journey of a thousand miles begins with a single step.", philosopher: "Lao Tzu", school: "Taoism", era: "Ancient China", emoji: "☯️" },
  { id: 14, text: "Nature does not hurry, yet everything is accomplished.", philosopher: "Lao Tzu", school: "Taoism", era: "Ancient China", emoji: "☯️" },
  { id: 25, text: "The way to do is to be.", philosopher: "Lao Tzu", school: "Taoism", era: "Ancient China", emoji: "☯️" },
  { id: 44, text: "When I let go of what I am, I become what I might be.", philosopher: "Lao Tzu", school: "Taoism", era: "Ancient China", emoji: "☯️" },
  { id: 45, text: "Happiness is the absence of the striving for happiness.", philosopher: "Zhuangzi", school: "Taoism", era: "Ancient China", emoji: "🦋" },
  { id: 46, text: "Flow with whatever may happen and let your mind be free.", philosopher: "Zhuangzi", school: "Taoism", era: "Ancient China", emoji: "🦋" },
  { id: 47, text: "The wise man knows that it is better to sit on the banks of a remote mountain stream than to be emperor of the whole world.", philosopher: "Zhuangzi", school: "Taoism", era: "Ancient China", emoji: "🦋" },
  { id: 48, text: "Silence is a source of great strength.", philosopher: "Lao Tzu", school: "Taoism", era: "Ancient China", emoji: "☯️" },

  // Confucianism
  { id: 7, text: "It does not matter how slowly you go as long as you do not stop.", philosopher: "Confucius", school: "Confucianism", era: "Ancient China", emoji: "📜" },
  { id: 18, text: "Real knowledge is to know the extent of one's ignorance.", philosopher: "Confucius", school: "Confucianism", era: "Ancient China", emoji: "📜" },
  { id: 49, text: "Before you embark on a journey of revenge, dig two graves.", philosopher: "Confucius", school: "Confucianism", era: "Ancient China", emoji: "📜" },
  { id: 50, text: "The man who moves a mountain begins by carrying away small stones.", philosopher: "Confucius", school: "Confucianism", era: "Ancient China", emoji: "📜" },
  { id: 51, text: "Everything has beauty, but not everyone sees it.", philosopher: "Confucius", school: "Confucianism", era: "Ancient China", emoji: "📜" },

  // Platonism
  { id: 9, text: "Be kind, for everyone you meet is fighting a hard battle.", philosopher: "Plato", school: "Platonism", era: "Ancient Greece", emoji: "💎" },
  { id: 24, text: "When you wish to be well, look for someone who knows how to think.", philosopher: "Plato", school: "Platonism", era: "Ancient Greece", emoji: "💎" },
  { id: 52, text: "The measure of a man is what he does with power.", philosopher: "Plato", school: "Platonism", era: "Ancient Greece", emoji: "💎" },
  { id: 53, text: "Ignorance, the root and stem of all evil.", philosopher: "Plato", school: "Platonism", era: "Ancient Greece", emoji: "💎" },
  { id: 54, text: "Opinion is the medium between knowledge and ignorance.", philosopher: "Plato", school: "Platonism", era: "Ancient Greece", emoji: "💎" },

  // Absurdism
  { id: 10, text: "In the midst of winter, I found there was, within me, an invincible summer.", philosopher: "Albert Camus", school: "Absurdism", era: "20th Century", emoji: "☀️" },
  { id: 16, text: "One must imagine Sisyphus happy.", philosopher: "Albert Camus", school: "Absurdism", era: "20th Century", emoji: "☀️" },
  { id: 55, text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.", philosopher: "Albert Camus", school: "Absurdism", era: "20th Century", emoji: "☀️" },
  { id: 56, text: "Should I kill myself, or have a cup of coffee?", philosopher: "Albert Camus", school: "Absurdism", era: "20th Century", emoji: "☀️" },
  { id: 57, text: "Live to the point of tears.", philosopher: "Albert Camus", school: "Absurdism", era: "20th Century", emoji: "☀️" },
  { id: 58, text: "I rebel; therefore I exist.", philosopher: "Albert Camus", school: "Absurdism", era: "20th Century", emoji: "☀️" },
];

// Keep legacy export for compatibility
export const quotes = allQuotes;

export const schoolDescriptions: Record<string, string> = {
  "Stoicism": "Focus on virtue, reason, and inner peace. Accept what you cannot change.",
  "Existentialism": "Embrace freedom, authenticity, and creating your own meaning.",
  "Classical": "Pursue truth through questioning and rational inquiry.",
  "Taoism": "Flow with nature, embrace simplicity and harmony.",
  "Confucianism": "Cultivate virtue through discipline, respect, and continuous learning.",
  "Platonism": "Seek ideal forms, justice, and the higher truths of reality.",
  "Absurdism": "Find joy despite life's inherent meaninglessness. Rebel and create.",
};

export const schoolDetails: Record<string, { description: string; keyIdeas: string[]; keyFigures: string[]; icon: string }> = {
  "Stoicism": {
    description: "Stoicism is a school of Hellenistic philosophy founded in Athens by Zeno of Citium in the early 3rd century BC. It teaches the development of self-control and fortitude as a means of overcoming destructive emotions. The philosophy holds that becoming a clear and unbiased thinker allows one to understand the universal reason (logos). Stoics believe that virtue is the highest form of happiness and that our judgments — not external events — cause our suffering.",
    keyIdeas: ["Virtue is the sole good", "Control what you can, accept what you can't", "Live according to nature and reason", "Negative visualization", "The dichotomy of control"],
    keyFigures: ["Marcus Aurelius", "Seneca", "Epictetus", "Zeno of Citium"],
    icon: "🏛️",
  },
  "Existentialism": {
    description: "Existentialism is a philosophical movement that emphasizes individual existence, freedom, and choice. It holds that humans define their own meaning in life and try to make rational decisions despite existing in an irrational universe. Existentialists believe that people are not defined by their nature or essence but by their actions and choices. It confronts anxiety, death, and the absurd as fundamental parts of human existence.",
    keyIdeas: ["Existence precedes essence", "Radical freedom and responsibility", "Authenticity over conformity", "Confronting anxiety and absurdity", "Subjective experience matters most"],
    keyFigures: ["Jean-Paul Sartre", "Friedrich Nietzsche", "Søren Kierkegaard", "Simone de Beauvoir"],
    icon: "⚡",
  },
  "Classical": {
    description: "Classical Greek philosophy laid the foundation for Western intellectual tradition. Centered on the Socratic method of questioning, it pursues truth, virtue, and knowledge through rational inquiry. Socrates taught that wisdom begins with acknowledging ignorance, while Aristotle expanded philosophy into logic, ethics, politics, and natural science. This tradition emphasizes reason as the path to understanding reality.",
    keyIdeas: ["Know thyself", "The Socratic method of questioning", "Virtue ethics", "The golden mean", "Logic and rational inquiry"],
    keyFigures: ["Socrates", "Aristotle", "Plato"],
    icon: "🫒",
  },
  "Taoism": {
    description: "Taoism (Daoism) is an ancient Chinese philosophy centered on living in harmony with the Tao — the fundamental, nameless force that flows through all things. It emphasizes simplicity, spontaneity, and wu wei (effortless action). Rather than forcing outcomes, Taoists cultivate a deep awareness of nature's patterns and align themselves with the natural flow of the universe.",
    keyIdeas: ["Wu wei — effortless action", "Living in harmony with nature", "Simplicity and humility", "The Tao that can be told is not the eternal Tao", "Yin and yang balance"],
    keyFigures: ["Lao Tzu", "Zhuangzi", "Liezi"],
    icon: "☯️",
  },
  "Confucianism": {
    description: "Confucianism is a system of philosophical and ethical teachings founded by Confucius. It focuses on personal and governmental morality, correctness of social relationships, justice, kindness, and sincerity. Confucianism emphasizes the importance of education, family loyalty, respect for elders, and self-cultivation as the foundation of a harmonious society.",
    keyIdeas: ["Ren — benevolence and humaneness", "Li — ritual propriety", "Filial piety and respect", "Self-cultivation through education", "The Rectification of Names"],
    keyFigures: ["Confucius", "Mencius", "Xunzi"],
    icon: "📜",
  },
  "Platonism": {
    description: "Platonism is the philosophy of Plato and philosophical systems closely derived from it. At its core is the Theory of Forms — the idea that non-physical abstract forms (or ideas) represent the most accurate reality. The material world is a shadow or imitation of this higher realm. Plato's philosophy encompasses metaphysics, epistemology, ethics, and political theory, always pointing toward the pursuit of the Good.",
    keyIdeas: ["Theory of Forms", "The Allegory of the Cave", "The philosopher-king", "Knowledge as recollection", "The Good as the highest Form"],
    keyFigures: ["Plato", "Plotinus", "Proclus"],
    icon: "💎",
  },
  "Absurdism": {
    description: "Absurdism is a philosophical perspective that holds the universe is fundamentally irrational and meaningless — yet humans perpetually seek meaning. This tension between our desire for meaning and the universe's silence is 'the Absurd.' Rather than despair or denial, absurdists advocate for embracing this contradiction fully, living passionately, and revolting against meaninglessness through creation and defiance.",
    keyIdeas: ["The Absurd — the conflict between human need for meaning and the silent universe", "Revolt, not resignation", "Philosophical suicide vs. physical suicide", "Living without appeal to higher meaning", "Creation as rebellion"],
    keyFigures: ["Albert Camus", "Franz Kafka", "Samuel Beckett"],
    icon: "☀️",
  },
};
