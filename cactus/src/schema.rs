// @generated automatically by Diesel CLI.

diesel::table! {
    cards (id) {
        id -> Integer,
        tags -> Text,
        front -> Text,
        back -> Text,
        impls -> Integer,
    }
}

diesel::table! {
    decks (id) {
        id -> Integer,
        title -> Text,
        description -> Text,
        tags -> Text,
        cards -> Text,
    }
}

diesel::table! {
    users (id) {
        id -> Integer,
        username -> Text,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    cards,
    decks,
    users,
);
