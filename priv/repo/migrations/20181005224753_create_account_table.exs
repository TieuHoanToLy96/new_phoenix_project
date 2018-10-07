defmodule HustWeb.Repo.Migrations.CreateAccountTable do
  use Ecto.Migration

  def up do
    add :id, :binary_id, primary_key: true
    add :account_name, :string, null: false
    add :email, :string, null: false
    add :password_hash, :string, null: false
    add :phone_number, :string, null: false
    add :full_name, 
    add :is_global_admin, :boolean, default: false
    
    timestamps()
  end

  def down do
    
  end
end
