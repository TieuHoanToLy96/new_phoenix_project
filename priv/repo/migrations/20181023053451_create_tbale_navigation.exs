defmodule HustWeb.Repo.Migrations.CreateTbaleNavigation do
  use Ecto.Migration

  def up do
    drop_if_exists table(:navigations)
    create table(:navigations) do
      add :name, :text
      add :is_published, :boolean, default: false
      add :settings,  :jsonb, default: "[]"
      add :is_deleted, :boolean, default: false
      timestamps()
    end
  end

  def down do
    drop_if_exists table(:navigations)
  end
end
