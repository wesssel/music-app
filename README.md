# Music App


### Install

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `cd assets && yarn`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.


### Stack

  * Server: Phoenix
  * Client: Vue
  * Compiler: Webpack
  * UI: Vuetify
  * Test: Mocha + Chai


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

![home](/docs/mock_home.png)


**Edit/Create modal**

![modal](/docs/mock_modal.png)

