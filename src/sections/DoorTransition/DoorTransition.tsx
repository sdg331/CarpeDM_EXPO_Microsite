import { useState } from 'react';
import { SceneFigure } from '../../components/SceneFigure/SceneFigure';
import { siteAsset } from '../../data/paths';
import './DoorTransition.css';

export function DoorTransition() {
  const [doorsFailed, setDoorsFailed] = useState(false);
  const source = siteAsset('media/workplace-doors-glass-v1.webp');

  return <div id="enter-workplace" className="door-transition problem-scene" tabIndex={-1}>
      <div className="door-transition__stage">
        <SceneFigure scene="arrival" />
        {!doorsFailed && <div className="door-transition__leaves" aria-hidden="true">
          {['left', 'right'].map(side => <div key={side} className={`door-transition__leaf door-transition__leaf--${side}`}>
            <img src={source} alt="" width={1536} height={1024} loading="lazy" decoding="async" onError={() => setDoorsFailed(true)} />
          </div>)}
        </div>}
      </div>
  </div>;
}
