extern crate hyper;
extern crate twilio;
extern crate mime;

use hyper::server::{Request, Response};
use hyper::uri::RequestUri::AbsolutePath;
use twilio::twiml::{Twiml,Voice,Say};

fn responder(mut req: Request, res: Response) {
    let app_id = "<app-id>";
    let auth_token = "<auth-token>";
    let client = twilio::Client::new(app_id,auth_token);
    let cloned_uri = match req.uri {
        AbsolutePath(ref path) => path.clone(),
        _ => panic!("Unexpected path type."),
    };
    println!("Got a request for: {}",cloned_uri);
    match &cloned_uri[..] {
        "/message" => {
            client.respond_to_webhook(&mut req,res,|msg: twilio::Message| {
                let mut t = Twiml::new();
                t.add(&twilio::twiml::Message {txt: format!("You told me: '{}'",msg.body.unwrap())});
                t
            });
        },
        "/call" => {
            client.respond_to_webhook(&mut req,res,|_: twilio::Call| {
                let mut t = Twiml::new();
                t.add(&Say{txt: "Thanks for using twilio-rs. Bye!".to_string(),voice: Voice::Woman,language: "en".to_string()});
                t
            });
        },
        _ => panic!("Hit an unknown path."),
    }
}

fn main() {
    let _listening = hyper::Server::http(responder)
        .listen("127.0.0.1:3000").unwrap();
    println!("Listening on http://127.0.0.1:3000");
}
