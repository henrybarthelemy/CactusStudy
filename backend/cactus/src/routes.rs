#[post("/newcard")]
async fn createcard(card: web::Json) -> Result<HttpResponse, CustomError> {
    
    Ok(HttpResponse::Ok().json(/*val*/))
}

#[post("/newdeck")]
async fn createdeck(deck: web::Json) -> Result<HttpResponse, CustomError> {
    
    Ok(HttpResponse::Ok().json(/*val*/))
}

#[post("/getdeck")]
async fn getdeck(filter: web::Json) -> Result<HttpResponse, CustomError> {
    
    Ok(HttpResponse::Ok().json(/*val*/))
}

#[post("/getcard")]
async fn getcard(filter: web::Json) -> Result<HttpResponse, CustomError> {
    
    Ok(HttpResponse::Ok().json(/*val*/))
}

 