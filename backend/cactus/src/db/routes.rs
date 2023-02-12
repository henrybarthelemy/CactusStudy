use actix_web::{post, web, HttpResponse};
use serde::Deserialize;

#[derive(Deserialize)]
struct NewCard {
    front: String, 
    back: String, 
    tags: String
}

#[post("/newcard")]
async fn createcard(card: web::Json<NewCard>) -> Result<HttpResponse, String> {
    
    Ok(HttpResponse::Ok().json(/*val*/))
}


#[derive(Deserialize)]
struct NewDeck { 
    title: String,
    tags: Vec<String>,
    cards: Vec<i32> 
}  

#[post("/newdeck")]
async fn createdeck(deck: web::Json<NewDeck>) -> Result<HttpResponse, String> {
    
    Ok(HttpResponse::Ok().json(/*val*/))
}


#[derive(Deserialize)]
struct GetDeck { 
    id: i32,
    title: String,
    r: Vec<String>,
    n: Vec<String>
  }

#[post("/getdeck")]
async fn getdeck(filter: web::Json<GetDeck>) -> Result<HttpResponse, String> {
    
    Ok(HttpResponse::Ok().json(/*val*/))
}

#[derive(Deserialize)]
struct GetCard {
    deck: i32,
    id: i32,
    r: Vec<String>,
    n: Vec<String>
}
#[post("/getcard")]
async fn getcard(filter: web::Json<GetCard>) -> Result<HttpResponse, String> {
    
    Ok(HttpResponse::Ok().json(/*val*/))
}

pub fn init_routes(config: &mut web::ServiceConfig) {
    config.service(newcard);
    config.service(newdeck);
    config.service(getdeck);
    config.service(getcard);
}

 