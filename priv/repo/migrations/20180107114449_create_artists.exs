defmodule MusicApp.Repo.Migrations.CreateArtists do
  use Ecto.Migration

  def change do
    create table(:artists) do
      add :title, :string
      add :birth_date, :date
      add :origin, :string
      add :genre, :string

      timestamps()
    end

  end
end
