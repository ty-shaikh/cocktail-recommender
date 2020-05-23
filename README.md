# Cocktail Recomender

The goal of this project is to build a recommendation engine that can suggest cocktails based on your preferences.

**Tasks to be Done**
- Find data source, API or public wiki
- Gather data, format it and store in database or flat file
- Develop recommendation function to find similarity between ingredients
- Build command line interface to test out recommendations
- Build out Flask app for non-technical users

## Folder Structure

- *api*: Flask backend to compute recommendations and send them to frontend
- *client*: Frontend using ES6 to fetch data from Flask API
- *data*: Raw and processed data
- *figures*: Graphical assets
- *notebooks*: Exploratory work and prototype recommenders

## Recommenders

**Title Recomender**

This system is a good starting point for recommending cocktails to users based on the their selection. It doesn't require any historical data beyond the one recipe. This type of system is content-based, becuase it depends only on the content (cocktail title) not on user histories.

The approach compares all the cocktails in the database to the one input from the user. It returns the cocktails with the most similar names.

The measure of similarity here is Levenshtein distance, which is a fast metric to compute. It requires only the string titles and measures the difference between two sequences. Fewer differences between sequences means lower distance.

**Ingredients Recommender**

This system is an upgrade for recommending cocktails to users based on the their selection. It doesn't require any historical data beyond the one recipe. This type of system is content-based, becuase it depends only on the content (cocktail ingredients) not on user histories.

The approach compares all the cocktails in the database to the one input from the user. It returns the cocktails with the most similar ingredients.

The measure of similarity here is cosine similarity, which is a fast metric to compute. It requires only the binary ingredients and measures the angles between recipe vectors. Smaller angles between vectors means higher similarity.

## Resources
- [Project Structure](https://drivendata.github.io/cookiecutter-data-science/)
