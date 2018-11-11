defmodule HustWebWeb.CategoryView do
  alias HustWebWeb.CategoryView
  alias HustWebWeb.BlogView
  def render("category_just_loaded.json", category) do
    data =
      category
      |> Map.take([
        :id,
        :name,
        :slug,
        :content,
        :images,
        :is_published,
        :is_deleted,
        :excerpt,
        :page_title,
        :meta_description,
        :inserted_at,
        :updated_at
      ])

    data =
      case Map.fetch(category, :blogs) do
        {:ok, %Ecto.Association.NotLoaded{}} -> data
        {:ok, value} ->
          if value |> length() do
            blogs = value |> Enum.map(fn blog -> BlogView.render("blog_just_loaded.json", blog) end)
            data  |> Map.put(:blogs, blogs)
          else
            data |> Map.put(:blogs, [])
          end
        :error -> category
      end
    data
  end
end
