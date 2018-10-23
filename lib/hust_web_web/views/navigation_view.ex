defmodule HustWebWeb.NavigationView do
  alias HustWebWeb.NavigationView

  def render("navigation_just_loaded.json", navigation) do
    navigation
    |> Map.take([
      :id,
      :name,
      :is_published,
      :settings
    ])
  end
end
