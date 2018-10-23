defmodule HustWeb.Categories.Category do
  use Ecto.Schema
  import Ecto.Changeset
  alias HustWeb.Categories.Category

  schema "categories" do
    field(:name, :string)
    field(:slug, :string)
    field(:content, :string)
    field(:images, {:array, :string})
    field(:is_published, :boolean, default: false)
    field(:is_deleted, :boolean, default: false)

    field(:excerpt, :string)
    field(:page_title, :string)
    field(:meta_description, :string)

    timestamps()
  end
  def changeset(%Category{} = category, attrs) do
    category
      |> cast(attrs, [
        :name,
        :slug,
        :content,
        :images,
        :is_published,
        :is_deleted,
        :excerpt,
        :page_title,
        :meta_description
      ])
      |> validate_required([:slug])
  end


end
