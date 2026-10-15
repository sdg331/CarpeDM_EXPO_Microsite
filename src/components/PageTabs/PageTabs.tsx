import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import './PageTabs.css';

interface PageTab { id: string; label: string; description?: string; content: ReactNode }

// Keep every section mounted so existing fragment links and local selections survive.
export function PageTabs({ label, tabs, initialId }: { label: string; tabs: PageTab[]; initialId?: string }) {
  const [selected, setSelected] = useState(initialId ?? tabs[0]!.id);
  const controls = useRef<(HTMLButtonElement | null)[]>([]);
  const pendingTarget = useRef<HTMLElement | null>(null);
  const ids = tabs.map(tab => tab.id).join('|');
  const firstId = tabs[0]!.id;

  useLayoutEffect(() => {
    const target = pendingTarget.current;
    if (!target || target.closest('[hidden]')) return;
    target.scrollIntoView({ behavior: 'instant', block: 'start' });
    target.focus({ preventScroll: true });
    pendingTarget.current = null;
  }, [selected]);

  useEffect(() => {
    function followFragment() {
      let hash: string;
      try { hash = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      if (!hash) { setSelected(initialId ?? firstId); return; }
      const panelIds = ids.split('|');
      const target = document.getElementById(hash);
      let owner: Element | null | undefined = target;
      while (owner && !panelIds.includes(owner.id)) owner = owner.parentElement;
      if (!owner || !target) return;
      pendingTarget.current = target;
      setSelected(owner.id);
      let ancestor = target.parentElement;
      while (ancestor) {
        if (ancestor instanceof HTMLDetailsElement) ancestor.open = true;
        ancestor = ancestor.parentElement;
      }
      if (!target.closest('[hidden]')) {
        target.scrollIntoView({ behavior: 'instant', block: 'start' });
        target.focus({ preventScroll: true });
        pendingTarget.current = null;
      }
    }
    followFragment();
    window.addEventListener('hashchange', followFragment);
    window.addEventListener('popstate', followFragment);
    return () => {
      window.removeEventListener('hashchange', followFragment);
      window.removeEventListener('popstate', followFragment);
    };
  }, [ids, firstId, initialId]);

  function choose(index: number) {
    const id = tabs[index]!.id;
    setSelected(id);
    window.history.pushState(null, '', `#${id}`);
  }
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = event.key === 'ArrowRight' ? (index + 1) % tabs.length
      : event.key === 'ArrowLeft' ? (index + tabs.length - 1) % tabs.length
      : event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : undefined;
    if (next === undefined) return;
    event.preventDefault();
    choose(next);
    controls.current[next]?.focus();
  }

  return <div className="page-tabs">
    <div className="page-tabs__navigation container" role="tablist" aria-label={label}>
      {tabs.map((tab, index) => <button key={tab.id} ref={element => { controls.current[index] = element; }}
        id={`${tab.id}-tab`} type="button" role="tab" aria-selected={selected === tab.id}
        aria-controls={tab.id} aria-describedby={tab.description ? `${tab.id}-help` : undefined} tabIndex={selected === tab.id ? 0 : -1}
        onClick={() => choose(index)} onKeyDown={event => onKeyDown(event, index)}>{tab.label}</button>)}
    </div>
    {tabs.map(tab => <div key={tab.id} id={tab.id} data-page-panel role="tabpanel"
      aria-labelledby={`${tab.id}-tab`} hidden={selected !== tab.id} tabIndex={0}>
      {tab.description && <p id={`${tab.id}-help`} className="page-tabs__hint container"><span aria-hidden="true">0{tabs.indexOf(tab) + 1} / 0{tabs.length}</span>{tab.description}</p>}{tab.content}</div>)}
  </div>;
}
