#[derive(Queryable)]
pub struct Users {
    pub id: i64,
    pub username: String
}

#[derive(Queryable)]
pub struct Cards {
    pub id: i64,
    pub title: String,
    pub tags: String,
    pub front: String,
    pub back: String,
    pub impls: i32
}

#[derive(Queryable)]
pub struct Decks {
    pub id: i64,
    pub title: String,
    pub description: String,
    pub tags: String,
    pub cards: String
}
