import React from "react";
import styles from './index.module.scss'
import { IoIosArrowUp,IoIosArrowDown } from 'react-icons/io';


export const Ground = () => {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
      <planeGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial color={"#ddddff"} />
    </mesh>
  );
};

export const Wall = () => {
  return (
    <>
      <mesh 
        position={[0, 100, -250]} 
        castShadow 
        receiveShadow
      >
        <boxGeometry args={[500, 200, 1]} />
        <meshLambertMaterial color={"white"} />
      </mesh>
      <mesh
        position={[-250, 100, 0]}
        rotation={[0, -Math.PI * 0.5, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[500, 200, 1]} />
        <meshLambertMaterial color={"white"} />
      </mesh>
      <mesh 
        position={[0, 100, 250]} 
        castShadow 
        receiveShadow
      >
        <boxGeometry args={[500, 200, 1]} />
        <meshLambertMaterial color={"white"} />
      </mesh>
      <mesh
        position={[250, 100, 0]}
        rotation={[0, -Math.PI * 0.5, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[500, 200, 1]} />
        <meshLambertMaterial color={"white"} />
      </mesh>
    </>
  );
};

export const Box = () => {
  return (
    <mesh position={[0, 2.5, 0]} castShadow receiveShadow>
      <boxGeometry args={[5, 5, 5]} />
      <meshLambertMaterial color={"red"} />
    </mesh>
  );
};

export const SmallBox = () => {
  return (
    <mesh position={[6, 1, -1.5]} castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshLambertMaterial color={"green"} />
    </mesh>
  );
};

export const Ball = () => {
  return (
    <mesh position={[1, 6, -1]} castShadow receiveShadow >
      <sphereGeometry args={[1, 128, 128]} />
      <meshLambertMaterial color={"yellow"} />
    </mesh>
  );
};

export const Navigation = ({next,prev}) =>{
  return(
    <div className={styles.navigation}>
      <div onClick={next}>
        <IoIosArrowUp/>
      </div>
      <div onClick={prev}>
        <IoIosArrowDown/>
      </div>
    </div>
  )
}


