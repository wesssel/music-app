defmodule MusicApp.Repo.Migrations.AddImageUrl do
  use Ecto.Migration

  def change do
    alter table(:artists) do
      add :imageUrl, :string
    end
  end
end
