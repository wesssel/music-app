defmodule MusicApp.Repo.Migrations.CreateArtists do
  use Ecto.Migration

  def change do
    create table(:artists) do
      add :title, :string
      add :origin, :string
      add :imageUrl, :string

      timestamps()
    end

  end
end
