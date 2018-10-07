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
    offset = (page-1)*entries
    query =
      from(
        b in Blog,
        where: b.is_deleted == false,
        limit: ^entries,
        offset: ^offset
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

  # def update_blog(%Blog{} = blog, attrs) do
  #   blog
  #   |> Blog.changeset(attrs)
  #   |> Repo.update()
  # end

  # def change_blog(%Blog{} = blog) do
  #   Blog.changeset(blog, %{})
  # end
end
