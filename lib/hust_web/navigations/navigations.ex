defmodule HustWeb.Navigation do
  import Ecto.Query, warn: false
  import Ecto.Query, only: [from: 2]
  alias HustWeb.Repo
  alias HustWeb.Navigations.Navigation

  def create_navigation(attrs) do
    %Navigation{}
    |> Navigationn.changeset(attrs)
    |> Repo.insert()
  end

end
