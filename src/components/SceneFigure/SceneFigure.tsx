import { useState } from 'react';
import { scenes, type SceneKind } from '../../data/scenes';
import { siteAsset } from '../../data/paths';
import './SceneFigure.css';

export function SceneFigure({ scene, className = '', id }: { scene: SceneKind; className?: string; id?: string }) {
  const [failedSource, setFailedSource] = useState<string>();
  const image = scenes[scene];
  const source = siteAsset(`media/${image.file}`);

  return <figure id={id} className={`scene-figure ${className}`}>
    {failedSource === source ? <div className="scene-figure__fallback"><span>장면 이미지</span><p>{image.alt}</p></div> : <img key={source} src={source} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" onError={() => setFailedSource(source)} />}
  </figure>;
}
