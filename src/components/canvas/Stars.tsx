import { PointMaterial, Points, Preload, Sphere } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"
import * as random from 'maath/random/dist/maath-random.cjs'

const Stars = (props: any) => {

  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
  const ref = useRef<THREE.Object3D | undefined>(undefined);

  useFrame((state, delta) => {
    if (ref.current) {
      // Explicitly assert the type of ref.current
      const obj = ref.current as THREE.Object3D;

      // Now you can access the 'rotation' property safely
      obj.rotation.x -= delta / 10;
      obj.rotation.y -= delta / 15;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props} >
        <PointMaterial transparent color="#f272c8" size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas