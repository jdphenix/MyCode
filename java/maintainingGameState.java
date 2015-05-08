// Demonstrates one way to manage and maintain state of a 
// game. 

abstract class Building { }

final class Cottage extends Building { }

final class House extends Building { }

final class Castle extends Building { }

final class BuildingManager {
    private final static BuildingManager _instance = new BuildingManager();
    private Set<Building> buildings;

    private BuildingManager() {
        buildings = new HashSet<>();
    }

    public static BuildingManager getManager() {
        return _instance;
    }

    public Building getNewBuilding() {
        // decide which building to create, but we'll always go with
        // a castle for this example

        Building castle = new Castle();
        buildings.add(castle);
        return castle;
    }

    public int getBuildingCount() {
        return buildings.size();
    }
}

// Example of use

BuildingManager manager = BuildingManager.getManager();

Building building = manager.getNewBuilding();
Building building2 = manager.getNewBuilding();

System.out.println(manager.getBuildingCount() + " buildings exist.");