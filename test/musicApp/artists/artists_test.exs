defmodule MusicApp.ArtistsTest do
  use MusicApp.DataCase

  alias MusicApp.Artists

  describe "artists" do
    alias MusicApp.Artists.Artist

    @valid_attrs %{birth_date: ~D[2010-04-17], genre: "some genre", origin: "some origin", title: "some title"}
    @update_attrs %{birth_date: ~D[2011-05-18], genre: "some updated genre", origin: "some updated origin", title: "some updated title"}
    @invalid_attrs %{birth_date: nil, genre: nil, origin: nil, title: nil}

    def artist_fixture(attrs \\ %{}) do
      {:ok, artist} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Artists.create_artist()

      artist
    end

    test "list_artists/0 returns all artists" do
      artist = artist_fixture()
      assert Artists.list_artists() == [artist]
    end

    test "get_artist!/1 returns the artist with given id" do
      artist = artist_fixture()
      assert Artists.get_artist!(artist.id) == artist
    end

    test "create_artist/1 with valid data creates a artist" do
      assert {:ok, %Artist{} = artist} = Artists.create_artist(@valid_attrs)
      assert artist.birth_date == ~D[2010-04-17]
      assert artist.genre == "some genre"
      assert artist.origin == "some origin"
      assert artist.title == "some title"
    end

    test "create_artist/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Artists.create_artist(@invalid_attrs)
    end

    test "update_artist/2 with valid data updates the artist" do
      artist = artist_fixture()
      assert {:ok, artist} = Artists.update_artist(artist, @update_attrs)
      assert %Artist{} = artist
      assert artist.birth_date == ~D[2011-05-18]
      assert artist.genre == "some updated genre"
      assert artist.origin == "some updated origin"
      assert artist.title == "some updated title"
    end

    test "update_artist/2 with invalid data returns error changeset" do
      artist = artist_fixture()
      assert {:error, %Ecto.Changeset{}} = Artists.update_artist(artist, @invalid_attrs)
      assert artist == Artists.get_artist!(artist.id)
    end

    test "delete_artist/1 deletes the artist" do
      artist = artist_fixture()
      assert {:ok, %Artist{}} = Artists.delete_artist(artist)
      assert_raise Ecto.NoResultsError, fn -> Artists.get_artist!(artist.id) end
    end

    test "change_artist/1 returns a artist changeset" do
      artist = artist_fixture()
      assert %Ecto.Changeset{} = Artists.change_artist(artist)
    end
  end
end
