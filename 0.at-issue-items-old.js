
var shuffleSequence = seq(
                             "consent",
                             "instructions",
                             "story",
                             "control",
                             "subj_info", "sr", "code"
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

    ["consent", "Form", {html: {include: 'consent.html'}}], //3

    ["instructions", "Form", {html: {include: 'instructions.html'}}], //4

    [["story", 1], "Form", {html: {include: 'John_bomb_belief_story_pillow.html'}},
                            "Form", {html: {include: 'John_fact_question.html'}}], //5 - mismatch: belief QUD, fact is at issue in question
    [["story", 1], "Form", {html: {include: 'John_bomb_fact_story_pillow.html'}},
                            "Form", {html: {include: 'John_fact_question.html'}}], //6 - match: fact QUD, fact is at issue in question

    [["story", 1], "Form", {html: {include: 'John_bomb_belief_story_pillow.html'}},
                            "Form", {html: {include: 'John_belief_question.html'}}], //7 - match: belief QUD, belief is at issue in question
    [["story", 1], "Form", {html: {include: 'John_bomb_fact_story_pillow.html'}},
                            "Form", {html: {include: 'John_belief_question.html'}}], //8 - mismatch: fact QUD, belief is at issue in question

    [["story", 1], "Form", {html: {include: 'Mary_bomb_belief_story_pillow.html'}},
                            "Form", {html: {include: 'Mary_fact_question.html'}}], //9 - mismatch: belief QUD, fact is at issue in question
    [["story", 1], "Form", {html: {include: 'Mary_bomb_fact_story_pillow.html'}},
                            "Form", {html: {include: 'Mary_fact_question.html'}}], //10 - match: fact QUD, fact is at issue in question

    [["story", 1], "Form", {html: {include: 'Mary_bomb_belief_story_pillow.html'}},
                            "Form", {html: {include: 'Mary_belief_question.html'}}], //11 - match: belief QUD, belief is at issue in question
    [["story", 1], "Form", {html: {include: 'Mary_bomb_fact_story_pillow.html'}},
                            "Form", {html: {include: 'Mary_belief_question.html'}}], //12 - mismatch: fact QUD, belief is at issue in question



    ////////["control", "Form", {html: {include: 'John_belief_control.html'}}]
                        //  -add this to each item above, plus the fact question

    ["subj_info", "Form", {html: {include: 'subject_info.html'}}], //14

    ["code", "Form", {html: {include: 'code.html'}}], //15


];
