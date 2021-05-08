import ShowCatSpec from '@/components/model/show-image-spec/animal/show-cat-spec'

describe('show-cat-spec', () => {
  describe('when cat not selected', () => {
    describe.each([
      ['Dog'],
      ['Turtle'],
      ['None']
    ])('but %s selected', (animal) => {
      describe.each([
        ['Vue', false],
        ['Angular', false],
        ['React', false]
      ])('when like %s', (framework, expected) => {
        it('should not show animal regardless of framework', () => {
          const sut = new ShowCatSpec()

          expect(sut.isSatisfiedBy({ framework, animal })).toBe(expected)
        })
      })
    })
  })

  describe('when cat selected', () => {
    describe.each([
      ['Vue', true],
      ['Angular', false],
      ['React', false]
    ])('when like %s', (framework, expected) => {
      it(`should ${expected ? '' : 'not '}show animal regardless of framework`, () => {
        const sut = new ShowCatSpec()

        expect(sut.isSatisfiedBy({ framework, animal: 'Cat' })).toBe(expected)
      })
    })
  })
})
