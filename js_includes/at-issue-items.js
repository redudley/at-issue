
var shuffleSequence = seq(
                             ??"consent",
                            //"instructions",
                              "story",
                              //"test",
                             //"completed",
                             //"subj_info",
                             "sr", "code"
                            );

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence.",
    },
    "Form", {
        hideProgressBar: true,
        //continueOnReturn: true,
        //saveReactionTime: true,
    },
];

var manualSendResults = true;

var items = [

    ["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],

    ["setcounter", "__SetCounter__", { }],

    //["instructions", "Form", {html: {include: 'instructions.html'}}],

    //["completed", "Form", {html: {include: 'completion_message.html'}}],

    [["story", 1], "Form", {html: {include: 'John_bomb_belief_story_pillow.html'}},
                            "Form", {html: {include: 'John_fact_question.html'}}], //4 - mismatch: belief QUD, fact is at issue in question
    [["story", 1], "Form", {html: {include: 'John_bomb_fact_story_pillow.html'}},
                            "Form", {html: {include: 'John_fact_question.html'}}], //5 - match: fact QUD, fact is at issue in question

    [["story", 1], "Form", {html: {include: 'John_bomb_belief_story_pillow.html'}},
                            "Form", {html: {include: 'John_belief_question.html'}}], //6 - match: belief QUD, belief is at issue in question
    [["story", 1], "Form", {html: {include: 'John_bomb_fact_story_pillow.html'}},
                            "Form", {html: {include: 'John_belief_question.html'}}], //7 - mismatch: fact QUD, belief is at issue in question

    [["story", 1], "Form", {html: {include: 'Mary_bomb_belief_story_pillow.html'}},
                            "Form", {html: {include: 'Mary_fact_question.html'}}], //8 - mismatch: belief QUD, fact is at issue in question
    [["story", 1], "Form", {html: {include: 'Mary_bomb_fact_story_pillow.html'}},
                            "Form", {html: {include: 'Mary_fact_question.html'}}], //9 - match: fact QUD, fact is at issue in question

    [["story", 1], "Form", {html: {include: 'Mary_bomb_belief_story_pillow.html'}},
                            "Form", {html: {include: 'Mary_belief_question.html'}}], //10 - match: belief QUD, belief is at issue in question
    [["story", 1], "Form", {html: {include: 'Mary_bomb_fact_story_pillow.html'}},
                            "Form", {html: {include: 'Mary_belief_question.html'}}], //11 - mismatch: fact QUD, belief is at issue in question



    //[["test", [3,1]], "Form", html: {include: 'John_fact_question.html'}}],
    //[["test", [3,1]], "Form", html: {include: 'John_belief_question.html'}}],

    //[["test", [4,2]], "Form", html: {include: 'Mary_fact_question.html'}}],
    //[["test", [4,2]], "Form", html: {include: 'Mary_belief_question.html'}}],

    ["consent", "Form", {html: {include: 'consent.html'}}],

    ["subj_info", "Form", {html: {include: 'subject_info.html'}}],

    ["code", "Form", {html: {include: 'code.html'}}],


];
