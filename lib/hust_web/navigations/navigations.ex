defmodule HustWeb.Navigations do
  import Ecto.Query, warn: false
  import Ecto.Query, only: [from: 2]
  alias HustWeb.Repo
  alias HustWeb.Navigations.Navigation

  def create_navigation(attrs) do
    IO.inspect(attrs)
    %Navigation{}
    |> Navigation.changeset(attrs)
    |> Repo.insert()
    |> IO.inspect(label: "hihihi")
  end

  def get_navigations() do
    query =
      from(
        n in Navigation,
        where: n.is_deleted == false
      )
    {:ok, Repo.all(query)}
  end

  def update_navigation(params, id) do
    Repo.get!(Navigation, id)
    |> Navigation.changeset(params)
    |> Repo.update()
  end

  def get_navigation_by_id(id) do
    query =
      from(
        n in Navigation,
        where: n.is_deleted == false and n.id == ^id
      )
   {:ok, Repo.one(query)}
  end

end
