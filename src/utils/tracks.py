import json
import random
import requests

TRACK_LIMIT = 200
WRITE_TO_FILE = True
API_URL = "https://deezerdevs-deezer.p.rapidapi.com"
headers = {
	"X-RapidAPI-Key": "565943499emsh970d39dd6a751a2p1c9465jsn06efe8038671",
	"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
}

# Get a list of all genres -- this only works with real deezer API, not with deezerdevs
# url = f"{API_URL}/genre"
# response = requests.get(url, headers=headers)
# genres = response.json()["data"]

# Shuffle the genres to get random ones
# random.shuffle(genres)
# 
# track_ids = []
# for genre in genres:
#     # Get the top tracks for this genre
#     url = f'{API_URL}/search?q="{genre["name"]}"'
#     response = requests.get(url,  headers=headers)
#     tracks = response.json()["data"]
#     # Add the track IDs to our list
#     track_ids.extend(track["id"] for track in tracks)
#     # Stop when we have enough track IDs
#     if len(track_ids) >= TRACK_LIMIT:
#         break

# Fetch metadata for each track and transform it
tracks_metadata = []
while len(tracks_metadata) < TRACK_LIMIT:
    url = f"{API_URL}/track/{random.randint(1, 9999999)}"
    response = requests.get(url, headers=headers)
    data = response.json()
    if data.get("error"):
        continue
    transformed_data = {
        "imageUrl": data["album"]["cover_medium"],
        "title": data["title"],
        "artist": data["artist"]["name"],
        "album": data["album"]["title"],
        "duration": data["duration"],
        "yearPublished": data["release_date"],
    }
    tracks_metadata.append(transformed_data)

if WRITE_TO_FILE:
    # Write the metadata to a JSON file
    with open("tracks_metadata.json", "w") as f:
        json.dump(tracks_metadata, f)