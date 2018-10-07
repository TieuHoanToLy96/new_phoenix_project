defmodule HustWebWeb.BlogController do
  use HustWebWeb, :controller

  alias HustWeb.{Blogs, Repo}
  alias HustWeb.Blogs.Blog
  alias Ecto.Multi
  alias HustWebWeb.BlogView

  action_fallback HustWeb.FallbackController
  def get_all(conn, %{"params" => params}) do
    IO.inspect(params, label: "parmassss")
    json(conn, %{sucess: true})
  end
  # def get_all(conn, %{"entries" => entries, "page" => page}) do
  #   IO.inspect(entries, label: "entriessss")
  #   entries =
  #     case Integer.parse(entries) do
  #       error -> 10
  #       {value, _ } -> 10
  #     end
  #   page =
  #     case Integer.parse(page) do
  #       error -> 1
  #       {value, _} -> value
  #     end
  #   with {:ok, blog_list, total_entries} <- Blogs.get_blog_by_entries(entries, page)  do
  #     json(conn, %{
  #       success: true,
  #       blog_list: BlogView.render("blog_just_loaded.json", blog_list),
  #       total_entries: total_entries,
  #       page: page,
  #       entries: entries
  #     })
  #   end
  # end


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

end
