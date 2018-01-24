import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import AddArtist from './index.vue'

describe('Add Artist', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(AddArtist, {
      propsData: {
        artists: [],
      },
    })
  })

  it('Click button to open modal', () => {
    wrapper.find('.artist-add').trigger('click')

    expect(wrapper.vm.dialogVisible).to.equal(true)
  })

  it('Submit to close modal', () => {
    wrapper.setData({
      dialogVisible: true,
      newArtist: {
        title: 'dummy-title',
      },
    })
    wrapper.find('.submit').trigger('click')

    expect(wrapper.vm.dialogVisible).to.equal(false)
  })

  it('Submit to reset new artist', () => {
    wrapper.setData({
      newArtist: {
        title: 'dummy-title',
        origin: 'dummy-origin',
        imageUrl: 'http://via.placeholder.com/350x120',
        channels: [],
      },
    })
    wrapper.find('.submit').trigger('click')

    expect(wrapper.vm.newArtist.title).to.equal('')
    expect(wrapper.vm.newArtist.origin).to.equal('')
    expect(wrapper.vm.newArtist.imageUrl).to.equal('')
    expect(wrapper.vm.newArtist.channels.length).to.equal(0)
  })

  it('Submit without title to add error class', () => {
    wrapper.find('.submit').trigger('click')
    const { class: className } = wrapper.find('el-input').attributes()

    expect(className).to.equal('error')
  })
})
