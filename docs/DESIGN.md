
### Stack

  * Server: [Phoenix](https://github.com/phoenixframework/phoenix)
  * Client: [Vue](https://github.com/vuejs/vue)
  * Compiler: [Webpack](https://github.com/webpack/webpack)
  * UI: [Element.io](https://github.com/ElemeFE/element)
  * Test: [Mocha](https://github.com/mochajs/mocha) + [Chai](https://github.com/chaijs/chai)
  * Lint: [Eslint](https://github.com/eslint/eslint) with [Airbnb](https://github.com/airbnb/javascript)


### Entities

**Artist**

Artist is the main entity. Artist are music artists.

Schema:
  * title: name of the artist
  * origin: country of artist
  * imageUrl: image of artist
  
  
**Channel**

Channels are media channels of artists. Example: Spotify or Youtube.

Schema:
  * channel_id: unique id of the channel. Example spotify Primal scream id: `3wury2nd8idV4GecUg5xze`
  * type: type of channel. For example Spotify or Youtub


### Layout

**Home**

![home](/assets/mock_home.png)


**Edit/Create modal**

![modal](/assets/mock_modal.png)
