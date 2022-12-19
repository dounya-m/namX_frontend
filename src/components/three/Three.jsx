import React from 'react'
import { Suspense } from 'react'
import {Canvas} from 'react-three-fiber';
import Scene from '../../Scene'

function Three() {

  return (
    <Canvas>
      <Suspense>
        <Scene />
      </Suspense>
    </Canvas>
  )
}

export default Three