defmodule HustWebWeb.Router do
  use HustWebWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :app do
    plug(:put_layout, {HustWebWeb.LayoutView, :app})
  end



  scope "/", HustWebWeb,  host: System.get_env("HUST_HOSTNAME") do
    pipe_through :browser

    # Use the default browser stack

    scope "/" do
      get("/", PageController, :index)
    end
    pipe_through(:app)
    get("/*path", PageController, :app)
  end

  # Other scopes may use custom stacks.
  scope "/api", HustWebWeb do
    pipe_through :api
    scope "/admin" do
      scope "/blogs" do
        post("/update_blog", BlogController, :update)
        post("/get_blog", BlogController, :get_blog)
        post("/create_blog", BlogController, :create)
        post("/get_all", BlogController, :get_all)
      end
    end
  end
end
