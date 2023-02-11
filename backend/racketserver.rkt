#lang racket
(require web-server/servlet
         web-server/servlet-env)

(define (my-app req)
  (response/xexpr
   `(html (head (title "Hello world!"))
          (body (h1 "Hey user!")
                (p "Welcome to the racket side of Study Flash Cards")))))

(response/output
 #:mime-type #"text/javascript"
 #:headers (list (header #"Access-Control-Allow-Origin" #"*"))
 (λ (out)
   (write-bytes #"console.log('Hi, world!')\n" out)))


(serve/servlet my-app
               #:servlet-path "/")

(serve/servlet my-app
               #:port 8080)

(serve/servlet my-app
               #:listen-ip #f)
