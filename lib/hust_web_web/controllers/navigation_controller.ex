defmodule HustWebWeb.NavigationController do
  use HustWebWeb, :controller

  alias HustWeb.{Navigations, Repo}
  alias HustWeb.Navigations.Navigation
  alias Ecto.Multi
  alias HustWebWeb.NavigationView

  def create(conn, %{"params" => params}) do
    with {:ok, navigation} <- Navigations.create_navigation(params) do
      json(conn, %{
        success: true,
        navigation: NavigationView.render("navigation_just_loaded.json", navigation)
      })
    end
  end
end
