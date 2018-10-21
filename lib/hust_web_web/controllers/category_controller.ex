defmodule HustWebWeb.CategoryController do
  use HustWebWeb, :controller
  alias HustWeb.{Categories, Repo}
  alias HustWeb.Categories.Category
  alias Ecto.Multi
  alias HustWebWeb.CategoryView

  action_fallback HustWeb.FallbackController

  def get_all(conn, %{"page" => page, "entries" => entries}) do
    page_number =
      case Integer.parse(page) do
        {value, _} -> value
        :error -> 1
      end

    entries_number =
      case Integer.parse(entries) do
        {value, _} -> value
        :error -> 10
      end

    with {:ok, categories, total} <- Categories.get_category_by_entries(page, entries) do
      categories = categories |> Enum.map( fn el -> CategoryView.render("category_just_loaded.json", el) end)

      json(conn, %{
        success: true,
        categories: categories,
        total_entries: total
      })

    end
  end

end
