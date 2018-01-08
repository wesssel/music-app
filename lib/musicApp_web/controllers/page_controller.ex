defmodule MusicAppWeb.PageController do
  use MusicAppWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
