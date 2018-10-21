defmodule HustWebWeb.BlogView do
  alias HustWebWeb.BlogView
  def render("blog_just_loaded.json", blog) do
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
  end
end
