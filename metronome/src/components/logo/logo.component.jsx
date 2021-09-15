import React from 'react'
import './logo.style.css'
import { ReactComponent as MetronomeLogo } from '../../assets/graphics/MetronomeLogo.svg'

export default function Logo () {
  return (
        <>
            <image className="metronomeContainer">
                <MetronomeLogo />
            </image>
        </>
  )
}
