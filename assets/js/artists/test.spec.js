import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Artists from './index.vue'

const mock = {
  artists: [
    {
      title: 'Artist 1 name',
      origin: 'Country 1',
      imageUrl: 'http://via.placeholder.com/350x150',
    },
    {
      title: 'Artist 2 name',
      origin: 'Country 2',
      imageUrl: 'http://via.placeholder.com/350x120',
    },
  ],
}

describe('Artists', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Artists, {
      data: {
        artists: mock.artists,
      },
    })
  })

  it('h1 to equal artists', () => {
    const $h1 = wrapper.find('h1')

    expect($h1.text()).to.equal('Artists')
  })

  it('artist title to be in view', () => {
    mock.artists.forEach((artist) => {
      expect(wrapper.text()).to.contain(artist.title)
    })
  })

  it('artist origin to be in view', () => {
    mock.artists.forEach((artist) => {
      expect(wrapper.text()).to.contain(artist.origin)
    })
  })

  it('artist image to be in view', () => {
    mock.artists.forEach((artist) => {
      expect(wrapper.html()).to.contain(artist.imageUrl)
    })
  })
})
