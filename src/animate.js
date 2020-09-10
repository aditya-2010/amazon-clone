import { spring } from "react-router-transition";

export function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translateY(${styles.offset}px)`,
  };
}

// export const switchRule = (style = `
//   position: relative;
//   height: calc("100vh - 50px");
//   width: 100vw;
//   background-color: #fff;
//   & > div {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     overflow-y: auto;
//     -webkit-overflow-scrolling: touch;
//   }
// `);

export function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

export function zoom(val) {
  return spring(val, {
    stiffness: 135,
    damping: 15,
  });
}

export function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 19,
  });
}

export const bounceTransition = {
  atEnter: {
    opacity: 0,
    offset: -50,
  },
  atLeave: {
    opacity: 0,
    offset: zoom(50),
  },
  atActive: {
    opacity: 1,
    offset: zoom(0),
  },
};
