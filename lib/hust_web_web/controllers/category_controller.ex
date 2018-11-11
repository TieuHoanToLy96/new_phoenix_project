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

    with {:ok, categories, total} <- Categories.get_category_by_entries(page_number, entries_number) do
      categories = categories |> Enum.map( fn el -> CategoryView.render("category_just_loaded.json", el) end)

      json(conn, %{
        success: true,
        categories: categories,
        total_entries: total
      })

    end
  end

  def create(conn, %{"params" => params}) do
    with {:ok, category} <- Categories.create_category(params) do
      IO.inspect(category)
      json(conn, %{
        success: true,
        category: CategoryView.render("category_just_loaded.json", category)
      })
    end
  end

  def update(conn, %{"params" => params}) do
    IO.inspect(params)
    with {:ok, u_category} <- Categories.update_category(params) do
      IO.inspect(u_category)
      json(conn, %{
        success: true,
        update_category: CategoryView.render("category_just_loaded.json", u_category)
      })
    end
  end

  def get_category(conn, %{"id" => id}) do
      with {:ok, category} <- Categories.get_category_by_id(id) do
        json(conn, %{
          success: true,
          edit_category: CategoryView.render("category_just_loaded.json", category)
        })
      end
  end

  def get_category_by_slug(conn, %{"slug" => slug}) do
    with  {:ok, category} <- Categories.get_category_by_slug(slug) do
      IO.inspect(category, label: "fuckkkkk")
      json(conn, %{
        success: true,
        category: CategoryView.render("category_just_loaded.json", category)
      })
    end
  end

end
