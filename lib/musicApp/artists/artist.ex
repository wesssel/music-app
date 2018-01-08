defmodule MusicApp.Artists.Artist do
  use Ecto.Schema
  import Ecto.Changeset
  alias MusicApp.Artists.Artist

  schema "artists" do
    field :origin, :string
    field :title, :string
    field :imageUrl, :string

    timestamps()
  end

  @doc false
  def changeset(%Artist{} = artist, attrs) do
    artist
    |> cast(attrs, [:title, :origin, :imageUrl])
    |> validate_required([:title])
  end
end
