defmodule HustWebWeb.PageController do
  use HustWebWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
  def app(conn, _params) do
    render conn, "app.html"
  end
end
