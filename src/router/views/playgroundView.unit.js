import Playground from './playgroundView.vue'

describe('@views/playgroundView', () => {
  it('is a valid view', () => {
    expect(Playground).toBeAViewComponent()
  })

  it('renders an element', () => {
    const { element } = shallowMountView(Playground)
    expect(element.textContent).toContain('Playground')
  })
})
