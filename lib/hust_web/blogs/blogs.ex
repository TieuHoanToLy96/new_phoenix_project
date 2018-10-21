defmodule HustWeb.Blogs do
  import Ecto.Query, warn: false
  import Ecto.Query, only: [from: 2]
  alias HustWeb.Repo
  alias HustWeb.Blogs.Blog

  def create_post(blog_params) do
    IO.inspect(blog_params)
    insert_post =
      blog_params
      |> Map.put("slug", Slugger.slugify(blog_params["name"] || ""))
    %Blog{}
    |> Blog.changeset(insert_post)
    |> Repo.insert()
  end

  def get_blog_by_entries(entries, page) do
    IO.inspect(entries, label: "entriessss")
    offset = (page-1)*entries
    query =
      from(
        b in Blog,
        where: b.is_deleted == false,
        limit: ^entries,
        offset: ^offset,
        order_by: [asc: :inserted_at]
      )
    total_entries =
    Repo.one(
      from(
        b in Blog,
        where: b.is_deleted == false ,
        select: count("*")
      )
    )
    data = query |> Repo.all()
    {:ok, data, total_entries}
  end

  def update_blog(blog_params) do
    update_blog =
      blog_params
      |> Map.put("slug", Slugger.slugify(blog_params["name"] || ""))

    Repo.get!(Blog, blog_params["id"])
    |> Blog.changeset(update_blog)
    |> Repo.update()
  end

  def get_blog_by_id(id) do
    query =
      from(
        b in Blog,
        where: b.is_deleted == false and b.id == ^id
      )
   {:ok, Repo.one(query)}
  end



  # def change_blog(%Blog{} = blog) do
  #   Blog.changeset(blog, %{})
  # end
end
