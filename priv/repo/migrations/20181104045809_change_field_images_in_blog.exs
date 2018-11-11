defmodule HustWeb.Repo.Migrations.ChangeFieldImagesInBlog do
  use Ecto.Migration

  def up do
    alter table(:blogs) do
      add :image_binary, :binary
    end
  end

  def down do
    alter table(:blogs) do
      remove :image_binary
    end
  end
end
