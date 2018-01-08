defmodule MusicAppWeb.Router do
  use MusicAppWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", MusicAppWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/api", MusicAppWeb do
    pipe_through :api

    get "/artist", ArtistController, :index
    get "/artist/:id", ArtistController, :show
    post "/artist", ArtistController, :create
    delete "/artist/:id", ArtistController, :delete
  end
end
