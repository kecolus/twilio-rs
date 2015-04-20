(function() {var implementors = {};
implementors['rand'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;'a, T: <a class='trait' href='rand/trait.Rand.html' title='rand::Rand'>Rand</a>, R: <a class='trait' href='rand/trait.Rng.html' title='rand::Rng'>Rng</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='rand/struct.Generator.html' title='rand::Generator'>Generator</a>&lt;'a, T, R&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, R: <a class='trait' href='rand/trait.Rng.html' title='rand::Rng'>Rng</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='rand/struct.AsciiGenerator.html' title='rand::AsciiGenerator'>AsciiGenerator</a>&lt;'a, R&gt;",];implementors['rustc_serialize'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;Item=<a href='http://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='rustc_serialize/json/struct.Parser.html' title='rustc_serialize::json::Parser'>Parser</a>&lt;T&gt;",];implementors['hyper'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='url/parser/struct.CharRanges.html' title='url::parser::CharRanges'>CharRanges</a>&lt;'a&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='hyper/header/struct.HeadersItems.html' title='hyper::header::HeadersItems'>HeadersItems</a>&lt;'a&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, N: <a class='trait' href='hyper/net/trait.NetworkListener.html' title='hyper::net::NetworkListener'>NetworkListener</a> + 'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='hyper/net/struct.NetworkConnections.html' title='hyper::net::NetworkConnections'>NetworkConnections</a>&lt;'a, N&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()