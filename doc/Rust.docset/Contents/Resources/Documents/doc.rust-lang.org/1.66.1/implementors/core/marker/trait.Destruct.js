<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="generator" content="rustdoc">
    <title>Not Found</title>

    <link rel="stylesheet" href="https://doc.rust-lang.org/rust.css">
    <link rel="icon" href="https://www.rust-lang.org/favicon.ico">


</head>
<body class="rustdoc">
    <!--[if lte IE 8]>
    <div class="warning">
        This old browser is unsupported and will most likely display funky
        things.
    </div>
    <![endif]-->

    <div id="versioninfo">
  <img src="https://www.rust-lang.org/logos/rust-logo-32x32-blk.png" width="32" height="32" alt="Rust logo"><br>
  <span class="white-sticker"><a href="https://www.rust-lang.org">Rust</a> 1.68.0-nightly</span><br>
  <a href="https://github.com/rust-lang/rust/commit/0442fbabe24ec43636a80ad1f40a0ad92a2e38df"
    class="hash white-sticker">0442fbabe</a>
</div>


    <h1 class="title">Not Found</h1>
    <!-- Completely hide the TOC and the section numbers -->
<style type="text/css">
#TOC { display: none; }
.header-section-number { display: none; }
li {list-style-type: none; }
#search-input {
    width: calc(100% - 100px);
}
#search-but {
    cursor: pointer;
}
#search-but, #search-input {
    padding: 4px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
    font-size: 0.7em;
    background-color: #fff;
}
#search-but:hover, #search-input:focus {
    border-color: #55a9ff;
}
#search-from {
    border: none;
    padding: 0;
    font-size: 0.7em;
}
</style>
<p>Looks like you’ve taken a wrong turn.</p>
<p>Some things that might be helpful to you though:</p>
<h1 id="search-1"><a href="#search-1">Search</a></h1><div>
  <form id="search-form" action="https://duckduckgo.com/">
    <input id="search-input" type="search" name="q"></input>
    <input type="submit" value="Search" id="search-but">
    <!--
      Don't show the options by default,
      since "From the Standary Library" doesn't work without JavaScript
    -->
    <fieldset id="search-from" style="display:none">
      <label><input name="from" value="library" type="radio"> From the Standard Library</label>
      <label><input name="from" value="duckduckgo" type="radio" checked> From DuckDuckGo</label>
    </fieldset>
  </form>
</div>
<h1 id="reference"><a href="#reference">Reference</a></h1>
<ul>
<li><a href="https://www.rust-lang.org">The Rust official site</a></li>
<li><a href="https://doc.rust-lang.org/reference/index.html">The Rust reference</a></li>
</ul>
<h1 id="docs"><a href="#docs">Docs</a></h1>
<p><a href="https://doc.rust-lang.org/std/">The standard library</a></p>
<script>
function get_url_fragments() {
    var last = document.URL.split("/").pop();
    var tokens = last.split(".");
    var op = [];
    for (var i=0; i < tokens.length; i++) {
        var t = tokens[i];
        if (t == 'html' || t.indexOf("#") != -1) {
            // no html or anchors
        } else {
            op.push(t);
        }
    }
    return op;
}

function on_submit(event) {
    var form = event.target;
    var q = form['q'].value;

    event.preventDefault();

    if (form['from'].value === 'duckduckgo') {
        document.location.href = form.action + '?q=' + encodeURIComponent(q + ' site:doc.rust-lang.org');
    } else if (form['from'].value === 'library') {
        document.location.href = '/std/index.html?search=' + encodeURIComponent(q);
    }
}

function populate_search() {
    var form = document.getElementById('search-form');
    form.addEventListener('submit', on_submit);
    document.getElementById('search-from').style.display = '';

    form['from'].value = 'library';

    var op = get_url_fragments();
    document.getElementById('search-input').value = op.join(' ');
}
populate_search();
</script>

    <footer><p>
Copyright &copy; 2011 The Rust Project Developers. Licensed under the
<a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License, Version 2.0</a>
or the <a href="https://opensource.org/licenses/MIT">MIT license</a>, at your option.
</p><p>
This file may not be copied, modified, or distributed except according to those terms.
</p></footer>


</body>
</html>