defmodule HustWeb.Blogs do
  import Ecto.Query, warn: false
  import Ecto.Query, only: [from: 2]
  alias HustWeb.Repo
  alias HustWeb.Categories.Category

  def get_categoy_by_entries(page, entries) do
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
end
