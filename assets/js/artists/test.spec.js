import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Artists from './index.vue'

describe('Artists', () => {
  it('h1 to equal artists', () => {
    const wrapper = mount(Artists)
    const $h1 = wrapper.find('h1')

    expect($h1.text()).to.equal('Artists')
  })
})
