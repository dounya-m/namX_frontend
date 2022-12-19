import React from 'react'
import { Suspense } from 'react'
import {Canvas} from 'react-three-fiber';

function Three() {

  return (
    <Canvas>
      <Suspense fallback={null}>
        {/* <Scene /> */}
      </Suspense>
    </Canvas>
  )
}

export default Three