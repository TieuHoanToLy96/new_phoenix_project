defmodule HustWebWeb.BlogController do
  use HustWebWeb, :controller

  alias HustWeb.{Blogs, Repo}
  alias HustWeb.Blogs.Blog
  alias Ecto.Multi
  alias HustWebWeb.BlogView

  action_fallback HustWeb.FallbackController

  def get_all(conn, %{"entries" => entries, "page" => page}) do

    entries_number =
      case Integer.parse(entries) do
        {value, _ } -> value
        error -> 10
      end
    page_number =
      case Integer.parse(page) do
        { value, _ } -> value
        error -> 1
      end
    with {:ok, blog_list, total_entries} <- Blogs.get_blog_by_entries(entries_number, page_number)  do
      json(conn, %{
        success: true,
        blog_list: blog_list |> Enum.map(fn el ->  BlogView.render("blog_just_loaded.json", el) end),
        total_entries: total_entries,
        page: page_number,
        entries: entries_number
      })
    end
  end


  def create(conn, %{"blog_params" => blog_params}) do
    IO.inspect(blog_params, label: "params blog")
    multi =
      Multi.new()
      |> Multi.run(:new_blog, fn _ ->
        Blogs.create_post(blog_params)
      end)

    case Repo.transaction(multi) do
      {:ok, result} ->
        IO.inspect(result.new_blog, label: "new blog")
        json(conn, %{success: true, new_blog: BlogView.render("blog_just_loaded.json", result.new_blog)})
      reason ->
        IO.inspect(reason, label: "Reason error")
        json(conn, %{success: false})
    end
  end

  def delete(conn, params) do

  end

  def update(conn, %{"blog_params" => blog_params}) do
    with {:ok, update_blog} <- Blogs.update_blog(blog_params) do
      json(conn, %{
        success: true,
        update_blog: BlogView.render("blog_just_loaded.json", update_blog)
      })
    end
  end

  def get_blog(conn, %{"id" => id}) do
    with {:ok, edit_blog} <- Blogs.get_blog_by_id(id) do
      json(conn, %{
        success: true,
        edit_blog: BlogView.render("blog_just_loaded.json", edit_blog)
      })
    end
  end

end
