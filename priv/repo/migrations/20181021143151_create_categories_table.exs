defmodule HustWeb.Repo.Migrations.CreateCategoriesTable do
  use Ecto.Migration

  def up do
    drop_if_exists(table(:categories))

    create table(:categories) do
      add :name, :text
      add :slug, :string
      add :content, :text
      add :excerpt, :text
      add :page_title, :text
      add :images, {:array, :string}
      add :meta_description, :text
      add :is_deleted, :boolean, default: false
      add :is_published, :boolean, default: false

      timestamps()
    end

    create index(:categories, [:slug, :is_deleted], where: "is_deleted = false")
  end

  def down do
    drop(table(:categories))
  end

end
