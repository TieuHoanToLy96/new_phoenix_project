defmodule  HustWeb.Navigations.Navigation do
      use Ecto.Schema
      import Ecto.Changeset
      alias HustWeb.Navigations.Navigation
      schema "navigations" do
            field(:name, :string)
            field(:settings, :map, default: %{})
            timestamps()
      end

      def changeset(%Navigation{} = navigation, attrs) do
            navigation
            |> cast(attrs, [
                  :name,
                  :settings
            ])
            |> validate_required([:name])
      end
end
