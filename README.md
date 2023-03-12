# Friday Night Films

This is the starting repository for Films Project.


You will find a file called `TMDB.js` which contains a sample of movie data that mimics what's found in the actual TMDB API (we can swap it out for the real API data later).

## Material Icons

This app uses a set of icons called Material Icons. (The URL is imported from the `index.html` file).

It's used for a few icons in this app. This example uses the material-icons library to include an "Add to queue" icon and a "remove from queue" icon.

```html
<span className="material-icons">add_to_queue</span>
<span className="material-icons">remove_from_queue</span>
```

To find more icons see [The Material Icons](https://mui.com/material-ui/material-icons/).

**Note:** There's now a better way to include the latest version, using `yarn` and importing the icons in JavaScript. Feel free to update your app to use that!

## Poster URLS

The API data only contains the last part of the poster and backdrop image URLS.

For example, the poster URLS for the film 'Baby Driver'

```js
{
  "poster_path": "/dN9LbVNNZFITwfaRjl4tmwGWkRg.jpg",
  "backdrop_path": "/goCvLSUFz0p7k8R10Hv4CVh3EQv.jpg",
}
```

You can construct the full URL using a prefix, with the following base URLs:

```js
const posterURL = `https://image.tmdb.org/t/p/w780${poster_path}`
const backdropURL = `https://image.tmdb.org/t/p/w1280${backdrop_path}`
```

Step 1: Make the list of movies work

In FilmLibrary.js you'll find that there's a list of films there with three mock films in the list. Those should be real films!

Move the FilmRow elements into a separate component, and then use the data in TMBD.js to populate a whole list of FilmRow's. Move the CSS import for FilmRow.css to the matching JavaScript file.

Make it so that:

    Each film has the correct title, poster and year (calculate the year from the date!)
    The number next to ALL at the top matches the number of films the list.
    All the films start off with the icon for add_to_queue (they are not in the favourite list yet)

Hint: The README.md file in the given code has information on how the icons and URLs for posters work

Hint: You'll need to use Date.getFullYear() to get the year.
Step 2: Show film detail

Make it so that when you click on a film, it shows the details for that film in the right-hand panel (FilmDetail is already a separate component for you)

Hint: You'll need to store the film information as state in the FilmLibrary component:

const [selectedFilm, setSelectedFilm] = useState(null)

Extension: Film Favourites list

Find the fave button on each FilmRow (it's the add_to_queue icon). Use that button to add a film to a list of favourite films.

When you click FAVES at the top, it should switch to showing a list of all your favourite films.

Make it so that:

    You can easily swap between showing ALL (all films) and FAVES (only favourites)
    The ALL and FAVES buttons visibly change to indicate which one is currently selected
    The icon changes from a add_to_queue icon to a remove_from_queue icon if the film is one of the favourites
    When you click the remove_from_queue icon button, it should remove that film from the favourites list
    The number next to FAVES is the number of films in the favourites list


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
