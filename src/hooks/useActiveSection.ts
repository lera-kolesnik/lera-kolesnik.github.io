import { useCallback, useEffect, useRef, useState } from 'react'

/** Distance from the top of the window where a section counts as "current" (below the sticky header). */
const OFFSET = 160

/** How long scrolling must stop before a menu click stops overriding the scroll position
 *  (fallback for browsers without the `scrollend` event). */
const SETTLE_MS = 400

/**
 * Returns the id of the section the reader is currently in, plus `select`
 * for menu clicks. Before the first section (the hero) it stays on the first id.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  // Set while the page scrolls to a section picked in the menu. The last
  // section can't always reach the top of the window, so the scroll position
  // alone would still point at the one before it.
  const pinned = useRef(false)
  const settleTimer = useRef<number | undefined>(undefined)

  const select = useCallback((id: string) => {
    pinned.current = true
    setActive(id)
    // If the page is already in place no scroll happens, so unpin anyway
    window.clearTimeout(settleTimer.current)
    settleTimer.current = window.setTimeout(() => (pinned.current = false), 1000)
  }, [])

  useEffect(() => {
    function update() {
      if (pinned.current) {
        window.clearTimeout(settleTimer.current)
        settleTimer.current = window.setTimeout(() => (pinned.current = false), SETTLE_MS)
        return
      }

      const { scrollHeight, clientHeight } = document.documentElement
      const atBottom = Math.ceil(window.scrollY + clientHeight) >= scrollHeight - 8
      if (atBottom) {
        setActive(ids[ids.length - 1])
        return
      }

      let current = ids[0]
      for (const id of ids) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= OFFSET) current = id
      }
      setActive(current)
    }

    // The menu's scroll has finished: keep the clicked item, follow the reader from here on
    function unpin() {
      window.clearTimeout(settleTimer.current)
      pinned.current = false
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('scrollend', unpin)
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('scrollend', unpin)
      window.removeEventListener('resize', update)
      window.clearTimeout(settleTimer.current)
    }
  }, [ids])

  return { active, select }
}
