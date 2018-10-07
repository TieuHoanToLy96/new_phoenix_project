defmodule HustWeb.Repo.Migrations.CreateBlogs do
  use Ecto.Migration

  def up do
    create table(:blogs) do
      add :name, :text
      add :slug, :string
      add :content, :text
      add :excerpt, :text
      add :page_title, :text
      add :images, {:array, :string}
      add :meta_description, :text
      add :author, :string
      add :is_deleted, :boolean, default: false
      add :is_published, :boolean, default: false
      timestamps()
    end
    create index(:blogs, [:slug, :is_deleted], where: "is_deleted = false")
  end

  def down do
    drop table(:blogs)
  end
end
