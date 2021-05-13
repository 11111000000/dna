import { directive, AttributePart } from 'lit-html'

export const ref = directive((refInstance) => (part) => {
  if (!(part instanceof AttributePart)) {
    throw new Error('ref directive can only be used as an attribute')
  }
  refInstance.current = part.committer.element
})
