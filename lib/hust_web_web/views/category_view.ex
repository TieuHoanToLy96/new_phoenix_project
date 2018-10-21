defmodule HustWebWeb.CategoryView do
  alias HustWebWeb.CategoryView
  def render("categories_just_loaded.json", blog) do
    blog
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