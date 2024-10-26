import { Inter, Lora, Source_Sans_3, Itim, Caveat } from 'next/font/google'

// define your variable fonts
const itim = Itim({ weight: '400', subsets: ['latin'] });
const caveat = Caveat({ weight: '400', subsets: ['latin'] });
// define 2 weights of a non-variable font
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder

export { itim, caveat }