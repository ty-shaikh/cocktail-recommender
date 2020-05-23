import pickle
import pandas as pd
from fuzzywuzzy import fuzz, process
from sklearn.metrics import pairwise_distances


df = pickle.load(open("../data/dataframe.p", "rb"))
cocktail_names = df['strDrink'].values.tolist()
ingredients = pickle.load(open("../data/ingredients.p", "rb"))


# Ingredient Recommender
def find_match(query):
    "Find matches and return first one"
    matches = process.extract(query, cocktail_names, limit=2, scorer=fuzz.token_set_ratio)
    top_choice = matches[0]
    top_choice_idx = cocktail_names.index(top_choice[0])
    top_choice_row = df.iloc[top_choice_idx, :]
    cocktail_id = top_choice_row['idDrink']
    return cocktail_id


def cos_sim_matrix(M):
    "Create cosine similarity matrix"
    sims = 1 - pairwise_distances(M.values, metric='cosine')
    sim_matrix = pd.DataFrame(sims, index=M.index, columns=M.index).fillna(0)
    return sim_matrix


def get_similar_cocktails(cocktail_id, top_n, cscores, cocktail_data):
    """ Return best matches to a cocktail based on cosine similarity

        cocktail_id: numeric cocktail id
        top_n: number of best matches to return
        cscores: cosine similarity matrix for cocktails as dataframe with cocktail id's
        recipe_data: the dataframe of all available cocktails with ingredients
    """
    top_cocktail_scores = cscores.drop(cocktail_id, axis=1).loc[cocktail_id, :].nlargest(top_n)
    similar_cocktail_ids = top_cocktail_scores.index.values
    similar_cocktails = cocktail_data[cocktail_data.idDrink.isin(similar_cocktail_ids)]
    last_cocktail = cocktail_data[cocktail_data.idDrink == cocktail_id]
    return top_cocktail_scores, similar_cocktails


def find_cocktails(query, n):
    cocktail_id = find_match(query)
    ing_df = ingredients.fillna(0)
    cos_scores = cos_sim_matrix(ing_df.select_dtypes(exclude=['O']))
    scores, cocktails = get_similar_cocktails(cocktail_id, n, cos_scores, df)
    names = [val for val in cocktails['strDrink']]
    idx = [find_index(val) for val in names]
    img_urls = [find_img_url(val) for val in idx]
    names_imgs = list(zip(names, img_urls))
    return names_imgs


# Title Recommender
def find_matches(query, top_n):
    "Find top matches to query"
    matches = process.extract(query, cocktail_names, limit=top_n, scorer=fuzz.token_set_ratio)
    choices = matches[1:]
    choices_names = [val[0] for val in choices]
    choices_idx = [find_index(val) for val in choices_names]
    choices_img_urls = [find_img_url(val) for val in choices_idx]
    names_imgs = list(zip(choices_names, choices_img_urls))
    return names_imgs


def find_index(name):
    "Find index by name"
    idx = cocktail_names.index(name)
    return idx


def find_img_url(idx):
    "Find image URL by index"
    row = df.iloc[idx, :]
    img_url = row['strDrinkThumb']
    return img_url
