
var shuffleSequence = seq(
                             "consent",
                            //"instructions",
                              "story", "test",
                             //"finished",
                             "subj_info", "sr", "code"
                            );

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "Message", {
        hideProgressBar: false,
        transfer: "click",
    },
    "Question", {
        hideProgressBar: false,
    },
    "Form", {
        hideProgressBar: false,
        continueOnReturn: true,
        saveReactionTime: true,
    },

];

var manualSendResults = true;

var items = [

    ["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],

    ["setcounter", "__SetCounter__", { }],

    ["instructions", "Form", {html: {include: 'instructions.html'}}],

    ["completed", "Form", {html: {include: 'completion_message.html'}}],

    [["story", 1], "Form", {html: {include: 'John_bomb_belief_story_pillow.html'}}],
    [["story", 1], "Form", {html: {include: 'John_bomb_fact_story_pillow.html'}}],

    [["story", 2], "Form", {html: {include: 'Mary_bomb_belief_story_pillow.html'}}],
    [["story", 2], "Form", {html: {include: 'Mary_bomb_fact_story_pillow.html'}}],

    //[["story", 1], "Form", {html: {include: 'John_bomb_belief_story_bomb.html'}}],
    //[["story", 1], "Form", {html: {include: 'John_bomb_fact_story_bomb.html'}}],

    //[["story", 2], "Form", {html: {include: 'Mary_bomb_belief_story_bomb.html'}}],
    //[["story", 2], "Form", {html: {include: 'Mary_bomb_fact_story_bomb.html'}}],

    [["test", [3,1]], "Form", html: {include: 'John_fact_question.html'}}]
    [["test", [3,1]], "Form", html: {include: 'John_belief_question.html'}}]

    [["test", [4,2]], "Form", html: {include: 'Mary_fact_question.html'}}]
    [["test", [4,2]], "Form", html: {include: 'Mary_belief_question.html'}}]

    ["consent", "Form", {html: {include: 'consent.html'}}],

    ["subj_info", "Form", {html: {include: 'subject_info.html'}}],

    ["code", "Form", {html: {include: 'code.html'}}],


];
