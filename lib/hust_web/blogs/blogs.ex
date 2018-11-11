defmodule HustWeb.Blogs do
  import Ecto.Query, warn: false
  import Ecto.Query, only: [from: 2]
  alias HustWeb.Repo
  alias HustWeb.Blogs.Blog
  alias HustWeb.Categories.Category

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

    query_category =
      from(
        c in Category,
        where: c.is_deleted == false
      )

    query =
      from(
        b in Blog,
        where: b.is_deleted == false,
        limit: ^entries,
        offset: ^offset,
        order_by: [asc: :inserted_at],
        preload: [category: ^query_category]
      )
    total_entries =
    Repo.one(
      from(
        b in Blog,
        where: b.is_deleted == false ,
        select: count("*")
      )
    )
    data = query |> Repo.all() |> IO.inspect(label: "bloglist")
    {:ok, data, total_entries}
  end

  def get_recent_blogs() do
    query =
      from(
        b in Blog,
        limit: 10,
        order_by: [desc: :inserted_at]
      )
    {:ok, Repo.all(query)}
  end

  def get_pinned_blogs() do
    query =
      from(
        b in Blog,
        limit: 10,
        where: b.is_pinned == true and b.is_deleted == false and b.is_published == true
      )

    {:ok, Repo.all(query)}
  end

  def get_blog_by_slug(slug) do
    query =
      from(
        b in Blog,
        where: b.slug == ^slug and b.is_published == true and b.is_deleted == false
      )

    case Repo.one(query) do
      nil -> {:error, nil}
      blog -> {:ok, blog}
    end
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
