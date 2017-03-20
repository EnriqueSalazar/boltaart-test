This project uses:
- React
- Redux
- React Router Redux
- Bootstrap for layout
- MaterialUI for icons mostly

The app should come from a list of transactions, and should go to the detail of each product. Is a part of a flow.

Even when Redux is too complex for the small state handled by the app, I used it to show some Redux knowledge.

I followed recognized React and Redux patterns, isolating actions, reducers, components, containers and the store.

Main is the container with all the logic and state handling, all the components under Main are just dumb stateless components for view rendering puroposes only.

I choose Bootstrap to handle the layout because its simplicity, and MaterialUI because the icons are fair close to the example presented.

The app has as much icons as posible (which are lighter) and only uses images for the products.

The data provided was loaded through a Redux action and loaded to the store.

MomentJS was used to render the dates and times as shown in the example.

My coding style is to use the less magic as possible so the code is easy to understand, and the variables naming helps to achieve that.

Comments are inside each component.

We used create-react-app to initialize the app to provide standard functionality with the minimum boilerplate.

Thanks.

Enrique Salazar
