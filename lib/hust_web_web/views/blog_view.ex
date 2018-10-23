defmodule HustWebWeb.BlogView do
  alias HustWebWeb.BlogView
  alias HustWebWeb.CategoryView
  def render("blog_just_loaded.json", blog) do
    data =
      blog
      |> Map.take([
        :id,
        :name,
        :slug,
        :content,
        :images,
        :author,
        :is_published,
        :is_deleted,
        :is_pinned,
        :excerpt,
        :page_title,
        :meta_description,
        :inserted_at,
        :category_id
      ])

    data =
      case blog |> Map.fetch(:category) do
        {:ok, %Ecto.Association.NotLoaded{} } -> data
        {:ok, value} ->
          if(!is_nil(value)) do
            data |> Map.put(:category, CategoryView.render("category_just_loaded.json", value))
          else
            data
          end

        _ -> data
      end

    data
  end
end
