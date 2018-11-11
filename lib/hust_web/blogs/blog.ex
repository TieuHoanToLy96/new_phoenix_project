defmodule HustWeb.Blogs.Blog do
  use Ecto.Schema
  import Ecto.Changeset
  alias HustWeb.Blogs.Blog

  schema "blogs" do
    field(:name, :string)
    field(:slug, :string)
    field(:content, :string)
    field(:images, {:array, :binary})
    field(:image_binary, :binary)
    field(:author, :string)
    field(:is_published, :boolean, default: false)
    field(:is_deleted, :boolean, default: false)
    field(:is_pinned, :boolean, default: false)

    field(:excerpt, :string)
    field(:page_title, :string)
    field(:meta_description, :binary)

    belongs_to(:category, Categories, foreign_key: :category_id)

    timestamps()
  end
  def changeset(%Blog{} = blog, attrs) do
    blog
      |> cast(attrs, [
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
        :category_id,
        :image_binary
      ])
      |> validate_required([:slug])
  end


end
