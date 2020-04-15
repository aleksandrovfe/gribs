import React from 'react';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const ThreeJs = ({img, description, link, sign}) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  const onfollowLink = () => {
    window.location.assign(link);
  }

  return (
    <div className="wrapper">
    <p className="card__sign">{sign}</p>
        <animated.img
          src={img}
          className="card"
          onClick={() => onfollowLink()}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        />
      <div className="descrtiption__wrapper">
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default ThreeJs;