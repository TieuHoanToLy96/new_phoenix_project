defmodule  HustWeb.Navigations.Navigation do
      use Ecto.Schema
      import Ecto.Changeset
      alias HustWeb.Navigations.Navigation
      schema "navigations" do
            field(:name, :string)
            field(:is_published, :boolean, default: false)
            field(:settings, {:array, :map})
            field(:is_deleted, :boolean, default: false)
            timestamps()
      end

      def changeset(%Navigation{} = navigation, attrs) do
            navigation
            |> cast(attrs, [
                  :name,
                  :settings,
                  :is_published
            ])
            |> validate_required([:name])
      end
end
