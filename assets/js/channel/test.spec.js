import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Channel from './index.vue'

describe('Channel', () => {
  it('type Spotify to display Spotify url', () => {
    const wrapper = mount(Channel, {
      propsData: {
        type: 'spotify',
        channelId: 'spotify-dummy-id',
      },
    })

    const expected = 'https://open.spotify.com/artist/spotify-dummy-id'
    const actual = wrapper.find('a').attributes().href

    expect(expected).to.equal(actual)
  })

  it('type Youtube to display Youtube url', () => {
    const wrapper = mount(Channel, {
      propsData: {
        type: 'youtube',
        channelId: 'youtube-dummy-id',
      },
    })

    const expected = 'https://www.youtube.com/channel/youtube-dummy-id'
    const actual = wrapper.find('a').attributes().href

    expect(expected).to.equal(actual)
  })

  it('type Soundcloud to display Soundcloud url', () => {
    const wrapper = mount(Channel, {
      propsData: {
        type: 'soundcloud',
        channelId: 'soundcloud-dummy-id',
      },
    })

    const expected = 'https://www.soundcloud.com/soundcloud-dummy-id'
    const actual = wrapper.find('a').attributes().href

    expect(expected).to.equal(actual)
  })
})
