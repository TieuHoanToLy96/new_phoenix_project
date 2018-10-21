defmodule HustWebWeb.CategoryView do
  alias HustWebWeb.CategoryView
  def render("category_just_loaded.json", category) do
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
  end
end
