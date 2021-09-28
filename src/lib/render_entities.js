/* Our bread & butter -- replaces a sub-string with something else */
function _replace(str, start, end, replacement) {
  return str.substr(0, start) + replacement + str.substr(end, str.length);
}

/* Replaces user mentions based on object from tweet.entities.user_mentions */
function _replace_mention(str, mention) {
  var repl = '<a href="https://twitter.com/' + mention.screen_name + '">@' + mention.screen_name + '</a>';
  return _replace(str, mention.indices[0], mention.indices[1], repl);
}

/* Replaces hashtags based on object from tweet.entities.hashtags */
function _replace_hashtag(str, hashtag) {
  var repl = '<a href="https://twitter.com/hashtag/' + hashtag.text + '?src=hash">#' + hashtag.text + '</a>';
  return _replace(str, hashtag.indices[0], hashtag.indices[1], repl);
}

/* Replaces URLs based on object from tweet.entities.urls */
function _replace_url(str, url) {
  var repl = '<a href="' + url.expanded_url + '">' + url.display_url + '</a>';
  return _replace(str, url.indices[0], url.indices[1], repl);
}

/** Curries any given `_replace_*` function into a one-argument function, 
 * with a weight specified.
 *  
 *  Takes a function `fn`, data, and weight,
 *  and returns a new function that ONLY takes a string, 
 *  to which the function `fn` is applied.
 */
function _replace_func(func, data, weight) {
  var f = function (str) {
    return func(str, data);
  }
  f.weight = weight;
  return f;
}

/**
 * Curries the `_replace_func` into a one-argument function for use in `Array.prototype.map`. 
 * 
 * Takes a function `fn`, and returns a new function which takes `data` as a sole argument,
 * which we `Array.prototype.map` expects.
 * 
 * This new function will get executed by `Array.prototype.map` for each item in an array,
 * and will ultimately return a `_replace_func` resultant function (a function that only takes a string)
 * 
 */
function _map_replace_func(repl_func) {
  return function (data) {
    return _replace_func(repl_func, data, data.indices[0]);
  }
}

export default function (tweet) {
  return tweet.entities.hashtags.map(_map_replace_func(_replace_hashtag)) // First array of `_replace_func`s
            .concat(tweet.entities.urls.map(_map_replace_func(_replace_url))) // append more
            .concat(tweet.entities.user_mentions.map(_map_replace_func(_replace_mention))) // ...MOAR!!!
            .sort(function (a, b) { return b.weight - a.weight; }) // Sort execution from right to left.
            .reduce(function(tweet, replacer) { return replacer(tweet); }, tweet.text); // Finally, apply all `_replace_func`s iteratively on `tweet.text`.
}