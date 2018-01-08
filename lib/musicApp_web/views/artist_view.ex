defmodule MusicAppWeb.ArtistView do
  use MusicAppWeb, :view
  alias MusicAppWeb.ArtistView

  def render("index.json", %{artists: artists}) do
    render_many(artists, ArtistView, "artist.json")
  end

  def render("show.json", %{artist: artist}) do
    render_one(artist, ArtistView, "artist.json")
  end

  def render("artist.json", %{artist: artist}) do
    %{id: artist.id,
      title: artist.title,
      origin: artist.origin,
      imageUrl: artist.imageUrl}
  end
end
