from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


set1 = [
            {
                "front": "Facilitated Diffusion",
                "back": "A passive movement of particles from high to low concentration through a protein channel in a cell",
                "id": 1,
                "tags": "biology,science,mcat"
            },
            {
                "front": "Termal Contact",
                "back": "is when two substances can affect each other's temperature",
                "id": 2,
                "tags": "phyics,science,thermal"
            },
            {
                "front": "una cucharadita",
                "back": "a teaspoon",
                "id": 4,
                "tags": "spanish,languages"
            },
            {
                "front": "Conduction",
                "back": "is when heat flows through a heated solid.",
                "id": 5,
                "tags": "phyics,science"
            }
        ]
set2 = [
            {
                "front": "hypothesis",
                "back": "a tentative insight that is not yet verified or tested",
                "id": 6,
                "tags": "science"
            },
            {
                "front": "graph",
                "back": "a visual representation of the relations between quantities",
                "id": 7,
                "tags": "science, math"
            },
            {
                "front": "un mesa",
                "back": "a table",
                "id": 8,
                "tags": "spanish,languages"
            },
            {
                "front": "Henry",
                "back": "the swaggiest project manager",
                "id": 9,
                "tags": "hackbeanpot members"
            }
        ]
set3 = [
            {
                "front": "Dillon",
                "back": "cs bio major",
                "id": 10,
                "tags": "science, hackbeanpot members"
            },
            {
                "front": "ben lerner",
                "back": "best fundies prof",
                "id": 11,
                "tags": "northeastern"
            },
            {
                "front": "observation",
                "back": "the act of making and recording a measurement",
                "id": 12,
                "tags": "science"
            },
            {
                "front": "empirical",
                "back": "derived from experiment and observation rather than theory",
                "id": 13,
                "tags": "science"
            }
        ]
sets = [
        set1,
        set2,
        set3,
    ]
exampleDeck1 = {
    "title": "Biology Study Deck",
    "id": 1,
    "cards": set1,
    "tags": ["bio", "testprep", "academic"],
}
exampleDeck2 = {
    "title": "Cooking Study Deck",
    "id": 2,
    "cards": set2,
    "tags": ["learning", "cooking", "food"]
}
exampleDeck3 = {
    "title": "Espanol",
    "id": 3,
    "cards": set3,
    "tags": ["learning", "language", "spanish"]
}

cardId = 14  # current card id, increment by one when getting post stuff
setId = 4  # current set id, increment by one when getting post stuff

decks = [exampleDeck1, exampleDeck2, exampleDeck3]  # starting deck for our server

app = FastAPI()

origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

def getDeck(id):
    for deck in decks:
        if(int(deck.id) == id):
            return id

@app.post("/newcard")
async def add_card(card: dict) -> dict:
    global cardId
    print(card['set_id'])
    set_id = int(card['set_id'])
    card.pop('set_id', None)
    card.update({'id': cardId})
    cardId += 1
    decks[set_id - 1]['cards'].append(card)
    print(decks[set_id-1])
    return {
        "data": {"Card created and added to set."}
    }

@app.post("/newset")
async def add_set(deck: dict) -> dict:
    global setId
    deck.update({'id': setId})
    deck.update({'cards': []})
    decks.append(deck)
    setId += 1
    print(decks)
    return {
        "data": {"Set created."}
    }

@app.get("/set/{id}")
async def get_sets(id: str) -> dict:
    print("Trying to grab with " + id)
    return { "data" : decks[int(id) - 1] }

@app.get("/sets")
async def get_sets() -> dict:
    #TODO: Data validation
    print(decks)
    return { "data" : decks }
@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Hackbeanpot Project by Henry, Ezgi, Nathaniel, Liz, and Lucas."}
