
import { assign, round } from 'lodash'
import React from 'react'
import { expect } from 'chai'
import sd from 'skin-deep'
import TestUtils from 'react-addons-test-utils'
import { Box } from '../src'

describe('Box', () => {
  let dom, instance, style, computed

  const initial = {
    boxSizing: 'border-box',
    flex: null,
    padding: null,
    paddingTop: null,
    paddingBottom: null,
    paddingLeft: null,
    paddingRight: null,
    width: null,
    flexBasis: null
  }

  beforeEach(() => {
    const tree = sd.shallowRender(<Box />)
    instance = tree.getMountedInstance()
    dom = tree.getRenderOutput()
    style = dom.props.style
  })

  it('should render', () => {
    expect(instance).to.exist
  })

  it('should have no styles by default', () => {
    expect(style).to.deep.equal(initial)
  })

  context('when p prop is set', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Box p={1} />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should have padding', () => {
      computed = assign({}, style, { padding: 8 })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when px prop is set', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Box px={1} />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should have padding left and right', () => {
      computed = assign({}, style, {
        paddingLeft: 8,
        paddingRight: 8
      })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when py prop is set', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Box py={1} />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should have padding top and bottom', () => {
      computed = assign({}, style, {
        paddingTop: 8,
        paddingBottom: 8
      })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when pt prop is set', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Box pt={1} />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should have padding top', () => {
      computed = assign({}, style, {
        paddingTop: 8
      })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when pr prop is set', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Box pr={1} />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should have padding right', () => {
      computed = assign({}, style, {
        paddingRight: 8
      })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when pb prop is set', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Box pb={1} />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should have padding bottom', () => {
      computed = assign({}, style, {
        paddingBottom: 8
      })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when pl prop is set', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Box px={1} />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should have padding left', () => {
      computed = assign({}, style, {
        paddingLeft: 8
      })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when stretch prop is set', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Box stretch />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set flex: 1 1 auto', () => {
      computed = assign({}, style, { flex: '1 1 auto' })
      expect(style).to.deep.equal(computed)
    })
  })

  describe('col prop', () => {
    context('when set to 1', () => {
      beforeEach(() => {
        const tree = sd.shallowRender(<Box col={1} />)
        style = tree.getRenderOutput().props.style
      })
      it('should set width and flex-basis to 8.3%', () => {
        computed = assign({}, style, {
          width: (1 / 12 * 100) + '%',
          flexBasis: (1 / 12 * 100) + '%'
        })
        expect(style).to.deep.equal(computed)
      })
    })

    context('when set to 2', () => {
      beforeEach(() => {
        const tree = sd.shallowRender(<Box col={2} />)
        style = tree.getRenderOutput().props.style
      })
      it('should set width and flex-basis to 16.6%', () => {
        computed = assign({}, style, {
          width: (2 / 12 * 100) + '%',
          flexBasis: (2 / 12 * 100) + '%'
        })
        expect(style).to.deep.equal(computed)
      })
    })

    context('when set to 3', () => {
      beforeEach(() => {
        const tree = sd.shallowRender(<Box col={3} />)
        style = tree.getRenderOutput().props.style
      })
      it('should set width and flex-basis to 25%', () => {
        computed = assign({}, style, {
          width: (3 / 12 * 100) + '%',
          flexBasis: (3 / 12 * 100) + '%'
        })
        expect(style).to.deep.equal(computed)
      })
    })

    context('when set to 4', () => {
      beforeEach(() => {
        const tree = sd.shallowRender(<Box col={4} />)
        style = tree.getRenderOutput().props.style
      })
      it('should set width and flex-basis to 33.3%', () => {
        computed = assign({}, style, {
          width: (4 / 12 * 100) + '%',
          flexBasis: (4 / 12 * 100) + '%'
        })
        expect(style).to.deep.equal(computed)
      })
    })

    context('when set to 5', () => {
      beforeEach(() => {
        const tree = sd.shallowRender(<Box col={5} />)
        style = tree.getRenderOutput().props.style
      })
      it('should set width and flex-basis to 41.6%', () => {
        computed = assign({}, style, {
          width: (5 / 12 * 100) + '%',
          flexBasis: (5 / 12 * 100) + '%'
        })
        expect(style).to.deep.equal(computed)
      })
    })

    context('when set to 6', () => {
      beforeEach(() => {
        const tree = sd.shallowRender(<Box col={6} />)
        style = tree.getRenderOutput().props.style
      })
      it('should set width and flex-basis to 50%', () => {
        computed = assign({}, style, {
          width: (6 / 12 * 100) + '%',
          flexBasis: (6 / 12 * 100) + '%'
        })
        expect(style).to.deep.equal(computed)
      })
    })

    context('when set to 7', () => {
      beforeEach(() => {
        const tree = sd.shallowRender(<Box col={7} />)
        style = tree.getRenderOutput().props.style
      })
      it('should set width and flex-basis to 58.3%', () => {
        computed = assign({}, style, {
          width: (7 / 12 * 100) + '%',
          flexBasis: (7 / 12 * 100) + '%'
        })
        expect(style).to.deep.equal(computed)
      })
    })

    context('when set to 8', () => {
      beforeEach(() => {
        const tree = sd.shallowRender(<Box col={8} />)
        style = tree.getRenderOutput().props.style
      })
      it('should set width and flex-basis to 66.6%', () => {
        computed = assign({}, style, {
          width: (8 / 12 * 100) + '%',
          flexBasis: (8 / 12 * 100) + '%'
        })
        expect(style).to.deep.equal(computed)
      })
    })

    context('when set to 9', () => {
      beforeEach(() => {
        const tree = sd.shallowRender(<Box col={9} />)
        style = tree.getRenderOutput().props.style
      })
      it('should set width and flex-basis to 75%', () => {
        computed = assign({}, style, {
          width: (9 / 12 * 100) + '%',
          flexBasis: (9 / 12 * 100) + '%'
        })
        expect(style).to.deep.equal(computed)
      })
    })

    context('when set to 10', () => {
      beforeEach(() => {
        const tree = sd.shallowRender(<Box col={10} />)
        style = tree.getRenderOutput().props.style
      })
      it('should set width and flex-basis to 83.3%', () => {
        computed = assign({}, style, {
          width: (10 / 12 * 100) + '%',
          flexBasis: (10 / 12 * 100) + '%'
        })
        expect(style).to.deep.equal(computed)
      })
    })

    context('when set to 11', () => {
      beforeEach(() => {
        const tree = sd.shallowRender(<Box col={11} />)
        style = tree.getRenderOutput().props.style
      })
      it('should set width and flex-basis to 91.6%', () => {
        computed = assign({}, style, {
          width: (11 / 12 * 100) + '%',
          flexBasis: (11 / 12 * 100) + '%'
        })
        expect(style).to.deep.equal(computed)
      })
    })

    context('when set to 12', () => {
      beforeEach(() => {
        const tree = sd.shallowRender(<Box col={12} />)
        style = tree.getRenderOutput().props.style
      })
      it('should set width and flex-basis to 100%', () => {
        computed = assign({}, style, {
          width: (12 / 12 * 100) + '%',
          flexBasis: (12 / 12 * 100) + '%'
        })
        expect(style).to.deep.equal(computed)
      })
    })
  })

  describe('media queries', () => {
    let root, width, flexBasis

    if (typeof window === 'undefined') {
      return false
    }

    class Root extends React.Component {
      render () { return <div {...this.props} /> }
    }

    function setProps (props) {
      root = TestUtils.renderIntoDocument(
        <Root><Box {...props} /></Root>
      )
      computed = TestUtils.findRenderedDOMComponentWithClass(root, 'Box').style
    }

    const sizes = Array.from({ length: 12 }, (a, b) => b + 1)

    it('should be in a windowed environment', () => {
      expect(window).to.exist
    })

    context('when below sm breakpoint', () => {
      if (window.matchMedia('(min-width: 32em)').matches) {
        return false
      }

      describe('sm prop', () => {
        sizes.forEach((size) => {
          context(`when set to ${size}`, () => {
            beforeEach(() => {
              setProps({ sm: size })
              width = computed.width
              flexBasis = computed.flexBasis
            })

            it(`should not have width set`, () => {
              expect(width).to.equal('')
            })

            it(`should not have flex-basis set`, () => {
              expect(flexBasis).to.equal('')
            })
          })
        })
      })

      describe('md prop', () => {
        sizes.forEach((size) => {
          context(`when set to ${size}`, () => {
            beforeEach(() => {
              setProps({ md: size })
              width = computed.width
              flexBasis = computed.flexBasis
            })

            it(`should not have width set`, () => {
              expect(width).to.equal('')
            })

            it(`should not have flex-basis set`, () => {
              expect(flexBasis).to.equal('')
            })
          })
        })
      })

      describe('lg prop', () => {
        sizes.forEach((size) => {
          context(`when set to ${size}`, () => {
            beforeEach(() => {
              setProps({ lg: size })
              width = computed.width
              flexBasis = computed.flexBasis
            })

            it(`should not have width set`, () => {
              expect(width).to.equal('')
            })

            it(`should not have flex-basis set`, () => {
              expect(flexBasis).to.equal('')
            })
          })
        })
      })
    })

    context('when between sm and md breakpoints', () => {
      if (!window.matchMedia('(min-width: 32em) and (max-width: 48em)').matches) {
        return false
      }

      describe('sm prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            expected = round(size / 12 * 100, 2)
            beforeEach(() => {
              setProps({ sm: size })
              expected = round(size / 12 * 100, 2)
              width = round(parseFloat(computed.width), 2)
              flexBasis = round(parseFloat(computed.flexBasis), 2)
            })

            it(`should have width set to ${expected}%`, () => {
              expect(width).to.equal(expected)
            })

            it(`should have flex-basis set to ${expected}%`, () => {
              expect(flexBasis).to.equal(expected)
            })
          })
        })
      })

      describe('md prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            beforeEach(() => {
              setProps({ md: size })
              expected = ''
              width = computed.width
              flexBasis = computed.flexBasis
            })

            it(`should not have width set`, () => {
              expect(width).to.equal(expected)
            })

            it(`should not have flex-basis set`, () => {
              expect(flexBasis).to.equal(expected)
            })
          })
        })
      })

      describe('lg prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            beforeEach(() => {
              setProps({ lg: size })
              expected = ''
              width = computed.width
              flexBasis = computed.flexBasis
            })

            it(`should not have width set`, () => {
              expect(width).to.equal(expected)
            })

            it(`should not have flex-basis set`, () => {
              expect(flexBasis).to.equal(expected)
            })
          })
        })
      })

      describe('sm, md, and lg props', () => {
        let expected
        expected = round(6 / 12 * 100, 2)

        beforeEach(() => {
          setProps({ sm: 6, md: 4, lg: 3 })
          width = round(parseFloat(computed.width), 2)
          flexBasis = round(parseFloat(computed.flexBasis), 2)
        })

        it(`should have width set to ${expected}%`, () => {
          expect(width).to.equal(expected)
        })

        it(`should have flex-basis set to ${expected}%`, () => {
          expect(flexBasis).to.equal(expected)
        })
      })
    })

    context('when between md and lg breakpoints', () => {
      if (!window.matchMedia('(min-width: 48em) and (max-width: 64em)').matches) {
        return false
      }

      describe('sm prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            expected = round(size / 12 * 100, 2)
            beforeEach(() => {
              setProps({ sm: size })
              expected = round(size / 12 * 100, 2)
              width = round(parseFloat(computed.width), 2)
              flexBasis = round(parseFloat(computed.flexBasis), 2)
            })

            it(`should have width set to ${expected}%`, () => {
              expect(width).to.equal(expected)
            })

            it(`should have flex-basis set to ${expected}%`, () => {
              expect(flexBasis).to.equal(expected)
            })
          })
        })
      })

      describe('md prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            expected = round(size / 12 * 100, 2)
            beforeEach(() => {
              setProps({ md: size })
              expected = round(size / 12 * 100, 2)
              width = round(parseFloat(computed.width), 2)
              flexBasis = round(parseFloat(computed.flexBasis), 2)
            })

            it(`should have width set to ${expected}%`, () => {
              expect(width).to.equal(expected)
            })

            it(`should have flex-basis set to ${expected}%`, () => {
              expect(flexBasis).to.equal(expected)
            })
          })
        })
      })

      describe('lg prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            beforeEach(() => {
              setProps({ lg: size })
              expected = ''
              width = computed.width
              flexBasis = computed.flexBasis
            })

            it(`should not have width set`, () => {
              expect(width).to.equal(expected)
            })

            it(`should not have flex-basis set`, () => {
              expect(flexBasis).to.equal(expected)
            })
          })
        })
      })

      describe('sm, md, and lg props', () => {
        let expected
        expected = round(4 / 12 * 100, 2)

        beforeEach(() => {
          setProps({ sm: 6, md: 4, lg: 3 })
          width = round(parseFloat(computed.width), 2)
          flexBasis = round(parseFloat(computed.flexBasis), 2)
        })

        it(`should have width set to ${expected}%`, () => {
          expect(width).to.equal(expected)
        })

        it(`should have flex-basis set to ${expected}%`, () => {
          expect(flexBasis).to.equal(expected)
        })
      })
    })

    context('when above the lg breakpoints', () => {
      if (!window.matchMedia('(min-width: 64em)').matches) {
        return false
      }

      describe('sm prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            expected = round(size / 12 * 100, 2)
            beforeEach(() => {
              setProps({ sm: size })
              expected = round(size / 12 * 100, 2)
              width = round(parseFloat(computed.width), 2)
              flexBasis = round(parseFloat(computed.flexBasis), 2)
            })

            it(`should have width set to ${expected}%`, () => {
              expect(width).to.equal(expected)
            })

            it(`should have flex-basis set to ${expected}%`, () => {
              expect(flexBasis).to.equal(expected)
            })
          })
        })
      })

      describe('md prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            expected = round(size / 12 * 100, 2)
            beforeEach(() => {
              setProps({ md: size })
              expected = round(size / 12 * 100, 2)
              width = round(parseFloat(computed.width), 2)
              flexBasis = round(parseFloat(computed.flexBasis), 2)
            })

            it(`should have width set to ${expected}%`, () => {
              expect(width).to.equal(expected)
            })

            it(`should have flex-basis set to ${expected}%`, () => {
              expect(flexBasis).to.equal(expected)
            })
          })
        })
      })

      describe('lg prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            expected = round(size / 12 * 100, 2)
            beforeEach(() => {
              setProps({ lg: size })
              expected = round(size / 12 * 100, 2)
              width = round(parseFloat(computed.width), 2)
              flexBasis = round(parseFloat(computed.flexBasis), 2)
            })

            it(`should have width set to ${expected}%`, () => {
              expect(width).to.equal(expected)
            })

            it(`should have flex-basis set to ${expected}%`, () => {
              expect(flexBasis).to.equal(expected)
            })
          })
        })
      })

      describe('sm, md, and lg props', () => {
        let expected
        expected = round(3 / 12 * 100, 2)

        beforeEach(() => {
          setProps({ sm: 6, md: 4, lg: 3 })
          width = round(parseFloat(computed.width), 2)
          flexBasis = round(parseFloat(computed.flexBasis), 2)
        })

        it(`should have width set to ${expected}%`, () => {
          expect(width).to.equal(expected)
        })

        it(`should have flex-basis set to ${expected}%`, () => {
          expect(flexBasis).to.equal(expected)
        })
      })
    })
  })
})

