import MagicEightBall from "../components/MagicEightBall";
import Contact from "../components/pages/contact/Contact";
import About from "../components/pages/About";
import NotFound from "../components/NotFound";
const links = [
  {
    link: "/",
    title: "MagicEightBall",
    component: MagicEightBall,
    isExact: true,
    isLink: true
  },
  {
    link: "/about",
    title: "About",
    component: About,
    isExact: false,
    isLink: true
  },
  {
    link: "/contact",
    title: "Contact",
    component: Contact,
    isExact: false,
    isLink: true
  },

  {
    link: "/404",
    title: "NotFound",
    component: NotFound,
    isExact: false,
    isLink: false
  }
];

export default links;
