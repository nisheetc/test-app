import json
import random
import requests

TRACK_LIMIT = 200
TRACK_SEARCH_LIMIT = TRACK_LIMIT * 100
WRITE_TO_FILE = True
API_URL = "https://deezerdevs-deezer.p.rapidapi.com"
headers = {
	"X-RapidAPI-Key": "565943499emsh970d39dd6a751a2p1c9465jsn06efe8038671",
	"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
}
TEMPO_MAP = {
    (0, 40): "Extra Largo",
    (40, 60): "Largo",
    (66, 76): "Adagio",
    (76, 108): "Andante",
    (108, 120): "Moderato",
    (120, 168): "Allegro",
    (168, 176): "Vivace",
    (176, 200): "Presto",
    (200, float('inf')): "Prestissimo"
}


def categorize_tempo(bpm):
    for tempo_range, category in TEMPO_MAP.items():
        if tempo_range[0] <= bpm < tempo_range[1]:
            return category
    return None


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


print(f"Total Tracks To Select: {TRACK_LIMIT}, Total Tracks to Search: {TRACK_SEARCH_LIMIT}")
# Fetch metadata for each track and transform it
tracks_searched = tracks_selected = 0
tracks_metadata = []
track_ids = set()
while len(tracks_metadata) < TRACK_LIMIT and tracks_searched < TRACK_SEARCH_LIMIT:
    tracks_searched += 1
    try: 
        url = f"{API_URL}/track/{random.randint(1000, 9999999)}"
        response = requests.get(url, headers=headers)
        data = response.json()
        if data.get("error") or data.get("id") in track_ids or not data.get("bpm"):
            print(f"Tracks Searched: {tracks_searched}")
            continue
        track_ids.add(data["id"])
        transformed_data = {
            "deezerId": data["id"],
            "isrcCode": data.get("isrc"),
            "title": data["title"],
            "artist": data["artist"]["name"],
            "album": data["album"]["title"],
            "imageUrl": data["album"]["cover_medium"],
            "duration": data["duration"],
            "yearPublished": data["release_date"],
            "bpm": data.get("bpm"),
            "tempo": categorize_tempo(data.get("bpm") or 0),
            "key": data.get("key"),
        }
        tracks_metadata.append(transformed_data)
        tracks_selected += 1
        print(f"Tracks Searched: {tracks_searched}, Tracks Selected: {tracks_selected}")
    except Exception as e:
        print(f"Error! {e}, Tracks Searched: {tracks_searched}")

if WRITE_TO_FILE:
    # Write the metadata to a JSON file
    with open("tracks_metadata.json", "w") as f:
        json.dump(tracks_metadata, f)
