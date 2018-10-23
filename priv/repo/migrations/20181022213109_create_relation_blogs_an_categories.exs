defmodule HustWeb.Repo.Migrations.CreateRelationBlogsAnCategories do
  use Ecto.Migration


  def up do
    alter table(:blogs) do
      add :category_id, references(:categories)
    end
  end

  def down do
    alter table(:blogs) do
      remove :category_id
    end
  end
end
