# surf-workspace
Work surface for solution surfing

In our platform users can create, edit and review multiple
proposed solutions for a project for a specific site. We facilitate multiple workflows and ways
to create and edit these proposed solutions by providing them with a​work surface​. In
addition, all the relevant, tool specific features and statistics for a selected solution are also
displayed at all times.


# Task

The idea here is to make a simple web application, based on the two JSON-files containing one GeoJSON feature
collection each. 
Each feature collection represents a proposed solution and contains a list of
polygons. The left panel should be a list of proposed solutions (one solution per JSON-file).
The work surface should be a map with the polygons for the selected solution displayed on a
map. The right panel should have area statistics for the selected solution.

# Required to: 

1. It should be possible to select two polygons and do the following operations on them:
**union** and **intersect**. The resulting polygon of the operation should replace the
selected polygons. The app should keep the current state of the polygons until the
page is reloaded. It is not necessary to persist the data on disk.

2. It should be possible to switch between the proposed solutions. Edited polygons
should remain in the same state they are left in when switching between solutions.

3. The total area of the selected polygons should be displayed in the right panel.


# Solution:

The solution is a single page React application with 3 separate components supporting each of the below modules
and a main component library serving the application with the required interactions and state management for data
and state actions flowing across modules.

1. Solution list,
2. Map [work surface] interface,
3. Statistics and tool options

### **Stack used:**
- React + Typescript
- Material UI
- react-leaflet for maps integration
- nx as build system and monorepo support

### **To launch the application:**
1. clone repo locally
2. navigate to '\ui\worksurface' directory from project root directory 
3. from your command line [or IDE terminal] run 'npx nx serve' command to build and serve the application
4. if successful, launch the application using 'localhost:4200' URL in your local browser

[_in case there is any error on line 3 or 4, you can run 'npm install --legacy-peer-deps' command on the line to 
install all required project node module dependencies_]


### TODO
- [ ] Render map properly on the page
- [ ] Need to have polygon areas based on the selected solution (and coordinates in it)
- [ ] Feature to change the polygon shape based on selected tooling operation (union, intersect..)
- [ ] Additional Tool features - Exclusive Or and Subtraction
- [ ] App Bar on the page with name and logo