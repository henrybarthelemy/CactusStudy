use diesel::prelude::*;
use crate::schema::*;

#[derive(Serialize, Deserialize, Queryable)]
pub struct Users {
    pub id: i64,
    pub username: String
}

#[derive(Serialize, Deserialize, AsChangeset, Insertable)]
#[diesel(table_name = schema::users)]
pub struct User {
    pub id: i64,
    pub username: String
}

impl Users {
    pub fn create(user: User) -> Result<Self, CustomError> {
        let conn = db::connection()?;
        let user = User::from(user);
        let user = diesel::insert_into(Users::table)
            .values(user)
            .get_result(&conn)?;
        Ok(user)
    }
    
    pub fn delete(username: String) -> Result<usize, CustomError> {  
        let conn = db::connection()?;
        let res = diesel::delete(Users::table.filter(Users::username.eq(username))).execute(&conn)?;
        Ok(res)
    }

    pub fn find(username: String) -> Result<Self, CustomError> {
        let conn = db::connection()?;
        let user = Users::table.filter(Users::username.eq(username)).first(&conn)?;
        Ok(user)
    }
}

impl User {
    fn from(user: User) -> User {
        User {
            id = user.id,
            username = user.username
        }
    }
}

#[derive(Serialize, Deserialize, Queryable)]
pub struct Cards {
    pub id: i64,
    pub title: String,
    pub tags: String,
    pub front: String,
    pub back: String,
    pub impls: i32
}

#[derive(Serialize, Deserialize, AsChangeset, Insertable)]
#[diesel(table_name = schema::cards)]
pub struct Card {
    pub id: i64,
    pub title: String,
    pub tags: String,
    pub front: String,
    pub back: String,
    pub impls: i32
}

impl Cards {
    pub fn create(card: Card) -> Result<Self, CustomError> {
        let conn = db::connection()?;
        let card = Card::from(card);
        let card = diesel::insert_into(Cards::table)
            .values(card)
            .get_result(&conn)?;
        Ok(card)
    }
    
    pub fn delete(id: i32) -> Result<usize, CustomError> {  
        let conn = db::connection()?;
        let res = diesel::delete(Cards::table.filter(Cards::id.eq(id))).execute(&conn)?;
        Ok(res)
    }

    pub fn find(id: i32, tag_in: &vec<String>, tag_out: &vec<String>) -> Result<Vec<Self>, CustomError> {
        let conn = db::connection()?;

        let mut cards: Vec<Card>;
        if id > 0{
            cards = vec![Cards::table.filter(Cards::id.eq(id)).first(&conn)?];
        } else if tag_in.len() > 0 {
            cards = Cards::table
                .filter(Cards::tags.eq_any(tag_in).and(Cards::tags.ne_all(tag_out)))
                .load::<Card>(conn)?;
        }
        
        Ok(cards)
    }
}

#[derive(Serialize, Deserialize, Queryable)]
pub struct Decks {
    pub id: i64,
    pub title: String,
    pub description: String,
    pub tags: String,
    pub cards: String
}

#[derive(Serialize, Deserialize, AsChangeset, Insertable)]
#[diesel(table_name = schema::decks)]
pub struct Deck {
    pub id: i64,
    pub title: String,
    pub description: String,
    pub tags: String,
    pub cards: String
}

