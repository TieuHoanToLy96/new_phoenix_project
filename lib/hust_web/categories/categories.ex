defmodule HustWeb.Categories do
  import Ecto.Query, warn: false
  import Ecto.Query, only: [from: 2]
  alias HustWeb.Repo
  alias HustWeb.Categories.Category

  def get_category_by_entries(page, entries) do
    IO.inspect(page, label: "pageeeee")
    offset = (page-1)*entries
    query =
      from(
        c in Category,
        where: c.is_deleted == false,
        offset: ^offset,
        limit: ^entries,
        order_by: [asc: :inserted_at]
      )

    total_entries =
      Repo.one(
        from(
          c in Category,
          where: c.is_deleted == false ,
          select: count("*")
        )
      )
    {:ok, query |> Repo.all(), total_entries}
  end

  def create_category(params) do
    params =
      params
      |> Map.put("slug", Slugger.slugify(params["name"]) || "")
    %Category{}
    |> Category.changeset(params)
    |> Repo.insert()
  end

  def update_category(params) do
    params =
      params
      |> Map.put("slug", Slugger.slugify(params["name"]) || "")
    Repo.get!(Category, params["id"])
    |> Category.changeset(params)
    |> Repo.update()
  end

  def get_category_by_id(id) do
    query =
      from(
        c in Category,
        where: c.is_deleted == false and c.id == ^id
      )
   {:ok, Repo.one(query)}
  end

end
