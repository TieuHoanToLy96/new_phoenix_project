defmodule HustWebWeb.NavigationController do
  use HustWebWeb, :controller

  alias HustWeb.{Navigations, Repo}
  alias HustWeb.Navigations.Navigation
  alias Ecto.Multi
  alias HustWebWeb.NavigationView
  action_fallback HustWeb.FallbackController
  def create(conn, %{"params" => params}) do
    with {:ok, navigation} <- Navigations.create_navigation(params) do
      json(conn, %{
        success: true,
        navigation: NavigationView.render("navigation_just_loaded.json", navigation)
      })
    end
  end

  def get_all(conn, _) do
    with {:ok, navigations} <- Navigations.get_navigations() do
      json(conn, %{
        success: true,
        navigations: navigations |> Enum.map( fn el -> NavigationView.render("navigation_just_loaded.json", el) end)
      })
    end
  end

  def update(conn, %{"params" => params, "id" => id}) do
    with {:ok, navigation} <- Navigations.update_navigation(params, id) do
        json(conn, %{
          success: true,
          navigation: NavigationView.render("navigation_just_loaded.json", navigation)
        })
    end
  end

  def get_navigation(conn, %{"id"=>id}) do
    with {:ok, navigation} <- Navigations.get_navigation_by_id(id) do
      json(conn, %{
        success: true,
        navigation: NavigationView.render("navigation_just_loaded.json", navigation)
      })
    end
  end
end
