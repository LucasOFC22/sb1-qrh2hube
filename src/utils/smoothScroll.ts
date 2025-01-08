import { scroller } from 'react-scroll';
import throttle from 'lodash.throttle';

const scrollConfig = {
  duration: 500,
  delay: 0,
  smooth: true,
  offset: -80,
  spy: false,
  hashSpy: false
};

export const scrollToSection = throttle((sectionId: string) => {
  scroller.scrollTo(sectionId, scrollConfig);
}, 500, { leading: true, trailing: false });