var api = 'https://api.wordnik.com/v4/words.json/randomWord';
var key = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

var corpus = 1000;
var def = true;

function getWord(type, c) {
    return $.get(
        api + 
        '?includePartOfSpeech=' + type +
        '&hasDictionaryDef=' + def +
        '&minCorpusCount=' + corpus + 
        '&api_key=' + key
    );    
}

function link(res) {
    var w = res[0].word;
    var upper = w.charAt(0).toUpperCase() + w.slice(1);
    return upper;
}

function generate() {
    $.when(getWord('noun'), getWord('adjective'), getWord('noun'))
    .then(function(a) {
        var sentence = 
            link(a);
        $('#randomWord').html(sentence);
    })
    .fail(function() { $('#randomWord').html("There has been an error in retrieving a random word..."); });
}

$( document ).ready(function() {
    generate();
});
