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
];

export const quotes: Quote[] = [
  { id: 1, text: "You have power over your mind — not outside events. Realize this, and you will find strength.", philosopher: "Marcus Aurelius", school: "Stoicism", era: "Ancient Rome", emoji: "🏛️" },
  { id: 2, text: "He who has a why to live can bear almost any how.", philosopher: "Friedrich Nietzsche", school: "Existentialism", era: "19th Century", emoji: "⚡" },
  { id: 3, text: "The unexamined life is not worth living.", philosopher: "Socrates", school: "Classical", era: "Ancient Greece", emoji: "🫒" },
  { id: 4, text: "The journey of a thousand miles begins with a single step.", philosopher: "Lao Tzu", school: "Taoism", era: "Ancient China", emoji: "☯️" },
  { id: 5, text: "It's not what happens to you, but how you react to it that matters.", philosopher: "Epictetus", school: "Stoicism", era: "Ancient Rome", emoji: "⛓️" },
  { id: 6, text: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.", philosopher: "Jean-Paul Sartre", school: "Existentialism", era: "20th Century", emoji: "🚬" },
  { id: 7, text: "It does not matter how slowly you go as long as you do not stop.", philosopher: "Confucius", school: "Confucianism", era: "Ancient China", emoji: "📜" },
  { id: 8, text: "We suffer more often in imagination than in reality.", philosopher: "Seneca", school: "Stoicism", era: "Ancient Rome", emoji: "🔥" },
  { id: 9, text: "Be kind, for everyone you meet is fighting a hard battle.", philosopher: "Plato", school: "Platonism", era: "Ancient Greece", emoji: "💎" },
  { id: 10, text: "In the midst of winter, I found there was, within me, an invincible summer.", philosopher: "Albert Camus", school: "Absurdism", era: "20th Century", emoji: "☀️" },
  { id: 11, text: "The happiness of your life depends upon the quality of your thoughts.", philosopher: "Marcus Aurelius", school: "Stoicism", era: "Ancient Rome", emoji: "🏛️" },
  { id: 12, text: "Without music, life would be a mistake.", philosopher: "Friedrich Nietzsche", school: "Existentialism", era: "19th Century", emoji: "⚡" },
  { id: 13, text: "I know that I know nothing.", philosopher: "Socrates", school: "Classical", era: "Ancient Greece", emoji: "🫒" },
  { id: 14, text: "Nature does not hurry, yet everything is accomplished.", philosopher: "Lao Tzu", school: "Taoism", era: "Ancient China", emoji: "☯️" },
  { id: 15, text: "First say to yourself what you would be; and then do what you have to do.", philosopher: "Epictetus", school: "Stoicism", era: "Ancient Rome", emoji: "⛓️" },
  { id: 16, text: "One must imagine Sisyphus happy.", philosopher: "Albert Camus", school: "Absurdism", era: "20th Century", emoji: "☀️" },
  { id: 17, text: "Luck is what happens when preparation meets opportunity.", philosopher: "Seneca", school: "Stoicism", era: "Ancient Rome", emoji: "🔥" },
  { id: 18, text: "Real knowledge is to know the extent of one's ignorance.", philosopher: "Confucius", school: "Confucianism", era: "Ancient China", emoji: "📜" },
  { id: 19, text: "The only true wisdom is in knowing you know nothing.", philosopher: "Socrates", school: "Classical", era: "Ancient Greece", emoji: "🫒" },
  { id: 20, text: "Waste no more time arguing about what a good man should be. Be one.", philosopher: "Marcus Aurelius", school: "Stoicism", era: "Ancient Rome", emoji: "🏛️" },
  { id: 21, text: "Existence precedes essence.", philosopher: "Jean-Paul Sartre", school: "Existentialism", era: "20th Century", emoji: "🚬" },
  { id: 22, text: "The soul becomes dyed with the color of its thoughts.", philosopher: "Marcus Aurelius", school: "Stoicism", era: "Ancient Rome", emoji: "🏛️" },
  { id: 23, text: "That which does not kill us makes us stronger.", philosopher: "Friedrich Nietzsche", school: "Existentialism", era: "19th Century", emoji: "⚡" },
  { id: 24, text: "When you wish to be well, look for someone who knows how to think.", philosopher: "Plato", school: "Platonism", era: "Ancient Greece", emoji: "💎" },
  { id: 25, text: "The way to do is to be.", philosopher: "Lao Tzu", school: "Taoism", era: "Ancient China", emoji: "☯️" },
];

export const schoolDescriptions: Record<string, string> = {
  "Stoicism": "Focus on virtue, reason, and inner peace. Accept what you cannot change.",
  "Existentialism": "Embrace freedom, authenticity, and creating your own meaning.",
  "Classical": "Pursue truth through questioning and rational inquiry.",
  "Taoism": "Flow with nature, embrace simplicity and harmony.",
  "Confucianism": "Cultivate virtue through discipline, respect, and continuous learning.",
  "Platonism": "Seek ideal forms, justice, and the higher truths of reality.",
  "Absurdism": "Find joy despite life's inherent meaninglessness. Rebel and create.",
};
