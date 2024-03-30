const Post = require('../models/Post');

const postdata = [
  {
    title: 'hylics 2',
    desc: 'march 6 2024',
    details: 'w/ carolina lopez - synth/voice, sam laramee - guitar, ben rositsan - woodwinds/synth, steven noronha - keys, josh sparks - samples, pt sandberg - bass, sierra weston - game',
    url: 'https://www.youtube.com/embed/iBNHARrP30I?si=COaSWK2LErYblQ7q',
  },
  {
    title: 'Subnautica',
    desc: 'feb 28 2024',
    url: 'https://www.youtube.com/embed/5JV-M6bUlmU?si=IsgnLHfqE0D_hH6w',
  },
  {
    title: 'lil gator game',
    desc: 'feb 21 2024',
    url: 'https://www.youtube.com/embed/cHUpF7_imQc?si=2oJVTkPS-bY0QULq',
  },
  {
    title: 'minecraft',
    desc: '♥ feb 14 2024 ',
    url: 'https://www.youtube.com/embed/6pFu-rgHSow?si=BuMYe_rQtc8b1KLS',
  },
  {
    title: 'Deaths Door',
    desc: 'jan 10 2024',
    url: 'https://www.youtube.com/embed/j4HPyC1Zu8o?si=gCBHZ0FZzrERPkNz',
  },
  {
    title: 'untitles goose game',
    desc: 'jan 31 2024',
    url: 'https://www.youtube.com/embed/wDbi34AtoZk?si=PXgCuFdb0Cn4njzD',
  },
  {
    title: 'jusant',
    desc: 'jan 24 2024',
    url: 'https://www.youtube.com/embed/9Jw1blOrO_o?si=V0rONISuJKYasANu',
  },
  {
    title: 'sable',
    desc: 'jan 3 2024',
    url: 'https://www.youtube.com/embed/Omcg3G3WpCY?si=nhGQL3XZrQuFPlIP',
  },
  {
    title: 'minecraft',
    desc: 'aug 9 2023',
    url: 'https://www.youtube.com/embed/MLXAco7LSQU?si=RvUkz9llU5OKtp_B',
  },
  {
    title: 'sail forth',
    desc: 'dec 6 2023',
    url: 'https://www.youtube.com/embed/kvuOh63RXzw?si=xDZ4X-sveRZKtetB',
  },
  {
    title: 'mirrors edge',
    desc: 'march 20 2024',
    details: 'w/ ben rositsan - saxophone, sam laramee - synth, josh sparks - drum programming, aidan mcconnell - drums, pt sandberg - bass, sierra weston - game',
    url: 'https://www.youtube.com/embed/ApqI59Sp458?si=v7o8_wB2l7NOZzoq',
  },
];

const seedContent = () => Post.bulkCreate(postdata);

module.exports = seedContent;