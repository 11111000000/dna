import { update } from 'haunted-router/lib/router'

export { useRoutes, useTitle, replaceTo } from 'haunted-router'

export function navigateTo(url, state) {
  history.pushState(state, '', url)
  update()
}
